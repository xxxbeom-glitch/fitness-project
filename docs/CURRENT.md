# CURRENT — Fitness Project

**Updated:** 2026-09-01

## Current mode

`PRODUCT / UX PLANNING — TOP-LEVEL IA CONFIRMED · ACTIVE-WORKOUT NAVIGATION/STATE RULES CONFIRMED · CRITICAL FLOW STORYBOARD NEXT`

The current execution focus is **high-level IA, critical user flows, and storyboard definition before returning to Figma screen production**.

The previously prepared Tonal design-system baseline remains valid and ready for later Fitness screen composition, but the Product Owner explicitly moved the project back one level to finish product structure and interaction-flow decisions first. Therefore Figma screen production must not outrun the current IA/storyboard work.

No Cursor implementation task is authorized at this stage.

## Product authority

Canonical product decisions remain in:
- `docs/08_DECISIONS.md`
- `docs/13_SCREEN_DESIGN_DECISIONS.md`
- `docs/14_IA_STORYBOARD.md` — current IA/storyboard planning source
- `docs/09_TECHNICAL_STACK.md`

Core product constraints remain unchanged:
- general-purpose weight-training tracker
- first-run choice: recommended routine / build my own routine
- short recommendation onboarding: goal + weekly availability + workout duration
- gym-first initial recommendation
- authentication required
- offline-first workout persistence + change-driven sync
- one active editing device for an in-progress workout
- active session survives app/process/device restart until explicit finish/discard
- fast logging, previous-performance visibility, flexible editing, and active-session recovery are core
- exercise detail is text-first / media-optional
- custom exercises are MVP-critical
- monetization remains deferred

## Confirmed IA / active-workout rules

Confirmed in `docs/14_IA_STORYBOARD.md`:
- primary bottom navigation: `홈 / 루틴 / 분석 / 설정`
- exercise library is contextual, not a standalone primary tab
- user-facing saved routines are independent daily routines; no mandatory higher-level program container
- active workout keeps the primary bottom navigation visible
- Home alone exposes the persistent active-workout return state
- 루틴 / 분석 / 설정 remain visually normal during an active workout
- only one active workout session exists at a time
- starting another routine while one is active asks the user how to handle the current record: save partial work / discard / cancel
- a partial save stores only actually completed sets/exercises; unperformed planned work is excluded
- History/Analysis marks that record as a partial record rather than a fully completed planned routine
- structural changes made inside an active workout apply immediately to the current session
- at workout completion, if the structure differs from the saved source routine, the app asks whether the saved routine should also be updated
- load/reps changes are workout-performance records and do not trigger the saved-routine update prompt
- while a workout is active, the Routine tab remains browseable but saved routine creation/edit/delete is locked
- current-session exercise add/remove/replace, reorder, and planned set-count changes remain available inside the active-workout screen
- starting another routine remains available through the active-session replacement dialog

Canonical cumulative wireframe:
- `https://liftly-wireframe.vercel.app`

Use this one fixed web artifact for all new comparisons and confirmed states. Do not create a separate Product Owner-facing wireframe URL for each question.

## Current open decisions

No unresolved **top-level active-workout navigation/state decision** remains from the current pass.

Any later guard or exception should be decided only when a concrete storyboard/screen exposes a real need. Do not reopen already-confirmed navigation or active-session behavior without new evidence.

## Current next action

Move into the critical user-flow storyboard set:
1. recommended-routine first run -> first workout
2. self-built routine -> first workout
3. returning user -> next workout
4. equipment unavailable -> substitute
5. active session interrupted -> recover
6. mid-session add/remove/reorder
7. scheduled vs unscheduled Home start

Then:
8. produce the complete screen inventory from those flows
9. define screen-level content / CTA / states / exceptions
10. only then return to Figma `10_FITNESS_SCREENS`

Exercise DB normalization and Planfit gap analysis remain backlog work and must not block this sequence.

## Visual-system authority

The previously completed Tonal Phase-A baseline remains the visual-system authority when Figma execution resumes:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Latest completed design-system QA remains PASS through F5 revalidation.

## Canonical source rule

GitHub remains the Source of Truth for product policy, decisions, IA/storyboard state, execution rules, QA state, and next action. Figma remains the visual design artifact, but current product/flow decisions must be finalized before the next screen-production pass.
