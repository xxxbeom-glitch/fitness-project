# CURRENT — Fitness Project

**Updated:** 2026-09-01

## Current mode

`PRODUCT / UX PLANNING — TOP-LEVEL IA CONFIRMED · ACTIVE-WORKOUT NAVIGATION RULES CONFIRMED · CRITICAL FLOW EDGE CASES IN PROGRESS`

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

## Current IA / navigation decisions

Confirmed in `docs/14_IA_STORYBOARD.md`:
- primary bottom navigation: `홈 / 루틴 / 분석 / 설정`
- exercise library is contextual, not a standalone primary tab
- user-facing saved routines are independent daily routines; no mandatory higher-level program container
- active workout keeps the primary bottom navigation visible
- Home alone exposes the persistent active-workout return state
- 루틴 / 분석 / 설정 remain visually normal during an active workout
- only one active workout session exists at a time
- starting another routine while one is active asks the user how to handle the current record: save partial work / discard / cancel
- structural changes made inside an active workout apply immediately to the current session
- at workout completion, if the structure differs from the saved source routine, the app asks whether the saved routine should also be updated
- load/reps changes are workout-performance records and do not trigger the saved-routine update prompt

Canonical cumulative wireframe:
- `https://liftly-wireframe.vercel.app`

Use this one fixed web artifact for all new comparisons and confirmed states. Do not create a separate Product Owner-facing wireframe URL for each question.

## Current open decisions

Before moving fully into critical-flow storyboard work, resolve the remaining active-workout edge cases:

1. how a saved partial/incomplete workout should appear in History/Analysis
2. whether any other actions need explicit guarding/restriction while a workout is active

These should stay narrow. Do not reopen already-confirmed top-level navigation or active-session behavior without new evidence.

## Current next action

1. decide the History/Analysis treatment for a workout saved before its planned routine was fully completed
2. resolve any remaining active-session guard edge case only if it materially affects the primary flow
3. then define the critical user-flow storyboard set:
   - recommended-routine first run -> first workout
   - self-built routine -> first workout
   - returning user -> next workout
   - equipment unavailable -> substitute
   - active session interrupted -> recover
   - mid-session add/remove/reorder
   - scheduled vs unscheduled Home start
4. produce the complete screen inventory from those flows
5. only then return to Figma `10_FITNESS_SCREENS`

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
