# Group 07D — Performed-exercise micro table

**Date:** 2026-09-13  
**Status:** PO SELECTED C TYPE / CARD TREATMENT APPLIED / VISUAL QA PASS / COMPONENT CLEANUP DEFERRED UNTIL FINAL VISUAL APPROVAL / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 `수행 운동`은 운동별 개별 카드 묶음이나 좌우 key/value row 형태가 아니라, **3열 micro table**로 표시한다.

선택된 비교안: `C · MICRO TABLE`.

표시 구조:
- 1열 `운동`
- 2열 `수행`
- 3열 `세트`
- 운동별로 같은 중량/횟수 조합은 세트 수로 묶는다
- 서로 다른 조합은 동일 운동 그룹 안에서 별도 행으로 나열한다
- 첫 번째 조합 행에만 운동명을 표시하고 다음 조합 행의 운동명 셀은 비운다
- 운동 그룹 사이에는 content divider를 둔다
- 개별 원본 1세트/2세트/3세트를 전부 펼치지 않는다
- 저장된 원본 set data는 그대로 유지한다

예:
- 벤치프레스 | `80kg × 10회` | `2세트`
-             | `75kg × 10회` | `1세트`
- 랫풀다운   | `62.5kg × 10회` | `1세트`
-             | `60kg × 10회` | `2세트`
- 푸시업     | `15회` | `2세트`
-             | `12회` | `1세트`

recording type에 없는 단위를 새로 만들지 않는다. reps-only, duration, assisted 등은 각 타입의 native 기록값으로 같은 표 구조를 적용한다.

## Card treatment

PO 피드백에 따라 C micro table 전체를 **하나의 card surface** 안에 담는다.

- 운동별로 각각 카드로 쪼개지 않는다
- `수행 운동` SectionHeader는 카드 밖에 유지한다
- 표 전체만 하나의 card surface에 포함한다
- existing Fitness card surface token 재사용
  - fill: `background/surface`
  - stroke: existing surface border
  - radius: `12px`
- dense table이므로 card inner padding은 `16px`
- inner table width: `288px`
- columns: `100 / 120 / 44px`, gap `12px`

## Figma

Canonical file/page:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07D_운동기록상세_Exploration` — `836:1593`

Current canonical performed-exercise area:
- `WorkoutSummaryCard` — `858:7171`, `320 × 279`
- `WorkoutSummaryTable` — `1097:7116`, `288 × 247`
- current 07D frame after later overview refinements: `360 × 1348`

The earlier `FlatKeyValueRow Lines=2` presentation for 07D is superseded by this micro-table layout.
`FlatKeyValueRow Lines=1` remains valid for 04D `ExerciseMetadata_Flat`; do not regress 04D while refining 07D.

## Design-system note

The selected C layout + single-card treatment is currently applied as the approved visual direction for review.

Do **not** finalize a new shared micro-table component family until the PO finishes visual feedback on this selected layout. After final visual approval, componentize the stable table/header/data-line pattern and remove superseded unused 07D-only component variants.

Current overall 07D state, including later PR/summary component changes and section order, is captured in:
- `2026-09-13-group07-session-detail-current-checkpoint.md`

## QA

Focused 07D full-screen screenshot after applying the card treatment = PASS.
Later full-screen QA after PR/summary refinements confirms this performed-exercise area remains visually intact.

Verified:
- one enclosing card only; no per-exercise cards
- table header `운동 / 수행 / 세트`
- values align by column
- set count is separated from performance value
- multi-combination exercise data remains readable
- card uses existing Fitness surface/border/radius treatment
- later overview/body-distribution changes did not alter this table

## Development boundary

No Cursor/development handoff is authorized.
