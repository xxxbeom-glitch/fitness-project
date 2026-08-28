# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A RECONSTRUCTION COMPLETE · FITNESS SCREEN CUSTOMIZATION READY`

The Tonal Phase-A reconstruction baseline has passed F1–F5 independent QA. The gate blocking broad Fitness-specific visual design is cleared.

The next work is to create `10_FITNESS_SCREENS` and switch from **RECONSTRUCT** to **CUSTOMIZE** while preserving the passing system baseline.

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

- **Tonal = passing Phase-A visual-system baseline**
- **Hevy = practical weight-training functionality / repeated interaction reference**
- **Fitness GitHub Product/Policy/Decision docs = behavior and scope authority**

Canonical implementation / execution references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Latest QA:
- `docs/27_FIGMA_PHASE_F4_PRODUCT_PATTERNS_QA.md`
- `docs/28_FIGMA_F4_SPACING_QA.md`
- `docs/29_FIGMA_PHASE_F5_EXAMPLES_QA.md`

Methodology / work-history checkpoint:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md` — LIVING DRAFT

## Current Figma file

- file: `tracker-app3`
- file key: `tBpQfpAR1apJngF8a7qyH9`

Current pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`
- `Examples`

Not started:
- `10_FITNESS_SCREENS`

## Completed phases

### F1 Foundations
**PASS**

Independent QA:
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

### F2 Core Components
**PASS**

Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

F5 integration QA found and corrected selected ChoiceCard indicator contrast on dark selected surfaces. Selected Single/Multi indicators now use inverse ink. Focused F2 regression remains PASS.

### F3 Navigation / Rows / Overlays
**PASS**

Independent QA:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

Later integration QA corrected Overlay TopBar inverse ink and restored Row/Settings parent component-property references for Destructive / Disabled variants. Focused F3 regression remains PASS.

### F4 Product Patterns
**PASS**

Independent QA:
- `docs/27_FIGMA_PHASE_F4_PRODUCT_PATTERNS_QA.md`
- `docs/28_FIGMA_F4_SPACING_QA.md`

Final F4 signals include:
- top-level overlap = 0
- unstyled text = 0
- canonical spacing drift = 0
- canonical spacing without Variable binding = 0
- semantic color binding = PASS
- representative 320 / 360 / 430 responsive QA = PASS
- program/history direct Tonal visual comparison = PASS for Phase-A baseline

### F5 Representative Examples
**PASS — PHASE-A COMPLETE**

Independent QA:
- `docs/29_FIGMA_PHASE_F5_EXAMPLES_QA.md`

Examples page includes:
1. Onboarding / Choice Question
2. Dashboard / Home
3. Program / Hero Detail
4. Workout / Movement Block
5. Exercise Detail / Media
6. Exercise Detail / No Media
7. History / Chart + Table
8. Settings / List Section

F5 final QA:
- QA-1 Structure / Auto Layout = PASS
- QA-2 Binding / Reuse / API = PASS
- QA-3 Visual / Reference / Product = PASS
- example overlap = 0
- unstyled text = 0
- local non-scale spacing = 0
- canonical spacing without Variable binding = 0
- 8 examples x 320 / 360 / 430 responsive checks = PASS
- no F5-local duplicate of existing reusable components

## Current next action

Start **`10_FITNESS_SCREENS`**.

This is the first broad Fitness-specific visual customization phase.

Execution rule:
1. read approved Fitness Product / Policy / Screen Decisions for each screen family
2. use the passing Phase-A system as the visual baseline
3. use Hevy where repeated weight-training interaction/functionality is the better reference
4. customize product semantics for Fitness rather than copying Tonal behavior
5. reuse existing foundations/components/patterns before creating new assets
6. run structure QA + spacing-rhythm QA + binding/reuse QA + responsive QA + visual/product QA on each representative screen batch

Do not treat the current Examples page as final Fitness product screens; it is the validated composition baseline.

## Phase sequence

`F1 PASS -> F2 PASS -> F3 PASS -> F4 PASS -> F5 PASS -> 10_FITNESS_SCREENS READY`

## Canonical source rule

GitHub remains the Source of Truth for product policy, design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when independent QA finds a conflict.
