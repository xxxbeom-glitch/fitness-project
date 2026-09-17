# Group 05 Light Design-System Rebinding / Visual Maintenance

**Date:** 2026-09-17  
**Status:** POST-CLOSURE MAINTENANCE PASS · GROUP 05 REMAINS CLOSED

## Scope

This checkpoint records the Product Owner-requested Group 05 maintenance performed after the consolidated MVP light-theme rollout.

It does **not** reopen Group 05 Product/UX behavior. The work is limited to design-system rebinding, light-theme visual consistency, and concrete visual regressions discovered during screenshot review.

Canonical Figma:
- file: `W3lZurXCXbThP67rF2xk2b`
- current editing page: `MVP_전체_와이어프레임` — `34:1076`
- `05A_Workout_Weight`
- `05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`
- `Common_Component` → `05_GROUP_CONFIRMED_COMPONENTS`

## 1. Group 05 component rebinding / Common_Component sync

Group 05 screens were re-checked against the existing confirmed component system after the light-theme consolidation.

Result:
- existing canonical component / variant families were retained rather than duplicated
- local confirmed Group 05 masters remain under `Common_Component`
- existing Group 01 / Group 03 shared dependencies continue to be reused where appropriate
- broken main-component links: `0`
- legacy `MVP_공용_UI / LOCAL_COMPONENT_LIBRARY` source dependencies on current Group 05 screens: `0`
- Group 05 remains a maintenance pass, not a new component-system branch

Representative retained component families include:
- `WorkoutLiveBar`
- `Workout Inline Action`
- `RestLiveBar`
- `ManualTimerPopup`
- `ReorderRow`
- `ExerciseReplaceItem`
- `RadioButton`
- shared `ExerciseCard` / set-entry structure

## 2. Completed-set check icon contrast fix

A light-theme visual defect was found in the completed-set control:
- completed circular background used the primary teal state
- the check icon remained dark, reducing contrast

Fix applied at the shared master level:
- `col-done` → `State=Checked`
- check vector stroke bound to semantic `text/on-brand`
- Light mode resolves to white
- unchecked state remains neutral gray

The fix propagates through the shared `ExerciseCard` structure rather than screen-specific overrides.

## 3. Scrolled WorkoutLiveBar elevation / layer-order correction

`05A_Workout_Weight_Scrolled_3rdExercise` needed clearer separation between the fixed `WorkoutLiveBar` and the scrolling workout cards.

Initial shadow-only treatment was insufficient because the layer order placed `WorkoutContent` above the visual shadow region.

Final structure:
1. `StatusArea_Spacer`
2. `Nav Header`
3. `WorkoutContent`
4. `WorkoutLiveBar` — visually topmost within the screen root

The runtime meaning is unchanged: `WorkoutLiveBar` remains the fixed top workout-session control while only `WorkoutContent` scrolls.

Current scrolled-state visual treatment:
- Drop shadow: X `0`
- Y `4`
- Blur `12`
- Spread `0`
- color based on dark neutral at approximately `10%` opacity

This stronger local scrolled-state separation is intentional so the bar reads as fixed above the card list.

## 4. `ExerciseCard_WithAttachment` square-corner regression fix

A concrete visual regression was found in `05A_Workout_Weight_Scrolled_3rdExercise`.

Cause:
- wrapper `ExerciseCard_WithAttachment` had its own white fill + card shadow
- wrapper radius was `0`
- this visually covered the nested `ExerciseCard` radius (`12`), making the card appear square

Fix:
- outer `ExerciseCard_WithAttachment` wrapper is now visually neutral/transparent
- wrapper-level shadow removed
- nested canonical `ExerciseCard` retains white surface, radius `12`, and card elevation
- `AttachmentTag` remains overlaid as before

This restores the same rounded card language as the other workout cards without creating a parallel card style.

## 5. WorkoutLiveBar behavior clarification — no policy change

Product Owner re-confirmed the existing behavior after review:

- the top `WorkoutLiveBar` represents the **entire active workout session**, not an individual set
- it is present from initial workout entry
- it shows total workout elapsed time plus session-level `종료 / 취소`
- it remains fixed while workout content scrolls
- set completion does **not** create this top bar
- set completion may trigger the separate bottom `RestLiveBar` according to the existing rest-timer policy

Therefore the existing locked rule from the 2026-09-15 Active Workout Live Bar / Scroll amendments remains authoritative. No new UX amendment is introduced here.

## Focused visual QA

PASS after maintenance:
- completed-set check icon reads white on teal in Light mode
- unchecked state remains neutral
- scrolled `WorkoutLiveBar` is visually above the scrolling card region
- shadow is visible enough to separate the fixed bar from content
- `ExerciseCard_WithAttachment` no longer appears square
- nested card radius / surface / shadow match the existing ExerciseCard language
- no change to active-workout flow semantics

## Result

**PASS — Group 05 light-theme design-system maintenance and visual regression fixes are recorded. Group 05 remains CLOSED.**

No Cursor / implementation handoff is authorized by this checkpoint.
