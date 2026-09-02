import "../src/multi-light-card";
import type { MultiLightCard } from "../src/multi-light-card";
import type { HassEntity, HomeAssistant } from "../src/types";
import "./styles.css";

function light(
  entityId: string,
  name: string,
  state: "on" | "off",
  modes: string[],
  brightness?: number,
  extras: HassEntity["attributes"] = {}
): HassEntity {
  return {
    entity_id: entityId,
    state,
    attributes: {
      friendly_name: name,
      supported_color_modes: modes,
      brightness,
      ...extras
    }
  };
}

const states: Record<string, HassEntity> = {
  "light.ceiling": light("light.ceiling", "Ceiling", "on", ["color_temp"], 184, {
    color_temp_kelvin: 3_000,
    min_color_temp_kelvin: 2_000,
    max_color_temp_kelvin: 6_500
  }),
  "light.pendant": light("light.pendant", "Pendant", "on", ["hs", "color_temp"], 122, {
    hs_color: [38, 92],
    rgb_color: [255, 165, 28],
    color_temp_kelvin: 2_600,
    min_color_temp_kelvin: 2_000,
    max_color_temp_kelvin: 6_500
  }),
  "light.bench_strip": light("light.bench_strip", "Bench Strip", "off", ["hs"], 0, {
    hs_color: [278, 32],
    rgb_color: [113, 81, 132]
  }),
  "light.pantry": light("light.pantry", "Pantry", "on", ["onoff"]),
  "light.floor_lamp": light("light.floor_lamp", "Floor Lamp", "on", ["color_temp"], 77, {
    color_temp_kelvin: 2_800,
    min_color_temp_kelvin: 2_000,
    max_color_temp_kelvin: 6_500
  })
};

let hass: HomeAssistant;
const card = document.querySelector("multi-light-card") as MultiLightCard;

function updateCard(): void {
  card.hass = {
    ...hass,
    states: { ...states }
  };
}

hass = {
  states,
  formatEntityName(state) {
    return state.attributes.friendly_name ?? state.entity_id;
  },
  async callService(_domain, service, serviceData) {
    const entityIds = Array.isArray(serviceData?.entity_id)
      ? serviceData.entity_id
      : [serviceData?.entity_id];

    for (const entityId of entityIds) {
      if (typeof entityId !== "string") continue;
      const state = states[entityId];
      if (!state) continue;
      if (service === "turn_off") state.state = "off";
      if (service === "turn_on") {
        state.state = "on";
        if (typeof serviceData?.brightness_pct === "number") {
          state.attributes.brightness = Math.round(
            (serviceData.brightness_pct / 100) * 255
          );
        }
        if (typeof serviceData?.color_temp_kelvin === "number") {
          state.attributes.color_temp_kelvin =
            serviceData.color_temp_kelvin;
        }
      }
    }
    updateCard();
  }
};

card.setConfig({
  type: "custom:multi-light-card",
  title: "Lighting",
  entities: [
    "light.ceiling",
    "light.pendant",
    "light.bench_strip",
    "light.pantry",
    "light.floor_lamp"
  ]
});
updateCard();
