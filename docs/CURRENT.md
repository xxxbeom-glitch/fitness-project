# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 03 ROUTINE PRODUCT FOLLOW-UP CLOSED · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-14-group03-post-qa-refinement-checkpoint.md`

Directly relevant Group 03 decisions / checkpoints:
- `docs/ux-decisions/2026-09-14-group03-routine-cross-group-qa.md`
- `docs/ux-decisions/2026-09-08-routine-figma-03-checkpoint.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`

---

# GROUP 03 — ROUTINE QA PASS + POST-QA PRODUCT RULES CLOSED

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `03 루틴` — `233:2074`

Current valid primary screens:
- `03A_Routine_List` — `34:1401`
- `03B_Routine_Empty` — `34:1438`
- `03C_추천루틴상세` — `40:2272`
- `03D_Routine_Detail` — `34:1447`
- `03E_Routine_Create` — `34:1457`
- `03E2_Routine_Create_WithExercises` — `352:896`
- `03F_Routine_Edit` — `34:1477`

Current valid representative action-menu states:
- `03A_Routine_List_Menu` — `706:5023`
- `03F_Routine_Exercise_Menu` — `706:5087`

Current confirmed refinements / behavior:
- Production-style long exercise names reflected in Group 03 samples
- `운동 구성` heading removed from create-with-exercises and edit screens
- routine create/edit supports user-entered `SET / KG / REPS`
- active workout uses the same entry model; performed values become workout-record data
- `순서 변경` reuses `05J_Reorder`
- `대체 운동` reuses `05G_Exercise_Replace_Suggest`
- replacement loads the selected exercise's own latest personal record; no history = one empty set row
- changed create/edit screen + Back → unsaved-change confirmation: `변경사항을 저장하지 않고 나갈까요?` / `나가기` / `계속 편집`
- new routine save → that routine's `03D_Routine_Detail`
- existing routine edit save → updated `03D_Routine_Detail`
- routine delete → confirmation `루틴을 삭제할까요?` / `삭제` / `취소` → confirmed delete returns to `03A_Routine_List`
- routine estimated duration now has a deterministic rule:
  - unchanged routine with history → median of up to 3 recent fully completed sessions, rounded to 5 min
  - no valid history / structure changed → planned structure fallback using active-set time + rest + exercise transition, rounded to 5 min
  - reps/load set default active time = 45 sec
  - duration set = programmed duration
  - configured rest wins; otherwise fallback rest = 90 sec between sets
  - exercise transition = 60 sec between exercises
  - partial records excluded
  - structural changes invalidate history estimate; KG/REPS-only edits do not
  - recommended routine templates carry validated duration compatible with recommendation preference `30 / 45 / 60분`

The current `예상 시간` UI pattern remains valid; no new visual component is required for the duration rule.

Recommendation acceptance remains:
`추천 결과/상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부 선택`

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement. Do not resume it unless PO requests it.

---

# NEXT OPEN ITEM

Group 03 product follow-up is resolved.

Wait for the Product Owner to select the next Figma QA group / product item. Do not automatically return to deferred Group 02 and do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
