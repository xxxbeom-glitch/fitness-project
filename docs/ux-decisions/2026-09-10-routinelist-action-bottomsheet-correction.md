# 03A Routine List Action Menu — Bottom Sheet Correction

**Date:** 2026-09-10  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS

## Change

PO explicitly changed the `03A_Routine_List` card `...` interaction from the previously approved compact floating panel to the same shared icon-action bottom-sheet presentation used by the other action-menu flows.

Current 03A action menu:

- title: `루틴 관리`
- actions: `복제 / 수정 / 삭제`
- full-screen dim overlay
- shared bottom-sheet surface / handle / CTA treatment
- CTA: `닫기`

The previous panel-only presentation for 03A is superseded.

## Figma reflection

Canonical file: `W3lZurXCXbThP67rF2xk2b`

- `03A_Routine_List_Menu` — `706:5023`
- `ActionSheet` component set — `707:1197`
- new `Mode=RoutineList` ActionSheet variant — `714:664`
- screen instance — `714:693`
- dim overlay — `714:692`
- nested `ActionRows / Mode=RoutineList, Buttons=3` — `707:1076`

`Mode=RoutineList` ActionRows was returned from the temporary floating-panel surface treatment to the canonical bottom-sheet action-row treatment:

- surface: `bg/default`
- border: existing local `border/default`
- no floating-panel shadow
- internal dividers follow the bottom-sheet action-row treatment

The `Mode=RoutineList` ActionSheet inherits the canonical bottom-sheet semantics:

- `glass/surface-20`
- existing GLASS effect
- existing local spacing / radius / handle / CTA bindings

No new token was created.

## Focused QA

Only the explicit 03A change and its directly affected shared variant were checked.

- `03A_Routine_List_Menu` visual read-back: PASS
- ActionSheet `Mode=RoutineList`: local main links intact
- nested ActionRows main: `707:1076`
- overlay: local `bg/overlay`
- missing main: 0
- remote main: 0
- duplicate `Mode=RoutineList` ActionSheet variant: 0

Unrelated previously PASSed Group 03/04/05 ranges were not reopened.

## Supersedes

For 03A only, this checkpoint supersedes the floating-panel statements in:

- `2026-09-10-action-menu-presentation.md`
- `2026-09-10-action-menu-binding-qa.md`

Other action-menu decisions remain unchanged.

## Next open item

Return to `05N_Workout_OtherRoutine` product-flow review.

No Cursor implementation handoff.
