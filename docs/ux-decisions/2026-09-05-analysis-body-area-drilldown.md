# Analysis 07B — Body-area Drilldown

**Date:** 2026-09-05  
**Revised:** 2026-09-13  
**Status:** PO APPROVED / SEPARATE DETAIL SCREEN LOCKED / FIGMA APPLIED / NO CURSOR HANDOFF

## Decision

`07A 분석 홈`의 부위 row를 탭하면 해당 부위의 **별도 07B 상세 화면**으로 이동한다.

Example:
- `07A > 등 28%` 탭
- -> `07B 등 상세`

The previous inline-expansion behavior is superseded.

Current canonical Figma candidate adopted by this decision:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

## 07B hierarchy

1. screen title / back navigation
2. Analysis period selector (`4주 / 3개월 / 1년`)
3. selected body-area body map
4. `진행한 운동` list for the selected body area

07B does not repeat the full broad body-area list from 07A. The selected area is already known from the tapped 07A row.

## Contributor exercise-list rule

For the selected body area:

- include exercises that have valid canonical primary/secondary muscle mapping into that area
- use only final completed/persisted sets from saved workout sessions in the selected period
- exercises without usable muscle mapping remain excluded rather than guessed at runtime
- aggregate repeated occurrences by canonical exercise identity
- sort by contribution to the selected body-area score, descending; use recency as a tie-breaker
- do not expose the internal weighted score (`1.0 / 0.5`) as a literal set count

For load-based exercises, the current user-facing secondary metric is selected-period total training volume.

The recording-type-safe secondary metric for pure reps, duration, assisted-weight and other non-standard load records remains OPEN and must be resolved before 07B is fully closed.

## Relationship to the body-area percentage

The body-area percentage continues to use the locked body-map calculation:

- primary muscle contribution per completed set: `1.0`
- secondary muscle contribution per completed set: `0.5`
- distribution percentage = selected area's weighted score / total mapped weighted score in the selected period

The `진행한 운동` metric is explanatory detail and does not redefine the body-area percentage formula.

## Navigation

- 07A body-area row -> corresponding 07B body-area detail
- 07B exercise row -> canonical Group 04 exercise-detail flow rather than a duplicate 07C detail surface
- back -> 07A Analysis home

## Superseded behavior

The earlier first-pass policy that kept the broad body-area list in 07B and expanded exercises inline is no longer canonical.

Do not reintroduce inline expansion unless the Product Owner explicitly reopens the decision.

## Still open

- recording-type-safe secondary metric for non-load contributor exercises
- final empty/no-contributor state
- whether long contributor lists need a limit / more affordance at MVP scale

## Development boundary

No Cursor/development handoff is authorized by this decision.

Reference:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
