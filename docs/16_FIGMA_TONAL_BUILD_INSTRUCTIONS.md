# 16 FIGMA TONAL BUILD INSTRUCTIONS

**Status:** ACTIVE — PHASE-A RECONSTRUCTION
**Updated:** 2026-08-28

## Objective

Build the first Fitness Figma design system by reconstructing Tonal's visible design language from the GitHub specification and Mobbin reference evidence, before product-specific visual customization.

The Figma build should consume:
1. `docs/09_DESIGN_SYSTEM.md`
2. `docs/14_TONAL_RECONSTRUCTION_BASELINE.md`
3. `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
4. `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
5. relevant Fitness Product/Policy/Screen Decision docs when building actual Fitness screens

## Important tool limitation / workflow rule

Do **not** assume Figma itself will reliably crawl and interpret arbitrary GitHub Markdown files or Markdown-embedded competitor screenshots automatically.

For ChatGPT-driven Figma work, ChatGPT acts as the bridge:
- read GitHub specifications
- inspect Mobbin screenshot evidence
- translate the evidence into Figma variables, styles, components, patterns, examples, and screen composition

Figma Code Connect is for mapping design components to code; it is not the primary mechanism for ingesting arbitrary Markdown design specifications.

Therefore the build must not depend on 'GitHub is connected, so Figma will infer everything by itself.' The specification must be explicit enough to execute deterministically.

## Figma-agent readability rule

The Figma file itself must become a machine-readable design system after the GitHub spec is translated into it.

The system should deliberately expose design intent through:
- semantic component/layer names
- Auto Layout structure
- explicit Fixed / Hug / Fill behavior
- component properties and variants
- bound variables and text styles
- component/style/variable descriptions
- reusable higher-order patterns
- example compositions that show correct usage

This is not optional cleanup. It is part of the design-system build.

When the Figma plan/library setup supports publishing, publish the reconstructed library after a QA-passing baseline is ready so Figma's agent can use the latest library context. If library publishing is unavailable, keep the design-system assets in the same working file and do not assume a separate Figma agent has full library context automatically.

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
- Fixed / Hug / Fill examples
- alignment examples

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

Each reusable component must define where applicable:
- semantic name
- Auto Layout
- sizing behavior by axis
- component properties / variants
- variable/style bindings
- component description

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

Patterns should be assembled from system components rather than duplicated raw frames.

### `Examples`
This page exists specifically to show people and Figma's agent how components should be combined.

Create example components/patterns such as:
- `Onboarding/ChoiceQuestion_example`
- `Dashboard/MetricSection_example`
- `Workout/MovementBlock_example`
- `Settings/ListSection_example`
- `Program/HeroDetail_example`

Examples must:
- use actual system components
- use bound variables/styles
- demonstrate correct spacing/alignment/sizing behavior
- remain representative rather than becoming a complete duplicate of every product screen

### `10_FITNESS_SCREENS`
Only after the reconstruction baseline is coherent:
- apply the reconstructed system to approved Fitness screens
- Fitness policy and `docs/13_SCREEN_DESIGN_DECISIONS.md` override Tonal behavior

## Variables and styles

Create Figma variables for:
- semantic colors
- spacing scale
- radii
- icon/dimension sizes where practical
- other repeatable numeric system values where binding is supported and useful

Create text styles and/or typography variables for the reconstructed typography roles.

Use semantic role names rather than `Tonal/Black1`, `Tonal/Gray2`, etc.

Examples:
- `Color/Ink/Primary`
- `Color/Surface/Canvas`
- `Space/24`
- `Radius/Small`
- `Size/Icon/24`
- `Type/Heading/Screen`
- `Type/Metric/XL`

This preserves the replicated visual relationships while allowing later Fitness customization without renaming the entire system.

Defining a variable is not sufficient. Components must actually bind to it. QA-2 in `17_FIGMA_AGENT_EXECUTION_QA.md` verifies binding rather than visual equality alone.

## Auto Layout rules

- reusable components must use Auto Layout where applicable
- page-width components use Fill-container behavior
- content-driven stacks use Hug behavior where structurally correct
- fixed-size slots/controls use Fixed behavior
- sizing must be decided separately on horizontal and vertical axes
- do not hard-code 390-width internals except for explicit reference-frame demonstrations
- standard outer page margin: use the current reconstructed token, initially 24
- internal layout must preserve consistent left/right alignment lines
- use min-height when content can wrap
- Korean copy must not break component geometry
- follow the full sizing/alignment decision matrix in `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

## Text-alignment rule

Text alignment is role-driven:
- body/list/form/detail content defaults left
- onboarding question composition may center where Tonal evidence supports it
- button labels center
- trailing values may right-align when scanning benefits
- ordinary paragraphs are not centered for decoration

The agent must preserve both text alignment and container alignment; these are separate decisions.

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

## Mandatory three-stage QA

Every substantial component/pattern/screen batch must run the complete gate defined in `docs/17_FIGMA_AGENT_EXECUTION_QA.md`:

### QA-1 — Structure / Auto Layout
Check layout direction, Fixed/Hug/Fill, text wrapping, responsive behavior, alignment, gaps/padding, and unnecessary absolute positioning.

### QA-2 — Design-system / Binding
Check variable bindings, text styles, component instances, variants/properties, semantic names, descriptions, and raw-value bypasses.

### QA-3 — Visual / Reference / Product
Compare with Tonal evidence and verify Fitness product-policy correctness.

Do not generate a large downstream screen batch while an upstream component/pattern is failing QA-1 or QA-2.

## What Figma/agent may infer vs. must not infer

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
- actual properties are bound to the intended variables/styles
- semantic layer/component naming is clean
- Auto Layout and Fixed/Hug/Fill decisions survive responsive/content stress tests
- icon/media placeholders are systematic
- higher-order examples/patterns exist for agent guidance
- at least five representative reconstruction screens/patterns pass visual comparison
- QA-1 / QA-2 / QA-3 pass for the baseline batch
- no major component uses one-off styling that bypasses the shared system
- estimated values are documented and can be tuned centrally

At that point, the workflow switches from **RECONSTRUCT** to **CUSTOMIZE**.