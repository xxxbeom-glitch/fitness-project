# 06 ENGINEERING HARNESS

## Purpose
Prevent AI-assisted implementation from drifting into unstable, over-engineered, or regression-prone code.

This harness is deliberately lightweight for low-risk work and stricter for cross-cutting changes.

## Preflight
Before coding:
1. Read `CURRENT.md`.
2. Confirm current Task / Issue.
3. Read relevant Product / Policy / Tech / Decision / Design docs.
4. Inspect existing code and patterns.
5. Confirm Scope / Out of Scope / Do Not Change.
6. Confirm Acceptance Criteria and QA Method.
7. Run Change Impact Gate if the task is Medium/High risk.
8. Escalate product ambiguity as `DECISION NEEDED` before implementation.

## Change Impact Gate

Before Medium/High-risk implementation, record enough to answer:
- changed file/module
- direct consumers
- indirect user surfaces
- affected `11_GLOBAL_INVARIANTS.md`
- required packs from `12_REGRESSION_MATRIX.md`
- external runtime/config impact
- migration/existing-state impact

The goal is to prevent a local fix from breaking neighboring contracts.

## Risk classification

### Low
Isolated copy/visual/local change with no shared state or behavior meaning.

### Medium
One screen/state/use-case/repository-local behavior.

### High / Cross-cutting
Shared state, persistence, DB schema, exercise identity/history, unit storage/conversion, auth/sync, payment, health-data integration, navigation root/app lifecycle, or shared components used by multiple core flows.

High Risk requires explicit regression/evidence planning before implementation.

## Minimal-change rule
- Prefer existing patterns.
- Avoid unrelated refactoring.
- Avoid speculative abstractions.
- Add dependencies only when needed.
- Do not hide type/build errors with suppressions.
- Do not refactor neighboring code merely because it looks cleaner.

## No silent behavior change

Do not introduce new user-visible automatic behavior without an approved product rule.

Examples that require explicit product approval when not already specified:
- silently changing a saved routine
- silently applying a recommended weight/set change
- silently re-running a failed mutation
- silently changing weekday assignment
- silently rewriting completed workout data

Recovery behavior that is already a confirmed product contract, such as active-session recovery, is not considered a new behavior.

## Fitness-specific engineering priorities

### Active workout reliability
A current workout must survive app interruption/restart according to the confirmed persistence strategy.

### Historical integrity
Past workout records must not change because a routine, recommendation template, or exercise definition is edited later.

### Fast interaction
The active workout path should avoid unnecessary network dependency or expensive UI state transitions.

### Exercise identity
Previous performance must bind to stable exercise identity. Custom exercises require independent history.

### Unit integrity
kg/lb presentation must not progressively corrupt or reinterpret stored values.

### Recommendation integrity
Curated recommendation logic should remain deterministic/testable for the same structured inputs unless the matching rules explicitly change.

## State-transition testing

For Medium/High-risk changes, verify applicable transitions instead of only final static state:
- cold start
- warm resume
- background/foreground
- active session -> interruption -> recovery
- failure -> retry
- duplicate rapid actions
- existing data -> updated version
- scheduled <-> unscheduled state if affected

## Existing-state / upgrade checks

Fresh-install success alone is not enough for persistence/data changes.

Where applicable test:
- existing routines
- existing completed history
- custom exercises
- active workout in progress
- cached preferences
- schema/app upgrade
- partially completed operation

## Fault injection

High-risk changes should deliberately exercise realistic failure conditions when practical:
- app/process killed during active workout
- storage/write failure
- timeout or external dependency failure
- duplicate taps
- partial save
- missing optional body/schedule data

Do not invent destructive production tests merely to satisfy the harness.

## External runtime verification

When future features depend on external systems, separate repository state from deployed/runtime state.

Examples:
- backend migration/RLS/functions
- Play/App Store product configuration
- Health Connect / Apple Health permissions/config
- push/notification infrastructure

`repo updated != runtime deployed`

If runtime configuration matters to Acceptance Criteria, use read-back or equivalent evidence before final PASS.

## Minimum quality gate
For implementation tasks, run the relevant equivalents of:
- static/type validation
- lint/code-quality checks
- unit/integration tests
- production build or runnable verification
- selected regression packs based on impact

For UI tasks, verify relevant states such as Default, Loading, Empty, Error, Success, Disabled, long content, and narrow viewport/device.

## Evidence levels
Record what actually passed:
- `Logic PASS` — unit/state-machine/local logic
- `Integration PASS` — repository/database/server contract
- `Runtime/Device PASS` — actual lifecycle/OS/device/external runtime behavior
- `NOT VERIFIED` — not tested at the needed level

Do not promote Logic PASS into Runtime PASS.

## Traceability

`Decision / Spec -> Task / Issue -> Impact Gate -> Commit / PR / Test -> QA`

A meaningful work cycle should normally result in a traceable commit.

## Completion report

- Task / Issue
- Result
- Files changed
- Impact / Risk classification
- Affected invariants / regression packs
- Tests / Validation by evidence level
- Build
- Commit / PR
- Known risk
- Not verified
- Handoff to QA
