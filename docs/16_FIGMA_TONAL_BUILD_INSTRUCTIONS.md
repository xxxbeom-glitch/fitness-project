# 16 FIGMA TONAL BUILD INSTRUCTIONS

**Status:** READY FOR PHASE-A FIGMA BUILD
**Updated:** 2026-08-28

## Objective

Build the first Fitness Figma design system by reconstructing Tonal's visible design language from the consolidated GitHub specification before Fitness-specific visual customization.

### Canonical input order
1. `docs/09_DESIGN_SYSTEM.md` — strategic visual direction
2. `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` — **canonical implementation spec**
3. `docs/17_FIGMA_AGENT_EXECUTION_QA.md` — mechanical execution + QA contract
4. `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — consolidation gate / conflict resolutions
5. Batch audit docs `18–21` — evidence/provenance only when clarification is needed
6. relevant Fitness Product/Policy/Screen Decision docs when actual Fitness screens are built

If an audit document conflicts with `15_TONAL_DESIGN_SYSTEM_SPEC.md`, the consolidated spec wins until a QA-approved correction updates it.

---

## 1. Workflow rule

Do not assume Figma will reliably crawl arbitrary GitHub Markdown and infer the design system by itself.

ChatGPT remains the translation bridge:
- read current GitHub spec
- inspect Tonal/Mobbin evidence where needed
- create Figma variables/styles/components/patterns/examples
- inspect the resulting Figma structure and bindings
- run the required QA gates

The Figma file itself must become machine-readable through:
- semantic names
- Auto Layout
- explicit Fixed / Hug / Fill
- component variants/properties
- actual variable/style bindings
- descriptions
- higher-order patterns
- example compositions

---

## 2. Competitor-reference policy

Do not commit full Tonal/Mobbin screenshots into the public GitHub repository.

Use:
- canonical Mobbin URLs / IDs in GitHub evidence docs
- direct Mobbin inspection during analysis
- temporary/private visual reference placement in Figma only when permitted and useful

Never publish Tonal logos, proprietary icons, production imagery, or screenshots as Fitness brand assets.

---

## 3. Required Figma page structure

### `00_REFERENCE_TONAL`
Temporary comparison area only.
- reference labels/URLs
- temporary representative images when permitted
- not product behavior source
- not published as Fitness assets

### `01_FOUNDATIONS`
Build first.

Must include:
- semantic surface/ink/divider/accent colors
- typography roles
- metric typography roles
- spacing scale
- radius roles
- repeated dimensions
- icon-slot sizes
- touch-target example
- 390 reference frame + 24 page inset example
- Fixed / Hug / Fill demonstration
- alignment examples

### `02_COMPONENTS`
Build only after Foundation preflight passes.

Canonical minimum component set:
- `Button/Primary/Compact`
- `Button/Primary/Content`
- `Button/Primary/Inverse`
- `Button/Secondary/Outline`
- `Button/Text/Neutral`
- `Button/Text/Destructive`
- `ChoiceCard/Single`
- `ChoiceCard/Multi`
- `Control/Radio`
- `Control/Check`
- `Control/Toggle`
- `Control/Stepper`
- `Control/Segmented/Pill`
- `Control/ModeTile`
- `Input/Underline`
- `Navigation/TopBar`
- `Navigation/BottomBar`
- `Tab/Underline`
- `Row/Settings`
- `Row/Movement`
- `Workout/BlockHeader`
- `Dialog/Center`
- `Sheet/Action`
- `Feedback/Toast`
- `Placeholder/IconSlot`
- `Placeholder/Media`

Every component must define where applicable:
- semantic name
- Auto Layout direction
- horizontal sizing mode
- vertical sizing mode
- min/max dimension
- padding/gap/alignment
- text wrapping behavior
- component properties/variants
- actual variable/style bindings
- usage description

### `03_PATTERNS`
Build only after component QA-1 and QA-2 pass.

Canonical pattern set:
- `Dashboard/PageShell`
- `Dashboard/FeatureMetric`
- `Dashboard/MetricGrid2`
- `Metric/ValueUnit`
- `Stats/ValueList`
- `Content/MediaCard/Landscape`
- `Content/MediaCard/Portrait`
- `Content/MediaCarousel`
- `Hero/ProgramWorkout`
- `Program/DetailComposition`
- `Workout/BlockList`
- `Exercise/InfoDetail/MediaPresent`
- `Exercise/InfoDetail/NoMedia`
- `History/MetricChart`
- `History/ExerciseSetTable`

Patterns must be assembled from system components and bound tokens. Do not duplicate raw frames to imitate a screenshot.

### `Examples`
This page teaches correct composition to people and Figma agents.

Minimum examples:
- `Onboarding/ChoiceQuestion_example`
- `Dashboard/ProgressHome_example`
- `Dashboard/MetricGrid_example`
- `Program/HeroDetail_example`
- `Workout/BlockList_example`
- `Exercise/InfoDetail_NoMedia_example`
- `Exercise/InfoDetail_MediaPresent_example`
- `History/MetricChart_example`
- `History/ExerciseSetTable_example`
- `Settings/ListSection_example`

Examples must:
- use actual system components
- use bound variables/styles
- demonstrate correct Fixed/Hug/Fill
- demonstrate copy wrapping and alignment
- remain representative rather than duplicating every product screen

### `10_FITNESS_SCREENS`
Do not start broad Fitness visual refinement until the reconstruction baseline passes representative QA-1/2/3.

Fitness policy overrides Tonal behavior.

---

## 4. Foundation variable/style construction

Create semantic variables from `15_TONAL_DESIGN_SYSTEM_SPEC.md`.

Required categories:
- `Color/Surface/*`
- `Color/Ink/*`
- `Color/Divider/*`
- `Color/Accent/*`
- `Color/Action/*`
- `Space/*`
- `Radius/*`
- `Size/Icon/*`
- `Size/Touch/*`
- repeated control/navigation dimensions where useful

Create text styles/typography variables for:
- Heading/Question
- Heading/Screen
- Heading/Section
- Heading/Card
- Nav/Title
- Body/Primary
- Body/Secondary
- Label/Primary
- Label/Caps
- Action/Primary
- Caption
- Metric/XL
- Metric/L
- Metric/M
- Metric/Unit

Semantic naming is required. Do not name variables after the competitor.

### Foundation preflight — mandatory before components
Check:
- every canonical role exists exactly once
- no duplicate near-synonym variables
- token values match the current canonical spec
- no competitor branding in names
- text styles use the intended proxy font and scale
- variable/style descriptions identify `PROVISIONAL` screenshot-derived status

If Foundation preflight fails, fix it before component generation.

---

## 5. Auto Layout / container execution

Use `docs/17_FIGMA_AGENT_EXECUTION_QA.md` as the detailed sizing contract.

Non-negotiable rules:
- decide Fixed/Hug/Fill separately on each axis
- page-width components normally use horizontal `FILL`
- content-driven vertical stacks normally use vertical `HUG`
- icon/toggle/stepper/touch slots use `FIXED`
- variable-copy rows/cards use `HUG + min-height`
- never freeze a text-bearing card to screenshot height when copy may wrap
- never make all children Fixed just to preserve a screenshot
- do not place unresolved FILL children inside same-axis HUG parents where free space is undefined
- use a real parent width before using FILL

Absolute positioning is permitted only for:
- media overlays
- intentionally floating badges/controls
- genuinely independent optical top-bar centering

---

## 6. Text and alignment execution

Role-driven text alignment:
- onboarding question/helper: center
- button labels: center
- body/list/form/detail: left
- choice-card internal text: left
- trailing values: right when scanning benefits
- top-bar title: optically centered
- metric value + unit: baseline aligned

Text layers:
- single-line action/tab labels remain one line
- paragraphs get parent-derived width and HUG height
- long Korean and English copy must wrap without geometry collapse
- numeric/stat values do not wrap
- ellipsis only where the product pattern explicitly allows truncation

---

## 7. Variable binding

Creating variables is insufficient.

Bind reusable component properties to semantic variables/styles wherever Figma supports it:
- fills
- strokes
- text color
- radii
- typography
- padding/gap/dimensions where supported and useful

Repeated raw values are a QA failure unless:
- Figma cannot bind that property
- the value is intentionally one-off and documented
- the node is an explicit provisional experiment

Do not detach instances to solve ordinary layout problems.

---

## 8. Placeholder rules

### Icons
The Product Owner will finalize iconography later.

Until then:
- use `Placeholder/IconSlot`
- available visual sizes: 16 / 20 / 24 / 28
- preserve minimum 44 touch wrapper where required
- do not copy Tonal icons
- do not use arbitrary substitutes that distort spacing

### Media
Final Fitness photo/video will be supplied later.

Until then:
- use `Placeholder/Media`
- preserve crop/aspect/overlay/title/metadata safe zones
- support later image/video replacement without changing the surrounding component structure

---

## 9. Reconstruction-first rule

During Phase A:
- reconstruct the visible Tonal pattern before inventing a Fitness-specific styling alternative
- tune global tokens/components instead of patching individual example screens
- keep visual fidelity and internal consistency ahead of originality

Exceptions:
- confirmed Fitness product behavior
- accessibility/platform corrections
- Hevy-led functional workout interaction
- missing media requirement under Fitness `DEC-011`

Tonal active-session video/hardware behavior is not copied as Fitness active logging.

---

## 10. Incremental build + QA sequence

Do not generate the full library in one uncontrolled pass.

### Batch F1 — Foundations
Build `01_FOUNDATIONS` only.

Run Foundation preflight.

### Batch F2 — Core actions/selections
Build:
- action buttons
- choice cards
- radio/check/toggle/stepper
- segmented/mode controls
- input

Run:
- QA-1 Structure
- QA-2 Binding

Fix failures before continuing.

### Batch F3 — Navigation/rows/overlays
Build:
- top/bottom navigation
- underline tabs
- settings/movement rows
- block header
- dialog/sheet/toast

Run:
- QA-1
- QA-2

### Batch F4 — Product patterns
Build `03_PATTERNS` from already-passing components.

Run:
- QA-1 responsive structure
- QA-2 component/token reuse

### Batch F5 — Representative examples
Create `Examples` compositions.

Representative cross-family validation must cover:
- onboarding
- dashboard/home
- program/workout
- exercise/detail
- settings/profile

Run full:
- QA-1 Structure
- QA-2 Binding
- QA-3 Visual / Tonal reference / Fitness policy

Do not proceed to broad Fitness screen generation until all representative examples pass.

---

## 11. Responsive and copy stress tests

Minimum widths:
- narrow mobile: `320–360`
- reconstruction baseline: `390`
- wider mobile: `430`

Check:
- page inset integrity
- text wrapping
- row compression
- trailing controls
- CTA width behavior
- media crop behavior
- no clipping/overflow

Reusable text-bearing components must also be tested with:
- short copy
- long Korean copy
- long English copy
- large numeric values where applicable

Fix layout rules, not the test copy.

---

## 12. Build completion criteria

The reconstruction baseline is ready for Fitness customization only when:
- canonical foundations exist as reusable semantic variables/styles
- all required components exist with correct properties/states
- actual component nodes bind to the variables/styles
- semantic naming is clean
- Auto Layout and Fixed/Hug/Fill survive stress tests
- icon/media placeholders are systematic
- higher-order patterns/examples reuse the system
- representative cross-family reconstructions pass visual comparison
- QA-1 / QA-2 / QA-3 pass
- no major repeated raw-value drift remains
- all remaining estimates can be tuned centrally

At that point the workflow switches from **RECONSTRUCT** to **CUSTOMIZE**.