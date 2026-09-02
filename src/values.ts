import type { HassEntity, HomeAssistant } from "./types";

const COLOR_MODES = new Set(["hs", "xy", "rgb", "rgbw", "rgbww"]);
const BRIGHTNESS_MODES = new Set([
  "brightness",
  "color_temp",
  "hs",
  "xy",
  "rgb",
  "rgbw",
  "rgbww",
  "white"
]);

export function entity(
  hass: HomeAssistant | undefined,
  entityId: string
): HassEntity | undefined {
  return hass?.states[entityId];
}

export function colorModes(state: HassEntity | undefined): string[] {
  const modes = state?.attributes.supported_color_modes;
  return Array.isArray(modes)
    ? modes.filter((mode): mode is string => typeof mode === "string")
    : [];
}

export function supportsBrightness(state: HassEntity | undefined): boolean {
  const modes = colorModes(state);
  return (
    typeof state?.attributes.brightness === "number" ||
    modes.some((mode) => BRIGHTNESS_MODES.has(mode))
  );
}

export function supportsColorTemperature(
  state: HassEntity | undefined
): boolean {
  return colorModes(state).includes("color_temp");
}

export function supportsColor(state: HassEntity | undefined): boolean {
  return colorModes(state).some((mode) => COLOR_MODES.has(mode));
}

export function brightnessPercent(state: HassEntity | undefined): number {
  const brightness = Number(state?.attributes.brightness);
  if (!Number.isFinite(brightness)) {
    return state?.state === "on" && supportsBrightness(state) ? 100 : 0;
  }
  return Math.round((Math.min(255, Math.max(0, brightness)) / 255) * 100);
}

export function lightName(
  hass: HomeAssistant | undefined,
  state: HassEntity | undefined,
  entityId: string
): string {
  if (hass?.formatEntityName && state) {
    try {
      return hass.formatEntityName(state, [{ type: "entity" }]);
    } catch {
      // Fall through for older or partially mocked Home Assistant versions.
    }
  }

  return (
    state?.attributes.friendly_name ??
    entityId
      .split(".")
      .pop()
      ?.replace(/_/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ??
    entityId
  );
}

export function minColorTemperature(state: HassEntity | undefined): number {
  const value = Number(state?.attributes.min_color_temp_kelvin);
  return Number.isFinite(value) ? value : 2_000;
}

export function maxColorTemperature(state: HassEntity | undefined): number {
  const value = Number(state?.attributes.max_color_temp_kelvin);
  return Number.isFinite(value) ? value : 6_500;
}

export function colorTemperature(state: HassEntity | undefined): number {
  const min = minColorTemperature(state);
  const max = maxColorTemperature(state);
  const value = Number(state?.attributes.color_temp_kelvin);
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : 3_000;
}

function kelvinToRgb(kelvin: number): [number, number, number] {
  const temperature = kelvin / 100;
  const red =
    temperature <= 66
      ? 255
      : 329.698727446 * Math.pow(temperature - 60, -0.1332047592);
  const green =
    temperature <= 66
      ? 99.4708025861 * Math.log(temperature) - 161.1195681661
      : 288.1221695283 * Math.pow(temperature - 60, -0.0755148492);
  const blue =
    temperature >= 66
      ? 255
      : temperature <= 19
        ? 0
        : 138.5177312231 * Math.log(temperature - 10) - 305.044792731;
  return [red, green, blue].map((channel) =>
    Math.round(Math.min(255, Math.max(0, channel)))
  ) as [number, number, number];
}

export function lightColor(state: HassEntity | undefined): string {
  const rgb = state?.attributes.rgb_color;
  if (
    Array.isArray(rgb) &&
    rgb.length === 3 &&
    rgb.every((channel) => Number.isFinite(Number(channel)))
  ) {
    return `rgb(${rgb.map(Number).join(", ")})`;
  }

  const hs = state?.attributes.hs_color;
  if (
    Array.isArray(hs) &&
    hs.length === 2 &&
    hs.every((channel) => Number.isFinite(Number(channel)))
  ) {
    return `hsl(${Number(hs[0])} ${Number(hs[1])}% 52%)`;
  }

  const [red, green, blue] = kelvinToRgb(colorTemperature(state));
  return `rgb(${red}, ${green}, ${blue})`;
}

export function lightAppearance(state: HassEntity | undefined): string {
  if (supportsColor(state)) {
    const hue = Number(state?.attributes.hs_color?.[0]);
    const saturation = Number(state?.attributes.hs_color?.[1]);
    if (Number.isFinite(hue) && Number.isFinite(saturation) && saturation >= 18) {
      if (hue < 16 || hue >= 345) return "Red";
      if (hue < 34) return "Orange";
      if (hue < 52) return "Amber";
      if (hue < 75) return "Yellow";
      if (hue < 165) return "Green";
      if (hue < 200) return "Aqua";
      if (hue < 255) return "Blue";
      if (hue < 300) return "Purple";
      return "Pink";
    }
    return "Colour";
  }

  if (supportsColorTemperature(state)) {
    const kelvin = colorTemperature(state);
    if (kelvin < 3_500) return "Warm white";
    if (kelvin > 5_000) return "Cool white";
    return "Neutral white";
  }

  return "";
}

export function averageBrightness(states: HassEntity[]): number {
  const activeDimmable = states.filter(
    (state) => state.state === "on" && supportsBrightness(state)
  );
  if (activeDimmable.length === 0) return 0;
  return Math.round(
    activeDimmable.reduce(
      (total, state) => total + brightnessPercent(state),
      0
    ) / activeDimmable.length
  );
}
