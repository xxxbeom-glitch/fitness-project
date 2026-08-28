# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA BUILD READY`

The product/policy baseline is sufficiently settled to proceed with design-system construction. The current work is **not broad Fitness screen production**; it is the Tonal reconstruction baseline that will be used before Fitness-specific customization.

## Product state — confirmed

Canonical product decisions are maintained in `docs/08_DECISIONS.md` through `DEC-021`.

Current product direction includes:
- general-purpose weight-training tracker
- first-run choice: **recommended routine / build my own routine**
- curated program-template matching rather than LLM-generated routines
- short recommendation onboarding: goal + weekly availability + workout duration
- gym-first first recommendation
- authentication required; Android Google/Kakao, iOS Google/Kakao/Apple
- unified provider `계속하기` semantics rather than separate signup/login branches
- offline-first workout persistence and change-driven cloud synchronization
- one active editing device for an in-progress workout
- active workout survives app/process/device restart until explicit finish/discard
- fast logging, previous-performance visibility, flexible editing, and active-session recovery remain core
- exercise detail is text-first / media-optional
- custom exercises remain MVP-critical
- monetization remains intentionally deferred
- technical stack: React Native + Expo + TypeScript, shared Android/iOS codebase; current real-device QA is Android-only until an iPhone is available

Screen-level approvals are maintained in `docs/13_SCREEN_DESIGN_DECISIONS.md`.

Already approved there:
- Screen 01 first entry/authentication structure, hero-media placeholder strategy, provider-button treatment, transient auth states, and legal-link treatment
- Screen 02 first-run path choice with two equal text-only action cards and no separate Continue button

## Visual-system authority

The visual-reference split is confirmed:
- **Tonal = Phase-A visual-system reconstruction/replication baseline**
- **Hevy = practical weight-training functionality / repeated interaction reference**
- **Fitness GitHub Product/Policy/Decision docs = behavior and scope authority**

Tonal screenshots are used to reconstruct visible relationships, not to claim Tonal's private source tokens. Tonal trademarks, proprietary icons, logos, production media, and exact proprietary assets are not Fitness assets.

## Tonal reconstruction status

Completed:
- `docs/18_TONAL_FOUNDATIONS_AUDIT.md` — Batch 01 Foundations
- `docs/19_TONAL_CORE_COMPONENTS_AUDIT.md` — Batch 02 Core Components
- `docs/20_TONAL_INTERMEDIATE_QA_BATCH01_02.md` — midpoint specification QA with canonical corrections
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md` — Batch 03 Product Patterns
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — **PASS**

The canonical implementation-facing Phase-A specification is now:

`docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

If an earlier audit document conflicts with `15_TONAL_DESIGN_SYSTEM_SPEC.md`, the consolidated spec wins until a later QA-approved correction updates it.

Figma construction instructions:
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`

Figma mechanical execution / QA contract:
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

## Figma discovery status

Phase-0 discovery of the current Figma file has been performed.

Observed existing assets:
- historical `V0.3_FOUNDATIONS` and `V0.3_COMPONENTS`
- historical wireframe pages through `V0.5_PRODUCTIZED_WIREFRAME`
- existing V0.3 variable collections and SUIT-based text styles
- existing old-direction components such as pill/full-width CTA and floating bottom navigation

Decision for the current Phase-A build:
- preserve historical V0.3/V0.5 pages as reference/archive material
- do **not** mutate the old V0.3 design system into the new baseline
- construct a separate Tonal Phase-A semantic system from the consolidated GitHub spec
- existing 390 reference width, 24 page inset, and 4 pt spacing-family concepts may be reused where they agree with the consolidated spec
- Pretendard is available in the target Figma environment with the required working weights and is the Phase-A typography proxy

## Figma build sequence

Required order:

`01_FOUNDATIONS -> 02_COMPONENTS -> 03_PATTERNS -> Examples -> 10_FITNESS_SCREENS`

Do not build the whole library in one uncontrolled pass.

### Current next action — Phase F1

Build **`01_FOUNDATIONS` only** from `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`.

Create/verify:
- semantic surface / ink / divider / accent/action color variables
- spacing variables
- radius variables
- icon / touch / repeated dimension variables
- Pretendard text styles including metric roles
- 390 reference + 24 inset demonstration
- Fixed / Hug / Fill examples
- alignment and touch-target examples

Then run **Foundation preflight** before any component construction:
- every canonical role exists exactly once
- no duplicate near-synonym variables
- values match the canonical spec
- scopes/bindings are appropriate
- text styles use intended Pretendard roles
- provisional status is documented

Only after Foundation preflight passes may Phase F2 components begin.

## Mandatory Figma QA

Every substantial build batch follows `docs/17_FIGMA_AGENT_EXECUTION_QA.md`:

1. **QA-1 Structure / Auto Layout**
   - Auto Layout direction
   - Fixed / Hug / Fill independently on both axes
   - padding / gap / alignment
   - text wrap / resizing
   - responsive behavior
   - unnecessary absolute positioning

2. **QA-2 Design-system / Binding**
   - actual variable/style bindings
   - component instances / variants / properties
   - semantic naming
   - no avoidable detached instances
   - no repeated raw-value drift

3. **QA-3 Visual / Reference / Product**
   - Tonal screenshot relationship/fidelity
   - cross-screen consistency
   - Fitness product-policy correctness
   - no proprietary Tonal asset reuse

A visual match alone is not a PASS if structure or binding is incorrect.

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

No repository or specification blocker.

The intentional gate is: **do not resume broad Fitness screen visual customization until the Tonal reconstruction baseline has been built in Figma and representative examples pass QA-1 / QA-2 / QA-3.**

## Canonical source rule

GitHub remains the Source of Truth for product policy, current design-system specification, execution rules, and QA criteria. Figma is the visual implementation/reference artifact and must be corrected when it conflicts with current GitHub policy or the canonical Phase-A spec.
