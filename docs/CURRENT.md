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
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md` — current recommendation acceptance flow; supersedes old DEC-014 flow semantics
- `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`
- `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`

Prior approved / locked checkpoints should not be reopened without a new issue:
- `docs/ux-decisions/2026-09-14-group01-cross-group-qa.md`
- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- Group 08 settings/account checkpoints from 2026-09-14 remain recorded in `docs/ux-decisions/`.

---

# GROUP 03 — ROUTINE QA PASS + POST-QA REFINEMENT RECORDED

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

Cross-group planning / Figma / design-system QA result:
- planning/product match = PASS
- Figma screen inventory = PASS
- structure / Auto Layout = PASS after targeted cleanup
- component / variable binding = PASS after targeted fixes
- screenshot / product correctness = PASS
- stale `03G_Routine_Readonly` = absent

Targeted fixes applied during the QA pass:
- repeated raw 03A routine cards promoted to shared local `RoutineListCard` — main `1362:905`
- Group 03 raw attachment-status chips replaced by canonical local `AttachmentTag` — main `693:6035`
- 03A / 03F ActionSheet QA states normalized to full viewport + overlay + canonical sheet without duplicated underlying product UI

Post-QA PO refinements now reflected:
- routine detail/create/edit exercise samples use current Production-style long names for layout stress QA
- redundant `운동 구성` heading removed from `03E2_Routine_Create_WithExercises` and `03F_Routine_Edit`
- routine create/edit may input and modify `SET / KG / REPS`
- user-entered KG is allowed in the routine; the app must not infer working weight from demographic data
- active workout uses the same entry model and may modify the same values during the session
- actual performed values remain workout-record data

Recommendation acceptance semantics:
- current flow = `추천 결과/상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부 선택`
- do not use the old `이 루틴 사용하기 → save → Home` DEC-014 behavior as the current implementation contract

Non-blocking deferred content:
- sample set-table values such as `W / 1 / 2 / D / F`, `80 KG`, `35 REPS` are visual samples only and are not approved default prescription data

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred the current Group 02 Home refinement on 2026-09-14.

The existing Group 02 checkpoint remains valid and unfinished:
- `docs/ux-decisions/2026-09-14-group02-home-refinement-checkpoint.md`

Do not continue the 02A artwork/re-entry/three-state lock work unless the Product Owner returns to Group 02.

---

# NEXT OPEN ITEM

Continue Group 03 product follow-up only when the Product Owner requests it.

Current open items:
1. define `순서 변경` / `대체 운동` downstream behavior and replacement-value carryover/reset rules
2. define unsaved-change/back, create-save, edit-save, delete-confirmation/destination behavior
3. define the source/calculation rule for routine `예상 시간`

Do not automatically return to deferred Group 02 and do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
