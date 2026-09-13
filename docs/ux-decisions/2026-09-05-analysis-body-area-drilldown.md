# Analysis 07B — Body-area Drilldown

**Date:** 2026-09-05  
**Status:** PO APPROVED / FIRST-PASS STRUCTURE LOCKED

## Decision

`07B 부위별 분석` keeps the large front/back body-map and broad body-area distribution, but tapping a body area does **not** open a separate page and does **not** primarily expand into a finer muscle taxonomy.

Instead, the selected body-area row expands **inline** and shows which exercises in the currently selected Analysis period contributed to that body area's distribution.

Example for load-based exercises:

- `등 28%`
  - `랫 풀다운 · 3,030kg`
  - `시티드 로우 · 2,430kg`
  - `바벨 로우 · 1,860kg`

This answers the user's likely follow-up question: `왜 이 부위가 이 비율로 나왔지? 내가 어떤 운동을 했지?`

## 07B first-pass hierarchy

1. screen title + Analysis period selector
2. large front/back body-map
3. broad body-area distribution list
4. tapping a body area expands that row inline
5. expanded content shows exercises from the selected period that contributed to the selected area

No modal, floating layer, or separate body-area detail page is introduced for this MVP pass.

## Expanded exercise-list rule — first pass

For a selected body area:

- include exercises that have valid canonical primary/secondary muscle mapping into that area
- use only final completed/persisted sets from saved workout sessions in the selected period
- exercises excluded from body-map calculation because of missing muscle mapping are also excluded from this drilldown rather than guessed
- aggregate repeated occurrences by canonical exercise identity
- row content for load-based exercises: exercise name + total training volume for the selected period
- sort by contribution to the selected body-area score, descending; use recency as a tie-breaker
- do not expose the internal weighted score (`1.0 / 0.5`) as a literal set count
- if useful in visual design, primary/secondary relationship may be indicated with a lightweight label, but exact badge/copy treatment remains OPEN
- long lists should remain compact; initial UI may show a limited number of rows with a `더 보기` affordance rather than expanding indefinitely

The previous `운동 횟수 · 완료 세트` secondary presentation was revised by PO on 2026-09-13. Current load-based contributor rows show **total volume** instead.

For non-load recording types such as pure reps or duration, the equivalent secondary metric remains OPEN and should be resolved by recording type rather than forcing a meaningless `kg` value.

## Relationship to the body-area percentage

The body-area percentage continues to use the already-locked body-map calculation:

- primary muscle contribution per completed set: `1.0`
- secondary muscle contribution per completed set: `0.5`
- distribution percentage = selected area's weighted score / total mapped weighted score in the selected period

The expanded exercise list explains the source exercises behind that distribution. The displayed total volume is a user-facing exercise summary and does not redefine the body-area percentage formula.

## Deferred

The following are not required to finish the first-pass 07B structure:

- fine-grained muscle taxonomy such as lats / upper back / traps as the primary drilldown
- exact body-map rendering, colors, opacity, masks, or asset treatment
- exact maximum number of inline exercise rows before `더 보기`
- exact primary/secondary badge treatment
- recording-type-specific fallback metric for non-load exercises
- whether a later advanced version exposes finer muscle analysis as another level

## Next

After 07B is represented in the review wireframe, move to `07C 운동별 성장` and decide recording-type-specific progress metrics, graph rules, and PR semantics.

Reference:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
