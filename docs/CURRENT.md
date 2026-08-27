# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE`

The repository operating structure is initialized. Product discovery is being converted into explicit product decisions before implementation begins.

## Current product state

Confirmed:
- general-purpose weight-training tracker
- primary first-run split: **recommended routine / build my own routine**
- users are segmented more by desired guidance/control than by beginner vs experienced labels alone
- recommendation uses **curated program-template matching**, not LLM-generated routines
- one primary recommended routine is shown by default
- initial recommendation onboarding is intentionally short: **goal + weekly training frequency/availability + workout duration**
- initial recommended-routine experience is **gym-first**; no separate home-workout recommendation branch in the first scope
- training experience, equipment inventory, weekday assignment, and height/body weight are not required to receive the first recommendation
- weekday scheduling remains optional and may be offered after recommendation
- scheduled users can see **Today's workout**; unscheduled users can see **Next workout**
- exact curated template count/composition is deferred until the exercise database and substitution data are reviewed
- the template library may later contain multiple overlapping/similar variants; it does not need to be artificially small
- Home direction is action-first with large cards rather than a dense analytics dashboard
- recommended exercises should prioritize common, understandable, accessible gym movements
- unavailable equipment should be handled with simple exercise substitutions
- beginner onboarding should not require split-training theory or detailed equipment knowledge
- medical diagnosis and condition-specific exercise safety judgments are outside product scope
- height/body weight can remain optional profile data later
- fast logging and prior-performance visibility remain core after the routine is selected
- flexible session editing remains core
- custom exercises are MVP-critical
- active-session recovery is release-critical
- Watch / MCP / InBody / Health integrations / social / primary AI coaching remain post-MVP unless promoted by a later decision

## Project OS bootstrap status

Completed:
- repository operating structure
- top-level `PROJECT_INSTRUCTIONS.md` upgraded from OnTalk lessons for Fitness
- 8-role agent model defined: Product / Research-Evidence / UX / UI-Design / Dev / QA / Growth / Ops
- Growth/Ops defined but intentionally dormant until useful
- Evidence Gate defined for exercise/health/product claims
- Decision Challenge Gate defined: strongest support / strongest objection / different framing
- Regression & Impact Gate defined from OnTalk regression lessons
- Fitness-specific Global Invariants added
- Fitness-specific Regression Matrix added
- engineering evidence split into Logic / Integration / Runtime(Device)
- AI-assisted design pipeline defined:
  `Product Decision -> UX IA/Storyboard -> Figma low-fi -> Mobbin/reference research -> UI synthesis -> Figma refinement -> Design QA -> Development`
- Figma explicitly treated as visual artifact, not product-policy Source of Truth
- Mobbin explicitly treated as pattern reference, not exact-token/screen-copy source
- exercise/health research evidence hierarchy and counter-evidence rules defined
- existing Fitness/Liftly design/code/data assets remain reuse candidates, not immutable product truth
- product brief updated for recommendation/self-build model
- decision log updated through `DEC-009`
- optional body-data and medical-boundary policies documented

Project OS v0.1 is **not frozen yet**. The operating model is now materially stronger, but several product/implementation decisions remain open.

## Deferred by explicit product decision

- exact recommended-program template count
- exact template exercise composition
- detailed variant matrix

These should be decided after the exercise database and substitution relationships are available for review.

## Next bootstrap decisions

1. define the recommendation onboarding UX/IA around the three required inputs
2. define the recommendation result flow and optional post-recommend scheduling step
3. define core workout execution UX in detail
4. account/privacy/data architecture
5. monetization stance for the first release
6. platform and technical stack
7. finalize minimum design tokens/components after core IA is stable
8. cross-document QA before Project OS v0.1 freeze

## Canonical source

`GitHub Repository`

Notion IDEA LAB, old Figma, and Liftly remain useful as discovery/research/reuse provenance. Once a product decision is confirmed for execution, GitHub is the maintained source of truth.

## Current blocker

No repository-structure blocker.

Implementation should not begin as if the product were fully specified until the remaining Bootstrap decisions are resolved or explicitly marked as assumptions/TBD.

## Next action

Define the recommendation onboarding IA using only:

`goal -> weekly training frequency/availability -> workout duration -> recommended routine`

Then decide where the optional weekday scheduling step belongs and what the recommendation-result screen must communicate before moving into Figma low-fi/storyboard work.

Do not design the final template matrix yet. That work is intentionally deferred until the exercise database is ready.

## Operating rule

This file contains only the current state, blockers, and next action. Historical decisions belong in `08_DECISIONS.md`; implementation history belongs in Issues/Commits/Tests.
