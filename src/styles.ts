import { css } from "lit";

export const cardStyles = css`
  :host {
    --light-accent: var(--state-light-active-color, #2eb7b4);
    --light-accent-deep: #138e8d;
    --light-warm: #ffbd52;
    --light-soft: color-mix(in srgb, var(--light-accent) 10%, transparent);
    display: block;
    container-type: inline-size;
  }

  * {
    box-sizing: border-box;
  }

  button,
  input {
    font: inherit;
  }

  button {
    color: inherit;
  }

  ha-card {
    display: block;
    overflow: hidden;
    border-radius: var(--ha-card-border-radius, 24px);
    color: var(--primary-text-color, #eef2f4);
    background:
      radial-gradient(circle at 92% 2%, var(--light-soft), transparent 34%),
      var(--ha-card-background, var(--card-background-color, #191b1d));
  }

  .card {
    padding: clamp(18px, 4.2cqw, 30px);
  }

  h1,
  p {
    margin: 0;
  }

  .header,
  .title-group,
  .row-main,
  .status-line,
  .row-controls,
  .brightness-control,
  .colour-controls {
    display: flex;
    align-items: center;
  }

  .header {
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 26px;
  }

  .title-group {
    min-width: 0;
    gap: 14px;
  }

  .header-icon,
  .light-icon {
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--light-accent) 20%, transparent);
    color: var(--light-accent);
    background: var(--light-soft);
  }

  .header-icon {
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }

  .header-icon svg {
    width: 29px;
    height: 29px;
  }

  .light-icon {
    width: 46px;
    height: 46px;
    border-radius: 15px;
  }

  .light-icon svg {
    width: 25px;
    height: 25px;
  }

  svg {
    fill: currentColor;
  }

  .title-copy,
  .light-copy {
    min-width: 0;
  }

  h1 {
    overflow: hidden;
    font-size: clamp(23px, 5cqw, 30px);
    font-weight: 760;
    letter-spacing: -0.75px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .subtitle {
    margin-top: 3px;
    color: var(--secondary-text-color, #aeb4ba);
    font-size: 14px;
  }

  .all-off {
    min-height: 38px;
    padding: 0 16px;
    border: 1px solid color-mix(in srgb, var(--light-accent) 76%, transparent);
    border-radius: 999px;
    color: var(--light-accent);
    background: transparent;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 160ms ease,
      transform 160ms ease;
  }

  .all-off:hover:not(:disabled) {
    background: var(--light-soft);
  }

  .all-off:active:not(:disabled) {
    transform: scale(0.97);
  }

  .all-off:disabled {
    cursor: default;
    opacity: 0.42;
  }

  .group-control {
    margin-bottom: 8px;
    padding: 24px 20px 23px;
    border: 1px solid color-mix(in srgb, var(--divider-color, #404347) 80%, transparent);
    border-radius: 17px;
    background: color-mix(
      in srgb,
      var(--ha-card-background, var(--card-background-color, #191b1d)) 96%,
      var(--light-accent) 4%
    );
  }

  .group-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: 720;
  }

  .group-heading output {
    color: var(--light-accent);
    font-variant-numeric: tabular-nums;
  }

  .lights {
    margin: 0 calc(clamp(18px, 4.2cqw, 30px) * -1)
      calc(clamp(18px, 4.2cqw, 30px) * -1);
  }

  .light-row {
    display: grid;
    grid-template-columns: minmax(178px, 1fr) minmax(210px, 1.05fr);
    gap: clamp(14px, 3cqw, 28px);
    align-items: center;
    min-height: 124px;
    padding: 17px clamp(18px, 4.2cqw, 30px);
    border-top: 1px solid var(--divider-color, #33363a);
  }

  .light-row.off .light-icon,
  .light-row.unavailable .light-icon {
    color: var(--secondary-text-color, #8f969d);
    background: color-mix(
      in srgb,
      var(--secondary-text-color, #8f969d) 8%,
      transparent
    );
  }

  .light-row.unavailable {
    opacity: 0.62;
  }

  .light-row.off .brightness-control,
  .light-row.off .colour-controls {
    opacity: 0.56;
  }

  .light-row.off input:disabled {
    opacity: 0.75;
  }

  .light-row.off .colour-swatch:disabled {
    opacity: 0.9;
  }

  .row-main {
    min-width: 0;
    gap: 14px;
  }

  .entity-button {
    display: block;
    min-width: 0;
    padding: 0;
    border: 0;
    text-align: left;
    background: transparent;
    cursor: pointer;
  }

  .light-name {
    overflow: hidden;
    font-size: 17px;
    font-weight: 720;
    letter-spacing: -0.25px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .status-line {
    gap: 7px;
    margin-top: 4px;
    color: var(--secondary-text-color, #aeb4ba);
    font-size: 13px;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--light-accent);
  }

  .off .status-dot,
  .unavailable .status-dot {
    background: var(--secondary-text-color, #8f969d);
  }

  .status-separator {
    opacity: 0.55;
  }

  .row-controls {
    min-width: 0;
    justify-content: flex-end;
    gap: clamp(11px, 2.6cqw, 20px);
  }

  .brightness-control {
    min-width: 116px;
    flex: 1 1 170px;
    gap: 10px;
  }

  .brightness-control output {
    width: 36px;
    flex: 0 0 auto;
    color: var(--secondary-text-color, #aeb4ba);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  input[type="range"] {
    width: 100%;
    height: 28px;
    margin: 0;
    background: transparent;
    cursor: pointer;
    appearance: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      var(--range-active, var(--light-accent)) 0 var(--range-value, 0%),
      color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 24%, transparent)
        var(--range-value, 0%) 100%
    );
  }

  input[type="range"]::-moz-range-track {
    height: 6px;
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--secondary-text-color, #9aa1a8) 24%,
      transparent
    );
  }

  input[type="range"]::-moz-range-progress {
    height: 6px;
    border-radius: 999px;
    background: var(--range-active, var(--light-accent));
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    margin-top: -6px;
    border: 2px solid color-mix(in srgb, white 46%, transparent);
    border-radius: 50%;
    background: var(--range-active, var(--light-accent));
    box-shadow: 0 2px 8px color-mix(in srgb, black 42%, transparent);
    appearance: none;
  }

  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid color-mix(in srgb, white 46%, transparent);
    border-radius: 50%;
    background: var(--range-active, var(--light-accent));
    box-shadow: 0 2px 8px color-mix(in srgb, black 42%, transparent);
  }

  input[type="range"]:focus-visible {
    outline: 2px solid var(--light-accent);
    outline-offset: 3px;
    border-radius: 999px;
  }

  input[type="range"]:disabled {
    cursor: default;
    opacity: 0.32;
  }

  .colour-controls {
    flex: 0 0 auto;
    gap: 9px;
  }

  .colour-swatch {
    width: 34px;
    height: 34px;
    padding: 4px;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 34%, transparent);
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }

  .colour-swatch span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--swatch);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, white 30%, transparent);
  }

  .temperature {
    width: clamp(68px, 12cqw, 96px) !important;
    --range-active: var(--light-warm);
  }

  .temperature::-webkit-slider-runnable-track {
    height: 22px !important;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 24%, transparent);
    background: linear-gradient(90deg, #ffb64b, #fff1cb 54%, #dcecff) !important;
  }

  .temperature::-moz-range-track {
    height: 22px !important;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 24%, transparent);
    background: linear-gradient(90deg, #ffb64b, #fff1cb 54%, #dcecff) !important;
  }

  .temperature::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    border-color: white;
    background: transparent;
    box-shadow: 0 0 0 1px color-mix(in srgb, black 52%, transparent);
  }

  .temperature::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-color: white;
    background: transparent;
    box-shadow: 0 0 0 1px color-mix(in srgb, black 52%, transparent);
  }

  .power {
    position: relative;
    width: 48px;
    height: 30px;
    flex: 0 0 auto;
    padding: 0;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 38%, transparent);
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--secondary-text-color, #9aa1a8) 14%,
      transparent
    );
    cursor: pointer;
    transition:
      background 160ms ease,
      border-color 160ms ease;
  }

  .power::after {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #f4f7f7;
    box-shadow: 0 2px 6px color-mix(in srgb, black 36%, transparent);
    content: "";
    transition: transform 180ms ease;
  }

  .power[aria-checked="true"] {
    border-color: color-mix(in srgb, var(--light-accent) 74%, transparent);
    background: var(--light-accent);
  }

  .power[aria-checked="true"]::after {
    transform: translateX(18px);
  }

  .power:focus-visible,
  .colour-swatch:focus-visible,
  .all-off:focus-visible,
  .entity-button:focus-visible {
    outline: 2px solid var(--light-accent);
    outline-offset: 3px;
  }

  .power:disabled,
  .colour-swatch:disabled {
    cursor: default;
    opacity: 0.42;
  }

  @container (max-width: 560px) {
    .light-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 13px;
      min-height: 0;
      padding-block: 16px;
    }

    .row-controls {
      padding-left: 60px;
    }
  }

  @container (max-width: 390px) {
    .card {
      padding: 16px;
    }

    .header-icon {
      width: 46px;
      height: 46px;
    }

    .all-off {
      min-height: 34px;
      padding-inline: 12px;
      font-size: 13px;
    }

    .group-control {
      padding: 15px 16px;
    }

    .lights {
      margin-inline: -16px;
      margin-bottom: -16px;
    }

    .light-row {
      padding-inline: 16px;
    }

    .row-controls {
      flex-wrap: wrap;
      padding-left: 0;
    }

    .brightness-control {
      order: 2;
      min-width: calc(100% - 59px);
    }

    .colour-controls {
      margin-left: auto;
    }

    .temperature {
      width: 76px !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
