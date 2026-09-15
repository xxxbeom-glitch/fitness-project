# Group 05 Rest Live Bar — Post-Closure Amendment

**Date:** 2026-09-15  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · GROUP 05 CLOSED AGAIN

## Scope

This is a scoped post-closure amendment for the Active Workout Rest Timer presentation after the 2026-09-15 `WorkoutLiveBar` and pinned-scroll amendments.

It supersedes only the previous **top transient `RestTimerPill` presentation and X-close meaning**. The automatic Rest Timer trigger, non-blocking workout flow, absence of +/- time controls, and deferred notification/default-duration policies remain unchanged unless explicitly stated below.

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`
- canonical `05F_Workout_RestTimer` — `1498:2769`
- canonical `RestLiveBar` component — `1516:6598`
- canonical 05F `RestLiveBar` instance — `1516:6607`

## Decision

### 1. Rest Timer presentation becomes a fixed bottom live bar

While the automatic rest countdown is running, Active Workout shows a fixed bottom `RestLiveBar` instead of the previous floating top pill/toast.

On the 360 × 780 representative viewport:

- fixed top region remains unchanged:
  - StatusArea — `62`
  - Nav Header — `56`
  - WorkoutLiveBar — `64`
  - total = `182 px`
- `WorkoutContent` remains internally scrollable, but its visible height becomes `526 px` while the Rest Timer bar is present
- `RestLiveBar` is fixed at `y=708`, height `72`
- the workout list does not scroll over either the fixed top region or the fixed Rest Timer bar

The Rest Timer bar does not replace the Nav Header or WorkoutLiveBar.

### 2. Rest countdown hierarchy

The approved bar intentionally keeps only the remaining countdown value as the dominant left-side information.

- no `휴식` label
- representative countdown: `01:29`
- countdown typography: `display/01` — SUIT Bold `20 / 28`
- countdown color: `text/primary`

The larger countdown type is intentional because remaining rest time is the primary information of this temporary bar.

### 3. Progress track / fill

A `2 px` progress line sits on the top edge of the RestLiveBar.

- Track: `border/default`
- Fill: `brand/primary`
- fill starts from the left edge
- as remaining rest time decreases, the **right edge of the fill moves left**
- the static Figma width is only a representative countdown state and does not define a fixed runtime percentage

The exact default rest duration remains a separate policy/configuration item.

### 4. Rest end action

The previous `X` affordance is removed.

The right-side action is explicitly labeled:

- `휴식 종료`

Meaning:

- tapping `휴식 종료` ends the current rest countdown
- the RestLiveBar is removed after the countdown is ended
- there is no separate MVP action that hides the Rest Timer UI while allowing the same countdown to continue invisibly

This supersedes the previous `X = UI only close` rule.

MVP still does not add:

- `+15초`
- `-15초`
- Rest Timer pause
- Rest Timer reset

### 5. End of rest

When the countdown reaches zero, the RestLiveBar is removed and the user can continue the workout without any blocking transition.

Exact entrance/exit motion, vibration, sound, and background notification behavior remain deferred unless separately approved.

## Design-system reflection

New local component under `Common_Component` → `05_GROUP_CONFIRMED_COMPONENTS`:

- `RestLiveBar` — `1516:6598`

The component reuses the existing Fitness system rather than creating a parallel visual language:

- background: `bg/workout-live`
- countdown: `display/01`
- action label: `label/02`
- `text/primary`
- action border: `border/default`
- action radius: `radius/xs`
- progress Track: `border/default`
- progress Fill: `brand/primary`
- horizontal padding: `spacing/20`
- top padding: `spacing/8`
- bottom padding: `spacing/16`
- internal gap: `spacing/10`

Locked visual details:

- bar: `360 × 72`
- top padding: `8`
- bottom padding: `16`
- asymmetric vertical padding is intentional; bottom breathing room is larger than the top
- progress line: `360 × 2`
- `휴식 종료` touch target: `76 × 44`
- `휴식 종료` visual: `76 × 32`

The obsolete local `RestTimerPill` component was removed after canonical 05F no longer had any instances.

## Canonical Figma promotion

`05F_Workout_RestTimer` (`1498:2769`) now reads back as:

1. `StatusArea_Spacer` — y `0`, h `62`
2. `Nav Header` — y `62`, h `56`
3. `WorkoutLiveBar` — y `118`, h `64`
4. `WorkoutContent` — y `182`, h `526`, clipped internal scroll
5. `RestLiveBar` — y `708`, h `72`

The temporary `05F_Workout_RestTimer_BottomBar_Example` comparison frame was removed after promotion.

## Focused QA

PASS:

- canonical 05F promoted to the approved fixed-bottom RestLiveBar pattern
- old top RestTimerPill instance removed
- obsolete RestTimerPill component has zero remaining instances and was removed
- `RestLiveBar` instance points to local main component `1516:6598`
- countdown uses `display/01` at `20 / 28`
- action label uses `label/02`
- background / progress / spacing bindings read back against existing Fitness variables
- Track and Fill read back as `2 px`
- content viewport and bottom bar do not overlap
- canonical 360 × 780 screenshot renders without clipping or blocking visual regression
- temporary comparison frame removed after canonical promotion

## Explicitly unchanged / deferred

Unchanged:

- Rest Timer starts automatically when a set is completed
- Rest Timer does not block exercise/set progression
- Workout elapsed-time Running/Paused behavior
- workout end/discard semantics
- pinned Nav Header + WorkoutLiveBar behavior

Deferred:

- exercise-specific default rest duration
- user default rest duration
- vibration / sound policy
- background notification policy
- exact replacement/restart behavior when another set completes while a rest timer is already running
- runtime animation details
- Cursor/runtime implementation

## Result

**PASS — RestLiveBar presentation is locked and Group 05 returns to CLOSED.**

The next project QA item remains Group 06 completion final closure QA.

**NO CURSOR IMPLEMENTATION HANDOFF.**
