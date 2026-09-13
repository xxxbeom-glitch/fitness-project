# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A LOCKED · 07B LOCKED EXCEPT LONG-LIST POLICY · 07C OVERVIEW REMOVED · 07D VISUAL DIRECTION ACCEPTED · 07D PRODUCT RULE REVIEW IN PROGRESS · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`

Latest cleanup checkpoint:
- `docs/ux-decisions/2026-09-13-group07d-figma-cleanup-shared-components.md`

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
- shared UI master page `MVP_공용_UI` — `105:3113`

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

Still open but deferred while 07D is active:
- long contributor-list MVP policy (`all rows` vs `first N + more`)

---

# 07D — WORKOUT SESSION DETAIL · VISUAL DIRECTION ACCEPTED

## Role

`07D 운동 기록 상세` is the detail of one saved workout session.

Primary current entry:
- Group 06 completion → `기록 상세 보기` → 07D

It shows the actual persisted session result, not one exercise's cross-session history.

## Current hierarchy

1. navigation header
2. session title + date
3. conditional personal-record trophy card
4. session summary metrics
5. `운동 부위 분포`
6. `수행 운동`

Overview:
- `OverviewSection` — `858:7170`
- vertical auto layout
- `24px` gap
- child order: `SessionIntro → PersonalRecordTrophyCard → SessionSummary`

## Approved shared-UI masters

The two approved 07D-scoped component masters are stored on `MVP_공용_UI` rather than the Group 07 working canvas:

- `07D/PersonalRecordTrophyCard` — `1113:733`, `320 × 126`
- `07D/SessionSummaryCard` — `1124:736`, `320 × 159`

Live 07D instances remain connected:
- `PersonalRecordTrophyCard` — `1113:739` → master `1113:733`
- `SessionSummaryCard` — `1124:754` → master `1124:736`

The existing shared/global `CompletionPersonalRecordCard` remains unchanged for Group 06.
The summary master continues to reuse shared `CompletionMetricCard` instances internally.

## Session summary — LOCKED VISUAL DIRECTION / QA PASS

Metrics:
- 총 볼륨
- 운동 시간
- 운동 수
- 완료 세트

Rules:
- one enclosing card
- 2 × 2 metric grid
- subtle horizontal/vertical dividers
- outer padding `16px`
- row height `56px`
- equal metric-cell widths
- same Fitness surface/border/radius treatment
- personal-record trophy card appears before summary when a PR exists

## Personal record — LOCKED VISUAL DIRECTION / QA PASS

Rules:
- trophy `64 × 64`
- trophy renders in FRONT of CardSurface
- CardSurface uses `border/default`, `1px`, `INSIDE`
- component uses stable auto-layout geometry with internal absolute trophy overlay
- Group 06 shared PR component is not replaced globally

## Session body distribution — QA PASS

- `SessionBodyDistributionSection` — `1075:794`
- reuses approved 07A body-map/card composition
- only body areas represented by the selected saved session are listed
- current review values `36 / 28 / 16 / 12 / 8` are sample layout data only
- same completed/persisted primary `1.0` / secondary `0.5` exposure basis applies

## Performed exercises — C MICRO TABLE ACCEPTED / QA PASS

Current live structure:
- `수행 운동` SectionHeader outside the card
- one enclosing `WorkoutSummaryCard` — `858:7171`
- `WorkoutSummaryTable` — `1097:7116`
- columns `운동 / 수행 / 세트`
- same weight/reps combinations grouped by set count
- different combinations remain separate rows inside the same exercise group
- native recording-type values only; no invented unit conversion

Temporary A/B/C comparison artifacts are removed from the Group 07 page.
Former comparison section:
- `07D_수행운동_미니멀_비교안` — removed node `1092:840`
- contained `A_TonalVertical / B_Condensed / C_MicroTable`

The selected live C treatment remains intact.
Shared-component cleanup for the table pattern is non-blocking and deferred until the remaining 07D product rules are settled.

## Current screen geometry

Actual Figma evidence:
- root `07D_운동기록상세_Exploration` = `360 × 1437`
- content frame begins at y=`138`, height `1210`, ending at y=`1348`
- page content inset `20px`
- `spacing/32` between page sections
- Overview internal gap `24px`
- body section header→card gap `spacing/12`
- performed-exercise header→card gap `spacing/12`

Latest full-screen screenshot/read-back after comparison cleanup and master relocation = PASS.

## NEXT OPEN ITEM — exact resume point

07D visual comparison/review is complete. Continue remaining product rules one decision at a time:

1. how `총 볼륨` appears when the saved session contains no eligible `weight_reps` volume — Group 06 already supports `—`, so review 07D for the same meaning/treatment rather than inventing another metric
2. multiple-PR detail scope
3. any additional session metadata/actions genuinely required for MVP

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
