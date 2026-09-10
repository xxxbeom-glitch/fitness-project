# Group 05 Rest Timer Localization

**Date:** 2026-09-10  
**Status:** FIGMA REFLECTED · BINDING QA PASS

## Scope

Only the previously deferred Group 05 rest-timer presentation was reopened. Existing QA-PASS Group 05 states were not re-reviewed.

## PO clarification

`05F` uses the `410_Rest_Timer` reference pattern:

- toast / pill drops down from the top when the rest timer starts
- countdown is shown in the pill
- only `X` is exposed as the visible control
- when countdown reaches the end, the pill moves upward and disappears

Existing policy remains: the rest timer starts automatically after set completion and does not block workout progression.

## Figma reflection

Canonical file: `W3lZurXCXbThP67rF2xk2b`

- local `RestTimerPill` component — `721:3456`
- `05F_Workout_RestTimer` — `721:3460`
- local component library — `635:788`

Actions performed:

- copied `410_Rest_Timer` visual reference was inspected
- its `RestTimerPill` visual was localized into `LOCAL_COMPONENT_LIBRARY`
- existing local Variables / Text Style bindings were retained
- old hidden `05F_Workout_RestTimer_TBD` was removed
- new `05F_Workout_RestTimer` was created from the currently approved active-workout component structure and uses the local `RestTimerPill`
- temporary copied `410_Rest_Timer` frame was removed from the Group 05 page after localization

## Design-system bindings

`RestTimerPill` uses only existing local assets:

- `glass/surface-20`
- `radius/full`
- `spacing/12`
- `spacing/20`
- `spacing/2`
- `text/primary`
- `state-bg/danger`
- `state/danger`
- `display/01`

No new token was added.

## Focused QA

`RestTimerPill`:

- remote Variable 0
- missing Variable 0
- remote Style 0
- missing Style 0

`05F_Workout_RestTimer`:

- missing main 0
- remote main 0
- remote Variable 0
- missing Variable 0
- remote Style 0
- missing Style 0
- screenshot read-back PASS

The imported source reference contained no Figma prototype reactions. Motion is locked as an interaction rule; `05F` is the static representative state.

## Remaining Group 05 open item

`05N_Workout_OtherRoutine` remains the only current Product/UX open item.

Trigger context clarified by PO:

- a workout/routine is already in progress
- from the Routine list, the user attempts to start a different routine
- `05N` is the confirmation state for that conflict

The exact result of confirming the switch still requires the current product-flow decision.

No Cursor implementation handoff.
