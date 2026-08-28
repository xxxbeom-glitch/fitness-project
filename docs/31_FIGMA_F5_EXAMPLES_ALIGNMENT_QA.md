# 31 FIGMA F5 EXAMPLES WIDTH / ALIGNMENT REVALIDATION

**Status:** PASS — REMEDIATED / F5 REVALIDATED  
**Updated:** 2026-08-29

## Scope

Follow-up integration QA of the F5 `Examples` page in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`).

This review was triggered by Product Owner visual inspection after the initial `docs/29_FIGMA_PHASE_F5_EXAMPLES_QA.md` PASS. The initial F5 QA proved structure, reuse, binding, and responsive overflow behavior, but did not sufficiently verify page-level alignment lines and accidental nested/double insets in composed examples.

The purpose of this follow-up is to verify that representative examples not only fit responsively, but also use coherent horizontal content width and alignment relationships.

---

## Finding 1 — History set table had a real double horizontal inset

### Before

`History/ChartTable_example` composed:
- `ExerciseSetTableSection` with 24pt left/right padding
- `History/ExerciseSetTable` instance at 342pt width
- the reusable `History/ExerciseSetTable` itself already had 24pt left/right internal page/content padding

Result:
- effective visible table content began around 48pt from the page edge
- column/header usable width was only 294pt
- chart / STATS / set-table alignment lines were visibly inconsistent

This matched the Product Owner's visual concern.

### Remediation

Only the Example composition was changed:
- `ExerciseSetTableSection.paddingLeft = 0`
- `ExerciseSetTableSection.paddingRight = 0`
- existing top section separation remains 32pt
- `History/ExerciseSetTable` instance now stretches to the full 390pt example width
- reusable table internal 24pt inset remains unchanged

### Final measured relationship

At the 390 baseline:
- History screen width = 390
- table section width = 390
- table section horizontal padding = 0 / 0
- table instance width = 390, x = 0
- SummaryHeader = x24 / width342
- ColumnHeaders = x24 / width342

Chart / STATS / set table now share the intended page alignment relationship.

No reusable source pattern was modified for this fix.

---

## Finding 2 — Settings rows also had a double inset

### Before

`Settings/ListSection_example` composed:
- `SettingsContent` with 24pt left/right page padding
- nested `Row/Settings` components that already contain their own row/content horizontal inset

Result:
- visible row labels were pushed to roughly the mid-40pt range from the page edge
- rows read like narrow cards instead of full-width settings rows
- this did not match the reconstructed Tonal settings/list relationship

### Remediation

Only the Example composition was changed:
- `SettingsContent.paddingLeft = 0`
- `SettingsContent.paddingRight = 0`
- Settings rows now stretch to full screen width
- section label moved into a dedicated `SectionHeader` wrapper with `Space/24` horizontal padding
- row-level internal content padding remains controlled by `Row/Settings`

### Final measured relationship

At the 390 baseline:
- Settings screen width = 390
- SettingsContent width = 390
- SettingsContent horizontal padding = 0 / 0
- SectionHeader width = 390
- SectionLabel = x24 / width342
- Row/Settings width = 390 / x0
- trailing value/control keeps its row-level internal inset

No reusable Row/Settings source component was changed in this remediation.

---

## Intentional insets retained

The follow-up audit also checked whether similar nested widths elsewhere were actual defects.

### Workout / MovementBlock
Retained.

The workout block/list composition is intentionally a content-width module inside the page, consistent with representative Tonal custom-workout references. It is not the same error as a full-width settings/history row being padded twice.

Representative reference:
- https://mobbin.com/screens/636cb1dd-ff3c-4763-b4f0-528712e3bff4

### Onboarding choice cards
Retained.

Choice cards are intentionally content-width surfaces inside the standard page inset.

### Dashboard modules
Retained.

Dashboard modules are intentionally content-width white modules on the subtle canvas.

### Program media rails
Retained.

Carousel viewport / page-heading alignment and partial next-card visibility remain intentional.

---

## Fresh Tonal visual sanity

### Exercise history / set data
Representative references:
- https://mobbin.com/screens/49b9079a-87e6-434d-802e-25a9a9858077
- https://mobbin.com/screens/3d717d1c-018e-4636-8a81-bf4569ba46cf

Observed relationship supports page-wide row/table structures with content aligned near the standard page line rather than a nested 48pt inset.

### Settings / list
Representative references:
- https://mobbin.com/screens/812b461c-f9bf-44a8-9456-b4ba675cfeed
- https://mobbin.com/screens/0090bd2e-76af-4e22-b565-fe04b8ba4735

Observed relationship supports full-width list rows with row-internal content inset and restrained dividers.

---

## Full post-remediation Examples QA

All eight F5 examples were re-scanned after the fixes.

Examples:
1. Onboarding / Choice Question
2. Dashboard / Home
3. Program / Hero Detail
4. Workout / Movement Block
5. Exercise Detail / Media
6. Exercise Detail / No Media
7. History / Chart + Table
8. Settings / List Section

Final measurable signals:
- example count = **8**
- unstyled text = **0**
- non-canonical local spacing = **0**
- canonical spacing without Variable binding = **0**
- top-level Example wrapper overlap = **0**
- no reusable source component duplication introduced

### Responsive regression

All eight screen examples were cloned and checked at:
- 320
- 360
- 430

Result:
- non-intentional horizontal overflow = **0** on every example at every tested width
- intentional carousel next-card overflow remains allowed inside the clipping viewport

---

## QA lesson added

The initial F5 QA exposed an important gap:

> `no overflow` does not prove correct alignment.

Future composed-screen QA must separately verify:
- shared page alignment lines
- effective visible content inset
- parent padding + child internal padding combinations
- whether an inset belongs to the page, the module, or the row itself
- accidental double inset even when the layout is technically responsive

This becomes a required visual-spacing/alignment check for Phase-B screen QA.

---

## Non-blocking policy item

`Navigation/TopBar` structurally supports `Center` and `Contextual` title modes, but final Fitness product policy for which screen families use each mode is not yet formally locked.

Current working recommendation remains:
- root / primary destination -> Center
- drill-down / detail / edit -> Contextual

The generic `Title` text shown in F5 Examples is a structural example and is not final screen copy/policy.

---

## Final verdict

### Width / alignment integration QA
**PASS AFTER REMEDIATION**

### Structure / binding regression
**PASS**

### Responsive regression
**PASS**

### F5 status
**PASS — REVALIDATED**

The Phase-A visual-system baseline remains valid and the Phase-B Fitness pilot gate stays open.
