# CURRENT — Fitness Project

**Updated:** 2026-08-27

## Current mode

`BOOTSTRAP MODE`

The repository operating structure is initialized. Product discovery is now being converted into explicit product decisions before implementation begins.

## Current product state

Confirmed:
- general-purpose weight-training tracker
- primary first-run split: **recommended routine / build my own routine**
- users are segmented more by desired guidance/control than by beginner vs experienced labels alone
- recommendation uses **curated program-template matching**, not LLM-generated routines
- recommendation onboarding is structured UI, not open-ended chat
- one primary recommended routine is shown by default
- recommendation inputs include goal, weekly availability, workout duration, experience, training environment, optional weekdays, and optional height/body weight
- weekday scheduling is optional
- scheduled users can see **Today's workout**; unscheduled users can see **Next workout**
- Home direction is action-first with large cards rather than a dense analytics dashboard
- recommended exercises should prioritize common, understandable, accessible movements
- unavailable equipment should be handled with simple exercise substitutions
- beginner onboarding should not require split-training theory or detailed equipment knowledge
- medical diagnosis and condition-specific exercise safety judgments are outside product scope
- height/body weight onboarding data is optional and skippable
- fast logging and prior-performance visibility remain core after the routine is selected
- flexible session editing remains core
- custom exercises are MVP-critical
- active-session recovery is release-critical
- Watch / MCP / InBody / Health integrations / social / primary AI coaching remain post-MVP unless promoted by a later decision

## Project OS bootstrap status

Completed:
- repository operating structure
- `README.md`
- `PROJECT_INSTRUCTIONS.md`
- `PROJECT_BOOTSTRAP.md`
- `PROJECT_FOLDER_SETUP.md`
- `docs/00` through `docs/10`
- `roles/PRODUCT_PM.md`
- `roles/RESEARCH.md`
- `roles/DESIGN.md`
- `roles/DEVELOPMENT.md`
- `roles/QA.md`
- `templates/TASK.md`
- `templates/HANDOFF.md`
- `templates/DECISION.md`
- `templates/QA_REPORT.md`
- product brief updated for recommendation/self-build model
- decision log updated through `DEC-008`
- optional body-data and medical-boundary policies documented

Project OS v0.1 is **not frozen yet**. The structure is complete, but several product and implementation decisions remain intentionally open.

## Next bootstrap decisions

1. define the curated recommended-program template matrix and matching rules
2. define core workout execution UX in detail
3. finalize the ChatGPT Project fixed instructions for this fitness project
4. account/privacy/data architecture
5. monetization stance for the first release
6. platform and technical stack
7. minimum design-system rules and migration/reuse strategy for existing Figma/Liftly assets
8. cross-document QA before Project OS v0.1 freeze

## Canonical source

`GitHub Repository`

Notion IDEA LAB remains useful as discovery/research provenance. Once a product decision is confirmed for execution, the maintained source of truth is GitHub.

## Current blocker

No repository-structure blocker.

Implementation should not begin as if the product were fully specified until the remaining Bootstrap decisions are resolved or explicitly marked as assumptions/TBD.

## Next action

Define a small, evidence-based set of curated program templates and the matching matrix for:

`goal × weekly availability × workout duration × experience × training environment`

Do not create a separate routine for every possible combination. Prefer reusable base templates with controlled adjustments for duration, volume, and equipment availability.

After the template model is stable, move to the detailed workout-execution flow.

## Operating rule

This file contains only the current state, blockers, and next action. Historical decisions belong in `08_DECISIONS.md`; implementation history belongs in Issues/Commits/Tests.
