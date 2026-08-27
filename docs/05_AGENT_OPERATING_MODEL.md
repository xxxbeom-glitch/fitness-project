# 05 AGENT OPERATING MODEL

## Purpose
Keep product direction stable while allowing specialized AI roles to work quickly without turning a solo project into bureaucracy.

Roles are responsibilities, not permanently tied to a specific tool. ChatGPT, Cursor, Claude, or another AI may perform a role if it follows the same canonical sources and gates.

## Core rule

**Use only the roles needed for the current problem.**

Eight roles do not mean eight sequential approvals. A small UI copy change may need only UI + QA. A new onboarding concept may need Product + Research + UX. A persistence refactor may need Dev + QA with Regression Gate.

## Roles

### 1. PM / Product Agent
Owns:
- problem definition
- target user
- product value
- MVP scope
- priorities
- Decision framing
- next action / task decomposition

Must not automatically accept the Product Owner's first idea or the AI's first idea. Important proposals should pass the Decision Challenge Gate.

### 2. Research / Evidence Agent
Owns:
- market and competitor research
- official platform/policy verification
- user problem evidence
- exercise/health evidence
- source quality and uncertainty
- conflicting evidence

For exercise/health claims, use the Evidence Pipeline in `10_RESEARCH_REFERENCE.md`. Do not use interviews to prove physiology, and do not use academic papers alone to prove product usability.

### 3. UX Agent
Owns:
- IA
- user flows
- storyboard
- screen purpose
- information hierarchy
- primary/secondary actions
- state model
- error/recovery paths
- onboarding/drop-off points

UX should be defined before detailed visual styling. Material changes to product meaning require Product review.

### 4. UI / Design Agent
Owns:
- high-fidelity screen composition
- components and variants
- visual hierarchy
- typography/spacing/tokens
- interaction expression
- Figma refinement
- consistency with the design system

Uses Mobbin and other references as pattern evidence, not as screens to copy. Reuses existing Fitness/Liftly assets when useful.

### 5. Dev Agent
Owns:
- implementation
- architecture and data-model changes within approved scope
- code changes
- test/build evidence
- commit/push

Must run the Change Impact Gate before medium/high-risk implementation and must not silently change product behavior.

### 6. QA Agent
Owns independent verification:
- Acceptance Criteria
- regression
- data integrity
- state/edge cases
- usability/accessibility
- implementation evidence
- runtime/device evidence when required

The creator's completion summary is evidence input, not the verdict.

### 7. Growth Agent
Owns when activated:
- activation
- onboarding completion
- retention
- funnel analysis
- paywall/monetization experiments
- growth hypotheses and measurement

Growth must not optimize conversion by degrading the core workout experience or violating Product Policy.

### 8. Ops Agent
Owns when activated:
- production incidents
- customer support patterns
- recurring operational tasks
- logs/monitoring signals
- store/release operations
- repeated user complaints and issue clustering

Ops is defined early but remains lightweight until the product is live.

## Three cross-role Gates

### Evidence Gate
Trigger when a decision depends on external facts, especially exercise, health, policy, platform, pricing, or market claims.

Output should separate:
- Fact
- Inference
- Recommendation
- Conflicting evidence
- Confidence
- Not Verified

### Decision Challenge Gate
Trigger for important product choices, expensive/irreversible choices, or when the Product Owner explicitly asks for judgment.

Minimum challenge frame:
- A: strongest case for the current proposal
- B: strongest case against it
- C: a meaningfully different framing/solution

Then compare user value, evidence, hidden cost/risk, MVP complexity, competitor patterns, and the cheapest useful test.

Do not manufacture disagreement when the evidence strongly favors one option.

### Regression & Impact Gate
Trigger before medium/high-risk implementation, especially shared state, persistence, database, auth/sync, navigation root, billing, health data, shared design-system behavior, or code used across multiple workout flows.

Before implementation identify:
- changed module/file
- direct consumers
- indirect surfaces
- affected global invariants
- required regression packs
- external runtime impact

## Default pipelines

### Product discovery / policy
`Product -> Research when needed -> Challenge Gate -> Product Owner Decision -> Decision docs`

### UX / Design
`Product Decision -> UX IA/Storyboard -> Figma low-fi -> Reference research -> UI pattern synthesis -> Figma refinement -> Design QA -> Development`

### Development
`CURRENT -> Issue -> relevant Decision/Policy/Design -> Impact Gate -> Development -> Test/Build/Commit -> QA -> CURRENT`

### Growth
`Observed metric/problem -> Growth hypothesis -> Product guardrail check -> experiment -> evidence -> Decision`

### Ops
`Incident/user signal -> triage -> root cause owner -> fix/response -> verification -> recurring-pattern review`

## Design workflow rules

1. UX Agent defines structure before visual polish.
2. First Figma pass is low-fidelity storyboard/flow visualization.
3. Reference research is done by UX problem, not broad aesthetic keywords.
4. Mobbin is used as a pattern library. Do not copy one product wholesale.
5. UI Agent synthesizes useful patterns into the existing Fitness design language.
6. Existing Figma/Liftly components and tokens are reused when they remain valid.
7. Figma is not the product-policy Source of Truth.
8. Design QA checks storyboard-to-Figma meaning, component consistency, missing states, accessibility, and implementation feasibility.

## Handoff minimum

A handoff should contain only what the next role needs:
- Goal
- Context
- Source of truth used
- Confirmed
- Not decided
- Scope / Do Not Change
- Result or proposed solution
- Evidence
- Risk / Not Verified
- Next action

Do not create a long handoff document when a short Issue section is enough.

## Decision escalation

If a role encounters a choice that changes target user, core concept, MVP, monetization, privacy/health data, platform, core architecture, or major UX meaning, return:

`DECISION NEEDED`

The Product Owner makes the final choice, then the decision is recorded in `08_DECISIONS.md` and reflected in relevant canonical documents.

## Anti-bureaucracy rule

The agent system exists to improve decisions and reduce rework, not to create ceremony.

- Do not run all roles by default.
- Do not create an Issue for every discussion.
- Do not require formal handoffs for trivial work.
- If the process costs more time than the risk it controls, simplify the process.
