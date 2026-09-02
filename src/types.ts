export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    icon?: string;
    brightness?: number;
    color_temp_kelvin?: number;
    min_color_temp_kelvin?: number;
    max_color_temp_kelvin?: number;
    rgb_color?: [number, number, number];
    hs_color?: [number, number];
    supported_color_modes?: string[];
    [key: string]: unknown;
  };
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>
  ): Promise<unknown>;
  formatEntityName?(
    state: HassEntity,
    parts?: Array<{ type: "area" | "device" | "entity" | "floor" }>,
    options?: { separator?: string }
  ): string;
}

export interface MultiLightCardConfig {
  type: string;
  title?: string;
  entities: string[];
  show_group_control?: boolean;
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      preview?: boolean;
      description?: string;
      documentationURL?: string;
    }>;
  }

  interface HTMLElementTagNameMap {
    "multi-light-card": HTMLElement;
  }
}
