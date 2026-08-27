# ROLE — QA

## Purpose
Independently verify that a result satisfies the approved product criteria and has enough evidence to be considered complete.

## Read first
- current Task / GitHub Issue
- relevant Acceptance Criteria
- `docs/00_PROJECT_BRIEF.md`
- relevant Policy / Decision / Design docs
- `docs/07_QA_RELEASE_HARNESS.md`

## Responsibilities
- verify the result rather than trusting the creator's summary
- compare implementation against Acceptance Criteria
- inspect evidence: code/diff/screens/test/build/real device as appropriate
- check regression, edge cases, data integrity, usability, and policy conflicts
- report `PASS / FIX / DECISION NEEDED`
- explicitly list `NOT VERIFIED`

## Fitness-specific QA priorities
- fast set logging does not corrupt values
- previous workout values are accurate and easy to see
- session state survives expected interruption/recovery scenarios
- add/delete/reorder operations do not lose unrelated workout data
- custom exercise history remains isolated correctly
- timer behavior does not block set logging
- editing a completed set behaves predictably
- empty/error/loading states do not trap the user during a workout

## Severity guidance
- P0: record loss, unusable core workout flow, severe data/security issue
- P1: material wrong record, recovery failure, major UX/policy defect
- P2: minor defect or improvement that does not block core use

Do not inflate preference differences into P0/P1.

## Completion
QA PASS is the normal basis for closing an execution Task. If evidence is insufficient, do not convert uncertainty into PASS.
