# Action Menu Presentation — Routine / Custom Exercise / Active Workout

**Date:** 2026-09-10  
**Status:** PO APPROVED · FIGMA REFLECTED

## Scope

Shared action-menu presentation for routine, custom-exercise, and active-workout `...` interactions.

## Decisions

### Active Workout / 05I

`05I_Workout_Menu` no longer includes `운동 정보` inside the `...` menu.

Reason: exercise information is entered by tapping the exercise name itself, so duplicating the same destination inside `...` is unnecessary.

The `...` menu is an icon action bottom sheet with exactly:

- `대체 운동`
- `순서 변경`
- `삭제`

### Routine exercise card

The routine-edit exercise-card `...` interaction uses the same icon action bottom-sheet family with:

- `순서 변경`
- `대체 운동`
- `삭제`

A representative Figma state is maintained for the existing routine-edit flow; the same interaction treatment applies to the equivalent routine-create exercise-card menu.

### Routine list / 03A

`03A_Routine_List` card `...` does **not** use a bottom sheet.

It uses a compact floating panel anchored in the routine-list context, with icon actions:

- `복제`
- `수정`
- `삭제`

No full-screen dimmed bottom-sheet transition is used for this routine-list menu.

### Custom exercise

The shared library contains the matching custom-exercise icon action-sheet variant:

- `수정`
- `삭제`

No new Group 04 canonical screen was added solely for this component migration because the current Group 04 page does not contain a dedicated custom-exercise `...` menu state. The variant is ready for the actual custom-exercise menu trigger when that state is used.

## Local design-system reflection

Canonical Figma file: `W3lZurXCXbThP67rF2xk2b`

Local component library additions/reuse:

- `ActionRows` component set — `707:1114`
  - Workout / 3 actions
  - RoutineExercise / 3 actions
  - RoutineList / 3 actions
  - CustomExercise / 2 actions
- `ActionSheet` component set — `707:1197`
  - WorkoutExercise
  - RoutineExercise
  - CustomExercise
- local icons:
  - `icon/replace` — `706:954`
  - `icon/trash` — `706:959`
  - `icon/copy` — `706:965`
- existing local `icon/edit` and `icon/drag-handle` are reused.

Figma states reflected:

- `05I_Workout_Menu` — `148:3392` — replaced previous vertical text-list menu with the local icon ActionSheet.
- `03A_Routine_List_Menu` — `706:5023` — new panel-style representative state, not a bottom sheet.
- `03F_Routine_Exercise_Menu` — `706:5087` — representative routine exercise-card action-sheet state.

Temporary imported reference screens used to derive this pattern were removed from Group 05 after localization.

## Focused QA

Only changed assets/states were checked.

- `ActionRows`: local main components only, external Variable 0, missing Variable 0
- `ActionSheet`: local main components only, external Variable 0, missing Variable 0
- `05I`: visual read-back PASS
- `03A_Routine_List_Menu`: visual read-back PASS
- `03F_Routine_Exercise_Menu`: visual read-back PASS
- imported reference screens remaining on Group 05: 0

Existing unrelated QA-PASS screens were not reopened.

## Open item preserved

This change does not resolve or alter `05N_Workout_OtherRoutine` product-flow review.

Hidden `05F_Workout_RestTimer_TBD` remains deferred.

No Cursor implementation handoff.
