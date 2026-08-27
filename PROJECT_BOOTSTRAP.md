# FITNESS PROJECT BOOTSTRAP

Goal: create the minimum stable Project OS v0.1 before implementation.

## Decision states

- `CONFIRMED` — approved or sufficiently established
- `ASSUMPTION` — provisional hypothesis
- `TBD` — intentionally undecided
- `RESEARCH NEEDED` — requires external verification
- `NOT VERIFIED` — not verified at the required evidence level

Do not convert unknowns into confirmed decisions by inference alone.

## Phase 1 — Product

Confirm:
- product definition
- target user / desired guidance model
- core problem
- core value proposition
- MVP must-haves
- non-goals

Primary file: `docs/00_PROJECT_BRIEF.md`

Important choices should pass the Decision Challenge Gate when the trade-off is meaningful.

## Phase 2 — Policy / Business

Confirm:
- account/auth needs
- data/privacy/deletion
- body/health-data boundaries
- monetization timing and model
- product costs and business hypotheses

Primary files:
- `docs/01_PRODUCT_POLICY.md`
- `docs/02_BUSINESS_MODEL.md`

## Phase 3 — Platform / Technology

Confirm:
- Android / iOS / Web priorities
- framework and language
- backend/database/auth
- sync/offline/session recovery strategy
- external services and constraints

Primary files:
- `docs/03_TECH_STACK.md`
- `docs/04_ARCHITECTURE.md`

## Phase 4 — Research / Evidence

Confirm the evidence standards needed for this fitness product:
- official/platform policy research
- exercise/health evidence hierarchy
- user interview/usability evidence
- competitor/reference evidence
- Fact / Inference / Recommendation separation
- counter-evidence handling

Primary file:
- `docs/10_RESEARCH_REFERENCE.md`

## Phase 5 — UX / Design

Confirm:
- core workout-start paths
- onboarding/recommendation flow
- workout logging flow
- IA
- required UI states
- minimum design system
- accessibility/usability constraints
- AI-assisted Figma/Mobbin design pipeline

Default pipeline:

`Product Decision -> UX IA/Storyboard -> Figma low-fi -> Mobbin/reference research -> UI synthesis -> Figma refinement -> Design QA -> Development`

Primary file:
- `docs/09_DESIGN_SYSTEM.md`

## Phase 6 — Operating Model

Confirm:
- 8 specialist role boundaries
- lightweight Agent activation rules
- Decision Challenge Gate
- Evidence Gate
- Regression & Impact Gate
- task/handoff rules
- engineering safety rails
- QA/release criteria

Primary files:
- `docs/05_AGENT_OPERATING_MODEL.md`
- `docs/06_ENGINEERING_HARNESS.md`
- `docs/07_QA_RELEASE_HARNESS.md`
- `docs/11_GLOBAL_INVARIANTS.md`
- `docs/12_REGRESSION_MATRIX.md`

## Cross-document QA

Before Project OS v0.1:
- Product Brief and Policy must not conflict.
- Business model must not undermine the core workout experience.
- Health/exercise claims must not exceed their evidence.
- Tech stack must not be more complex than MVP requires.
- Architecture must support session persistence/data reliability.
- Design rules must support fast logging and optional scheduling.
- Figma must not silently redefine product policy.
- Role permissions must not overlap ambiguously.
- High-risk engineering rules must connect to real regression packs/invariants.
- Assumptions/TBDs must not appear as confirmed facts elsewhere.
- Agent/process overhead must remain appropriate for a solo project.

## Freeze condition

Project OS v0.1 is ready when:
- product purpose and MVP are clear
- major policy states are explicit
- evidence standards exist
- platform/tech direction is sufficient to begin implementation
- minimum UX/design direction and pipeline exist
- agent/QA/regression rules exist
- no major cross-document conflict remains
- `docs/CURRENT.md` identifies the next executable task

Freeze is not permanent. Later changes become new recorded decisions.
