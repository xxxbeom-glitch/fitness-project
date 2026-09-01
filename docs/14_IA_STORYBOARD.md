# 14 IA / STORYBOARD

**Status:** IN PROGRESS
**Updated:** 2026-09-01

This document records confirmed IA and storyboard-level decisions for the current planning pass. It should stay focused on product structure, navigation, core flows, and screen relationships. Detailed visual styling remains in the screen/design documents.

## Confirmed — Main navigation

Primary bottom navigation uses four tabs:

1. 홈
2. 루틴
3. 분석
4. 설정

Exercise library is not a standalone primary tab. It is entered contextually from routine creation/editing, active workout, exercise detail/history, and other relevant flows.

## Confirmed — Routine presentation model

User-facing routine management follows an **independent daily-routine model**.

Example:
- 가슴·어깨
- 등·팔
- 하체

These appear as separate routines in the Routine tab rather than forcing the user to open a higher-level weekly program container first.

This matches the intended lightweight tracker UX and avoids adding a mandatory `program -> workout day` hierarchy to ordinary routine management.

### Deferred / internal modeling

Recommendation logic may still need to associate multiple routines as one recommended plan/template internally, but this must not force a higher-level program container into the primary user-facing Routine IA unless a later decision explicitly promotes it.

## Confirmed — Active workout keeps primary bottom navigation

While a workout is in progress, the primary bottom navigation remains visible:

- 홈
- 루틴
- 분석
- 설정

The active workout is therefore **not** treated as a locked, full-screen navigation mode that hides the app's primary IA.

### Rationale

The user should retain the same navigation model during training instead of entering a separate app mode with unfamiliar navigation behavior.

## Confirmed — Home exposes persistent return to active workout

If the user navigates to **Home** while a workout is still active, Home must clearly show that the workout is still in progress and provide a one-tap path back to the active workout.

The intended pattern is a persistent active-workout bar/card such as:

`운동 진행 중 · 하체 루틴 · 18:24  →  돌아가기`

Exact visual styling and copy may be refined later, but the behavior is fixed:

- the active session remains alive when the user visits Home
- Home does not look identical to an idle/non-workout state
- the active workout indicator remains visible without requiring the user to search through the Routine tab
- tapping the indicator returns directly to the current active-workout screen
- workout data/session state must remain intact while navigating away and back

### Rationale

Keeping primary navigation visible is only safe if the active session remains easy to recover. The persistent Home return state prevents users from losing track of an in-progress workout while preserving freedom to navigate elsewhere.

## Confirmed — Active workout indicator appears only on Home

The active-workout return bar/card is shown on **Home only**.

When the user navigates to 루틴 / 분석 / 설정 during an active workout:

- those screens keep their normal layout
- no duplicate active-workout bar/card is injected into those tabs
- the user can return to the active workout by going back to Home and tapping the Home active-workout indicator

This keeps the primary tabs visually stable and avoids a persistent global banner competing with each tab's own content.

### Rationale

The active workout is important enough to stay recoverable, but it does not need to occupy persistent UI across the entire app. Home acts as the canonical recovery point.

## Confirmed — Only one active workout session; switching routines is allowed

The app maintains **one active workout session at a time**. Multi-session workout tracking is not part of the primary UX.

If the user is already working out and chooses `운동 시작` on another routine:

- the app does not create a second simultaneous active session
- the user is told that another workout is currently in progress
- the user may choose to end the current workout and start the newly selected routine
- after confirmation, the current active session is closed and the new routine becomes the single active workout

This means a user can intentionally change workouts without being trapped in the first session, while keeping session state simple and unambiguous.

## Confirmed — Replacing an active workout asks how to handle the current record

When the user starts another routine while a workout is already active, the app must **not** automatically decide whether to keep or discard the current session record.

A confirmation dialog is shown before switching.

Recommended structure:

**진행 중인 운동이 있어요**

`하체 루틴을 어떻게 처리할까요?`

Actions:

1. **지금까지 기록 저장하고 새 운동 시작**
   - save the sets/reps/load actually completed so far
   - close the current session as a partial/incomplete workout record
   - start the newly selected routine as the single active workout

2. **기록 폐기하고 새 운동 시작**
   - discard the current session record
   - start the newly selected routine as the single active workout

3. **취소**
   - keep the current workout active
   - do not start the new routine

### Copy rule

Do not label the first action as `운동 완료로 처리` when the routine was only partially performed. The record should reflect that the user saved the work performed so far and ended the session early, rather than falsely implying the planned routine was fully completed.

### Rationale

The user may have intentionally completed useful work before switching routines, or may want to discard an accidental/invalid session. Both cases are legitimate, so the app should preserve user control instead of applying a destructive or misleading default.

### Still to decide

- Whether any other destinations/actions should be restricted while an active workout is running.
- Exact partial/incomplete status language in History/Analysis.

## Planning sequence

Current planning order:

1. confirm top-level IA
2. confirm core navigation behavior
3. define critical user flows
4. build storyboard
5. define complete screen inventory
6. define screen-level content / CTA / states
7. return to Figma execution

Exercise DB normalization and Planfit gap analysis remain backlog work and must not block this planning sequence.
