# 09 DESIGN SYSTEM

**Status:** BOOTSTRAP — DIRECTION ONLY

## Product-driven design goal

The interface must feel fast and quiet during training. Visual polish is secondary to legibility, touch efficiency, state clarity, and low interaction cost.

## CONFIRMED UX principles

- Previous performance should be visible where the user enters the next set.
- Avoid forcing navigation away from the active workout for routine edits or prior-record checks.
- Exercise order must remain flexible.
- Important workout actions need clear feedback after taps.
- The active workout screen should prioritize current set, previous performance, completion state, and rest timing.

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
- editable/completed-set correction

## TBD

- final typography tokens
- color system
- spacing scale
- radius scale
- icon system
- dark mode policy
- bottom navigation / primary IA
- active-workout information hierarchy
- onboarding structure

## Design gate

Do not freeze detailed component styling before the MVP IA and core workout flows are confirmed.
