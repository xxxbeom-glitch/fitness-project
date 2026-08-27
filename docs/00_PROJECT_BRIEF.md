# 00 PROJECT BRIEF

**Status:** BOOTSTRAP DRAFT
**Updated:** 2026-08-27

## Product definition — CONFIRMED

Build a **general-purpose weight-training tracker** that supports different levels of guidance instead of assuming one fixed training habit.

The app should help users:
- get a sensible workout program when they do not want to design one themselves
- build and manage their own routine when they already know what they want to do
- start today's or the next workout quickly
- see relevant prior performance immediately
- record sets with minimal interaction
- adapt the session freely when real gym conditions change

A weekday-scheduled routine is an optional convenience, not the product's core identity.

## Initial target — CONFIRMED

Primary early target:

**People who want to start or continue weight training but differ in how much help they want with program design.**

This includes:
- people who are new to the gym and want a ready-to-use routine
- people who have trained before but do not want to design a weekly program themselves
- people who already have their own routine and mainly want a fast, flexible tracker

The product should therefore segment users by **desired level of guidance/control**, not only by beginner vs experienced labels.

Core product principle:

> Help only as much as the user wants.

The app should not become an AI coach-first product. Guidance is useful when it removes decisions, but the user keeps control of the workout.

## Core user problems — CONFIRMED

### Program-start problem
Some users want to train but do not know, or do not want to decide, how to structure a weekly resistance-training program.

The product should reduce this setup burden without requiring users to study programming theory before they can begin.

### Workout-logging problem
During training, logging becomes annoying when users must:
- repeatedly re-enter the same weight/reps
- navigate away to see previous performance
- follow a rigid exercise order
- edit a session through too many screens
- keep touching a phone during rest periods
- trust an app that may lose the active session

## Core value proposition — CONFIRMED

> Start with the amount of guidance you need, then record real weight training with minimal friction while preserving control and historical context.

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

Recommendations should be suggestions or defaults, not silent commands.

### 3. Historical data must compound in value

Records should make future sessions easier and later enable:
- prior-performance comparison
- PRs
- progress trends
- body-composition relationships
- later smart recommendations
- external AI analysis if introduced

### 4. Do not make users study before they can train

The app should not require beginners to understand split terminology, programming theory, or equipment taxonomy during onboarding.

When explanation is useful, show it after the app has already made a practical recommendation and only to the depth needed for the user to understand or modify it.

### 5. AI is optional infrastructure, not the product identity

Do not use LLMs simply because they are available.

Structured product logic should be used when it is more reliable, testable, faster, and cheaper. LLMs may be added later where natural-language understanding or explanation materially improves the experience.

## Primary workout-start paths — CONFIRMED

The main first-run choice should offer two equal paths:

1. **Get a recommended routine**
2. **Build my own routine**

Self-built routines must not be presented as a secondary or advanced-only path.

Additional start paths may later include:
- scheduled routine shortcut
- choose a saved routine
- start an ad-hoc workout

The IA must not assume weekday scheduling is mandatory.

## Recommended-routine onboarding — CONFIRMED DIRECTION

The recommendation path uses structured onboarding rather than open-ended chat.

Inputs:
- goal: fat loss / muscle gain / fitness improvement
- weekly availability: 1 to 7 days
- preferred workout duration: 30 / 45 / 60 / 75+ minutes
- training experience
- training environment: gym / home / both
- preferred workout weekdays: optional
- height and body weight: optional

Body measurements must explain why they are useful and remain skippable. Users can enter or edit them later in Settings.

Specific weekday assignment is optional. Weekly availability can guide recommendation even when the user does not want a fixed Monday/Wednesday/Friday schedule.

## Recommended-program model — CONFIRMED

Recommendation means **program matching**, not LLM-generated programming.

The product should:
1. maintain a small set of curated, QA-reviewed program templates
2. use onboarding inputs to select the most suitable template
3. adjust practical parameters such as duration/volume where needed
4. present **one primary recommended program** rather than forcing the user to compare multiple equally weighted choices
5. allow the user to inspect and modify the recommendation before or after starting

A user selecting 6 or 7 available days does not automatically require a 6- or 7-day resistance-training program. Availability is an input to the matching logic, not a direct command.

## Exercise-selection direction — CONFIRMED

Recommended programs should prioritize movements that are:
- common in ordinary gyms
- relatively easy for a beginner to understand and perform
- easy to log consistently
- replaceable when a specific machine is unavailable

Common machines, cables, dumbbells, Smith-machine movements, bodyweight movements, and other broadly accessible options may all be used where appropriate.

Program data should support exercise substitutions by movement purpose / exercise family rather than assuming every gym has the same machine inventory.

The user-facing UI should keep substitutions simple. Internal exercise relationships may be more detailed than the terminology shown to the user.

## Scheduling direction — CONFIRMED

Weekday scheduling is optional.

With weekdays assigned:
- Home can emphasize **Today's workout**
- reminders and missed-session handling can use the schedule

Without weekdays assigned:
- Home can emphasize **Next workout**
- the routine can continue in sequence without forcing calendar dates

The product must work correctly in both modes.

## Home direction — CONFIRMED DESIGN DIRECTION

Use an **action-first, large-card dashboard** rather than a dense analytics dashboard.

Information priority:
1. what should I do now?
2. how is this week going?
3. am I progressing?

The primary card should be the current action: today's workout when scheduled, or the next workout when unscheduled. Detailed analytics belong in History/Progress rather than dominating Home.

## MVP — CONFIRMED

### Recommended routine matching
- recommendation / self-build first-run choice
- structured recommendation onboarding
- curated program-template matching
- one primary recommended routine result
- ability to inspect and modify the recommended routine
- no LLM required for program generation

### Routine management
- create/edit/delete routines
- add exercises from a basic exercise database
- reorder exercises
- configure set count
- optional weekday assignment

### Exercise substitution
- offer practical alternatives when a recommended exercise/equipment is unavailable
- preserve the intent of the program as reasonably as possible

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
- optional height/body-weight profile data

## MVP boundary — OPTIONAL IF LOW COST

- simple Warm-up / Normal set type
- workout summary: duration, exercise count, set count, PR count
- lightweight explanation such as “why this routine was recommended”

## Explicitly out of MVP — CONFIRMED

These must not block the first release unless a later decision promotes them:

- Apple Watch / Wear OS
- MCP / external AI integration
- InBody integration
- Apple Health / Health Connect
- LLM-generated routines
- AI coaching/chat as a primary interface
- natural-language workout modification
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

> After receiving or building a routine and completing one workout, does the user choose this app again for the next workout instead of returning to the previous method?

## Long-term direction — ASSUMPTION / TO VALIDATE

Potential progression:

`FAST -> ANYWHERE -> YOURS`

- FAST: minimal-input logging
- ANYWHERE: phone to watch
- YOURS: export / API / MCP / user-selected AI

Potential later smart-assistance areas:
- weight/reps recommendations based on training history
- missed-week schedule adjustment
- shorter-session adaptation when time is limited
- equipment substitutions
- return-after-break guidance
- natural-language explanation or modification when it is genuinely easier than structured UI

Potential moat candidate:
- gym-specific equipment data connected to exercises and routines

This is strategically interesting but not required for MVP validation.
