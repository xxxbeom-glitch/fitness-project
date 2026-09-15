# Group 05 Active Workout Scroll / Pinned Header Behavior

**Date:** 2026-09-15  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · GROUP 05 CLOSED AGAIN

## Scope

This is a scoped post-closure amendment for the common Active Workout scrolling behavior after the 2026-09-15 `WorkoutLiveBar` amendment.

It defines what remains visible while the user scrolls a long workout list. Existing workout recording, end/discard, elapsed-time, recovery, reorder, replacement, and routine-update semantics are unchanged unless explicitly stated below.

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`
- canonical `05A_Workout_Weight` — `148:1979`
- scrolled representative state — `05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`
- Rest Timer representative state — `05F_Workout_RestTimer` — `1498:2769`

## Decision

### 1. Fixed top region

While the user vertically scrolls the workout exercise list, the following top region stays visible:

1. `StatusArea_Spacer` — `62`
2. `Nav Header` — `56`
3. `WorkoutLiveBar` — `64`

Total fixed top region: **182 px** on the 360 × 780 representative viewport.

The `Nav Header` and `WorkoutLiveBar` do not collapse, auto-hide, or scroll away when the user reaches later exercises such as the third or fourth exercise.

### 2. Only WorkoutContent scrolls

Canonical `05A_Workout_Weight` uses a real viewport structure:

- root: `360 × 780`
- fixed top region: `y=0..182`
- `WorkoutContent`: `y=182`, `360 × 598`
- `WorkoutContent` is clipped and vertically scrollable

Exercise cards and the bottom `운동 추가` action belong to `WorkoutContent` and move with the workout list.

`운동 추가` is **not** promoted to a fixed bottom action by this decision.

The scrolling list does not replace or cover the fixed Nav Header / WorkoutLiveBar region.

### 3. Scrolled representative state

`05A_Workout_Weight_Scrolled_3rdExercise` (`1495:2408`) is the canonical static reference for a user who has scrolled down to the third exercise.

It shows:

- the same fixed Nav Header
- the same fixed `WorkoutLiveBar`
- earlier exercise cards scrolled out of the viewport
- the third exercise beginning below the fixed live bar

This representative state documents the expected runtime composition without creating a new parallel component system.

### 4. Rest Timer coexistence — latest 2026-09-15 rule

The earlier transient top `RestTimerPill` treatment is superseded by the PO-approved fixed-bottom `RestLiveBar`.

When the automatic Rest Timer is running:

- fixed Nav Header remains visible
- fixed `WorkoutLiveBar` remains visible
- `RestLiveBar` is fixed to the bottom of the 360 × 780 viewport
- `RestLiveBar`: y `708`, h `72`
- `WorkoutContent`: y `182`, h `526`, clipped internal vertical scroll
- the exercise list scrolls only in the space between the fixed top region and RestLiveBar
- the Rest Timer does not replace or hide workout elapsed-time control, `종료`, or `취소`

The exact Rest Timer trigger/countdown/end semantics are governed by:

- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- `docs/ux-decisions/2026-09-15-group05-rest-live-bar-amendment.md`

## Figma reflection

### Canonical 05A

`05A_Workout_Weight` — `148:1979`

Final top-level structure:

1. `StatusArea_Spacer` — y 0 / h 62
2. `Nav Header` — y 62 / h 56
3. `WorkoutLiveBar` — `1492:2407` — y 118 / h 64
4. `WorkoutContent` — `148:1989` — y 182 / h 598 / vertical scroll / clips content

### Scrolled state

`05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`

- 360 × 780
- Nav Header reuses local main component `668:4460`
- WorkoutLiveBar reuses local `Timer=Running` main component `1485:935`
- third exercise begins at 20 px inside the scrolling viewport

### Rest Timer state

`05F_Workout_RestTimer` — `1498:2769`

- 360 × 780
- same fixed top hierarchy as canonical 05A
- `WorkoutContent` — `1498:2773` — y 182 / h 526 / clipped internal scroll
- local `RestLiveBar` instance — `1516:6607` — y 708 / h 72
- RestLiveBar main component — `1516:6598`
- obsolete RestTimerPill removed

## Focused QA

PASS:

- canonical 05A root is `360 × 780`
- fixed top region remains outside the scrolling container
- normal `WorkoutContent` is `360 × 598`, clipped, vertical scroll
- Nav Header and WorkoutLiveBar remain local component instances
- canonical initial-state screenshot: PASS
- third-exercise scrolled representative screenshot: PASS
- Rest Timer representative state uses the same fixed top hierarchy plus fixed bottom RestLiveBar
- Rest Timer state `WorkoutContent` read-back is `360 × 526`
- RestLiveBar read-back is y `708`, h `72`
- no content overlap with the fixed bottom RestLiveBar
- canonical Rest Timer screenshot: PASS

## Explicitly not changed

- workout elapsed-time Running / Paused semantics
- workout end / discard semantics
- exercise-card data entry behavior
- set completion behavior
- workout-add action semantics
- recovery / reorder / replacement behavior
- Cursor/runtime implementation

Rest Timer presentation/control details are no longer excluded from this amendment chain; they were separately updated by the later `2026-09-15-group05-rest-live-bar-amendment.md` decision.

## Result

**PASS — fixed Active Workout top hierarchy + Rest Timer bottom-bar coexistence is locked and Group 05 returns to CLOSED.**

The next project QA item remains Group 06 completion final closure QA.

**NO CURSOR IMPLEMENTATION HANDOFF.**
