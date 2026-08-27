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
**Status:** CONFIRMED — INPUT DETAILS REFINED BY DEC-009

### Decision
Recommended routines will be selected from a curated, QA-reviewed program-template system using structured onboarding inputs.

The app should present **one primary recommended routine** by default instead of generating multiple competing options or asking an LLM to invent a new program for each user.

### Original recommendation inputs
The initial input list discussed on 2026-08-27 included goal, weekly availability, workout duration, experience, environment, optional weekdays, and optional height/body weight. The initial MVP input set is superseded by DEC-009.

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
- onboarding inputs select a suitable template
- a user's selected weekly frequency/availability is an input, not a command to prescribe an unnecessarily high number of hard resistance-training sessions
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

---

## DEC-009 — Initial recommendation onboarding is three inputs and gym-first

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
The initial recommended-routine onboarding should use only three required matching inputs:

1. goal
2. weekly training availability
3. preferred workout duration

The goal question uses simple user-facing language.

Approved user-facing wording:

> **운동 목표가 무엇인가요?**

Approved choices:

- **체지방 감량**
- **근육량 증가**
- **체력 향상**

The weekly-availability question should be framed as **realistic availability rather than aspiration** and expressed in days.

Approved user-facing wording:

> **일주일에 며칠 운동할 수 있나요?**

Approved choices:

- **1일**
- **2일**
- **3일**
- **4일**
- **5일**
- **6일**
- **7일**

The selected number represents how many days the user can realistically make available for training. It does **not** require the matcher to prescribe resistance training on every selected available day.

The preferred workout-duration choices for the initial recommendation flow are:

- **30분**
- **45분**
- **60분**

The initial recommendation scope does not ask users to plan sessions longer than 60 minutes. `75분+` is removed from the initial onboarding.

The initial recommendation experience is gym-first. A separate home-workout recommendation branch is not part of the initial scope.

Training experience, detailed weekday assignment, height/body weight, and equipment inventory are not required to receive the first recommended routine.

Weekday assignment may be offered later as an optional scheduling step. Height/body weight may be collected later as optional profile data when there is a clear product purpose.

The curated template library does not need to be artificially small. It may contain multiple overlapping or similar variants to provide adequate coverage and predictable matching. Exact template count and exercise composition are deferred until the exercise database and substitution data are ready for review.

### Why
The recommendation flow should remove decisions, not replace them with a long questionnaire.

Adding home/gym branching, experience bands, body data, weekday details, and equipment inventory at first entry creates additional combinations and design/QA scope before their incremental recommendation value is proven.

A gym-first scope also aligns with the immediate product context: common gym exercises, machines, substitutions, and fast workout logging are already core design concerns.

Framing weekly availability as days makes the question concrete and closer to the actual scheduling constraint the matcher needs. It also avoids interpreting a user's available days as a requirement to prescribe the same number of hard training sessions.

Capping the initial duration choices at 60 minutes keeps the recommendation space tighter and better aligned with the product's goal of practical, repeatable sessions rather than long-form program design.

### Product impact
- recommendation onboarding IA becomes shorter and easier to storyboard
- no home/gym/both question in the initial recommendation flow
- no home-specific template matrix is required for first release
- recommendation templates are finalized after exercise DB review rather than before it
- goal copy is fixed as `운동 목표가 무엇인가요?`
- goal choices are fixed as `체지방 감량 / 근육량 증가 / 체력 향상`
- weekly availability copy is fixed as `일주일에 며칠 운동할 수 있나요?`
- weekly availability choices are fixed as `1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`
- workout-duration choices are fixed as `30분 / 45분 / 60분`
- self-built routines and the exercise database may still include bodyweight or other exercises; this Decision limits the recommendation branch, not the entire tracker
