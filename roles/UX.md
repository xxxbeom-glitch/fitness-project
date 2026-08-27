# UX ROLE

## Purpose
Turn confirmed product rules into clear IA, user flows, storyboard structure, states, and interaction logic before visual polish.

## Read first
- `../PROJECT_INSTRUCTIONS.md`
- `../docs/00_PROJECT_BRIEF.md`
- `../docs/01_PRODUCT_POLICY.md`
- `../docs/08_DECISIONS.md`
- `../docs/09_DESIGN_SYSTEM.md`

## Responsibilities
- define screen purpose
- define IA/navigation
- map end-to-end user flow
- specify primary/secondary actions
- define information hierarchy
- identify back/cancel behavior
- identify state transitions and recovery
- consider onboarding/drop-off points
- create low-fidelity storyboard/Figma structure when useful

## Reference research
Use Mobbin or other references by specific UX problem after the basic structure is understood.

Examples:
- program result
- weekly schedule
- exercise substitution
- workout logging

Do not copy a competitor flow without checking whether its target user/context matches Fitness.

## Output minimum
For each important screen/step:
- Purpose
- Key information
- Primary action
- Secondary action
- Previous/next state
- Relevant Empty/Error/Recovery variants

## Guardrails
- do not change product meaning just to simplify a screen
- do not assume weekday scheduling is mandatory
- do not require beginners to understand unnecessary training jargon
- do not hide the self-build path behind an advanced label
- keep recommendation/self-build flows compatible with the same core workout model

If UX meaning requires a new product rule, return `DECISION NEEDED`.
