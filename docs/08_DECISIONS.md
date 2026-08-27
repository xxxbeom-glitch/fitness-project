# 08 DECISIONS

## DEC-001 — General-purpose tracker over weekday-only routine app

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
The product is a general-purpose weight-training tracker. Weekday scheduling is an optional convenience path, not the core product definition.

### Why
Users may train from saved routines, decide on the day, perform ad-hoc sessions, or later use recommendations. A weekday-only model would overfit one training habit and distort Home/Onboarding/IA decisions.

### Product impact
- Home must support more than one workout-start path.
- Routine data must not require weekday assignment.
- Scheduled routines may be added as shortcuts without becoming mandatory.

---

## DEC-002 — Fast logging before AI coaching

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
The first product is primarily a fast logging tool for people who already train, not an AI coach that decides workouts for them.

### Why
The repeated pain is interaction friction during real workouts: previous performance lookup, repetitive entry, rigid ordering, and session edits.

### Product impact
- Inline previous performance is core.
- Minimal set interaction is core.
- AI routine generation/coaching is out of MVP.

---

## DEC-003 — Custom exercises are MVP-critical

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Users must be able to create custom exercises in MVP.

### Why
Real gyms differ materially in machine brands, models, and available movements. A fixed global exercise database would force users into inaccurate substitutions.

### Product impact
Custom exercises require independent historical records and should behave like first-class exercises.

---

## DEC-004 — Session reliability is a release-critical quality requirement

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
An active workout must be recoverable after app interruption/restart. Record loss is considered a trust-breaking defect.

### Product impact
Persistence/session-recovery architecture must be considered before implementation, not bolted on later.
