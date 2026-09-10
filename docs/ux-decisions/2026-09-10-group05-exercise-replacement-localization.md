# Group 05 Exercise Replacement Localization — 2026-09-10

**Status:** FIGMA REFLECTED / FOCUSED QA PASS

## Scope

Localize the copied `430_Exercise_Replace_Suggest` / `430a_Exercise_Replace_Selected` reference screens into the current Fitness design system and define the replacement recommendation refresh limit for Group 05 Active Workout.

## Product flow represented

Entry point:

`05I_Workout_Menu → 대체 운동`

Representative states:

- `05G_Exercise_Replace_Suggest` — initial three recommendations, no selection
- `05H_Exercise_Replace_Selected` — initial recommendation selected
- `05G2_Exercise_Replace_SecondBatch` — second recommendation batch after one `다른 운동 보기`
- `05H2_Exercise_Replace_SecondBatch_Selected` — second recommendation batch with one item selected

## Recommendation refresh policy — PO APPROVED

The replacement recommendation surface is intentionally finite.

Flow:

`initial 3 recommendations → 다른 운동 보기 1회 → new 3 recommendations → 전체 운동에서 찾기`

Rules:

- show three similar recommendations initially
- allow `다른 운동 보기` exactly once
- the second batch must not repeat exercises already shown in the first batch
- after the second batch is shown, the secondary action changes from `다른 운동 보기` to `전체 운동에서 찾기`
- do not continue rotating recommendations indefinitely
- if fewer than three unseen recommendations remain, show only the remaining candidates
- if no unseen candidates remain, move directly to `전체 운동에서 찾기`
- browsing or refreshing recommendations does not change the current workout record
- the replacement is applied only when the user selects an exercise and confirms `선택 완료`
- `전체 운동에서 찾기` is the escape path to the broader exercise list/search experience

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

Second-batch representative exercises are non-duplicates of the first batch:

- 덤벨 벤치프레스
- 머신 체스트 프레스
- 펙덱 플라이

The second-batch secondary action is `전체 운동에서 찾기`.

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

No new token or component was created for the second-batch states.

## Binding QA

Final focused audit:

- `RadioButton`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `ExerciseReplaceItem`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05G_Exercise_Replace_Suggest`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05H_Exercise_Replace_Selected`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05G2_Exercise_Replace_SecondBatch`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05H2_Exercise_Replace_SecondBatch_Selected`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0

Representative screenshot read-back: PASS for the second-batch unselected and selected states.

The copied external `ExerciseItem`, `RadioButton`, `DualCTA`, Status Bar and remote token bindings are not present in the canonical replacement flow.

## Remaining open product decision

This checkpoint does **not** decide what happens when the user attempts to replace an exercise after already completing one or more sets of that exercise.

Completed workout records must not be silently discarded. The exact coexistence behavior for completed sets and the newly selected replacement exercise remains the final Group 05 replacement-flow decision.

`05N` other-routine switching is already approved and closed separately.

## Development boundary

No Cursor implementation handoff. Product/UX/Figma stage only.
