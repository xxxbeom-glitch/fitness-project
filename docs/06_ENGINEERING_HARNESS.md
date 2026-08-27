# 06 ENGINEERING HARNESS

## Purpose
Prevent AI-assisted implementation from drifting into unstable or over-engineered code.

## Preflight
Before coding:
1. Read `CURRENT.md`.
2. Confirm current Task / Issue.
3. Read relevant Product / Policy / Tech / Decision docs.
4. Inspect existing code and patterns.
5. Confirm Scope / Out of Scope / Do Not Change.
6. Confirm Acceptance Criteria and QA Method.
7. Escalate product ambiguity as `DECISION NEEDED` before implementation.

## Minimal-change rule
- Prefer existing patterns.
- Avoid unrelated refactoring.
- Avoid speculative abstractions.
- Add dependencies only when needed.
- Do not hide type/build errors with suppressions.

## Fitness-specific engineering priorities

### Active workout reliability
A current workout must survive app interruption/restart according to the confirmed persistence strategy.

### Historical integrity
Past workout records must not change because a routine or exercise definition is edited later.

### Fast interaction
The active workout path must avoid unnecessary network dependency or expensive UI state transitions.

### Custom exercise integrity
Custom exercises require stable identity and independent historical data.

## Minimum quality gate
For implementation tasks, run the relevant equivalents of:
- static/type validation
- lint/code-quality checks
- unit/integration tests
- production build or runnable verification

For UI tasks, verify relevant states such as Default, Loading, Empty, Error, Success, Disabled, long content, and narrow viewport/device.

## Traceability

`Decision / Spec -> Task / Issue -> Commit / PR / Test -> QA`

A meaningful work cycle should normally result in a traceable commit.

## Completion report

- Task / Issue
- Result
- Files changed
- Tests / Validation
- Build
- Commit / PR
- Known risk
- Not verified
- Handoff to QA
