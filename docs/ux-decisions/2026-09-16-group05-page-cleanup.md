# Group 05 — Figma Page Cleanup

**Date:** 2026-09-16  
**Status:** MAINTENANCE CLEANUP PASS · GROUP 05 REMAINS CLOSED

## Scope

Cleanup only for canonical Figma page `05 운동 중` (`233:2076`).
No Product/UX behavior was reopened or changed.

## Removed obsolete screens / artifacts

Removed from the Group 05 page:
- `05B_Workout_Reps` — `148:2164`
- `05C_Workout_Duration` — `148:2349`
- `05E_Workout_Assisted` — `148:2719`
- obsolete `Slice 1` — `713:14834`
- obsolete `Keypad` vector — `1512:12763`

### Why the three recording-type full screens were removed

The three full-page recording-type examples were legacy shells and still carried the old pre-amendment Active Workout structure (`WorkoutSummarySection` and old action rows).
They no longer represented the approved Group 05 canonical shell after the WorkoutLiveBar / pinned-scroll amendments.

Recording-type coverage is still preserved in the confirmed shared `ExerciseCard` component set in `Common_Component`:
- `Mode=Workout` — `637:3657` (`weight_reps`)
- `Mode=WorkoutReps` — `651:3537`
- `Mode=WorkoutDuration` — `651:3614`
- `Mode=WorkoutAssisted` — `651:3768`

No recording-type product support was removed.

The `Keypad` artifact was obsolete because direct/manual time entry was explicitly removed from the approved Manual Timer policy; the current timer uses only `-15초 / +15초`.

## Remaining canonical Group 05 representative screens

18 top-level frames remain, all `360 × 780`:

### Core workout / timer states
- `05A_Workout_Weight` — `148:1979`
- `05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`
- `05F_Workout_RestTimer` — `1498:2769`
- `05Q_ManualTimer_Idle` — `1519:2581`
- `05Q_ManualTimer_Running` — `1525:4014`
- `05Q_ManualTimer_Paused` — `1547:3691`

### Workout actions / replacement
- `05I_Workout_Menu` — `148:3392`
- `05J_Reorder` — `36:3609`
- `05G_Exercise_Replace_Suggest` — `713:14539`
- `05G2_Exercise_Replace_SecondBatch` — `731:3906`
- `05H_Exercise_Replace_Selected` — `713:14526`
- `05P_Exercise_Replace_DeleteConfirm` — `734:3883`

### End / switch / update dialogs
- `05K_End_Incomplete` — `36:3620`
- `05L_End_Complete` — `36:3623`
- `05M_Discard` — `36:3626`
- `05N_Workout_OtherRoutine_Incomplete` — `727:3622`
- `05N_Workout_OtherRoutine_Complete` — `727:3842`
- `05O_Workout_UpdateRoutine` — `148:3730`

The remaining screens were rearranged into three logical rows for maintenance/readability only; screen contents and node IDs were preserved.

## QA

PASS:
- expected canonical screen count = `18`
- missing expected screens = `0`
- obsolete removed nodes remaining = `0`
- recording-type `ExerciseCard` variants remain intact
- full-page screenshot review after cleanup shows no clipping or layout regression caused by the cleanup

## Result

**PASS — Group 05 page is cleaned of obsolete full-page recording-type legacy shells and manual-time-entry debris while preserving all current product states.**

Group 05 remains **CLOSED**.
Next product track remains **Group 06 final closure QA**.

**NO CURSOR IMPLEMENTATION HANDOFF.**