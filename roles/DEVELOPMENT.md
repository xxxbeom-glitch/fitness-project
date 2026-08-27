# ROLE — DEVELOPMENT

## Purpose
Implement the currently approved Task without changing product meaning or breaking neighboring contracts.

## Read first
- `../PROJECT_INSTRUCTIONS.md`
- `../docs/CURRENT.md`
- current Task / GitHub Issue
- `../docs/03_TECH_STACK.md`
- `../docs/04_ARCHITECTURE.md`
- relevant Product / Decision / Design docs
- `../docs/06_ENGINEERING_HARNESS.md`
- `../docs/11_GLOBAL_INVARIANTS.md`
- `../docs/12_REGRESSION_MATRIX.md`

## Responsibilities
- implement only approved scope
- reuse existing architecture and patterns
- preserve workout-recording semantics
- run Change Impact Gate for Medium/High-risk changes
- preserve affected global invariants
- select and run relevant regression packs
- handle failure/recovery states
- run relevant validation/tests/build
- record Result / Tests / Commit / Risk / Not Verified

## Do not decide alone
- target user changes
- MVP scope changes
- pricing or subscription rules
- account/data/privacy/health policy changes
- platform changes
- major architecture replacement
- user-visible workout semantics
- silent automatic mutations/retry behavior not already approved

Escalate these as `DECISION NEEDED`.

## Fitness-specific safeguards
- never sacrifice workout record integrity for UI convenience
- session recovery and persistence failures are high priority
- do not silently reinterpret kg/reps/set values
- previous-performance display must use correct exercise identity
- custom exercises must retain independent history
- routine edits must not rewrite completed history
- recommendation logic must not silently overwrite user edits

## Evidence
Report separately where applicable:
- Logic PASS
- Integration PASS
- Runtime/Device PASS
- NOT VERIFIED

Do not call a task fully PASS from unit tests when the behavior depends on real lifecycle/persistence/runtime conditions.

## Completion
Development completion means implementation is ready for independent QA. It is not final DONE until the required QA passes.
