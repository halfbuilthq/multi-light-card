import type { HomeAssistant, MultiLightCardConfig } from "./types";

export const DEFAULT_CONFIG: Pick<
  MultiLightCardConfig,
  "title" | "show_group_control"
> = {
  title: "Lighting",
  show_group_control: true
};

const FIELD_LABELS: Record<string, string> = {
  title: "Title",
  entities: "Lights",
  show_group_control: "Show whole-room brightness"
};

const FIELD_HELPERS: Record<string, string> = {
  title: "Optional card heading.",
  entities: "Add as many light entities as you need. Their order is preserved.",
  show_group_control:
    "Adjusts all configured dimmable lights together. On/off-only lights are ignored."
};

export function getConfigForm() {
  return {
    schema: [
      { name: "title", selector: { text: {} } },
      {
        name: "entities",
        required: true,
        selector: {
          entity: {
            domain: "light",
            multiple: true,
            reorder: true
          }
        }
      },
      { name: "show_group_control", selector: { boolean: {} } }
    ],
    computeLabel: (schema: { name?: string }) =>
      schema.name ? FIELD_LABELS[schema.name] : undefined,
    computeHelper: (schema: { name?: string }) =>
      schema.name ? FIELD_HELPERS[schema.name] : undefined,
    assertConfig: (config: MultiLightCardConfig) => validateConfig(config)
  };
}

export function validateConfig(config: MultiLightCardConfig): void {
  if (!Array.isArray(config.entities) || config.entities.length === 0) {
    throw new Error("Select at least one light.");
  }

  for (const entityId of config.entities) {
    if (typeof entityId !== "string" || !entityId.startsWith("light.")) {
      throw new Error("Every configured entity must be a light.");
    }
  }
}

export function normalizeConfig(
  config: MultiLightCardConfig
): MultiLightCardConfig {
  const entities = Array.from(
    new Set(
      (Array.isArray(config.entities) ? config.entities : [])
        .filter((entityId): entityId is string => typeof entityId === "string")
        .map((entityId) => entityId.trim())
        .filter(Boolean)
    )
  );

  return {
    ...DEFAULT_CONFIG,
    ...config,
    type: config.type || "custom:multi-light-card",
    entities
  };
}

export function getStubConfig(hass?: HomeAssistant): MultiLightCardConfig {
  const lights = Object.values(hass?.states ?? {})
    .filter((state) => state.entity_id.startsWith("light."))
    .slice(0, 5)
    .map((state) => state.entity_id);

  return normalizeConfig({
    type: "custom:multi-light-card",
    entities: lights
  });
}
