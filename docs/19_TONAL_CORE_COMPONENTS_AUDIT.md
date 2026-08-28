# 19 TONAL CORE COMPONENTS AUDIT

**Status:** PHASE-A / BATCH-02 — CORE COMPONENTS PROVISIONAL
**Updated:** 2026-08-28

## Purpose

This batch reconstructs Tonal's recurring component families after the Batch-01 foundations audit.

Scope:
- primary / secondary / text / destructive actions
- choice cards and selection controls
- top navigation
- bottom navigation
- underline tabs
- segmented controls
- toggles
- stepper / numeric control
- settings rows
- workout movement rows
- workout block headers
- centered dialogs
- action sheets
- toast / transient feedback
- Figma component-property and sizing rules

This document does **not** claim Tonal's internal component API or official token values. It records screenshot-derived structure and provisional Figma reconstruction values.

Evidence labels:
- **OBSERVED** — directly visible repeatedly
- **INFERRED** — repeated relationship strongly suggests a common rule
- **ESTIMATED** — working value selected for visual reconstruction

Confidence:
- **HIGH** — repeated across several independent screens/states
- **MEDIUM** — pattern is clear but exact dimensions are uncertain
- **LOW** — do not freeze globally yet

---

## 1. Evidence set — Batch 02

Targeted Mobbin searches returned more than 40 unique Tonal screens after de-duplicating repeated results across navigation, workout editor, exercise setup, action, and modal families.

Representative evidence:

### Navigation / tabs / progress
- https://mobbin.com/screens/74e51c99-0993-4408-9ef7-fcd0a2ebd96c
- https://mobbin.com/screens/8815ce5b-8321-434d-afd7-3a8f55f81542
- https://mobbin.com/screens/7b996db9-f556-4656-aea3-ac8e76be62aa
- https://mobbin.com/screens/49b9079a-87e6-434d-802e-25a9a9858077
- https://mobbin.com/screens/5e9461c9-d902-4e37-ad82-906753bc7583

### Workout / exercise controls
- https://mobbin.com/screens/582952b6-cb84-48e8-a4f5-6a160766c57d
- https://mobbin.com/screens/a8be9862-08b3-4282-8402-fd1129dd399d
- https://mobbin.com/screens/2cc18b5a-683e-48be-9f56-48be40596668
- https://mobbin.com/screens/636cb1dd-ff3c-4763-b4f0-528712e3bff4
- https://mobbin.com/screens/c281932e-ae03-4adc-ae7f-98cb8db9421e
- https://mobbin.com/screens/bc9a99af-a7d0-4e91-be74-a0d082294995

### Action / confirmation families
- https://mobbin.com/screens/1a246c13-488a-4eea-bb68-7df0438d5b01
- https://mobbin.com/screens/402146f3-d818-4606-b6c7-41712c58f66e
- https://mobbin.com/screens/7192fd86-8d9a-4253-955f-4395685bf54d
- https://mobbin.com/screens/3cb90e1b-ae24-4281-b173-022d40538b42
- https://mobbin.com/screens/65414102-304a-4fd7-94a7-1e9c500f792a

The full screenshots are intentionally not stored in the public repository.

---

## 2. Component-family principle

**INFERRED / HIGH**

Tonal does not appear to use one universal button/card geometry everywhere. The system is more coherent when reconstructed as a small number of distinct component families sharing typography, color, and spacing rules.

Therefore Figma must not create a single `Button` with arbitrary width overrides. Build explicit variants/families where the visible use case is structurally different.

Recommended naming:
- `Button/Primary/Compact`
- `Button/Primary/Content`
- `Button/Primary/Inverse`
- `Button/Secondary/Outline`
- `Button/Text/Neutral`
- `Button/Text/Destructive`

Likewise, selection controls should separate:
- onboarding choice cards
- checkbox/radio controls
- compact segmented selectors
- workout-mode tiles

---

## 3. Primary action buttons

### 3.1 `Button/Primary/Compact`
**OBSERVED / HIGH**

Common in onboarding, confirmation, share, and compact modal actions.

Visual behavior:
- black fill on light surfaces
- white uppercase action label
- strongly rectangular
- tiny radius
- centered on page rather than forced full width

**ESTIMATED / MEDIUM-HIGH**
- width: `188–196`
- height: `52–56`
- radius: `2–4`
- horizontal padding if HUG variant is needed: `28–32`
- label: `Type/Action/Primary`

Figma:
- default reconstruction variant: `FIXED` width / `FIXED or MIN` height
- label `HUG`
- do not convert to pill

States:
- `Default`
- `Disabled`
- `Pressed` — visually subtle; exact pressed treatment not certifiable from static screenshots
- `Loading` — product-system state required even if screenshot evidence is weak; preserve same geometry

### 3.2 `Button/Primary/Content`
**OBSERVED / HIGH**

Seen in workout editor, program schedule, filter result, and content actions.

Unlike onboarding compact CTA, this family is wider and often aligns with the active content region.

**ESTIMATED / MEDIUM**
- width: content-dependent, usually `FILL` inside a narrower action container or approximately `240–290` on 390 reference frame
- height: `52–56`
- radius: `2–4`

Figma:
- width `FILL` within its action wrapper
- wrapper width may be constrained according to pattern
- height fixed/min-height

Examples include `EDIT YOUR WORKOUT`, `SAVE`, `SHOW 1 RESULT`.

### 3.3 `Button/Primary/Inverse`
**OBSERVED / MEDIUM-HIGH**

On dark full-screen states Tonal sometimes uses a white filled action with black text.

Figma property:
- `Tone = DarkOnLight | LightOnDark`

Do not use inverse style merely for visual variety; only on dark-surfaces where reference composition supports it.

---

## 4. Secondary / text actions

### 4.1 `Button/Secondary/Outline`
**OBSERVED / HIGH**

Used for lower-priority actions such as `CONTINUE WITHOUT A SCHEDULE`, `DUPLICATE WORKOUT`, progress/detail actions.

Visual behavior:
- transparent/white surface
- subtle gray 1px border
- uppercase dark label
- rectangular, very small radius

**ESTIMATED**
- min-height `48–52`
- border `1`
- radius `2–4`

Figma:
- width `FILL` or fixed according to action wrapper
- height fixed/min-height
- bind border to `Color/Divider/Strong` or dedicated action-border semantic variable

### 4.2 `Button/Text/Neutral`
**OBSERVED / HIGH**

Examples: `CANCEL`, small inline actions, top-bar `Save`, `Reset`, `Done`, `About`.

Rules:
- no decorative container unless hit target wrapper is needed
- visible text `HUG`
- interaction wrapper at least `44x44` where touch action
- text alignment follows location

### 4.3 `Button/Text/Destructive`
**OBSERVED / HIGH**

Examples: `DELETE WORKOUT`, `Log Out`, delete-video actions.

Rules:
- destructive red/pink semantic text
- no heavy red filled button by default in the Tonal reconstruction baseline
- preserve action emphasis through color and spacing rather than decoration

---

## 5. Choice cards

Batch 01 geometry is confirmed by additional screens.

### `ChoiceCard/Single`
**OBSERVED / HIGH**
- width `FILL`
- height `HUG` + min-height
- left content `FILL`
- trailing selection control fixed
- tiny radius

State model:
- `Default`: gray surface, primary black text
- `Selected`: black surface, white text
- `Disabled`: lighter gray, tertiary text

Property proposal:
- `State = Default | Selected | Disabled`
- `Content = LabelOnly | LabelHelper`
- `Control = Radio | Check`

### `ChoiceCard/Multi`
**OBSERVED / HIGH**

Multi-select state uses a trailing square check control while retaining the same card geometry.

Do not build a separate visual language for multi-select; share base structure.

---

## 6. Selection controls

### Radio
**OBSERVED / HIGH**
- circular control
- approximately `20–24`
- gray/off state
- selected state retains circular structure with internal selected mark

### Checkbox
**OBSERVED / HIGH**
- square control approximately `20–24`
- selected state near-black/dark gray with white check
- unselected/disabled light gray

Figma:
- fixed square/circle
- never `HUG`
- create component properties rather than swapping arbitrary vectors
- icon itself remains placeholder/system primitive until final icon set is supplied

---

## 7. Toggle

**OBSERVED / HIGH**

Repeated across profile/privacy/exercise setup.

Behavior:
- native-like compact pill is one of the valid rounded exceptions in Tonal
- ON = bright mint/green track + white circular thumb
- OFF = pale gray track + white/light thumb

**ESTIMATED / MEDIUM**
- overall: approximately `50–54 x 30–32`
- thumb: approximately `26–28`

Figma:
- fixed width/height
- `State = On | Off | DisabledOn | DisabledOff` if required by actual product use
- bind ON track to training/positive accent variable

Do not apply the toggle's pill radius to unrelated buttons/cards.

---

## 8. Compact stepper / numeric control

**OBSERVED / HIGH**

Used for set/repetition counts and modal set-number changes.

Structure:
- minus action
- emphasized numeric value
- plus action
- shared pale-gray rectangular control surface

**ESTIMATED / MEDIUM**
- total control width `116–128`
- height `36–40`
- action visual slots `32–40`
- number region centered and non-wrapping

Figma:
- parent horizontal Auto Layout
- overall `FIXED`
- minus/value/plus regions fixed or flex ratios that preserve central number
- interaction wrappers minimum 44 where product use allows; if visual control is smaller, use invisible/outer hit-area wrapper rather than enlarging visual geometry

Property proposal:
- `State = Default | Disabled`
- `Density = Compact`

Do not make stepper width responsive to the number unless the product later requires very large numeric strings.

---

## 9. Segmented controls

There are at least two distinct families.

### 9.1 `Segmented/Pill`
**OBSERVED / HIGH**

Example: `Movement Demo / Muscle View`.

Structure:
- pale-gray rounded track
- selected segment black with white text
- unselected segment transparent/gray with dark text
- equal-width segments

Figma:
- track width `FILL` within local constrained area or fixed reference width
- segments `FILL` equally
- height fixed
- `Selected = Left | Right | ...`

This is a legitimate pill-shaped Tonal component and should remain isolated to segmented control use.

### 9.2 `ModeTile`
**OBSERVED / HIGH**

Exercise `Weight Modes` / `Assistance` controls are rectangular tiles rather than pill segments.

State:
- selected = black surface + white content
- unselected = gray surface + dark content
- disabled = muted

Do not merge `ModeTile` and `Segmented/Pill` into one component family solely because both select an option.

---

## 10. Underline tabs

**OBSERVED / HIGH**

Repeated in history, strength/power/volume/workouts, filter/sort contexts.

Visual behavior:
- text-led tab
- active tab dark
- inactive tabs gray
- selected underline approximately `2–3` high
- no pill or card container

### Figma reconstruction
- tab row width `FILL`
- tab items: either equal `FILL` for symmetric sets or `HUG` with controlled gap where screenshot supports it
- label `HUG`
- active underline fixed height and width relative to label/segment
- row height `44–48` provisional

Property proposal:
- `State = Active | Inactive`
- `Layout = Equal | Content`

Do not hard-code tab width independently on each screen.

---

## 11. Top navigation

Batch 01 is confirmed and expanded.

### `Navigation/TopBar`
Variants:
- `Surface = Light | Dark | Overlay`
- `Leading = Back | Close | None`
- `Trailing = Text | IconSlot | Multiple | None`
- `Title = Center | Contextual`

**OBSERVED / HIGH**
- standard detail pages center title
- leading action receives fixed touch wrapper
- top bar remains visually thin and quiet
- media/program pages may overlay controls directly on hero content

Figma:
- width `FILL`
- height fixed/min-height
- leading/trailing fixed/HUG wrappers
- title region `FILL`
- true optical centering should not be destroyed by asymmetric actions; use independent left/right slots or absolute center title only within the top-bar component when necessary

Absolute positioning is allowed here only to preserve genuinely independent centered-title behavior.

---

## 12. Bottom navigation

**OBSERVED / HIGH**

Main Tonal app screens repeatedly use a heavy black 5-item bottom nav.

Behavior:
- black bar
- five equal navigation items
- active icon/label white
- inactive icons/labels gray
- icon above label
- visually fixed to viewport bottom

**ESTIMATED / MEDIUM**
- content height approximately `72–80` excluding system home indicator/safe area
- icon visual size `20–24`
- label approximately `9–10`

Figma:
- bar width `FILL`
- bar height fixed + safe-area support
- each item horizontal `FILL`, vertical stack `HUG`
- item alignment centered
- icon slot fixed

Properties:
- `SelectedItem = Home | Activity | Explore | Custom | Settings`

For Fitness, actual IA may differ later; this reconstruction component exists to reproduce Tonal behavior, not to pre-decide Fitness navigation.

---

## 13. Settings / utility row

**OBSERVED / HIGH**

Flat, divider-driven row family.

### `Row/Settings`
Structure:
- left content cluster `FILL`
- optional helper text beneath label
- right cluster `HUG/FIXED`
- trailing may be chevron, value, toggle, external-link slot, or none
- 1px divider

**ESTIMATED**
- min-height simple row `52–56`
- with helper: `64–76`
- horizontal padding follows page/component inset

Properties:
- `Trailing = Chevron | Value | Toggle | External | None`
- `Tone = Default | Destructive | Disabled`
- `Helper = True | False`

Figma:
- width `FILL`
- height `HUG` + min-height
- never manually resize each settings row to screenshot height

---

## 14. Workout movement row

**OBSERVED / HIGH**

Repeated in workout detail/editor.

Structure:
- fixed movement thumbnail / illustration slot
- text stack `FILL`
- primary movement name
- secondary reps/time/mode metadata
- optional trailing chevron or drag handle
- divider

**ESTIMATED / MEDIUM**
- row min-height approximately `72–80`
- image/icon slot `44–52`
- gap `12–16`
- trailing icon slot `20–24`

Properties:
- `Leading = Thumbnail | TimerIcon | Placeholder`
- `Trailing = Chevron | Drag | None`
- `Meta = SingleLine | MultiLine`

Figma:
- row width `FILL`
- height `HUG` + min-height
- leading fixed
- text cluster `FILL`
- trailing fixed/HUG

This component should survive long exercise names without shrinking the trailing action below its fixed slot.

---

## 15. Workout block header

**OBSERVED / HIGH**

Workout editor uses a strong black header above movement rows.

Structure:
- black full-width surface
- uppercase `BLOCK N`
- secondary set/warm-up metadata
- optional overflow/menu icon slot

**ESTIMATED / MEDIUM-HIGH**
- height approximately `52–56`
- horizontal padding `16–20`

Figma:
- width `FILL`
- height fixed/min-height
- title/meta left cluster `FILL`
- trailing menu fixed

Properties:
- `Menu = True | False`
- `Meta = True | False`

---

## 16. Centered dialog

**OBSERVED / HIGH**

Examples include change-set-number, workout reminder, delete confirmation.

### `Dialog/Center`
Visual behavior:
- dimmed scrim
- white rectangular modal
- small radius
- centered title
- optional explanatory text
- content/control area
- primary black action
- optional text cancel action

**ESTIMATED / MEDIUM**
- width approximately `330–342` on 390 frame
- content padding `28–40`
- radius `2–4`

Figma:
- dialog width fixed/max-width within responsive scrim
- height `HUG`
- scrim `FILL` both axes
- dialog internal stack vertical Auto Layout

Properties:
- `Body = None | Text | CustomSlot`
- `Secondary = None | TextAction`
- `Tone = Default | DestructiveConfirmation`

Do not make dialog content fixed-height.

---

## 17. Bottom action sheet

**OBSERVED / MEDIUM-HIGH**

Workout editor exposes bottom action choices over a dimmed background.

This is visually distinct from the centered dialog.

### `Sheet/Action`
Structure:
- scrim
- bottom-aligned vertical action stack
- separate white action surfaces
- larger radius than core rectangular buttons/cards is acceptable for sheet containers/action rows
- cancel separated from primary option group

Figma:
- sheet wrapper width `FILL`
- bottom aligned
- option rows `FILL`
- height `HUG`

Exact radius remains provisional until dedicated sheet batch/visual QA.

---

## 18. Toast / transient feedback

**OBSERVED / HIGH**

Workout edit flow shows a black transient bar near bottom after adding movement.

### `Feedback/Toast`
- black surface
- white sentence-case body text
- near-full content width
- compact height
- subtle small radius

**ESTIMATED / MEDIUM**
- height `44–48`
- width `FILL` within `16–24` inset
- padding `12–16`

Figma:
- width `FILL`
- height `HUG` + min-height
- text `FILL/HUG-height`
- no arbitrary icon unless product requires one

---

## 19. Component property matrix for Figma

Minimum Phase-A component sets:

| Component | Core properties |
| --- | --- |
| `Button/Primary` | `Family=Compact|Content|Inverse`, `State=Default|Disabled|Pressed|Loading` |
| `Button/Secondary` | `State=Default|Disabled|Pressed` |
| `Button/Text` | `Tone=Neutral|Destructive`, `State=Default|Disabled` |
| `ChoiceCard` | `Mode=Single|Multi`, `State=Default|Selected|Disabled`, `Content=Label|LabelHelper` |
| `Selection/Radio` | `State=Off|On|Disabled` |
| `Selection/Check` | `State=Off|On|Disabled` |
| `Control/Toggle` | `State=Off|On|DisabledOff|DisabledOn` |
| `Control/Stepper` | `State=Default|Disabled` |
| `Segmented/Pill` | selected-index property appropriate to number of segments |
| `Control/ModeTile` | `State=Default|Selected|Disabled` |
| `Tab/Underline` | `State=Active|Inactive` |
| `Navigation/TopBar` | `Surface`, `Leading`, `Trailing` |
| `Navigation/BottomBar` | selected item property |
| `Row/Settings` | `Trailing`, `Tone`, helper boolean |
| `Row/Movement` | `Leading`, `Trailing`, metadata mode |
| `Workout/BlockHeader` | menu/meta booleans |
| `Dialog/Center` | body slot / secondary-action state |
| `Sheet/Action` | action-count / destructive mode as needed |
| `Feedback/Toast` | message text property |

Avoid adding theoretical combinatorial variants until an actual Fitness or Tonal pattern requires them.

---

## 20. Binding requirements

Every Phase-A component must bind actual properties to the reconstructed system.

Required bindings where supported:
- fill/stroke/text color -> semantic color variables
- padding/gap -> spacing variables
- radius -> radius variables
- icon slots -> size variables
- divider thickness/color -> system token/style
- typography -> approved text styles/variables

A component that is visually correct but uses repeated raw values is **QA-2 FAIL**.

---

## 21. Fixed / Hug / Fill summary

| Component | Horizontal | Vertical |
| --- | --- | --- |
| Compact CTA | Fixed | Fixed/min |
| Content CTA | Fill inside action wrapper | Fixed/min |
| Text action | Hug + fixed hit wrapper where needed | Hug/fixed hit wrapper |
| Choice card | Fill | Hug + min |
| Toggle | Fixed | Fixed |
| Stepper | Fixed | Fixed |
| Segmented track | Fill or constrained Fixed | Fixed |
| Tab row | Fill | Fixed/min |
| Settings row | Fill | Hug + min |
| Movement row | Fill | Hug + min |
| Block header | Fill | Fixed/min |
| Center dialog | Fixed/max-width | Hug |
| Action sheet | Fill | Hug |
| Toast | Fill within inset | Hug + min |
| Bottom nav | Fill | Fixed + safe area |

This matrix must be treated as the default agent behavior, not manually overridden screen by screen without documented reason.

---

## 22. Findings that refine Batch 01

### Confirmed
- tiny-radius rectangular buttons/cards are a real repeated system rule
- centered compact onboarding CTA is not a one-screen anomaly
- flat row + divider pattern is pervasive
- 4pt-family spacing remains the best working explanation
- bright green is consistently semantic for active/training/positive state

### Refined
- Tonal has **multiple primary button families** rather than one universal width
- pill geometry is valid but mostly isolated to toggle/segmented-control contexts
- top navigation needs `Light / Dark / Overlay` structural variants
- workout rows require dedicated thumbnail/rest/drag variants rather than reusing generic settings rows

### Not frozen yet
- exact modal/sheet radius
- exact bottom-nav height
- exact toggle dimensions
- exact stepper width
- pressed/loading visual styling
- full dark-mode token mapping

These should be validated during the representative Figma reconstruction QA rather than guessed further from screenshots alone.

---

## 23. Batch-02 QA gate

Before promoting these components into the baseline:

### QA-1 Structure
- build components using the Fixed/Hug/Fill matrix
- long Korean/English text stress tests
- widths 360 / 390 / 430
- verify no accidental clipping or collapsed Fill/Hug relations

### QA-2 Design-system binding
- inspect every component for actual variable/style binding
- no repeated raw black/gray/spacing/radius values
- instances use component properties instead of detached copies

### QA-3 Visual reference
Reconstruct and compare at least these representative patterns:
1. onboarding choice + compact CTA
2. workout movement block + content CTA
3. exercise setup with toggle + stepper + segmented selector
4. history/stat screen with underline tabs
5. centered dialog over workout editor
6. main app bottom navigation

Global mismatches must be corrected at token/component level.

---

## 24. Result

Batch 02 is sufficient to start building the **core Figma component library**, but not yet the final Fitness screen set.

Recommended next step:
- Batch 03 — **Product Patterns / Workout Patterns**
- audit hero/media composition, dashboard modules, program cards, workout detail composition, metric/stat patterns, charts, and exercise history
- then consolidate Batch 01–03 into the executable Figma foundations/components/patterns package
