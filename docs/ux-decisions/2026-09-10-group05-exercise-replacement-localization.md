# Group 05 Exercise Replacement Localization — 2026-09-10

**Status:** PO APPROVED / FIGMA REFLECTED / FOCUSED QA PASS

## Scope

Group 05 Active Workout의 대체운동 UI를 현재 Fitness design system으로 정리하고, 추천 후보 탐색 및 완료 세트가 있는 상태에서의 교체 정책을 확정한다.

## Product flow — PO APPROVED

Entry:

`05I_Workout_Menu → 대체 운동`

Canonical states:

- `05G_Exercise_Replace_Suggest` — 첫 3개 추천, 미선택
- `05H_Exercise_Replace_Selected` — 추천 중 1개 선택, `선택 완료` 활성
- `05G2_Exercise_Replace_SecondBatch` — `다른 운동 보기`로 전환한 나머지 최대 3개 추천
- `05P_Exercise_Replace_DeleteConfirm` — 현재 운동에 완료 세트가 있을 때 교체 전 파괴적 확인

중복 상태였던 `05H2_Exercise_Replace_SecondBatch_Selected`는 삭제했다. 선택 상태의 의미는 `05H_Exercise_Replace_Selected` 하나로 충분히 대표한다.

## Recommendation browsing policy — PO APPROVED

대체운동 후보는 운동별로 최대 6개를 미리 확보하고, 새로운 후보를 무한 생성하지 않는다.

Flow:

`first 3 recommendations ↔ 다른 운동 보기 ↔ second 3 recommendations`

Rules:

- 현재 운동에 대해 최대 6개의 대체 후보를 준비한다.
- 한 화면에는 최대 3개를 표시한다.
- 첫 그룹과 두 번째 그룹은 서로 중복되지 않는다.
- `다른 운동 보기`는 확보된 후보 그룹 사이만 전환한다.
- 6개를 모두 확인한 뒤에도 `다른 운동 보기`는 같은 확보 후보 안에서 순환한다.
- 7번째 이후 새로운 추천 운동은 노출하지 않는다.
- `전체 운동에서 찾기` 진입은 제공하지 않는다.
- 후보가 6개보다 적으면 실제 확보된 후보만 순환한다.
- 후보를 보는 행위 자체는 현재 운동 기록을 변경하지 않는다.
- 실제 교체는 운동 선택 후 `선택 완료`에서만 적용한다.

## Selection behavior

- single-select radio 방식
- 미선택 상태에서는 `선택 완료` 비활성
- 1개 선택 시 `선택 완료` 활성
- Nav Header가 `대체 운동 선택` 제목을 소유하고 본문에는 helper copy만 둔다.

## Completed-set replacement policy — PO APPROVED

현재 운동을 이미 수행한 뒤 대체하는 경우의 파괴적 동작을 명시적으로 확인한다.

Rules:

- 완료 세트가 0개이면 별도 경고 없이 선택한 대체운동으로 교체한다.
- 완료 세트가 1개 이상이면 `05P_Exercise_Replace_DeleteConfirm`을 표시한다.
- 제목: `완료한 세트 기록을 삭제할까요?`
- 설명: `대체 운동으로 변경하면 이 운동에서 완료한 세트 기록이 삭제됩니다.`
- actions: `취소 / 삭제하고 변경`
- `취소`는 선택 상태로 돌아가고 기록을 변경하지 않는다.
- `삭제하고 변경`은 **현재 세션의 해당 운동에서 완료한 세트 기록만 삭제**하고 선택한 대체운동으로 교체한다.
- 과거 날짜에 저장된 운동 기록에는 영향을 주지 않는다.
- 이 삭제는 silent discard가 아니라 사용자 확인을 거친 명시적 파괴 동작이다.

## Figma reflection

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Group 05 page: `05 운동 중` — `233:2076`

Canonical replacement screens:

- `05G_Exercise_Replace_Suggest` — `713:14539`
- `05H_Exercise_Replace_Selected` — `713:14526`
- `05G2_Exercise_Replace_SecondBatch` — `731:3906`
- `05P_Exercise_Replace_DeleteConfirm` — `734:3883`

Removed as redundant:

- `05H2_Exercise_Replace_SecondBatch_Selected` — deleted from canonical page

`05P` reuses the existing local `DialogCard` + `DialogButtons` system. No new dialog component or token was created.

Local replacement assets reused:

- `RadioButton` component set — `723:918`
- `ExerciseReplaceItem` component set — `723:938`
- existing local `Nav Header`
- existing local `CTA Button`
- existing local `Tag`
- existing local Variables / Styles

## Focused QA

Cleanup read-back:

- replacement-related top-level canonical screens remaining = 4
- `05H2_Exercise_Replace_SecondBatch_Selected` remaining = 0
- draft / copied 430 replacement screen remaining = 0
- `05P` placed directly after `05G2` in the replacement screen row

Previously passed local binding QA remains valid for `05G`, `05H`, `05G2`.

`05P` focused audit:

- missing main = 0
- remote main = 0
- missing Variable = 0
- remote Variable = 0
- missing Style = 0
- remote Style = 0
- screenshot read-back after final copy update = PASS

No new token/component was created by this cleanup.

## Development boundary

No Cursor implementation handoff. Product/UX/Figma stage only.
