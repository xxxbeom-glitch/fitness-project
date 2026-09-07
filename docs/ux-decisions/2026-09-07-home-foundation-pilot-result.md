# Home Foundation Usage Pilot Result — 2026-09-07

**Status:** FIGMA APPLIED / QA PASS
**Figma file:** `W3lZurXCXbThP67rF2xk2b`
**Scope:** `02 홈` only

Reference:

- `docs/ux-decisions/2026-09-06-figma-local-design-system.md`

## Applied Home states

- `02A_Home_NoRoutine` — `34:1194`
- `02B_Home_RoutineSelected` — `34:1228`
- `02C_Home_RoutinePicker` — `34:1269`
- `02D_Home_Active` — `34:1310`

## Foundation change

- added semantic color `text/on-brand`
- value: alias to primitive `neutral/950`
- scope: `TEXT_FILL`
- `bg/default` scope reduced to `FRAME_FILL / SHAPE_FILL`; it is no longer used as a text-color semantic token
- total local variables: 74
- Colors collection: 30

## Home typography

The Product Owner manually adjusted the Home typography hierarchy before this pilot. The pilot preserved that visual hierarchy rather than redesigning it.

Verified Home role mapping:

- major card/section title → `heading/01 + text/primary`
- list title → `heading/02 + text/primary`
- card metadata → `label/02 + text/secondary`
- date / secondary information → `body/02` with secondary or tertiary semantic text color by importance
- large KPI → `display/02 + text/primary`
- KPI caption → `caption/01 + text/tertiary`
- Compact Button → `button/compact`

## Home color binding

- Primary Compact Button text → `text/on-brand`
- Secondary Compact Button text → `text/primary`
- selected routine-option foreground in the Home routine picker is normalized to semantic foreground color where override is available

## Home spacing binding

All A~D Home states now use:

- content top/bottom padding → `spacing/32`
- screen horizontal padding → `spacing/20`
- major section gap → `spacing/32`
- action card padding → `spacing/20`
- card content ↔ Action Row → `spacing/12`
- parallel button gap → `spacing/8`
- title ↔ metadata → `spacing/4`
- no-routine title ↔ explanatory copy → `spacing/6`
- section header ↔ section content → `spacing/12`

A/C/D `HomeScrollContent`, which still used absolute positioning, were normalized to vertical Auto Layout. B already used the target structure.

## QA

Rendered and checked all four Home states after application.

Result:

- A render: PASS
- B render: PASS
- C routine-picker overlay render: PASS
- D active-workout render: PASS
- Home scroll layout binding: PASS on A~D
- card padding/gap binding: PASS on A~D
- action-row gap binding: PASS on A~D
- Primary/Secondary button semantic text colors: PASS on A~D

## Boundary

No other product screen was migrated to the new usage rules in this pilot. Other pages keep their current visual/layout state until they are reviewed individually against the Home-proven foundation rules.
