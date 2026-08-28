# 26 MOBBIN -> FIGMA RECONSTRUCTION RETROSPECTIVE — DRAFT

**Status:** LIVING CHECKPOINT — NOT FINAL GUIDANCE  
**Updated:** 2026-08-28

## Purpose

This document captures the methodology, successful practices, repeated Figma-Agent failure modes, QA lessons, and prompt-design lessons discovered while reconstructing the Tonal visible design system from Mobbin references into the Fitness Figma file.

It is intentionally being written **before Phase A is complete** so that high-value failure history is not lost while the work continues.

This document is **not** the canonical design-system implementation spec. Current implementation authority remains:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- current Phase QA documents
- `docs/CURRENT.md` for project position

This retrospective is evidence for a later reusable guide that can be applied to another Mobbin reference app without repeating the same trial-and-error process.

---

## 1. Current checkpoint

Current reconstruction sequence:

`Mobbin evidence -> family audit -> consolidated spec -> Figma Foundations -> Components -> Patterns -> Examples -> representative visual QA -> Fitness customization`

Current Figma state at this checkpoint:
- `01_FOUNDATIONS` — PASS
- `02_COMPONENTS` — PASS
- `03_PATTERNS` — still in remediation / independent QA
- `Examples` — not started
- `10_FITNESS_SCREENS` — not started

Therefore, the methodology below is **validated through Foundations and Components, and partially validated through Patterns**, but it is not yet considered a finished universal method.

---

## 2. Reconstruction method that has worked well

### 2.1 Do not reconstruct from one screenshot

The useful unit of analysis is a **screen family**, not one isolated screen.

Examples used during the Tonal audit included:
- onboarding / profile setup
- home / dashboard / progress
- program / workout / exercise
- settings / profile / legal

Repeated relationships across multiple screens are more reliable than measurements from one screenshot.

### 2.2 Separate evidence confidence

Observed screenshot evidence should be classified before becoming a token or component rule.

Working evidence model:
- `OBSERVED` — repeated relationship directly visible in references
- `INFERRED` — consistent rule inferred from multiple references
- `ESTIMATED` — numeric/color/token value reconstructed from screenshots

Where useful, attach confidence:
- HIGH
- MEDIUM
- LOW

This prevents a screenshot estimate from being accidentally described as an official private design token.

### 2.3 Foundations first, then components, then patterns

The staged method has reduced downstream drift:

1. Foundations
2. Core components
3. Navigation / rows / overlays
4. Higher-order product patterns
5. Representative examples
6. Product screens

The key lesson is that **upstream errors propagate quickly**. A wrong spacing token, text-sizing rule, or component anatomy becomes much more expensive after multiple screens are generated.

### 2.4 Consolidate before Figma

Raw audits should not directly compete with each other during Figma generation.

Effective structure:
- audit/evidence docs explain why
- one canonical implementation spec explains what to build
- one Figma execution/QA contract explains how to build it

The Pre-Figma consolidation gate in `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` was useful because it resolved contradictory earlier estimates before large-scale Figma generation began.

### 2.5 GitHub is the rule source; Figma is the implementation artifact

The Figma Agent should explicitly read the current GitHub documents before mutation.

Do not assume that connecting GitHub means all Markdown has been ingested automatically.

The agent should know:
- current Phase
- canonical implementation spec
- mechanical QA rules
- STOP condition
- which existing assets are already PASS and must not regress

### 2.6 One prompt per Phase, internal batching inside the Phase

The most effective operating pattern so far is:

`one user instruction -> one Phase -> several internal batches -> Phase QA -> STOP`

Example:
- F1 Foundations
  - colors
  - spacing/radius/size
  - typography
  - documentation examples
  - Foundation Preflight

The Product Owner should not need to approve every micro-batch unless an actual product/design decision fork appears.

### 2.7 Independent QA is mandatory

A Figma Agent completion report is not sufficient evidence of PASS.

Core rule discovered during this project:

> **Agent self-report is a claim to verify, not a source of truth.**

PASS must be based on inspection of the actual Figma node tree, dimensions, bindings, component properties, nested instances, and screenshots where visual inspection matters.

This has repeatedly caught defects that were not obvious from the Agent's final report.

---

## 3. Important distinction: visual fidelity vs system correctness

A design can look correct while being structurally wrong.

Examples already encountered:
- button visually looked correct but Text Style was not actually applied
- Toggle visually existed but a nested instance had been distorted
- a 24px icon looked correct while the required 44px interaction wrapper had collapsed
- Dialog looked plausible while nested button instances were only 16/18px high
- Scrim visually dimmed the screen but was encoded in a weak/non-semantic way or failed to cover the viewport
- rows looked fine individually while component-set variants overlapped or escaped the component-set bounds

Therefore the QA model must separate:
- **QA-1 Structure / Auto Layout**
- **QA-2 Design-system / Binding / API**
- **QA-3 Visual / Reference / Product**

A visual PASS does not override QA-1 or QA-2 FAIL.

---

## 4. Figma Agent known failure modes discovered so far

The IDs below are provisional. They are candidates for a future reusable `Figma Agent Failure Modes` reference.

### FM-01 — Text Width Collapse

**Symptom**
- multi-character text wraps one character per line
- text appears vertically stacked

**Observed cause**
- unresolved `HUG` / `FILL` relationship
- parent does not provide a valid usable width

**Detection**
- inspect suspicious near-zero-width multi-character text layers
- stress test long Korean and English copy

**Prevention**
- paragraph width derives from available parent width
- paragraph height is content-driven
- do not place ambiguous FILL text in same-axis unresolved HUG structure

---

### FM-02 — Variable Exists but Is Not Bound

**Symptom**
- correct Variable collection exists
- components still contain repeated raw padding/gap/fill values

**Observed example**
- Space Variables existed while Auto Layout padding/gap still used repeated raw values

**Detection**
- inspect actual node bindings, not Variable inventory only
- count repeated canonical raw values

**Prevention**
- QA must verify node-level binding
- `Variable created` is not equivalent to `Variable used`

---

### FM-03 — Reusable Control Reimplemented Locally

**Symptom**
- parent component redraws a radio/check/toggle instead of nesting the existing component

**Observed example**
- ChoiceCard originally drew selection indicators locally instead of reusing `Control/Radio` and `Control/Check`

**Risk**
- future source-component changes do not propagate

**Detection**
- inspect nested INSTANCE count
- search for duplicate local geometry where a reusable control already exists

---

### FM-04 — Nested Instance Distortion

**Symptom**
- an instance technically reuses the correct source component but its dimensions are manually compressed or stretched

**Observed examples**
- Dialog nested buttons collapsed from 54pt to 16/18pt
- Sheet primary action collapsed from 54pt to 16pt
- Settings Toggle was reduced from 52x32 to 32x32

**Detection**
- compare important nested-instance dimensions against source component dimensions/minimums

**Prevention**
- distinguish reusable source geometry from parent FILL width behavior
- preserve minimum action height and control dimensions

---

### FM-05 — Visual Icon Size Replaces Interaction Size

**Symptom**
- a 24x24 visual icon also becomes the effective 24px interaction region

**Observed example**
- TopBar nested action wrapper compressed from intended 44pt to 24pt

**Detection**
- inspect parent-instance wrapper dimensions, not only the source component

**Prevention**
- encode visual size and interaction size separately
- e.g. `44x44 hit wrapper -> 24x24 visual icon`

---

### FM-06 — Cartesian Variant Explosion

**Symptom**
- every theoretical property combination becomes a parent variant

**Observed example**
- TopBar expanded to 72 variants from `Surface x Leading x Trailing x TitleMode`

**Risk**
- difficult inspection
- maintenance cost
- slower agent reasoning
- duplicated geometry

**Prevention**
- keep stable parent axes small
- move replaceable controls to nested component properties / instance swap where practical
- do not encode theoretical Cartesian products unless structurally necessary

---

### FM-07 — Internal Variant Overlap

**Symptom**
- component-set children occupy the same x/y location
- the component technically works but the library is unreadable

**Observed examples**
- Settings and Movement variant sets
- later nested TopBar Leading/Trailing sets

**Detection**
- run pairwise child-bound intersection checks inside component sets

**Prevention**
- arrange variants into a non-overlapping grid/sequence immediately after generation

---

### FM-08 — Component Set Bounds Drift

**Symptom**
- variants are rearranged but the Component Set frame remains at its previous size
- children extend outside the component-set boundary

**Observed examples**
- `Row/Settings`
- `Row/Movement`

**Detection**
- compare component-set bounds against union of child bounds

**Prevention**
- after variant rearrangement, resize the set to contain all variants

---

### FM-09 — Partial Overlay Scrim

**Symptom**
- Scrim exists but does not cover the reference viewport

**Observed example**
- Dialog variants with Scrim heights varying roughly 572–702 while overlay viewport remained 390x844

**Detection**
- compare Scrim bounds to overlay viewport bounds

**Prevention**
- encode `Overlay -> Scrim + Surface` explicitly
- Scrim uses full overlay dimensions regardless of content height

---

### FM-10 — Public Component API Not Exposed

**Symptom**
- nested controls exist, but parent users/agents must drill inside the component to change them

**Observed example**
- reduced TopBar architecture had nested Leading/Trailing components but initially did not expose them as parent-controllable choices

**Risk**
- component is visually reusable but operationally difficult for agents

**Prevention**
- expose stable semantic controls through component properties / instance swap where supported

---

### FM-11 — Optical Center Broken by Asymmetric Actions

**Symptom**
- a top-bar title is mathematically centered only inside remaining Auto Layout space, not the viewport

**Observed risk**
- Leading 44 and Trailing 88 can move a flow-based title off the true center

**Detection**
- calculate/check title center X against parent center X under asymmetric side actions

**Prevention**
- symmetric action zones or independent optical-center positioning for the centered-title mode

---

### FM-12 — Top-level Page Overlap After New Generation

**Symptom**
- newly created component/foundation family lands on top of existing library content

**Observed examples**
- Foundation documentation families
- newly created `Input/Underline`
- early F3 top-level family overlap

**Detection**
- pairwise intersection check for page-level design-system families

**Prevention**
- scan clear canvas area before placing new top-level nodes
- rerun overlap check after every batch

---

### FM-13 — Metadata / Description Omission

**Symptom**
- Variables/Text Styles work visually but their semantic purpose is not described

**Observed example**
- F1 initially had empty descriptions on all Variables and Text Styles

**Risk**
- weak machine readability for later agents

**Prevention**
- descriptions are part of the design-system contract, not optional documentation polish

---

## 5. QA checks that should become mandatory in the reusable method

Future Mobbin-to-Figma reconstruction QA should not rely only on visual inspection. Where possible, inspect measurable properties programmatically.

Candidate automated/measurable checks:

### Text
- multi-character text with suspicious near-zero width
- unstyled text count
- long Korean wrap test
- long English wrap test
- numeric no-wrap checks where applicable

### Layout
- top-level overlap count
- component-set internal overlap count
- component-set contains all child variants
- clipping / overflow
- Fixed/Hug/Fill sanity for canonical families

### Interaction geometry
- touch target below 44 where the system requires 44
- visual icon size vs interaction wrapper size
- nested control minimum dimensions

### Component reuse
- expected nested instance exists
- local duplicate geometry does not replace an existing reusable component
- detached-instance misuse

### Component API
- expected property/variant axes exist
- expected modes are parent-controllable where required
- variant count threshold / Cartesian explosion warning

### Binding
- canonical repeated spacing left raw
- semantic colors left raw
- expected Text Style missing
- radius/dimension Variable drift

### Overlay
- explicit Scrim exists where the pattern requires it
- Scrim dimensions equal viewport dimensions
- overlay layer order is correct

### Optical alignment
- centered title center X vs parent center X under asymmetric action combinations
- metric value/unit baseline relation where relevant

The important lesson is that **QA should produce counts and dimensions whenever possible**, not only statements such as "looks correct".

---

## 6. Prompt-design lessons

### 6.1 Always define a STOP condition

Without an explicit STOP condition, an agent may continue into the next Phase and propagate unverified structures.

Every Phase prompt should say exactly where to stop.

### 6.2 Preserve already-passing assets

Remediation prompts should explicitly say what **must not be rebuilt or changed**.

This reduces regression risk.

### 6.3 Ask for measurable final reporting

Useful report fields include:
- overlap count
- unstyled text count
- raw canonical spacing count
- instance dimensions
- component/variant counts
- nested-instance counts
- Scrim dimensions

A generic `PASS` statement is too weak.

### 6.4 Remediate the smallest failing layer

When a global rule is wrong:
- fix Variable / Component / Pattern architecture
- do not locally patch one screenshot

When only library organization is wrong:
- move/resize Component Set bounds
- do not rebuild internals

### 6.5 Do not ask the Product Owner to approve every micro-step

The Agent can run internal batches automatically when no product decision is required.

The Product Owner should approve Phase transitions, not routine technical corrections.

---

## 7. Research / reference lessons

### What worked
- inspect many screens from one reference app
- group by screen family
- infer repeated relations before numeric values
- cross-check global tokens against multiple families
- keep exact HEX/font/private tokens explicitly provisional
- separate visual reference from product behavior

### What should remain prohibited
- claiming reconstructed values are the reference company's official private tokens
- copying logos / proprietary icons / production imagery as Fitness assets
- committing full Mobbin/Tonal screenshots into the public repository
- copying reference behavior when confirmed Fitness behavior differs

Tonal remains the visual-system baseline; Hevy remains the practical workout-interaction reference; Fitness GitHub policy controls product behavior.

---

## 8. Candidate future reusable documentation set

After Phase A completes, consider extracting this Fitness-specific work into reusable, product-agnostic documents such as:

### `MOBBIN_DESIGN_SYSTEM_RECONSTRUCTION_GUIDE.md`
Human-readable methodology:
- reference collection
- screen-family batching
- evidence classification
- Foundation / Component / Pattern inference
- consolidation
- legal/reference boundaries
- reconstruction exit criteria

### `FIGMA_AGENT_RECONSTRUCTION_EXECUTION.md`
Agent execution contract:
- GitHub input order
- Auto Layout
- Fixed/Hug/Fill
- Variable/Style binding
- component API
- nested reuse
- phase batching
- STOP rules

### `FIGMA_AGENT_FAILURE_MODES.md`
Known failure catalog:
- FM-01 onward
- symptom
- cause
- measurable detection
- fix
- prevention prompt

### `FIGMA_RECONSTRUCTION_QA_MATRIX.md`
Reusable QA harness:
- structural checks
- binding checks
- visual/reference checks
- programmatic checks
- pass/fail thresholds

### Prompt templates
Reusable prompts for:
- discovery / audit
- Foundations
- Components
- Patterns
- Examples
- remediation
- independent QA

---

## 9. What is not yet proven

Do not promote this draft into a final universal guide yet.

Still unvalidated at this checkpoint:
- F3 final PASS
- higher-order product patterns after F3
- `Examples` composition quality
- 320–360 / 390 / 430 representative composition QA across all families
- full QA-3 comparison against representative Mobbin references
- whether the reconstructed system remains coherent when applied to actual Fitness screens
- the exact transition criteria from RECONSTRUCT to CUSTOMIZE under real product-screen pressure

These later results may add new failure modes or change the recommended workflow.

---

## 10. Next retrospective checkpoint

Update this document after:

1. F3 reaches independent PASS
2. `Examples` are built
3. representative QA-1 / QA-2 / QA-3 completes
4. at least the first Fitness screen family is built from the reconstructed system

At that point:
- promote confirmed lessons
- remove false leads
- add newly discovered failure modes
- identify which checks can be automated reliably
- split the final reusable methodology out of this Fitness-specific repo if desired

---

## 11. Current working conclusion

The project has demonstrated that a reasonably high-fidelity visible design system can be reconstructed from a sufficiently broad Mobbin screenshot sample **if** the process does not stop at visual imitation.

The emerging effective workflow is:

`Reference evidence -> structured inference -> canonical spec -> staged Figma generation -> independent structural/binding QA -> representative visual QA -> customization`

The strongest new learning is not merely how to copy a visible style. It is how to **prevent an AI/Figma Agent from producing a visually plausible but structurally weak design system**, and how to detect those failures with measurable independent QA before they propagate downstream.
