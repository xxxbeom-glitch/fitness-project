# Analysis Recent Progress Row — Two-Line Layout

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

The `최근 기록 변화` rows in 07A use the same information hierarchy as exercise-list rows so long exercise names have sufficient horizontal room.

Each `AnalysisProgressRow` now presents:

- 44px exercise thumbnail
- first line: exercise name
- second line: current representative record + colored delta
- trailing chevron only

The record and delta are no longer placed in a separate right-side value block.

Examples:
- `벤치프레스` / `80kg +2.5kg`
- `랫풀다운` / `62.5kg +2.5kg`
- `플랭크` / `75초 +15초`

Delta parentheses are removed in this summary-row presentation.

## Long-name behavior

- exercise-name area receives 196px inside the canonical 320px row
- exercise name is single-line
- overflow uses ending truncation / ellipsis
- record + delta remain on the second line

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
- trailing chevron `16 × 16`

Current 07A instances:
- `887:995`
- `887:996`
- `887:997`

The migration was applied to all 12 `AnalysisProgressRow` instances on the Analysis page so older exploration/reference frames do not retain a competing row layout.

## QA

- all 12 instances remain `320 × 76`: PASS
- current 07A values preserved: PASS
- current 07A list-card/divider geometry preserved: PASS
- right-side value block removed; chevron remains trailing: PASS
- title is bound back to the existing exercise-name text style: PASS
- long-name overflow configured for ending truncation: PASS
- current 07A screenshot after migration: PASS

**NO CURSOR IMPLEMENTATION HANDOFF.**
