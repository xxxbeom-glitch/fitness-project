# Group 05 Manual Timer — Final Closure QA

**Date:** 2026-09-16  
**Status:** PO APPROVED · FIGMA CANONICAL · FOCUSED QA PASS · GROUP 05 RE-CLOSED

## Scope

This closes only the scoped 2026-09-16 Group 05 reopen for the **manual countdown timer opened from the Active Workout Nav Header timer action**.

Previously locked Group 05 behavior remains unchanged:
- WorkoutLiveBar
- pinned Active Workout scroll behavior
- automatic RestLiveBar
- workout end/discard behavior
- all other previously QA-passed Group 05 states

## Canonical Figma

File:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `05 운동 중` — `233:2076`

Canonical representative screens:
- `05Q_ManualTimer_Idle` — `1519:2581`
- `05Q_ManualTimer_Running` — `1525:4014`
- `05Q_ManualTimer_Paused` — `1547:3691`

The prior `EXP_ManualTimer_*` screen naming is removed.

## Shared component promotion

The approved popup shell is promoted into the confirmed Group 05 component area:

- parent: `Common_Component / 05_GROUP_CONFIRMED_COMPONENTS`
- `ManualTimerPopup` component set — `1556:3897`
  - `State=Idle` — `1556:3867`
  - `State=Running` — `1556:3881`
  - `State=Paused` — `1556:3896`

Canonical 05Q screens use instances of these variants rather than detached popup frames.

## Locked Manual Timer behavior

### Entry / separation
- Manual Timer is separate from workout elapsed time and automatic Rest Timer.
- it opens as a centered popup from the Nav Header timer action.
- it does not reuse the fixed-bottom RestLiveBar.

### Time setup
- default representative value: `01:30`
- no direct/manual time entry
- no edit icon or edit affordance
- only `-15초 / +15초` adjustment is supported for MVP

### Idle
- `타이머 시작` starts countdown.

### Running
- countdown and ring decrease together.
- `-15초 / +15초` remain available.
- CTA is `일시정지`.

### Paused
- countdown and ring freeze at the remaining state.
- `계속하기` resumes from the same remaining time.
- `초기화` returns to Idle `01:30`.

### Close
- circular `X` uses the existing `icon/close-circle` component.
- Idle X dismisses the popup.
- Running / Paused X terminates the current Manual Timer and dismisses the popup.
- remaining time is not preserved after close.
- reopening begins from Idle `01:30`.

### Zero completion
- countdown stops at `00:00` and never goes negative.
- the same popup remains open.
- no auto-close or auto-reset.
- no separate completion screen, toast, animation, sound, or vibration for MVP.
- X remains the explicit close/terminate action.

### Automatic Rest Timer overlap
- two countdown timers do not run simultaneously.
- while automatic Rest Timer / RestLiveBar is active, the Nav Header manual-timer action is unavailable.
- canonical `05F_Workout_RestTimer` shows the 44×44 timer action at opacity `0.30`.
- once automatic rest ends or `휴식 종료` is used, the manual-timer action becomes available again.
- no extra toast/dialog is required when unavailable.

## Design-system alignment

Focused read-back confirms:
- popup: `294 × 412`, radius `24`
- existing popup surface fill/border variable bindings preserved
- ring Track → existing border variable
- ring Fill → existing brand primary variable
- countdown value → existing text style/color binding
- existing `CTA Button` reused
  - Idle: Primary `타이머 시작`
  - Running: Primary `일시정지`
  - Paused: Secondary `초기화` + Primary `계속하기`
- existing `icon/close-circle` main component `1255:1142` reused at `24 × 24`
- obsolete hidden `TimeEditIcon` count in shared variants and canonical 05Q screens = `0`

The existing base CTA sizing is intentionally retained for this approved scope; PO chose to proceed without introducing a new compact CTA variant.

## Focused QA evidence

### Structure / binding QA
PASS:
- `ManualTimerPopup` has exactly Idle / Running / Paused variants.
- all three canonical screens are `360 × 780`.
- each canonical popup instance is positioned at x `33`, y `184`, size `294 × 412`.
- each canonical screen points to the expected shared variant main component.
- no `EXP_ManualTimer_*` top-level screen remains.
- no obsolete edit affordance remains inside canonical popup variants/screens.
- existing color/style/component bindings remain intact.

### Screenshot QA
PASS:
- `05Q_ManualTimer_Idle`: centered ring/value, quick adjustments, X and start CTA render without clipping/overlap.
- `05Q_ManualTimer_Running`: partial ring, `01:12`, X, quick adjustments and `일시정지` render without clipping/overlap.
- `05Q_ManualTimer_Paused`: `초기화 / 계속하기` action row renders cleanly without clipping/overlap.
- `05F_Workout_RestTimer`: timer action visibly reads as disabled while RestLiveBar remains intact.

No blocking visual, binding, component-instance, naming, or overlap regression was found in the approved scope.

## Result

**PASS — Manual Timer is approved, canonicalized, componentized, and the scoped Group 05 reopen is CLOSED.**

Next open item:
- Group 06 — 운동 완료 final closure QA

**NO CURSOR IMPLEMENTATION HANDOFF.**