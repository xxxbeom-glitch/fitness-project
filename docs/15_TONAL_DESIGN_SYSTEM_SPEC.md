# 15 TONAL DESIGN SYSTEM SPEC

**Status:** PROVISIONAL RECONSTRUCTION — PHASE A
**Updated:** 2026-08-28

## Purpose

This document is the implementation-facing visual specification reconstructed from Tonal screenshots accessible through Mobbin.

It is intentionally a **replication baseline** for visible system behavior before Fitness-specific customization begins.

Important:
- this is **not** Tonal's official internal design-system source
- values below are screenshot-derived approximations chosen to reproduce the visible system consistently
- every estimated value may be tuned after Figma visual QA against reference screenshots
- product behavior remains governed by Fitness GitHub policy, not Tonal

Reference evidence and screen links live in `docs/14_TONAL_RECONSTRUCTION_BASELINE.md`.

---

## 1. Base frame and layout grid

### Base mobile canvas
**ESTIMATED TOKEN**
- reference design frame: `390 x 844`
- treat 390 pt width as the reconstruction baseline only
- all production components must use responsive width / fill-container rules rather than hard-coded screen width

### Horizontal layout
**INFERRED / ESTIMATED TOKEN**
- page horizontal margin: `24`
- compact/internal row margin: `16`
- standard full-width content region on 390 frame: `342`
- primary alignment rule: left edges of titles, cards, rows, charts, and sections should snap to the same 24 pt content line unless the screen intentionally uses centered onboarding composition

### Vertical rhythm
**ESTIMATED TOKEN SCALE**
Use a 4 pt base scale with the following working set:

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80`

Observed usage hypothesis:
- 4: micro separation / icon-text detail
- 8: compact control spacing
- 12: row/card internal secondary separation
- 16: normal component padding / row separation
- 20: medium content separation
- 24: standard page margin / card padding / section gap
- 32: major internal section gap
- 40: screen-section separation
- 48+: onboarding composition / large whitespace / hero separation

### Alignment behavior
**OBSERVED / INFERRED**
- onboarding questions: centered text block
- utility/settings/detail screens: left-aligned content
- top-navigation titles: centered unless screen composition clearly uses a large left title
- metric values: visually align by baseline and column, not decorative centering
- list rows: left-label / right-value or chevron alignment

---

## 2. Color system

These values are **ESTIMATED TOKENS** selected to reproduce repeated visible relationships. They must be visually QA'd in Figma.

### Neutral core
- `color.bg.canvas = #F4F4F5`
- `color.bg.surface = #FFFFFF`
- `color.bg.surfaceSubtle = #E4E4E6`
- `color.bg.surfaceMuted = #D6D6D9`
- `color.ink.primary = #050505`
- `color.ink.secondary = #66666B`
- `color.ink.tertiary = #96969B`
- `color.border.subtle = #DDDDDF`
- `color.border.strong = #BFC0C3`

### Accent roles
- `color.accent.training = #43E6A0`
- `color.accent.trainingSoft = #D5F8EA`
- `color.accent.info = #3E67E8`
- `color.accent.danger = #E8345A`

### Color-use rules
**OBSERVED / INFERRED**
- black/white/neutral dominate the product
- accent color is functional, not decorative
- green is primarily training/progress/success/readiness related
- red/pink is destructive or negative-state oriented
- blue is occasional informational/progress emphasis, not a global brand fill
- do not use gradients as a default component treatment
- selected choices frequently use black fill + white text rather than accent fill

---

## 3. Typography

### Font family
Tonal's exact typeface is not verified from screenshot evidence.

For Fitness reconstruction, use:
- `Pretendard` as the Korean/Latin implementation proxy
- numeric alignment should favor stable/tabular numerals where technically available

Do not claim Pretendard is Tonal's original font.

### Working type scale
**ESTIMATED TOKENS**

- `display.metric.xl`: 48 / 52, 700-800
- `display.metric.lg`: 40 / 44, 700-800
- `heading.screen`: 28 / 32, 700
- `heading.section`: 20 / 24, 700
- `heading.card`: 17 / 22, 600-700
- `body.primary`: 15 / 21, 400
- `body.secondary`: 13 / 18, 400
- `label.primary`: 13 / 16, 600-700
- `label.caps`: 11 / 14, 700, uppercase, letter spacing +0.4 to +0.8
- `caption`: 11 / 15, 400-500
- `button.primary`: 13 / 16, 700, uppercase where matching the Tonal pattern

### Typography behavior
**OBSERVED / INFERRED**
- hierarchy depends more on weight/size/whitespace than color variety
- large numeric values are visually dominant
- metric descriptor labels often use compact uppercase styling
- helper copy is low-contrast gray
- onboarding titles are large, centered, and usually 2-3 lines maximum
- avoid long bold paragraphs

---

## 4. Shape, radius, border, elevation

### Radius
**ESTIMATED TOKENS**
- `radius.none = 0`
- `radius.xs = 2`
- `radius.sm = 4`
- `radius.md = 8`
- `radius.sheet = 16`
- `radius.round = 999`

### Rules
**OBSERVED / INFERRED**
- default Tonal surfaces are square or only subtly rounded
- do not use large rounded cards by default
- CTA buttons are rectangular, not pill-shaped
- bottom sheets may use a visibly larger top radius
- circular controls/avatar/metric rings are intentional exceptions

### Borders and elevation
- rely on background separation and thin dividers before shadows
- default card shadow: none
- divider: 1 pt subtle neutral
- if elevation is required, keep it minimal and state-driven rather than decorative

---

## 5. Icon and touch-target rules

The Fitness reconstruction intentionally uses **icon placeholders** until the final icon system is selected.

### Icon slots
**ESTIMATED TOKENS**
- compact icon: `16 x 16`
- default icon: `20 x 20`
- navigation/action icon: `24 x 24`
- large utility icon: `28 x 28`

### Touch targets
- minimum interactive target: `44 x 44`
- visual icon may remain 20-24 while the interaction frame is 44

### Placeholder rule
In Figma:
- use a square placeholder frame named `ICON_SLOT`
- keep the expected icon size explicit in the component property or layer name
- do not draw a proprietary Tonal icon
- do not use random substitute icons that may distort spacing

---

## 6. Navigation primitives

### Top navigation
**INFERRED / ESTIMATED**
- compact top bar height target: `56`
- back/action hit area: `44`
- centered title uses `body/heading-card` range rather than oversized page-title styling
- use thin/no divider depending on context

### Bottom navigation
**OBSERVED / INFERRED**
- main app surfaces use a visually heavy black bottom nav
- active item is high contrast; inactive items are muted
- default icon slot: `24`
- label uses compact caption/label sizing
- approximately 5 destinations fit the observed Tonal pattern; Fitness IA may differ if product policy requires it

### Tabs
**OBSERVED / ESTIMATED**
- text tabs are flat
- active tab indicated primarily by black text + underline
- underline thickness target: `2`
- avoid pill tabs unless the reference family explicitly shows segmented controls

---

## 7. Core buttons

### `Button / Primary / Black`
**ESTIMATED**
- height: `52-56`
- horizontal padding: `24-28`
- fill: near-black
- label: white, strong weight, often uppercase
- radius: `0-4`

Variants:
- Default
- Pressed
- Disabled
- Loading

Pressed state:
- keep same geometry
- modest luminance change only

Disabled state:
- muted neutral fill + low-contrast text

### `Button / Secondary / Light`
- light/white surface
- black label
- subtle border only if necessary for separation

### `Button / Text`
- no container by default
- used for sparse utility/legal actions

---

## 8. Choice and form components

### `ChoiceCard / Single`
Primary onboarding selection pattern.

**ESTIMATED**
- width: fill container
- min height: `88`
- common height range: `96-112`
- padding: `16-20`
- radius: `0-4`
- default fill: light neutral
- selected fill: black
- selected text: white
- trailing selection slot: `20-24`

Variants:
- Default
- Pressed
- Selected
- Disabled

### `ChoiceCard / Multi`
Same geometry, with checkbox-slot behavior rather than radio-slot behavior.

### `Input / Underline`
**OBSERVED / INFERRED**
- sparse field presentation
- text sits over a thin bottom rule rather than inside a large rounded container
- label/caption above field uses compact uppercase or subdued label treatment

Variants:
- Default
- Focus
- Filled
- Error
- Disabled

### `Toggle`
- compact native-like geometry
- do not over-style
- active may use functional green where appropriate

### `NumericSelector / Large`
For day count / body values / high-emphasis selection.
- large center value
- neighboring values fade in gray
- value remains the dominant object on screen

### `Stepper / +/-`
- compact neutral control
- numeric value centered between minus/plus
- optimized for utility rather than decorative styling

---

## 9. Cards, rows, and content surfaces

### `Surface / Module`
- white surface on light-neutral canvas
- low radius
- no default shadow
- padding commonly 16-24

### `ListRow / Standard`
**ESTIMATED**
- min height: `52-56`
- horizontal padding: `24` page / `16` inside module
- 1 pt bottom divider
- left content + optional secondary text
- right value, chevron, switch, or icon slot

### `Metric / Stat`
- large number first
- uppercase compact descriptor under/near value
- optional comparison/accent label
- avoid heavy enclosing card if whitespace alone can group the metric

### `WorkoutBlock / Header`
- uppercase bold block label
- optional small accent/progress line
- keeps workout structure visually mechanical and easy to scan

### `MovementRow`
- flat list row
- optional media/icon slot left
- exercise name + reps/metadata
- trailing chevron/action
- minimal decoration

---

## 10. Media and hero patterns

### `Hero / MediaDetail`
**OBSERVED / INFERRED**
- image/video occupies the upper portion of the screen
- dark overlay or bottom gradient ensures white text readability
- title and metadata sit directly on the media
- lower body returns to white/light-neutral content surface

### Hero metadata hierarchy
1. content title
2. training category / duration / level metadata
3. supporting icon slots

Do not require final media during design-system construction. Use a replaceable placeholder media block.

---

## 11. Charts and progress visuals

### Chart rules
**OBSERVED / INFERRED**
- thin/minimal axes
- light grid or no grid
- one dominant data color
- large numeric summary outside/above the chart
- chart should support the metric rather than become the visual center of every page

### Progress/status colors
- green = positive/progress/readiness
- neutral gray = inactive/no-data
- red/pink = warning/fatigue/destructive

---

## 12. Sheet / modal pattern

### `Sheet / Bottom`
**INFERRED / ESTIMATED**
- high-radius only at top corners (`16` working value)
- light surface
- optional grabber centered at top
- screen behind may darken
- actions remain simple and high contrast

Do not use modal surfaces for routine operations that can remain inline.

---

## 13. Required component variants

Every reusable component should define only variants that correspond to real interaction states.

Minimum common states:
- Default
- Pressed
- Selected / Active
- Disabled
- Loading where actionable
- Error where data-entry related
- Success / Completed where training workflow requires it

Avoid creating decorative variant matrices with no product behavior behind them.

---

## 14. Figma naming convention

Use slash-separated semantic names.

Examples:
- `Button/Primary/Black`
- `Button/Secondary/Light`
- `ChoiceCard/Single`
- `ChoiceCard/Multi`
- `Input/Underline`
- `Navigation/TopBar`
- `Navigation/BottomBar`
- `Tab/Underline`
- `Row/Settings`
- `Row/Movement`
- `Metric/Stat`
- `Workout/BlockHeader`
- `Control/Stepper`
- `Control/Toggle`
- `Media/Hero`
- `Sheet/Bottom`
- `Placeholder/IconSlot`

---

## 15. Reconstruction QA gate

Before Fitness customization begins:

1. Build foundations and components from this spec.
2. Recreate at least one representative screen from each major Tonal family:
   - onboarding
   - home/dashboard
   - workout/program
   - exercise/detail
   - settings/profile
3. Compare side-by-side against Mobbin screenshot evidence.
4. Tune estimated tokens until the reconstructed system produces a consistent Tonal-like visual result across multiple screen families.
5. Freeze the **Phase-A reconstruction baseline** only after cross-screen consistency is acceptable.
6. Then begin Fitness-specific customization while preserving the useful underlying system.

## Known uncertainty

The following remain estimated until visual QA:
- exact font family
- exact font sizes/weights
- exact hex values
- exact spacing/radius tokens
- exact nav heights
- exact icon artwork
- motion timings/easing

These uncertainties do not block reconstruction; they require consistent approximation rather than false precision.