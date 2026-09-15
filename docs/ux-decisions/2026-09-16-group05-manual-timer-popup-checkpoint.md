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

Current retained states:

### Idle
- title: `타이머`
- right action: `닫기`
- large countdown value: representative `01:30`
- circular progress ring
- quick adjustment actions: `-15초`, `+15초`
- Primary CTA: `타이머 시작`

### Running
- title: `타이머`
- right action: `닫기`
- running countdown value: representative `01:12`
- circular progress ring shown partially depleted
- quick adjustment actions remain available: `-15초`, `+15초`
- Primary CTA changes to `타이머 중지`

The start → stop CTA transition is the current required direction for the header manual timer.

## Time adjustment policy — 2026-09-16 PO lock

Manual Timer time adjustment is intentionally simple for MVP:

- no direct/manual time entry
- no edit icon or separate time-edit affordance
- countdown value is display-only
- the only time-adjustment controls are `-15초` and `+15초`
- the `±15초` step is locked for the current MVP direction

This keeps the timer as a lightweight workout utility instead of adding a separate time-entry interaction.

## Copy reduction

Per PO direction, explanatory/helper copy was removed from the timer popup design.

The current design does not show explanatory lines such as:
- `수동 타이머`
- setup guidance
- time-edit guidance
- running-state guidance

Only functional labels/actions remain visible.

## Design-system alignment

The exploratory popup was reworked to follow the existing Fitness system instead of introducing an unrelated modal style.

Current read-back:
- popup surface: `294 × 412`
- representative position on `360 × 780`: x `33`, y `184`
- radius: `24`, matching the existing Dialog surface treatment
- existing Dialog background/border variable bindings reused
- countdown ring Track reuses `border/default`
- countdown ring Fill reuses `brand/primary`
- existing Primary `CTA Button` component reused
  - Idle label: `타이머 시작`
  - Running label: `타이머 중지`
- existing typography/color system reused
- countdown value is centered in the ring without an edit icon

No new shared timer-popup component has been promoted yet because the remaining interaction behavior is not finally approved.

## Figma cleanup already reflected

- B / quick-set screen deleted
- comparison labels outside the screen deleted
- A retained as Idle + Running representative states
- descriptive helper copy removed from both retained states
- manual time-edit icons removed from Idle and Running
- countdown values recentered inside the ring after edit-icon removal
- Idle / Running screenshots checked after the latest refinement

## Still open before canonical promotion

The following are not locked by this checkpoint:

1. exact semantic result of `타이머 중지` (stop/reset vs. pause-like behavior)
2. `닫기` behavior while the manual timer is running
3. timer-complete feedback (sound / vibration / visual state)
4. conflict/priority rule if the manual timer and automatic Rest Timer would overlap
5. reusable component/variant promotion and final canonical screen naming

These must be resolved before Group 05 is closed again.

## Result

**CHECKPOINT UPDATED — A ring-popup direction retained; direct time entry removed; `-15초 / +15초` is the locked MVP adjustment method; Idle/Running Figma states were updated and screenshot-checked, but the manual timer is still not final/canonical.**

The next work item is to finish the remaining manual timer interaction rules and final Figma promotion/QA, then return to Group 06 completion final closure QA.

**NO CURSOR IMPLEMENTATION HANDOFF.**