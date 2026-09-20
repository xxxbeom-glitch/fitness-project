# 2026-09-20 Group 02 Home With-Routine Simplification

**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · WEEKDAY/TODAY-NEXT MVP SEMANTICS REMOVED

## Decision

The MVP Home does not use weekday scheduling, "today's workout", "next workout", or a hidden selected/default routine.

Canonical Home states:

### 02A — No saved routine
`02A_Home_NoRoutine` — `1346:686`

Top:
- `빠른 시작`
- `빈 운동`
- `내 루틴 만들기`

Lower:
- no secondary section

### 02B — Saved routine(s) exist
`02B_Home_WithRoutine` — `1329:593`

This state reuses the same Quick Start structure as 02A.

Top:
- `빠른 시작`
- `빈 운동`
- `내 루틴 만들기`

Lower:
- `내 루틴`
- 2 × n routine grid
- `새 루틴` action remains

The intended layout difference between 02A and 02B is:
- 02A: Quick Start only
- 02B: the same Quick Start + My Routine grid

Do not place a saved routine into Quick Start merely because routines exist.

### 02D — Active workout exists
`02D_Home_Active` — `1346:710`

Active Workout state remains the exception:
- the current in-progress workout is the primary Home action
- the same active session is resumed
- no Recent Workout section is shown on Home
- one-active-workout invariant remains

## Home recent-workout rule

Home does not show a `최근 운동` / `전체 기록` section in any Group 02 state.

Workout history remains available through the Analysis / history surfaces.

## Removed MVP semantics

The following are not part of current MVP:
- optional weekday assignment on routines
- Home `오늘의 운동`
- Home `다음 운동`
- automatically selecting the first/last/recently-created routine for Quick Start
- hidden "selected routine" state on Home

These may be reconsidered post-MVP only with a new product decision.

## Figma reflection

Changed canonical node:
- `1329:593`
- renamed from `02B_Home_RoutineSelected`
- to `02B_Home_WithRoutine`

Removed:
- `RoutineFocusCard / Ready` selected-routine Quick Start card

Added/reused:
- cloned 02A `StartChoiceSection`
- shared `StartChoiceCard / BlankWorkout`
- shared `StartChoiceCard / BuildOwn`

Retained:
- existing `MyRoutineSection`
- shared `HomeRoutineTile`
- 2 × n grid
- BottomAppBar `Active=홈`

## Focused Figma QA

02B read-back:
- selected-routine Quick Start cards = `0`
- Blank Workout cards = `1`
- Build Own cards = `1`
- HomeRoutineTile instances = `2` in the representative state
- sections:
  - `StartChoiceSection` — 320 × 208
  - `MyRoutineSection` — 320 × 124
- missing main-component links = `0`
- BottomAppBar = `Active=홈`
- representative screenshot generated

Related Routine create/edit read-back:
- weekday/schedule control = `0`
- weekday/schedule visible copy = `0`

## Result

**PASS — Home weekday/today-next/selected-routine conflict is resolved for MVP.**

This checkpoint supersedes the selected-routine Quick Start behavior in:
- `docs/ux-decisions/2026-09-18-group02-home-routine-selected-compact-direction.md`

It does not yet decide what a `내 루틴` tile tap should do. That interaction remains the next Group 02 behavior question.
