# 16 FIGMA TONAL BUILD INSTRUCTIONS

**Status:** READY FOR PHASE-A FIGMA BUILD
**Updated:** 2026-08-28

## Objective

Build the first Fitness Figma design system by reconstructing Tonal's visible design language from the consolidated GitHub specification before Fitness-specific visual customization.

This document is written so either ChatGPT-driven Figma work or a **Figma Agent with explicit GitHub access** can execute the same canonical plan.

---

## 1. Canonical input order

Before any Phase-A mutation, read these in order:

1. `docs/CURRENT.md` — current project location / next action
2. `docs/09_DESIGN_SYSTEM.md` — strategic visual direction and authority model
3. `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` — **canonical implementation spec**
4. `docs/17_FIGMA_AGENT_EXECUTION_QA.md` — mechanical execution + QA contract
5. `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — consolidation gate / conflict resolutions
6. `docs/13_SCREEN_DESIGN_DECISIONS.md` — only when building approved Fitness screens
7. Batch audit docs `18–21` and `14_TONAL_RECONSTRUCTION_BASELINE.md` — evidence/provenance only when clarification is needed
8. relevant Fitness Product/Policy/Decision docs — when actual Fitness behavior is involved

Authority rule:
- Product/Policy/Decision docs control behavior and scope.
- `15_TONAL_DESIGN_SYSTEM_SPEC.md` controls current Phase-A implementation values/names.
- `17_FIGMA_AGENT_EXECUTION_QA.md` controls mechanical quality.
- `22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` explains how conflicts were resolved.
- Audit docs are evidence, not competing implementation specs.

If an old audit value conflicts with `15_TONAL_DESIGN_SYSTEM_SPEC.md`, the canonical spec wins until a later QA-approved correction updates it.

---

## 2. GitHub-connected Figma Agent rule

### When the Figma Agent can access GitHub directly

The agent should **explicitly open/read the files listed above**. Do not assume that merely connecting GitHub means all Markdown files are automatically ingested or continuously synchronized.

Before mutating Figma, the agent must report briefly:
- which canonical files it successfully read
- the current Phase and requested scope
- any conflict between existing Figma assets and the GitHub spec
- the exact objects it plans to create/change

If a required canonical file cannot be read, stop and request access/context rather than silently inventing the missing rule.

### When direct GitHub access is unavailable or incomplete

ChatGPT acts as the translation bridge:
- reads current GitHub specifications
- inspects Tonal/Mobbin evidence where needed
- executes Figma variables/styles/components/patterns/examples
- validates the resulting structure/bindings

### Non-negotiable principle

The Figma file itself must become machine-readable after translation through:
- semantic names
- Auto Layout
- explicit Fixed / Hug / Fill
- component variants/properties
- actual variable/style bindings
- descriptions
- higher-order patterns
- example compositions

---

## 3. Existing Figma preservation rule

Historical pages/assets such as:
- `V0.3_FOUNDATIONS`
- `V0.3_COMPONENTS`
- archived V0.3 material
- `V0.4_WIREFRAME`
- `V0.5_PRODUCTIZED_WIREFRAME`

are reference/archive material.

Do **not** mutate the old V0.3 design system into the new Tonal Phase-A baseline.

Build the new semantic system separately. Reuse only a concept/value that independently matches the current canonical spec, such as the 390 comparison frame, 24 page inset, or 4 pt spacing-family relationship.

---

## 4. Competitor-reference policy

Do not commit full Tonal/Mobbin screenshots into the public GitHub repository.

Use:
- Mobbin URLs / screen IDs in evidence docs
- text observations/inferences in GitHub
- direct Mobbin inspection during research/QA
- temporary/private reference placement in Figma only when permitted and useful

Never publish Tonal logos, proprietary icons, production imagery, screenshots, or exact proprietary copy as Fitness brand assets.

---

## 5. Required Figma page structure

### `00_REFERENCE_TONAL`
Temporary comparison area only.
- reference labels/URLs
- temporary representative images when permitted
- not a product-behavior source
- not published as Fitness assets

### `01_FOUNDATIONS`
Build first.

Must include:
- semantic surface / ink / divider / accent/action colors
- typography roles
- metric typography roles
- spacing scale
- radius roles
- repeated dimensions
- icon-slot sizes
- touch-target example
- 390 comparison frame + 24 page inset example
- Fixed / Hug / Fill demonstrations
- alignment examples

### `02_COMPONENTS`
Build only after Foundation preflight passes.

Canonical minimum families are defined in `15_TONAL_DESIGN_SYSTEM_SPEC.md`, including:
- primary/secondary/text button families
- choice cards
- radio/check/toggle/stepper/segmented/mode controls
- underline input
- top/bottom navigation
- underline tabs
- settings/movement rows
- workout block header
- dialog/action sheet/toast
- icon/media placeholders

Every reusable component must define where applicable:
- semantic name
- Auto Layout direction
- horizontal sizing mode
- vertical sizing mode
- min/max dimension
- padding/gap/alignment
- text wrapping behavior
- properties/variants
- actual variable/style bindings
- usage description

### `03_PATTERNS`
Build only after component QA-1 and QA-2 pass.

Canonical higher-order patterns are defined in `15_TONAL_DESIGN_SYSTEM_SPEC.md`, including dashboard metrics, metric value+unit, stats lists, media cards/carousels, program/workout hero, workout block list, exercise detail with/without media, metric chart, and exercise set-history table.

Patterns must be assembled from passing system components and bound tokens. Do not duplicate raw frames merely to imitate screenshots.

### `Examples`
Teach correct composition to people and Figma agents.

Representative examples should cover:
- onboarding choice composition
- dashboard metric composition
- program hero/detail
- workout block list
- exercise detail with and without media
- history/chart/table
- settings list section

Examples must:
- use actual components
- use bound variables/styles
- demonstrate correct Fixed/Hug/Fill
- demonstrate copy wrapping/alignment
- remain representative rather than becoming duplicate product screens

### `10_FITNESS_SCREENS`
Do not start broad Fitness visual refinement until representative reconstruction examples pass QA-1/2/3.

Fitness policy overrides Tonal behavior.

---

## 6. Phase F1 — Foundation construction

Create from `15_TONAL_DESIGN_SYSTEM_SPEC.md`:
- `Color/Surface/*`
- `Color/Ink/*`
- `Color/Divider/*`
- `Color/Accent/*`
- `Color/Action/*`
- `Space/*`
- `Radius/*`
- `Size/Icon/*`
- `Size/Touch/*`
- repeated navigation/control dimensions where useful

Typography:
- use **Pretendard** as the current Phase-A proxy
- verify actual font availability/style names in the target Figma environment before binding
- create canonical Heading / Nav / Body / Label / Action / Caption / Metric roles from the spec

### Foundation preflight — mandatory before components

Check:
- every canonical role exists exactly once
- no duplicate near-synonym variables
- values match the current canonical spec
- scopes are appropriate
- text styles use intended Pretendard roles
- provisional screenshot-derived status is documented
- no competitor branding appears in token names

If Foundation preflight fails, fix it before component generation.

---

## 7. Auto Layout / sizing execution

Use `docs/17_FIGMA_AGENT_EXECUTION_QA.md` as the detailed mechanical contract.

For every container, decide horizontal and vertical sizing independently.

Default logic:
- page-width section/row/card -> horizontal `FILL`
- content-driven vertical stack -> vertical `HUG`
- variable-copy row/card -> vertical `HUG + min-height`
- icon / toggle / stepper / strict interaction slot -> `FIXED`
- paragraph -> parent-derived width + `HUG` height
- choice card -> `FILL / HUG + min-height`
- hero/media -> `FILL / FIXED-or-aspect-controlled`
- chart -> `FILL / FIXED by chart pattern`

Do not make everything Fixed merely to match one screenshot.

Do not place unresolved `FILL` children inside a same-axis `HUG` parent where free space is undefined.

Absolute positioning is permitted only for genuine overlays/floating controls/independent optical centering.

---

## 8. Text and alignment execution

Text alignment is role-driven:
- onboarding question/helper -> center
- button label -> center
- body/list/form/detail/workout content -> left
- choice-card internal text -> left
- trailing numeric/value column -> right when comparison/scanning benefits
- top-bar title -> optically centered
- metric value + unit -> baseline aligned

Text layers:
- single-line action/tab labels remain single line
- paragraphs use available width and grow vertically
- long Korean and English copy must wrap without collapsing geometry
- numeric/stat values do not wrap
- ellipsis is used only where the product pattern explicitly permits truncation

Text alignment and container alignment are separate decisions.

---

## 9. Variable/style binding

Creating a variable is not enough.

Bind reusable node properties to semantic variables/styles wherever supported and useful:
- fills
- strokes
- text color
- radii
- typography
- padding / gap / dimensions

Repeated raw values are a QA failure unless:
- Figma cannot bind that property
- the value is intentionally one-off and documented
- the node is an explicit provisional experiment

Do not detach instances to solve ordinary layout problems.

---

## 10. Placeholder rules

### Icons
Until the Product Owner finalizes iconography:
- use `Placeholder/IconSlot`
- visual slots: 16 / 20 / 24 / 28
- preserve minimum 44 interaction wrapper where required
- use a neutral slot/box only
- do not copy Tonal icons
- do not insert arbitrary substitute icons merely to make the UI look complete

### Media
Until final Fitness photo/video is supplied:
- use `Placeholder/Media`
- preserve crop/aspect/overlay/title/metadata safe zones
- support later image/video replacement without rebuilding surrounding structure
- if a Fitness pattern is media-optional, absence of media must collapse the block naturally rather than leave an empty fixed rectangle

---

## 11. Reconstruction-first rule

During Phase A:
- reconstruct the visible Tonal relationship before inventing an original styling alternative
- tune global tokens/components rather than patching individual screens
- favor cross-screen consistency over one-screen pixel mimicry

Exceptions:
- confirmed Fitness product behavior
- accessibility/platform corrections
- Hevy-led workout functionality
- media-optional requirements such as `DEC-011`

Tonal's hardware/video-centric active-session behavior is not copied as Fitness active logging.

---

## 12. Incremental build sequence

Do not generate the full library in one uncontrolled pass.

### Batch F1 — Foundations
Build `01_FOUNDATIONS` only.
Run Foundation preflight.

### Batch F2 — Core actions / selections
Build action buttons, choice cards, basic controls, segmented/mode controls, and input.
Run QA-1 and QA-2.
Fix failures before continuing.

### Batch F3 — Navigation / rows / overlays
Build navigation, underline tabs, rows, workout block header, dialog/sheet/toast.
Run QA-1 and QA-2.

### Batch F4 — Product patterns
Build `03_PATTERNS` from passing components.
Run responsive QA-1 and reuse/binding QA-2.

### Batch F5 — Representative examples
Create cross-family `Examples`.
Run full QA-1 / QA-2 / QA-3.

Representative validation must cover at least:
- onboarding
- dashboard/home
- program/workout
- exercise/detail
- settings/profile

Do not proceed to broad Fitness screen generation until representative examples pass.

---

## 13. Responsive and copy stress tests

Minimum representative widths:
- narrow mobile: ~`320–360`
- reconstruction baseline: `390`
- wider mobile: ~`430`

Check:
- page inset integrity
- text wrapping
- row compression
- trailing controls
- CTA width behavior
- media crop behavior
- no clipping/overflow

Reusable text-bearing components must be tested with:
- short copy
- long Korean copy
- long English copy
- large numeric values where applicable

Fix layout rules, not the test copy.

---

## 14. Mandatory QA

Every substantial build batch uses `docs/17_FIGMA_AGENT_EXECUTION_QA.md`.

### QA-1 — Structure / Auto Layout
Verify:
- layout direction
- Fixed/Hug/Fill on both axes
- padding/gap/alignment
- text resizing/wrapping
- responsive behavior
- unnecessary absolute positioning

### QA-2 — Design-system / Binding
Verify:
- actual variable/style bindings
- component instances/variants/properties
- semantic naming/descriptions
- no avoidable detached instances
- no repeated raw-value drift

### QA-3 — Visual / Reference / Product
Verify:
- Tonal proportion/hierarchy/density/surface relationship
- cross-family consistency
- Fitness product-policy correctness
- no proprietary Tonal asset reuse

Do not report a batch as DONE while any required QA stage is FAIL.

---

## 15. Build completion criteria

The Phase-A reconstruction baseline is ready for Fitness customization only when:
- canonical foundations exist as reusable semantic variables/styles
- required components exist with correct states/properties
- actual nodes bind to intended variables/styles
- naming is semantic and clean
- Auto Layout / Fixed / Hug / Fill survive stress tests
- icon/media placeholders are systematic
- higher-order patterns/examples reuse the system
- representative cross-family reconstructions pass visual comparison
- QA-1 / QA-2 / QA-3 pass
- no major repeated raw-value drift remains
- remaining screenshot estimates can be tuned centrally

At that point the workflow switches from **RECONSTRUCT** to **CUSTOMIZE**.
