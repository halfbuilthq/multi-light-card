import { describe, expect, it } from "vitest";
import { cardStyles } from "../src/styles";

describe("theme and input accessibility", () => {
  it("uses Home Assistant's current card background with a legacy fallback", () => {
    expect(cardStyles.cssText).toContain(
      "var(--ha-card-background, var(--card-background-color, #191b1d))"
    );
    expect(cardStyles.cssText).not.toContain("var(--ha-card-background, #191b1d)");
  });

  it("keeps keyboard focus visible on native light controls", () => {
    expect(cardStyles.cssText).toContain('input[type="range"]:focus-visible');
    expect(cardStyles.cssText).toContain(".power:focus-visible");
    expect(cardStyles.cssText).toContain(".entity-button:focus-visible");
  });
});
