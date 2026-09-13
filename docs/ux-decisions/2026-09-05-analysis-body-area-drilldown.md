# Analysis 07B — Body-area Drilldown

**Date:** 2026-09-05  
**Revised:** 2026-09-13  
**Status:** PO APPROVED / SEPARATE DETAIL SCREEN + RECORDING-TYPE AGGREGATE METRICS + EMPTY STATE + SECTION/CARD COMPOSITION LOCKED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

`07A 분석 홈`의 부위 row를 탭하면 해당 부위의 **별도 07B 상세 화면**으로 이동한다.

Example:
- `07A > 등 28%` 탭
- -> `07B 등 상세`

The previous inline-expansion behavior is superseded.

Current canonical Figma screen:
- `07B_부위상세` — `887:1028`

Empty-state review frame:
- `07B_부위상세_Empty` — `1057:593`

## 07B hierarchy

1. screen title / back navigation
2. Analysis period selector (`4주 / 3개월 / 1년`)
3. shared `SectionHeader` with title `진행한 운동`
4. one selected-body detail card containing:
   - selected body-area body map
   - contributor exercise list for the selected body area

07B does not repeat the full broad body-area list from 07A. The selected area is already known from the tapped 07A row.

## Visual composition — PO APPROVED / FIGMA APPLIED

`진행한 운동` is the section title and sits **outside, directly above** the selected-body detail card.

The body-map and contributor exercise list remain together inside **one unified card**.

Approved composition:

1. shared `SectionHeader` — `진행한 운동`
2. `spacing/12`
3. unified selected-body detail card
   - body-map preview
   - `spacing/16`
   - contributor exercise list / empty-state content

Rules:
- do not split the body-map and contributor list into two cards
- do not place `진행한 운동` inside the card
- the unified card keeps the existing surface/border/radius treatment
- card horizontal padding = `spacing/20`
- card vertical padding = `spacing/16`
- body-map and contributor list share the same 280px inner content line
- contributor rows keep their existing shared row pattern and dividers
- populated and empty states use the same hierarchy so period switching does not change the composition

Current Figma structure after correction:
- populated 07B — `887:1028`
  - overview — `887:1032`
  - `진행한 운동` SectionHeader — `887:1064`
  - unified selected-body detail card — `887:1034`, `320 × 490`
  - body-map preview — `887:1035`, `280 × 212`
  - contributor list — `887:1065`, `280 × 230`
- empty 07B — `1057:593`
  - overview — `1057:597`
  - `진행한 운동` SectionHeader — `1057:627`
  - unified selected-body detail card — `1057:598`, `320 × 490`
  - body-map preview — `1057:599`, `280 × 212`
  - empty contributor content — `1057:628`, `280 × 230`

The incorrect intermediate split-card wrappers `1061:594` and `1061:597` are no longer canonical.

Focused Figma read-back and screenshots for both populated and empty states = PASS.

## Contributor exercise-list rule

For the selected body area:

- include exercises that have valid canonical primary/secondary muscle mapping into that area
- use only final completed/persisted sets from saved workout sessions in the selected period
- exercises without usable muscle mapping remain excluded rather than guessed at runtime
- aggregate repeated occurrences by canonical exercise identity
- sort by contribution to the selected body-area score, descending; use recency as a tie-breaker
- do not expose the internal weighted score (`1.0 / 0.5`) as a literal set count

## Selected-period aggregate metric — PO APPROVED

The trailing value on each `진행한 운동` row is the **sum of that exercise's meaningful native performance quantity inside the selected Analysis period**.

The row does not force every exercise into kilograms.

### `weight_reps`

Display selected-period total training volume:

`Σ(기록 중량 × 완료 반복수)`

Example:
- `랫풀다운 · 12,450kg`

### `added_weight_reps`

Display selected-period total added-load volume:

`Σ(추가 중량 × 완료 반복수)`

Do not add hidden bodyweight or another multiplier.

### `reps`

Display selected-period total completed repetitions:

`Σ 완료 반복수`

Example:
- `푸시업 · 148회`

### `duration`

Display selected-period total completed exercise duration:

`Σ 완료 세트 수행시간`

Example:
- 플랭크를 30초씩 12세트 완료 -> `360초` -> UI `6분`
- mixed duration example -> `6분 30초`

### `assisted_weight_reps`

Display selected-period total completed repetitions:

`Σ 완료 반복수`

The assistance kg is not multiplied into ordinary training volume and is not converted into an invented effective load for MVP.

### Future / other recording types

Use an additive native quantity only when the recording type defines one clearly.
Do not invent a cross-unit conversion merely to make all contributor rows share one unit.

## Metric scope and sorting are separate

The user-facing trailing aggregate explains how much of that exercise was performed during the selected period.

It does **not** redefine contributor-list sorting.

Sorting remains:
1. selected body-area contribution score descending
2. recency as tie-breaker

Therefore a high displayed total volume/repetition/time does not automatically rank above an exercise with a larger primary/secondary body-area contribution score.

## Empty / no-contributor state — PO APPROVED

If the selected body area has no contributing exercise records in the currently selected Analysis period:

- keep the 07B screen, back navigation, period selector, and selected body-area body map visible
- keep the `진행한 운동` section header visible above the unified card
- inside the same unified card, replace contributor rows with the message `이 기간에는 {부위} 운동 기록이 없어요`
- example for back: `이 기간에는 등 운동 기록이 없어요`
- do not render placeholder exercises, `0kg`, `0회`, or `0초` rows
- the user can immediately switch `4주 / 3개월 / 1년`; if records exist in the newly selected period, the normal contributor list returns in the same card

This is a period-specific empty state, not an error state.

Figma empty-state review frame:
- `07B_부위상세_Empty` — `1057:593`
- visual QA: PASS

## Relationship to the body-area percentage

The body-area percentage continues to use the locked body-map calculation:

- primary muscle contribution per completed set: `1.0`
- secondary muscle contribution per completed set: `0.5`
- distribution percentage = selected area's weighted score / total mapped weighted score in the selected period

The `진행한 운동` aggregate metric is explanatory detail and does not redefine the body-area percentage formula.

## Navigation

- 07A body-area row -> corresponding 07B body-area detail
- 07B exercise row -> canonical Group 04 exercise-detail flow
- no separate Group 07 exercise-growth detail screen is created
- back -> 07A Analysis home

## Superseded behavior

The earlier first-pass policy that kept the broad body-area list in 07B and expanded exercises inline is no longer canonical.

Do not reintroduce inline expansion unless the Product Owner explicitly reopens the decision.

The earlier open question about forcing a universal `kg` trailing metric is also closed by the recording-type aggregate policy above.

The intermediate design that split the body-map and contributor list into separate cards is also superseded. Keep one unified card and place only the `진행한 운동` title outside it.

## Still open

- whether long contributor lists need a limit / more affordance at MVP scale

## Development boundary

No Cursor/development handoff is authorized by this decision.

Reference:
- `docs/ux-decisions/2026-09-13-group07-page-cleanup-renumber.md`
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`
