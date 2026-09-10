# Group 05 Exercise Replacement Localization — 2026-09-10

**Status:** FIGMA REFLECTED / FOCUSED QA PASS

## Scope

Localize the copied `430_Exercise_Replace_Suggest` / `430a_Exercise_Replace_Selected` reference screens into the current Fitness design system and place them in Group 05 Active Workout.

## Product flow represented

Entry point:

`05I_Workout_Menu → 대체 운동`

Representative states:

- `05G_Exercise_Replace_Suggest` — no recommendation selected yet
- `05H_Exercise_Replace_Selected` — one recommendation selected

Behavior represented in Figma:

- show three similar recommended exercises
- single-select with radio control
- before selection, `선택 완료` is disabled
- after one item is selected, `선택 완료` becomes enabled
- `다른 운동 보기` remains the escape path for browsing outside the initial recommendations

The previous duplicated body heading was removed; the local Nav Header owns the page title and the content keeps only the helper copy.

## Figma reflection

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Group 05 page: `05 운동 중` — `233:2076`

Screens:

- `05G_Exercise_Replace_Suggest` — `713:14539`
- `05H_Exercise_Replace_Selected` — `713:14526`

Both screens were normalized from the copied 360×800 reference to the Group 05 360×780 frame.

Local library additions:

- `RadioButton` component set — `723:918`
  - `State=Unchecked`
  - `State=Checked`
- `ExerciseReplaceItem` component set — `723:938`
  - `Selected=False`
  - `Selected=True`

Existing local assets reused:

- `Nav Header`
- `CTA Button`
- `Tag`
- existing local Variables / text styles

No new token was created.

## Binding QA

Final focused audit:

- `RadioButton`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `ExerciseReplaceItem`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05G_Exercise_Replace_Suggest`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05H_Exercise_Replace_Selected`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0

Representative screenshot read-back after the footer correction: PASS for both 05G and 05H.

The copied external `ExerciseItem`, `RadioButton`, `DualCTA`, Status Bar and remote token bindings are no longer present in the canonical 05G/05H screens.

## Open product decision

This localization does **not** decide what happens when the user attempts to replace an exercise after already completing one or more sets of that exercise.

Completed workout records must not be silently discarded. The exact product behavior for that case remains the next replacement-flow decision before Group 05 can be fully closed.

`05N_Workout_OtherRoutine` also remains open afterward.

## Development boundary

No Cursor implementation handoff. Product/UX/Figma stage only.
