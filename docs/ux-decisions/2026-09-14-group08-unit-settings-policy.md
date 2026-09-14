# Group 08 — Unit settings policy

**Date:** 2026-09-14  
**Status:** PO APPROVED / FIGMA APPLIED / TARGETED QA PASS / NO CURSOR HANDOFF

## Decision

Group 08 weight-unit behavior is locked as follows.

### Supported units
- `kg`
- `lb`

No other weight unit is in current scope.

### Global display behavior
The selected unit is a global display/input preference for weight-based workout data.

When the user changes `kg ↔ lb`:
- past workout records are displayed in the selected unit
- current workout weight inputs use the selected unit
- previous-value references use the selected unit
- workout completion/session detail weight values use the selected unit
- analysis and personal-record weight values use the selected unit

The underlying historical record is not destructively rewritten when the display unit changes. Conversion is presentation/input-layer behavior so changing units repeatedly does not mutate the original stored workout record.

### Per-exercise override
Per-exercise kg/lb override is excluded from MVP.

All weight-based exercises follow the single global unit preference.

### Selection UI
Unit selection uses the existing bottom-sheet pattern with two options:
- `kg (킬로그램)`
- `lb (파운드)`

The current selected unit is also shown on the Settings home row.

## Figma
Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `08 설정 · 계정` — `233:2079`

Applied:
- `08A_설정홈_Exploration_V1` — `1158:649`
  - `단위 설정` row now exposes current value `kg` while retaining the detail chevron
- `08C_단위설정_Sheet_Exploration_V1` — `1175:709`
  - derived from the existing Fitness `08C_UnitSheet`
  - `kg / lb` options retained
  - explanatory copy clarifies that existing records are also displayed in the selected unit

Targeted screenshot QA for the Settings row and Unit Sheet = PASS.

## NEXT OPEN ITEM

Continue Group 08 one area at a time. Next recommended review target is `프로필 설정`, followed by account/login/logout behavior.

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
