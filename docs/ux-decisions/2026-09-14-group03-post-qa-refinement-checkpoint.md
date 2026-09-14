# Group 03 Routine — Post-QA Refinement Checkpoint

**Date:** 2026-09-14  
**Status:** PO-APPROVED REFINEMENTS RECORDED · FIGMA REFLECTED · PRODUCT FOLLOW-UP REMAINS  
**Mode:** Product / UX / Figma  
**Development handoff:** NOT APPROVED

## Scope

This checkpoint records explicit Product Owner refinements made after the Group 03 cross-group QA PASS.

The prior Group 03 QA baseline remains valid. Only the items below were reopened by explicit PO request.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `03 루틴` — `233:2074`

## Figma refinements reflected

### 1. Exercise-name samples aligned to current Production naming

Routine detail/create/edit examples were changed from short temporary names to current Production-style names, with longer names intentionally used to stress the card layout.

Representative samples now include:
- `스미스 머신 벤치프레스`
- `바벨 루마니안 데드리프트`
- `시티드 카프 레이즈 머신`
- `라잉 레그 컬 머신`
- `덤벨 레터럴 레이즈`
- `핵 스쿼트 머신`

Applied across the relevant current Group 03 routine detail/create/edit examples.

These names are Figma sample identities for layout/product QA. They do not by themselves finalize the curated recommended-routine template composition.

### 2. `운동 구성` section title removed from create/edit screens

PO removed the redundant `운동 구성` heading from:
- `03E2_Routine_Create_WithExercises`
- `03F_Routine_Edit`

The exercise-card list now follows the routine-name input directly.

`03E_Routine_Create` already did not contain this heading.

No other visual hierarchy was intentionally changed.

## Routine prescription input rule — PO clarified

Routine creation/editing and active workout use the same set-entry model.

Current rule:
- routine create/edit may input and modify `SET / KG / REPS`
- `KG` may be entered by the user while composing or editing the routine
- the product must not infer or auto-generate a working weight from sex/gender or other demographics
- when the workout starts, the routine values act as the starting/default prescription
- during the active workout, the user may modify the same `SET / KG / REPS` values in the same interaction model
- the actual values performed during the session become workout-record data
- normal load/repetition changes during a workout are performance logging, not routine-structure changes
- existing active-workout structural-change policy remains unchanged: exercise/set-structure changes may trigger the end-of-workout question about whether to update the saved routine

This clarification means `KG` is not removed from routine create/edit. The earlier concern that routine creation must be limited to set count + rep target is rejected.

## Routine exercise-menu downstream behavior — PO confirmed

No new Group 03-specific flow screens are required for `순서 변경` or `대체 운동`.

### 순서 변경

Reuse the already-designed shared flow:
- `05J_Reorder`

Behavior:
- enter the existing reorder flow from the Group 03 routine exercise action menu
- reorder the current routine exercises there
- on completion, return to the originating Group 03 create/edit screen

No separate Group 03 reorder UI is created.

### 대체 운동

Reuse the already-designed shared flow:
- `05G_Exercise_Replace_Suggest`

Behavior:
- enter the existing replacement flow from the Group 03 routine exercise action menu
- select the replacement exercise
- return to the originating Group 03 create/edit screen with that exercise substituted in the same position

No separate Group 03 replacement browser is created.

### Replacement exercise value-loading rule

The values from the exercise being replaced are **not** carried into the new exercise.

Instead, the replacement exercise loads that exercise's own user-specific most recent performance data.

Rules:
- if the user has previous recorded performance for the selected replacement exercise, load the most recent saved set structure and values for that exercise using its own recording type
- for a standard `SET / KG / REPS` exercise, the latest saved rows and their values are restored as the starting values
- if the selected replacement exercise has no previous personal record, start with exactly one empty set row and let the user enter the values
- recording-type-specific exercises follow the same principle: use that exercise's own recording schema and most recent personal record, not the values from the exercise being replaced
- the replaced exercise's load/reps/set values are never copied merely because it occupied the same routine position

Example:
- replacing `스미스 머신 벤치프레스` with `덤벨 벤치프레스` does not transfer the Smith-machine values
- if the user previously performed `덤벨 벤치프레스`, load the user's most recent dumbbell-bench values
- if the user has never performed it, show one blank row

This behavior keeps exercise-specific personal history as the source of remembered values.

## Still-open Group 03 product follow-up

Not decided by this checkpoint:

1. create/edit exit and persistence semantics:
   - unsaved-change back behavior
   - destination after create save
   - destination after edit save
   - routine delete confirmation and destination
2. source/calculation rule for displayed routine `예상 시간`

These should be resolved before implementation handoff if they are not already governed by a later explicit decision.

## Boundaries

- Group 02 Home refinement remains deferred by PO.
- Do not start Cursor/development handoff.
- Do not reopen unrelated QA-PASS Group 03 design-system work without a new issue.
