# Changelog

All notable changes to this project are documented here. The project follows
Semantic Versioning.

## [Unreleased]

## [0.1.2] - 2026-11-09

### Maintenance

- Update the Vite development dependency from 7.3.6 to 7.3.7 (#1).
- No card functionality or configuration changes.

## [0.1.1] - 2026-11-01

### Fixed

- Prevent brightness sliders from overlapping long light names near the responsive layout breakpoint.
- Reserve enough room for colour, colour-temperature and power controls on wider cards; stack the control row through 640px.

### Added

- Regression coverage for Home Assistant theme backgrounds and keyboard focus
  treatment on native light controls.

## [0.1.0] - 2026-09-02

### Added

- Capability-aware control of any number of Home Assistant lights.
- Conditional brightness and colour-temperature controls.
- Optional whole-room brightness control.
- Native visual configuration and HACS-compatible packaging.
