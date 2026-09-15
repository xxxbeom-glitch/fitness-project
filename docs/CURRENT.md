# CURRENT — Fitness Project

**Updated:** 2026-09-15

## Current mode

`PRODUCT/UX FIGMA · GROUP 04 EXERCISE DETAIL PRODUCT QA ACTIVE · CUSTOM EXERCISE SAVE DESTINATION LOCKED · CUSTOM EXERCISE DELETE DIALOG FIGMA REFLECTED · 360×780 BASELINE HEIGHT RULE LOCKED · CUSTOM EXERCISE DELETE POLICY LOCKED · GROUP 03 EMPTY-ROUTINE EXCEPTION STATE REFLECTED · GROUP 03 ROUTINE OTHERWISE CLOSED · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-15-group04-custom-exercise-delete-policy.md`

Directly relevant Group 04 decisions / checkpoints:
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-save-destination.md`
- `docs/ux-decisions/2026-09-15-group04-780-viewport-correction.md`
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md`
- `docs/ux-decisions/2026-09-15-group04-recording-type-history-growth-policy.md`
- `docs/ux-decisions/2026-09-14-group04-cross-group-regression-qa.md`
- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`
- `docs/ux-decisions/2026-09-10-group04-session-handoff.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL PRODUCT QA ACTIVE

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

Recording-type History/Growth representative states are reflected and QA-passed.

Custom-exercise selection states reflected and QA-passed:
- `04I_Custom_Equipment_Select` — `1396:2298`
- `04J_Custom_PrimaryMuscle_Select` — `1396:8091`
- `04K_Custom_SecondaryMuscle_Select` — `1396:8179`
- `04L_Custom_RecordingType_Select` — `1396:8271`
- `04F_Custom_Edit_HistoryLocked` — `1396:8393`

Completion representative states already present:
- `04E_Custom_Create_Valid` — `1401:1890`
- `04EF_Custom_Unsaved_Confirm` — `1401:7683`
- `04F_Custom_Delete_Confirm` — `1429:1751`

## Group 04 screen-height rule

- base/reference screen size: `360 × 780`
- `780` is not a hard maximum and is not a reason to compress or hide content
- finite content that fits within 780 uses `360 × 780`
- finite content that genuinely needs more room may grow beyond 780 to its natural required height
- search results, workout history, and other variable/unbounded content may keep a 780 root and use the relevant internal vertical-scroll frame
- grow-vs-scroll is decided by the screen/content pattern; do not apply one blanket rule to every screen
- root `minHeight=780` is not used

Current verified exceptions to the 780 baseline:
- `04D_Exercise_Detail_Info` — `360 × 894`, full finite content + bottom padding preserved
- `04K_Custom_SecondaryMuscle_Select` — `360 × 834`, all finite options + bottom padding preserved

## Locked custom-exercise rules

Required structured metadata:
- exercise name
- equipment
- primary muscle
- recording type

Optional:
- secondary muscle
- user-added media

Selection pattern:
- full-page single-selection using existing `Nav Header` + `OptionItem`
- secondary muscle includes `선택 안 함`
- recording type uses the same 4 MVP types as Group 05

Edit history lock:
- once at least one completed history record exists, recording type is read-only
- helper copy: `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`
- equipment / primary / secondary muscle remain editable

Save destination — PO APPROVED:
- create Save returns to the exercise list/add-exercise flow
- the newly created custom exercise is immediately selected, using the existing selected-list pattern (`04B_Search_Selected`)
- edit Save returns to that exercise's detail screen with updated metadata reflected
- no separate creation-complete screen is added

Delete policy — PO APPROVED:
- deleting a custom exercise removes it from exercise search/list and new-add targets
- it is also removed from every saved routine that currently contains it
- completed historical workout records remain preserved
- recent-history/growth history derived from those completed records remains preserved
- destructive confirmation dialog is required before delete
- if affected routine count is reliably known, the dialog may state `N개의 루틴`
- if the deleted exercise was the only exercise in a saved routine, that routine is **retained as an empty routine**; the routine itself is not cascade-deleted
- corresponding empty saved-routine Figma state is reflected on Group 03: `03D_Routine_Detail_Empty` — `1423:1972`
- delete-confirmation Figma state is reflected on Group 04: `04F_Custom_Delete_Confirm` — `1429:1751`

Delete dialog Figma state:
- full `360 × 780` viewport state
- no duplicated underlying product screen in the QA/reference state
- full-screen existing `ModalOverlay` reused
- existing canonical `DialogCard` remains an instance; no detach/rebuild
- Title: `운동을 삭제할까요?`
- Body: `이 운동은 운동 목록과 포함된 모든 루틴에서 제거됩니다. 완료된 운동 기록은 유지됩니다.`
- Actions: `취소 / 삭제`
- `삭제` action uses existing semantic `state/danger`
- screenshot/read-back focused QA PASS

Figma QA:
- `04B_Search_Selected` remains `360 × 780`; bottom `SelectionFooter` restored to `y=680`, bottom=`780`
- `04D_Exercise_Detail_Info` restored to `360 × 894`; `ExerciseDetailContent=722px`, bottom padding `24px`
- `04K_Custom_SecondaryMuscle_Select` restored to `360 × 834`; `SelectionPageContent=716px`, bottom padding `20px`
- `04E`, `04F`, `04F_Custom_Edit_HistoryLocked`, Growth and Empty representative states fit the 780 baseline without forced compression
- search/history and other dynamic lists keep internal vertical scroll + clipping where appropriate
- accidental root minHeight constraint = 0
- no new component/token/style introduced for this correction
- screenshot/read-back PASS on corrected states

## Preserved deferred data/runtime work

- regenerated 211-row Production workbook/runtime DB
- exact Production attachment allowlists/canonical IDs/media mapping
- Cursor implementation

Remaining Group 04-specific component-master promotion into `Common_Component` has not been performed; do it only if PO explicitly requests that cleanup.

---

# GROUP 03 — ROUTINE CLOSED

Group 03 Product/UX rules and representative Figma states are closed at the current approved checkpoint.

Cross-group exception state added from approved Group 04 delete policy:
- `03D_Routine_Detail_Empty` — `1423:1972`
- saved routine identity remains even when exercise count becomes 0
- Summary = `0개 / 0분 / 0세트`
- `운동 추가` CTA shown
- `운동 시작` CTA hidden
- shared `EmptyState` pattern reused
- screenshot/read-back QA PASS

This does not reopen the rest of Group 03.

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement. Do not resume it unless PO requests it.

---

# NEXT OPEN ITEM

Finish Group 04 Product/UX QA with the remaining completion work only:

1. add/check the no-media Exercise Detail representative state because approved policy says media absence must not reserve an empty media box
2. if no blocker remains, run scoped final Group 04 closure QA and mark Group 04 CLOSED

Do not reopen already passed recording-type, selector, list/filter, save-destination, delete-policy/dialog, or height QA without a new conflict/regression.

Do not return to deferred Group 02 and do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
