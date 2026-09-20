# 2026-09-20 Group 03 Routine Final Closure

**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · GROUP 03 CLOSED · NO CURSOR HANDOFF

## Scope

This closes the remaining Group 03 Routine decisions identified by sequential handoff QA:

1. Routine duplicate behavior
2. W / D / F set semantics

Previously approved Group 03 flows remain unchanged.

## Decision 1 — Routine duplicate

`03A_Routine_List_Menu` keeps the existing `복제` action.

Behavior:
- tapping `복제` creates a new saved routine immediately
- do not open Routine Edit/Create automatically
- remain on / return to `03A_Routine_List`
- the duplicated routine appears in the list immediately
- tapping the duplicated routine card later opens its normal `03D_Routine_Detail`
- duplication must not start an Active Workout

Copy boundary:
- create a new routine identity
- deep-copy the source routine's editable routine definition
- copy exercise list/order and current set configuration/planned values
- completed workout history is not copied and is never re-linked to the duplicate
- the duplicate therefore has no own completed-session history at creation
- estimated duration uses the existing planned-structure fallback until the duplicate has valid completed history
- weekday/scheduling metadata is irrelevant because weekday scheduling is outside the current MVP

Naming:
- first generated duplicate name = `원본명 (복제)`
- if that generated name already exists, use the smallest available numeric duplicate suffix such as `원본명 (복제 2)`, `원본명 (복제 3)`
- the generated duplicate name remains editable later

Current representative Figma already shows:
- menu action `복제`
- list example `하체 루틴 B (복제)`

No new visual screen is required.

## Decision 2 — MVP set model is numeric-only

Hevy-like special set types were the intent behind:
- `W` = warm-up set
- `D` = drop set
- `F` = failure set

They are not part of the current MVP.

Current MVP rule:
- routine sets are displayed and ordered only as numeric sets: `1, 2, 3 ... n`
- Routine Detail / Create / Edit do not show W / D / F
- no special-set selector/control is implemented in the MVP
- Active Workout keeps the existing numeric-set model
- all completed MVP sets are handled as normal sets under the existing volume/history/analysis rules
- warm-up / drop / failure set types may be reconsidered post-MVP through a separate Product Decision

## Figma reflection

Canonical shared component:
- `Common_Component > ExerciseCard` — `637:3561`

Updated variants:
- `Mode=View` — `637:3562`
- `Mode=Edit` — `637:3611`

Change:
- former rows `W / 1 / 2 / D / F`
- now `1 / 2 / 3`
- D/F rows removed
- Workout variants were not changed because they already use numeric sets

Resulting shared component heights:
- View: `320 × 280`
- Edit: `320 × 394`

Inherited canonical screens:
- `03D_Routine_Detail` — `34:1447`
- `03E2_Routine_Create_WithExercises` — `352:896`
- `03F_Routine_Edit` — `34:1477`

`03D_Routine_Detail` authored height now resolves to `360 × 1516`.

## Focused QA

Group 03 canonical screens checked:
- `03A_Routine_List`
- `03B_Routine_Empty`
- `03D_Routine_Detail`
- `03E_Routine_Create`
- `03E2_Routine_Create_WithExercises`
- `03F_Routine_Edit`
- `03A_Routine_List_Menu`
- `03F_Routine_Exercise_Menu`
- `03EF_Routine_Unsaved_Confirm`
- `03F_Routine_Delete_Confirm`
- `03D_Routine_Detail_Empty`

Read-back:
- W / D / F visible count across Group 03 = `0`
- 03D / 03E2 / 03F ExerciseCard set rows = `1 / 2 / 3`
- 03D visible set rows = `12`
- 03D summary = `총 세트 12세트`
- visible text overflow = `0`
- missing main-component links = `0`
- visible font family = SUIT
- screenshots generated for representative 03D / 03E2 / 03F states

Whole MVP after shared-component cleanup:
- top-level frames = `94`
- instance nodes = `1,820`
- missing main-component links = `0`
- live MVP instance sources outside `Common_Component` = `0`

## Result

**PASS — Group 03 Routine is closed.**

No production implementation is authorized by this decision.
