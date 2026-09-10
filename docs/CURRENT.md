# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA · GROUP 04 SCREEN-LEVEL DESIGN CLOSED · FINAL CLOSURE QA NEXT · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-10-group04-session-handoff.md`

이 문서가 현재 Group 04의 최신 화면 상태, 최근 Figma 수정, 재검토 금지 범위, 정확한 다음 작업을 정리한다.

---

# ACTIVE TRACK — Group 04 closure QA

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

Recent final screen-level changes are locked unless closure QA finds a regression:

- 04B V2 selected-exercise horizontal chips remain canonical.
- `SelectedExerciseChip` master `569:1335` was moved to `MVP_공용_UI`; 04B instances remain linked.
- 04A equipment/body filter rows use dividers and 0 left/right row padding so content aligns to the page/list line.
- 04C empty state now follows the approved 03B pattern: centered title + description + compact Primary CTA; no fixed full-width footer CTA.
- shared Nav Header action slots remain `44×44`; left icon aligns left within the left slot, right icon aligns right within the right slot, visible icon stays `24×24`.
- 04D is flat information treatment; both `운동 방법` and `핵심 체크포인트` use numbered lists and responsive long-copy layout.
- 04E/04F forms and 04G history have short-device scroll safety fixes.
- 04H attachment picker visual work is aligned; exact Production attachment allowlists/media mapping remain deferred data work.

Relevant decisions/checkpoints:

- `docs/ux-decisions/2026-09-10-group04-session-handoff.md`
- `docs/ux-decisions/2026-09-10-exercise-filter-full-page-approved.md`
- `docs/ux-decisions/2026-09-10-exercise-library-04b-selected-chips-approved.md`
- `docs/ux-decisions/2026-09-10-exercise-library-04a-design-system-hardening.md`
- `docs/ux-decisions/2026-09-10-exercise-library-04b-design-system-qa.md`
- `docs/ux-decisions/2026-09-10-exercise-detail-04d-scroll-copy-qa.md`
- `docs/ux-decisions/2026-09-10-nav-header-action-edge-alignment.md`
- `docs/ux-decisions/2026-09-09-exercise-library-hevy-alignment.md`
- `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

## NEXT OPEN ITEM — exact resume point

Do not start another visual redesign pass.

1. **Final exercise-list/filter sample-data QA** against canonical Production taxonomy.
2. **Final scoped Group 04 A~H integration QA** for regressions from the latest shared changes only: Nav Header, Empty State, filter rows, SelectedExerciseChip relocation.
3. If no blocker remains, mark **Group 04 CLOSED**.
4. Resume **Analysis body-area granularity / body-map mapping**.

No Cursor implementation handoff yet.

---

# NEXT TRACK AFTER GROUP 04 — Analysis

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

Exact first Analysis task after Group 04 closure:

`canonical muscle/body-part taxonomy → practical front/back body-map regions mapping`

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

Product Owner가 개발 전환을 명시하기 전까지 Figma/Product 단계에서 계속 진행한다.
