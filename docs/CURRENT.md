# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP MODE — TONAL PHASE-A FIGMA F4 REMEDIATION REQUIRED`

The current work remains the Tonal reconstruction baseline. Broad Fitness screen customization is still gated until F4 Product Patterns and later representative Examples pass independent QA.

## Product authority

Canonical product decisions remain in:
- `docs/08_DECISIONS.md` through `DEC-021`
- `docs/13_SCREEN_DESIGN_DECISIONS.md` for approved screen-level UX/UI decisions
- `docs/09_TECHNICAL_STACK.md` for React Native + Expo + TypeScript direction

Core product constraints remain unchanged:
- general-purpose weight-training tracker
- first-run choice: recommended routine / build my own routine
- short recommendation onboarding: goal + weekly availability + workout duration
- gym-first initial recommendation
- authentication required
- offline-first workout persistence + change-driven sync
- one active editing device for an in-progress workout
- active session survives app/process/device restart until explicit finish/discard
- fast logging, previous-performance visibility, flexible editing, and active-session recovery are core
- exercise detail is text-first / media-optional
- custom exercises are MVP-critical
- monetization remains deferred

## Visual-system authority

- **Tonal = Phase-A visual-system reconstruction/replication baseline**
- **Hevy = practical weight-training functionality / repeated interaction reference**
- **Fitness GitHub Product/Policy/Decision docs = behavior and scope authority**

Canonical implementation / execution references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Methodology / work-history checkpoint:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md` — LIVING DRAFT

## Current Figma file

- file: `tracker-app3`
- file key: `tBpQfpAR1apJngF8a7qyH9`

Current pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

Not started:
- `Examples`
- `10_FITNESS_SCREENS`

## Completed phases

### F1 Foundations
Independent QA:
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

**F1 RESULT: PASS**

### F2 Core Components
Independent QA:
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

**F2 RESULT: PASS**

### F3 Navigation / Rows / Overlays
Independent QA:
- `docs/25_FIGMA_PHASE_F3_PATTERN_QA.md`

**F3 STRUCTURAL RESULT: PASS**

Important F4 integration note:
- F4 contextual QA exposed a visual-semantic issue in `Navigation/TopBar Surface=Overlay`: the geometry/API remain valid, but overlay title/action ink is not legible on the dark Hero/media surface.
- Correct this source visual treatment during F4 remediation and rerun F3 regression QA.

## Phase F4 — current result

Independent QA:
- `docs/27_FIGMA_PHASE_F4_PRODUCT_PATTERNS_QA.md`

**F4 RESULT: FAIL — REMEDIATION REQUIRED BEFORE F5 EXAMPLES**

### F4 inventory

The expected higher-order system is broadly present:
- Dashboard/PageShell
- Dashboard/FeatureMetric
- Dashboard/MetricGrid2
- Metric/ValueUnit
- Stats/ValueList
- Content/MediaCard/Landscape
- Content/MediaCard/Portrait
- Content/MediaCarousel
- Hero/ProgramWorkout
- Program/DetailComposition
- Workout/BlockList
- Exercise/InfoDetail as one component set with Media=Present / Media=None
- History/MetricChart
- History/ExerciseSetTable

The two Exercise states are treated as two logical canonical patterns inside one reusable component set; this architecture is acceptable.

### Verified F4 PASS signals

- F4 top-level overlap = 0
- Metric/ValueUnit internal overlap = 0
- Exercise/InfoDetail internal overlap = 0
- F4 component-set containment = PASS
- unstyled F4 text = 0
- suspicious text collapse = 0
- raw semantic-color matches without Variable binding = 0
- no major nested-instance height distortion detected
- Exercise NoMedia state removes/collapses the media region correctly
- F2/F3 reuse is generally present in Dashboard, Hero, Program, Workout, Exercise, and History compositions

### Current F4 blockers

1. **Hero Overlay TopBar contextual visual failure**
   - `Hero/ProgramWorkout` correctly uses `Navigation/TopBar Surface=Overlay`
   - current Overlay ink/action treatment becomes effectively invisible over dark Hero/media
   - keep transparent overlay surface but use inverse/white title/action treatment under the Hero readability scrim
   - preserve F3 geometry/API and rerun F3 regression

2. **MediaCarousel section-heading alignment**
   - `SectionLabel` currently starts at x=0 while cards begin at x=24
   - align section heading to the canonical 24pt page line while keeping the carousel viewport full-width for next-card peek

3. **History tab composition is structurally wrong**
   - current `History/MetricChart` stretches one `Tab/Underline` instance to 390 and labels it `Tab`
   - compose a real three-tab row from three existing Tab instances with Active/Inactive states

4. **History DateRange clips text**
   - DateRange frame = 390 x 16
   - DateLabel = y8 / height18
   - clipsContent=true
   - make the container tall/HUG enough to contain the text and preserve spacing before the chart

5. **History chart is too blank to validate Tonal chart hierarchy**
   - add a minimal representative axis/grid + semantic data mark skeleton
   - production analytics behavior is not required

6. **ExerciseSetTable ColumnHeaders clip text**
   - ColumnHeaders frame height = 10
   - SET / WEIGHT / REPS text height = 14
   - fix to HUG or sufficient height without losing numeric-column alignment

7. **F4 raw canonical spacing regression**
   - avoidable raw canonical spacing count = **58**
   - repeated 4 / 8 / 12 / 24 spacing must bind to existing `Space/*` Variables where supported
   - target after remediation = 0

8. **Program/DetailComposition is too skeletal for the Tonal pattern baseline**
   - current structure only demonstrates Hero + description + one rail + CTA
   - enrich enough to teach Tonal's repeated supporting metadata / secondary module / section rhythm without copying Tonal-specific product behavior

### Non-blocking cleanup during F4 remediation

- Dashboard MetricGrid demo data should not show `1,250 lbs` under WORKOUTS / STREAK
- Exercise example title/instruction copy should describe the same movement
- Program primary CTA should not remain generic `LABEL`

## Current QA verdict

F4 QA-1 Structure / composition: **FAIL**

F4 QA-2 Reuse / Binding / API: **FAIL**
- primary blocker: raw canonical spacing = 58

F4 direct Tonal visual sanity: **FAIL**

## Current next action

Remain in F4 for one focused remediation pass.

Priority:
1. fix source Overlay TopBar contextual colors and revalidate F3
2. fix carousel heading alignment
3. rebuild History tab row from actual Tab instances
4. fix History DateRange clipping and chart skeleton
5. fix SetTable header clipping
6. bind all avoidable F4 canonical spacing
7. enrich Program/DetailComposition enough for the documented Tonal hierarchy
8. clean representative demo copy
9. rerun F4 QA-1 / QA-2 / direct Mobbin comparison
10. STOP for independent review

## Gate

Do **not** create `Examples` until F4 Product Pattern QA passes.

Do **not** start `10_FITNESS_SCREENS` until F5 Examples and representative QA pass.

Phase sequence:

`F1 PASS -> F2 PASS -> F3 PASS -> F4 REMEDIATION -> F4 PASS -> F5 Examples -> Representative QA -> 10_FITNESS_SCREENS`

## Canonical source rule

GitHub remains the Source of Truth for product policy, design-system specification, execution rules, QA state, and next action. Figma is the visual implementation/reference artifact and must be corrected when independent QA finds a conflict.