# 15 TONAL DESIGN SYSTEM SPEC

**Status:** PRE-FIGMA CANONICAL PROVISIONAL — PHASE A
**Updated:** 2026-08-28

## Purpose and authority

This is the **canonical implementation-facing Phase-A design-system specification** reconstructed from accessible Tonal screenshots.

It consolidates:
- `18_TONAL_FOUNDATIONS_AUDIT.md`
- `19_TONAL_CORE_COMPONENTS_AUDIT.md`
- `20_TONAL_INTERMEDIATE_QA_BATCH01_02.md`
- `21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

The audit documents remain evidence/provenance. If a component name, token role, or provisional value conflicts with this file, **this file wins** until a later QA-approved correction updates it.

Important:
- this is not Tonal's official private design-system source
- numeric and color values are screenshot-derived working approximations
- values are intentionally centralized so Figma visual QA can tune them globally
- Fitness product behavior remains governed by current GitHub Product/Policy/Decision docs
- Tonal trademarks, proprietary icons, logos, copy, and production media are not Fitness assets

---

## 1. Reconstruction frame and layout

### Reference frame
- reconstruction comparison frame: `390 x 844`
- 390 is a visual baseline only
- production components must remain responsive and must not hard-code all internals to 390

### Horizontal alignment
**Canonical provisional tokens**
- `Space/PageX = 24`
- `Space/ComponentX = 16`

Rules:
- normal titles, cards, rows, charts, and content sections align to the same 24 pt page line
- onboarding question composition may center within the available page width
- full-bleed media/hero patterns may intentionally break the 24 pt line
- do not invent a global mobile column grid beyond patterns supported by screenshot evidence

### Spacing scale
Use the 4 pt family:

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80`

Usage guidance:
- `4–8`: micro label/control/metadata spacing
- `12`: compact internal gap
- `16`: default row/card internal spacing
- `20–24`: standard padding and section alignment
- `32–40`: major section separation
- `48–80`: intentionally sparse onboarding/hero composition

When a screenshot looks like an odd one-off value, first test whether the relationship is better reproduced with this shared scale before adding a new token.

---

## 2. Surface and color roles

All hex values below are **ESTIMATED** and remain visually tunable during Figma QA.

### Surface variables
- `Color/Surface/Canvas/Base = #FFFFFF`
- `Color/Surface/Canvas/Subtle = #F4F4F5`
- `Color/Surface/Canvas/Dark = #050505`
- `Color/Surface/Card = #FFFFFF`
- `Color/Surface/Choice/Default = #DADADD`
- `Color/Surface/Disabled = #ECECEF`

### Ink and divider variables
- `Color/Ink/Primary = #050505`
- `Color/Ink/Secondary = #66666B`
- `Color/Ink/Tertiary = #9A9AA0`
- `Color/Ink/Inverse = #FFFFFF`
- `Color/Divider/Subtle = #D9D9DC`
- `Color/Divider/Strong = #BFC0C3`

### Semantic accent variables
- `Color/Accent/Positive = #43E6A0`
- `Color/Accent/Info = #3E67E8`
- `Color/Accent/Achievement = #F2A52B`
- `Color/Accent/Negative = #E64A5F`
- `Color/Action/Destructive = #D9294E`

### Color-use rules
- black / white / neutral dominate the interface
- accent is primarily data/status/progress semantics, not decoration
- selected onboarding/choice surfaces frequently use black inversion rather than an accent fill
- positive/progress/readiness data may use mint-green
- info/progress comparison may use blue
- achievements may use orange/yellow
- negative status may use red/pink
- destructive actions use the destructive semantic variable
- do not use gradients as a default component treatment; gradient/scrim is valid for media legibility overlays

---

## 3. Typography

Tonal's exact production typeface is not verified from screenshot evidence.

Fitness Phase-A proxy:
- `Pretendard`
- use tabular/stable numeral behavior where available for metrics

### Canonical provisional text roles
- `Type/Heading/Question = 24 / 30, 700`
- `Type/Heading/Screen = 24 / 30, 700`
- `Type/Heading/Section = 20 / 24, 700`
- `Type/Heading/Card = 17 / 22, 600–700`
- `Type/Nav/Title = 16 / 22, 600`
- `Type/Body/Primary = 15 / 21, 400`
- `Type/Body/Secondary = 13 / 18, 400`
- `Type/Label/Primary = 13 / 16, 600`
- `Type/Label/Caps = 11 / 14, 700, uppercase, tracking ~+0.6`
- `Type/Action/Primary = 12 / 16, 700, uppercase where the Tonal family uses it`
- `Type/Caption = 11 / 15, 400–500`

### Metric roles
- `Type/Metric/XL = 40 / 44, 800`
- `Type/Metric/L = 30 / 34, 800`
- `Type/Metric/M = 22 / 26, 700`
- `Type/Metric/Unit = 13 / 16, 600`

### Typography behavior
- hierarchy relies mainly on weight, size, and whitespace
- large numeric values are a defining visual characteristic
- metric descriptors often use compact uppercase labels
- units remain visually smaller than their numeric values
- onboarding question/helper may center; ordinary content remains left aligned
- do not center explanatory paragraphs merely for decoration
- avoid long bold paragraphs

---

## 4. Shape, radius, border, and elevation

### Radius variables
- `Radius/None = 0`
- `Radius/Rect = 4`
- `Radius/Dialog = 4`
- `Radius/SheetTop = 20` — provisional
- `Radius/Pill = 999`
- `Radius/Circle = 999`

### Shape rules
- standard buttons/cards/modules are square or subtly rounded
- large rounded consumer-style cards are not the default
- centered dialogs remain rectangular with tiny radius
- bottom sheets may use a larger top-only radius
- pills/circles are reserved for toggles, segmented controls, avatars, rings, and genuine circular controls

### Border/elevation
- default divider: 1 pt subtle neutral
- default card shadow: none
- prefer background separation, spacing, and dividers to decorative elevation

---

## 5. Dimension and icon variables

### Icon slots
- `Size/Icon/16 = 16`
- `Size/Icon/20 = 20`
- `Size/Icon/24 = 24`
- `Size/Icon/28 = 28`

### Interaction target
- `Size/Touch/Minimum = 44`

Visual icon size may be 16–24 while the interactive wrapper remains at least 44 where needed.

### Control dimensions
All remain provisional until Figma visual QA:
- `Size/Nav/TopContent = 48`
- `Size/Nav/BottomContent = 76`
- `Size/Toggle/W = 52`
- `Size/Toggle/H = 32`
- `Size/Stepper/W = 124`
- `Size/Stepper/H = 38`
- `Size/Button/Compact/W = 192`
- `Size/Button/Action/H = 54`

### Placeholder rule
Until final Fitness iconography/media is supplied:
- icons use `Placeholder/IconSlot`
- media uses `Placeholder/Media`
- do not copy Tonal proprietary icon artwork
- do not choose arbitrary substitute icons just to make a screen look finished

---

## 6. Fixed / Hug / Fill contract

Sizing is decided independently on horizontal and vertical axes.

### Use FILL when
- a row/card/section spans the available content width
- a text column takes remaining width beside a fixed leading/trailing control
- a divider follows the parent content width
- a chart/section follows a responsive parent

### Use HUG when
- size is content-driven
- a vertical stack grows with text/row count
- labels/buttons/chips remain compact by content

### Use FIXED when
- geometry is intentionally stable
- an element is a slot/control rather than content-driven
- resizing would break alignment or visual identity

### Canonical mixed-axis patterns
- compact CTA: `FIXED / FIXED-or-min-height`
- content CTA: `FILL / FIXED-or-min-height` within an intentional action wrapper
- choice card: `FILL / HUG + min-height`
- settings row: `FILL / HUG + min-height`
- movement row: `FILL / HUG + min-height`
- paragraph: `FILL / HUG`
- icon/toggle/stepper: `FIXED / FIXED`
- hero: `FILL / FIXED-or-aspect-controlled by variant`
- chart region: `FILL / FIXED by chart pattern`
- carousel viewport: `FILL`; inner horizontal item stack `HUG`

Do not use `FILL` inside an unresolved same-axis `HUG` parent if it causes ambiguous/collapsed sizing. Do not freeze screenshot heights where content should naturally grow.

---

## 7. Alignment contract

- onboarding question/helper: center
- choice-card content: left
- normal body/detail/settings/form content: left
- button label: center
- top-bar title: optically centered
- trailing values/numeric columns: right when scanning/comparison benefits
- icon + label rows: vertically centered
- metric value + unit: baseline aligned
- dense numeric columns: non-wrapping and consistently aligned across rows

Text alignment and container alignment are separate decisions and must both be encoded correctly.

---

## 8. Navigation components

### `Navigation/TopBar`
Properties:
- `Surface = Light | Dark | Overlay`
- `Leading = Back | Close | None`
- `Trailing = Text | IconSlot | Multiple | None`
- `Title = Center | Contextual`

Sizing:
- width `FILL`
- content height `48`
- leading/trailing hit wrapper minimum `44 x 44`
- title region remains visually independent enough to preserve optical centering

Absolute positioning is allowed inside this component only when required to preserve genuinely independent center-title behavior.

### `Navigation/BottomBar`
Tonal reconstruction reference:
- black surface
- 5 equal items
- active icon/label high contrast
- inactive icon/label muted
- icon visual size `20–24`
- label `Type/Caption` or compact label

Figma:
- width `FILL`
- fixed content height ~`76` plus platform safe-area handling
- each item horizontal `FILL`

This does **not** pre-decide the final Fitness IA.

### `Tab/Underline`
Properties:
- `State = Active | Inactive`
- `Layout = Equal | Content`

Behavior:
- flat text tabs
- active dark text + `2–3` underline
- inactive gray
- no pill/card surface

---

## 9. Action components

### `Button/Primary/Compact`
Use for centered compact Tonal-style actions.

Provisional geometry:
- `192 x 54`
- radius `Radius/Rect`
- near-black fill
- white action label

States:
- Default
- Pressed
- Disabled
- Loading

Figma:
- horizontal `FIXED`
- vertical `FIXED` or min-height
- label `HUG`

### `Button/Primary/Content`
Use for wider workout/program/filter content actions.

Figma:
- width `FILL` inside its action wrapper
- height `54`
- same rectangular visual language as compact family

### `Button/Primary/Inverse`
- white/light filled action on dark/media surface
- black/dark text
- use only when surface context justifies it

### `Button/Secondary/Outline`
- transparent/light surface
- subtle 1 pt border
- dark action label
- rectangular, low radius
- min-height `48–52`

### `Button/Text/Neutral`
- no decorative container by default
- keep a sufficient interaction wrapper where actionable

### `Button/Text/Destructive`
- destructive semantic text color
- no heavy filled destructive button by default in the reconstruction baseline

---

## 10. Selection and form components

### `ChoiceCard/Single`
Properties:
- `State = Default | Selected | Disabled`
- `Content = LabelOnly | LabelHelper`
- `Control = Radio`

Geometry:
- width `FILL`
- height `HUG + min-height`
- label-only min-height `56`
- helper min-height `90`
- horizontal padding `20`
- vertical padding `16`
- label/helper gap `4–8`
- trailing control visual slot `20–24`, fixed

States:
- default: light gray + dark text
- selected: black + white text
- disabled: lighter neutral + tertiary text

### `ChoiceCard/Multi`
Shares the same base geometry.
- `Control = Check`
- selected uses a square check marker

### `Control/Radio`
- fixed `20–24`
- circular
- selected/unselected/disabled properties

### `Control/Check`
- fixed `20–24`
- square
- selected/unselected/disabled properties

### `Control/Toggle`
- fixed `52 x 32`
- ON = positive/mint track + light thumb
- OFF = pale neutral track
- pill geometry is intentionally isolated to this control family

### `Control/Stepper`
- fixed approximately `124 x 38`
- minus / centered value / plus
- pale neutral rectangular surface
- value non-wrapping
- visual control can remain compact while tap wrappers reach the minimum interaction target

### `Control/Segmented/Pill`
- rounded neutral track
- equal-width segments
- selected = black + white
- unselected = neutral + dark
- use only for genuine segmented-mode switching

### `Control/ModeTile`
- rectangular selection tiles
- selected = black + white
- unselected = gray + dark
- do not merge with the pill segmented component

### `Input/Underline`
Structure:
- compact label
- input text
- 1 pt underline
- optional counter/trailing metadata

Figma:
- field `FILL / HUG`
- text width `FILL`
- text height `HUG`

States:
- Default
- Focus
- Filled
- Error
- Disabled

---

## 11. Rows and structural components

### `Row/Settings`
Properties:
- `Trailing = Chevron | Value | Toggle | External | None`
- `Tone = Default | Destructive | Disabled`
- `Helper = True | False`

Geometry:
- width `FILL`
- vertical `HUG + min-height`
- simple min-height `54`
- helper min-height `70`
- left content `FILL`
- trailing `HUG` or `FIXED`
- 1 pt divider

### `Row/Movement`
Properties:
- `Leading = Thumbnail | Timer | Placeholder`
- `Trailing = Chevron | Drag | None`
- `Meta = SingleLine | MultiLine`

Geometry:
- width `FILL`
- vertical `HUG + min-height`
- min-height `76`
- leading visual slot `48` provisional
- gap `12–16`
- trailing slot `20–24`

Long names may wrap without shrinking the trailing slot.

### `Workout/BlockHeader`
- black full-width surface
- uppercase block label
- optional compact set/warm-up metadata
- optional overflow slot
- width `FILL`
- min/fixed height `54`
- horizontal padding `16–20`

### `Dialog/Center`
Properties:
- `Body = None | Text | CustomSlot`
- `Secondary = None | TextAction`
- `Tone = Default | DestructiveConfirmation`

Geometry:
- dimmed scrim fills viewport
- dialog max/reference width `342` on 390 frame
- vertical `HUG`
- content padding `28–40`
- radius `Radius/Dialog`

### `Sheet/Action`
- scrim
- bottom-aligned action stack
- width `FILL`
- vertical `HUG`
- larger top radius allowed
- cancel may be visually separated from the main option group

### `Feedback/Toast`
- black surface
- white sentence-case message
- width `FILL` within `16–24` inset
- vertical `HUG + min-height ~44`
- padding `12–16`

---

## 12. Dashboard and metric patterns

### `Dashboard/PageShell`
- quiet header zone
- `Color/Surface/Canvas/Subtle` main canvas
- white modules
- black bottom nav where the reference pattern uses it

### `Dashboard/FeatureMetric`
- width `FILL`
- vertical `HUG` + pattern min-height
- large title/value
- compact uppercase label
- optional illustration/chart/action
- no default shadow

### `Dashboard/MetricGrid2`
- parent horizontal `FILL`
- two children `FILL`
- equal widths
- gap `8–12`
- shared min-height/content constraints

This is the only multi-column layout currently promoted from screenshot evidence.

### `Metric/ValueUnit`
- horizontal Auto Layout
- value `HUG`
- unit `HUG`
- baseline aligned
- value uses Metric XL/L/M; unit uses Metric Unit

### `Stats/ValueList`
- section heading + optional helper
- rows with thin dividers
- left label `FILL`
- right value `HUG`
- optional semantic delta badge
- no rounded wrapper per row

---

## 13. Media and content patterns

### `Content/MediaCard/Landscape`
- fixed/constrained aspect media
- bottom gradient/scrim
- category/metadata label
- title
- duration/level metadata
- tiny radius only if visible

### `Content/MediaCard/Portrait`
Separate aspect family for education/content rails.

### `Content/MediaCarousel`
- viewport width `FILL`
- inner horizontal stack `HUG`
- card width fixed/constrained
- consistent gap
- deliberate partial next-card visibility

### `Hero/ProgramWorkout`
Properties:
- `Type = Program | Workout | Exercise`
- `Media = Image | VideoPlaceholder`
- `Tone = LightOverlay | DarkOverlay`

Structure:
- full-width media
- top action slots overlay media
- lower title/metadata overlay
- gradient/scrim for readability
- lower body begins directly below the media

Do not define one universal hero height. Each type uses an explicit fixed/aspect-controlled variant.

---

## 14. Product-detail patterns

### `Program/DetailComposition`
Typical order:
1. hero
2. compact coach/metadata strip
3. description / Show More
4. supporting metadata
5. optional goals/progress
6. workouts rail
7. similar-program rail
8. prominent join/start action

### `Workout/BlockList`
- reuses `Workout/BlockHeader`
- reuses `Row/Movement`
- supports repeated blocks and editable movement lists
- do not duplicate row structures locally

### `Exercise/InfoDetail/MediaPresent`
- optional media/illustration
- targeted-muscle area where product needs it
- section headings
- instructional text
- benefits/supporting content

### `Exercise/InfoDetail/NoMedia`
Fitness-required variant:
- remove media block completely
- collapse layout naturally
- no empty fixed media rectangle

Fitness `DEC-011` remains authoritative: exercise detail is text-first and media-optional.

---

## 15. History and chart patterns

### `History/MetricChart`
Typical order:
1. top navigation
2. large metric + unit
3. metric label
4. divider
5. section heading
6. underline tabs
7. date/range label
8. chart
9. divider / next section
10. stats/details

Layout:
- white canvas
- ~24 page inset
- chart width `FILL`
- chart height `FIXED` by chart variant
- sparse axes/grid
- one dominant data color

Do not invent one universal chart type or one universal chart height.

### `History/ExerciseSetTable`
- width `FILL`
- rows `FILL / HUG + min-height`
- left set label
- optional compact mode badge
- stable numeric columns
- numeric values do not wrap
- unit labels use compact type
- positive/PR emphasis may use `Color/Accent/Positive`

Do not position each numeric cell manually with independent x/y coordinates.

---

## 16. Active-session rule

Tonal's dark video-first active-session UI is **not** the Fitness active-logging functional baseline.

It may inform only:
- dark/media surface treatment
- overlay typography
- progress treatment
- high-contrast controls when a real media surface exists

Fitness active logging remains Hevy-led functionally and is styled with these Tonal foundations.

---

## 17. Figma variable/style binding contract

Create and bind, where supported:
- all semantic color roles
- spacing scale
- radius roles
- icon sizes
- repeated control dimensions
- typography styles/variables

Defining variables is not enough. Reusable components must **actually bind** their fills, strokes, radii, text styles, padding/gap/dimensions where supported.

Repeated raw values in reusable components are a QA failure unless:
- the property cannot be bound
- the value is intentionally one-off and documented
- the node is an explicit reconstruction experiment not yet promoted

---

## 18. Figma component naming

Use semantic slash-separated names.

Canonical minimum set:
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

Pattern names:
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

---

## 19. Figma Examples page

Create native Figma compositions using real system components and bound variables.

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

Examples teach correct composition. They are not screenshots and are not new Fitness product decisions.

---

## 20. Required QA and freeze gate

### Foundation preflight
Before component generation:
- variables/styles exist once with semantic names
- no duplicate roles
- reconstructed values match this spec

### Component/pattern QA
Run the mandatory gate in `17_FIGMA_AGENT_EXECUTION_QA.md`:
1. **QA-1 Structure / Auto Layout**
2. **QA-2 Design-system / Binding**
3. **QA-3 Visual / Reference / Product**

QA-3 becomes mandatory for representative reconstructions before Phase-A freeze; QA-1/2 must already pass before downstream pattern expansion.

Representative cross-family reconstructions must include:
- onboarding
- dashboard/home
- program/workout
- exercise/detail
- settings/profile

Phase A is ready for Fitness customization only when:
- foundations are reusable and bound
- minimum component set exists
- patterns/examples reuse system instances
- Fixed/Hug/Fill and text wrapping survive narrow/baseline/wide stress tests
- representative screens visually reproduce the Tonal system consistently
- no major local raw-value drift exists
- QA-1 / QA-2 / QA-3 pass

---

## 21. Known provisional values

Still subject to screenshot-led Figma tuning:
- exact font family and Pretendard weight mapping
- exact hex colors
- exact hero dimensions/aspect ratios
- exact chart heights/annotation offsets
- exact bottom-sheet top radius
- exact motion timing/easing
- exact icon artwork
- final Fitness dark-mode policy

These uncertainties do not block Figma construction. They require global token/component correction when visual QA identifies a systematic mismatch.