# Group 08 — Launch visibility decision

**Date:** 2026-09-16  
**Status:** PRODUCT/UX DECISION · GROUP 08 STILL ACTIVE · NO CURSOR HANDOFF

## Product Owner decisions

### Language
- Language setting remains visible for MVP.
- Supported languages: Korean / English.
- The existing `언어` row remains in Settings.
- Exact selection interaction / application behavior still needs final Figma lock.

### Theme
- Theme setting is hidden/deferred for MVP.
- Remove the visible `테마` row from the Settings home canonical launch state.
- Do not build a Theme destination screen for current MVP.

### Subscription management
- Keep the `구독 관리` menu row visible in Settings.
- Do not build a subscription-management destination screen at this stage.
- This does not change the current product brief: paid subscription remains outside the current MVP feature scope.
- Because the row remains visible without a destination screen, its exact tap/disabled/future-state presentation must be resolved before Group 08 can be finally closed; a visually tappable row that leads nowhere is not acceptable as a finished interaction.

## Remaining Group 08 closeout work

1. Lock and implement the Korean/English language-selection interaction in Figma.
2. Remove `테마` from the canonical Settings home launch state and reflow spacing/layout.
3. Resolve the visible `구독 관리` row behavior while no destination screen exists.
4. Complete Group 08 structural QA: Auto Layout / Fill-Hug-Fixed intent / spacing and token bindings.
5. Move remaining active legacy masters used by Group 08 from `MVP_공용_UI` into `Common_Component` without detaching or duplicating instances where possible.
6. Normalize canonical Group 08 internal Figma layer/component naming to English while preserving user-facing Korean copy.
7. Run targeted screenshot and structural regression QA for the changed Settings / Account screens only.
8. Record final Group 08 closure checkpoint when blockers are cleared.

## Non-blocking release follow-ups

These remain pre-release tasks, not current Figma closeout blockers:
- actual public Terms / Privacy URLs
- exact support-inquiry record / attachment retention period
- external account-deletion request URL
- final timer sound assets / labels

**NO CURSOR IMPLEMENTATION HANDOFF.**
