# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F3 THIRD CLEANUP REQUIRED`

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

**F3 RESULT: FAIL — SECOND CLEANUP IMPROVED THE SYSTEM, THIRD NARROW CLEANUP REQUIRED**

### Now verified PASS

- all expected F3 families present
- top-level overlap = 0
- BottomBar Active 1–5 API
- Tab Active/Inactive equal outer height = 50
- Settings Tone API
- Settings nested Toggle = 52 x 32
- Movement Trailing / Meta APIs
- BlockHeader = 342 x 54
- Dialog Body / Secondary / Tone APIs
- Dialog nested actions = 54pt height
- Sheet overlay = 390 x 844 and bottom aligned
- Sheet nested actions = 54pt height
- raw canonical spacing = 0
- unstyled F3 text = 0
- text-collapse failures = 0
- TopBar parent variants reduced from 72 to 6
- Row/Settings child overlap = 0
- Row/Movement child overlap = 0
- explicit Scrim layers now exist in Dialog and Sheet
- no later Phase page created

### Remaining F3 blockers

1. **TopBar parent hit wrappers regress to 24 x 44**
   - nested source controls define 44pt wrappers
   - instances inside parent TopBar are HUG-compressed to 24pt width
   - visual icon may stay 24, but parent interaction wrapper must remain >= 44 x 44

2. **TopBar Leading / Trailing are not exposed as parent-level controllable properties**
   - parent currently exposes only Surface / TitleMode / Title
   - keep the reduced 6 parent variants but expose nested Leading and Trailing choices via stable nested property / instance-swap architecture

3. **TopBar centered title is not robust to asymmetric action widths**
   - current flow-based FILL title region can shift when left/right action zones differ
   - Center mode must remain optically centered for Back+Text, Back+Multiple, None+Text cases

4. **Nested Leading / Trailing component-set cleanup**
   - Leading internal overlaps = 3
   - Trailing internal overlaps = 6
   - Trailing Multiple currently = 88 x 100 instead of 88 x 44

5. **Row component-set bounds do not contain rearranged variants**
   - Settings set frame = 342 x 455, actual child extent ≈ 1066 x 455
   - Movement set frame = 342 x 317, actual child extent ≈ 1066 x 687
   - resize set bounds without changing child/API geometry

6. **Dialog Scrim layers do not fill the viewport**
   - explicit Scrim children exist, but heights vary roughly 572–702 instead of 844
   - every Dialog Scrim must be 390 x 844 at x=0, y=0
   - Sheet Scrim is already correct and must not regress

F3 QA-1 Structure: **FAIL**

F3 QA-2 Design-system / Binding: **FAIL**

F3 visual sanity: **PASS / STRUCTURE STILL BLOCKING**

## Current next action

Remain in **Phase F3** for one narrow cleanup pass.

Required fixes are defined in:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

After remediation:
- verify TopBar parent action wrappers >= 44 x 44
- verify Leading / Trailing are parent-controllable without returning to 72 variants
- verify Center title optical behavior under asymmetric actions
- verify Leading / Trailing nested-set overlap = 0 and Multiple = 88 x 44
- verify Settings / Movement set bounds contain all variants
- verify every Dialog Scrim = 390 x 844
- rerun QA-1 / QA-2
- STOP and request independent QA

## Gate

Do **not** start `Examples` or `10_FITNESS_SCREENS` while F3 QA is failing.

Later sequence remains:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS PASS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
