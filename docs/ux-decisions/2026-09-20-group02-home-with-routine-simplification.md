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
- `내 루틴` section remains visible
- zero routines → section header only; no empty-state copy/body
- section header has no right-side action

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

The Home section structure is persistent:
- 02A: Quick Start + My Routine header-only zero-routine state
- 02B: the same Quick Start + My Routine 2 × n grid

The My Routine section is not removed when the routine count is zero; only its content state changes.

Do not place a saved routine into Quick Start merely because routines exist.

### 02D — Active workout exists
`02D_Home_Active` — `1346:710`

Active Workout state remains the exception:
- the current in-progress workout is the primary Home action
- the same active session is resumed
- My Routine remains below the active-workout section
- My Routine uses populated grid when routines exist; with zero routines, keep only the `내 루틴` header
- no Recent Workout section is shown on Home
- one-active-workout invariant remains

## My Routine header rule

Across 02A / 02B / 02D:
- My Routine header copy = `내 루틴 (n)` where `n` is the current saved-routine count
- My Routine header = `SectionHeader / Trailing=None`
- no `새 루틴` action on the right
- routine creation remains available through the Quick Start `내 루틴 만들기` card

## Home recent-workout rule

Home does not show a `최근 운동` / `전체 기록` section in any Group 02 state.

The removed Recent Workout area is replaced by/preserved as the `내 루틴` section. The section remains present even when the saved-routine count is zero.

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

## 02A empty-state reflection

`02A_Home_NoRoutine` now contains:
- `StartChoiceSection`
- `MyRoutineSection`
- `MyRoutineSection` contains only `SectionHeader / Trailing=None`
- representative title = `내 루틴 (0)`
- no empty-state body/copy is shown

`02D_Home_Active` now contains:
- `RoutineFocusSection`
- `MyRoutineSection`
- representative state shows populated routine tiles
- representative title = `내 루틴 (2)`
- runtime zero-routine state keeps only the `내 루틴` header; no empty-state copy/body

## Focused Figma QA

02B read-back:
- selected-routine Quick Start cards = `0`
- Blank Workout cards = `1`
- Build Own cards = `1`
- HomeRoutineTile instances = `2` in the representative state
- 02B representative title = `내 루틴 (2)`
- 02A representative title = `내 루틴 (0)`
- 02D representative title = `내 루틴 (2)`
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
