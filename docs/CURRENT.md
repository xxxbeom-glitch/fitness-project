# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F2 QA FAIL / REMEDIATION REQUIRED`

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

Verified foundation state remains the approved baseline:
- 49 canonical local variables
- 15 canonical Pretendard Text Styles
- foundation binding / spacing / text resizing / metadata QA passed

## Phase F2 — current result

Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

**F2 RESULT: FAIL — REMEDIATION REQUIRED BEFORE F3**

Current `02_COMPONENTS` inventory:
- 13 component sets
- 1 standalone component family (`Control/Stepper`)
- 45 variants/components total
- no later Phase page created; STOP discipline respected

Existing families include:
- all requested primary/secondary/text Button families
- `ChoiceCard/Single`
- `ChoiceCard/Multi`
- `Control/Radio`
- `Control/Check`
- `Control/Toggle`
- `Control/Stepper`
- `Control/Segmented/Pill`
- `Control/ModeTile`

### Blocking findings

1. `Input/Underline` is missing entirely.
2. 14 button label/loading text layers visually use Pretendard 12/16 Bold but do **not** actually apply the canonical `Type/Action/Primary` Text Style.
3. `ChoiceCard/Single` and `ChoiceCard/Multi` locally recreate selection-indicator geometry; the entire F2 page currently contains zero nested `INSTANCE` nodes, so the cards do not reuse the existing `Control/Radio` / `Control/Check` components.

### Minor cleanup

- 13 component-set arrangement gaps use raw `16` rather than `Space/16`. Bind where supported or document the exception.

### What passed in F2 inspection

- no top-level component overlap
- no text collapse / near-zero-width wrapping failure
- semantic family naming is generally clean
- family descriptions exist
- major text/component properties are present
- actual Toggle has ON/OFF variants, 52×32 geometry, and a 24×24 thumb
- F3 / Examples / Fitness screen pages were not started

## Current next action

Remain in **Phase F2** and remediate only the current component system:

1. create `Input/Underline` with `Default / Focus / Filled / Error / Disabled` states and canonical Fill/Hug behavior
2. apply existing `Type/Action/Primary` Text Style to the 14 affected Button text layers
3. make ChoiceCards reuse nested `Control/Radio` / `Control/Check` instances where practical and preserve state mapping
4. bind the repeated component-set `itemSpacing=16` to `Space/16` where supported, otherwise document the exception
5. rerun F2 QA-1 / QA-2
6. STOP and request independent QA before starting F3

## Gate

Do **not** start `03_PATTERNS` while F2 QA is failing.

Later sequence remains:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

Broad Fitness customization resumes only after representative examples pass full QA-1 / QA-2 / QA-3 against Tonal evidence and Fitness product policy.

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
