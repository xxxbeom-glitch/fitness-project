# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA · 01–04 LOCAL COMPONENT/TOKEN MIGRATION PASS · GROUP 04 CLOSED · ANALYSIS BODY-MAP TAXONOMY NEXT · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`

PO 요청에 따라 현재 작업된 Figma `01 → 02 → 03 → 04` 페이지를 순서대로 검사하고, screen tree의 external component / Variable / Style dependency를 current Fitness file local asset으로 이관했다.

Final combined dependency audit:

| Page | External component | External variable | External style |
| --- | ---: | ---: | ---: |
| 01 로그인 · 첫 진입 | 0 | 0 | 0 |
| 02 홈 | 0 | 0 | 0 |
| 03 루틴 | 0 | 0 | 0 |
| 04 운동 목록 · 상세 | 0 | 0 | 0 |

This audit applies to the canonical screen trees on pages 01–04. It does not assert that every unused asset or every other page in the entire Figma file has no external library reference.

---

# CLOSED TRACK — 01–04 local component / token migration

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- `01 로그인 · 첫 진입` — `233:2072`
- `02 홈` — `233:2073`
- `03 루틴` — `233:2074`
- `04 운동 목록 · 상세` — `233:2075`
- shared UI page: `MVP_공용_UI` — `105:3113`
- migration management frame: `LOCAL_COMPONENT_LIBRARY` — `635:788`

Migration rules/results:

- existing valid local components were retained
- external component families were localized only when no local equivalent existed
- previously localized component families were reused on later pages instead of duplicated
- screen instances were component-swapped; no detach-based screen duplication was used
- nested external component dependencies were also replaced
- external Variable/Style bindings and screen overrides were rebound to current local foundations
- existing Variant / Component Property / Auto Layout / instance override behavior was preserved
- representative post-migration visual/artifact read-back: PASS

Local foundation additions made only where an approved existing role had no local equivalent:

- dialog typography roles: `dialog/title`, `dialog/secondary`, `dialog/primary`
- Tag roles: `tag-bg/tricep`, `tag/tricep`, `tag-bg/shoulder`, `tag/shoulder` plus required local primitives
- `neutral/50`
- `border/thin = 0.5`

Important component cleanup:

- existing local Nav Header nested icons are now local
- existing Group 04 `ExerciseRowDetailAction` / `FilterSelectButton` nested chevron is now local
- `ExerciseSearchRow_Selected` master `598:1392` is now placed on `MVP_공용_UI` while preserving the same master ID and existing instance links

Checkpoint:

- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`

Do not reopen 01–04 visual design solely because component ownership changed.

---

# CLOSED TRACK — Group 04 운동 목록 · 상세

Group 04 screen-level Product/UX remains CLOSED.

Canonical page:

- `04 운동 목록 · 상세` — `233:2075`

Canonical states include:

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

Closure record:

- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

The local-component migration did not reopen or redesign Group 04. Post-migration structure/binding/visual regression QA remained PASS.

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

Proceed in Product/UX mode first. Confirm the canonical muscle taxonomy actually available in the Production exercise data, then define the practical body-map regions and mapping rules needed by Analysis.

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
