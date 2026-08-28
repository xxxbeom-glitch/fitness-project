# 09 DESIGN SYSTEM

**Status:** TONAL PHASE-A BASELINE CONSOLIDATED — FIGMA BUILD READY, FINAL TOKENS NOT FROZEN
**Updated:** 2026-08-28

## Purpose

Define the strategic visual-system direction for Fitness.

This file explains **why and how the design system is being built**. It is not the detailed token/component implementation source.

Canonical implementation sources:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` — implementation-facing Phase-A spec
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md` — Figma construction sequence
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md` — mechanical execution and QA contract
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` — pre-Figma consolidation gate / conflict resolution

Evidence/provenance:
- `docs/14_TONAL_RECONSTRUCTION_BASELINE.md`
- `docs/18_TONAL_FOUNDATIONS_AUDIT.md`
- `docs/19_TONAL_CORE_COMPONENTS_AUDIT.md`
- `docs/20_TONAL_INTERMEDIATE_QA_BATCH01_02.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`

If an old audit value conflicts with `15_TONAL_DESIGN_SYSTEM_SPEC.md`, the canonical implementation spec wins until a later QA-approved correction updates it.

---

## Design Source-of-Truth rule

Figma is the visual implementation/reference artifact, not the product-policy Source of Truth.

- GitHub Product / Policy / Decision docs define **what the product means and how it behaves**.
- GitHub design-system docs define **the current visual-system rules and QA contract**.
- Figma expresses those approved rules visually and structurally.
- If Figma conflicts with current GitHub policy/specification, Figma must be corrected.

---

## Primary reference split — confirmed

- **Tonal = Phase-A visual-system reconstruction/replication baseline**
- **Hevy = practical weight-training functionality and repeated interaction reference**
- **Fitness GitHub policy = behavior and scope authority**

The product intentionally separates visual reference from functional reference.

Tonal leads visible system quality. Hevy leads repeated strength-training interaction where Tonal's hardware/media model does not fit Fitness.

---

## Tonal reconstruction principle

The first design-system pass intentionally reconstructs the visible Tonal system closely before Fitness-specific customization.

The goal is not vague inspiration. It is to establish a coherent baseline for:
- typography hierarchy
- large-number/metric emphasis
- black / white / neutral surface behavior
- semantic accent usage
- spacing rhythm
- page margins
- section density
- surface hierarchy
- low-radius card/button geometry
- selection inversion
- tabs / segmented controls
- top/bottom navigation treatment
- rows / dividers
- form/input presentation
- toggles / choice controls / steppers
- chart framing
- media/program/workout cards
- hero overlays
- exercise/detail composition
- dialog/sheet treatment
- icon restraint and metadata hierarchy

This baseline is reconstructed from accessible Mobbin Tonal screenshots and does **not** claim Tonal's private internal design tokens.

---

## Evidence rule

For screenshot-derived reconstruction:
- repeated patterns across multiple screen families outrank one-off details
- observed relationships must be separated from inferred/estimated values
- exact numeric/color values remain provisional until Figma screenshot QA
- when an odd local measurement can be explained by a shared 4 pt family or common alignment token, prefer the coherent shared system
- global token changes require evidence from more than one screen family where possible

The purpose is to reproduce the **visible system consistently**, not to invent false precision.

---

## Current Phase-A system — consolidated

The following have already been derived provisionally and are **not TBD anymore**:
- 390 comparison frame baseline with responsive production behavior
- approximately 24 primary page inset and 16 internal/component inset
- 4 pt spacing family
- semantic white / subtle-gray / dark canvas roles
- semantic ink / divider hierarchy
- mint/green positive, blue info, achievement orange/yellow, negative red/pink roles
- Pretendard as the Phase-A implementation proxy font
- question/screen/section/body/label/action/metric typography roles
- very low ordinary card/button radius
- distinct dialog / sheet-top / pill / circle radius roles
- icon slots 16 / 20 / 24 / 28
- minimum 44 interaction target
- compact and content-width primary action families
- choice-card, control, navigation, row, dialog/sheet/toast component families
- dashboard, media carousel, hero, stats/history, exercise-detail and workout-block higher-order patterns
- explicit Fixed / Hug / Fill contracts
- role-driven text alignment rules

Exact values remain **PROVISIONAL** until representative Figma reconstruction screens pass visual comparison.

See `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` for the actual current values and component APIs.

---

## Fitness customization phase

Phase A is a reconstruction baseline, not the final Fitness brand system.

After representative Tonal reconstruction examples pass Figma QA, Fitness may customize where there is a clear product reason:
- Fitness brand/logo/identity
- final copy
- final iconography
- proprietary/original workout imagery/video
- accessibility/platform corrections
- confirmed Fitness-specific behavior
- Hevy-derived repeated workout interaction
- later brand differentiation explicitly approved by the Product Owner

Do not customize arbitrarily before the reconstruction baseline is stable enough to compare globally.

---

## Brand-asset boundary

Never reuse Tonal as Fitness production assets:
- trademarks
- logos
- proprietary icon artwork
- exact proprietary copy
- production imagery/video

Reference screenshots are evidence, not shippable assets.

The public GitHub repository stores Mobbin URLs/IDs and text observations rather than permanent full competitor screenshots.

---

## Hevy — functional reference

Hevy remains the primary reference for:
- fast set logging
- previous-performance visibility
- routine creation/editing
- exercise search/selection
- exercise/workout history
- active-workout controls
- set completion/correction
- practical repeated-gym-use density

Hevy does not define Fitness visual styling and does not override confirmed Fitness product policy.

Tonal's video/hardware-centric active-session model is not copied as the Fitness active-logging baseline.

---

## Confirmed Fitness UX principles

- Previous performance should be visible where the user enters the next set.
- Avoid forcing navigation away from an active workout for common edits/history checks.
- Exercise order remains flexible.
- Important workout actions require clear state feedback.
- Active workout prioritizes current set, previous performance, completion state, and rest timing.
- Recommendation/self-build users converge into the same routine/workout/history system.
- Weekday scheduling remains optional.
- Home remains action-first rather than becoming a dense analytics dashboard.
- Exercise detail remains text-first / media-optional; missing media does not leave a fixed empty rectangle.

---

## Design pipeline

Current pipeline:

`Product Decision -> UX IA/Storyboard -> Tonal screenshot audit -> Tonal reconstruction spec -> Pre-Figma QA -> Figma Foundations -> Components -> Patterns -> Examples -> Representative QA -> Fitness customization -> Screen QA -> Development`

Do not skip from audit directly to broad Fitness screen styling.

---

## Figma structure

Phase-A Figma construction order:

`01_FOUNDATIONS -> 02_COMPONENTS -> 03_PATTERNS -> Examples -> 10_FITNESS_SCREENS`

Historical V0.3/V0.5 Figma pages remain preserved as reference/archive material and are not the canonical Phase-A component library.

Icons/media remain placeholders during the baseline:
- `Placeholder/IconSlot`
- `Placeholder/Media`

---

## Figma structural quality rule

Visual similarity alone is insufficient.

Reusable Figma assets must encode:
- Auto Layout
- Fixed / Hug / Fill by axis
- correct wrapping/resizing
- role-based text alignment
- semantic naming
- real variable/style bindings
- controlled component variants/properties
- reusable higher-order patterns

Do not flatten screenshot appearance into manually positioned x/y layers.

---

## Mandatory Design QA

Every substantial Figma build batch must pass the detailed contract in `docs/17_FIGMA_AGENT_EXECUTION_QA.md`.

### QA-1 — Structure / Auto Layout
- layout direction
- Fixed / Hug / Fill
- padding/gap/alignment
- text wrapping/resizing
- responsive behavior
- unnecessary absolute positioning

### QA-2 — Design-system / Binding
- actual variable/style bindings
- component instance/variant/property integrity
- semantic naming
- no avoidable detached instances
- no repeated raw-value drift

### QA-3 — Visual / Reference / Product
- Tonal proportion/hierarchy/density/surface fidelity
- cross-family consistency
- Fitness policy correctness
- no proprietary Tonal asset reuse

A visually similar screenshot with broken Auto Layout or unbound tokens is a FAIL.

---

## Current freeze status

### Phase-A reconstruction rules
**Consolidated enough to build in Figma.**

Pre-Figma gate:
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md` = PASS

### Final Fitness design-system freeze
**NOT YET.**

Still requires:
- actual Figma foundation/component/pattern construction
- binding verification
- responsive/copy stress testing
- representative reconstruction screenshot comparison
- QA-1 / QA-2 / QA-3 pass
- later Fitness customization review

Remaining provisional areas include exact color HEX, exact Pretendard weight mapping, hero/chart dimensions, sheet radius, motion/easing, final icons, and broader dark-mode policy.
