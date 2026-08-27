# 07 QA & RELEASE HARNESS

## Principle
A generated result is not automatically complete. QA judges against Acceptance Criteria and evidence.

## Evidence levels
- E0: claim only
- E1: document review
- E2: artifact/code/screen review
- E3: tests/build/lint verified
- E4: real device/environment verified

Code implementation should not PASS on E0 alone.

## QA pipeline

### Q0 Product / Spec
- MVP scope respected
- Product Policy respected
- no silent feature meaning changes

### Q1 Functional
- normal workout flow works
- save/edit/delete behavior is correct
- failure can recover

### Q2 State / Edge Case
For relevant flows verify:
- Default
- Loading
- Empty
- Error
- Success
- Disabled
- Retry
- duplicate taps/actions
- slow network where relevant
- app interruption/restart during active workout

### Q3 Data / Security
- active workout data is not silently lost
- historical data is not rewritten by routine edits
- user data isolation is correct once accounts/sync exist
- secrets are not exposed

### Q4 UX / Accessibility
- next action is obvious
- previous performance is easy to see during logging
- workout edits do not require excessive navigation
- touch targets, focus/state contrast, and device-width behavior are acceptable

### Q5 Regression
Shared state, persistence, routine, exercise, or history changes require regression checks on affected workout flows.

### Q6 Release
Minimum release gate:
- P0 blocker 0
- core workout start/log/save/history flow verified
- session recovery verified to the required evidence level
- relevant test/build/lint checks PASS
- no debug/fake production data
- privacy/store requirements checked before public release

## Verdicts
- PASS
- FIX
- DECISION NEEDED

`NOT VERIFIED` is not equivalent to PASS.

## Severity
- P0: blocks release/core workout trust
- P1: important functional/data/policy/usability defect
- P2: minor defect or follow-up improvement
