# Analysis Recent Progress Row — Two-Line Layout

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

The `최근 기록 변화` rows in 07A use the same information hierarchy as exercise-list rows so long exercise names have sufficient horizontal room.

Each `AnalysisProgressRow` now presents:

- 44px exercise thumbnail
- first line: exercise name
- second line: current representative record + compact delta label
- trailing chevron only

The record and delta are no longer placed in a separate right-side value block.

Examples:
- `벤치프레스` / `80kg` + `+2.5kg` label
- `랫풀다운` / `62.5kg` + `+2.5kg` label
- `플랭크` / `75초` + `+15초` label

Delta parentheses are removed in this summary-row presentation.

## Delta label treatment

The delta is not rendered as another same-sized inline metric. It uses the existing Fitness primary-green tag visual language so the current record remains the primary value and the change reads as a secondary status label.

- label height: `18px`
- text: `SUIT SemiBold 10 / 12`
- horizontal padding: `6px`
- vertical padding: `3px`
- radius: `6px`
- current-record ↔ delta-label gap: `6px`
- text color: existing primary-green tag token
- background: existing dark primary-green tag background token

The existing Fitness text system bottoms out at `caption/01` 11px for shared semantic typography. The 10px delta text is intentionally kept as a component-local exception rather than introducing a new global text style for one compact status label.

The existing semantic body-part `Tag` component is not reused directly because its 26px height and body-part variants are a different role. Only its visual language/tokens are reused inside `AnalysisProgressRow`.

## Long-name behavior

- exercise-name area receives 196px inside the canonical 320px row
- exercise name is single-line
- overflow uses ending truncation / ellipsis
- record + delta label remain on the second line

This avoids forcing long exercise names to compete with a persistent right-side metric block.

## Figma

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Shared master:
- `AnalysisProgressRow` — `854:6951`

Canonical row geometry:
- size `320 × 76`
- horizontal padding `20`
- vertical padding `16`
- horizontal item gap `12`
- thumbnail `44 × 44`
- text stack `196 × 44`
- title/meta gap `4`
- record/delta gap `6`
- trailing chevron `16 × 16`

Current 07A instances:
- `887:995`
- `887:996`
- `887:997`

The migration is inherited by all 12 `AnalysisProgressRow` instances on the Analysis page so older exploration/reference frames do not retain a competing row layout.

## QA

- all 12 instances remain `320 × 76`: PASS
- current 07A values preserved: PASS
- current 07A list-card/divider geometry preserved: PASS
- right-side value block removed; chevron remains trailing: PASS
- delta uses compact `18px` label treatment rather than same-sized green text: PASS
- delta text is `10px / 12px` and remains legible at current scale: PASS
- title remains single-line with ending truncation: PASS
- current 07A screenshot after label refinement: PASS

**NO CURSOR IMPLEMENTATION HANDOFF.**
