# Analysis Recent Progress Row — Two-Line Layout

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

The `최근 기록 변화` rows in 07A use the same information hierarchy as exercise-list rows so long exercise names have sufficient horizontal room.

Each `AnalysisProgressRow` presents:

- 44px exercise thumbnail
- first line: exercise name
- second line: current representative record + compact delta label
- trailing chevron only

The record and delta are not placed in a separate right-side value block.

## Information hierarchy

The row uses three visual levels:

1. exercise name = primary content
   - `heading/02` — SUIT Bold 14 / 20
   - `text/primary`
2. current representative record = secondary content
   - `body/02` — SUIT Medium 13 / 18
   - `text/secondary`
3. change delta = tertiary status accent
   - compact green label
   - SUIT SemiBold 10 / 12

This prevents the current record from competing visually with the exercise name while still keeping the delta scannable.

## Delta label treatment

- label height: `18px`
- text: `SUIT SemiBold 10 / 12`
- horizontal padding: `6px`
- vertical padding: `3px`
- radius: `6px`
- current-record ↔ delta-label gap: `6px`
- text color: existing primary-green tag token
- background: existing dark primary-green tag background token

The 10px delta text is a component-local exception; no new global text style is introduced for this one compact status label.

The existing semantic body-part `Tag` component is not reused directly because its 26px height and body-part variants are a different role. Only its visual language/tokens are reused inside `AnalysisProgressRow`.

## Long-name behavior

- exercise-name area: fixed `196px`
- title height: `20px`
- single-line only
- overflow: ending truncation / ellipsis (`…`)
- record + delta label remain on the second line

Current 07A review samples now use actual names from the exercise data instead of only short placeholder names:

- `덤벨 크로스바디 루마니안 데드리프트` / `80kg` + `+2.5kg`
- `원암 뉴트럴 그립 케이블 로우` / `62.5kg` + `+2.5kg`
- `핸드 플랭크` / `75초` + `+15초`

The first two deliberately exercise the long-name truncation case.

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

The structural migration remains inherited by all 12 `AnalysisProgressRow` instances on the Analysis page.

## QA

- all 12 instances remain `320 × 76`: PASS
- current 07A list-card/divider geometry preserved: PASS
- exercise name remains the dominant text level: PASS
- current record reduced to `13 / 18`, `text/secondary`: PASS
- delta uses compact `18px` primary-green label: PASS
- delta text is `10 / 12`: PASS
- title width remains `196px` with ending truncation enabled: PASS
- current 07A uses real DB long-name samples: PASS
- no row expansion or collision from long titles: PASS

**NO CURSOR IMPLEMENTATION HANDOFF.**
