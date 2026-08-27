# 07 QA & RELEASE HARNESS

## Principle
A generated or implemented result is not automatically complete. QA judges against approved product criteria, affected invariants, regression risk, and evidence quality.

The creator's completion report is input evidence, not the verdict.

## Evidence levels

Use explicit evidence labels:
- **E0 — Claim only**: creator says it works
- **E1 — Document review**: spec/decision/design reviewed
- **E2 — Artifact/code/screen review**: actual diff, code, Figma, screenshot, or data inspected
- **E3 Logic PASS**: unit/state-machine/static validation
- **E3 Integration PASS**: repository/database/server contract verified where applicable
- **E4 Runtime/Device PASS**: real lifecycle/device/external runtime behavior verified

`NOT VERIFIED` is not equivalent to PASS.

The required level depends on the feature. A visual copy change may not need E4. Active-session recovery should not final-PASS on unit tests alone.

## QA preflight

Before judging:
1. Read current Task / Acceptance Criteria.
2. Read relevant Decision / Policy / Design.
3. Check Risk classification from Engineering Harness.
4. Check affected `11_GLOBAL_INVARIANTS.md`.
5. Select relevant packs from `12_REGRESSION_MATRIX.md`.
6. Identify what is genuinely device/runtime-only.

## QA pipeline

### Q0 Product / Spec
- MVP scope respected
- Product Policy respected
- no silent feature-meaning change
- recommendation/self-build semantics remain compatible
- optional scheduling/body-data rules remain optional where relevant

### Q1 Research / Evidence when applicable
For claims about exercise, health, policy, or other factual product decisions:
- source type matches the claim
- Fact / Inference / Recommendation are separated
- important counter-evidence was not ignored
- uncertainty is visible
- the implementation does not overstate what the evidence supports

### Q2 Functional
- normal workout flow works
- save/edit/delete behavior is correct
- failure can recover
- recommendation/template matching works as specified
- substitution/change actions affect only intended data

### Q3 State / Edge Case
For relevant flows verify:
- Default
- Loading
- Empty
- Error
- Success
- Disabled
- Retry
- duplicate taps/actions
- app interruption/restart
- scheduled / unscheduled variants
- optional body-data missing/present
- unavailable equipment substitution

### Q4 Data / Security
- active workout data is not silently lost
- historical data is not rewritten by routine/exercise edits
- exercise identity and custom-exercise history remain correct
- kg/lb handling does not corrupt stored values
- recommendations do not silently rewrite completed history
- user data isolation is correct once accounts/sync exist
- secrets are not exposed

### Q5 UX / Accessibility
- next action is obvious
- previous performance is easy to see during logging
- workout edits do not require excessive navigation
- beginner guidance does not require unnecessary training jargon
- touch targets, focus/state contrast, readable text, and device-width behavior are acceptable

### Q6 Design QA
For Figma/UI work verify:
- final screen still matches approved IA/storyboard/product meaning
- Mobbin/reference borrowing did not change policy silently
- repeated components are consistent
- relevant loading/empty/error/disabled/success states exist
- scheduled and unscheduled variants are handled when relevant
- implementation would not require developers to invent hidden behavior
- existing design-system primitives are reused where appropriate

### Q7 Regression
Shared state, persistence, routine, exercise, history, unit, recommendation, or shared-component changes require the affected regression packs.

Do not test only static final state for Medium/High risk. Include relevant transitions such as:
- cold start
- resume
- background/foreground
- failure/retry
- process restart
- existing-state/upgrade

### Q8 Runtime / External Systems
When a feature depends on external runtime configuration:
- distinguish repo code from deployed/runtime state
- verify read-back or equivalent evidence when required
- do not call runtime PASS from code inspection alone

### Q9 Release
Minimum release gate:
- P0 blocker 0
- core workout start/log/save/history flow verified
- session recovery verified to required evidence level
- relevant regression packs PASS
- relevant test/build/lint checks PASS
- no debug/fake production data
- privacy/store requirements checked before public release

## Fitness-specific P0/P1 examples

### P0
- active workout/records lost or corrupted
- core workout cannot start/save
- migration damages user history
- severe security/privacy issue
- release-blocking crash in core flow

### P1
- wrong previous performance mapped to exercise
- recovery failure in meaningful scenario
- recommendation silently overwrites user edits
- kg/lb conversion produces materially wrong records
- major UX/policy drift

### P2
- minor visual inconsistency
- small copy issue
- low-impact polish/follow-up

Do not inflate preference differences into P0/P1.

## Verdicts
- `PASS`
- `FIX`
- `DECISION NEEDED`
- `NOT VERIFIED`

## User device QA
Only hand off checks that truly require real-device/human judgment.

Prefer:
- **할 일**
- **정상**
- **이상**

Do not make Product Owner repeat checks already proven objectively by automation/code evidence.

## Completion rule
QA PASS is the normal basis for closing an execution Task. If the evidence level is insufficient for the affected risk, keep the result as `NOT VERIFIED` or `FIX` rather than converting uncertainty into PASS.
