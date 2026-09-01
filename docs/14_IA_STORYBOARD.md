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

### Still to decide

- What happens when the user taps another primary tab while a workout is active.
- How the app indicates that an active workout is still running outside the workout screen.
- The fastest path back to the active workout after navigating elsewhere.
- Whether any destinations/actions should be restricted while an active workout is running.

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
