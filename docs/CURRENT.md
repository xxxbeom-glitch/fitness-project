# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F5 EXAMPLES READY`

The Tonal Phase-A reconstruction baseline has passed F1–F4 independent QA. The next work is F5 representative Examples. Broad Fitness screen customization remains gated until F5 Examples and representative QA pass.

## Product authority

Canonical product decisions remain in:
- `docs/08_DECISIONS.md` through `DEC-021`
- `docs/13_SCREEN_DESIGN_DECISIONS.md` for approved screen-level UX/UI decisions
- `docs/09_TECHNICAL_STACK.md` for React Native + Expo + TypeScript direction

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

## Visual-system authority

- **Tonal = Phase-A visual-system reconstruction/replication baseline**
- **Hevy = practical weight-training functionality / repeated interaction reference**
- **Fitness GitHub Product/Policy/Decision docs = behavior and scope authority**

Canonical implementation / execution references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Methodology / work-history checkpoint:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md` — LIVING DRAFT

## Current Figma file

- file: `tracker-app3`
- file key: `tBpQfpAR1apJngF8a7qyH9`

Current pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

Not started:
- `Examples`
- `10_FITNESS_SCREENS`

## Completed phases

### F1 Foundations
Independent QA:
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

**F1 RESULT: PASS**

### F2 Core Components
Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

**F2 RESULT: PASS**

### F3 Navigation / Rows / Overlays
Independent QA:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

**F3 RESULT: PASS**

F4 remediation corrected the contextual Overlay ink treatment while preserving the F3 TopBar geometry/API. F3 regression revalidation remains PASS.

### F4 Product Patterns
Independent QA:
- `docs/27_FIGMA_PHASE_F4_PRODUCT_PATTERNS_QA.md`

**F4 RESULT: PASS — READY FOR F5 EXAMPLES**

Final verified F4 signals:
- F4 top-level overlap = 0
- unstyled F4 text = 0
- suspicious text collapse = 0
- avoidable raw canonical spacing = 0
- semantic/chart/text color binding audit = PASS
- component-set containment = PASS
- Overlay TopBar legible over Hero/media with inverse ink
- MediaCarousel heading aligned to 24pt page line while viewport remains full-width
- History uses three actual Tab instances: Week / Month / Year
- History DateRange no longer clips
- History chart has representative sparse axis/grid + positive data marks
- ExerciseSetTable column headers no longer clip
- Program/DetailComposition includes supporting metadata, workout rail, related rail, and meaningful START action
- Dashboard / Exercise representative copy cleaned
- transient 320 / 360 / 430 width QA: non-intentional overflow = 0 on key F4 patterns
- direct Tonal program-detail and history/statistics comparison = PASS for F4 Phase-A baseline

## Current next action

Proceed to **F5 Examples**.

F5 goal:
- create a small representative example page/compositions from the passing F1–F4 system
- prove that primitives + patterns combine into coherent real-screen examples
- use the current Tonal reconstruction visual relationships, without importing Tonal product semantics into Fitness policy
- run independent representative QA before broad Fitness customization

Suggested representative example set should cover the highest-risk system relationships rather than every screen:
1. Dashboard example
2. Program detail example
3. Exercise detail example with media
4. Exercise detail example without media
5. History/statistics example
6. Workout block/list example

F5 should reuse existing components/patterns rather than redraw local duplicates.

## Gate

**F5 Examples may now begin.**

Do **not** start `10_FITNESS_SCREENS` until F5 Examples and representative QA pass.

Phase sequence:

`F1 PASS -> F2 PASS -> F3 PASS -> F4 PASS -> F5 Examples -> Representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when independent QA finds a conflict.