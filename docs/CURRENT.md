# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F1 PASS / F2 READY`

The product/policy baseline is sufficiently settled for design-system construction. The current work is **not broad Fitness screen production**; it is the Tonal reconstruction baseline that must pass staged Figma QA before Fitness-specific customization resumes.

## Product authority

Canonical product decisions are maintained in:
- `docs/08_DECISIONS.md` through `DEC-021`
- `docs/13_SCREEN_DESIGN_DECISIONS.md` for approved screen-level decisions
- `docs/09_TECHNICAL_STACK.md` for the current React Native + Expo + TypeScript platform direction

Key current product constraints remain:
- general-purpose weight-training tracker
- first-run choice: recommended routine / build my own routine
- short recommendation onboarding: goal + weekly availability + workout duration
- gym-first initial recommendation
- authentication required
- offline-first workout persistence and change-driven sync
- one active editing device for an in-progress workout
- active workout survives app/process/device restart until explicit finish/discard
- fast logging, previous-performance visibility, flexible editing, and active-session recovery remain core
- exercise detail is text-first / media-optional
- custom exercises remain MVP-critical
- monetization remains intentionally deferred

## Visual-system authority

Confirmed reference split:
- **Tonal = Phase-A visual-system reconstruction/replication baseline**
- **Hevy = practical weight-training functionality / repeated interaction reference**
- **Fitness GitHub Product/Policy/Decision docs = behavior and scope authority**

Tonal screenshots are evidence for visible relationships only. Fitness does not claim Tonal private tokens and does not reuse Tonal trademarks, proprietary icons, logos, production media, or exact proprietary assets.

## Tonal reconstruction documentation status

Completed:
- `docs/18_TONAL_FOUNDATIONS_AUDIT.md` — Batch 01 Foundations
- `docs/19_TONAL_CORE_COMPONENTS_AUDIT.md` — Batch 02 Core Components
- `docs/20_TONAL_INTERMEDIATE_QA_BATCH01_02.md` — midpoint QA
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md` — Batch 03 Product Patterns
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — **PASS**

Canonical implementation-facing Phase-A specification:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

Figma construction instructions:
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`

Figma execution / QA contract:
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

If an older audit estimate conflicts with `15_TONAL_DESIGN_SYSTEM_SPEC.md`, the canonical spec wins until a later QA-approved correction updates it.

## Current Figma state

Current design file:
- `tracker-app3`
- file key `tBpQfpAR1apJngF8a7qyH9`

The Product Owner removed the prior Figma work. The current file is intentionally rebuilt from the current GitHub canonical specification rather than preserving old V0.3/V0.5 assets.

Current page inventory after F1 QA:
- `01_FOUNDATIONS` only

No later Phase pages currently exist:
- no `02_COMPONENTS`
- no `03_PATTERNS`
- no `Examples`
- no `10_FITNESS_SCREENS`

## Phase F1 — Foundation result

Independent QA recorded in:
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

**F1 RESULT: PASS**

Verified against the actual Figma structure:
- 49 canonical local variables
  - Color 17
  - Space 13
  - Radius 6
  - Size 13
- 15 canonical Pretendard Text Styles
- missing canonical variables/styles: 0
- unexpected extras: 0
- canonical value mismatch: 0
- top-level documentation overlap: 0
- text collapse / near-zero-width wrapping failures: 0
- canonical repeated Auto Layout spacing properties bound to Space variables: 205
- avoidable canonical spacing raw values remaining: 0
- all variables and Text Styles have role-specific descriptions
- F1 STOP condition respected; `02_COMPONENTS` was not created

Foundation-level QA-1 Structure: **PASS**

Foundation-level QA-2 Binding: **PASS**

Foundation-level QA-3 Visual: **PASS FOR F1 SCOPE**

Full Tonal screenshot fidelity QA remains intentionally deferred until representative Components / Patterns / Examples exist.

## Figma build sequence

Required order:

`01_FOUNDATIONS -> 02_COMPONENTS -> 03_PATTERNS -> Examples -> 10_FITNESS_SCREENS`

Do not build the entire library in one uncontrolled pass.

## Current next action — Phase F2

Build **Phase F2 — Core Actions / Selections** only.

Scope:
- primary / secondary / text action button families
- choice cards
- radio / check
- toggle
- stepper
- segmented / mode controls
- underline input
- required icon/control placeholders used by those components

Use existing F1 variables and Text Styles. Do not duplicate or bypass the Foundation system with raw values unless the property cannot be bound and the exception is documented.

F2 must be built in small component-family batches and each family must be validated before the next family expands the system.

Before F3 begins, F2 must pass:

### QA-1 — Structure / Auto Layout
- correct component anatomy
- Auto Layout direction
- Fixed / Hug / Fill independently on both axes
- min-height / resizing / wrapping
- state layout stability
- responsive/copy stress behavior

### QA-2 — Design-system / Binding
- variables/styles actually bound
- semantic component naming
- controlled variants/properties
- no avoidable detached instances
- no repeated raw-value drift

Do not report F2 DONE while either QA stage fails.

## Later gate

Do not resume broad Fitness screen visual customization until:
- F2 components pass QA-1/2
- F3 navigation/rows/overlays pass QA-1/2
- F4 product patterns pass QA-1/2
- F5 representative examples pass full QA-1 / QA-2 / QA-3 against Tonal evidence and Fitness policy

## Deferred by explicit product decision

- monetization model / pricing / paid-free boundaries
- exact recommended-program template count
- exact template exercise composition
- cross-device active-workout takeover/transfer
- duplicate-account workout-history merge/recovery
- final hero photo/video and final brand copy
- final Fitness iconography
- final dark-mode policy beyond evidenced Phase-A dark/media patterns

## Current blocker

No repository, specification, or F1 blocker.

The next controlled gate is **Phase F2 Core Actions / Selections**.

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, and QA criteria. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
