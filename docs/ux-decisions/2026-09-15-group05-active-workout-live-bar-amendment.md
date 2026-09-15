# Group 05 Active Workout Live Bar — Post-Closure Amendment

**Date:** 2026-09-15  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · GROUP 05 CLOSED AGAIN

## Scope

This is a scoped post-closure amendment triggered by the Product Owner after the 2026-09-10 Group 05 closure.

It supersedes only the **common 05A active-workout progress/action presentation**. Existing Group 05 recording rules, rest-timer behavior, session recovery, end confirmation, discard semantics, routine switching, replacement, reorder, and set-entry behavior remain unchanged unless explicitly stated below.

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`
- canonical `05A_Workout_Weight` — `148:1979`
- scrolled representative `05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`

## Decision

### 1. Replace the old 05A summary/action presentation

The previous 05A presentation used the Group 03-style three-metric summary (`운동시간 / 볼륨 / 완료 세트`) and separate bottom end/discard actions.

For Active Workout, that treatment is replaced by a compact live status/action bar directly below the Nav Header.

Canonical 05A now uses:

- `WorkoutLiveBar` instance — `1492:2407`
- bar height: `64`
- left: workout elapsed-time control + elapsed time
- right: compact `종료` / `취소` actions
- bottom: only the existing large Primary `운동 추가` CTA

The live bar does **not** show `볼륨` or `완료 세트`.

The old `WorkoutSummarySection` is removed from canonical 05A, and the old bottom `종료 / 취소` row is removed.

### 2. Action hierarchy

The actions are intentionally distributed by importance:

- `운동 추가` remains the large Primary action at the bottom of the workout content.
- `종료` is a compact neutral inline action in the live bar.
- `취소` is a compact destructive entry in the live bar, but is visually weaker than a Primary action: neutral outline + danger text.

This resolves the earlier issue where a red cancel treatment could visually compete with or overpower normal workout completion.

The labels are intentionally short: `종료`, `취소`.

### 3. Existing end/discard behavior is preserved

This amendment changes the **entry placement and visual hierarchy**, not the existing end/discard semantics.

- `종료` continues to use the existing complete/incomplete workout-end rules and representative states (`05K_End_Incomplete`, `05L_End_Complete`).
- `취소` is the entry for the existing full-session discard flow represented by `05M_Discard`.
- destructive confirmation remains required before the current session record is actually discarded.

Reference: `docs/ux-decisions/2026-09-03-workout-end-flow.md`.

## Workout elapsed-time states

`WorkoutLiveBar` is now a two-state component set:

- `Timer=Running` → pause icon + elapsed time at normal opacity
- `Timer=Paused` → resume/play icon + elapsed time at `60%` opacity

This control/state is for the **workout elapsed-time display** in the live bar.

It does not change the separate automatic Rest Timer policy. The Rest Timer remains the set-completion-triggered toast/pill behavior defined in `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`.

No additional rule is introduced here for pausing, resetting, or synchronizing the Rest Timer.

## Design-system reflection

New/reused local assets are organized under `Common_Component` → `05_GROUP_CONFIRMED_COMPONENTS` (`1485:922`).

### Components

- `WorkoutLiveBar` component set — `1488:7122`
  - `Timer=Running` — `1485:935`
  - `Timer=Paused` — `1488:7106`
- `Workout Inline Action` component set — `1485:934`
  - `Action=End`
  - `Action=Cancel`
- local `icon/play` — `1488:7086`
- existing local `icon/pause` reused

The resume/play icon follows the already-existing Fitness Nav Header play-icon geometry rather than introducing a new visual language.

### Tokens / styles

New color path required by the PO-selected live-bar background:

- primitive `neutral/925` — `#0D0D10`
- semantic `bg/workout-live` → `neutral/925`

Existing system assets are reused for the rest:

- time: `heading/01`
- inline action text: `label/02`
- `text/primary`
- `border/default`
- `state/danger`
- `radius/xs` (`6`)
- `spacing/20` horizontal bar padding
- `spacing/10` vertical bar padding
- `spacing/6` action gap

No parallel CTA Button family was created.

## Locked visual details

- bar: `360 × 64`
- background: `bg/workout-live` / `#0D0D10`
- horizontal padding: `20`
- vertical padding: `10`
- timer-control visual: `14 × 14` inside a `24 × 24` slot
- elapsed time: `16 / 24`, Bold (`heading/01`)
- inline action touch target: `48 × 44`
- inline action visual: `48 × 32`
- action gap: `6`
- action radius: `6`
- `종료`: neutral outline + primary text
- `취소`: neutral outline + danger text
- paused elapsed-time opacity: `60%`

## Canonical promotion

The approved comparison treatment was promoted into the real canonical `05A_Workout_Weight` (`148:1979`).

After promotion and scroll-behavior QA, the temporary compact comparison frames were removed from the Group 05 page. The canonical initial screen and the dedicated scrolled representative state remain.

Final canonical top-level structure read-back:

1. `StatusArea_Spacer`
2. `Nav Header`
3. `WorkoutLiveBar` — `1492:2407`, `Timer=Running`
4. `WorkoutContent`

`WorkoutContent` begins immediately below the 64px live bar and its bottom action area is now `ActionButtons_AddOnly` containing only `운동 추가`.

## Focused QA

PASS:

- canonical 05A uses the approved live-bar pattern
- old 05A `WorkoutSummarySection` removed
- old bottom end/cancel row removed
- bottom Primary `운동 추가` retained
- `WorkoutLiveBar` Running/Paused variants read back correctly
- Running uses pause icon; Paused uses play/resume icon
- Paused elapsed-time opacity read back at `0.60`
- live-bar spacing/color/radius/text bindings read back against the Fitness design system
- Running and Paused representative screenshots render without clipping/layout break
- canonical 05A screenshot after promotion renders without a blocking visual regression
- temporary compact comparison frames are removed after canonical promotion

## Explicitly not changed

- Rest Timer trigger/presentation/control policy
- workout-end save rules
- discard confirmation/destructive semantics
- session recovery
- routine-update-after-workout rules
- exercise card/set entry behavior
- Group 05 recording-type rules
- Cursor/runtime implementation

## Result

**PASS — this post-closure amendment is locked and Group 05 returns to CLOSED.**

The next project QA item remains Group 06 completion final closure QA.

**NO CURSOR IMPLEMENTATION HANDOFF.**
