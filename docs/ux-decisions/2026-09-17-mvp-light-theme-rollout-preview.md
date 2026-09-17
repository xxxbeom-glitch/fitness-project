# MVP Light Theme Rollout Preview — D / Petrol Teal Tonal

**Status:** APPLIED TO FIGMA FOR PO REVIEW · NOT FINAL VISUAL LOCK
**Date:** 2026-09-17

## Scope

Product Owner explicitly requested applying the previously approved D light-theme rules to the consolidated MVP wireframe set for visual review.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Current consolidated screen page:
- `MVP_전체_와이어프레임` — `34:1076`
- 98 independent screen frames from Groups 01–08
- screens remain independent frames; no group wrapper frame was introduced
- page is visually classified by screen character into A–H labels (base/list/dashboard, detail/history/analysis, input/create/edit/settings, select/filter/replace, empty/error/exception, bottom sheets, popup/menu/toast/timer, dialogs/confirm)

## Light mode implementation

The existing `Colors` variable collection was extended with a `Light` mode rather than recoloring screens one-by-one.

Light baseline:
- Canvas `#F6F7F7`
- Surface `#FFFFFF`
- Subtle Surface `#EFF2F2`
- Border / Subtle `#EAEEED`
- Border / Default Control `#E3E8E7`
- Brand `#218F8A`
- Primary Action / CTA `#1A7E79`
- Primary Soft `#DCEFED`
- Text Primary `#151918`
- Text Secondary `#626866`
- Text Tertiary `#929A98`
- Success `#4F8A61`
- Danger `#C85A64`

Added semantic roles where the previous dark system had overloaded `brand/primary` or generic surface tokens:
- `action/primary`
- `brand/soft`
- `state/success`
- `surface/track`

Dark values for these added semantics preserve the prior dark appearance; Light values map to the approved D palette.

## Surface behavior applied

- all 98 MVP screen roots explicitly use `Colors / Light`
- content cards / grouped list cards use white surface, no outer border, subtle `0 2px 8px` shadow at 5%
- control cells retain explicit control borders where applicable
- CTA/action color is separated from general brand/accent color
- success indicators are separated from interactive brand color
- selected metric segment uses Primary Soft
- progress tracks use a dedicated light neutral track surface
- Workout LiveBar keeps the approved local light treatment
- standard dialogs, sheets, action sheets, timer popups, and toast surfaces no longer use Figma `GLASS`; they use solid Surface in Light mode
- remaining legacy raw dark-palette paints on the consolidated MVP page were rebound to semantic light roles instead of left as one-off dark values

## Targeted QA

Structural read-back after application:
- MVP screen frames: `98`
- screen roots in Light mode: `98 / 98`
- explicit Dark-mode overrides inside the MVP page: `0`
- remaining visible `GLASS` effects inside MVP screens: `0`
- exact legacy unbound dark palette paints checked after cleanup: `0`

Representative visual QA PASS:
- `05A_Workout_Weight` — Canvas / cards / controls / success / CTA
- `07A_Analysis_Home` — Brand / Primary Soft / cards / tracks / text
- `07D_Workout_History_Detail` — summary cards / body distribution / history table text and dividers
- `08A_Settings_Home` — grouped-card surface and shadow treatment
- `08C_Unit_Settings_Sheet` — solid light bottom sheet + CTA
- `03EF_Routine_Unsaved_Confirm` — solid light dialog + action text

Key read-back examples:
- Workout canvas `#F6F7F7`
- ExerciseCard `#FFFFFF`, no stroke, shadow present
- completed set `#4F8A61`
- CTA `#1A7E79`
- Analysis selected segment `#DCEFED`
- Analysis brand/progress `#218F8A`
- Settings cards `#FFFFFF`, no stroke, shadow present
- BottomSheet `#FFFFFF`, no GLASS
- DialogCard `#FFFFFF`, no GLASS

## Radius boundary

This pass applies the light-theme color/surface rules only.

The separate size-aware radius experiment recorded in `2026-09-17-light-radius-exploration-checkpoint.md` is still under Product Owner review and was **not** propagated across the 98 MVP screens in this rollout.

## Product / development boundary

- Groups 03–08 remain product/UX closed; this is a visual theme migration, not a flow/policy reopen.
- Group 02 product refinement remains deferred unless separately requested.
- no Cursor/development handoff.
- final visual lock waits for Product Owner review of the applied MVP light-theme set.
