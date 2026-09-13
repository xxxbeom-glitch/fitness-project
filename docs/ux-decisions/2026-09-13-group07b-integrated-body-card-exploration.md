# Group 07B — Integrated Body Detail Card Exploration

**Date:** 2026-09-13  
**Status:** FIGMA EXPLORATION APPLIED / VISUAL QA PASS / CONTRIBUTOR ROW NAVIGATION PO APPROVED / NO CURSOR HANDOFF

## Scope

Current 07B exploration:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

This exploration tests a tighter visual continuation from the current 07A body-distribution card by placing the selected-body map and contributing-exercise rows inside one shared outer card.

This does **not** yet resolve the open product-policy conflict about selected-body detail vs. the previously locked inline-expansion behavior.

## Figma changes

### Integrated card
- `SelectedBodyDetailCard` — `887:1034`
- current size: `320 × 526`
- vertical Auto Layout
- horizontal padding: `spacing/20`
- vertical padding: `spacing/16`
- internal gap: `spacing/16`
- `bg/surface`, `border/subtle`, `radius/md` bindings reused from the Fitness design system

### Body map
- `BodyMapPreview` — `887:1035`
- current size: `280 × 212`
- front/back body-map figure width increased from `72px` to `84px`
- enlarged body-map scale is synchronized with current 07A
- inner surface/border removed because the integrated parent card owns the shell
- selected-body opacity/highlight behavior preserved

### Helper copy
- PO removed `선택한 기간 동안 완료한 세트를 기준으로 등 부위에 기여한 운동을 보여줘요.` as redundant.
- no helper/description text remains between the body map and `진행한 운동`.

### Contributing exercise block
- `ExerciseContributionSection` — `887:1063`
- `SectionHeader / Trailing=None` retained for `진행한 운동`
- section internal gap: `spacing/12`

### Exercise list — shared row binding
The previous `AnalysisExerciseVolumeRow` presentation was replaced with the same shared `AnalysisProgressRow` component used by 07A `최근 기록 변화`.

Shared master:
- `AnalysisProgressRow` — `854:6951`

Current 07B instances:
- `ContributionProgressRow_1` — `993:7391`
- `ContributionProgressRow_2` — `993:7401`
- `ContributionProgressRow_3` — `993:7411`

07B-specific usage:
- row width: `280px`
- row height: `76px`
- thumbnail: `44px`
- exercise title: first line, single-line ending ellipsis
- secondary line: total training volume for the selected period when the exercise has a load-based recording type
- delta badge is hidden in 07B because this row is not a recent-change summary
- trailing chevron remains visible because the row is navigable
- the integrated outer card already owns the 20px horizontal inset, so the 07B row instance uses `0` left/right row padding while keeping the shared component binding
- content dividers remain between rows

Current review samples:
- `원암 뉴트럴 그립 케이블 로우` — `3,030kg`
- `시티드 케이블 로우` — `2,430kg`
- `플레이트 로드 T바 로우 머신` — `1,860kg`

PO revised the visible contributor metric on 2026-09-13: for the current weight-based 07B rows, show total volume rather than `횟수 · 세트`.

This does not yet define the fallback metric for non-load recording types such as pure reps or duration; that remains a recording-type policy question and does not block the current weight-based exploration.

## Navigation — PO APPROVED 2026-09-13

- tap any `진행한 운동` row -> open `07C 운동별 성장`
- the tapped exercise is preselected in 07C
- 07B contributor rows do **not** jump directly to `04G_Exercise_History`
- `04G_Exercise_History` remains the deeper date-by-date / set-level history destination from the selected-exercise analysis flow

Canonical 07C navigation spec:
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

## QA

Read-back / visual checks:
- outer card semantic Variable bindings: PASS
- 20px horizontal / 16px vertical card spacing bindings: PASS
- helper copy removed: PASS
- shared SectionHeader instance retained: PASS
- 07B rows are live `AnalysisProgressRow` component instances: PASS
- title truncation retained: PASS
- total-volume secondary values restored for current weight-based rows: PASS
- delta badge hidden for 07B contribution context: PASS
- navigation affordance chevrons visible: PASS
- body-map enlarged consistently with 07A: PASS
- period selector remains 360px full-bleed above content: PASS
- full-screen screenshot after total-volume restoration: PASS

## Open product decisions

Still open and intentionally unchanged by this exploration:
1. whether this selected-body detail page supersedes the previously locked 07B inline-expansion behavior
2. what secondary metric replaces total volume for non-load recording types if such exercises appear in the contributor list

**NO CURSOR IMPLEMENTATION HANDOFF.**
