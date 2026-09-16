# Group 07 — Final closure QA

**Date:** 2026-09-16  
**Status:** FINAL CLOSURE QA PASS · GROUP 07 CLOSED · BODY-MAP PRODUCTION ASSET MAPPING DEFERRED · NO CURSOR HANDOFF

## Scope

Final closure QA for the canonical `07 분석 · 운동 기록` flow.

This pass verifies the currently approved Group 07 Product/UX rules, canonical Figma states, shared component linkage after the Group 06 summary-component organization, and the remaining explicit body-map asset deferral.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- `07D_운동기록상세_Exploration` — `836:1593`
- `07D_운동기록상세_DeleteConfirm` — `1136:4054`

The removed separate `07C` overview remains removed and was not recreated.

---

## 1. 07A analysis home — PASS after targeted correction

Approved structure remains intact:
- `운동 추이`
- metric selector `총 중량 / 세트 / 시간`
- period selector `4주 / 3개월 / 1년`
- body-part distribution
- recent progress
- recent workouts

A real QA mismatch was found in the total-weight chart Y-axis: the Figma sample still displayed `15K / 10K / 5K`, while the approved Korean compact-unit contract is `1.5만 / 1만 / 5천 / 0` with `kg` shown once.

Correction applied directly in canonical Figma:
- `1025:1591` → `1.5만`
- `1025:1593` → `1만`
- `1025:1595` → `5천`

Post-fix screenshot/read-back = PASS.

Current representative 4-week X-axis remains:
- `3주 전 / 2주 전 / 지난주 / 이번주`

The previously removed workout-frequency block was not restored.

---

## 2. 07B body-area detail — PASS

Populated state verifies:
- title/back navigation
- analysis-period tabs
- `진행한 운동` section header
- selected-area contributor list
- contributor list remains vertical HUG Auto Layout
- all rows policy remains intact
- no `더보기 / 전체 보기` truncation affordance
- page-level growth handles variable content; no independently scrolling contributor list

Canonical contributor list:
- `SelectedAreaExerciseList_AllRows` — `887:1065`
- `layoutMode=VERTICAL`
- `primaryAxisSizingMode=AUTO`
- `clipsContent=false`

---

## 3. 07B empty state — PASS after targeted correction

A real presentation drift was found during closure QA: the canonical empty state had collapsed to only the centered empty copy and no longer showed the approved `진행한 운동` section header + compact card shell.

The approved empty-state structure was restored using the current Group 07/shared design patterns; no new visual language was invented.

Current state:
- shared section-header instance `SectionHeader_진행한운동` — `1579:813`
  - main component `942:7315`
- compact empty card `SelectedBodyDetailEmptyCard` — `1579:815`
  - `320 × 152`
- centered message `EmptyMessage_기간내기록없음` — `1057:7468`
  - `이 기간에는 등 운동 기록이 없어요`
- body map remains omitted in the empty state

Post-fix screenshot/read-back = PASS.

---

## 4. 07D saved-session detail — PASS

Verified current canonical state:
- shared Nav Header with Back + Trash
- session title/date
- `오늘의 신기록` trophy card with all valid representative PR rows
- shared 2×2 session summary
- session body-part distribution
- compact performed-exercise table

Current representative PR rows:
- `벤치프레스 80kg × 10회`
- `랫풀다운 62.5kg × 10회`
- `푸시업 15회`

Current representative summary:
- `총 볼륨 18,420kg`
- `운동 시간 65분`
- `운동 수 8개`
- `완료 세트 13세트`

The shared `07D/PersonalRecordTrophyCard` and `07D/SessionSummaryCard` remain linked through `Common_Component` after the Group 06 organization work.

The locked non-applicable total-volume rule remains unchanged:
- no eligible completed `weight_reps` set → keep the metric cell and show `—`
- never coerce it to `0kg`

---

## 5. 07D delete confirmation — PASS

Canonical confirm state verifies:
- title: `운동 기록을 삭제할까요?`
- description: `삭제한 운동 기록은 되돌릴 수 없어요.`
- actions: `취소 / 삭제`

The destructive semantics remain the locked whole-session deletion policy; no Product/UX change was introduced in this QA pass.

---

## 6. Common_Component organization — PASS

Before closure, three Group 07-exclusive masters were still physically located in older source areas even though the live screen instances were linked.

A confirmed Group 07 organization frame was created on `Common_Component`:
- `07_GROUP_CONFIRMED_COMPONENTS` — `1578:987`

Existing original masters were moved, not duplicated or detached:
- `AnalysisPeriodTabs` component set — `961:1368`
- `MetricSegmentedControl` component set — `1025:1092`
- `AnalysisProgressRow` — `854:6951`

Shared list families were intentionally **not** moved during this pass:
- `ListCard` — `952:611`
- `RecentWorkoutRow` — `937:7292`

Reason: both are shared with the deferred Group 02 Home flow. Moving or restructuring them during Group 07 closure would unnecessarily reopen a deferred group without a concrete regression.

This is not a Group 07 blocker.

---

## 7. Final structural read-back

Final Group 07 page QA:
- canonical instance nodes checked: `77`
- missing main-component links: `0`
- instance sources:
  - `Common_Component`: `73`
  - legacy `MVP_공용_UI`: `4`
- the 4 remaining legacy-source instances are only the intentionally shared `ListCard` / `RecentWorkoutRow` families noted above
- local component/component-set masters on the Group 07 production page: `0`
- `07_GROUP_CONFIRMED_COMPONENTS` present and intact

Representative frame sizes remain:
- 07A: `360 × 1542`
- 07B: `360 × 890`
- 07B Empty: `360 × 890`
- 07D: `360 × 1437`
- 07D DeleteConfirm: `360 × 1437`

No clipping/blocking visual regression remains in the scoped canonical states.

---

## 8. Body-map production asset mapping — explicitly deferred, not a closure blocker

The production-ready body-map layer mapping remains deferred under:
- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

Until the Product Owner supplies the prepared production image set:
- keep the existing purchased/source muscle-highlight PNG direction
- do not redraw or recolor muscle regions in Figma
- preserve the already validated blend-mode approach
- do not invent canonical muscle → PNG-layer mapping

This is a prepared-asset dependency, not an unresolved Group 07 screen-flow QA blocker.

---

## Result

**PASS — Group 07 canonical analysis/session-detail states, locked policies, shared-component linkage, targeted regressions, and component organization have been verified.**

**GROUP 07 CLOSED.**

Do not reopen Group 07 analysis structure, 07B contributor/empty presentation, 07D PR/summary/delete behavior, chart formatting, or component organization without a concrete new conflict/regression or explicit Product Owner request.

The body-map production asset mapping remains a separate deferred follow-up after the Product Owner supplies the prepared assets.

**NO CURSOR IMPLEMENTATION HANDOFF.**
