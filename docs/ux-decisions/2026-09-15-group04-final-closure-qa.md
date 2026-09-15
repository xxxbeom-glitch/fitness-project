# Group 04 Final Closure QA — 2026-09-15

**Status:** PASS · GROUP 04 CLOSED

## Scope

Final scoped closure QA after the 2026-09-14~15 Group 04 reopen.

Previously approved / already-passed recording-type, selector, list/filter, height, History/Growth, and shared-component QA was not reopened without a new regression trigger.

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — `233:2075`

## Final completion items checked

### 1. Custom exercise Save destination — PASS

PO-approved behavior remains locked:

- Create Save → return to exercise add/list flow
- newly created custom exercise is immediately selected using the existing selected-list pattern
- Edit Save → return to that exercise detail with updated metadata
- no separate creation-complete screen

Representative Figma states remain present:

- `04E_Custom_Create_Valid` — `1401:1890`
- `04B_Search_Selected` — `515:1140`
- `04F_Custom_Edit` — `34:1692`

Final screenshot/read-back confirms the valid Create and Edit states render correctly and both expose the existing Save action.

### 2. Custom exercise delete confirmation — PASS

Canonical state:

- `04F_Custom_Delete_Confirm` — `1429:1751`
- root: `360 × 780`
- full-screen overlay
- existing `DialogCard` remains an instance
- no duplicated underlying product screen in the QA/reference state

Copy/actions verified:

- title: `운동을 삭제할까요?`
- body: `이 운동은 운동 목록과 포함된 모든 루틴에서 제거됩니다. 완료된 운동 기록은 유지됩니다.`
- actions: `취소 / 삭제`
- destructive `삭제` action uses the approved danger treatment

Screenshot/read-back PASS.

### 3. Empty-routine cross-group consequence — PRESERVED

The approved delete policy can remove the last exercise from a saved routine without deleting the routine itself.

Corresponding Group 03 representative state remains:

- `03D_Routine_Detail_Empty` — `1423:1972`

This was already reflected and QA-passed; no further Group 03 reopening was performed.

### 4. Attachment-specific media fallback — PASS

PO-approved media rule:

- reviewed attachment-specific Gym Animations media exists → use that media
- attachment-specific media does not exist → use the canonical exercise base media
- direct/custom attachment text does not auto-map to media → use the canonical exercise base media

Therefore attachment-media absence does **not** create a separate no-media Exercise Detail state.

The obsolete `04D_Exercise_Detail_Info_NoMedia` representative frame was removed from canonical Figma. Final read-back confirms no matching frame remains.

`04H_Exercise_Attachment_Selection` — `170:2174` screenshot/read-back remains intact, including preset attachment options and `직접 입력` fallback.

### 5. Exercise Detail base state — PASS

`04D_Exercise_Detail_Info` — `40:2325`

Final read-back/screenshot confirms:

- natural finite height remains `360 × 894`
- media area is present for the canonical Gym Animations exercise media
- metadata, 운동 방법, 핵심 체크포인트 remain intact
- no empty no-media placeholder state was introduced

## Final structural read-back

The Group 04 page still contains the approved canonical states, including:

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
- `04I_Custom_Equipment_Select` — `1396:2298`
- `04J_Custom_PrimaryMuscle_Select` — `1396:8091`
- `04K_Custom_SecondaryMuscle_Select` — `1396:8179`
- `04L_Custom_RecordingType_Select` — `1396:8271`
- `04F_Custom_Edit_HistoryLocked` — `1396:8393`
- `04E_Custom_Create_Valid` — `1401:1890`
- `04EF_Custom_Unsaved_Confirm` — `1401:7683`
- `04F_Custom_Delete_Confirm` — `1429:1751`

No blocker was found in the final completion scope.

## Result

**PASS — GROUP 04 CLOSED**

This closes the current Product/UX + Figma Group 04 exercise-library/detail track.

## Not closed by this result

Separate data/runtime work remains outside this Figma closure:

- final canonical Production Exercise DB regeneration from the purchased Gym Animations `MP4/MALE/Library_database` raw **2,109-source-row** catalog after normalization/deduplication
- Production exercise-by-exercise attachment allowlists / canonical attachment IDs and names / attachment-media mapping
- runtime implementation / Cursor handoff

The old 195/211 Production target is not the current raw-source basis after the Gym Animations package analysis; the canonical production exercise count is to be finalized by the normalization/deduplication track.

**NO CURSOR IMPLEMENTATION HANDOFF.**
