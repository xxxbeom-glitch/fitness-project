# 21 TONAL PRODUCT PATTERNS AUDIT

**Status:** PHASE-A / BATCH-03 — PRODUCT PATTERNS PROVISIONAL
**Updated:** 2026-08-28

## Purpose

Batch 03 reconstructs Tonal's higher-order product patterns after Foundations and Core Components passed the midpoint QA in `docs/20_TONAL_INTERMEDIATE_QA_BATCH01_02.md`.

Scope:
- dashboard/home metric composition
- modular card grid behavior
- metric typography hierarchy
- semantic accent usage
- media/content card patterns
- program/workout hero patterns
- exercise information/detail patterns
- workout history / set table patterns
- statistics / chart composition
- horizontal carousel behavior
- active-session visual treatment as reference evidence only
- Auto Layout sizing for higher-order Figma patterns

This document reconstructs **visible system behavior**, not Tonal's internal production source or official token values.

Evidence labels:
- **OBSERVED** — repeated directly in screenshots
- **INFERRED** — repeated relationship implies a shared pattern
- **ESTIMATED** — provisional Figma value selected to reproduce that relationship

Confidence labels:
- **HIGH** — repeated across multiple independent screens
- **MEDIUM** — pattern is clear, exact value remains uncertain
- **LOW** — do not freeze globally

---

## 1. Evidence set — Batch 03

Targeted Mobbin searches produced **30+ unique Tonal screens** across dashboard/home, program/workout detail, exercise detail/history, statistics/review, and active-session families after removing obvious duplicates.

Representative evidence:

### Home / dashboard / discovery
- https://mobbin.com/screens/74e51c99-0993-4408-9ef7-fcd0a2ebd96c
- https://mobbin.com/screens/1d86bdb8-0f68-4845-8bd0-0c45f19149ec
- https://mobbin.com/screens/4e2df17b-d095-46a1-8c41-c9394ab83f24
- https://mobbin.com/screens/5e9461c9-d902-4e37-ad82-906753bc7583
- https://mobbin.com/screens/ecaa8fdf-d627-41a3-9c91-25ea4c6c03a0
- https://mobbin.com/screens/b797b14b-4e58-4152-8900-e03d45b69492

### Program / workout / exercise detail
- https://mobbin.com/screens/b8bf6776-884a-4f05-9426-cab43455b3f6
- https://mobbin.com/screens/2a81a821-75dc-4e73-8926-f71d3877efe0
- https://mobbin.com/screens/7a350c49-0451-4f16-add0-6ecd14f5ed7b
- https://mobbin.com/screens/a8be9862-08b3-4282-8402-fd1129dd399d
- https://mobbin.com/screens/65d7538d-e628-4c08-9cff-c99245270609
- https://mobbin.com/screens/9208b61a-2df8-46a8-8121-7deba73ee29e
- https://mobbin.com/screens/0fd9fa1a-0438-4448-b0dd-2e9d45029165

### History / statistics / review
- https://mobbin.com/screens/7b996db9-f556-4656-aea3-ac8e76be62aa
- https://mobbin.com/screens/8815ce5b-8321-434d-afd7-3a8f55f81542
- https://mobbin.com/screens/93ffb0da-29cd-4a78-8c10-8f5fa1e24966
- https://mobbin.com/screens/867b652a-c1f5-46c9-bd29-a8c0818e71d8
- https://mobbin.com/screens/31eba812-6723-4f22-8b4e-d33204ae842e
- https://mobbin.com/screens/741cb509-3190-42a9-825f-3f1a38b35c18
- https://mobbin.com/screens/f23a4fcb-c25f-4f15-9924-f3ede08f749c

### Active media/session reference
- https://mobbin.com/screens/50541d0f-6dd5-4652-946c-0d3b655e616f
- https://mobbin.com/screens/e186dda2-b208-4984-9b65-1be92a9bd0e0
- https://mobbin.com/screens/fc2db24d-343d-4d83-85c9-f101d00c3e8d

Full competitor screenshots are intentionally not committed to the public repository.

---

## 2. Product-pattern principle

**OBSERVED / HIGH**

Tonal's visual system is not a single generic card stack. It repeatedly alternates among three larger composition modes:

1. **Subtle-canvas modular dashboard**
   - cool light-gray page canvas
   - white rectangular metric/content modules
   - sparse vertical rhythm
   - black bottom navigation

2. **White detail/stat surface**
   - pure-white page
   - large numeric hierarchy
   - thin dividers and underline tabs
   - little or no card decoration

3. **Dark or media-led immersive surface**
   - full-bleed image/video or black background
   - white overlay text/actions
   - gradient/scrim for legibility

The Fitness reconstruction must preserve these modes as semantic patterns rather than forcing every screen onto one background/card template.

---

## 3. Dashboard page shell

### Pattern
**OBSERVED / HIGH**

Progress-oriented Tonal home screens use:
- white/quiet brand/header zone
- subtle cool-gray main canvas
- vertically stacked white modules
- large outer whitespace rather than shadows
- black bottom navigation

### Geometry
**CONFIRMS BATCH 01**
- primary horizontal alignment remains close to `24`
- full-width dashboard modules use horizontal `FILL`
- white modules are predominantly square/tiny-radius rectangles

**ESTIMATED / MEDIUM**
- vertical module gap: `20–24`
- card/internal padding: `16–20`
- two-column tile gap: `8–12`

### Figma pattern
`Dashboard/PageShell`
- width `FILL`
- height screen/content driven
- main content vertical Auto Layout
- background `Color/Surface/Canvas/Subtle`
- bottom navigation remains fixed pattern when the screen uses it

---

## 4. Dashboard module families

### 4.1 `Dashboard/FeatureMetric`
**OBSERVED / HIGH**

Examples: Strength Score, Muscle Readiness, weekly target, achievement summary.

Structure may include:
- large primary value/title
- uppercase supporting label
- diagram/chart/illustration region
- optional inline action

Figma:
- width `FILL`
- height `HUG` or pattern min-height
- internal stack mostly left aligned
- no default shadow
- tiny/no radius

### 4.2 `Dashboard/MetricTile`
**OBSERVED / HIGH**

Small stat modules appear in 2-column grids.

Structure:
- optional delta badge
- large metric
- uppercase label

Figma:
- parent `Dashboard/MetricGrid2` horizontal `FILL`
- each tile horizontal `FILL`
- equal widths
- gap `8–12` provisional
- tile vertical `HUG` + shared min-height

Do not hard-code each tile width independently.

### 4.3 `Dashboard/AchievementStrip`
**OBSERVED / MEDIUM-HIGH**

Uses multiple circular achievement/status elements arranged horizontally.

This is a distinct data-visual pattern and must not cause the overall component system to become pill/circle-heavy.

---

## 5. Metric typography hierarchy

Batch 03 provides enough evidence to define a working metric scale for Figma reconstruction.

### `Type/Metric/XL`
**OBSERVED / HIGH**
Used for page-level headline values such as total volume, total workouts, strength score.

**ESTIMATED**
- Pretendard Bold/ExtraBold proxy
- `38–42`
- line-height `42–46`
- no wrap

### `Type/Metric/L`
**OBSERVED / HIGH**
Used for prominent card values and major stat values.

**ESTIMATED**
- `28–32`
- line-height `32–36`

### `Type/Metric/M`
**OBSERVED / HIGH**
Used for set weight/reps, secondary metrics, right-column values.

**ESTIMATED**
- `20–24`
- line-height `24–28`

### Unit treatment
**OBSERVED / HIGH**
- unit is visually smaller than numeric value
- often sits on the same baseline or immediately adjacent
- do not include units inside the same oversized typography style if this destroys hierarchy

Pattern recommendation:
`Metric/ValueUnit`
- value `HUG`
- unit `HUG`
- horizontal Auto Layout
- baseline aligned

### Metric label
Uppercase compact label from Batch 01 remains valid:
- roughly `9–12`
- bold/semi-bold
- tight line-height

---

## 6. Semantic accent palette — Batch 03 correction

### Observation
**OBSERVED / HIGH**
Tonal uses more than one accent role:
- mint/green for active training data, progress bars, positive values, toggles
- blue for some weekly-target/progress systems and comparison markers
- orange/yellow for some achievement/progress signals
- red/pink for destructive/negative states and fatigued muscle states

### Provisional semantic roles
Exact hex remains ESTIMATED; roles are ready to consolidate:
- `Color/Accent/Positive` — mint training/progress green
- `Color/Accent/Info` — blue progress/info role
- `Color/Accent/Achievement` — orange/yellow role
- `Color/Accent/Negative` — red status role
- `Color/Action/Destructive` — destructive text/action red-pink

### Important
Do not assign a color merely for decoration. Tonal uses accent colors mainly to encode data/status/progress.

---

## 7. Surface-role validation

Batch 03 confirms the midpoint QA correction.

### `Color/Surface/Canvas/Subtle`
**OBSERVED / HIGH**
Used for dashboard/editor surfaces behind white modules.

### `Color/Surface/Canvas/Base`
**OBSERVED / HIGH**
Pure-white detail/history/stat pages.

### `Color/Surface/Canvas/Dark`
**OBSERVED / HIGH**
Black immersive/detail/session screens.

### `Color/Surface/Card`
**OBSERVED / HIGH**
White module/card on subtle canvas.

### Rule
The visual mode is selected by screen/pattern intent. Do not create raw local background colors if one of these semantic roles applies.

---

## 8. Media-card pattern

### Landscape media card
**OBSERVED / HIGH**
Used for workouts/programs/discovery.

Structure:
- fixed/aspect-controlled media rectangle
- bottom readability gradient/scrim
- small category/metadata label
- title
- duration / level / program metadata

Figma:
- card width fixed or constrained inside a horizontal carousel
- height fixed/aspect controlled
- media `FILL`
- overlay absolute inside media component is legitimate
- text-safe area anchored to bottom
- tiny radius if visible

### Portrait education card
**OBSERVED / MEDIUM-HIGH**
Tonal also uses taller portrait cards in learning/content rails.

Do not force portrait and landscape media into one arbitrary aspect ratio.

### Horizontal carousel
**OBSERVED / HIGH**
- parent viewport width `FILL`
- horizontal item stack `HUG`
- item width fixed/constrained
- consistent item gap
- deliberate partial next-card visibility communicates horizontal scroll

Figma pattern:
`Content/MediaCarousel`

---

## 9. Program / workout hero

### `Hero/ProgramWorkout`
**OBSERVED / HIGH**

Repeated structure:
- media fills top region edge-to-edge
- top navigation/action slots overlay media
- bottom-left content overlay contains category/type, title, and compact metadata
- dark gradient/scrim protects readability
- body begins directly below hero; no decorative overlapping rounded sheet is required

### Sizing
**INFERRED / MEDIUM**
There is not enough evidence for one universal hero height/aspect ratio. Program, workout, and exercise contexts vary.

Figma:
- width `FILL`
- height `FIXED` or aspect-controlled by explicit hero variant
- overlay content absolute within the hero
- media slot replaceable

Recommended variants:
- `Type = Program | Workout | Exercise`
- `Media = Image | VideoPlaceholder`
- `Tone = LightOverlay | DarkOverlay`

Do not create a single global hero height token.

---

## 10. Program detail composition

### Pattern
**OBSERVED / HIGH**

Program detail commonly composes:
1. media hero
2. coach/author strip or compact metadata
3. description / Show More
4. release or supporting metadata
5. goals/progress module where relevant
6. workouts horizontal rail
7. similar-program rail
8. prominent join/start action

### Section behavior
- page horizontal inset follows ~24 alignment
- section heading often uppercase/strong
- major section gap `24–32` provisional
- media rails can intentionally extend/peek beyond a standard single-column rhythm

### Figma
Create `Program/HeroDetail_example` on the Examples page after components are built.

---

## 11. Workout detail composition

### Custom/program workout detail
**OBSERVED / HIGH**

Pattern:
- optional media hero
- workout title + compact duration/body-region metadata
- description
- repeated workout block sections
- movement rows
- primary edit/start action

The same block/movement components from Batch 02 should be reused; Batch 03 does not justify a new duplicate workout-row system.

### Important Fitness override
Tonal hardware-specific controls, machine icons, proprietary weight modes, and Smart View assumptions are **not** Fitness product requirements.

Use the visual hierarchy, not Tonal-specific behavior.

---

## 12. Exercise information/detail pattern

Batch 03 shows at least two Tonal exercise-detail modes:

### A. Information mode
**OBSERVED / HIGH**
- optional large media/illustration
- targeted-muscle map
- uppercase section heading
- instructional body text
- benefits/supporting text
- related program/workout media rails in some variants

### B. Configuration mode
**OBSERVED / HIGH**
- movement media/demo
- segmented media view control
- Sets & Reps configuration module
- toggle
- stepper
- mode tiles
- primary action

### Fitness product constraint
Confirmed Fitness policy (`DEC-011`) is **text-first / media-optional**.

Therefore Figma must support:
- `Exercise/InfoDetail/MediaPresent`
- `Exercise/InfoDetail/NoMedia`

When media is absent:
- remove the media block entirely
- collapse the layout naturally
- do not preserve an empty fixed media rectangle

This is a direct example of Tonal visual reconstruction being subordinate to Fitness product policy.

---

## 13. History / statistics page pattern

### `History/MetricChart`
**OBSERVED / HIGH**

Repeated structure:
1. top navigation
2. large metric value + unit
3. uppercase metric label
4. divider
5. large section heading, often `HISTORY`
6. underline tab row
7. date/range label
8. chart
9. divider / next section
10. `STATS` or related detail

### Layout
- pure-white page surface
- page content aligned around ~24 inset
- chart width `FILL`
- chart height fixed by chart variant rather than content Hug
- tab row reuses Batch-02 underline tabs

### Chart roles
**OBSERVED / HIGH**
- mint/green primary bars/lines in many performance charts
- black/dark text
- very subtle gray axes/grid/dividers
- sparse annotation; no heavy chart chrome

Do not infer one universal chart type. Build chart patterns separately from design tokens.

---

## 14. Stats list pattern

### `Stats/ValueList`
**OBSERVED / HIGH**

Structure:
- section heading
- optional sublabel/comparison helper
- rows separated by thin dividers
- left label secondary/dark
- right value large/bold
- optional delta badge

Figma:
- row width `FILL`
- height `HUG` + min-height
- left content `FILL`
- right metric `HUG`
- divider `FILL`

This is closer to a data list than a card; do not wrap every stat row in a rounded surface.

---

## 15. Exercise set-history table

### `History/ExerciseSetTable`
**OBSERVED / HIGH**

Exercise history uses dense but highly structured rows:
- top date/workout label and total summary
- `Set N` at left
- optional mode badge below/near set label
- weight/value column
- reps/performance column
- unit/column labels smaller than values
- thin separators
- positive/PR emphasis may use mint green

### Figma layout
- table width `FILL`
- row vertical `HUG` + min-height
- set column fixed/HUG
- numeric columns aligned consistently across rows
- numeric values do not wrap
- unit labels use compact uppercase role
- long workout title may wrap independently above the table

Do not implement the table as independently positioned text on every row.

---

## 16. Monthly review / highlight pattern

**OBSERVED / MEDIUM-HIGH**

Monthly review screens combine:
- large headline metric
- sparse chart/period visualization
- achievement block
- active-day/calendar block
- horizontal highlight media rail
- stat list

This is a composed editorial/report pattern, not a single reusable card.

Potential Figma example:
`Report/MonthlyReview_example`

Do not build this unless Fitness actually needs a monthly review surface; use it as evidence for metric/report hierarchy.

---

## 17. Active-session media reference

### Observation
**OBSERVED / HIGH**
Tonal's active media workout experience is strongly dark and video-first:
- full-screen media
- white large timer/title
- centered transport/session controls
- mint progress line
- minimal chrome

### Fitness interpretation
**DO NOT COPY AS THE ACTIVE-LOGGING BASELINE.**

Reason:
- Tonal's flow is hardware/media/coach centric
- confirmed Fitness functionality is Hevy-led fast set logging and prior-performance visibility
- a video-first player would conflict with the product's logging-first core

Use this evidence only for:
- potential dark media/video states
- overlay typography
- progress treatment
- high-contrast session controls when a future media surface actually exists

Active workout logging composition remains a Fitness/Hevy functional pattern styled with Tonal foundations.

---

## 18. Responsive / Auto Layout contracts for product patterns

### `Dashboard/MetricGrid2`
- parent width `FILL`
- horizontal Auto Layout
- two children `FILL`
- gap `8–12`
- child height shared by min-height/content constraints

### `Dashboard/FeatureMetric`
- width `FILL`
- vertical `HUG`
- internal media/chart slot fixed/aspect controlled where applicable

### `Content/MediaCarousel`
- viewport width `FILL`
- item stack horizontal `HUG`
- item width fixed/constrained
- item height fixed/aspect controlled

### `Hero/ProgramWorkout`
- width `FILL`
- height fixed/aspect controlled by variant
- media fill
- top/bottom overlay layers positioned inside the hero

### `History/MetricChart`
- width `FILL`
- vertical page stack `HUG`
- chart region width `FILL`, height `FIXED`

### `Stats/ValueList`
- list `FILL / HUG`
- rows `FILL / HUG + min-height`

### `History/ExerciseSetTable`
- table `FILL / HUG`
- rows `FILL / HUG + min-height`
- numeric columns align across rows and remain non-wrapping

---

## 19. Pattern inventory for Figma `03_PATTERNS`

Build only after Pre-Figma Consolidation QA:

1. `Dashboard/PageShell`
2. `Dashboard/FeatureMetric`
3. `Dashboard/MetricGrid2`
4. `Metric/ValueUnit`
5. `Stats/ValueList`
6. `Content/MediaCard/Landscape`
7. `Content/MediaCard/Portrait`
8. `Content/MediaCarousel`
9. `Hero/ProgramWorkout`
10. `Program/DetailComposition`
11. `Workout/BlockList`
12. `Exercise/InfoDetail/MediaPresent`
13. `Exercise/InfoDetail/NoMedia`
14. `History/MetricChart`
15. `History/ExerciseSetTable`

Do not create Tonal-only proprietary feature components merely because screenshots contain them.

---

## 20. Figma Examples candidates

The `Examples` page should teach the agent correct composition with actual system components and bound variables.

Recommended examples:
- `Dashboard/ProgressHome_example`
- `Dashboard/MetricGrid_example`
- `Program/HeroDetail_example`
- `Workout/BlockList_example`
- `Exercise/InfoDetail_NoMedia_example`
- `Exercise/InfoDetail_MediaPresent_example`
- `History/MetricChart_example`
- `History/ExerciseSetTable_example`

These are reconstruction/usage examples, not new Fitness product decisions.

---

## 21. Batch 03 validation of earlier hypotheses

### Confirmed strongly
- ~24 primary horizontal alignment remains credible
- 4 pt spacing-family hypothesis remains credible
- tiny-radius standard button/card language remains credible
- flat/divider-driven detail rows remain credible
- black/white/neutral dominance remains core
- accent is functional/data-led rather than decorative
- large numeric hierarchy is a defining Tonal characteristic
- Fixed/Hug/Fill rules from Batch 01/02 remain structurally coherent

### Refined
- canvas must be multiple semantic surface roles, not one background token
- accent system needs multiple semantic roles, not one green
- primary actions need compact and content-width families
- card system must separate metric modules, media cards, choice cards, and workout blocks
- metric typography now needs XL/L/M roles
- 2-column dashboard grid is a real higher-order pattern

### Still provisional
- exact color hex values
- exact font-weight mapping in Pretendard
- exact hero heights/aspect ratios
- exact dashboard card heights
- exact chart dimensions
- bottom-sheet large radius
- exact spacing between some major product sections

---

## 22. Batch 03 gate

**BATCH 03 PRODUCT PATTERNS: COMPLETE — PROVISIONAL PASS.**

Do **not** start broad Figma generation immediately.

Next required step:
1. run **Pre-Figma Consolidation QA** across Batch 01 + 02 + midpoint corrections + Batch 03
2. reconcile the consolidated values into `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
3. confirm there are no contradictory component names, token roles, sizing rules, or raw provisional values being promoted accidentally
4. only then build Figma `01_FOUNDATIONS -> 02_COMPONENTS -> 03_PATTERNS -> Examples`

The first Figma build batch must then run the mandatory QA-1 / QA-2 / QA-3 gates from `docs/17_FIGMA_AGENT_EXECUTION_QA.md` before Fitness product screens are generated.
