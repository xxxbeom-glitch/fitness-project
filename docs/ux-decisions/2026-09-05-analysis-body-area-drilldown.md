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

Current canonical Figma candidate adopted by this decision:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

Empty-state review frame:
- `07B_등상세_기록없음_Exploration` — `1057:593`

## 07B hierarchy

1. screen title / back navigation
2. Analysis period selector (`4주 / 3개월 / 1년`)
3. selected body-area body map
4. `진행한 운동` section
5. contributor exercise list for the selected body area

07B does not repeat the full broad body-area list from 07A. The selected area is already known from the tapped 07A row.

## Visual composition — PO APPROVED / FIGMA APPLIED

The selected-body visual and contributor list are separate sections rather than one combined card.

Approved composition:

1. body-map card
2. `spacing/32`
3. shared `SectionHeader` with title `진행한 운동`
4. `spacing/12`
5. exercise-list `ListCard`

Rules:
- `진행한 운동` is a section header and sits **outside** both cards
- body-map card contains only the selected-area front/back body visualization
- exercise rows live in a separate grouped `ListCard`
- use the shared `ListCard` surface shell rather than creating another card component
- contributor rows keep `20px` horizontal inset inside the list-card composition
- populated and empty states use the same section/card structure so period switching does not change the hierarchy

Current Figma structure:
- populated 07B — `887:1028`
- body-map card — `887:1034`
- contributor section — `887:1063`
- contributor list-card wrapper — `1061:594`
- empty 07B — `1057:593`
- empty contributor list-card wrapper — `1061:597`

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
- keep the `진행한 운동` section header visible
- replace contributor rows with the message `이 기간에는 {부위} 운동 기록이 없어요`
- example for back: `이 기간에는 등 운동 기록이 없어요`
- do not render placeholder exercises, `0kg`, `0회`, or `0초` rows
- the user can immediately switch `4주 / 3개월 / 1년`; if records exist in the newly selected period, the normal contributor list returns

This is a period-specific empty state, not an error state.

Figma empty-state review frame:
- `07B_등상세_기록없음_Exploration` — `1057:593`
- visual QA: PASS

## Relationship to the body-area percentage

The body-area percentage continues to use the locked body-map calculation:

- primary muscle contribution per completed set: `1.0`
- secondary muscle contribution per completed set: `0.5`
- distribution percentage = selected area's weighted score / total mapped weighted score in the selected period

The `진행한 운동` aggregate metric is explanatory detail and does not redefine the body-area percentage formula.

## Navigation

- 07A body-area row -> corresponding 07B body-area detail
- 07B exercise row -> canonical Group 04 exercise-detail flow rather than a duplicate 07C detail surface
- back -> 07A Analysis home

## Superseded behavior

The earlier first-pass policy that kept the broad body-area list in 07B and expanded exercises inline is no longer canonical.

Do not reintroduce inline expansion unless the Product Owner explicitly reopens the decision.

The earlier open question about forcing a universal `kg` trailing metric is also closed by the recording-type aggregate policy above.

## Still open

- whether long contributor lists need a limit / more affordance at MVP scale

## Development boundary

No Cursor/development handoff is authorized by this decision.

Reference:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`
