# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F2 PASS / F3 READY`

The current work is the Tonal reconstruction baseline. Broad Fitness screen visual customization remains gated until the staged Figma design-system build passes QA.

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

Tonal screenshots are evidence for visible relationships only. Fitness does not claim Tonal private tokens and does not reuse Tonal trademarks, proprietary icons, logos, production media, or exact proprietary assets.

Canonical Phase-A implementation spec:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

Figma build instructions:
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`

Figma QA contract:
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

Pre-Figma consolidation gate:
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — **PASS**

## Current Figma file

- file: `tracker-app3`
- file key: `tBpQfpAR1apJngF8a7qyH9`

Current pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`

Not started:
- `03_PATTERNS`
- `Examples`
- `10_FITNESS_SCREENS`

## Phase F1

Independent QA:
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

**F1 RESULT: PASS**

Foundation remains approved:
- 49 canonical local variables
- 15 canonical Pretendard Text Styles
- foundation structure, binding, spacing, text resizing, and metadata QA passed

## Phase F2

Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

**F2 RESULT: PASS — READY FOR F3**

Verified F2 status:
- full expected F2 family inventory exists
- `Input/Underline` has Default / Focus / Filled / Error / Disabled states
- `Input/Underline` exposes `Label`, `Value`, `Trailing`, `TrailingText`, and `State`
- optional trailing metadata is property-bound and hidden by default
- top-level component overlap = 0
- 14/14 affected Button labels use `Type/Action/Primary`
- `ChoiceCard/Single` reuses nested `Control/Radio`
- `ChoiceCard/Multi` reuses nested `Control/Check`
- duplicated local ChoiceCard indicators removed
- all 14 component-set arrangement gaps bind to `Space/16`
- `Control/Stepper` preserves a 124x38 visible surface inside a 124x44 component with 44x44 minus/plus hit areas
- unstyled F2 text = 0
- text-collapse failures = 0
- no later Phase page created before independent approval

F2 QA-1 Structure: **PASS**

F2 QA-2 Design-system / Binding: **PASS**

F2 visual sanity: **PASS FOR F2 SCOPE**

Full screenshot-fidelity QA remains intentionally deferred until higher-order patterns/examples exist.

## Current next action — Phase F3

Build **Phase F3 — Navigation / Rows / Structural Overlays** only.

Canonical F3 scope:
- `Navigation/TopBar`
- `Navigation/BottomBar`
- `Tab/Underline`
- `Row/Settings`
- `Row/Movement`
- `Workout/BlockHeader`
- `Dialog/Center`
- `Sheet/Action`
- `Feedback/Toast`
- required placeholders / nested F2 instances used by those components

F3 must reuse F1 Foundations and F2 components wherever applicable. Do not redraw an existing Button / Toggle / control locally when a reusable instance is appropriate.

F3 must be built in small families and must pass:

### QA-1 — Structure / Auto Layout
- correct component anatomy
- horizontal/vertical Fixed / Hug / Fill behavior
- stable optical centering where required
- min-height and text wrapping
- trailing control protection in rows
- overlay/scrim geometry
- responsive/copy stress behavior

### QA-2 — Design-system / Binding
- existing Foundation variables/styles actually bound
- existing F2 components reused as nested instances where appropriate
- semantic component naming and descriptions
- controlled variants/properties
- no avoidable duplicated control/action geometry
- no repeated raw-value drift

Do not report F3 DONE while either QA stage fails.

## Later gate

Do not resume broad Fitness screen visual customization until:
- F3 navigation/rows/overlays pass QA-1/2
- F4 product patterns pass QA-1/2
- F5 representative examples pass full QA-1 / QA-2 / QA-3 against Tonal evidence and Fitness policy

Later sequence:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
