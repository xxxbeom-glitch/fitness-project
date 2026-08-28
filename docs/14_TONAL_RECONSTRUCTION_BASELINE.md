# 14 TONAL RECONSTRUCTION BASELINE

**Status:** PHASE-A EVIDENCE BASELINE COMPLETE — PROVENANCE / REFERENCE
**Updated:** 2026-08-28

## Purpose and authority

This document records the evidence model used to reconstruct a practical Tonal visual system from Tonal screens accessible through Mobbin.

It is an **evidence/provenance document**, not the current implementation specification.

Canonical implementation-facing source:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

Consolidation gate:
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

If an estimate or old hypothesis in this evidence layer conflicts with the canonical spec, `15_TONAL_DESIGN_SYSTEM_SPEC.md` wins until a later QA-approved correction updates it.

This reconstruction does **not** claim access to Tonal's official/private design tokens.

---

## Audit method

1. Search Tonal by screen family rather than selecting only a few attractive screens.
2. Deduplicate repeated screens.
3. Compare patterns across onboarding, dashboard, program/workout, exercise/detail, profile/settings, charts/history, navigation, controls, and transient surfaces.
4. Promote a relationship to a working rule only after repeated evidence where possible.
5. Mark evidence as:
   - **OBSERVED** — directly visible in screenshots
   - **INFERRED** — repeated relationship inferred across screenshots
   - **ESTIMATED** — provisional Figma value selected to reproduce that relationship
6. Keep exact numeric/color values centrally tunable until Figma screenshot QA.
7. Treat Tonal as visual evidence only; Fitness behavior remains governed by Fitness product policy.

---

## Evidence families

### Onboarding / profile setup
Representative screens:
- https://mobbin.com/screens/a0bb4e2e-0082-4b57-b943-0600d062256d
- https://mobbin.com/screens/6ef5e1ef-5078-4260-9d07-5e2b7d502cf1
- https://mobbin.com/screens/6f0a7139-a0f8-4b46-abbc-f9448634e56f
- https://mobbin.com/screens/24db49c3-fb68-4ca6-955b-07d29192e6f5
- https://mobbin.com/screens/295f67ac-33bd-42ed-ba2c-17fd52a7e677

Repeated evidence:
- centered question hierarchy
- large text-led rectangular choices
- black/white inversion for selected choices
- light-neutral unselected choices
- compact black rectangular actions
- generous whitespace
- subdued helper copy
- large numeric selectors where numeric input is primary

### Home / dashboard / progress
Representative screens:
- https://mobbin.com/screens/74e51c99-0993-4408-9ef7-fcd0a2ebd96c
- https://mobbin.com/screens/2493c7a2-d321-4d4f-8b2e-81614d8ceacf
- https://mobbin.com/screens/93ffb0da-29cd-4a78-8c10-8f5fa1e24966
- https://mobbin.com/screens/1aeeb897-cb51-490b-9091-fc7c0bbee48d
- https://mobbin.com/screens/7b996db9-f556-4656-aea3-ac8e76be62aa

Repeated evidence:
- large metric values dominate
- compact uppercase metric labels
- white modules on subtle cool-neutral canvas
- whitespace and surface contrast instead of heavy shadow
- minimal chart chrome
- semantic accent use for progress/status
- visually heavy black bottom navigation in major Tonal app surfaces

### Program / workout / exercise
Representative screens:
- https://mobbin.com/screens/5324e86f-5cf1-4e9b-82a5-7180451ed22a
- https://mobbin.com/screens/b8bf6776-884a-4f05-9426-cab43455b3f6
- https://mobbin.com/screens/c281932e-ae03-4adc-ae7f-98cb8db9421e
- https://mobbin.com/screens/a8be9862-08b3-4282-8402-fd1129dd399d
- https://mobbin.com/screens/2cc18b5a-683e-48be-9f56-48be40596668

Repeated evidence:
- media-led hero regions with readability scrims/overlays
- bright/light detail content below media
- uppercase workout-block labels
- flat movement rows
- rectangular black actions
- selected mode controls using black inversion
- compact utilitarian steppers/toggles

### Settings / profile / legal
Representative screens:
- https://mobbin.com/screens/4d6bde90-cad3-460d-b3fa-f14f0bc71daa
- https://mobbin.com/screens/e79e9b5f-fea6-4310-a98b-f33d35ef16d8
- https://mobbin.com/screens/0090bd2e-76af-4e22-b565-fe04b8ba4735
- https://mobbin.com/screens/812b461c-f9bf-44a8-9456-b4ba675cfeed
- https://mobbin.com/screens/db537973-f4ea-442d-b895-0fd0a78bbf22

Repeated evidence:
- flat rows + dividers rather than decorative card stacks
- restrained top bars
- small gray helper text
- sparse destructive/legal actions
- compact native-like toggles
- simple white profile/stat surfaces

### History / statistics / active-session evidence
Expanded Batch-03 evidence is maintained in:
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`

This includes metric XL/L/M hierarchy, chart framing, value lists, exercise-set history tables, dashboard grids, program/workout hero patterns, and Tonal's dark/video-led active-session surfaces.

Tonal's video/hardware-centric active session is **not** the Fitness active-logging functional baseline. Fitness active logging remains Hevy-led functionally and Tonal-led visually.

---

## Stable visual conclusions from the audit

The following relationships survived Batch 01–03 and consolidation QA:
- 390 comparison frame as reconstruction baseline, not a production fixed-width rule
- approximately 24 primary page inset
- 4 pt spacing family
- black / white / neutral dominance
- multiple semantic canvas roles: base white, subtle gray, dark/media
- multiple semantic accent roles rather than one global brand green
- very low radius for ordinary cards/buttons
- pill/circle geometry isolated to appropriate controls
- large numeric hierarchy
- centered onboarding questions but left-aligned content/detail copy
- flat/divider-led rows
- separate compact and content-width CTA families
- explicit Fixed / Hug / Fill behavior per axis
- distinct metric module, media card, choice card, movement row, dialog, sheet, and hero families rather than one universal card

Exact values remain provisional until Figma visual QA.

---

## Completed audit outputs

The former token-reconstruction backlog has been completed through the following documents:

- `docs/18_TONAL_FOUNDATIONS_AUDIT.md`
  - layout/grid, color/surface hypotheses, typography, spacing, radius, sizing/alignment

- `docs/19_TONAL_CORE_COMPONENTS_AUDIT.md`
  - buttons, choices, controls, navigation, rows, overlays, component sizing

- `docs/20_TONAL_INTERMEDIATE_QA_BATCH01_02.md`
  - cross-batch conflict resolution and naming/role corrections

- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
  - dashboard, metric, hero, history/stat, media carousel, exercise/detail and other higher-order patterns

- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`
  - final pre-Figma cross-document gate; PASS

- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
  - consolidated canonical implementation-facing specification

---

## Boundary

Tonal is reconstructed for **visual-system quality**, not for product behavior.

Fitness functionality remains controlled by current GitHub Product/Policy/Decision docs, with Hevy as the primary reference for repeated weight-training interaction patterns.

Full competitor screenshots are not stored as permanent assets in the public repository. Mobbin URLs/IDs and text-derived evidence are retained instead.
