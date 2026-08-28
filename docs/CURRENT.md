# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F2 FINAL CLEANUP REQUIRED`

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

## Phase F2 — current result

Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

**F2 RESULT: NOT READY FOR F3 — FIRST REMEDIATION PASSED, FINAL CLEANUP REQUIRED**

### Remediation items now verified PASS

- full expected F2 family inventory exists
- `Input/Underline` now exists with Default / Focus / Filled / Error / Disabled states
- 14/14 affected Button labels now actually use `Type/Action/Primary`
- `ChoiceCard/Single` now contains nested `Control/Radio` instances
- `ChoiceCard/Multi` now contains nested `Control/Check` instances
- duplicated local ChoiceCard selection indicators removed
- all 14 component-set arrangement gaps are bound to `Space/16`
- all F2 text layers have Text Styles
- no character-by-character text collapse detected
- no F3/later page created

### Remaining F2 blockers

1. `Input/Underline` was placed at `x=0, y=0` and physically overlaps:
   - `Button/Primary/Compact`
   - `Button/Primary/Content`
   Current top-level overlap count: **2**.

2. `Input/Underline` currently exposes `Label`, `Value`, and `State`, but the canonical optional counter/trailing metadata capability is absent. Add a simple reusable trailing/counter API while keeping value text `FILL` and trailing content `HUG`.

3. `Control/Stepper` keeps the intended `124 x 38` visible geometry, but minus/plus action slots are `38 x 38`. Provide a 44pt minimum interaction target without changing the compact visible surface language.

## Current next action

Remain in **Phase F2** for one final focused remediation pass only:

1. move `Input/Underline` to a clear non-overlapping top-level location
2. add optional trailing/counter support to `Input/Underline`
3. provide 44pt interaction wrappers for Stepper minus/plus while retaining the current visible geometry
4. re-run F2 QA-1 / QA-2
5. STOP and request independent QA

## Gate

Do **not** start `03_PATTERNS` until F2 receives independent PASS.

Later sequence remains:

`01_FOUNDATIONS PASS -> 02_COMPONENTS PASS -> 03_PATTERNS -> Examples -> representative QA -> 10_FITNESS_SCREENS`

Broad Fitness customization resumes only after representative examples pass full QA-1 / QA-2 / QA-3 against Tonal evidence and Fitness product policy.

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
