# 20 TONAL INTERMEDIATE QA — BATCH 01 + 02

**Status:** PASS WITH CANONICAL CORRECTIONS
**Updated:** 2026-08-28

## Purpose

Run a deliberate midpoint QA before product-pattern reconstruction so mistakes in foundations or component structure do not propagate into Batch 03 and later Figma generation.

Reviewed sources:
- `docs/18_TONAL_FOUNDATIONS_AUDIT.md`
- `docs/19_TONAL_CORE_COMPONENTS_AUDIT.md`
- the Mobbin screenshot evidence referenced by those documents

This is a **specification QA**, not the later Figma implementation QA. Variable binding, instance integrity, Auto Layout behavior on real Figma nodes, and screenshot-diff validation still require the post-build QA gates in `docs/17_FIGMA_AGENT_EXECUTION_QA.md`.

---

## 1. QA result

### Evidence coverage
**PASS**

Batch 01 and Batch 02 use independent Tonal families rather than relying on one or two screens:
- onboarding / profile setup
- settings / utility
- workout editor / movement configuration
- navigation / tabs
- dialogs / sheets / transient feedback

Repeated relationships are therefore suitable for a provisional reconstruction baseline.

### Over-generalization risk
**PASS WITH CORRECTIONS**

Several rules are strong enough to remain global; several others must stay pattern-specific until Batch 03.

Global candidates that remain valid:
- 4 pt spacing family
- ~24 pt primary page inset
- tiny corner radii for standard cards/buttons
- centered onboarding question composition
- left-aligned content rows/forms/details
- flat divider-led settings rows
- distinct Fixed / Hug / Fill decisions by axis
- compact black rectangular CTA family
- black 5-item Tonal bottom navigation as a reconstruction reference only
- underline tabs rather than pill tabs for history/detail contexts

Do **not** globalize yet:
- one universal page background
- one universal primary button width
- one universal accent color
- one universal card component
- one universal sheet/dialog radius
- dashboard metric typography sizes
- multi-column grid rules

---

## 2. Canonical correction — button naming

### Problem
Batch 01 names the onboarding action `Button/Primary/Onboarding`; Batch 02 identifies the same geometry across onboarding, share, compact confirmation, and modal contexts and names it `Button/Primary/Compact`.

### Resolution
**Canonical component name: `Button/Primary/Compact`**

Use it for:
- onboarding continue/confirm actions
- compact share/confirmation actions
- centered modal actions when the same geometry is visible

Do not keep a duplicate `Button/Primary/Onboarding` component unless later evidence proves different geometry.

Working geometry remains:
- width roughly `188–196`
- height roughly `52–56`
- radius `2–4`
- uppercase centered label

`Button/Primary/Content` remains a separate wider action family.

**QA status: RESOLVED**

---

## 3. Canonical correction — surface backgrounds

### Problem
Batch 01 assigns one provisional canvas value, but Tonal visibly alternates between:
- very light cool-gray app/editor/dashboard canvases
- pure-white content/detail/stat pages
- black/dark immersive media/detail surfaces

A single universal `Canvas` token would force incorrect local overrides.

### Resolution
The future consolidated spec must separate semantic surface roles, provisionally:
- `Color/Surface/Canvas/Subtle` — cool light-gray application canvas
- `Color/Surface/Canvas/Base` — white content/detail canvas
- `Color/Surface/Canvas/Dark` — near-black immersive surface
- `Color/Surface/Card` — white module/card surface on subtle canvas

Exact hex values remain ESTIMATED and are not frozen in this QA.

**QA status: RESOLVED FOR NAMING; VALUES PROVISIONAL**

---

## 4. Canonical correction — accent colors

### Problem
Batch 01 uses one provisional green `Color/Accent/Training` as if it might cover Tonal's accent system.

Additional evidence already shows Tonal also uses distinct blue and occasional orange/red roles for progress, achievements, comparison, or status.

### Resolution
Do not model the design system as black/white/gray + one accent.

The consolidated palette should remain semantic, not brand-copy token names:
- `Color/Accent/Positive` / training mint-green
- `Color/Accent/Info` / progress blue
- `Color/Accent/WarningOrAchievement` / orange where evidence supports it
- `Color/Action/Destructive` / red-pink

Exact colors must be validated again in Batch 03 before freezing.

**QA status: RESOLVED FOR ROLE MODEL; VALUES PROVISIONAL**

---

## 5. Canonical correction — radii

### Problem
Batch 01 provisionally lists `Radius/Sheet = 16–20`, while Batch 02 shows multiple overlay families with visibly different geometry.

### Resolution
Do not use one generic `Sheet` radius.

Future semantic roles should distinguish:
- `Radius/Control/Rect = 2–4` — standard rectangular buttons/cards/dialogs
- `Radius/Dialog = 2–4` — centered Tonal modal surfaces
- `Radius/Sheet/Top = larger, provisional` — bottom sheets/action sheets
- `Radius/Pill = full` — toggles/segmented controls/chips where justified
- `Radius/Circle = full` — avatars/status controls

Bottom-sheet radius remains provisional until implementation comparison.

**QA status: RESOLVED**

---

## 6. Auto Layout / sizing consistency QA

### Fixed / Hug / Fill
**PASS**

Batch 01 and 02 are structurally consistent:
- page-width rows/cards: horizontal `FILL`
- variable-content rows/cards: vertical `HUG` + min-height
- icon / avatar / toggle / stepper: `FIXED`
- left content cluster in a row: `FILL`
- trailing value/control: `HUG` or `FIXED`
- compact CTA: fixed reconstruction width
- content CTA: fill within a constrained action wrapper
- dialog: constrained/fixed max width + vertical `HUG`

No rule requires screenshot-style absolute x/y placement for ordinary layout.

### Allowed absolute positioning
Remain limited to:
- true media overlays
- optically centered top-bar title when asymmetric side actions would displace it
- intentionally floating controls/badges

**QA status: PASS**

---

## 7. Text alignment QA

**PASS**

Role-based alignment is consistent across the two batches:
- onboarding question/helper: center
- card contents: left
- body/helper in content screens: left
- navigation title: center
- button label: center
- trailing values/numeric columns: right where scanning benefits
- large metric values: pattern-dependent but never decorative paragraph centering

No broad "center all Tonal copy" rule exists.

---

## 8. Typography QA

### Stable roles
**PASS**

Keep provisional roles:
- question heading
- screen heading
- nav title
- body primary
- body/helper secondary
- uppercase compact label
- primary action label

### Not stable yet
**DEFER TO BATCH 03**

Do not freeze:
- metric XL/L/M sizes
- data-table numeric hierarchy
- chart annotation type
- carousel/media-overlay title sizes

Batch 03 must close these gaps.

---

## 9. Component duplication QA

**PASS WITH MERGE RULES**

Merge/shared base structure:
- onboarding single/multi choice cards should share one base family
- radio/check state should be properties, not independent arbitrary vectors
- settings rows should use one family with trailing variants
- workout movement rows should share one family with leading/trailing variants

Keep intentionally separate:
- compact primary CTA vs wide content CTA
- underline tabs vs pill segmented control
- pill segmented control vs rectangular mode tiles
- settings row vs workout movement row
- centered dialog vs bottom action sheet
- general content card vs workout block header

---

## 10. Provisional tokens after midpoint QA

The following remain safe to carry into Batch 03 as working hypotheses:
- baseline reconstruction width: `390`
- main page horizontal inset: `24`
- component/internal inset: `16`
- spacing family: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80`
- standard rectangular radius: `2–4`
- top navigation content height: approximately `44–48`
- primary touch target wrapper: minimum `44 x 44`
- choice-card simple min-height: approximately `56`
- choice-card helper min-height: approximately `88–92`
- compact CTA: approximately `188–196 x 52–56`
- toggle: approximately `50–54 x 30–32`
- compact stepper: approximately `116–128 x 36–40`
- settings simple-row min-height: approximately `52–56`
- movement-row min-height: approximately `72–80`

All values remain screenshot-derived reconstruction estimates until Figma visual QA.

---

## 11. Midpoint gate decision

**BATCH 01 + 02 MIDPOINT QA: PASS WITH THE CORRECTIONS ABOVE.**

Batch 03 may proceed.

Batch 03 must specifically validate or complete:
1. dashboard/card grid behavior
2. metric typography hierarchy
3. semantic accent palette beyond mint green
4. white vs subtle-gray vs dark surface roles
5. media/hero layout rules
6. data visualization/chart patterns
7. program/workout/detail composition patterns
8. dense workout-history/set-table patterns

After Batch 03, run a separate **Pre-Figma Consolidation QA** before creating the first Figma Foundations/Components/Patterns batch.
