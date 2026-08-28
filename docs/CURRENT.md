# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A RECONSTRUCTION COMPLETE · FITNESS CUSTOMIZATION READY`

The Tonal Phase-A reconstruction baseline has passed F1–F5 independent QA. F5 was subsequently revalidated after a Product Owner visual review exposed two composition-level double-inset defects in the Examples page; those defects were remediated and the full representative QA matrix was rerun successfully.

The gate blocking broad Fitness-specific design/implementation is cleared.

The next product phase is Fitness-specific customization. A workflow optimization question is now explicitly recorded: after the design system is stable, fully designing every remaining screen in Figma and then reproducing it again in React Native may create avoidable duplicate work. A code-first Phase-B pilot is strongly favored for evaluation, while the passing Figma system remains the visual baseline. This is a working execution direction, not yet a locked permanent operating policy.

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
- `docs/31_FIGMA_F5_EXAMPLES_ALIGNMENT_QA.md` — follow-up width/alignment revalidation after PO visual review

Methodology / work-history checkpoints:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md` — earlier living methodology draft
- `docs/30_PHASE_A_RECONSTRUCTION_HISTORY_AND_WORKFLOW_CHECKPOINT.md` — current history through F5 + workflow transition discussion

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
**PASS — PHASE-A COMPLETE · REVALIDATED**

Independent QA:
- `docs/29_FIGMA_PHASE_F5_EXAMPLES_QA.md`
- `docs/31_FIGMA_F5_EXAMPLES_ALIGNMENT_QA.md`

Examples page includes:
1. Onboarding / Choice Question
2. Dashboard / Home
3. Program / Hero Detail
4. Workout / Movement Block
5. Exercise Detail / Media
6. Exercise Detail / No Media
7. History / Chart + Table
8. Settings / List Section

Initial F5 QA passed structure/reuse/responsive checks but later Product Owner visual inspection correctly identified a width/alignment issue. Follow-up QA found two real composition defects:
- History set table had a double horizontal inset: Example wrapper 24 + reusable table internal 24
- Settings list had a double horizontal inset: Example content 24 + reusable Row/Settings internal row inset

Remediation was limited to Example composition; reusable source components were not locally detached or rebuilt.

Final post-remediation F5 signals:
- History set table instance = full 390 width; visible content line = x24 / width342
- Settings rows = full 390 width; row-internal content inset remains owned by Row/Settings
- section/header labels use explicit page-line wrappers where needed
- QA-1 Structure / Auto Layout = PASS
- QA-2 Binding / Reuse / API = PASS
- QA-3 Visual / Reference / Product = PASS
- example overlap = 0
- unstyled text = 0
- local non-scale spacing = 0
- canonical spacing without Variable binding = 0
- 8 examples x 320 / 360 / 430 responsive checks = PASS
- no F5-local duplicate of existing reusable components

New QA rule from this revalidation:
- `no overflow` does not prove correct alignment
- composed-screen QA must separately inspect shared page alignment lines, effective visible insets, and accidental parent-padding + child-padding double insets

## Workflow checkpoint after F5

The project now has enough stable visual-system structure that implementation efficiency should be tested directly rather than assuming every final screen must be fully completed in Figma first.

Current working assessment:
- Figma-first was valuable during F1–F5 because the design language itself was being discovered and normalized.
- After F5, many remaining screens should be composable from known tokens/components/patterns.
- Recreating the same known composition once in Figma and again in code may add time without adding equivalent design information.
- Therefore a **code-first / code-led Phase-B pilot** is strongly favored.

Constraints on that pilot:
- do not abandon the Phase-A Figma baseline
- code must carry semantic tokens and reusable components rather than screen-local raw values
- use Figma selectively for new/high-risk visual structures, global system changes, or meaningful visual alternatives
- run device/screenshot QA, spacing-rhythm QA, alignment-line/double-inset QA, responsive QA, and component/token drift checks in code

This is recorded as a workflow hypothesis/working direction until the first real Fitness screen family provides comparative evidence.

## Current next action

Begin the first **Fitness-specific screen family** and use it as the Phase-B workflow pilot.

The product-screen phase is still represented by `10_FITNESS_SCREENS`, but this no longer implies that all ten screens must automatically be fully designed in Figma before implementation.

Pilot execution rule:
1. read approved Fitness Product / Policy / Screen Decisions for the target screen family
2. identify which parts already exist in the passing Phase-A system
3. prefer direct React Native composition when the visual pattern is already established
4. use Figma when a genuinely new or uncertain visual/interaction decision needs exploration
5. use Hevy where repeated weight-training interaction/functionality is the better reference
6. keep Fitness semantics authoritative rather than copying Tonal behavior
7. run structure + spacing-rhythm + alignment-line/double-inset + token/reuse + responsive + visual/product QA
8. compare the effort/quality of this code-led pass against the previous Figma-first workflow before locking the permanent Phase-B process

Do not treat the current Examples page as final Fitness product screens; it is the validated composition baseline.

## Phase sequence

`F1 PASS -> F2 PASS -> F3 PASS -> F4 PASS -> F5 PASS (REVALIDATED) -> FITNESS PHASE-B PILOT READY`

## Canonical source rule

GitHub remains the Source of Truth for product policy, design-system specification, execution rules, QA state, history checkpoints, and next action. Figma remains the validated visual-system artifact; production code may become the primary Phase-B execution artifact if the pilot confirms the efficiency gain without design-system drift.
