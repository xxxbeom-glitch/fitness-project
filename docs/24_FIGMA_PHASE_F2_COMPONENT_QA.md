# 24 FIGMA PHASE F2 COMPONENT QA

**Status:** FAIL — REMEDIATION SUBSTANTIALLY PASSED, FINAL F2 CLEANUP REQUIRED BEFORE F3
**Updated:** 2026-08-28

## Scope

Independent QA of Phase F2 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the Figma Agent completed the first remediation pass.

Canonical references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/23_FIGMA_PHASE_F1_FOUNDATION_QA.md`

F2 is not complete until QA-1 Structure and QA-2 Binding both pass.

---

## Verified current Figma inventory

Pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`

No later-phase pages exist:
- no `03_PATTERNS`
- no `Examples`
- no `10_FITNESS_SCREENS`

STOP discipline remains respected.

`02_COMPONENTS` now contains the full expected F2 family inventory:
- 14 `COMPONENT_SET` families
- 1 standalone `COMPONENT` (`Control/Stepper`)

Families present:
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
- `Input/Underline`

Missing F2 families: **0**.

---

## Remediation verification — PASSED ITEMS

### 1. `Input/Underline` now exists

Verified as a `COMPONENT_SET` with states:
- Default
- Focus
- Filled
- Error
- Disabled

Current variant anatomy:
- `Label`
- `InputRow`
- `Value`
- `Underline`

Verified structure:
- variant vertical layout
- label horizontal `FILL`, vertical `HUG`
- input row horizontal `FILL`, vertical `HUG`
- value horizontal `FILL`, vertical `HUG`
- underline horizontal `FILL`, vertical `FIXED`, height 1
- no unstyled input text
- no text-collapse failure

Verified bindings include:
- `Space/4` state internal spacing
- `Type/Caption` label
- `Type/Body/Primary` value
- semantic Ink/Divider bindings
- Focus underline uses `Color/Ink/Primary`
- Error underline uses `Color/Accent/Negative`
- Disabled text uses tertiary ink

### 2. Button Text Style remediation passed

Affected button text layers: **14**.

Actual `Type/Action/Primary` application: **14 / 14**.

Remaining affected button labels with missing/wrong Text Style: **0**.

### 3. ChoiceCard reusable-control remediation passed

`ChoiceCard/Single`:
- nested `Control/Radio` instances: **6**
- Default variants map to `Unselected`
- Selected variants map to `Selected`
- Disabled variants map to `Disabled`
- locally duplicated `Indicator` geometry remaining: **0**

`ChoiceCard/Multi`:
- nested `Control/Check` instances: **6**
- Default variants map to `Unselected`
- Selected variants map to `Selected`
- Disabled variants map to `Disabled`
- locally duplicated `Indicator` geometry remaining: **0**

### 4. Component-set spacing remediation passed

All 14 component sets now bind their arrangement `itemSpacing=16` to the existing `Space/16` variable.

Remaining raw unbound canonical 16 gap at component-set level: **0**.

### 5. General structural checks passed

- all F2 text layers have a Text Style applied
- suspicious near-zero-width / character-by-character text collapse: **0**
- F3 and later pages not created

---

## Remaining blocking issue 1 — `Input/Underline` overlaps existing component families

The new `Input/Underline` component set was placed at:
- `x=0`
- `y=0`
- `320 x 445`

This physically overlaps two existing top-level component sets:
- `Button/Primary/Compact` (`x=0, y=0, 192 x 264`)
- `Button/Primary/Content` (`x=0, y=344, 342 x 264`)

Independent intersection check:
- top-level overlap count = **2**

The rendered page screenshot confirms that the Input variants are visually laid over the first button families.

This is a QA-1 Structure failure even though the component internals are otherwise valid.

Required fix:
- move `Input/Underline` to a clear top-level position after the current last F2 family
- preserve its component set, variants, properties, values, bindings, and internal structure
- do not rebuild the component
- after moving, top-level overlap count must equal 0

---

## Remaining blocking issue 2 — optional trailing/counter API is absent

The canonical `Input/Underline` specification includes optional counter/trailing metadata.

Current component properties are:
- `Label`
- `Value`
- `State`

Current `InputRow` contains only `Value`; there is no reusable trailing/counter slot or property.

This means a future character counter or trailing metadata would require local ad-hoc modification instead of using the canonical Input component.

Required fix:
- add a reusable optional trailing/counter capability to `Input/Underline`
- preferred API: a `Trailing` boolean plus a `TrailingText` text property, or an equivalent simple machine-readable property structure
- trailing content must remain `HUG` while the value text remains `FILL`
- default may remain hidden/off
- do not create a separate input family just for counters

---

## Accessibility follow-up — Stepper touch target

`Control/Stepper` retains the intended compact visual geometry `124 x 38`, but its minus/plus slots are currently `38 x 38`.

The canonical system also defines `Size/Touch/Minimum = 44` and states that compact visual controls should preserve adequate tap targets.

This should be addressed without changing the intended 124x38 visible surface. Acceptable approaches include a 44pt invisible interaction wrapper extending around the visual minus/plus controls, provided layout and clipping remain stable.

Treat this as part of the final F2 structure cleanup so the control does not ship with undersized explicit action targets.

---

## Current F2 verdict

### QA-1 Structure
**FAIL**

Passed:
- full canonical family inventory present
- Input state/anatomy base structure valid
- text collapse 0
- ChoiceCard reuse structure valid

Blocking:
- 2 top-level component-set overlaps
- Stepper explicit minus/plus touch target remains below 44pt unless an invisible interaction wrapper is provided

### QA-2 Design-system / Binding
**PASS FOR REMEDIATED ITEMS**

Verified:
- Button action Text Style 14/14
- ChoiceCard nested component reuse
- Component-set `Space/16` binding
- Input semantic text/color/spacing bindings

### Component API completeness
**FAIL**

Reason:
- `Input/Underline` does not yet expose optional trailing/counter metadata capability

### F2 status
**NOT READY FOR F3**

---

## Final F2 remediation required

1. Move `Input/Underline` to a non-overlapping top-level position; verify top-level overlap = 0.
2. Add optional trailing/counter support to `Input/Underline` while preserving value `FILL` and trailing `HUG` behavior.
3. Ensure Stepper minus/plus interactions meet the 44pt minimum target without changing the 124x38 visible surface language.
4. Re-run QA-1 / QA-2 and text/copy sanity checks.
5. STOP before F3 and request independent QA again.
