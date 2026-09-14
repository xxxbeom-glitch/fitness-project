# Group 03 Routine — Post-QA Refinement Checkpoint

**Date:** 2026-09-14  
**Status:** PO-APPROVED REFINEMENTS RECORDED · PRODUCT FOLLOW-UP CLOSED  
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

## Routine prescription input rule — PO clarified

Routine creation/editing and active workout use the same set-entry model.

Current rule:
- routine create/edit may input and modify `SET / KG / REPS`
- `KG` may be entered by the user while composing or editing the routine
- the product must not infer or auto-generate a working weight from sex/gender or other demographics
- when the workout starts, the routine values act as the starting/default prescription
- during the active workout, the user may modify the same values in the same interaction model
- the actual values performed during the session become workout-record data
- normal load/repetition changes during a workout are performance logging, not routine-structure changes
- existing active-workout structural-change policy remains unchanged: exercise/set-structure changes may trigger the end-of-workout question about whether to update the saved routine

## Routine exercise-menu downstream behavior — PO confirmed

No new Group 03-specific flow screens are required for `순서 변경` or `대체 운동`.

### 순서 변경

Reuse the already-designed shared flow:
- `05J_Reorder`

Behavior:
- enter the existing reorder flow from the Group 03 routine exercise action menu
- reorder the current routine exercises there
- on completion, return to the originating Group 03 create/edit screen

### 대체 운동

Reuse the already-designed shared flow:
- `05G_Exercise_Replace_Suggest`

Behavior:
- enter the existing replacement flow from the Group 03 routine exercise action menu
- select the replacement exercise
- return to the originating Group 03 create/edit screen with that exercise substituted in the same position

### Replacement exercise value-loading rule

The values from the exercise being replaced are not carried into the new exercise.

Instead, the replacement exercise loads that exercise's own user-specific most recent performance data.

Rules:
- if the user has previous recorded performance for the selected replacement exercise, load the most recent saved set structure and values for that exercise using its own recording type
- for a standard `SET / KG / REPS` exercise, restore the latest saved rows and values as the starting values
- if the selected replacement exercise has no previous personal record, start with exactly one empty set row
- recording-type-specific exercises use that exercise's own recording schema and most recent personal record
- the replaced exercise's values are never copied merely because it occupied the same routine position

## Create / edit exit, save, and delete semantics — PO confirmed

### Back / unsaved changes

- if the user has made no changes, Back returns immediately to the previous screen
- if the user has changed the routine, Back shows an unsaved-changes confirmation dialog

Approved copy:
- title: `변경사항을 저장하지 않고 나갈까요?`
- actions: `나가기` / `계속 편집`

`나가기` discards the current unsaved edits and returns to the previous screen.
`계속 편집` closes the dialog and preserves the current editing state.

### Create save

- successful save of a new routine navigates to that routine's `03D_Routine_Detail`

### Edit save

- successful save of an existing routine returns to that routine's updated `03D_Routine_Detail`

### Routine delete

- routine deletion requires a confirmation dialog before destructive action

Approved copy:
- title: `루틴을 삭제할까요?`
- actions: `삭제` / `취소`

On confirmed delete:
- delete the routine
- navigate to `03A_Routine_List`

## Routine estimated-duration rule — reference-informed current rule

### Reference basis

The product keeps `예상 시간` because established strength-training planners expose duration as a planning aid.

Reference observations used for this decision:
- Hevy has used routine/workout overviews that pair estimated duration with exercise/set counts, and Hevy Trainer currently builds workouts from target duration plus planned sets/reps/rest
- HeavySet supports both per-exercise preset rest durations and routine estimated duration
- JEFIT routine planning exposes estimated session duration while allowing programmed rest time

The product does not depend on any one competitor's private formula. The rule below is our own deterministic MVP contract.

### Display rule

Use the same estimated-duration value across routine list/detail surfaces.

- routine list card may display `약 N분`
- routine detail summary displays `N분` under `예상 시간`
- display is rounded to the nearest 5 minutes

### Saved user routine with valid history

For an unchanged saved routine that has completed-session history:
- use the median duration of up to the 3 most recent fully completed sessions of that routine
- if only 1 or 2 valid completed sessions exist, use the median of the available sessions
- exclude partial/incomplete workout records from this estimate

Reason:
- personal historical duration is more representative than a generic formula once the user has actually performed the routine
- median reduces distortion from one unusually long session

### New routine or routine whose structure changed

When there is no valid comparable history, use a structure-based fallback estimate.

Fallback formula:
- reps/load-based set: assume `45 sec` active set time
- duration-based set: use the programmed target duration for that set
- rest between sets: use the routine/exercise rest duration when configured; otherwise use `90 sec`
- exercise transition/setup: add `60 sec` between exercises
- do not add a separate transition after the final exercise
- round the final result to the nearest 5 minutes

### History invalidation

A structural routine change invalidates the previous history-based estimate until the edited structure has been completed again.

Structural changes include:
- exercise add/remove/replace
- exercise reorder when it materially changes paired/superset structure
- planned set-count changes
- recording-type change through exercise replacement

The following do not invalidate the historical estimate by themselves:
- KG changes
- REPS changes within the same exercise structure

### Recommended routine

For curated recommended routines:
- the template carries its own validated estimated duration derived from the planned exercise/set/rest structure
- template selection should remain compatible with the user's selected duration preference (`30 / 45 / 60분`)
- after a recommended routine is later saved as a personal routine and accumulated as a stable unchanged routine, the normal personal-history rule may take over

### Figma impact

The current `예상 시간` UI pattern remains valid; no new visual component is required for this rule.
Current sample values are representative examples and do not define the formula.

## Group 03 product follow-up status

The previously open Group 03 product items are now resolved:
- reorder / replacement downstream behavior = resolved
- replacement value source = resolved
- unsaved/back/save/delete semantics = resolved
- estimated-duration source/calculation = resolved

Any later change requires a new product issue, implementation/runtime finding, or explicit PO request.

## Boundaries

- Group 02 Home refinement remains deferred by PO.
- Do not start Cursor/development handoff.
- Do not reopen unrelated QA-PASS Group 03 design-system work without a new issue.
