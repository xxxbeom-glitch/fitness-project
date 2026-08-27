# 00 PROJECT BRIEF

**Status:** BOOTSTRAP DRAFT
**Updated:** 2026-08-27

## Product definition — CONFIRMED

Build a **general-purpose weight-training tracker** that does not assume one fixed training habit.

The app should help users start today's workout quickly, see relevant prior performance immediately, record sets with minimal interaction, and adapt the session freely when real gym conditions change.

A weekday-scheduled routine is one optional start path, not the product's core identity.

## Initial target — CONFIRMED

Primary early target:

**People who already perform resistance training and have at least a rough routine of their own.**

Why this target is currently favored:
- they already understand exercises and equipment
- they have repeated historical data to compare
- logging friction is a recurring problem
- they benefit strongly from previous-set visibility and flexible session edits

Beginner support can be added, but the initial product should not become an AI coach-first product.

## Core user problem — CONFIRMED

During training, existing logging can become annoying when users must:
- repeatedly re-enter the same weight/reps
- navigate away to see previous performance
- follow a rigid exercise order
- edit a session through too many screens
- keep touching a phone during rest periods
- trust an app that may lose the active session

## Core value proposition — CONFIRMED

> Record real weight training with the least possible friction while preserving user control and historical context.

## Product principles — CONFIRMED

### 1. Do not interrupt training

Target flow:

`Start workout -> see prior performance -> confirm/edit kg/reps -> complete set -> rest timer -> next set`

If the suggested values are already correct, a set should require as little interaction as practical.

### 2. User controls the workout

The app must not force exercise order or prevent real-time changes.

Users should be able to:
- reorder exercises
- add/remove exercises during a session
- add/remove sets
- correct completed sets
- create custom exercises

Recommendations, when introduced later, should be suggestions rather than commands.

### 3. Historical data must compound in value

Records should make future sessions easier and later enable:
- prior-performance comparison
- PRs
- progress trends
- body-composition relationships
- external AI analysis

## Workout start paths — CONFIRMED PRODUCT DIRECTION

The product should eventually support multiple entry paths:
- scheduled routine shortcut
- choose a saved routine
- start an ad-hoc workout
- beginner/recommended routine

Not every path must ship in the first implementation, but the IA must not assume weekday scheduling is the only model.

## MVP — CONFIRMED

### Routine management
- create/edit/delete routines
- add exercises from a basic exercise database
- reorder exercises
- configure set count

### Custom exercises
MVP-critical because gym machines vary.

Minimum fields:
- exercise name
- target body area
- type: machine / barbell / dumbbell / cable / bodyweight / other
- edit/delete
- independent prior-performance history

### Active workout
- start a routine/workout
- enter weight and reps
- show previous performance inline
- complete/uncomplete a set
- add/remove sets
- edit completed data
- add/remove exercises
- reorder exercises
- automatic rest timer
- recover an active session after app interruption/restart

### History
- finish/save workout
- date-based workout history
- previous performance by exercise
- simple PR indication
- exercise notes

### Basic settings
- kg/lb

## MVP boundary — OPTIONAL IF LOW COST

- simple Warm-up / Normal set type
- workout summary: duration, exercise count, set count, PR count

## Explicitly out of MVP — CONFIRMED

These must not block the first release unless a later decision promotes them:

- Apple Watch / Wear OS
- MCP / external AI integration
- InBody integration
- Apple Health / Health Connect
- AI routine generation
- AI coaching
- video-form analysis
- advanced analytics
- automatic progressive overload
- social feed
- comments / DM
- workout groups
- nutrition
- challenges / ranking
- trainer/PT features
- paid subscription

## MVP validation question — CONFIRMED

> After using it for one workout, does the user choose this app again for the next workout instead of returning to the previous logging method?

## Long-term direction — ASSUMPTION / TO VALIDATE

Potential progression:

`FAST -> ANYWHERE -> YOURS`

- FAST: minimal-input logging
- ANYWHERE: phone to watch
- YOURS: export / API / MCP / user-selected AI

Potential moat candidate:
- gym-specific equipment data connected to exercises and routines

This is strategically interesting but not required for MVP validation.
