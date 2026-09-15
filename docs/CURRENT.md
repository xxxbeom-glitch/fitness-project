# CURRENT — Fitness Project

**Updated:** 2026-09-15

## Current mode

`PRODUCT/UX · GROUP 04 EXERCISE LIBRARY/DETAIL CLOSED · ANALYSIS BODY-MAP ASSET MAPPING DEFERRED · ANALYSIS WORKOUT-FREQUENCY DEFINITION NEXT · GROUP 03 ROUTINE CLOSED · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

Directly relevant closed Group 04 decisions / checkpoints:
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-delete-policy.md`
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-save-destination.md`
- `docs/ux-decisions/2026-09-15-group04-780-viewport-correction.md`
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md`
- `docs/ux-decisions/2026-09-15-group04-recording-type-history-growth-policy.md`
- `docs/ux-decisions/2026-09-14-group04-cross-group-regression-qa.md`
- `docs/ux-decisions/2026-09-10-group04-session-handoff.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL CLOSED

**Final closure:** `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `04 운동 목록 · 상세` — `233:2075`

Base canonical states:
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

Custom-exercise selection / completion states:
- `04I_Custom_Equipment_Select` — `1396:2298`
- `04J_Custom_PrimaryMuscle_Select` — `1396:8091`
- `04K_Custom_SecondaryMuscle_Select` — `1396:8179`
- `04L_Custom_RecordingType_Select` — `1396:8271`
- `04F_Custom_Edit_HistoryLocked` — `1396:8393`
- `04E_Custom_Create_Valid` — `1401:1890`
- `04EF_Custom_Unsaved_Confirm` — `1401:7683`
- `04F_Custom_Delete_Confirm` — `1429:1751`

## Locked Group 04 rules

### Screen height

- base/reference size: `360 × 780`
- `780` is not a hard maximum
- finite content that genuinely needs more room may grow beyond 780
- variable/unbounded search/history content may keep a 780 root with relevant internal scroll
- no forced compression to hit 780

Verified finite-height exceptions:
- `04D_Exercise_Detail_Info` — `360 × 894`
- `04K_Custom_SecondaryMuscle_Select` — `360 × 834`

### Custom exercise

Required:
- exercise name
- equipment
- primary muscle
- recording type

Optional:
- secondary muscle
- user-added media

Selection:
- full-page single-selection using existing `Nav Header` + `OptionItem`
- secondary muscle includes `선택 안 함`
- recording type uses the 4 MVP Group 05 types

Edit history lock:
- once at least one completed history record exists, recording type is read-only
- helper: `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`
- equipment / primary / secondary remain editable

Save destination:
- Create Save → exercise add/list flow
- newly created custom exercise is immediately selected
- Edit Save → that exercise detail with updated metadata
- no separate creation-complete screen

Delete policy:
- remove custom exercise from search/list/new-add targets and all saved routines containing it
- preserve completed historical records and derived History/Growth
- confirmation dialog required
- deleting the only exercise in a saved routine retains the routine as an empty routine
- Group 03 empty-routine state: `03D_Routine_Detail_Empty` — `1423:1972`

Attachment media fallback:
- reviewed attachment-specific Gym Animations media exists → use it
- otherwise → canonical exercise base media
- direct/custom attachment text does not auto-map to media → base media
- no separate no-media Exercise Detail state
- obsolete `04D_Exercise_Detail_Info_NoMedia` frame removed

## Final QA result

- final scoped read-back + screenshot QA PASS
- delete dialog copy/actions and DialogCard reuse PASS
- Create/Edit Save representative states intact
- attachment picker/direct-input representative states intact
- canonical Exercise Detail remains media-present and structurally intact
- obsolete no-media representative frame absent
- no blocking regression found

**GROUP 04 CLOSED.**

Do not reopen already passed recording-type, selector, list/filter, save-destination, delete-policy/dialog, attachment-picker/media-fallback, or height QA without a new conflict/regression.

## Preserved deferred data/runtime work

- final canonical Production Exercise DB regeneration from purchased Gym Animations `MP4/MALE/Library_database` raw **2,109-source-row** catalog after normalization/deduplication
- exact Production exercise attachment allowlists / canonical attachment IDs and names / attachment-media mapping
- Cursor implementation

The old 195/211 Production target is not the current raw-source basis after the Gym Animations package analysis. Final canonical app exercise count remains a data-normalization result, not a fixed 2,109 UI count.

---

# GROUP 03 — ROUTINE CLOSED

Group 03 remains closed.

Cross-group empty-routine exception already reflected and QA-passed:
- `03D_Routine_Detail_Empty` — `1423:1972`
- routine identity retained at 0 exercises
- `운동 추가` shown
- `운동 시작` hidden

Do not reopen without a new conflict/regression.

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement. Do not resume it unless PO requests it.

---

# ANALYSIS — BODY-MAP ASSET MAPPING DEFERRED

Decision:
- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

PO will first prepare the production-ready body-map image set.

Until then:
- use existing source muscle-highlight PNGs; do not redraw/recolor them
- preserve the already-validated blend-mode approach
- do not create replacement body-map artwork in Figma
- final canonical-muscle → PNG-layer mapping remains deferred
- this does not block unrelated Analysis product/data decisions

---

# NEXT OPEN ITEM

Continue the approved Analysis track with the next unresolved product/data decision:

**workout-frequency definition**

Primary decision source:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`

Already locked:
- Analysis IA
- `4주 / 3개월 / 1년`
- top metrics: 운동 횟수 / 완료 세트 / 운동 시간
- body-map data basis: completed-set muscle exposure, primary `1.0` / secondary `0.5`

Now decide what the workout-frequency summary means and how it counts real saved workout sessions across the selected period.

After that, continue in order with:
- `최근 성장한 운동` selection rule
- recent-record card/list information density
- empty / insufficient-data states

Do not return to deferred body-map asset mapping until the Product Owner supplies the prepared image assets.
Do not return to deferred Group 02 and do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
