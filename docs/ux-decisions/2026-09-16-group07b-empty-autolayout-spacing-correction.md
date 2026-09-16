# Group 07B Empty — Auto Layout / spacing correction

**Date:** 2026-09-16  
**Status:** POST-CLOSURE TARGETED FIGMA CORRECTION PASS · GROUP 07 REMAINS CLOSED · NO CURSOR HANDOFF

## Trigger

Product Owner reviewed the canonical `07B_부위상세_Empty` screenshot after Group 07 closure and requested proper Auto Layout structure and spacing-variable binding.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07B_부위상세_Empty` — `1057:593`

## Issue found

The empty-state content block was a vertical Auto Layout internally, but the relationship between `PeriodTabs` and the content block was still absolute-positioned with no bound spacing token. The section gap inside `Content` was also a raw 12px value.

This made the screen visually close to the approved state but structurally weaker than the current Fitness spacing-token standard.

## Correction applied

Created two structural Auto Layout wrappers only; no new visual component or token was introduced.

### `BodyStack_AutoLayout` — `1585:816`
- vertical Auto Layout
- `360px` width
- HUG height
- children:
  1. `PeriodTabs` — `1057:636`
  2. `ContentInset_AutoLayout` — `1585:817`
- `itemSpacing = 24`
- bound to existing `spacing/24` — `VariableID:278:898`
- transparent fill

### `ContentInset_AutoLayout` — `1585:817`
- vertical Auto Layout
- horizontal FILL inside `BodyStack_AutoLayout`
- HUG height
- left/right padding `20`
- both paddings bound to existing `spacing/20` — `VariableID:278:897`
- transparent fill

### Existing `Content` — `1057:596`
- remains vertical Auto Layout
- horizontal FILL inside the inset wrapper
- HUG height
- `itemSpacing = 12`
- bound to existing `spacing/12` — `VariableID:278:893`

### Existing empty card — `1579:815`
- horizontal sizing changed from fixed-width behavior to `FILL` within the content Auto Layout
- existing card paddings/radius/color bindings were preserved
- no visual component detach or replacement

## Final hierarchy

`07B_부위상세_Empty`
- `StatusArea_Spacer`
- `Nav_부위별 분석`
- `BodyStack_AutoLayout`
  - `PeriodTabs`
  - `ContentInset_AutoLayout`
    - `Content`
      - shared `SectionHeader_진행한운동`
      - `SelectedBodyDetailEmptyCard`
        - centered empty message

## QA

PASS.

Read-back confirmed:
- `BodyStack_AutoLayout`: VERTICAL / HUG / gap 24 bound to `spacing/24`
- `ContentInset_AutoLayout`: FILL / HUG / horizontal padding 20 bound to `spacing/20`
- `Content`: VERTICAL / FILL / HUG / gap 12 bound to `spacing/12`
- empty card: horizontal FILL
- existing shared section header and empty card visual bindings intact
- wrapper fills are transparent

Screenshot QA confirmed the original dark background is preserved and the section now sits with the intended 24px separation below the period tabs.

## Scope lock

This was a targeted structural correction to the explicit PO-raised issue only.

**GROUP 07 REMAINS CLOSED.**

Do not reopen unrelated Group 07 Product/UX decisions or the deferred body-map production asset mapping because of this correction.

**NO CURSOR IMPLEMENTATION HANDOFF.**
