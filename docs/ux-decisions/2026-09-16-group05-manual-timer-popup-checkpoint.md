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

## Zero-completion behavior — 2026-09-16 PO lock

When the Manual Timer countdown reaches zero:

- countdown stops at `00:00`; it never goes negative.
- the popup **remains open** in place.
- do not auto-close the popup.
- do not auto-reset to `01:30`.
- do not transition to another page, dialog, toast, or separate completion screen.
- do not add a separate completion animation, sound, or vibration for MVP.
- the existing circular `X` remains the explicit way to close and terminate the completed Manual Timer popup.

No extra Figma representative screen is required solely for completion; `00:00` is a runtime end-state of the same popup shell.

## Manual Timer vs. automatic Rest Timer overlap — 2026-09-16 PO lock

The two countdown tools must **not run at the same time** in MVP.

When the automatic Rest Timer is active:

- the Nav Header Manual Timer action is unavailable.
- tapping the timer action does not open the Manual Timer popup.
- no second countdown is created and no existing Rest Timer state is interrupted.
- no additional warning dialog or toast is required.
- when the automatic Rest Timer reaches zero or the user selects `휴식 종료`, the Manual Timer action becomes available again.

Canonical Rest Timer screen reflection:
- `05F_Workout_RestTimer` — `1498:2769`
- Nav Header instance — `1498:2771`
- Manual Timer `right-action` remains visible for layout consistency but is shown at **30% opacity** while Rest Timer is active.
- this reuses the existing low-emphasis/disabled opacity convention already present in the Fitness file rather than introducing a new component or token.
- focused screenshot QA after the override shows the timer action visibly disabled with no clipping or layout regression.

Because the Manual Timer itself is modal and closing it terminates it, there is no supported path where a running/paused Manual Timer remains in the background while a new automatic Rest Timer begins.

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

No new shared timer-popup component has been promoted yet because final canonical component promotion/QA is still pending.

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
- canonical `05F_Workout_RestTimer` Manual Timer action dimmed to 30% while automatic Rest Timer is active
- Rest Timer screenshot rechecked after the disabled-action override; no blocking visual regression found

No additional visual state is required solely for close behavior or zero-completion behavior.

## Still open before canonical promotion

1. reusable component/variant promotion and final canonical screen naming
2. final focused binding / screenshot QA after promotion

These must be resolved before Group 05 is closed again.

## Result

**CHECKPOINT UPDATED — Manual Timer behavior is now fully locked for MVP: direct time entry is removed; `±15초` is locked; Running pauses; Paused exposes `초기화 / 계속하기`; `X` terminates and dismisses; `00:00` remains open without extra feedback; and automatic Rest Timer activity disables Manual Timer entry so the two countdowns cannot overlap. Remaining work is canonical component/variant promotion and final focused QA only.**

The next work item is to promote the approved Manual Timer structure to reusable component/variants and canonical representative states, run focused QA, close the scoped Group 05 reopen, and return to Group 06 completion final closure QA.

**NO CURSOR IMPLEMENTATION HANDOFF.**