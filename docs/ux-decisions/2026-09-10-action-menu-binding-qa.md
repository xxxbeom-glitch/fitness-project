# Action Menu Design-System Binding QA — 2026-09-10

**Status:** PASS AFTER SECOND-PASS SURFACE CORRECTION

## Scope

Focused QA only for the newly reflected action-menu work. Previously approved Group 03/04/05 ranges were not reopened.

Checked Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- local `ActionRows` component set — `707:1114`
- local `ActionSheet` component set — `707:1197`
- canonical existing `BottomSheet / Menu` — `686:753`
- canonical existing `Overflow Menu / Type=Routine` — `416:872`
- `05I_Workout_Menu` — `148:3392`
- `03A_Routine_List_Menu` — `706:5023`
- `03F_Routine_Exercise_Menu` — `706:5087`
- new local icons: `icon/replace` `706:954`, `icon/trash` `706:959`, `icon/copy` `706:965`

## First-pass finding and fix

The initial localization left raw visual values in the new action-menu family. These were rebound to existing local Fitness tokens/styles:

- labels → `label/02` + `text/primary`
- sheet title → `heading/01` + `text/primary`
- sheet subtitle → `body/02` + `text/secondary`
- new icon foregrounds → `text/primary`
- spacing/radius/border thickness → existing local tokens

No new token was created.

## Second-pass surface finding

The first binding pass was technically bound but still contained **surface-semantic mismatches**.

### 1. ActionSheet bottom-sheet surface

The new `ActionSheet` variants used the correct `glass/surface-20` color token, but did not carry the canonical glass effect from the existing local `BottomSheet / Menu` component.

Canonical source:

- `BottomSheet / Menu` — `686:753`
- surface color → `glass/surface-20`
- effect → `GLASS`, radius 16, refraction 0.55, depth 25, light angle -45, light intensity 1, dispersion 0.6

Correction applied to:

- `Mode=WorkoutExercise` — `707:1115`
- `Mode=RoutineExercise` — `707:1145`
- `Mode=CustomExercise` — `707:1174`

All three now match the canonical bottom-sheet surface treatment.

### 2. 03A floating panel surface

`03A` is a floating panel, not a bottom sheet. The first pass incorrectly left its `Mode=RoutineList` action surface on `bg/default`.

Existing local floating-menu source:

- `Overflow Menu / Type=Routine` — `416:872`
- surface → `bg/elevated`
- border → `border/subtle`
- shadow → existing local overflow-menu drop shadow

Correction applied to:

- `ActionRows / Mode=RoutineList, Buttons=3` — `707:1076`

The two internal vertical dividers were also changed to `border/subtle`, because `bg/elevated` dividers would disappear against the newly corrected elevated panel surface.

### 3. ActionRows used inside bottom sheets

The bottom-sheet action-row variants remain on `bg/default`, matching the existing `BottomSheet / Menu` inner options surface:

- `Mode=Workout, Buttons=3` — unchanged
- `Mode=RoutineExercise, Buttons=3` — unchanged
- `Mode=CustomExercise, Buttons=2` — unchanged

## Final focused read-back

### ActionSheet

Canonical `686:753` vs new variants:

- `glass/surface-20` binding: exact match
- GLASS effect: exact match
- local spacing/radius bindings: retained
- missing/remote component main: 0

### 03A floating RoutineList panel

Canonical `416:872` vs `707:1076`:

- `bg/elevated`: exact match
- `border/subtle`: exact match
- drop shadow: exact match
- internal dividers → `border/subtle`
- local spacing/radius/border-thickness bindings retained

### Representative screens

- `05I_Workout_Menu` — missing main 0 / remote main 0
- `03A_Routine_List_Menu` — missing main 0 / remote main 0
- `03F_Routine_Exercise_Menu` — missing main 0 / remote main 0

Focused visual read-back after the second correction: PASS.

## Final result

**PASS — action-menu binding is now correct both structurally and semantically for surface roles.**

The earlier PASS statement was incomplete because it verified token presence without sufficiently comparing the surface role against the existing canonical BottomSheet and Overflow Menu treatments. This checkpoint supersedes that first-pass interpretation.

## Next open item

Return to Product/UX review of:

- `05N_Workout_OtherRoutine` — `148:3561`

No Cursor implementation handoff.
