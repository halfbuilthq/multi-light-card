import { describe, expect, it } from "vitest";
import type { HassEntity } from "../src/types";
import {
  averageBrightness,
  brightnessPercent,
  lightAppearance,
  supportsBrightness,
  supportsColor,
  supportsColorTemperature
} from "../src/values";

function state(
  mode: string,
  brightness?: number,
  status = "on"
): HassEntity {
  return {
    entity_id: `light.${mode}`,
    state: status,
    attributes: {
      supported_color_modes: [mode],
      brightness
    }
  };
}

describe("light capabilities", () => {
  it("hides dimming and colour controls for on/off-only lights", () => {
    const onOff = state("onoff");
    expect(supportsBrightness(onOff)).toBe(false);
    expect(supportsColor(onOff)).toBe(false);
    expect(supportsColorTemperature(onOff)).toBe(false);
  });

  it("detects brightness, temperature and full colour independently", () => {
    expect(supportsBrightness(state("brightness"))).toBe(true);
    expect(supportsColorTemperature(state("color_temp"))).toBe(true);
    expect(supportsColor(state("hs"))).toBe(true);
  });

  it("converts Home Assistant brightness to a percentage", () => {
    expect(brightnessPercent(state("brightness", 128))).toBe(50);
  });

  it("averages only active dimmable lights", () => {
    expect(
      averageBrightness([
        state("brightness", 128),
        state("brightness", 255),
        state("brightness", 255, "off"),
        state("onoff")
      ])
    ).toBe(75);
  });

  it("describes warm-white and amber states without a rainbow control", () => {
    const warm = state("color_temp", 128);
    warm.attributes.color_temp_kelvin = 2_800;
    expect(lightAppearance(warm)).toBe("Warm white");

    const amber = state("hs", 128);
    amber.attributes.hs_color = [38, 92];
    expect(lightAppearance(amber)).toBe("Amber");
  });
});
