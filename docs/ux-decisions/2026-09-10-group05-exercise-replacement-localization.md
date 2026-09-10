# Group 05 Exercise Replacement Localization — 2026-09-10

**Status:** FIGMA REFLECTED / FOCUSED QA PASS

## Scope

Localize the copied `430_Exercise_Replace_Suggest` / `430a_Exercise_Replace_Selected` reference screens into the current Fitness design system and define the replacement recommendation browsing policy for Group 05 Active Workout.

## Product flow represented

Entry point:

`05I_Workout_Menu → 대체 운동`

Representative states:

- `05G_Exercise_Replace_Suggest` — first three recommendations, no selection
- `05H_Exercise_Replace_Selected` — first three recommendations with one item selected
- `05G2_Exercise_Replace_SecondBatch` — second three recommendations
- `05H2_Exercise_Replace_SecondBatch_Selected` — second three recommendations with one item selected

## Recommendation browsing policy — PO APPROVED

The replacement surface uses a fixed pool of up to six preselected replacement exercises. It does not open the broader exercise-search experience and it does not generate or reveal additional candidates beyond that fixed pool.

Flow:

`first 3 recommendations ↔ 다른 운동 보기 ↔ second 3 recommendations`

Rules:

- prepare up to six replacement candidates for the current exercise
- show three candidates at a time
- the first and second groups must not duplicate each other
- `다른 운동 보기` switches between the two groups only
- after all six have been exposed, pressing `다른 운동 보기` continues to cycle within those same already-prepared candidates; no seventh or later recommendation is introduced
- do not expose `전체 운동에서 찾기` from this flow
- if fewer than six candidates are available, cycle only within the candidates that exist
- browsing between candidate groups does not change the active workout record
- the replacement is applied only when the user selects an exercise and confirms `선택 완료`

## Selection behavior

- replacement is single-select with radio control
- before selection, `선택 완료` is disabled
- after one item is selected, `선택 완료` becomes enabled
- the previous duplicated body heading was removed; the local Nav Header owns the page title and the content keeps only the helper copy

## Figma reflection

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Group 05 page: `05 운동 중` — `233:2076`

Screens:

- `05G_Exercise_Replace_Suggest` — `713:14539`
- `05H_Exercise_Replace_Selected` — `713:14526`
- `05G2_Exercise_Replace_SecondBatch` — `731:3906`
- `05H2_Exercise_Replace_SecondBatch_Selected` — `731:6943`

Second-group representative exercises are non-duplicates of the first group:

- 덤벨 벤치프레스
- 머신 체스트 프레스
- 펙덱 플라이

The secondary action remains `다른 운동 보기` on both recommendation groups. There is no `전체 운동에서 찾기` action in the canonical replacement flow.

All replacement screens use the Group 05 360×780 frame.

Local library assets:

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

No new token or component was created for the second-group states.

## Binding / focused QA

Existing local binding audit remains valid because this revision only changes the CTA text/property on the already-local second-group screens:

- `RadioButton`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `ExerciseReplaceItem`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05G_Exercise_Replace_Suggest`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05H_Exercise_Replace_Selected`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05G2_Exercise_Replace_SecondBatch`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05H2_Exercise_Replace_SecondBatch_Selected`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0

Focused read-back after the policy correction:

- `05G2` secondary action = `다른 운동 보기`
- `05H2` secondary action = `다른 운동 보기`
- `전체 운동에서 찾기` copy remaining in either second-group screen = 0
- screenshot read-back: PASS for both second-group states

The copied external `ExerciseItem`, `RadioButton`, `DualCTA`, Status Bar and remote token bindings are not present in the canonical replacement flow.

## Remaining open product decision

This checkpoint does **not** decide what happens when the user attempts to replace an exercise after already completing one or more sets of that exercise.

Completed workout records must not be silently discarded. The exact coexistence behavior for completed sets and the newly selected replacement exercise remains the final Group 05 replacement-flow decision.

`05N` other-routine switching is already approved and closed separately.

## Development boundary

No Cursor implementation handoff. Product/UX/Figma stage only.
