# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP / DESIGN EXECUTION — TONAL PHASE-A RECONSTRUCTION COMPLETE · F5 REVALIDATED · FITNESS FIGMA SCREENS NEXT`

The Tonal Phase-A reconstruction baseline has passed F1–F5 independent QA. F5 was subsequently revalidated after Product Owner visual review exposed two composition-level double-inset defects in the Examples page; those defects were remediated and the full representative QA matrix was rerun successfully.

The current execution target remains **Figma**. The earlier discussion that a later code-first/code-led workflow may be faster is recorded only as a workflow hypothesis. It is **not** an instruction to switch the active work from Figma to Cursor/code.

A mistakenly created GitHub Issue #1 (`TSK-PB-001`) attempted to start a Cursor/Expo code-first pilot. That issue has been closed as **NOT PLANNED** and must not be executed.

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

Canonical design references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Latest QA:
- `docs/27_FIGMA_PHASE_F4_PRODUCT_PATTERNS_QA.md`
- `docs/28_FIGMA_F4_SPACING_QA.md`
- `docs/29_FIGMA_PHASE_F5_EXAMPLES_QA.md`
- `docs/31_FIGMA_F5_EXAMPLES_ALIGNMENT_QA.md` — width/alignment revalidation after PO visual review

Methodology / work-history checkpoints:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md`
- `docs/30_PHASE_A_RECONSTRUCTION_HISTORY_AND_WORKFLOW_CHECKPOINT.md`

## Current Figma file

- file: `tracker-app3`
- file key: `tBpQfpAR1apJngF8a7qyH9`

Current pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`
- `Examples`

Next page / phase:
- `10_FITNESS_SCREENS`

## Completed phases

### F1 Foundations
**PASS**

### F2 Core Components
**PASS**

F5 integration QA later corrected selected ChoiceCard indicator contrast; focused F2 regression remains PASS.

### F3 Navigation / Rows / Overlays
**PASS**

Later integration QA corrected Overlay TopBar inverse ink and restored Row/Settings component-property references; focused F3 regression remains PASS.

### F4 Product Patterns
**PASS**

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

Examples page includes:
1. Onboarding / Choice Question
2. Dashboard / Home
3. Program / Hero Detail
4. Workout / Movement Block
5. Exercise Detail / Media
6. Exercise Detail / No Media
7. History / Chart + Table
8. Settings / List Section

Follow-up alignment QA corrected:
- History set table double horizontal inset
- Settings list double horizontal inset

Final post-remediation signals:
- shared page alignment lines = PASS
- example overlap = 0
- unstyled text = 0
- local non-scale spacing = 0
- canonical spacing without Variable binding = 0
- 8 examples x 320 / 360 / 430 responsive checks = PASS
- no F5-local duplicate of existing reusable components

Required QA lesson:
- `no overflow` does not prove correct alignment
- composed-screen QA must separately inspect shared page alignment lines, effective visible insets, and accidental parent-padding + child-padding double insets

## Workflow checkpoint

A future code-first/code-led workflow remains worth evaluating because the Phase-A design system is now stable enough that some Figma-to-code duplication may be avoidable.

However:
- this is not yet a locked policy
- no current Cursor implementation task is authorized from that discussion alone
- the active design workflow continues in Figma until the Product Owner explicitly chooses to switch execution mode

## Current next action

Continue in **Figma** with the Fitness-specific screen phase (`10_FITNESS_SCREENS`).

Execution rule:
1. read the approved screen-level Product/UX decision before each screen
2. reuse the passing F1–F5 system rather than drawing local replacements
3. use Tonal for visual hierarchy/composition and Hevy for practical strength-training interactions where appropriate
4. apply Fitness policy over competitor behavior
5. QA each composed screen for structure, spacing rhythm, alignment lines/double inset, token/reuse integrity, responsive behavior, and visual/product correctness
6. do not hand off to Cursor merely because a Figma screen exists; code handoff begins only when the Product Owner explicitly moves the work into implementation

## Phase sequence

`F1 PASS -> F2 PASS -> F3 PASS -> F4 PASS -> F5 PASS (REVALIDATED) -> 10_FITNESS_SCREENS FIGMA READY`

## Canonical source rule

GitHub remains the Source of Truth for product policy, design-system specification, execution rules, QA state, history checkpoints, and next action. Figma remains the active visual design artifact for the current phase.
