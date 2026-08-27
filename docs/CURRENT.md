# CURRENT — Fitness Project

**Updated:** 2026-08-27

## Current mode

`BOOTSTRAP MODE`

The repository operating structure is initialized. Product discovery is being converted into explicit product decisions before implementation begins.

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
- decision log updated through `DEC-008`
- optional body-data and medical-boundary policies documented

Project OS v0.1 is **not frozen yet**. The operating model is now materially stronger, but several product/implementation decisions remain open.

## Next bootstrap decisions

1. define the curated recommended-program template matrix and matching rules
2. define core workout execution UX in detail
3. account/privacy/data architecture
4. monetization stance for the first release
5. platform and technical stack
6. finalize minimum design tokens/components after core IA is stable
7. cross-document QA before Project OS v0.1 freeze

## Canonical source

`GitHub Repository`

Notion IDEA LAB, old Figma, and Liftly remain useful as discovery/research/reuse provenance. Once a product decision is confirmed for execution, GitHub is the maintained source of truth.

## Current blocker

No repository-structure blocker.

Implementation should not begin as if the product were fully specified until the remaining Bootstrap decisions are resolved or explicitly marked as assumptions/TBD.

## Next action

Define a small, evidence-based set of curated program templates and the matching matrix for:

`goal × weekly availability × workout duration × experience × training environment`

Do not create a separate routine for every possible combination. Prefer reusable base templates with controlled adjustments for duration, volume, and equipment availability.

After the template model is stable, move to the detailed workout-execution UX. That UX should follow the newly defined design pipeline: IA/storyboard first, low-fi Figma second, reference research third, visual refinement after.

## Operating rule

This file contains only the current state, blockers, and next action. Historical decisions belong in `08_DECISIONS.md`; implementation history belongs in Issues/Commits/Tests.
