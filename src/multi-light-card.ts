import {
  mdiCeilingLightOutline,
  mdiCeilingLightMultipleOutline,
  mdiFloorLampOutline,
  mdiLedStripVariant,
  mdiLightbulbOnOutline,
  mdiLightbulbOutline
} from "@mdi/js";
import { LitElement, html, nothing, svg } from "lit";
import {
  getConfigForm,
  getStubConfig,
  normalizeConfig,
  validateConfig
} from "./config";
import { cardStyles } from "./styles";
import type {
  HassEntity,
  HomeAssistant,
  MultiLightCardConfig
} from "./types";
import {
  averageBrightness,
  brightnessPercent,
  colorTemperature,
  entity,
  lightAppearance,
  lightColor,
  lightName,
  maxColorTemperature,
  minColorTemperature,
  supportsBrightness,
  supportsColor,
  supportsColorTemperature
} from "./values";

function lightIcon(state: HassEntity | undefined): string {
  const identity = `${state?.entity_id ?? ""} ${state?.attributes.friendly_name ?? ""}`.toLowerCase();
  if (identity.includes("strip") || identity.includes("led")) {
    return mdiLedStripVariant;
  }
  if (identity.includes("floor") || identity.includes("lamp")) {
    return mdiFloorLampOutline;
  }
  if (
    identity.includes("ceiling") ||
    identity.includes("downlight")
  ) {
    return mdiCeilingLightMultipleOutline;
  }
  if (identity.includes("pendant")) {
    return mdiCeilingLightOutline;
  }
  return mdiLightbulbOutline;
}

function stateClass(state: HassEntity | undefined): string {
  if (!state || ["unavailable", "unknown"].includes(state.state)) {
    return "unavailable";
  }
  return state.state === "on" ? "on" : "off";
}

export class MultiLightCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _pending: { state: true },
    _masterValue: { state: true }
  };

  static styles = cardStyles;

  hass?: HomeAssistant;
  private _config?: MultiLightCardConfig;
  private _pending = new Set<string>();
  private _masterValue?: number;

  static getConfigForm() {
    return getConfigForm();
  }

  static getStubConfig(hass?: HomeAssistant) {
    return getStubConfig(hass);
  }

  setConfig(config: MultiLightCardConfig): void {
    validateConfig(config);
    this._config = normalizeConfig({ ...config });
    this._masterValue = undefined;
  }

  getCardSize(): number {
    const count = this._config?.entities.length ?? 1;
    return Math.max(3, Math.ceil(2.2 + count * 1.55));
  }

  getGridOptions() {
    return {
      columns: 6,
      min_columns: 3
    };
  }

  private _configuredStates(): HassEntity[] {
    return (this._config?.entities ?? [])
      .map((entityId) => entity(this.hass, entityId))
      .filter((state): state is HassEntity => Boolean(state));
  }

  private _openMoreInfo(entityId: string): void {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true
      })
    );
  }

  private async _run(
    key: string,
    service: string,
    serviceData: Record<string, unknown>
  ): Promise<void> {
    if (!this.hass || this._pending.has(key)) return;
    this._pending = new Set(this._pending).add(key);
    try {
      await this.hass.callService("light", service, serviceData);
    } finally {
      const next = new Set(this._pending);
      next.delete(key);
      this._pending = next;
    }
  }

  private _toggle(state: HassEntity): void {
    const service = state.state === "on" ? "turn_off" : "turn_on";
    void this._run(state.entity_id, service, { entity_id: state.entity_id });
  }

  private _setBrightness(state: HassEntity, value: number): void {
    void this._run(state.entity_id, "turn_on", {
      entity_id: state.entity_id,
      brightness_pct: value
    });
  }

  private _setColorTemperature(state: HassEntity, value: number): void {
    void this._run(state.entity_id, "turn_on", {
      entity_id: state.entity_id,
      color_temp_kelvin: value
    });
  }

  private _setMasterBrightness(value: number): void {
    const entityIds = this._configuredStates()
      .filter(supportsBrightness)
      .map((state) => state.entity_id);
    if (entityIds.length === 0) return;
    this._masterValue = value;
    void this._run("group-brightness", "turn_on", {
      entity_id: entityIds,
      brightness_pct: value
    });
  }

  private _turnAllOff(): void {
    const entityIds = this._config?.entities ?? [];
    if (entityIds.length === 0) return;
    void this._run("all-off", "turn_off", { entity_id: entityIds });
  }

  private _renderIcon(path: string) {
    return svg`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d=${path}></path>
      </svg>
    `;
  }

  private _renderLight(entityId: string) {
    const state = entity(this.hass, entityId);
    const rowState = stateClass(state);
    const unavailable = rowState === "unavailable";
    const isOn = rowState === "on";
    const dimmable = supportsBrightness(state);
    const colorTemp = supportsColorTemperature(state);
    const fullColor = supportsColor(state);
    const brightness = brightnessPercent(state);
    const minimumTemperature = minColorTemperature(state);
    const maximumTemperature = maxColorTemperature(state);
    const temperature = colorTemperature(state);
    const temperaturePosition =
      ((temperature - minimumTemperature) /
        Math.max(1, maximumTemperature - minimumTemperature)) *
      100;
    const name = lightName(this.hass, state, entityId);
    const appearance = lightAppearance(state);
    const pending = this._pending.has(entityId);
    const stateLabel = unavailable ? "Unavailable" : isOn ? "On" : "Off";

    return html`
      <section class="light-row ${rowState}" aria-label=${name}>
        <div class="row-main">
          <div class="light-icon">${this._renderIcon(lightIcon(state))}</div>
          <button
            class="entity-button light-copy"
            type="button"
            @click=${() => this._openMoreInfo(entityId)}
            aria-label="Open ${name} details"
          >
            <div class="light-name">${name}</div>
            <div class="status-line">
              <span class="status-dot" aria-hidden="true"></span>
              <span>${stateLabel}</span>
              ${dimmable && isOn
                ? html`
                    <span class="status-separator">·</span>
                    <span>${brightness}%</span>
                  `
                : nothing}
              ${appearance && isOn
                ? html`
                    <span class="status-separator">·</span>
                    <span>${appearance}</span>
                  `
                  : nothing}
            </div>
          </button>
        </div>

        <div class="row-controls">
          ${dimmable
            ? html`
                <label class="brightness-control">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    .value=${String(brightness || 1)}
                    style="--range-value: ${brightness}%"
                    ?disabled=${unavailable || !isOn || pending}
                    aria-label="${name} brightness"
                    @change=${(event: Event) =>
                      state &&
                      this._setBrightness(
                        state,
                        Number((event.target as HTMLInputElement).value)
                      )}
                  />
                  <output>${brightness}%</output>
                </label>
              `
            : nothing}

          ${fullColor || colorTemp
            ? html`
                <div class="colour-controls">
                  ${fullColor
                    ? html`
                        <button
                          class="colour-swatch"
                          type="button"
                          style="--swatch: ${lightColor(state)}"
                          ?disabled=${unavailable || !isOn}
                          @click=${() => this._openMoreInfo(entityId)}
                          aria-label="Choose ${name} colour"
                          title="Choose colour"
                        >
                          <span aria-hidden="true"></span>
                        </button>
                      `
                    : nothing}
                  ${colorTemp
                    ? html`
                        <input
                          class="temperature"
                          type="range"
                          min=${minimumTemperature}
                          max=${maximumTemperature}
                          step="50"
                          .value=${String(temperature)}
                          style="--range-value: ${temperaturePosition}%"
                          ?disabled=${unavailable || !isOn || pending}
                          aria-label="${name} colour temperature"
                          title="Colour temperature"
                          @change=${(event: Event) =>
                            state &&
                            this._setColorTemperature(
                              state,
                              Number((event.target as HTMLInputElement).value)
                            )}
                        />
                      `
                    : nothing}
                </div>
              `
            : nothing}

          <button
            class="power"
            type="button"
            role="switch"
            aria-checked=${isOn ? "true" : "false"}
            aria-label="Turn ${name} ${isOn ? "off" : "on"}"
            ?disabled=${unavailable || pending}
            @click=${() => state && this._toggle(state)}
          ></button>
        </div>
      </section>
    `;
  }

  protected render() {
    const config = this._config;
    if (!config) return nothing;

    const configuredStates = this._configuredStates();
    const onCount = configuredStates.filter((state) => state.state === "on").length;
    const dimmableStates = configuredStates.filter(supportsBrightness);
    const groupBrightness =
      this._masterValue ?? averageBrightness(configuredStates);
    const total = config.entities.length;

    return html`
      <ha-card>
        <div class="card">
          <header class="header">
            <div class="title-group">
              <div class="header-icon">
                ${this._renderIcon(mdiLightbulbOnOutline)}
              </div>
              <div class="title-copy">
                <h1>${config.title || "Lighting"}</h1>
                <p class="subtitle">${onCount} of ${total} on</p>
              </div>
            </div>
            <button
              class="all-off"
              type="button"
              ?disabled=${onCount === 0 || this._pending.has("all-off")}
              @click=${this._turnAllOff}
            >
              All off
            </button>
          </header>

          ${config.show_group_control !== false && dimmableStates.length > 0
            ? html`
                <section class="group-control" aria-label="Whole-room brightness">
                  <div class="group-heading">
                    <span>Whole room</span>
                    <output>${groupBrightness}%</output>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    .value=${String(groupBrightness || 1)}
                    style="--range-value: ${groupBrightness}%"
                    ?disabled=${this._pending.has("group-brightness")}
                    aria-label="Whole-room brightness"
                    @input=${(event: Event) => {
                      this._masterValue = Number(
                        (event.target as HTMLInputElement).value
                      );
                    }}
                    @change=${(event: Event) =>
                      this._setMasterBrightness(
                        Number((event.target as HTMLInputElement).value)
                      )}
                  />
                </section>
              `
            : nothing}

          <div class="lights">
            ${config.entities.map((entityId) => this._renderLight(entityId))}
          </div>
        </div>
      </ha-card>
    `;
  }
}

if (!customElements.get("multi-light-card")) {
  customElements.define("multi-light-card", MultiLightCard);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "multi-light-card")) {
  window.customCards.push({
    type: "multi-light-card",
    name: "Multi-Light Card",
    preview: true,
    description:
      "Tasteful, capability-aware controls for any number of Home Assistant lights.",
    documentationURL: "https://github.com/halfbuilthq/multi-light-card"
  });
}
