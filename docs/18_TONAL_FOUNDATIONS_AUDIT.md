# 18 TONAL FOUNDATIONS AUDIT

**Status:** PHASE-A / BATCH-01 — FOUNDATIONS PROVISIONAL
**Updated:** 2026-08-28

## Purpose

This batch isolates Tonal's visual foundations before broad component reconstruction.

Scope for this batch:
- page shell / mobile content grid
- spacing rhythm
- typography hierarchy
- color roles
- radius / shape behavior
- top navigation
- onboarding progress treatment
- text alignment rules
- choice-card geometry
- onboarding CTA geometry
- form/underline-input geometry
- settings/list-row geometry
- toggle / trailing-control geometry
- initial sizing intent for Figma Auto Layout

This document does **not** claim access to Tonal's internal design tokens. All numeric values below are screenshot-derived working estimates selected to reproduce repeated visual relationships consistently.

Evidence status labels:
- **OBSERVED** — directly repeated across visible Tonal screenshots
- **INFERRED** — repeated relationship strongly implies a shared rule
- **ESTIMATED** — provisional implementation value chosen to reproduce the observed relationship

Confidence labels:
- **HIGH** — repeated across several independent screens / states
- **MEDIUM** — repeated, but exact numeric value remains uncertain
- **LOW** — plausible but should not yet become a global token

---

## 1. Evidence set — Batch 01

23 unique Tonal screens were used across two families: onboarding/profile setup and settings/profile/utility.

### Onboarding / profile setup
Representative screens:
- `a0bb4e2e-0082-4b57-b943-0600d062256d` — fitness goal / selected choice
- `039f099a-9cfa-4a6e-aaf0-f7690c63bfc7` — gender choice
- `6ef5e1ef-5078-4260-9d07-5e2b7d502cf1` — multi-select goal state
- `2b9552f4-e43c-4508-bf38-5dc4d53c295f` — name / username inputs
- `c627b5a2-4b3e-431b-998a-c8f4dd44651a` — confirmation summary
- `1d5c2c24-7e99-4dfe-8b5f-129d4674a75e` — location input
- `0dc5e059-e8a4-4e11-a0bd-bd6cd20d5814` — disabled choice / disabled CTA
- `3f7499c2-3c23-4b12-a322-7a7443e71189` — DOB / consent composition
- `6f0a7139-a0f8-4b46-abbc-f9448634e56f` — selected status choice
- `674234dd-9f5f-4e98-9ed9-c18811437b15` — height/weight numeric selector
- `cf378226-5e32-4f37-976f-35352ceebdc3` — long multi-select list
- `2a1cb679-8ad0-4957-a67b-c0f6cf295fc5` — empty name / input state

### Settings / profile / utility
Representative screens:
- `0090bd2e-76af-4e22-b565-fe04b8ba4735` — social privacy / toggle rows
- `4d6bde90-cad3-460d-b3fa-f14f0bc71daa` — main settings list / bottom nav
- `812b461c-f9bf-44a8-9456-b4ba675cfeed` — legal list rows
- `dea4498d-49dd-4103-897a-e437ee4ebd37` — connected-app rows
- `db537973-f4ea-442d-b895-0fd0a78bbf22` — preferences sections
- `fdf9bcc1-d780-45ed-8a55-5305ce7f3e11` — settings variant / destructive action
- `99fb37ea-118d-4e98-96a7-03db7f32aec4` — help / simple rows
- `1e1a83f9-6acd-433f-8a95-0a164a3fa6ba` — profile-adjustment sheet
- `b85bd3df-8f6e-4f53-8ea7-5a5d37bf0c05` — profile modules
- `a210dc03-38d3-4c60-9e15-697df9eac1a6` — body & health utility screen
- `7e8ebaf2-b273-45a0-9002-13d0b0afea19` — text-led utility / destructive link

Canonical Mobbin URLs are tracked in `docs/14_TONAL_RECONSTRUCTION_BASELINE.md`; full competitor screenshots are intentionally not committed to the public repository.

---

## 2. Base viewport and content grid

### Mobile reconstruction frame
**ESTIMATED / MEDIUM**
- Figma reference frame: `390 x 844`
- use this only as the visual reconstruction baseline
- production components remain responsive; do not hard-code all internals to 390

### Horizontal content line
**OBSERVED / HIGH**
Most text, cards, form lines, and settings content repeatedly align to an inset close to 24 pt from the viewport edge.

**ESTIMATED TOKEN**
- `Space/PageX = 24`
- baseline usable width on 390 frame: `342`

### Internal compact inset
**INFERRED / MEDIUM**
Some row internals and nested groups visually use a tighter inset than the page edge.

**ESTIMATED TOKEN**
- `Space/ComponentX = 16`

Do not promote a multi-column layout grid yet. Batch 01 supports a strong single-column alignment system, but dashboard/metric screens are required before defining a global column count/gutter system.

### Structural rule
- screen shell: fixed viewport only for reference comparison
- main page content: horizontal `FILL`
- major vertical content stack: vertical `HUG`
- use flexible spacer / bottom region to preserve Tonal-like large whitespace before bottom CTA where appropriate

---

## 3. Spacing system

### Base rhythm
**INFERRED / HIGH**
Spacing strongly clusters around a 4 pt family rather than arbitrary one-off distances.

### Working spacing scale
**ESTIMATED TOKENS**
- `Space/4 = 4`
- `Space/8 = 8`
- `Space/12 = 12`
- `Space/16 = 16`
- `Space/20 = 20`
- `Space/24 = 24`
- `Space/32 = 32`
- `Space/40 = 40`
- `Space/48 = 48`
- `Space/64 = 64`
- `Space/80 = 80`

### Observed usage model
**INFERRED / MEDIUM-HIGH**
- 4–8: micro spacing, label-to-control, small metadata
- 12: compact internal separation
- 16: default row/card internal spacing
- 20–24: standard component padding and section alignment
- 32–40: major content section separation
- 48–80: onboarding question/answer/CTA whitespace and intentionally sparse compositions

### Rule
When a screenshot appears to show an odd value such as 18/22/26, first test whether the relationship is better explained by this shared scale before introducing a new token.

---

## 4. Typography roles

Tonal's exact production typeface is not established from screenshot evidence alone. Fitness will use **Pretendard as the implementation proxy** while reproducing Tonal's visible hierarchy and weight relationships.

### `Type/Heading/Question`
**OBSERVED / HIGH**
Used for onboarding questions.

**ESTIMATED**
- Pretendard Bold
- size `24`
- line-height `28–30`
- center aligned in onboarding composition
- max text width should be constrained enough to create deliberate 1–2 line headings rather than full-width loose wrapping

### `Type/Heading/Screen`
**OBSERVED / HIGH**
Used for top-level content titles / larger utility headings.

**ESTIMATED**
- Pretendard Bold/SemiBold
- size `22–24`
- line-height `28–32`
- left aligned unless screen pattern explicitly centers it

### `Type/Nav/Title`
**OBSERVED / HIGH**
- Pretendard SemiBold
- size `16–17`
- line-height `20–22`
- centered in standard top bar

### `Type/Body/Primary`
**OBSERVED / HIGH**
- Pretendard Regular
- size `14–16`
- line-height `20–22`
- left aligned by default

### `Type/Body/Helper`
**OBSERVED / HIGH**
- Pretendard Regular
- size `14–15`
- line-height `19–21`
- secondary gray
- centered in onboarding; left aligned in utility/detail contexts

### `Type/Label/Upper`
**OBSERVED / HIGH**
Used for small field labels, workout/stat labels, and compact section labels.

**ESTIMATED**
- Pretendard SemiBold/Bold
- size `9–11`
- line-height `12–14`
- uppercase where the original role uses uppercase
- slight tracking may be applied visually; exact letter-spacing remains provisional

### `Type/Action/Primary`
**OBSERVED / HIGH**
- Pretendard Bold
- size `11–12`
- line-height `14–16`
- uppercase
- centered

### `Type/Metric/Large`
**OBSERVED / MEDIUM**
Batch 01 supports very large numeric emphasis from height/weight selectors, but dashboard batch is required before freezing the global metric scale.

Provisional only:
- 32 / 40 / 56 classes may be needed
- do not freeze yet

---

## 5. Color roles

Exact colors cannot be certified from compressed screenshots. The important result in Batch 01 is the role system and relative contrast.

### Neutral hierarchy
**OBSERVED / HIGH**
- canvas: very light cool/neutral gray
- main text / selected surfaces: near black
- white content surface
- unselected choice surface: medium-light neutral gray
- disabled surface: lighter neutral gray
- secondary text: mid gray
- tertiary/disabled text: lighter gray
- divider: subtle cool gray

### Provisional implementation colors
**ESTIMATED / MEDIUM**
- `Color/Surface/Canvas = #F4F4F5`
- `Color/Surface/Base = #FFFFFF`
- `Color/Surface/Choice = #DADADD`
- `Color/Surface/Disabled = #ECECEF`
- `Color/Ink/Primary = #050505`
- `Color/Ink/Secondary = #66666B`
- `Color/Ink/Tertiary = #9A9AA0`
- `Color/Divider/Subtle = #D9D9DC`

### Semantic accents
**OBSERVED / MEDIUM-HIGH**
- training/positive/toggle accent: bright mint-green
- destructive action: saturated pink/red

**ESTIMATED / MEDIUM**
- `Color/Accent/Training = #43E6A0`
- `Color/Action/Destructive = #D9294E`

These must be rechecked against dashboard/workout screenshots before freezing.

---

## 6. Shape / radius behavior

### General shape language
**OBSERVED / HIGH**
Tonal is not pill-heavy. Most cards/buttons are strongly rectangular with very small corner treatment.

### Working radius scale
**ESTIMATED / MEDIUM**
- `Radius/None = 0`
- `Radius/XSmall = 2`
- `Radius/Small = 4`
- `Radius/Sheet = 16–20` provisional
- circular controls/avatars use full radius

### Rules
- choice cards: `2–4`
- black onboarding CTA: `2–4`
- settings rows: effectively square / no visible card rounding
- sheets: large top radius only
- do not default to 12/16 rounded cards across the app

---

## 7. Top navigation

### Standard top bar
**OBSERVED / HIGH**
- centered title
- single leading back/close action
- optional trailing action
- visually quiet / no heavy surface

### Geometry
**ESTIMATED / MEDIUM-HIGH**
- safe-area handled separately
- navigation content height: approximately `44–48`
- icon visual slot: `20–24`
- interaction wrapper: minimum `44 x 44`
- title uses `Type/Nav/Title`

### Figma sizing
- top bar width: `FILL`
- height: `FIXED` or min-height token
- leading/trailing action wrapper: `FIXED 44 x 44`
- title region: `FILL`
- title text: `HUG`, visually centered independent of asymmetric side actions when possible

---

## 8. Onboarding progress line

### Pattern
**OBSERVED / HIGH**
Multi-step profile/account flows use a thin horizontal progress track immediately below the top bar.

### Geometry
**ESTIMATED / MEDIUM**
- width: `FILL` inside `PageX = 24`
- height: approximately `2–3`
- track: light neutral
- progress: near black
- square or nearly square ends rather than thick pill treatment

### Rule
Progress line is a structural navigation indicator, not a decorative divider.

---

## 9. Onboarding composition / alignment

### Question block
**OBSERVED / HIGH**
- centered heading
- centered helper copy
- generous space before answer region
- answer text inside cards is left aligned
- CTA label centered

### Default onboarding structure
1. TopBar
2. Progress
3. question stack — `HUG`
4. answer stack — `HUG`
5. flexible vertical spacer — `FILL` when parent height is resolved
6. bottom CTA region

### Important
Do not implement onboarding by absolute y-positioning every layer. The sparse Tonal composition should be recreated through Auto Layout + deliberate spacer behavior.

---

## 10. Choice cards

### Width behavior
**OBSERVED / HIGH**
- full content-column width
- card stack aligns to page margin

Figma:
- horizontal: `FILL`
- vertical: `HUG`
- apply min-height by content variant

### Simple single-line choice
**ESTIMATED / MEDIUM-HIGH**
- min-height: `56`
- horizontal padding: `20–24`
- vertical padding: `16`

### Choice with supporting text
**ESTIMATED / MEDIUM**
- min-height: approximately `88–92`
- width: `FILL`
- height: `HUG`
- horizontal padding: `20–24`
- vertical padding: `16–20`
- label-to-helper gap: `4–8`

### Stack gap
**ESTIMATED / MEDIUM-HIGH**
- `8–12`

### States
**OBSERVED / HIGH**
- `Default`: light gray surface + black text
- `Selected`: black surface + white primary text
- `Disabled`: lighter surface + muted text/control
- selection control is trailing and vertically centered

### Trailing selection slot
**ESTIMATED**
- visual control: `20–24`
- fixed
- right aligned
- row left content = `FILL`
- trailing control = `FIXED/HUG`

---

## 11. Onboarding primary CTA

### Key finding
**OBSERVED / HIGH**
Tonal onboarding CTAs are **not generally full content width**. They appear as centered, compact rectangular black actions with stable geometry.

### Provisional `Button/Primary/Onboarding`
**ESTIMATED / MEDIUM-HIGH**
- width: approximately `188`
- height: approximately `56`
- radius: `2–4`
- black fill
- white uppercase action label
- center aligned

Figma:
- horizontal sizing: `FIXED` for the reconstruction variant
- vertical sizing: `FIXED` or min-height 56
- label: `HUG`

Do not generalize this to every Fitness primary button. Program/workout/detail batches may reveal other Tonal button families.

### Disabled state
**OBSERVED / HIGH**
- very light gray fill
- muted action text
- same geometry as enabled state

---

## 12. Underline input pattern

### Pattern
**OBSERVED / HIGH**
Profile entry uses sparse underline fields rather than boxed inputs.

### Structure
- small uppercase/label role above
- input text
- 1 px underline
- optional counter / trailing metadata under or near trailing edge

### Figma sizing
- field container: width `FILL`, height `HUG`
- label: `HUG`
- input text region: width `FILL`, height `HUG`
- divider: width `FILL`, height `FIXED 1`

### Estimated spacing
- label to value: `12–16`
- value to underline: `8–12`
- adjacent fields in row: use equal `FILL` columns with `16–24` gap

### Rule
No boxed white input background in this specific Tonal profile-entry family.

---

## 13. Settings / simple list rows

### Key pattern
**OBSERVED / HIGH**
Tonal settings are flat, low-decoration rows separated by thin dividers. They are not large rounded cards.

### Row geometry
**ESTIMATED / MEDIUM-HIGH**
- width: `FILL`
- min-height: approximately `56`
- left inset: `24`
- right inset: `16–24`
- divider: `1`
- primary label: left aligned
- trailing chevron/value/control: right aligned, vertically centered

### Figma structure
`Row/Settings`
- horizontal Auto Layout
- width `FILL`
- height `HUG` + min-height 56
- left content group: `FILL`
- trailing group: `HUG` or fixed slot
- vertical alignment: center
- bottom divider bound to `Color/Divider/Subtle`

### Multi-line settings row
**OBSERVED / HIGH**
When helper copy exists, row height expands naturally.

- height must be `HUG`
- label/helper stack = `FILL`
- toggle/control remains fixed and vertically aligned to the intended control line

---

## 14. Toggle / trailing controls

### Toggle
**OBSERVED / HIGH**
- native-like compact iOS toggle geometry
- enabled accent is bright mint/green
- disabled/off is light gray

**ESTIMATED / MEDIUM**
- visual geometry near native iOS proportions; use platform-consistent ~`50 x 30` as provisional
- fixed size

### Chevron / external action slot
**OBSERVED / HIGH**
- small, understated
- not visually dominant

For Phase A:
- use placeholder icon slot
- visual slot `16–20`
- interaction wrapper `44 x 44` only where independently tappable

---

## 15. Text alignment decision matrix — Batch 01

### Center
Use for:
- onboarding question heading
- onboarding helper copy
- standalone numeric selector value
- compact onboarding CTA label
- standard top-bar title

### Left
Use for:
- choice-card label/helper
- forms
- settings/legal rows
- preference sections
- body/helper copy in content/utility screens
- destructive text action

### Right
Use for:
- trailing values
- counters
- Save/Done-style top-bar actions

### Prohibited default
Do not center body/list/detail text merely to imitate Tonal's onboarding screens. Alignment changes with content role.

---

## 16. Auto Layout sizing defaults derived from Batch 01

| Pattern | Horizontal | Vertical | Notes |
|---|---|---|---|
| Screen viewport | FIXED reference only | FIXED reference only | 390x844 comparison frame |
| Main content column | FILL | HUG / managed by page | outer 24 inset |
| Onboarding question stack | FILL | HUG | centered text children |
| Choice card | FILL | HUG + min-height | content-driven |
| Choice stack | FILL | HUG | 8–12 gap |
| Onboarding CTA | FIXED ~188 | FIXED/min 56 | centered variant |
| Underline input | FILL | HUG | divider fill |
| Settings row | FILL | HUG + min 56 | left fill, trailing hug/fixed |
| Toggle | FIXED | FIXED | native-like geometry |
| Back/close hit target | FIXED 44 | FIXED 44 | icon inside 20–24 |
| Top-bar title region | FILL | FILL/center | text itself HUG |
| Progress track | FILL | FIXED 2–3 | page inset |

---

## 17. Foundation variable candidates for Figma

Create as provisional variables, not frozen tokens:

### Space
- `Space/4`
- `Space/8`
- `Space/12`
- `Space/16`
- `Space/20`
- `Space/24`
- `Space/32`
- `Space/40`
- `Space/48`
- `Space/64`
- `Space/80`
- semantic alias where useful: `Space/PageX -> Space/24`

### Radius
- `Radius/None`
- `Radius/XSmall`
- `Radius/Small`
- `Radius/Sheet` provisional

### Color
- `Color/Surface/Canvas`
- `Color/Surface/Base`
- `Color/Surface/Choice`
- `Color/Surface/Disabled`
- `Color/Ink/Primary`
- `Color/Ink/Secondary`
- `Color/Ink/Tertiary`
- `Color/Divider/Subtle`
- `Color/Accent/Training`
- `Color/Action/Destructive`

### Size
- `Size/Touch/44`
- `Size/Icon/16`
- `Size/Icon/20`
- `Size/Icon/24`
- `Size/Icon/28`
- `Size/Row/Min56`
- `Size/Button/OnboardingH56`

---

## 18. What is intentionally NOT frozen from Batch 01

Do not freeze yet:
- exact Tonal font family
- exact hex values
- exact letter spacing
- complete metric-number scale
- global multi-column grid / gutter system
- dashboard module dimensions
- bottom-navigation exact height and icon/label geometry
- program/workout action-button families
- hero/media ratios
- sheet radius exact value
- chart colors / axis tokens

These require later batches.

---

## 19. Batch-01 evidence QA

### Cross-screen consistency check
**PASS — provisional**
The following relationships repeat strongly enough to enter the working baseline:
- ~24 pt page inset
- 4 pt-family spacing scale
- very light neutral canvas + near-black primary ink
- small-radius / rectangular component language
- centered onboarding questions with left-aligned choices
- selected choice = black inversion
- compact centered black onboarding CTA
- flat settings rows + thin dividers
- native-like mint toggle
- underline-input family
- 44-ish navigation/touch wrappers

### Main uncertainty
The remaining uncertainty is mostly **exact values**, not the existence of the rules.

### Risk control
No value in this document becomes frozen solely because it matches one screenshot. The next batches must challenge these values against components, dashboard/stat layouts, and workout/detail screens.

---

## 20. Next batch

**Batch 02 — Core Components**

Analyze repeated Tonal components across more screen families:
- primary / secondary / text buttons
- choice cards
- tabs / segmented controls
- top nav / bottom nav
- settings rows / movement rows
- toggle / selection markers
- steppers
- chips / tags / labels
- cards / metric modules
- sheets / overlays

Goal: convert foundations into explicit Figma component APIs, variants, sizing rules, and variable bindings before any large product-screen generation.
