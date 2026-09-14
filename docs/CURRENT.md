# CURRENT — Fitness Project

**Updated:** 2026-09-15

## Current mode

`PRODUCT/UX FIGMA · GROUP 04 EXERCISE DETAIL PRODUCT QA ACTIVE · GROUP 03 ROUTINE CLOSED · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-15-group04-recording-type-history-growth-policy.md`

Directly relevant Group 04 decisions / checkpoints:
- `docs/ux-decisions/2026-09-14-group04-cross-group-regression-qa.md`
- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`
- `docs/ux-decisions/2026-09-10-group04-session-handoff.md`
- `docs/ux-decisions/2026-09-13-exercise-detail-tab-state-normalization.md`
- `docs/ux-decisions/2026-09-13-04d-content-top-spacing-normalization.md`
- `docs/ux-decisions/2026-09-13-04d-growth-relative-week-xaxis.md`
- `docs/ux-decisions/2026-09-13-04g-growth-weight-change-title.md`
- `docs/ux-decisions/2026-09-13-04g-growth-personal-best-table-sync.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`
- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL PRODUCT QA ACTIVE

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `04 운동 목록 · 상세` — `233:2075`

Current canonical states:
- `04A_Search` — `207:1238`
- `04B_Search_Selected` — `515:1140`
- `04C_Search_Empty` — `539:1050`
- `04D_Exercise_Detail_Info` — `40:2325`
- `04D_Exercise_Detail_History` — `34:1714`
- `04D_Exercise_Detail_Growth` — `1000:1519`
- `04E_Custom_Create` — `34:1672`
- `04F_Custom_Edit` — `34:1692`
- `04H_Exercise_Attachment_Selection` — `170:2174`
- `04H_Custom_Attachment_Input` — `552:3356`
- `04A_Filter_Equipment_Page` — `515:3327`
- `04A_Filter_BodyPart_Page` — `515:3514`

Current structural / regression QA result:
- all canonical top-level states `360 × 954`
- no stale top-level `04G_Exercise_History` state
- Exercise Detail states normalized under `04D`
- no component/component-set master left on the Group 04 product page
- 337 instances inspected; no missing main-component link found
- recent `Common_Component` master relocation did not break Group 04 instances
- 04D three tab states use the correct shared 3-tab variants
- 04D Info / History / Growth content top padding remains 20px bound to `spacing/20`
- search/list, empty, detail, growth, edit, filter, attachment representative screenshot QA PASS
- 04D current bench-press sample remains valid as the `weight_reps` representative state

Important correction:
- the 2026-09-14 pass was a **Figma structure / binding / regression QA PASS**, not final Group 04 Product/UX closure.
- Group 04 Product QA remains active until recording-type-specific states and remaining product gaps are resolved.

## Locked 2026-09-15 recording-type policy

Group 04 does not create a separate recording model. It displays/analyzes the actual values saved by Group 05 Active Workout.

MVP 4 active types:

- `weight_reps` → 최근 기록 `중량 + 횟수`, 성장 `중량 변화`, 개인 최고 `최고 중량 / 최대 반복`
- `reps` → 최근 기록 `횟수`, 성장 `반복 변화`, 개인 최고 `최대 반복`
- `duration` → 최근 기록 `시간`, 성장 `시간 변화`, 개인 최고 `최장 시간`
- `assisted_weight_reps` → 최근 기록 `보조중량 + 횟수`, 성장 `보조중량 변화`, MVP 개인 최고 기록 판정 없음

Assisted는 일반 weight PR / 1RM / 일반 weight-volume 계산을 적용하지 않는다.

Data sufficiency:
- 완료 기록 0회 → Empty
- 1회 → 실제 기록은 표시 가능
- 선택 기간 내 비교 가능한 복수 기록이 없으면 → 성장 추이 데이터 부족 상태

## Preserved deferred data/runtime work

- regenerated 211-row Production workbook/runtime DB
- exact Production attachment allowlists/canonical IDs/media mapping
- Cursor implementation

Remaining Group 04-specific component-master promotion into `Common_Component` has not been performed; do it only if PO explicitly requests that cleanup.

---

# GROUP 03 — ROUTINE CLOSED

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `03 루틴` — `233:2074`

Group 03 Product/UX rules and representative Figma states are closed at the current approved checkpoint.

Confirmed behavior includes:
- routine create/edit supports user-entered `SET / KG / REPS`
- reorder reuses `05J_Reorder`
- replacement reuses `05G_Exercise_Replace_Suggest` and loads the selected exercise's own recent personal record
- create/edit unsaved-change confirmation is defined
- create/edit save returns to routine detail
- delete confirms then returns to routine list
- deterministic routine estimated-duration rule is defined

Recent confirmed Group 03 component masters were organized under `Common_Component / 03_GROUP_CONFIRMED_COMPONENTS`; shared instances remain linked.

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement. Do not resume it unless PO requests it.

---

# NEXT OPEN ITEM

Continue Group 04 Product/UX QA from the locked recording-type policy.

1. Focused-check `05C_Workout_Duration` only: confirm the actual set-input UI does not require an unnecessary `중량` field. If it does, minimally correct it to the already-approved `duration = 시간만` semantics; do not reopen Group 05 generally.
2. Reflect and QA Group 04 representative states for `reps`, `duration`, `assisted_weight_reps`, plus `기록 없음` and `성장 데이터 부족`.
3. Then continue remaining Group 04 Product/UX gaps such as custom exercise create/edit selection interactions. Do not mark Group 04 fully CLOSED before those are resolved.

Do not automatically return to deferred Group 02 and do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
