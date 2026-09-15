# Group 05 Manual Timer Popup — Scoped Reopen Checkpoint

**Date:** 2026-09-16  
**Status:** PO DIRECTION SELECTED · FIGMA REFLECTED · WIP CHECKPOINT · NOT CANONICAL

## Scope

This checkpoint records the current Product/UX direction for the **manual countdown timer opened from the Active Workout Nav Header timer action**.

It is a scoped Group 05 reopen only. It does not supersede the already locked WorkoutLiveBar or automatic RestLiveBar behavior.

Canonical Figma file/page:
- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`

Current experimental states:
- `EXP_ManualTimer_Popup_A_Idle` — `1519:2581`
- `EXP_ManualTimer_Popup_A_Running` — `1525:4014`
- `EXP_ManualTimer_Popup_A_Paused` — `1547:3691`

These states are **comparison/refinement artifacts**, not canonical production screens yet.

## Product separation

Three timer concepts remain intentionally separate:

1. **Workout elapsed time**
   - lives in the fixed `WorkoutLiveBar`
   - Running / Paused controls affect the workout elapsed-time counter

2. **Automatic Rest Timer**
   - starts from set completion
   - remains the fixed-bottom `RestLiveBar`
   - current `휴식 종료` behavior is unchanged by this checkpoint

3. **Manual Timer**
   - entered from the Nav Header timer action (`icon/timer-refresh`)
   - user-invoked countdown tool
   - presented as a centered modal popup rather than reusing the RestLiveBar

The manual timer must not visually masquerade as the automatic Rest Timer.

## Selected design direction

PO selected the **A / ring-centered popup direction** for continued development.

The prior B / quick-set proposal was deleted from Figma.

### Idle
- title: `타이머`
- upper-right close action: circular `X` icon using existing `icon/close-circle`
- countdown: representative `01:30`
- circular progress ring
- quick adjustment actions: `-15초`, `+15초`
- Primary CTA: `타이머 시작`

### Running
- title: `타이머`
- upper-right close action: circular `X` icon
- countdown: representative `01:12`
- circular progress ring shown partially depleted
- quick adjustment actions remain available: `-15초`, `+15초`
- Primary CTA: `일시정지`

### Paused
- title: `타이머`
- upper-right close action: circular `X` icon
- countdown and ring freeze at the remaining state; representative `01:12`
- quick adjustment actions remain available: `-15초`, `+15초`
- bottom action row:
  - Secondary `초기화`
  - Primary `계속하기`

## Time adjustment policy — 2026-09-16 PO lock

Manual Timer time adjustment is intentionally simple for MVP:

- no direct/manual time entry
- no edit icon or separate time-edit affordance
- countdown value is display-only
- the only time-adjustment controls are `-15초` and `+15초`
- the `±15초` step is locked for the current MVP direction

This keeps the timer as a lightweight workout utility instead of adding a separate time-entry interaction.

## Pause / resume / reset policy — 2026-09-16 PO lock

- Running CTA is `일시정지`, not stop/reset.
- `일시정지` freezes the countdown at the current remaining value and freezes the ring at the matching progress position.
- Paused `계속하기` resumes countdown from that same remaining value.
- Paused `초기화` resets the manual timer to the Idle default representative value `01:30` and returns to Idle.
- Reset is intentionally separated from pause so an accidental pause does not discard the current remaining time.

## Close affordance + behavior — 2026-09-16 PO lock

The former `닫기` text action is removed.

Visual:
- existing Fitness `icon/close-circle` component is reused
- local main component: `1255:1142`
- visual size: `24 × 24`
- positioned at the popup upper-right on the existing 24 px inset rhythm
- same close affordance is shown in Idle / Running / Paused

Behavior:
- `X` means **close and terminate the current Manual Timer**, not hide/preserve it in the background.
- Idle `X` simply dismisses the popup.
- Running `X` immediately ends the current manual countdown and dismisses the popup.
- Paused `X` immediately ends the paused manual countdown and dismisses the popup.
- remaining time is not preserved after closing.
- reopening the Manual Timer starts again from the Idle default `01:30` state.
- no separate background-running or hidden-manual-timer state exists for MVP.

## Copy reduction

Per PO direction, explanatory/helper copy is omitted.

The timer popup does not show explanatory lines such as:
- `수동 타이머`
- setup guidance
- time-edit guidance
- running/paused guidance

Only functional labels/actions remain visible.

## Design-system alignment

Current read-back:
- popup surface: `294 × 412`
- representative position on `360 × 780`: x `33`, y `184`
- radius: `24`, matching the existing Dialog surface treatment
- existing Dialog background/border variable bindings reused
- ring Track: `border/default`
- ring Fill: `brand/primary`
- existing `CTA Button` component set reused
  - Idle: Primary `타이머 시작`
  - Running: Primary `일시정지`
  - Paused: Secondary `초기화` + Primary `계속하기`
- existing `icon/close-circle` reused
- existing typography/color system reused
- countdown value is centered in the ring without an edit icon

No new shared timer-popup component has been promoted yet because the remaining interaction behavior is not finally approved.

## Figma cleanup / focused visual QA already reflected

- B / quick-set screen deleted
- comparison labels outside the screen deleted
- descriptive helper copy removed
- manual time-edit icons removed
- countdown values recentered after edit-icon removal
- `닫기` text replaced by existing circular close icon in Idle / Running
- Running CTA changed to `일시정지`
- new Paused representative state added at `1547:3691`
- Paused bottom row uses existing Secondary/Primary CTA variants for `초기화 / 계속하기`
- Idle / Running / Paused screenshots checked after refinement
- Paused screenshot shows both bottom actions without clipping or overlap

No additional visual state is required solely for the close behavior because `X` terminates and dismisses the popup.

## Still open before canonical promotion

1. timer-complete feedback when countdown reaches zero
2. conflict/priority rule if the manual timer and automatic Rest Timer overlap
3. reusable component/variant promotion and final canonical screen naming

These must be resolved before Group 05 is closed again.

## Result

**CHECKPOINT UPDATED — direct time entry is removed; `±15초` is locked; Running pauses instead of resetting; Paused exposes `초기화 / 계속하기`; circular `X` now explicitly terminates and dismisses the Manual Timer in Running/Paused; all three experimental states remain visually valid. Manual Timer is still not final/canonical because completion feedback, Rest Timer overlap, and final promotion remain open.**

The next work item is to finish those remaining interaction rules, promote the approved structure, run focused QA, close the scoped Group 05 reopen, then return to Group 06 completion final closure QA.

**NO CURSOR IMPLEMENTATION HANDOFF.**