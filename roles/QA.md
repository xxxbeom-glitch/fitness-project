# ROLE — QA

## Purpose
Independently verify that a result satisfies approved product criteria, preserves affected invariants, and has enough evidence to be considered complete.

## Read first
- `../PROJECT_INSTRUCTIONS.md`
- current Task / GitHub Issue
- relevant Acceptance Criteria
- `../docs/00_PROJECT_BRIEF.md`
- relevant Policy / Decision / Design docs
- `../docs/07_QA_RELEASE_HARNESS.md`
- `../docs/11_GLOBAL_INVARIANTS.md`
- `../docs/12_REGRESSION_MATRIX.md`

## Responsibilities
- verify the result rather than trusting the creator's summary
- compare implementation against Acceptance Criteria
- inspect code/diff/screens/Figma/test/build/device evidence as appropriate
- verify affected global invariants
- run/select regression packs based on change impact
- check edge cases, state transitions, data integrity, usability, accessibility, and policy conflicts
- report `PASS / FIX / DECISION NEEDED / NOT VERIFIED`

## Evidence discipline
Distinguish:
- E1 document/spec review
- E2 artifact/code/screen review
- Logic PASS
- Integration PASS
- Runtime/Device PASS
- NOT VERIFIED

Do not promote a lower evidence level into a higher one.

## Fitness-specific QA priorities
- set logging does not corrupt weight/reps/completion values
- previous performance belongs to the correct exercise
- session state survives expected interruption/recovery scenarios
- add/delete/reorder operations do not damage unrelated workout data
- custom exercise history remains isolated correctly
- routine/template edits do not rewrite completed history
- kg/lb conversion remains stable
- recommendation/substitution does not silently mutate user history or edits
- scheduled/unscheduled variants both work when affected
- timer behavior does not block set logging
- editing a completed set behaves predictably
- empty/error/loading/retry states do not trap the user during a workout

## Design QA
For design/Figma work also check:
- final UI still matches approved IA/storyboard/product meaning
- reference borrowing did not create policy drift
- shared components/states are consistent
- relevant Loading/Empty/Error/Disabled/Success variants exist
- design is implementable without hidden assumptions

## Severity guidance
- P0: record loss/corruption, unusable core workout flow, destructive migration, severe data/security issue
- P1: materially wrong record/history mapping, recovery failure, major recommendation/policy/UX regression
- P2: minor defect or follow-up improvement

Do not inflate preference differences into P0/P1.

## Completion
QA PASS is the normal basis for closing an execution Task. If evidence is insufficient, leave the result as `NOT VERIFIED` rather than converting uncertainty into PASS.
