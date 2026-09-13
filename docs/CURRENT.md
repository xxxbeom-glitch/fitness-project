# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A LOCKED · 07B LOCKED EXCEPT LONG-LIST POLICY · 07C OVERVIEW REMOVED · 07D SESSION DETAIL REFINEMENT IN PROGRESS · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`

Supporting checkpoints:
- `docs/ux-decisions/2026-09-13-group07d-session-summary-unified-card.md`
- `docs/ux-decisions/2026-09-13-group07d-personal-record-trophy-treatment.md`
- `docs/ux-decisions/2026-09-13-group07d-flat-performed-exercise-table.md`
- `docs/ux-decisions/2026-09-13-group07d-session-detail-body-distribution-refinement.md`
- `docs/ux-decisions/2026-09-13-group07-page-cleanup-renumber.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-13-analysis-total-weight-compact-unit-format.md`
- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`
- `docs/ux-decisions/2026-09-13-analysis-progress-row-two-line-layout.md`
- `docs/ux-decisions/2026-09-13-analysis-period-selector-simplification.md`
- `docs/ux-decisions/2026-09-13-group07a-refined-analysis-home-handoff.md`
- `docs/ux-decisions/2026-09-13-shared-recent-workout-list.md`
- `docs/ux-decisions/2026-09-13-shared-section-header-consolidation.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

Historical baseline only:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`

Later checkpoints and this CURRENT supersede the old five-screen Group 07 numbering in that baseline document.
The older intermediate four-screen sequence in `2026-09-13-group07-page-cleanup-renumber.md` is also superseded where it still listed a separate 07C workout-record overview.

---

# ACTIVE TRACK — Group 07 분석 · 운동 기록

## Canonical Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- current `07D_운동기록상세_Exploration` — `836:1593`

`07B_부위상세_Empty` is a state variant of 07B, not a separate IA screen.

The separate `07C_운동기록_Exploration` top-level screen was removed by PO direction on 2026-09-13.
Do not recreate it or auto-renumber 07D to 07C without explicit PO direction.

Related Group 04 exercise-detail family:
- page `04 운동 목록 · 상세` — `233:2075`
- `04D_운동상세_운동정보` — `40:2325`
- `04D_운동상세_최근기록` — `34:1714`
- `04D_운동상세_성장` — `1000:1519`

Exercise-specific history/growth is handled by Group 04 `최근 기록 / 성장`; do not recreate a duplicate Group 07 exercise-growth/history screen.

---

# CURRENT GROUP 07 IA

1. `07A 분석 홈`
2. `07B 부위 상세`
3. `07D 운동 기록 상세` — one saved workout-session detail

There is currently no separate 07C overview screen.

## Navigation intent

- 07A body-area row → 07B selected-body detail
- 07A/07B exercise row → Group 04 exercise detail, entering `최근 기록` where appropriate; `성장` is available as the adjacent tab
- Group 06 completion `기록 상세 보기` → 07D workout-session detail
- 07D may also be reused later when opening a saved past workout session from another valid entry point

---

# 07A — LOCKED

Do not reopen without a new product-policy change or regression.

Approved section order:
1. Analysis period selector `4주 / 3개월 / 1년`
2. 운동 추이
3. 운동 부위 분포
4. 최근 기록 변화
5. 최근 운동

Key locked rules:
- trend metrics `총 중량 / 세트 / 시간`, default `총 중량`
- aggregate trend Y-axis is zero-based
- total-weight compact formatter uses K/M/B with one `kg` unit label
- body distribution uses seven groups: 가슴 / 등 / 어깨 / 하체 / 이두 / 삼두 / 코어
- body-map exposure basis: completed/persisted primary `1.0`, secondary `0.5`; no load/reps/duration/assistance multiplier
- recent-progress exercise row routes to Group 04 detail

Canonical body-distribution source pattern:
- `BodyDistributionSection` — `887:946`
- `BodyDistributionCard` — `887:948`

---

# 07B — LOCKED EXCEPT LONG-LIST POLICY

Canonical decision:
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`

Locked:
- separate selected-body detail screen
- page-level period selector `4주 / 3개월 / 1년`
- `진행한 운동` SectionHeader outside the card
- body map + contributor exercise list inside one unified card
- contributor trailing aggregate is recording-type-safe
- empty state remains in the same card structure
- exercise row routes to Group 04 exercise detail

Still open but currently deferred while PO reviews 07D:
- long contributor-list MVP policy (`all rows` vs `first N + more`)

---

# 07D — WORKOUT SESSION DETAIL · CURRENT REVIEW

## Role

`07D 운동 기록 상세` is the detail of one saved workout session.

Primary current entry:
- Group 06 completion → `기록 상세 보기` → 07D

It shows the actual persisted session result, not one exercise's cross-session history.

## Current Figma hierarchy

1. navigation header
2. session title + date
3. conditional personal-record trophy card
4. session summary metrics
5. `운동 부위 분포`
6. `수행 운동`

Overview layout:
- `OverviewSection` — `858:7170`
- vertical auto layout
- `24px` gap
- child order: `SessionIntro → PersonalRecordTrophyCard → SessionSummary`

## Session summary — 07D-LOCAL COMPONENT / BALANCED AUTO-LAYOUT / QA PASS

Current four review metrics:
- 총 볼륨
- 운동 시간
- 운동 수
- 완료 세트

PO direction:
- four separate metric cards are removed
- summary metrics are grouped into one enclosing card
- 2 × 2 glanceable hierarchy is preserved
- cells use only subtle horizontal/vertical dividers
- outer card reuses Fitness surface/border tokens and `12px` radius
- the unified summary is a dedicated 07D-local component
- nested metric content continues to reuse shared `CompletionMetricCard` instances; do not modify that shared component globally
- when a personal record exists, the personal-record trophy card appears before this summary card

Current Figma:
- `SessionSummary` wrapper — `1075:776`, `320 × 159`
- master `07D/SessionSummaryCard` — `1124:736`, `320 × 159`
- live instance `SessionSummaryCard` — `1124:754`, `320 × 159`

Balanced geometry:
- outer padding `16px`
- inner width `288px`
- row height `56px`
- equal flexible metric cells `143.5px / 143.5px`
- vertical divider `1 × 40px`, centered with `8px` visual inset top/bottom
- horizontal divider `288 × 1px`
- vertical root itemSpacing `7px`
- rhythm `16 / 56 / 7 / 1 / 7 / 56 / 16`

Superseded:
- raw live frame `SessionSummaryCard` — `1103:751`
- asymmetric 135px / 136px metric widths and 57px rows
- previous overview order `SessionIntro → SessionSummary → PersonalRecordTrophyCard`

Focused component screenshot = PASS.
Focused full 07D screenshot after order swap = PASS.

## Personal record — 07D-LOCAL TROPHY COMPONENT / FRONT-LAYER + BORDER QA PASS

`오늘의 신기록` is a dedicated 07D-local component rather than a modified shared `CompletionPersonalRecordCard` instance.

Current Figma:
- master `07D/PersonalRecordTrophyCard` — `1113:733`, `320 × 126`
- live instance `PersonalRecordTrophyCard` — `1113:739`, `320 × 126`
- `TrophySpace` — `320 × 64`
- `CardSurface` — `1113:736`, `320 × 94`, positioned by root auto layout at y=`32`
- trophy `64 × 64`, absolute overlay at x=`128`, y=`0`
- root vertical auto-layout gap `-32px`
- component/root clipsContent = false
- card surface top padding `40px`, horizontal padding `20px`, bottom padding `12px`
- text gap `6px`

Visual/card rule:
- TrophySpace keeps stable auto-layout geometry.
- actual trophy is an internal absolute overlay after CardSurface in layer order so the trophy renders in FRONT of the card.
- card top boundary passes behind the trophy around its lower cup/neck area.
- CardSurface uses the same Fitness card border treatment as the session-summary card:
  - `border/default` — `VariableID:278:922`
  - `1px`
  - `INSIDE`
- surface/radius remain consistent with the other 07D cards.
- text placement remains auto-layout driven; no manual text offset is required.
- in 07D overview this trophy card appears directly after SessionIntro and before SessionSummary when a PR exists.

Superseded 07D construction:
- `PersonalRecordTrophyWrapper` `1108:733`
- 07D reuse of shared `CompletionPersonalRecordCard` instance `1075:791`
- 36px manually positioned trophy treatment
- trophy-behind-card layer order
- borderless PR card surface

Important:
- the existing shared/global `CompletionPersonalRecordCard` remains unchanged for its existing Group 06 use case
- do not replace it globally with the 07D trophy component

Focused component screenshot = PASS.
Focused full 07D screenshot = PASS.

## Session body distribution

Reuses the approved 07A body-distribution composition:
- current 07D `SessionBodyDistributionSection` — `1075:794`
- same body-map/card treatment
- only body areas represented by the selected saved session are listed
- current upper-body review sample: 가슴 / 등 / 삼두 / 어깨 / 이두
- unrelated lower-body/core highlights are removed from the current sample body map
- current review percentages `36 / 28 / 16 / 12 / 8` are layout-only sample values, not production fixtures
- same completed/persisted primary `1.0` / secondary `0.5` exposure basis applies

## Performed exercises — C MICRO TABLE + SINGLE CARD / QA PASS

Selected layout: `C · MICRO TABLE`.

Current structure:
- `수행 운동` SectionHeader outside the card
- one enclosing `WorkoutSummaryCard`
- columns `운동 / 수행 / 세트`
- same weight/reps combinations are grouped by set count
- different combinations remain separate rows inside the same exercise group
- first row shows exercise name, following rows leave it blank
- exercise groups use content dividers
- native recording-type values only; no invented unit conversion

Current Figma:
- `WorkoutSummaryCard` — `858:7171`, `320 × 279`
- `WorkoutSummaryTable` — `1097:7116`, `288 × 247`
- inner padding `16px`
- columns `100 / 120 / 44px`, gap `12px`

Superseded for 07D:
- `FlatKeyValueRow Lines=2`
- `ExerciseCard > Mode=WorkoutSummary`

04D `ExerciseMetadata_Flat` remains unchanged.
The micro-table is visually selected, but final shared-component cleanup remains deferred until the PO finishes 07D visual review.

## Current screen geometry

- 360px screen
- current 07D frame `360 × 1348`
- 20px content inset
- `spacing/32` between page sections
- Overview internal gap `24px`
- body section header→card gap `spacing/12`
- performed-exercise header→card gap `spacing/12`
- summary and performed-exercise areas use one enclosing card surface each
- personal-record trophy is accounted for inside its dedicated auto-layout component

## NEXT OPEN ITEM — exact resume point

Continue 07D visual/product review one decision at a time.

Immediate next step:
- PO visual feedback on the current `PersonalRecordTrophyCard → SessionSummary` overview and the selected C performed-exercise treatment.

After visual acceptance, continue remaining product rules:
- how `총 볼륨` appears when the saved session contains no eligible `weight_reps` volume (`—` is already supported by completion policy)
- multiple-PR detail scope
- any additional session metadata/actions genuinely required for MVP

Do not reopen 07A/07B mechanically while doing this.

---

# SHARED DESIGN-SYSTEM RULES RELEVANT HERE

- 360px page content inset = `spacing/20`
- standard page-section separation = `spacing/32`
- SectionHeader content gap = `spacing/12`
- standard card horizontal padding = `spacing/20`
- compact/dense card internals may use `spacing/16`
- reuse Variables/Styles → Components → Patterns before creating new assets

Shared SectionHeader component set:
- `942:7323`
- `Trailing=None` — `942:7315`
- `Trailing=Meta` — `942:7317`
- `Trailing=Action` — `942:7320`

04D flat key/value row family remains valid for metadata:
- `FlatKeyValueRow` component set — `1090:1104`
- `Lines=1` — `1085:1092`

---

# CLOSED / PRESERVED TRACKS

Group 06 운동 완료 — CLOSED:
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

Group 05 운동 중 — CLOSED:
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

01–04 local component/token migration — CLOSED:
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Exercise DB/media — PRESERVED DEFERRED:
- canonical 195 + P0 16 = target 211
- P0 data row/default-media QA locked
- final derived 211 runtime/workbook regeneration and final attachment mapping deferred

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 Product/UX/Figma 단계에서 계속 진행한다.
