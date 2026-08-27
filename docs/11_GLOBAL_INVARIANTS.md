# 11 GLOBAL INVARIANTS

## Purpose
Define cross-feature behavior contracts that must remain true even when individual screens or implementations change.

These invariants reduce AI-assisted regression risk. They do not create new product policy; if an invariant conflicts with a newer Decision or Product Policy, the newer canonical decision wins and this file must be updated.

## Core workout/data invariants

### INV-001 — Active workout data is not silently lost
Logged sets and the active session must survive expected interruption/restart according to the confirmed persistence strategy.

A UI polish or navigation change must not weaken session recovery.

### INV-002 — Historical records are historical facts
Editing a routine, exercise definition, display name, or recommendation later must not rewrite completed workout records.

### INV-003 — Exercise identity remains stable
Previous-performance history must resolve to the correct exercise identity.

Custom exercises must retain independent history even if their name or display metadata changes.

### INV-004 — Unit conversion does not corrupt source values
kg/lb presentation may change, but conversion must not progressively mutate or distort stored workout values.

### INV-005 — User-entered set data is not silently reinterpreted
Weight, reps, set completion, notes, and exercise order must not change meaning because of a UI or recommendation feature.

### INV-006 — Recommendations are proposals, not silent mutations
Recommended routines, substitutions, weight/reps suggestions, schedule adjustments, or future AI features must not silently rewrite the user's saved plan or completed history without an explicit approved behavior.

### INV-007 — Routine editing does not damage unrelated workout data
Add/remove/reorder operations must not delete or remap unrelated exercises, sets, or history.

### INV-008 — Scheduled and unscheduled use are both valid
Weekday assignment is optional.

A feature must not assume every user has a fixed weekday schedule unless the relevant flow is explicitly schedule-specific.

### INV-009 — Recommendation and self-build converge on the same core workout semantics
A routine that came from curated recommendation and a routine built manually must use compatible workout logging, history, editing, and recovery behavior.

### INV-010 — Equipment substitution does not pretend every same-muscle exercise is equivalent
Substitution logic should preserve exercise purpose as reasonably as possible using exercise family/movement intent/equipment context.

The UI can remain simple, but internal logic must not use only “same body part” as the equivalence rule.

## Product-safety invariants

### INV-011 — The product does not diagnose medical conditions
The app does not diagnose injury/disease or declare an exercise medically safe/unsafe for a diagnosed condition.

### INV-012 — Optional body data stays optional unless a new Decision changes it
Height/body weight onboarding can be skipped and entered/edited later.

### INV-013 — No silent behavior change
A code change must not introduce a new automatic user-visible behavior such as silent save, silent plan mutation, silent retry, or hidden data mutation without an approved product rule.

## Engineering/runtime invariants

### INV-014 — PASS requires the right evidence level
A unit test PASS is not equivalent to Runtime/Device PASS when the behavior depends on lifecycle, persistence, OS integration, external runtime, or real hardware.

### INV-015 — Repo state and external runtime state are separate
When the product later depends on backend migrations, store configuration, billing catalog, Health Connect/Apple Health permissions, push configuration, or other external runtime state:

`repo updated != runtime deployed`

Relevant runtime must be read back or otherwise verified before final PASS.

### INV-016 — Existing-state users matter
Risky persistence/data changes must consider existing installs, existing routines/history, active sessions, cached preferences, and upgrade paths when applicable. Fresh-install testing alone is insufficient.

## Design invariants

### INV-017 — Figma cannot silently redefine product policy
Figma expresses confirmed behavior. If a visual design implies behavior that conflicts with the current Decision/Product Policy, the design is wrong until the policy is explicitly changed.

### INV-018 — Shared components must preserve shared behavior
A design-system or shared-component change must be checked on all major consumer surfaces it can affect.

### INV-019 — Core workout actions remain obvious and usable
Visual refinement must not hide the next workout action, previous performance, set completion state, or critical recovery/error behavior.

## Change rule

Add or modify an invariant only when:
- it represents an already approved cross-feature behavior contract, or
- the Product Owner explicitly approves a new product rule.

Do not turn implementation preferences into global invariants.
