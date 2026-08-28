# 27 FIGMA PHASE F4 PRODUCT PATTERNS QA

**Status:** FAIL — REMEDIATION REQUIRED BEFORE F5 EXAMPLES  
**Updated:** 2026-08-29

## Scope

Independent QA of Phase F4 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the Figma Agent reported completion.

Canonical inputs:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

Direct Mobbin comparison was also performed for representative Tonal program-detail, history/statistics, and dashboard screens.

---

## Overall verdict

**F4 FAIL.**

The Figma Agent created the expected higher-order pattern families and reused many passing F2/F3 assets correctly, but several visual-composition defects and measurable structural/binding regressions remain.

Do not create `Examples` or `10_FITNESS_SCREENS` yet.

---

## Inventory

Current F4 top-level objects on `03_PATTERNS`:
- `Metric/ValueUnit`
- `Stats/ValueList`
- `Dashboard/FeatureMetric`
- `Dashboard/MetricGrid2`
- `Dashboard/PageShell`
- `Content/MediaCard/Landscape`
- `Content/MediaCard/Portrait`
- `Content/MediaCarousel`
- `Hero/ProgramWorkout`
- `Program/DetailComposition`
- `Workout/BlockList`
- `Exercise/InfoDetail` component set
  - `Media=Present`
  - `Media=None`
- `History/MetricChart`
- `History/ExerciseSetTable`

Top-level F4 object count = **14**.

The canonical 15 logical patterns are represented because `Exercise/InfoDetail/MediaPresent` and `Exercise/InfoDetail/NoMedia` were implemented as two variants inside one reusable `Exercise/InfoDetail` component set. This architecture is acceptable and should not be split merely to satisfy a literal top-level count.

Pages remain exactly:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

No `Examples` or `10_FITNESS_SCREENS` page exists.

---

## Verified PASS items

### Structural organization
- F4 top-level overlap = **0**
- `Metric/ValueUnit` internal variant overlap = **0**
- `Exercise/InfoDetail` internal variant overlap = **0**
- both F4 component sets contain all child variants
- suspicious near-zero-width text collapse = **0**
- unstyled F4 text = **0**
- raw semantic-color matches without Variable binding = **0**
- distorted nested instances detected by source-height sanity check = **0**

### Reuse
Passing reuse was confirmed in several major compositions:
- `Dashboard/PageShell` reuses `Dashboard/FeatureMetric`, `Dashboard/MetricGrid2`, and `Navigation/BottomBar`
- `Dashboard/FeatureMetric` and `Dashboard/MetricGrid2` reuse `Metric/ValueUnit`
- `Hero/ProgramWorkout` reuses `Navigation/TopBar`
- `Program/DetailComposition` reuses `Hero/ProgramWorkout`, `Content/MediaCarousel`, and `Button/Primary/Content`
- `Workout/BlockList` reuses `Workout/BlockHeader` and `Row/Movement`
- `Exercise/InfoDetail` reuses `Navigation/TopBar`
- `History/MetricChart` reuses `Navigation/TopBar`, `Metric/ValueUnit`, `Tab/Underline`, and `Stats/ValueList`

### Exercise NoMedia behavior
`Exercise/InfoDetail` is implemented as a component set:
- `Media=Present`: 390 x 562
- `Media=None`: 390 x 342

The NoMedia variant does not preserve an empty fixed media rectangle. The layout collapses upward as required by Fitness media-optional policy.

---

## Blocker 1 — Hero Overlay TopBar is visually invalid on dark media

`Hero/ProgramWorkout` correctly nests:
- `MediaSlot`
- `ReadabilityOverlay`
- `Navigation/TopBar`
- `HeroContent`

The nested TopBar uses:
- `Surface=Overlay`
- `TitleMode=Center`

However, the current F3 `Surface=Overlay` visual treatment uses dark/primary ink for the title and icon placeholders. On the F4 dark hero/media surface these controls disappear or become effectively invisible.

The Hero screenshot therefore shows the title/category hierarchy but no legible top navigation controls.

This is a **contextual integration defect**: F3 structure remains valid, but F4 reveals that the Overlay visual semantics are incomplete.

Required remediation:
- keep `Surface=Overlay` background transparent
- use inverse/white ink for title and action/icon placeholders when placed over the Hero readability scrim
- preserve 44 x 44 hit wrappers and the current F3 API
- rerun F3 regression after the source component correction

Do not replace Overlay with an opaque Dark bar merely to make controls visible; the reference pattern uses controls over media.

---

## Blocker 2 — MediaCarousel section heading breaks the canonical 24pt alignment line

Actual `Content/MediaCarousel` geometry:
- `SectionLabel`: x=0, width=390
- `Viewport`: x=0, width=390
- first media card: x=24
- second card: x=316

This makes the section heading start at the viewport edge while the cards start at the canonical 24pt page inset.

The defect is visible both in the standalone carousel and inside `Program/DetailComposition`, where `RECOMMENDED` sits flush to the left screen edge while the description and media card content follow the 24pt alignment line.

Required remediation:
- `SectionLabel` x = 24
- section-label usable width = 342 on the 390 baseline
- retain the full-width clipping viewport for the horizontal rail
- retain intentional next-card peek

---

## Blocker 3 — History tabs are not a real tab row

`History/MetricChart` currently contains only one `Tab/Underline` instance:
- width = **390**
- label = **"Tab"**
- state = Active
- layout = Equal

This stretches a single primitive tab across the full screen instead of composing an actual multi-tab history control.

The Tonal reference history screens use a clear three-tab row such as Week / Month / Year with one active underline.

Required remediation:
- create a History tab-row container from **three actual `Tab/Underline` instances**
- equal-width children inside the 390 row
- one Active, two Inactive
- generic representative labels are acceptable; Tonal proprietary copy is not required
- do not create a new duplicate tab primitive

---

## Blocker 4 — History DateRange text is structurally clipped

Actual geometry:
- `DateRange` frame = 390 x **16**
- `DateLabel` = x24 / y8 / 342 x **18**
- `DateRange.clipsContent = true`

The child extends below its parent and the screenshot visibly clips the date/range label.

Required remediation:
- make DateRange vertical sizing HUG or otherwise large enough to contain its 18pt text plus intended spacing
- preserve x=24 alignment
- no text clipping
- keep the chart region below it with clear separation

---

## Blocker 5 — History chart is too placeholder-like for Tonal visual QA

The current `ChartRegion` is essentially a large blank subtle-gray rectangle.

For F4, production analytics logic is not required, but the pattern audit explicitly reconstructs Tonal's sparse chart hierarchy:
- subtle axes/grid
- semantic mint/green primary data mark
- sparse annotation
- large whitespace

A blank rectangle cannot validate chart density, hierarchy, or relationship to the date/tabs/stats sections.

Required remediation:
- build a minimal representative chart skeleton inside `ChartRegion`
- use semantic bound colors
- include subtle axis/grid treatment and at least one representative data bar/line/marker
- keep it a visual pattern, not production analytics logic

---

## Blocker 6 — ExerciseSetTable column headers are clipped

Actual geometry:
- `ColumnHeaders` frame height = **10**
- `SET` text height = **14**
- `WEIGHT` text height = **14**
- `REPS` text height = **14**
- `ColumnHeaders.clipsContent = true`

This is a measurable structural failure even though the screenshot remains partly readable.

Required remediation:
- make ColumnHeaders HUG or at least tall enough for 14pt labels plus intended padding
- preserve stable column alignment
- preserve non-wrapping numeric columns

---

## Blocker 7 — F4 reintroduced raw canonical spacing

Independent node-level binding audit found:

**avoidable raw canonical spacing count = 58**

Examples include repeated raw:
- 4
- 8
- 12
- 24

across nodes such as:
- metric value/unit gap
- stat-row vertical padding
- media-card safe-area padding/gap
- carousel gap
- hero-content gap/padding
- description spacing
- history DateRange padding
- set-table header padding

This violates the F4 QA-2 contract and regresses from F3, where avoidable raw canonical spacing count was 0.

Required remediation:
- bind supported repeated spacing properties to existing `Space/*` Variables
- fix the source F4 component nodes rather than patching downstream instances independently
- after remediation: avoidable raw canonical spacing = **0**

Semantic-color audit currently remains PASS with raw semantic-color matches = 0.

---

## Blocker 8 — Program/DetailComposition is too skeletal for the reconstructed Tonal composition baseline

Current composition contains only:
1. Hero
2. one description region
3. one media carousel
4. one primary action

This is structurally clean but too reduced to teach the repeated Tonal program-detail hierarchy documented in `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md` and visible in current Tonal references.

Representative Tonal program-detail relationships repeatedly include additional layers such as:
- compact coach/author or supporting metadata strip
- release/supporting metadata
- secondary goal/progress/info module where relevant
- workouts rail
- similar/related rail or another clearly separated supporting section
- prominent join/start action

Required remediation:
- enrich the reusable composition enough to teach Tonal's vertical rhythm and section hierarchy
- use neutral generic placeholders/metadata rather than copying Tonal-specific product behavior or copy
- do not promote Tonal hardware/business behavior into Fitness policy

This is a **visual-pattern completeness** issue, not a request to copy Tonal product semantics wholesale.

---

## Non-blocking polish issues

These should be corrected during the same remediation when low-cost, but they are not the primary gate reasons.

### Dashboard demo-copy semantics
`Dashboard/MetricGrid2` currently demonstrates the same `1,250 lbs` metric for tiles labeled `WORKOUTS` and `STREAK`.

The component structure is usable, but sample data should be semantically coherent so visual QA is not misleading.

### Exercise demo-copy mismatch
The `Barbell Bench Press` example's NoMedia instruction text currently describes a cable lateral-raise movement.

The NoMedia layout itself is correct; update the representative copy for consistency.

### Generic button copy
`Program/DetailComposition` currently shows a primary CTA label of `LABEL`.

Use neutral but meaningful representative copy such as `START` or another non-proprietary generic action label.

---

## Direct visual-reference findings

### Program detail
Compared with current Tonal program-detail references, the F4 composition captures the media-led hero idea but currently misses enough of the supporting section hierarchy that it does not yet serve as a strong reconstruction baseline.

Representative references:
- https://mobbin.com/screens/7a350c49-0451-4f16-add0-6ecd14f5ed7b
- https://mobbin.com/screens/5e8721fb-bbbb-4ccb-bb63-a88315dac117
- https://mobbin.com/screens/391d794f-9df2-4501-b188-2fecf8679bf5

### History/statistics
The current F4 history composition materially diverges from Tonal because of the single stretched tab, clipped date label, and blank chart region.

Representative references:
- https://mobbin.com/screens/7b996db9-f556-4656-aea3-ac8e76be62aa
- https://mobbin.com/screens/8815ce5b-8321-434d-afd7-3a8f55f81542

### Dashboard
The current dashboard shell is directionally closer: subtle canvas, white modules, large metrics, and black bottom navigation are broadly consistent with the documented Tonal relationship. Its main remaining issues are demo-content quality and later responsive validation, not a wholesale visual rebuild.

Representative reference:
- https://mobbin.com/screens/74e51c99-0993-4408-9ef7-fcd0a2ebd96c

---

## Current gate result

### QA-1 — Structure / Responsive composition
**FAIL**

Blocking reasons:
- History DateRange clips its text
- ExerciseSetTable ColumnHeaders clip 14pt text in a 10pt frame
- History tabs are incorrectly composed as one stretched primitive
- contextual Hero overlay controls are visually unusable over dark media
- responsive 320–360 / 430 behavior is not yet independently proven after these corrections

### QA-2 — Reuse / Binding / API
**FAIL**

Blocking reason:
- avoidable raw canonical spacing = **58**

Passing QA-2 signals:
- semantic color binding audit = PASS
- unstyled text = 0
- nested reuse is generally good
- no distorted nested-instance heights detected
- no component-set overlap/containment failure

### Visual sanity / Tonal comparison
**FAIL**

Main reasons:
- Hero overlay navigation disappears against the media surface
- Program detail composition is too skeletal
- MediaCarousel heading alignment is wrong
- History composition is materially weaker than the Tonal reference family

### F4 status
**NOT READY FOR F5 EXAMPLES**

---

## Required next action

Remain in F4 for one focused remediation pass.

Priority order:
1. fix `Navigation/TopBar Surface=Overlay` contextual visual semantics and revalidate F3
2. fix Carousel heading page alignment
3. rebuild History tab-row composition from actual Tab instances
4. fix DateRange clipping and add minimal representative chart skeleton
5. fix ExerciseSetTable ColumnHeaders height/clipping
6. bind all avoidable F4 canonical spacing to existing Variables
7. enrich Program/DetailComposition enough to teach the Tonal section rhythm
8. clean demo-copy inconsistencies
9. rerun F4 QA-1 / QA-2 / direct visual comparison
10. STOP before `Examples`

Do not start F5 until independent QA passes.
