# 25 FIGMA PHASE F3 PATTERN QA

**Status:** FAIL — REMEDIATION REQUIRED BEFORE NEXT PHASE  
**Updated:** 2026-08-28

## Scope

Independent QA of Phase F3 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the Figma Agent reported `03_PATTERNS` complete.

Canonical references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

F3 is not complete until QA-1 Structure and QA-2 Design-system / Binding both pass.

---

## Verified current Figma inventory

Pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

Later-phase pages are not present:
- no `Examples`
- no `10_FITNESS_SCREENS`

STOP discipline therefore remains respected.

All expected F3 top-level families exist:
- `Navigation/TopBar`
- `Navigation/BottomBar`
- `Tab/Underline`
- `Row/Settings`
- `Row/Movement`
- `Workout/BlockHeader`
- `Dialog/Center`
- `Sheet/Action`
- `Feedback/Toast`

Missing canonical F3 families: **0**.

General positives:
- all 44 F3 text layers use Text Styles
- character-by-character / near-zero-width text collapse: 0
- F2 nested reuse exists in rows/dialog/sheet
- descriptions are present on major F3 families
- overall visual language remains neutral, low-radius, flat, and Tonal-aligned at a coarse level

---

## Blocking issue 1 — top-level overlap

Independent intersection check found:
- `Tab/Underline` (`y=450`, height `280`)
- `Row/Settings` (`y=700`, height `455`)

These overlap by about 30 pt vertically.

**QA-1 result:** FAIL.

Required remediation:
- move top-level F3 families only; do not rebuild component internals
- top-level overlap count must equal 0 after remediation

---

## Blocking issue 2 — `Navigation/TopBar` API is incomplete

Canonical spec requires:
- `Surface = Light | Dark | Overlay`
- `Leading = Back | Close | None`
- `Trailing = Text | IconSlot | Multiple | None`
- `Title = Center | Contextual`

Current Figma API exposes:
- `Surface = Light | Dark | Overlay`
- `Leading = Boolean`
- `Trailing = Boolean`
- `Title = Text`

The current component therefore cannot represent the canonical leading/trailing/title modes without local modification.

Positive:
- 44x44 leading/trailing slots exist
- title is centered in a dedicated region
- visual 24x24 placeholders exist

Required remediation:
- convert leading/trailing/title-mode behavior into controlled variant/property structure matching the canonical spec
- preserve 48pt height and 44pt action wrappers
- do not use proprietary icons; placeholders remain valid

---

## Blocking issue 3 — `Navigation/BottomBar` has no controllable active state

Current BottomBar:
- 390x76
- 5 equal items
- dark surface
- item labels exposed as text properties
- Item 1 is visually active by default

However there is no `ActiveIndex` or equivalent controlled state/property. A screen using the component cannot switch the active item without local edits.

Required remediation:
- add `Active = 1 | 2 | 3 | 4 | 5` or equivalent controlled variant/property structure
- keep 5 equal FILL items and current visual icon placeholders
- this remains a visual baseline and must not freeze final Fitness IA semantics

---

## Blocking issue 4 — `Tab/Underline` state geometry is unstable

Current variants:
- Active / Equal = height 50
- Active / Content = height 50
- Inactive / Equal = height 40
- Inactive / Content = height 40

Switching Active ↔ Inactive therefore changes component height by 10 pt and can cause parent layout jump.

Required remediation:
- Active and Inactive states within the same layout mode must have the same outer height
- reserve underline space in the inactive state instead of removing structural height
- keep active underline 2–3 pt and inactive visually empty/transparent

---

## Blocking issue 5 — `Row/Settings` API is incomplete and Toggle instance is distorted

Canonical spec requires:
- `Trailing = Chevron | Value | Toggle | External | None`
- `Tone = Default | Destructive | Disabled`
- `Helper = True | False`

Current API has:
- `Trailing` variants
- `Helper` boolean
- no `Tone` control

Additionally, the nested F2 `Control/Toggle` instance is currently **32x32**, while its source component is **52x32**.

The screenshot visually confirms this appears as a circular control rather than the intended switch.

Required remediation:
- add `Tone = Default | Destructive | Disabled`
- preserve text/helper semantics per tone
- restore nested Toggle instance to 52x32; do not redraw it locally
- ensure row text remains FILL and trailing control does not shrink

---

## Blocking issue 6 — `Row/Movement` API is incomplete

Canonical spec requires:
- `Leading = Thumbnail | Timer | Placeholder`
- `Trailing = Chevron | Drag | None`
- `Meta = SingleLine | MultiLine`

Current API exposes:
- `Leading = Thumbnail | Timer | Placeholder`
- `Trailing = Boolean`
- `Meta` is only a text property

Required remediation:
- add controlled trailing mode: `Chevron | Drag | None`
- add controlled meta mode: `SingleLine | MultiLine`
- preserve 48pt leading slot, 20–24pt trailing slot, FILL text column, and min-height behavior

---

## Blocking issue 7 — `Workout/BlockHeader` is not full-width in its base geometry

Canonical rule:
- black full-width surface
- width `FILL`
- min/fixed height 54

Current standalone component is only **175x54** and reports horizontal `HUG` behavior.

Required remediation:
- use a representative 342pt content-width base on the library page while keeping the component horizontally resizable/FILL when placed inside an Auto Layout parent
- preserve current 54pt height, black surface, caps label, optional meta, and overflow slot

---

## Blocking issue 8 — `Dialog/Center` canonical API and overlay anatomy are incomplete

Canonical spec requires:
- `Body = None | Text | CustomSlot`
- `Secondary = None | TextAction`
- `Tone = Default | DestructiveConfirmation`
- dimmed scrim fills viewport
- dialog max/reference width 342 on 390 baseline
- vertical HUG

Current component exposes only:
- `Title` text
- `Body` text
- `SecondaryAction` boolean
- no `Tone`
- no body mode/custom slot
- no scrim / viewport overlay structure

Critical nested-instance sizing defect:
- nested `Button/Primary/Compact` source = 192x54, current instance = **232x16**
- nested `Button/Secondary/Outline` source = 192x54, current instance = **232x18**

The screenshot confirms the dialog actions are visually collapsed into thin strips.

Required remediation:
- implement canonical Body / Secondary / Tone API or a direct equivalent
- add viewport-fill scrim + centered dialog container structure
- preserve nested F2 button intrinsic/min action height; do not shrink to text height
- actions must remain actual nested F2 instances

---

## Blocking issue 9 — `Sheet/Action` lacks scrim/overlay anatomy and collapses the primary button

Canonical structure requires:
- scrim
- bottom-aligned sheet
- width FILL
- vertical HUG
- top-only sheet radius
- action stack

Current component is only the sheet body; there is no viewport scrim/bottom-overlay structure.

Nested primary action defect:
- `Button/Primary/Content` source = 342x54
- current nested instance = **350x16**

Text actions remain 44pt, but the primary filled CTA is structurally collapsed.

Required remediation:
- add viewport-fill scrim + bottom-aligned sheet structure
- restore primary nested button to 54pt action height
- preserve F2 instances for destructive/cancel actions
- do not redraw actions locally

---

## QA-2 cleanup — raw canonical spacing remains

Independent binding check found **16** avoidable raw canonical spacing properties:
- TopBar left/right padding: 4 (6 occurrences across 3 surface variants)
- BottomBar top/bottom padding: 8 (2 occurrences)
- Tab top/bottom padding: 12 (8 occurrences across 4 variants)

Corresponding `Space/4`, `Space/8`, and `Space/12` variables already exist.

Required remediation:
- bind those properties to the existing Foundation variables where Figma supports it
- do not create duplicate Space variables

---

## Current F3 verdict

### QA-1 — Structure / Auto Layout
**FAIL**

Blocking reasons:
- one top-level overlap
- Tab state-height jump
- Toggle nested instance shrunk to 32x32
- Dialog nested action instances collapsed to 16/18pt heights
- Sheet primary action collapsed to 16pt height
- Dialog/Sheet overlay/scrim anatomy absent
- Workout block header base geometry not representative of full-width behavior
- several canonical mode/property structures missing

### QA-2 — Design-system / Binding
**FAIL**

Blocking reasons:
- TopBar / BottomBar / Settings Row / Movement Row / Dialog APIs do not encode canonical controllable states
- 16 raw canonical spacing properties remain despite existing variables
- nested F2 instances are reused but several are manually distorted away from their source geometry

### Visual sanity
**PARTIAL PASS**

The coarse Tonal reconstruction language is visible, but the collapsed nested controls and incomplete component APIs are not acceptable for a reusable system.

### F3 status
**NOT READY FOR NEXT PHASE**

Do not start `Examples`, broader product patterns, or Fitness screens until remediation passes independent QA.

---

## Required next action

Remain in F3 and remediate only the issues recorded above. Preserve all F1/F2 PASS assets and the F3 work that already conforms.

After remediation:
1. rerun F3 QA-1
2. rerun F3 QA-2
3. verify nested F2 instance geometry
4. verify controlled variant/property APIs
5. verify top-level overlap = 0
6. verify raw canonical spacing = 0 where binding is supported
7. STOP and request independent QA before moving on
