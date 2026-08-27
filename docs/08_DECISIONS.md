# 08 DECISIONS

## DEC-001 — General-purpose tracker over weekday-only routine app

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
The product is a general-purpose weight-training tracker. Weekday scheduling is an optional convenience path, not the core product definition.

### Why
Users may train from saved routines, decide on the day, perform ad-hoc sessions, or use recommendations. A weekday-only model would overfit one training habit and distort Home/Onboarding/IA decisions.

### Product impact
- Home must support more than one workout-start path.
- Routine data must not require weekday assignment.
- Scheduled routines may be added as shortcuts without becoming mandatory.

---

## DEC-002 — Fast logging before AI coaching

**Date:** 2026-08-27
**Status:** CONFIRMED — TARGET FRAMING REFINED BY DEC-005

### Decision
Fast logging, prior-performance visibility, and flexible workout editing remain core product priorities. The product is not an AI coach-first experience.

### Why
Once a user starts training, repeated interaction friction still matters regardless of whether the routine was recommended by the app or built by the user.

### Product impact
- Inline previous performance is core.
- Minimal set interaction is core.
- AI coaching/chat is not the primary product interface.
- Recommendation features must not weaken user control during real workouts.

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

---

## DEC-005 — Recommendation and self-build are equal primary entry modes

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
The first-run product experience should offer two equal primary paths:

1. get a recommended routine
2. build my own routine

The product should not define its audience only as beginners or only as experienced lifters. The more useful segmentation is how much help the user wants with program design.

### Why
Some users want a ready-to-use program, while others already know what they want to train. Making either path secondary would unnecessarily narrow the product.

### Product impact
- onboarding must branch early between recommendation and self-build
- self-build must not be hidden behind an “advanced” path
- recommended-routine users and self-build users should converge into the same core routine/workout/history system
- product principle: help only as much as the user wants

---

## DEC-006 — Recommended routines use curated program matching, not LLM generation

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Recommended routines will be selected from a small set of curated, QA-reviewed program templates using structured onboarding inputs.

The app should present **one primary recommended routine** by default instead of generating multiple competing options or asking an LLM to invent a new program for each user.

### Recommendation inputs
- goal: fat loss / muscle gain / fitness improvement
- weekly availability: 1 to 7 days
- preferred workout duration: 30 / 45 / 60 / 75+ minutes
- training experience
- training environment: gym / home / both
- preferred workout weekdays: optional
- height and body weight: optional

### Why
A curated matching system is:
- predictable
- testable
- easier to QA as a real training program
- faster and cheaper to run
- less likely to produce inconsistent or inappropriate exercise combinations

Structured data already covers the first recommendation problem. An LLM is not required for MVP.

### Product impact
- build a reusable program-template library rather than a free-form generation prompt
- onboarding inputs select and parameterize a suitable template
- workout duration may adjust practical volume/exercise count without requiring a separate program for every possible combination
- a user's available training days are an input, not a command to prescribe resistance training on every available day
- LLM/natural-language functionality may be considered later for explanation or complex exception handling where it materially improves UX

---

## DEC-007 — Weekday assignment is optional

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Weekly training frequency may guide program matching, but users are not required to assign routines to specific weekdays.

### Why
Fixed weekdays reduce decision-making and enable reminders for predictable schedules, but they become friction for users with changing work or personal schedules.

### Product impact
With weekdays assigned:
- Home may show **Today's workout**
- reminders and missed-session handling may use the schedule

Without weekdays assigned:
- Home may show **Next workout**
- the program continues in sequence

Both modes must be first-class and use the same underlying routine/workout system.

---

## DEC-008 — Recommended exercises prioritize accessibility and simple substitution

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Recommended programs should favor common, understandable, broadly accessible resistance-training movements rather than unnecessarily technical exercise selections.

When the recommended equipment is unavailable, the app should offer a small set of practical substitutes that preserve the training purpose as reasonably as possible.

### Why
A beginner should not need detailed equipment knowledge or programming theory just to begin training. At the same time, no fixed exercise database can assume that every gym has the same machines.

### Product impact
- common machines, cables, dumbbells, Smith-machine exercises, bodyweight movements, and other accessible options may all be used where appropriate
- substitution relationships should be modeled internally by exercise family / movement purpose rather than “same body part = same exercise”
- the UI should expose simple replacement choices without requiring the user to understand internal exercise taxonomy
- onboarding should not quiz beginners on split terminology or every machine in their gym
- if a user dislikes or cannot use an exercise, replacement/removal should be possible without requiring the app to diagnose why
- medical diagnosis and condition-specific exercise safety judgments remain outside product scope
