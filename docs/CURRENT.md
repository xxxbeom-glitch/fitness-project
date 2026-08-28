# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F3 SECOND REMEDIATION REQUIRED`

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

Verified baseline remains approved:
- full F2 family inventory present
- Button shared styles bound
- ChoiceCards reuse Radio/Check instances
- Input/Underline complete with trailing API
- Stepper 44pt hit areas preserved around compact visible geometry
- F2 text-collapse / binding / overlap checks passed

## Phase F3 — current result

Independent QA:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

**F3 RESULT: FAIL — FIRST REMEDIATION FIXED MOST ORIGINAL BLOCKERS, SECOND CLEANUP REQUIRED**

### Now verified PASS

- all expected F3 families present
- top-level overlap = 0
- `Navigation/BottomBar` exposes Active 1–5 states
- `Tab/Underline` Active/Inactive outer heights are equal at 50
- `Row/Settings` exposes `Tone = Default | Destructive | Disabled`
- all Settings nested Toggle instances are 52 x 32
- `Row/Movement` exposes controlled `Trailing` and `Meta` modes
- `Workout/BlockHeader` base geometry is 342 x 54
- `Dialog/Center` exposes Body / Secondary / Tone axes and uses 390 x 844 overlay variants
- Dialog nested action instances are restored to 54pt height
- `Sheet/Action` uses a 390 x 844 overlay reference and bottom-aligned surface
- Sheet nested action instances are 54pt high
- avoidable raw canonical spacing = 0
- unstyled F3 text = 0
- text-collapse failures = 0
- no later Phase page created

### Remaining F3 blockers

1. **TopBar text action hit area**
   - parent right padding is actually applied at 4pt (`Space/4`)
   - `Trailing=Text` currently hugs `Save` at only **30 x 44**
   - canonical minimum interaction wrapper is 44 x 44
   - therefore the label looks excessively edge-close and the hit target is undersized
   - exact 4pt outer inset is still provisional; do not automatically replace it with normal 24pt page inset

2. **TopBar variant explosion**
   - current `Navigation/TopBar` has **72 variants**
   - capability is correct but the Cartesian product is too large for the current Figma execution contract
   - refactor to a smaller parent variant set with nested leading/trailing controls while preserving the same public semantic API

3. **Internal component-set overlaps**
   - `Row/Settings`: 15 variants, 15 internal overlaps
   - `Row/Movement`: 18 variants, 45 internal overlaps
   - rearrange variants without changing APIs or internals

4. **Dialog/Sheet Scrim semantic layer**
   - visual dimming is present as a 50% black fill on the overlay root
   - explicit `Scrim` child layer is absent
   - add a semantic Scrim child so overlay anatomy is machine-readable

F3 QA-1 Structure: **FAIL**

F3 QA-2 Design-system / Binding: **FAIL**

F3 visual sanity: **PASS WITH PROVISIONAL TOP-BAR EDGE-INSET NOTE**

## Current next action

Remain in **Phase F3** for one focused cleanup pass only.

Required fixes are defined in:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

After remediation:
- rerun F3 QA-1
- rerun F3 QA-2
- verify TopBar trailing text wrapper >= 44 x 44
- verify TopBar variant architecture no longer explodes to 72 combinations
- verify internal variant overlap = 0 in Settings and Movement sets
- verify explicit Scrim child exists in Dialog and Sheet overlay anatomy
- verify previously passed F3 items do not regress
- STOP and request independent QA

## Gate

Do **not** start `Examples` or `10_FITNESS_SCREENS` while F3 QA is failing.

Later sequence remains:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS PASS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
