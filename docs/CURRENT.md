# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 03 ROUTINE POST-QA REFINEMENT · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

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

# GROUP 03 — ROUTINE QA PASS + POST-QA REFINEMENT

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

Current confirmed refinements:
- Production-style long exercise names reflected in Group 03 samples
- `운동 구성` heading removed from create-with-exercises and edit screens
- routine create/edit supports user-entered `SET / KG / REPS`
- active workout uses the same entry model; performed values become workout-record data
- `순서 변경` reuses `05J_Reorder` and returns to the originating Group 03 create/edit screen
- `대체 운동` reuses `05G_Exercise_Replace_Suggest` and returns with the selected exercise substituted in the same position
- replacement does not copy values from the old exercise
- replacement loads the selected exercise's own latest personal recorded values using that exercise's recording type
- if the replacement exercise has no personal history, start with one empty set row

Recommendation acceptance remains:
`추천 결과/상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부 선택`

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement. Do not resume it unless PO requests it.

---

# NEXT OPEN ITEM

Remaining Group 03 product follow-up:
1. unsaved-change/back, create-save, edit-save, routine delete confirmation/destination
2. source/calculation rule for routine `예상 시간`

Do not begin Cursor implementation handoff until Product Owner explicitly requests development transition.
