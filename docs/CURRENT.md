# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA · GROUP 04 CLOSED · ANALYSIS BODY-MAP TAXONOMY NEXT · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Group 04 최종 샘플 데이터 QA와 최근 shared-change 회귀 QA까지 완료되어 **CLOSED** 상태다. Group 04 화면을 다시 시각 재설계하지 않는다. 새 충돌/regression/PO 재검토 요청이 있을 때만 해당 범위를 다시 연다.

---

# CLOSED TRACK — Group 04 운동 목록 · 상세

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — `233:2075`
- shared UI page: `MVP_공용_UI` — `105:3113`

Canonical Group 04 states:

- `04A_Search` — `207:1238`
- `04B_Search_Selected` — `515:1140`
- `04C_Search_Empty` — `539:1050`
- `04D_운동상세` — `40:2325`
- `04E_Custom_Create` — `34:1672`
- `04F_Custom_Edit` — `34:1692`
- `04G_Exercise_History` — `34:1714`
- `04H_Exercise_Attachment_Selection` — `170:2174`
- `04A_Filter_Equipment_Page` — `515:3327`
- `04A_Filter_BodyPart_Page` — `515:3514`
- `04H_Custom_Attachment_Input` — `552:3356`

Closure QA result:

- final exercise-list/filter sample-data QA: **PASS after fixes**
- final scoped A~H integration QA: **PASS**
- canonical root reference viewport: `360 × 954`
- body-part filter aligned to approved large body-part taxonomy
- list sample naming / detailed primary-muscle / equipment examples aligned to current Production baseline + P0 scope
- `SelectedExerciseChip` master remains on `MVP_공용_UI`; all current 04B instances remain linked
- Nav Header shared change regression: PASS
- Empty State regression: PASS
- filter row/divider/component reuse regression: PASS
- 04H attachment UI remains visually aligned

Closure record:

- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Relevant locked decisions remain:

- `docs/ux-decisions/2026-09-10-exercise-filter-full-page-approved.md`
- `docs/ux-decisions/2026-09-10-exercise-library-04b-selected-chips-approved.md`
- `docs/ux-decisions/2026-09-10-exercise-library-04a-design-system-hardening.md`
- `docs/ux-decisions/2026-09-10-exercise-library-04b-design-system-qa.md`
- `docs/ux-decisions/2026-09-10-exercise-detail-04d-scroll-copy-qa.md`
- `docs/ux-decisions/2026-09-10-nav-header-action-edge-alignment.md`
- `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

# ACTIVE TRACK — Analysis

Approved Analysis hierarchy remains locked:

1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Analysis basics already locked:

- default period = 최근 4주
- choices = 4주 / 3개월 / 6개월 / 1년
- headline metrics = 운동 횟수 / 완료 세트 / 운동 시간
- body-map contribution heuristic: primary completed set `1.0`, secondary `0.5`, incomplete `0`
- do not multiply the body-map value by kg/reps/duration/assistance
- do not label the heuristic as optimal/undertrained/overtrained/recovered

Resume Analysis from:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

## NEXT OPEN ITEM — exact resume point

`canonical muscle/body-part taxonomy → practical front/back body-map regions mapping`

Proceed in Product/UX mode first. Confirm the canonical muscle taxonomy actually available in the Production exercise data, then define the practical body-map regions and the mapping rules needed by Analysis. Do not start another Group 04 design pass.

---

# PRESERVED DEFERRED DATA TRACK — Exercise DB / media

Do not reopen completed broad source/video QA without a concrete Production conflict.

- existing canonical exercises = **195**
- P0 additions = **16**
- target derived Production artifact = **211**
- P0 canonical/data row QA = PASS / LOCKED
- P0 default media source lock = PASS
- derived 211-row workbook/runtime DB = **not yet regenerated**
- exact Production attachment allowlists / canonical IDs / media mapping = deferred

References:

- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

# Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

Product Owner가 개발 전환을 명시하기 전까지 Product/UX/Figma 단계에서 계속 진행한다.
