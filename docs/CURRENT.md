# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F3 ONE TOPBAR BLOCKER REMAINS`

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
- this is not a canonical implementation spec and must be updated again after F3 / Examples / representative QA

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

## Phase F3 — current result

Independent QA:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

**F3 RESULT: FAIL — ONE TOPBAR STRUCTURAL BLOCKER REMAINS**

### Latest cleanup now verified PASS

- all expected F3 families remain present
- top-level overlap = 0
- BottomBar Active 1–5 API
- Tab Active/Inactive outer height = 50
- Settings Tone API
- Settings nested Toggle = 52 x 32
- Movement Leading / Trailing / Meta APIs
- BlockHeader = 342 x 54
- Dialog Body / Secondary / Tone APIs
- Dialog actions = 54pt
- Sheet overlay = 390 x 844 and bottom aligned
- Sheet actions = 54pt
- raw canonical spacing = 0
- unstyled F3 text = 0
- text-collapse failures = 0
- TopBar parent variants remain reduced at 6
- TopBar Leading and Trailing are parent-controllable INSTANCE_SWAP properties
- Leading single wrapper = 44 x 44
- Trailing Text/Icon wrapper = 44 x 44
- Trailing Multiple = 88 x 44
- nested Leading internal overlap = 0
- nested Trailing internal overlap = 0
- Row/Settings set bounds = 1066 x 455 and contain all variants
- Row/Movement set bounds = 1066 x 687 and contain all variants
- all 12 Dialog Scrims = 390 x 844 at x=0/y=0
- Sheet Scrim = 390 x 844
- no later Phase page created

### Remaining F3 blocker

**`Navigation/TopBar` Center-mode side-action anchoring**

The centered title itself is now correct:
- TitleRegion is independent/absolute in Center mode
- title center X = 195 on the 390 baseline

But current Center variants place:
- Leading x = 4
- Trailing x = 48

So the trailing action is packed directly after the leading action on the left instead of being pinned to the right edge.

Contextual variants correctly place the trailing action at x = 342, proving this defect is specific to Center mode.

Required fix:
- keep Title center X = 195
- keep Leading left-anchored
- make Trailing right-anchored
- preserve the 44pt interaction wrappers and current INSTANCE_SWAP API
- verify Multiple (88 x 44) remains right-anchored

F3 QA-1 Structure: **FAIL**

F3 QA-2 Design-system / Binding / API: **PASS**

F3 visual sanity: **PARTIAL PASS**

## Current next action

Remain in **Phase F3** for a TopBar-only remediation.

After remediation verify Center mode with:
- Back + Text
- Back + Multiple
- None + Text
- None + Multiple

Required for every combination:
- title center X = 195
- Leading anchored left when present
- Trailing anchored right when present
- no action/title overlap
- minimum interaction geometry preserved

Then rerun F3 regression QA and STOP for independent review.

## Gate

Do **not** start `Examples` or `10_FITNESS_SCREENS` while F3 QA is failing.

Later sequence remains:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS PASS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
