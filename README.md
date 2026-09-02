# Multi-Light Card for Home Assistant

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
- HACS-compatible packaging

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

Until the card is included in the default HACS catalogue:

1. Open HACS and select **Custom repositories**.
2. Add `https://github.com/halfbuilthq/multi-light-card` as a **Dashboard**
   repository.
3. Install **Multi-Light Card** and reload Home Assistant.
4. Add the card from Home Assistant's card picker.

## Manual installation

1. Copy `dist/multi-light-card.js` to `<config>/www/multi-light-card.js`.
2. Add `/local/multi-light-card.js` as a JavaScript module dashboard resource.
3. Add **Multi-Light Card** from Home Assistant's card picker.

## License

[MIT](LICENSE)
