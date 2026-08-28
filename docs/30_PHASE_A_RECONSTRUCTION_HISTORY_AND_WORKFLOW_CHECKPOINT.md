# 30 PHASE-A RECONSTRUCTION HISTORY & WORKFLOW CHECKPOINT

**Status:** CURRENT HISTORY CHECKPOINT  
**Updated:** 2026-08-29

## Purpose

This document records the major design-system and Figma reconstruction milestones completed so far, including failures discovered by independent QA, the corrections that followed, and the current workflow question about whether Phase B should remain Figma-first or move toward code-first execution.

This is a history/checkpoint document, not a replacement for canonical product decisions or implementation specs.

Canonical authority remains:
- `docs/CURRENT.md` for current project position
- `docs/08_DECISIONS.md` and `docs/13_SCREEN_DESIGN_DECISIONS.md` for product/screen decisions
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` for the Phase-A visual-system baseline
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md` and `docs/17_FIGMA_AGENT_EXECUTION_QA.md` for Figma execution/QA

---

## 1. Why Phase A existed

The project intentionally did not start by drawing final Fitness product screens.

The sequence was designed to first reconstruct a coherent visible design system from Tonal references, while keeping product behavior separate:
- Tonal = visual-system baseline
- Hevy = practical weight-training interaction/functionality reference
- Fitness GitHub Product/Policy/Decision docs = behavior and scope authority

The goal was to avoid two common failures:
1. building final screens before reusable visual rules were stable
2. copying Tonal product semantics merely because Tonal supplied the visual reference

---

## 2. Pre-Figma reconstruction work

Before the current Figma system was built, the project created and consolidated:
- reference/audit material
- Tonal design-system reconstruction baseline
- canonical design-system specification
- Figma build instructions
- Figma execution/QA contract
- product-pattern audits
- pre-Figma consolidation QA

The important operational lesson was to separate:
- evidence / screenshots / observations
- canonical implementation values
- execution rules
- product behavior decisions

This prevented older screenshot estimates from competing with the current implementation spec during generation.

---

## 3. F1 — Foundations

**Result: PASS**

Built the semantic base system including:
- colors
- typography roles
- metric typography
- spacing scale
- radii
- icon/touch sizes
- sizing/alignment examples

Independent QA established the rule that visual similarity alone is insufficient: actual Variable bindings, Text Styles, semantic names, and descriptions must be inspected.

Key lesson:
- a token existing in Figma is not enough; actual nodes must bind to it.

---

## 4. F2 — Core components

**Result: PASS**

Built reusable controls/actions including:
- primary / secondary / text buttons
- ChoiceCard variants
- radio / check / toggle / stepper
- segmented and mode controls
- underline input

Independent QA corrected multiple reusable-component issues before downstream composition.

Later F5 integration QA also exposed an additional contextual defect:
- selected ChoiceCard used a dark surface
- selected radio/check indicator also used dark ink
- the selected control disappeared on the selected card

Correction:
- selected ChoiceCard Single/Multi indicators now use inverse/white ink.

This reinforced the rule that an isolated component can pass while still failing when composed in its real context.

---

## 5. F3 — Navigation / rows / overlays

**Result: PASS**

Built reusable higher-level component families including:
- TopBar
- BottomBar
- underline tabs
- Settings / Movement rows
- Workout block header
- dialog / action sheet / toast

Important failures found during QA included:
- nested instance distortion
- touch target collapse
- internal variant overlap
- component-set bounds drift
- overly large Cartesian variant architecture
- optical-centering risk with asymmetric TopBar actions
- incomplete parent component APIs

A later F4 integration check found that `Navigation/TopBar Surface=Overlay` used dark ink over a dark hero surface.

Correction:
- Overlay surface remained transparent
- title/leading/trailing ink changed to inverse/white
- existing F3 geometry/API and 44pt touch wrappers were preserved

F3 regression remained PASS.

A later F5 integration check also found that Destructive/Disabled `Row/Settings` variants had lost parent component-property references.

Correction:
- Label / Helper / TrailingValue property wiring was restored across all affected variants.

---

## 6. F4 — Product patterns

### Initial result

**FAIL — remediation required**

The initial F4 build created the expected higher-order pattern families, but independent QA found material defects including:
- Hero Overlay TopBar contrast failure
- MediaCarousel heading alignment error
- History represented by one stretched tab instead of a real multi-tab row
- clipped History date range
- History chart too placeholder-like
- clipped ExerciseSetTable headers
- raw canonical spacing regression
- Program/DetailComposition too skeletal to teach the intended Tonal section rhythm

The important lesson was that an agent reporting `DONE` did not mean the pattern batch was actually complete.

### F4 remediation result

**PASS**

Corrections included:
- Overlay TopBar inverse ink
- 24pt carousel heading alignment
- real Week / Month / Year tab composition
- date-range clipping removal
- representative sparse chart hierarchy
- set-table header correction
- source-level spacing Variable binding cleanup
- richer Program detail composition with supporting metadata, multiple rails, and meaningful CTA

Responsive checks passed at 320 / 360 / 430.

---

## 7. F4 spacing-rhythm QA

A separate visual review after structural F4 PASS found that structure/binding QA still did not fully prove visual spacing quality.

**Result: PASS after remediation**

Real defects found:
- `RECOMMENDED` and `MORE LIKE THIS` rails visually touched
- History chart and STATS lacked macro separation
- ExerciseSetTable date context and column labels were too compressed
- several 2 / 3 / 10 values existed outside the canonical spacing scale

Corrections included:
- Program rails: 24pt top section separation + 32pt rail-to-rail separation
- History chart -> STATS: 32pt separation
- ExerciseSetTable date -> columns: 12pt
- set-row vertical padding: 8pt
- Metric value/unit micro-gaps normalized to 4pt
- Portrait media-card content padding normalized to 12pt

Post-remediation:
- non-scale spacing = 0
- canonical spacing without binding = 0
- clipped text = 0
- top-level overlap = 0
- 320 / 360 / 430 responsive regression = PASS

This established a new rule:

> structural QA and binding QA do not replace a dedicated spacing-rhythm review.

---

## 8. F5 — Representative Examples

**Result: PASS — Phase-A reconstruction complete**

Created the Figma page:
- `Examples`

Representative compositions:
1. Onboarding / Choice Question
2. Dashboard / Home
3. Program / Hero Detail
4. Workout / Movement Block
5. Exercise Detail / Media
6. Exercise Detail / No Media
7. History / Chart + Table
8. Settings / List Section

F5 intentionally used real existing components/patterns instead of local duplicate redraws.

Final representative QA:
- QA-1 Structure / Auto Layout = PASS
- QA-2 Binding / Reuse / API = PASS
- QA-3 Visual / Reference / Product = PASS
- 8 examples x 320 / 360 / 430 responsive checks = PASS
- example overlap = 0
- unstyled text = 0
- local non-scale spacing = 0
- canonical spacing without Variable binding = 0

Phase-A Tonal reconstruction gate is therefore cleared.

---

## 9. What the Figma-first phase achieved

The Figma-first reconstruction was useful because the project was still discovering the design language.

It provided a controlled place to establish and visually compare:
- typography hierarchy
- spacing rhythm
- density
- component states
- alignment rules
- responsive behavior
- media/no-media behavior
- reusable higher-order compositions

The work also exposed AI/Figma-Agent failure modes that would likely have propagated into implementation if the project had started directly with many production screens.

Therefore F1–F5 should not be treated as wasted design work merely because the final application output is code.

---

## 10. New workflow observation: Figma-first vs code-first

After Phase A completed, a new efficiency question became clear:

> If the real product output is React Native code, is it still efficient to fully design every remaining Fitness screen in Figma and then reproduce the same structure again in code?

Current working assessment:
- during design-language discovery, Figma-first was valuable
- after the system is stable, full Figma -> code duplication can become unnecessary serial work
- many things already validated in Figma map directly to code tokens/components:
  - spacing tokens
  - typography roles
  - component variants
  - responsive constraints
  - page alignment
  - reusable screen patterns

The likely faster Phase-B workflow is therefore **code-first or code-led**, while preserving the Figma Phase-A system as the visual baseline.

This does **not** mean abandoning Figma.

Figma remains useful for:
- high-risk visual exploration
- materially new interaction/layout patterns
- side-by-side visual alternatives
- global design-system changes
- visual reference/QA

Code becomes a better primary execution target when:
- the pattern already exists
- the screen mostly composes known components
- interaction and device behavior matter more than visual invention
- implementing the same screen twice would add little information

---

## 11. Strongest risk of switching too aggressively to code-first

The strongest reason not to abandon Figma/system discipline is design drift.

If each implementation screen begins inventing local values such as:
- arbitrary margin/padding
- one-off font sizes
- local colors
- duplicate controls
- screen-specific component variants

then the visual system will decay quickly even if initial screens look acceptable.

Therefore a code-first Phase B only makes sense if the codebase carries the same design-system discipline:
- semantic tokens
- reusable components
- no arbitrary repeated raw spacing
- representative responsive tests
- screenshot/device QA
- global fixes at token/component level rather than local patching

---

## 12. Current workflow status

Confirmed:
- Phase A F1–F5 is complete
- Tonal reconstruction baseline is now stable enough to support Fitness-specific customization
- broad Fitness product work no longer needs more Tonal reconstruction first

Current workflow optimization discussion:
- a **code-first Phase-B pilot is strongly favored for efficiency**
- the Figma Phase-A system should remain the visual-system baseline
- Figma should be used selectively where it adds information rather than automatically duplicating every production screen

This workflow change should be treated as a working execution direction until the Product Owner explicitly locks it as the permanent Phase-B operating model.

---

## 13. Next checkpoint

The next history update should happen after the first real Fitness screen family is executed in Phase B.

That checkpoint should compare actual effort and quality between:
- Figma-first screen design
- code-first screen composition

Measure at least:
- elapsed design/implementation time
- number of visual QA iterations
- token/component drift
- responsive defects
- interaction defects
- how often Figma was actually necessary

That evidence should determine whether the code-first workflow becomes the permanent default for the rest of the product.
