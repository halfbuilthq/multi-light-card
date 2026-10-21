# Multi-Light Card for Home Assistant

[![HACS Default](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/default)

A calm, capability-aware control card for any number of Home Assistant lights.

![Multi-Light Card preview](docs/multi-light-card-preview.png)

## Features

- Dynamic light list with no fixed entity count
- On/off controls for every configured light
- Brightness controls only for dimmable lights
- Colour-temperature controls only for compatible lights
- Restrained colour swatches that open Home Assistant's full light dialog
- Optional whole-room brightness for all dimmable lights
- Native Home Assistant visual configuration
- Content-driven responsive layout for masonry and sections dashboards
- Available in the default HACS catalogue

## Configuration

```yaml
type: custom:multi-light-card
title: Lighting
entities:
  - light.ceiling
  - light.pendant
  - light.bench_strip
  - light.pantry
  - light.floor_lamp
show_group_control: true
```

Only `entities` is required. Add, remove, and reorder lights using Home
Assistant's visual card editor. The card reads each entity's
`supported_color_modes` and hides controls the light cannot use.

## Development

```sh
npm install
npm run dev
```

Run all tests and build the production bundle:

```sh
npm run check
```

The bundle is emitted to `dist/multi-light-card.js`.

## HACS installation

The card is available in the default HACS catalogue; no custom repository is needed.

[![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=halfbuilthq&repository=multi-light-card&category=plugin)

1. Select the button above, or open **HACS** in Home Assistant.
2. Search for **Multi-Light Card**.
3. Open the card and select **Download**.
4. Refresh your browser, then add **Multi-Light Card** from the dashboard card picker.

For updates, download the latest release when offered in HACS and refresh your
dashboard. HACS may take time to discover a newly published release.

## Manual installation

1. Copy `dist/multi-light-card.js` to `<config>/www/multi-light-card.js`.
2. Add `/local/multi-light-card.js` as a JavaScript module dashboard resource.
3. Add **Multi-Light Card** from Home Assistant's card picker.

## License

[MIT](LICENSE)
