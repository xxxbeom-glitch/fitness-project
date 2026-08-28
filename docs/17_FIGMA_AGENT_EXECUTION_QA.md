# 17 FIGMA AGENT EXECUTION & QA

**Status:** ACTIVE — PHASE-A RECONSTRUCTION
**Updated:** 2026-08-28

## Purpose

This document defines how a Figma agent must execute the reconstructed Tonal design system in a mechanically consistent way.

It exists because visual similarity alone is not enough. The generated Figma file must also encode correct responsive intent, Auto Layout behavior, text alignment, component variants, variable bindings, semantic names, and reusable higher-order patterns so later AI-assisted edits do not degrade the system.

The agent must read this together with:
1. `docs/09_DESIGN_SYSTEM.md`
2. `docs/14_TONAL_RECONSTRUCTION_BASELINE.md`
3. `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
4. `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
5. relevant Fitness product/screen-decision docs when building product screens

---

## 1. Core execution contract

The agent must not treat the screenshot as a flat picture to reproduce with arbitrary x/y coordinates.

For every container, text layer, component, and repeated block, determine and encode:
- layout direction
- sizing mode on each axis
- padding
- gap
- alignment
- wrapping behavior
- minimum/maximum dimension where useful
- variable/style binding
- component/variant relationship
- semantic layer name

Prefer Auto Layout whenever children have a structural relationship.

Absolute positioning is allowed only for genuinely overlaid content such as:
- hero-media overlays
- badges intentionally floating over media
- anchored decorative indicators
- elements whose reference behavior clearly requires overlay

Do not use absolute x/y placement merely because it is faster.

---

## 2. Sizing decision contract — FIXED / HUG / FILL

The agent must make an explicit sizing decision independently on horizontal and vertical axes.

### A. Use `FILL` / Fill container when
- a row/card/button is intended to span the available content width
- a list item should follow parent width
- a text/content column should take remaining horizontal space beside an icon or trailing control
- a page section should expand with its responsive parent
- a divider should span the usable content width

Typical examples:
- full-width primary CTA: horizontal `FILL`
- settings row: horizontal `FILL`
- choice card stack item: horizontal `FILL`
- workout movement row: horizontal `FILL`
- main page content column inside viewport: horizontal `FILL`

### B. Use `HUG` / Hug contents when
- the object's intended size is determined primarily by its content
- the element should remain compact as text/content changes
- a vertical stack should grow naturally with added/longer content

Typical examples:
- compact text button: horizontal `HUG`
- chip/tag/badge: horizontal and vertical `HUG`
- button label: `HUG`
- content card height containing variable-length helper copy: vertical `HUG`
- onboarding choice stack: vertical `HUG`
- section containing variable row count: vertical `HUG`

### C. Use `FIXED` when
- the reference has a strict visual or interaction dimension
- resizing would damage alignment or recognizable geometry
- an object is a slot rather than content-driven

Typical examples:
- icon placeholder: fixed square
- avatar/thumb: fixed square/circle
- 44x44 touch-target wrapper where specified
- stepper minus/plus control hit area
- bottom-navigation bar height
- known reference media aspect/height when the pattern requires it
- mobile reference viewport used only for reconstruction comparison

### D. Mixed-axis examples
- Full-width CTA: width `FILL`, height fixed or minimum-height token
- Choice card: width `FILL`, height `HUG` with min-height
- Settings row: width `FILL`, height `HUG` with row min-height
- Paragraph: width `FILL` or explicit available width, height `HUG`
- Icon slot: width `FIXED`, height `FIXED`
- Horizontal button with short label: width `HUG` unless the pattern specifies full width; height fixed/min-height
- Hero media: width `FILL`, height `FIXED` or aspect-ratio-controlled according to the pattern

### E. Invalid/fragile combinations to avoid
- do not place `FILL` children in a parent whose same axis is unresolved `HUG` if this produces collapse/ambiguous free space
- do not use `FILL` as a substitute for defining a real parent width
- do not hard-code child width merely to visually mimic a parent that should control width
- do not set every layer to `FIXED`
- do not set every text/container to `HUG`

When ambiguity remains, choose the behavior that survives content changes and viewport resizing while preserving the Tonal reference relationship.

---

## 3. Text resizing and wrapping contract

### Single-line labels
Examples: button labels, tab labels, compact metadata.
- normally single line
- content-sized where appropriate
- do not force arbitrary fixed width unless alignment requires it
- ellipsis only where the product pattern explicitly permits truncation

### Multi-line text
Examples: helper copy, exercise description, explanatory copy.
- width must be defined by the available content region (`FILL` or explicit parent-derived width)
- height grows with content
- must wrap cleanly at Korean and English text lengths
- never allow a near-zero-width text layer that wraps character-by-character

### Numeric/stat text
- preserve the reconstructed metric hierarchy
- avoid wrapping
- use a width strategy that preserves tabular alignment when multiple values are shown in a row

### Copy stress test
Every reusable text-bearing component must be tested with:
- short copy
- long Korean copy
- long English copy
- large numeric values where applicable

If the component breaks, fix layout behavior rather than manually shortening the test copy.

---

## 4. Text alignment decision contract

Alignment must follow content role, not arbitrary visual preference.

### Default left alignment
Use left alignment for:
- body copy
- list rows
- settings/legal screens
- exercise/workout descriptions
- labels + values
- forms/inputs
- history/stat detail
- section headings in content-heavy screens

### Center alignment
Use center alignment only when the composition clearly calls for it, especially:
- onboarding question/answer composition modeled after Tonal
- intentionally centered empty/confirmation state
- standalone large numeric selector
- compact modal/sheet confirmation where the hierarchy is symmetric
- CTA label inside a button

Do not center ordinary explanatory paragraphs just to make the screen appear polished.

### Right alignment
Use right alignment for:
- trailing numeric/value columns when visual comparison or scanning benefits
- trailing row values opposite a left label
- explicit save/action label in a top bar where the platform pattern uses it

### Vertical alignment
- icon + label rows: center vertically by default
- mixed-size metric rows: align by intentional baseline/visual center, not arbitrary bounding-box center
- trailing chevrons/toggles: center to row control line

---

## 5. Container and composition rules

### Page shell
- reference viewport is fixed only for visual reconstruction screenshots
- inner product layout must remain responsive
- use a page-level vertical Auto Layout where practical
- preserve the reconstructed outer margin token
- major sections should share the same horizontal alignment line unless the pattern intentionally breaks it

### Cards/surfaces
- use Tonal's restrained surface hierarchy
- avoid unnecessary nested cards
- prefer padding/gap and whitespace over decorative borders/shadows
- card height must usually be content-driven rather than frozen to screenshot height

### Rows
- structural row = horizontal Auto Layout
- left cluster and right cluster should be explicit nested containers
- left cluster typically `FILL`, right cluster `HUG` or fixed
- separators bind to border/divider variables

### Media overlays
- text-safe area must be an explicit overlay container
- use fill/gradient/overlay tokens where defined
- media itself remains replaceable

---

## 6. Variable-binding contract

The design system must not merely define variables; components must actually bind to them.

### Required variable categories
Bind where applicable:
- semantic color fills/strokes/text
- spacing/padding/gap values
- radii
- component dimensions that are system tokens
- typography properties where supported and stable, otherwise bind the approved text style

### No silent raw-value drift
Raw values are allowed only when:
- the value is intentionally one-off and documented
- Figma does not support binding for that property
- it is a reconstruction experiment not yet promoted to the baseline

Otherwise, a repeated raw value is a QA failure.

### Semantic naming
Prefer role names:
- `Color/Surface/Canvas`
- `Color/Ink/Primary`
- `Space/24`
- `Radius/Small`
- `Size/Icon/24`

Do not encode competitor branding into token names.

### Binding verification
For every component set, QA must inspect that the actual node properties are bound to the intended variables/styles, not merely visually equal to the same raw value.

---

## 7. Component/variant contract

Repeated UI must become components before broad screen generation.

Required variant dimensions should be machine-readable, for example:
- `State = Default | Pressed | Selected | Disabled | Loading`
- `Size = Small | Medium | Large` where actual size variants exist
- `Type = Primary | Secondary | Text` where the component family genuinely shares structure
- optional boolean/icon properties only when the pattern supports them

Do not create combinatorial variants for theoretical states that the product does not use.

Prefer component properties for controlled customization:
- text properties for labels
- boolean properties for optional supporting layers
- instance-swap/slot properties for replaceable icon/media placeholders where appropriate

Do not detach component instances to solve routine layout problems.

---

## 8. Semantic naming contract

The agent must not leave generic layer names such as:
- `Frame 42`
- `Rectangle 17`
- `Group 8`
- `Text 21`

Use names that communicate role:
- `ScreenContainer`
- `Header/Title`
- `Hero/Media`
- `Hero/Overlay`
- `ChoiceStack`
- `ChoiceCard/Label`
- `Row/Leading`
- `Row/Trailing`
- `Metric/Value`
- `IconSlot`

Names are part of the machine-readable design system and must remain stable enough for later agent work.

---

## 9. Agent examples / higher-order patterns

The Figma agent should not be asked to compose whole product screens from atoms alone.

Build and publish representative higher-order patterns/examples that demonstrate correct composition.

Create a Figma page named exactly **`Examples`** where practical, and/or use `_example`-suffixed example components, such as:
- `Onboarding/ChoiceQuestion_example`
- `Dashboard/MetricSection_example`
- `Workout/MovementBlock_example`
- `Settings/ListSection_example`
- `Program/HeroDetail_example`

Examples must use real system components and bound tokens. They exist to teach the agent how pieces combine.

Do not use screenshots as the example component itself; rebuild the pattern from native Figma layers/components.

---

## 10. Responsive behavior test matrix

Before a component/pattern passes QA, test it at representative widths, not only the reconstruction baseline.

Minimum width checks:
- narrow mobile: ~320–360
- baseline: 390
- wider mobile: ~430

The exact production device matrix can be refined later, but a component that only works at 390 is not considered structurally valid.

Check:
- text wrap
- content clipping
- FILL/HUG behavior
- row compression
- CTA width
- safe margins
- alignment-line consistency

---

## 11. Three-stage Figma QA gate

No major component/pattern/screen is considered complete after one generation pass.

### QA-1 — Structure / Auto Layout
Goal: verify that the design behaves correctly as a system.

Check:
- correct Auto Layout direction
- correct `FIXED / HUG / FILL` on both axes
- correct padding/gap/alignment
- correct text wrapping and autoresize behavior
- no unnecessary absolute positioning
- no clipping/overflow at stress-test copy lengths
- responsive width tests pass
- icon/media placeholders preserve intended geometry

Failure examples:
- screenshot looks right but card height is hard-coded and breaks with Korean copy
- full-width row is manually resized rather than Fill container
- paragraph is centered/fixed-width without a compositional reason

### QA-2 — Design-system / Binding
Goal: verify that the screen actually uses the reconstructed system.

Check:
- colors bound to semantic variables
- spacing/padding/gaps use intended variables where supported
- radii use system variables
- typography uses approved styles/variables
- repeated UI uses component instances
- variant/property state is correct
- no avoidable detached instances
- no duplicated ad-hoc component that already exists
- semantic naming is present
- component descriptions explain usage/state distinctions
- no repeated hard-coded raw values bypass the system

Failure examples:
- button looks identical but fill is raw `#000000` instead of `Color/Action/Primary`
- two visually identical rows are independent frames instead of one component

### QA-3 — Visual / Reference / Product
Goal: verify fidelity and product correctness after structure and binding are clean.

Check:
- compare against relevant Tonal Mobbin references for proportion, hierarchy, density, alignment, and surface behavior
- compare at least two reference examples when available before changing a global token
- ensure Fitness product behavior matches GitHub policy
- ensure no Tonal proprietary branding/assets/copy were copied into Fitness
- ensure Hevy-derived functional behavior does not visually break the Tonal reconstruction system
- review at normal zoom and high-resolution screenshot

A visual mismatch caused by a wrong global token should be fixed at the variable/component level, not patched locally on one screen.

---

## 12. QA reporting format

After each build batch, record:

### QA-1 result
- PASS / FAIL
- structural issues
- affected nodes/components
- fixes applied

### QA-2 result
- PASS / FAIL
- unbound/raw-value issues
- incorrect component/variant usage
- fixes applied

### QA-3 result
- PASS / FAIL
- reference mismatch
- product-policy mismatch
- remaining provisional assumptions

Do not report `DONE` if any release/design-critical QA stage is FAIL.

---

## 13. Agent build sequence

For every substantial Figma generation task:
1. read current GitHub design-system docs
2. identify relevant Tonal reference family
3. identify existing variables/components/patterns before creating new ones
4. build using Auto Layout and semantic sizing rules
5. bind variables/styles
6. create or reuse component variants/properties
7. run QA-1
8. run QA-2
9. take/inspect screenshot and run QA-3
10. only after PASS, proceed to the next screen/batch

The agent must correct failures before generating a large downstream batch; otherwise structural mistakes propagate across the file.

---

## 14. Phase-A rule

During Tonal reconstruction, fidelity and internal consistency take priority over originality.

Once the reconstructed system passes the three QA gates across representative screen families, Phase B may intentionally customize the system for Fitness.
