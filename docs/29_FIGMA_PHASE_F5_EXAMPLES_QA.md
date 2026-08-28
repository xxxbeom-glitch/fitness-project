# 29 FIGMA PHASE F5 EXAMPLES QA

**Status:** PASS — PHASE-A RECONSTRUCTION COMPLETE  
**Updated:** 2026-08-29

## Scope

Independent build + QA of Phase F5 representative examples in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`).

Canonical inputs:
- `docs/CURRENT.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`
- passing F1–F4 QA docs, including `docs/28_FIGMA_F4_SPACING_QA.md`

F5 goal was to prove that passing foundations/components/patterns compose coherently into representative real-screen examples before broad Fitness-specific customization.

---

## Examples page

Created Figma page exactly named:
- `Examples`

Representative examples:
1. `Onboarding/ChoiceQuestion_example`
2. `Dashboard/Home_example`
3. `Program/HeroDetail_example`
4. `Workout/MovementBlock_example`
5. `Exercise/InfoDetailMedia_example`
6. `Exercise/InfoDetailNoMedia_example`
7. `History/ChartTable_example`
8. `Settings/ListSection_example`

This exceeds the minimum representative coverage required by the canonical F5 contract and includes onboarding/settings even though the previous CURRENT shortlist focused on six higher-risk product examples.

---

## Reuse verification

Examples reuse real passing system components/patterns rather than local duplicates.

Verified representative instance families include:
- `ChoiceCard/Single`
- `Control/Radio`
- `Button/Primary/Compact`
- `Dashboard/PageShell`
- `Dashboard/FeatureMetric`
- `Dashboard/MetricGrid2`
- `Metric/ValueUnit`
- `Navigation/BottomBar`
- `Program/DetailComposition`
- `Hero/ProgramWorkout`
- `Content/MediaCarousel`
- `Content/MediaCard/Landscape`
- `Button/Primary/Content`
- `Navigation/TopBar`
- `Workout/BlockList`
- `Workout/BlockHeader`
- `Row/Movement`
- `Exercise/InfoDetail`
- `History/MetricChart`
- `Tab/Underline`
- `Stats/ValueList`
- `History/ExerciseSetTable`
- `Row/Settings`
- `Control/Toggle`

No F5-local duplicate of an existing reusable component was introduced.

---

## F5-discovered upstream defects and remediation

F5 correctly exposed two defects that earlier isolated component QA had not caught.

### 1. Selected ChoiceCard indicator contrast

Problem:
- `ChoiceCard/Single` selected variants used a dark selected surface.
- nested selected `Control/Radio` indicator also used `Color/Ink/Primary`.
- the selection control therefore disappeared on the dark selected card.

The same contextual defect existed in selected `ChoiceCard/Multi` indicators.

Remediation:
- selected indicators in both Single and Multi selected variants now use `Color/Ink/Inverse`.
- selected dark cards retain the existing dark surface and inverse text treatment.

Focused regression:
- 4 selected indicator overrides verified
- all 4 bound to `Color/Ink/Inverse`
- no unstyled text regression
- no canonical spacing binding regression

### 2. Row/Settings component-property wiring

Problem:
- Default Row/Settings variants correctly referenced the parent component properties.
- Destructive and Disabled variants had lost component-property references for Label / Helper / TrailingValue.
- F5 therefore showed the destructive row default copy (`Settings Label`) instead of the intended example override (`Delete account`).

Remediation:
- restored parent property references across all Destructive and Disabled Row/Settings variants:
  - Label
  - Helper visible
  - Helper text
  - Trailing value where applicable

Focused regression:
- all 15 Row/Settings variants now pass property-reference verification
- destructive example correctly renders `Delete account`
- unstyled text = 0
- canonical spacing without binding = 0

---

## QA-1 — Structure / Auto Layout

**PASS**

Verified:
- Examples page count = 8 representative examples
- top-level example overlap = 0
- local composition uses Auto Layout for structural relationships
- correct Fixed/Hug behavior after initial construction remediation
- no instance-internal layout patching remains in the final rebuild
- local onboarding question/helper stretch to available width
- Settings section label stretches to available width
- onboarding selected state remains visually legible
- example-specific wrappers do not interfere with product screen geometry

### Responsive QA

Transient screen clones were tested at:
- 320
- 360
- 430

All 8 examples passed at all 3 widths:
- non-intentional local horizontal overflow = 0

Screens tested:
- Onboarding/ChoiceQuestion
- Dashboard/Home
- Program/HeroDetail
- Workout/MovementBlock
- Exercise/InfoDetailMedia
- Exercise/InfoDetailNoMedia
- History/ChartTable
- Settings/ListSection

---

## QA-2 — Design system / Binding / Reuse

**PASS**

F5 source/example audit:
- unstyled text = 0
- canonical spacing values without Variable binding = 0
- non-scale local spacing = 0
- top-level example overlap = 0
- reusable UI is represented by instances rather than local redraws
- selected-choice contextual color correction is semantically bound
- Row/Settings property API works across Default / Destructive / Disabled tones

No avoidable detached-instance workaround was used to solve F5 composition problems.

---

## QA-3 — Visual / Reference / Product

**PASS FOR PHASE-A REPRESENTATIVE BASELINE**

Fresh Tonal/Mobbin visual checks were used for the newly composed/high-risk families.

### Onboarding
Representative references:
- https://mobbin.com/screens/ee722d52-a544-4a60-80d0-44c07545d480
- https://mobbin.com/screens/cf378226-5e32-4f37-976f-35352ceebdc3

Verified relationships:
- centered question/helper hierarchy
- restrained neutral choice surfaces
- strong dark selected state with inverse control treatment
- compact bottom primary action
- large whitespace and sparse composition

### Settings / profile list
Representative references:
- https://mobbin.com/screens/812b461c-f9bf-44a8-9456-b4ba675cfeed
- https://mobbin.com/screens/0090bd2e-76af-4e22-b565-fe04b8ba4735

Verified relationships:
- simple list hierarchy
- restrained separators
- trailing values/toggles/actions
- minimal decorative surface treatment
- destructive action remains semantically distinct

### Program / Dashboard / History
F5 reuses the already-passing F4 representative patterns. No F5-local visual patch was applied to those internals.

### Fitness product boundary
PASS:
- examples demonstrate composition only
- Tonal proprietary imagery/icons/copy are not used as Fitness assets
- Tonal hardware/business behavior was not promoted into Fitness product policy
- placeholders remain intentional until final Fitness icon/media direction is approved

---

## Final verdict

### QA-1 Structure / Auto Layout
**PASS**

### QA-2 Binding / Reuse / API
**PASS**

### QA-3 Visual / Reference / Product
**PASS**

### F2/F3 focused regression after F5 remediation
**PASS**

### F5 status
**PASS — PHASE-A TONAL RECONSTRUCTION BASELINE COMPLETE**

---

## Gate / next action

The gate blocking broad Fitness-specific visual design is cleared.

Next phase:
- create `10_FITNESS_SCREENS`
- switch from **RECONSTRUCT** to **CUSTOMIZE**
- use Fitness Product/Policy/Decision docs as behavior authority
- retain the passing Phase-A system as the visual-system baseline
- use Hevy as practical repeated weight-training interaction reference where relevant
- continue structure / spacing-rhythm / binding / responsive / visual QA on representative Fitness screens

Do not reinterpret Tonal behavior as Fitness product policy during customization.
