# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F3 PASS / F4 PRODUCT PATTERNS READY`

The current work is the Tonal reconstruction baseline. Broad Fitness screen visual customization remains gated until the staged Figma design-system build passes representative QA.

## Product authority

Canonical product decisions remain in:
- `docs/08_DECISIONS.md` through `DEC-021`
- `docs/13_SCREEN_DESIGN_DECISIONS.md` for approved screen-level UX/UI decisions
- `docs/09_TECHNICAL_STACK.md` for React Native + Expo + TypeScript platform direction

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

Canonical Phase-A implementation spec:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

Figma build instructions:
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`

Figma QA contract:
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

Pre-Figma consolidation gate:
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — **PASS**

Methodology / work-history checkpoint:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md` — **LIVING DRAFT**
- captures the current Mobbin -> reconstruction -> Figma -> independent-QA method, repeated Figma-Agent failure modes, measurable QA ideas, and prompt-design lessons
- remains a draft until Examples / representative QA finish

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

## Phase F1

Independent QA:
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

**F1 RESULT: PASS**

## Phase F2

Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

**F2 RESULT: PASS**

## Phase F3

Independent QA:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

**F3 RESULT: PASS — READY FOR F4 PRODUCT PATTERNS**

Final verified F3 state:
- all expected F3 families present
- top-level overlap = 0
- TopBar parent variants = 6
- TopBar Leading / Trailing parent-controllable INSTANCE_SWAP properties
- Center TopBar Leading left anchored and Trailing right anchored
- Center title remains at true center X=195 on 390 baseline
- Trailing Text/Icon = 44 x 44
- Trailing Multiple = 88 x 44 and right anchored
- nested Leading / Trailing internal overlap = 0
- BottomBar Active 1–5 API
- Tab Active/Inactive outer height = 50
- Settings Tone API and nested Toggle = 52 x 32
- Movement Leading / Trailing / Meta APIs
- Settings / Movement component-set bounds contain all variants
- BlockHeader = 342 x 54
- Dialog Body / Secondary / Tone APIs
- all 12 Dialog Scrims = 390 x 844
- Dialog actions = 54pt
- Sheet Scrim = 390 x 844
- Sheet actions = 54pt
- avoidable raw canonical spacing = 0
- unstyled F3 text = 0
- suspicious text collapse = 0
- no later Phase page created

F3 QA-1 Structure: **PASS**

F3 QA-2 Design-system / Binding / API: **PASS**

F3 visual sanity: **PASS FOR F3 SCOPE**

## Current next action — Phase F4

Build the higher-order Tonal product patterns on the existing `03_PATTERNS` page from passing F1/F2/F3 assets.

Canonical F4 evidence/spec inputs:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

F4 must reuse current Variables, Text Styles, F2 components, and F3 patterns rather than rebuilding local duplicates.

F4 should cover the higher-order product-pattern baseline needed before representative Examples, including:
- dashboard metric/module compositions
- metric value + unit composition
- stats/value list patterns
- media card / carousel patterns
- program/workout hero and detail structure
- workout block-list composition
- exercise detail with MediaPresent / NoMedia states
- metric/chart history structure
- exercise set-history table structure

Active workout behavior remains Fitness/Hevy-led functionally; do not copy Tonal hardware/video behavior as product behavior.

After F4:
- run QA-1 Structure / responsive behavior
- run QA-2 reuse / binding / API
- run visual sanity against Tonal evidence
- STOP for independent QA

## Gate

Do not create `Examples` until F4 product-pattern QA passes.

Do not start broad `10_FITNESS_SCREENS` customization until representative Examples pass full QA-1 / QA-2 / QA-3.

Phase sequence:

`F1 Foundations PASS -> F2 Core Components PASS -> F3 Navigation/Rows/Overlays PASS -> F4 Product Patterns -> F5 Examples -> Representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
