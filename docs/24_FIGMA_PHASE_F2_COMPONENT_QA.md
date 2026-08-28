# 24 FIGMA PHASE F2 COMPONENT QA

**Status:** FAIL — REMEDIATION REQUIRED BEFORE F3
**Updated:** 2026-08-28

## Scope

Independent QA of Phase F2 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the Figma Agent reported `02_COMPONENTS` complete.

Canonical references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

F2 is not considered complete until QA-1 Structure and QA-2 Binding both pass.

---

## Verified current Figma inventory

Pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`

No later-phase pages exist:
- no `03_PATTERNS`
- no `Examples`
- no `10_FITNESS_SCREENS`

STOP condition therefore remains respected.

The `02_COMPONENTS` page currently contains:
- 13 `COMPONENT_SET` families
- 1 standalone `COMPONENT` family (`Control/Stepper`)
- 45 component variants/components total

Implemented families:
- `Button/Primary/Compact`
- `Button/Primary/Content`
- `Button/Primary/Inverse`
- `Button/Secondary/Outline`
- `Button/Text/Neutral`
- `Button/Text/Destructive`
- `ChoiceCard/Single`
- `ChoiceCard/Multi`
- `Control/Radio`
- `Control/Check`
- `Control/Toggle`
- `Control/Stepper`
- `Control/Segmented/Pill`
- `Control/ModeTile`

Missing canonical F2 family:
- `Input/Underline`

---

## What passed

### Visual / gross structure
- no top-level overlap detected on `02_COMPONENTS`
- no near-zero-width text-collapse / one-character wrapping failures detected
- component families are visually coherent with the current Phase-A rectangular / neutral / inversion language
- `Control/Toggle` is now a real two-state component with 52×32 track geometry and 24×24 thumb
- expected Button state sets exist for the current canonical families
- ChoiceCard states and LabelOnly / LabelHelper variants exist
- semantic family naming is generally clean
- family-level descriptions exist
- useful text properties exist on major families, including Button labels, ChoiceCard labels/helpers, segmented labels, and Stepper value

### STOP discipline
- F3 and later phases were not started

---

## Blocking issue 1 — `Input/Underline` missing

`docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` defines `Input/Underline` as a canonical F2 form component with:
- compact label
- input text
- 1 pt underline
- optional counter/trailing metadata
- `FILL / HUG` field behavior
- states `Default / Focus / Filled / Error / Disabled`

No `Input/Underline` component or component set exists on `02_COMPONENTS`.

**Result:** F2 scope incomplete.

---

## Blocking issue 2 — 14 Button text layers bypass the Foundation Text Style

14 text layers in the four filled/outline button families have the correct-looking Pretendard 12/16 Bold values but no actual Figma Text Style applied.

Affected families:
- `Button/Primary/Compact` — 4 states
- `Button/Primary/Content` — 4 states
- `Button/Primary/Inverse` — 3 states
- `Button/Secondary/Outline` — 3 states

These should use the existing canonical Foundation style:
- `Type/Action/Primary`

Visual equality with the same font values is not sufficient. F2 QA-2 requires actual shared-style application so later global changes remain centralized.

**Result:** QA-2 Binding FAIL.

---

## Blocking issue 3 — ChoiceCard duplicates selection indicators instead of reusing controls

The entire `02_COMPONENTS` page currently contains zero `INSTANCE` nodes.

In particular:
- `ChoiceCard/Single` contains no instance of `Control/Radio`
- `ChoiceCard/Multi` contains no instance of `Control/Check`

The cards recreate their trailing indicator geometry locally inside each variant despite the canonical Radio / Check controls already existing as reusable component sets.

This creates duplicated state geometry and allows future drift between:
- standalone `Control/Radio` and radio indicators inside `ChoiceCard/Single`
- standalone `Control/Check` and check indicators inside `ChoiceCard/Multi`

For a machine-readable component system, ChoiceCard should compose these controls as nested instances and map the card state to the nested indicator state where practical.

**Result:** QA-2 component-reuse integrity FAIL.

---

## Minor QA-2 cleanup — component-set arrangement spacing

13 component-set containers use raw `16` item spacing between variants instead of the existing `Space/16` variable.

This spacing affects library/component-set organization rather than production component anatomy, so it is lower severity than the three blockers above. However, the Phase-A rule is to avoid repeated raw canonical values where binding is supported.

Recommended remediation:
- bind these component-set `itemSpacing` properties to `Space/16` if supported and stable
- otherwise document the Figma limitation/intentional exception

---

## Current F2 verdict

### QA-1 Structure
**FAIL — SCOPE INCOMPLETE**

Reason:
- canonical `Input/Underline` family is missing

Existing component geometry, page layout, and text resizing otherwise show no blocking structural defect in this inspection.

### QA-2 Design-system / Binding
**FAIL**

Reasons:
- 14 Button labels do not use the shared `Type/Action/Primary` Text Style
- ChoiceCard indicators duplicate Radio/Check instead of composing reusable instances
- 13 raw `Space/16` component-set arrangement gaps remain as minor cleanup

### F2 status
**NOT READY FOR F3**

Do not start `03_PATTERNS` or any later Phase until remediation is applied and this QA is rerun.

---

## Required remediation

1. Build canonical `Input/Underline` with the specified states and Fill/Hug behavior.
2. Apply `Type/Action/Primary` to all 14 affected Button label/loading text layers without changing their intended state colors.
3. Replace locally duplicated ChoiceCard selection-indicator geometry with nested `Control/Radio` / `Control/Check` instances where practical; preserve card state mapping and selected/disabled contrast.
4. Bind repeated component-set `itemSpacing=16` to `Space/16` where supported, or document an explicit exception.
5. Rerun F2 QA-1 and QA-2.
6. STOP before F3 and request independent QA again.
