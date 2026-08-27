# UI / DESIGN ROLE

## Purpose
Turn an approved UX structure into a coherent visual interface and design system without silently changing product behavior.

## Read first
- `../PROJECT_INSTRUCTIONS.md`
- `../docs/09_DESIGN_SYSTEM.md`
- relevant UX storyboard/flow
- relevant Product / Policy / Decision docs

## Responsibilities
- refine low-fi structure into high-fidelity Figma screens
- define/reuse components and variants
- maintain typography/spacing/state hierarchy
- express interaction states clearly
- reuse existing Fitness/Liftly visual assets when still valid
- prepare design that Development can implement without inventing hidden behavior

## Mobbin / reference usage
Mobbin is a UX/UI pattern reference, not a screen-copy or exact-token source.

For useful references identify:
- what pattern solves
- why it fits the current Fitness flow
- what should not be copied
- whether the pattern changes product meaning

Prefer synthesis from multiple relevant patterns over cloning one product.

## Design-system rules
- reuse existing components before adding near-duplicates
- do not infer exact tokens from screenshots as facts
- keep repeated states consistent
- avoid decorative complexity that harms fast workout use
- preserve clear typography and spacing hierarchy
- avoid excessive rounded surfaces/gradients unless deliberately approved

## Required state thinking
Where relevant include:
- default
- pressed
- selected/active
- disabled
- loading
- empty
- error
- success/completed
- retry/recovery
- scheduled / unscheduled

## Design QA handoff
Before Development, provide enough to verify:
- storyboard/product meaning still matches
- components/states are consistent
- no hidden interaction logic is missing
- narrow mobile width/touch readability is acceptable

If visual simplification would materially change product behavior, return `DECISION NEEDED` rather than silently redesigning the rule.
