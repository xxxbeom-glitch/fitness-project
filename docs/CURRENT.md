# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F3 QA FAIL / REMEDIATION REQUIRED`

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

**F3 RESULT: FAIL — REMEDIATION REQUIRED BEFORE NEXT PHASE**

All expected F3 families exist:
- `Navigation/TopBar`
- `Navigation/BottomBar`
- `Tab/Underline`
- `Row/Settings`
- `Row/Movement`
- `Workout/BlockHeader`
- `Dialog/Center`
- `Sheet/Action`
- `Feedback/Toast`

Positive findings:
- missing F3 families = 0
- all F3 text uses Text Styles
- text-collapse failures = 0
- F2 nested reuse exists
- later Phase pages have not been created

Blocking findings:
1. `Tab/Underline` overlaps `Row/Settings` on the page.
2. `Navigation/TopBar` does not expose canonical Leading / Trailing / Title mode APIs.
3. `Navigation/BottomBar` has no controllable active-index/state API.
4. `Tab/Underline` Active state is 50pt high while Inactive is 40pt, causing layout jump.
5. `Row/Settings` lacks `Tone = Default | Destructive | Disabled`; its nested Toggle was shrunk from 52x32 to 32x32.
6. `Row/Movement` lacks canonical `Trailing = Chevron | Drag | None` and `Meta = SingleLine | MultiLine` modes.
7. `Workout/BlockHeader` is only 175x54 / HUG instead of representing full-width/FILL behavior.
8. `Dialog/Center` lacks canonical Body/Secondary/Tone modes and viewport scrim; nested F2 buttons are collapsed to 16/18pt heights instead of 54pt.
9. `Sheet/Action` lacks viewport scrim/bottom-overlay anatomy; nested primary F2 button is collapsed to 16pt instead of 54pt.
10. 16 canonical spacing properties remain raw instead of bound to existing Space variables.

F3 QA-1 Structure: **FAIL**

F3 QA-2 Design-system / Binding: **FAIL**

F3 visual sanity: **PARTIAL PASS**

## Current next action

Remain in **Phase F3** and remediate only the current F3 patterns.

Required fixes are defined in:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

After remediation:
- rerun F3 QA-1
- rerun F3 QA-2
- verify nested F2 instance geometry
- verify canonical variant/property APIs
- verify top-level overlap = 0
- verify avoidable raw canonical spacing = 0
- STOP and request independent QA

## Gate

Do **not** start `Examples` or `10_FITNESS_SCREENS` while F3 QA is failing.

Later sequence remains:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS PASS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
