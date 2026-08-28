# 28 FIGMA F4 SPACING QA

**Status:** PASS — REMEDIATED  
**Updated:** 2026-08-29

## Scope

Focused spacing-rhythm QA of the passing F4 Product Patterns in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`).

This review was triggered by a visual check of `Program/DetailComposition` and `History/ExerciseSetTable` after the initial F4 PASS. The previous structural/binding audit was not sufficient by itself to prove section rhythm and optical spacing quality.

Canonical spacing reference:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- spacing scale: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80`
- `Space/PageX = 24`
- major section separation generally uses `32–40`
- standard content/module separation generally uses `20–24`

---

## Findings before remediation

### 1. Program rails lacked semantic section separation

`Program/DetailComposition` stacked:
- `WorkoutCarousel`
- `RelatedCarousel`

with direct gap = **0**.

Because the section heading is part of the second carousel, the first card visually touched the next `MORE LIKE THIS` heading and the two sections read as one continuous block.

The transition from supporting metadata to the first rail also depended only on the metadata module's internal bottom padding and did not establish a strong section boundary.

### 2. History chart to STATS transition was too tight

`History/MetricChart` placed `StatsSection` immediately after the chart divider with no macro whitespace.

This weakened the Tonal-style hierarchy where the chart and STATS block are visually distinct regions.

### 3. ExerciseSetTable hierarchy was too compressed

`SummaryHeader` and `ColumnHeaders` were adjacent with direct gap = **0**.

The workout/date context and table column labels therefore read as one dense header block.

Set rows also used raw 10pt top/bottom padding, which was outside the canonical spacing scale.

### 4. Additional non-scale micro spacing existed

A full F4 spacing scan found additional non-canonical values:
- `Metric/ValueUnit Size=L` item gap = 3
- `Metric/ValueUnit Size=M` item gap = 2
- `Content/MediaCard/Portrait` content padding = 10
- `History/ExerciseSetTable` set-row vertical padding = 10

These had escaped the previous audit because that audit focused on repeated raw canonical values rather than every non-zero spacing value outside the spacing scale.

---

## Remediation

### Program/DetailComposition

Created a semantic `RailsSection` wrapper:
- top padding = `Space/24`
- gap between workout and related rails = `Space/32`
- child rails remain responsive / stretch to parent width

Result:
- supporting metadata → first rail gets a standard section break
- first rail card → second rail heading gets a clear major-section break
- related rail → primary action retains the existing action-section top padding

### History/MetricChart

Created a `StatsWrapper` around the existing reusable `StatsSection`:
- top padding = `Space/32`

The reusable `Stats/ValueList` source component was not changed globally.

### History/ExerciseSetTable

Adjusted header and row rhythm:
- date/summary → column header separation = `Space/12`
- column-header bottom padding = `Space/4`
- set-row vertical padding = `Space/8`
- row height remains content-derived rather than a raw spacing constant
- clipping disabled where no longer required

### Micro-spacing normalization

- `Metric/ValueUnit Size=L` value/unit gap → `Space/4`
- `Metric/ValueUnit Size=M` value/unit gap → `Space/4`
- `Content/MediaCard/Portrait` left/right/bottom content padding → `Space/12`

---

## Post-remediation spacing audit

Full F4 source-tree scan result:
- non-zero spacing values outside canonical scale = **0**
- canonical spacing values without Variable binding = **0**
- clipped text = **0**
- F4 top-level overlap = **0**

Key measured relationships:
- Program `RailsSection.paddingTop` = 24
- Program rail-to-rail gap = 32
- History `StatsWrapper.paddingTop` = 32
- ExerciseSetTable summary/date bottom gap = 12
- ExerciseSetTable column-header bottom padding = 4
- ExerciseSetTable row vertical padding = 8

---

## Responsive regression

Transient instances were re-tested at:
- 320
- 360
- 430

Patterns checked:
- `Program/DetailComposition`
- `History/MetricChart`
- `History/ExerciseSetTable`

Result at every width:
- non-intentional horizontal overflow = **0**
- clipped text = **0**

Intentional horizontal carousel overflow inside `Viewport` remains allowed for next-card peek.

---

## Visual QA result

### Program detail
**PASS**

`RECOMMENDED` and `MORE LIKE THIS` now read as separate sections rather than one continuous media rail. The 24/32 rhythm is consistent with the reconstructed Tonal spacing hierarchy.

### History / statistics
**PASS**

The 32pt gap before STATS restores a clear macro boundary between chart analysis and summary values.

### Exercise set table
**PASS**

Workout/date context, column labels, and set rows now form three distinct hierarchy levels while preserving dense scanability.

---

## Final verdict

**SPACING QA PASS.**

The focused review found real visual-rhythm defects that were not caught by the first F4 structural QA. They have been corrected and regression-tested.

F4 remains:

**PASS — READY FOR F5 EXAMPLES**

This QA adds an explicit rule for later phases: structural overlap/binding checks are necessary but do not replace a separate visual spacing-rhythm review of composed screens.
