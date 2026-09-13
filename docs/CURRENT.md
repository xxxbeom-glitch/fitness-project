# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A LOCKED · 07B LOCKED EXCEPT LONG-LIST POLICY · 07C OVERVIEW REMOVED · 07D SESSION DETAIL REFINEMENT IN PROGRESS · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-group07d-flat-performed-exercise-table.md`

Supporting checkpoints:
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

Related Group 04 exercise-detail family:
- page `04 운동 목록 · 상세` — `233:2075`
- `04D_운동상세_운동정보` — `40:2325`
- `04D_운동상세_최근기록` — `34:1714`
- `04D_운동상세_성장` — `1000:1519`

Exercise-specific history/growth is handled by Group 04 `최근 기록 / 성장`; do not recreate a duplicate Group 07 exercise-growth screen.

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
3. session summary metrics
4. conditional personal-record card
5. `운동 부위 분포`
6. `수행 운동`

## Design-system refinement applied — QA PASS

### Session summary

Reuses current shared component:
- `CompletionMetricCard` — `936:914`

Current four review metrics:
- 총 볼륨
- 운동 시간
- 운동 수
- 완료 세트

Two-column gap uses `spacing/12`.

### Personal record

Reuses:
- `CompletionPersonalRecordCard` — `936:918`
- current 07D instance — `1075:791`

### Session body distribution

Reuses the approved 07A body-distribution composition:
- current 07D `SessionBodyDistributionSection` — `1075:794`
- same body-map/card treatment
- only body areas represented by the selected saved session are listed
- current upper-body review sample: 가슴 / 등 / 삼두 / 어깨 / 이두
- unrelated lower-body/core highlights are removed from the current sample body map
- current review percentages `36 / 28 / 16 / 12 / 8` are layout-only sample values, not production fixtures
- same completed/persisted primary `1.0` / secondary `0.5` exposure basis applies; do not invent kg/reps/time conversion for the body map

### Performed exercises — C MICRO TABLE SELECTED / FIGMA APPLIED / QA PASS

`수행 운동`은 운동별 카드로 나누지 않는다.

PO가 Mobbin 참고 후 비교안 중 `C · MICRO TABLE`을 선택했다.

Current structure:
- columns: `운동 / 수행 / 세트`
- 같은 중량/횟수 조합은 세트 수로 묶는다
- 서로 다른 조합은 동일 운동 그룹에서 별도 행으로 나열한다
- 첫 조합 행에만 운동명을 표시하고 다음 조합 행의 운동명 셀은 비운다
- 운동 그룹 사이에는 content divider를 사용한다
- 원본 set data는 그대로 유지한다
- recording type에 없는 단위는 만들지 않는다

Current canonical table:
- `WorkoutSummaryTable` — `1097:7116`
- `320 × 247`

Examples:
- 벤치프레스 | `80kg × 10회` | `2세트`
-             | `75kg × 10회` | `1세트`
- 랫풀다운   | `62.5kg × 10회` | `1세트`
-             | `60kg × 10회` | `2세트`
- 푸시업     | `15회` | `2세트`
-             | `12회` | `1세트`

Superseded for 07D:
- `FlatKeyValueRow Lines=2` two-column presentation
- earlier `ExerciseCard > Mode=WorkoutSummary`

04D `ExerciseMetadata_Flat` remains unchanged and still uses its existing flat key/value row pattern. Do not change 04D to the micro-table style.

Component-system cleanup for the new C table is deferred until the PO finishes visual feedback. After final visual approval, componentize the stable header/data-line pattern and remove unused 07D-only variants.

## Current screen geometry

- 360px screen
- current 07D frame `360 × 1289`
- 20px content inset
- `spacing/32` between page sections
- body section internal header→card gap `spacing/12`
- performed-exercise area uses micro-table columns, no card surfaces
- focused 07D full-screen screenshot QA = PASS

## NEXT OPEN ITEM — exact resume point

Continue 07D visual/product review one decision at a time.

Immediate next step:
- PO feedback on the selected C micro-table appearance; do not finalize a new table component family until this visual is accepted.

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

Do not treat the old `Lines=2` 07D presentation as canonical.

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
