# 09 DESIGN SYSTEM

**Status:** BOOTSTRAP — PIPELINE DEFINED, TOKENS NOT FROZEN

## Product-driven design goal

The interface must feel fast and quiet during training. Visual polish is secondary to legibility, touch efficiency, state clarity, and low interaction cost.

The Product Owner should not need to manually draw every screen from scratch. The default design workflow is AI-assisted: structure first, reference research second, visual refinement third, human approval throughout.

## Design Source-of-Truth rule

Figma is the visual implementation/reference surface, not the product-policy Source of Truth.

- GitHub Decision / Product / Policy docs define **what the product means and how it should behave**.
- Figma defines **how the approved behavior is visually expressed**.
- If Figma and the current GitHub Decision conflict, GitHub wins and Figma must be corrected.

## Default Design Pipeline

`Product Decision -> UX IA/Storyboard -> Figma low-fi visualization -> Mobbin/reference research -> UI pattern synthesis -> Figma refinement -> Design QA -> Development`

### Stage 1 — Product meaning
Before drawing screens, confirm:
- user goal
- product rule
- required input/output
- major exceptions
- what is confirmed vs TBD

### Stage 2 — UX IA / Storyboard
The UX Agent defines:
- screen purpose
- IA / navigation
- user flow
- primary action
- secondary action
- information hierarchy
- back/cancel behavior
- state transitions
- empty/error/recovery cases where relevant

### Stage 3 — Figma low-fi
The first Figma pass is for structure validation, not visual polish.

Use simple frames, real or near-real copy, and basic blocks to confirm:
- sequence
- hierarchy
- screen count
- state changes
- whether the user knows the next action

Do not spend time perfecting components before the flow is stable.

### Stage 4 — Reference research
Search Mobbin and other references by the specific UX problem, not broad visual keywords.

Examples:
- program recommendation result
- weekly training schedule
- workout start card
- exercise substitution
- active workout set logging
- history/progress view

For each relevant reference identify:
- what problem the pattern solves
- what is useful for Fitness
- what should not be copied
- whether it changes product meaning

### Stage 5 — UI pattern synthesis
Do not copy one competitor wholesale.

The UI / Design Agent may combine validated patterns from multiple products, for example:
- one product's schedule hierarchy
- another product's large-card Home treatment
- another product's workout logging interaction

The result must be re-expressed using the Fitness design language and confirmed product rules.

### Stage 6 — Figma refinement
Refine the approved low-fi structure into high-fidelity screens using:
- reusable components
- consistent tokens
- real interaction states
- current design system
- existing Fitness/Liftly assets where still valid

### Stage 7 — Design QA
Before development check:
- final Figma still matches the approved storyboard/product meaning
- scheduled and unscheduled states are handled where relevant
- loading / empty / error / disabled / success states are not accidentally omitted
- repeated components are actually consistent
- touch targets and readability are acceptable
- the design is implementable without inventing hidden behavior
- reference borrowing has not turned into product-policy drift

## Mobbin / reference rules

Mobbin is a **UX pattern library**, not a token source and not a screen-copy source.

Do not claim exact spacing, font size, radius, animation timing, or component internals from screenshots unless independently known.

A reference may influence:
- information hierarchy
- card grouping
- navigation pattern
- screen sequence
- interaction model
- state presentation

It does not automatically define our:
- spacing scale
- typography tokens
- colors
- radius
- component API

## Existing-asset reuse

Before creating new visual primitives, inspect the existing Fitness Figma and Liftly assets.

Reuse when:
- the component still matches the current product meaning
- interaction behavior remains valid
- visual quality is acceptable
- reuse reduces work without creating inconsistency

Replace or modify when current product/UX decisions require it.

Do not preserve an old screen merely because it already exists.

## CONFIRMED UX principles

- Previous performance should be visible where the user enters the next set.
- Avoid forcing navigation away from the active workout for routine edits or prior-record checks.
- Exercise order must remain flexible.
- Important workout actions need clear feedback after taps.
- The active workout screen should prioritize current set, previous performance, completion state, and rest timing.
- Recommendation/self-build users should converge into the same core routine/workout/history system.
- Weekday scheduling is optional; design must not assume every user has a fixed weekday plan.
- Home direction is action-first and favors a small number of large, readable cards over a dense analytics dashboard.

## Visual direction — ASSUMPTION

- clean, restrained mobile UI
- strong typography hierarchy
- consistent spacing
- limited decorative surfaces
- avoid excessive rounded cards and ornamental gradients
- default to familiar mobile controls where custom interaction does not add real value

## Required states

Components and flows should consider, where relevant:
- default
- pressed
- active/selected
- disabled
- loading
- empty
- error
- success/completed
- retry/recovery
- editable/completed-set correction
- scheduled / unscheduled variants

## TBD

- final typography tokens
- color system
- spacing scale
- radius scale
- icon system
- dark mode policy
- final bottom navigation / primary IA
- active-workout information hierarchy
- finalized onboarding screen set

## Design gate

Do not freeze detailed component styling before the corresponding IA and core flow are stable.

Do not require a high-fidelity Figma screen to discuss or validate early product logic. Use the cheapest artifact that can answer the current question.
