# FITNESS PROJECT BOOTSTRAP

Goal: create the minimum stable Project OS v0.1 before implementation.

## Decision states

- `CONFIRMED` — approved or sufficiently established
- `ASSUMPTION` — provisional hypothesis
- `TBD` — intentionally undecided
- `RESEARCH NEEDED` — requires external verification

Do not convert unknowns into confirmed decisions by inference alone.

## Phase 1 — Product

Confirm:
- product definition
- target user
- core problem
- core value proposition
- MVP must-haves
- non-goals

Primary file: `docs/00_PROJECT_BRIEF.md`

## Phase 2 — Policy / Business

Confirm:
- account/auth needs
- data/privacy/deletion
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

## Phase 4 — UX / Design

Confirm:
- core workout-start paths
- workout logging flow
- IA
- required UI states
- minimum design system
- accessibility/usability constraints

Primary file: `docs/09_DESIGN_SYSTEM.md`

## Phase 5 — Operating Model

Confirm:
- role boundaries
- task/handoff rules
- decision gates
- engineering safety rails
- QA/release criteria

Primary files:
- `docs/05_AGENT_OPERATING_MODEL.md`
- `docs/06_ENGINEERING_HARNESS.md`
- `docs/07_QA_RELEASE_HARNESS.md`

## Cross-document QA

Before Project OS v0.1:
- Product Brief and Policy must not conflict.
- Business model must not undermine core logging UX.
- Tech stack must not be more complex than the MVP requires.
- Architecture must support session persistence and data reliability.
- Design rules must support fast logging.
- Role permissions must not overlap ambiguously.
- Assumptions/TBDs must not appear as confirmed facts elsewhere.

## Freeze condition

Project OS v0.1 is ready when:
- product purpose and MVP are clear
- major policy states are explicit
- platform/tech direction is sufficient to begin implementation
- minimum design direction exists
- role/QA rules exist
- no major cross-document conflict remains
- `docs/CURRENT.md` identifies the next executable task

Freeze is not permanent. Later changes become new recorded decisions.
