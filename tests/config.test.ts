import { describe, expect, it } from "vitest";
import {
  getStubConfig,
  normalizeConfig,
  validateConfig
} from "../src/config";
import type { HomeAssistant } from "../src/types";

describe("multi-light config", () => {
  it("normalizes and de-duplicates an arbitrary entity list", () => {
    const config = normalizeConfig({
      type: "custom:multi-light-card",
      entities: ["light.ceiling", "light.ceiling", "light.pantry"]
    });

    expect(config.entities).toEqual(["light.ceiling", "light.pantry"]);
    expect(config.show_group_control).toBe(true);
  });

  it("rejects empty and non-light entity lists", () => {
    expect(() =>
      validateConfig({ type: "custom:multi-light-card", entities: [] })
    ).toThrow("Select at least one light");
    expect(() =>
      validateConfig({
        type: "custom:multi-light-card",
        entities: ["switch.pantry"]
      })
    ).toThrow("must be a light");
  });

  it("creates a five-light editor stub without imposing a runtime limit", () => {
    const hass = {
      states: Object.fromEntries(
        Array.from({ length: 7 }, (_, index) => [
          `light.test_${index}`,
          {
            entity_id: `light.test_${index}`,
            state: "off",
            attributes: {}
          }
        ])
      )
    } as HomeAssistant;

    expect(getStubConfig(hass).entities).toHaveLength(5);
  });
});
