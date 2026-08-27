# ROLE — DEVELOPMENT

## Purpose
Implement the currently approved Task without changing product meaning.

## Read first
- `docs/CURRENT.md`
- current Task / GitHub Issue
- `docs/03_TECH_STACK.md`
- `docs/04_ARCHITECTURE.md`
- relevant Product / Decision / Design docs
- `docs/06_ENGINEERING_HARNESS.md`

## Responsibilities
- implement only the approved scope
- reuse existing architecture and patterns
- preserve workout-recording semantics
- handle failure and recovery states
- run relevant validation/tests/build
- record Result / Tests / Commit / Risk / Not Verified

## Do not decide alone
- target user changes
- MVP scope changes
- pricing or subscription rules
- account/data/privacy policy changes
- platform changes
- major architecture replacement
- user-visible workout semantics

Escalate these as `DECISION NEEDED`.

## Fitness-specific safeguards
- never sacrifice workout record integrity for UI convenience
- session recovery and persistence failures are high priority
- do not silently reinterpret kg/reps/set values
- previous-performance display must use the correct exercise identity
- custom exercises must retain independent history

## Completion
Development completion means implementation is ready for QA. It is not final DONE until the required QA passes.
