# 16 FIGMA TONAL BUILD INSTRUCTIONS

**Status:** ACTIVE — PHASE-A RECONSTRUCTION
**Updated:** 2026-08-28

## Objective

Build the first Fitness Figma design system by reconstructing Tonal's visible design language from the GitHub specification and Mobbin reference evidence, before product-specific visual customization.

The Figma build should consume:
1. `docs/09_DESIGN_SYSTEM.md`
2. `docs/14_TONAL_RECONSTRUCTION_BASELINE.md`
3. `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
4. relevant Fitness Product/Policy/Screen Decision docs when building actual Fitness screens

## Important tool limitation / workflow rule

Do **not** assume Figma itself will reliably crawl and interpret arbitrary GitHub Markdown files or Markdown-embedded competitor screenshots automatically.

For ChatGPT-driven Figma work, ChatGPT acts as the bridge:
- read GitHub specifications
- inspect Mobbin screenshot evidence
- translate the evidence into Figma variables, styles, components, and screen composition

Figma Code Connect is for mapping design components to code; it is not the primary mechanism for ingesting arbitrary Markdown design specifications.

Therefore the build must not depend on 'GitHub is connected, so Figma will infer everything by itself.' The specification must be explicit enough to execute deterministically.

## Competitor screenshot storage policy

The canonical GitHub repository is currently public.

Do **not** commit full Tonal/Mobbin competitor screenshots into the public repository as permanent assets.

Reasons:
- copyright/licensing risk
- unnecessary duplication of third-party reference assets
- repository bloat
- stale screenshots become misleading evidence

Instead:
- store canonical Mobbin screen URLs and screen IDs in the evidence document
- keep detailed text observations/inferences in GitHub
- if image-level comparison is needed during Figma work, inspect the Mobbin source directly or place temporary reference screenshots on a non-published/private Figma reference page where permitted

## Figma page structure

Create or maintain the following pages/sections:

### `00_REFERENCE_TONAL`
Purpose:
- temporary visual comparison surface only
- representative reference screenshots or reference links/labels
- not a source of product behavior
- never publish competitor imagery as Fitness brand assets

### `01_FOUNDATIONS`
Include:
- Color roles
- Typography scale
- Spacing scale
- Radius scale
- Divider/border styles
- Icon-slot sizes
- Touch-target examples
- Grid/margin examples

### `02_COMPONENTS`
Build reusable components and variant sets from `15_TONAL_DESIGN_SYSTEM_SPEC.md`.

Minimum set:
- Button/Primary/Black
- Button/Secondary/Light
- Button/Text
- ChoiceCard/Single
- ChoiceCard/Multi
- Input/Underline
- Navigation/TopBar
- Navigation/BottomBar
- Tab/Underline
- Row/Settings
- Row/Movement
- Metric/Stat
- Workout/BlockHeader
- Control/Stepper
- Control/Toggle
- Media/Hero
- Sheet/Bottom
- Placeholder/IconSlot

### `03_PATTERNS`
Create composed reusable patterns:
- onboarding question + choice stack + CTA
- large numeric selector
- dashboard metric module
- history/stat section
- program/workout hero + body
- workout movement list/block
- settings list section
- bottom-sheet content layout

### `10_FITNESS_SCREENS`
Only after the reconstruction baseline is coherent:
- apply the reconstructed system to approved Fitness screens
- Fitness policy and `docs/13_SCREEN_DESIGN_DECISIONS.md` override Tonal behavior

## Variables and styles

Create Figma variables for:
- semantic colors
- spacing scale
- radii
- numeric sizes where practical

Create text styles for the reconstructed typography roles.

Use semantic role names rather than `Tonal/Black1`, `Tonal/Gray2`, etc.

Examples:
- `Color/Ink/Primary`
- `Color/Surface/Canvas`
- `Space/24`
- `Radius/Small`
- `Type/Heading/Screen`
- `Type/Metric/XL`

This preserves the replicated visual relationships while allowing later Fitness customization without renaming the entire system.

## Auto Layout rules

- reusable components must use Auto Layout where applicable
- page-width components use fill-container behavior
- do not hard-code 390-width internals except for explicit reference-frame demonstrations
- standard outer page margin: use the current reconstructed token, initially 24
- internal layout must preserve consistent left/right alignment lines
- use min-height when content can wrap
- Korean copy must not break component geometry

## Icon placeholder rule

The Product Owner will provide/finalize iconography later.

Until then:
- create `Placeholder/IconSlot`
- use only a square slot or neutral placeholder marker
- default sizes: 16 / 20 / 24 / 28
- maintain a 44x44 interaction frame for tap targets where needed
- do not choose arbitrary icons merely to make the screen look finished
- do not copy Tonal proprietary icon artwork

## Image/media placeholder rule

Final Fitness workout/brand media will be added later.

Until then:
- hero blocks use a replaceable `MEDIA_PLACEHOLDER`
- preserve overlay, title, metadata, crop region, and safe text zones
- layout must remain functional if the image is replaced with video later

## Reconstruction-first rule

During Phase A, when a component or pattern clearly exists in Tonal screenshot evidence:
- reconstruct that visible pattern first
- do not redesign it for originality
- do not add decorative Fitness styling yet

Fitness customization begins only after the baseline component system is visually coherent.

## Evidence labels

When adding annotations inside the design-system page, use:
- `OBSERVED`
- `INFERRED`
- `ESTIMATED`

Do not label an estimated value as an official Tonal token.

## Visual QA process

For each major component/pattern:
1. identify 2+ Tonal screenshot examples where possible
2. compare proportion, alignment, whitespace, hierarchy, color role, and density
3. adjust provisional token values
4. test the same component in at least two different compositions
5. only then promote the value into the working baseline

For overall Phase-A QA, recreate representative screens from five families:
- onboarding
- dashboard/home
- program/workout
- exercise/detail
- settings/profile

A token is considered stable only if it works across families rather than matching one screenshot.

## What Figma may infer vs. must not infer

### Figma/agent may infer
- responsive width behavior from the spec
- exact Auto Layout configuration needed to reproduce stated spacing/alignment
- sensible text wrapping constraints
- component nesting structure
- variant-property organization

### Figma/agent must not infer independently
- new product behavior
- additional screens
- new onboarding questions
- monetization states
- medical/health logic
- proprietary Tonal assets
- random icon choices
- arbitrary new colors/radii that conflict with the reconstruction spec

## Build completion criteria

The Tonal reconstruction foundation is ready for Fitness screen work when:
- foundations exist as reusable variables/styles
- minimum component set exists with required states
- icon/media placeholders are systematic
- at least five representative reconstruction screens/patterns pass visual comparison
- no major component uses one-off styling that bypasses the shared system
- estimated values are documented and can be tuned centrally

At that point, the workflow switches from **RECONSTRUCT** to **CUSTOMIZE**.