# Group 07 — Common_Component + naming cleanup

**Date:** 2026-09-16  
**Status:** POST-CLOSURE MAINTENANCE PASS · GROUP 07 REMAINS CLOSED · NO CURSOR HANDOFF

## Scope

Product Owner explicitly requested the remaining Group 07 naming/component cleanup after final closure.

This maintenance pass does not change Product/UX behavior. It only normalizes Figma layer/component naming and finishes Common_Component organization.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 Analysis · Workout History` — `233:2078`
- `07A_Analysis_Home` — `887:936`
- `07B_BodyArea_Detail` — `887:1028`
- `07B_BodyArea_Detail_Empty` — `1057:593`
- `07D_Workout_History_Detail` — `836:1593`
- `07D_Workout_History_Detail_DeleteConfirm` — `1136:4054`

## English naming normalization

Canonical Group 07 screen/layer names were normalized to English while preserving all user-facing Korean copy.

Examples:
- `Nav_분석` → `Nav_Analysis`
- `SectionHeader_운동추이` → `SectionHeader_WorkoutTrend`
- `AnalysisTrendLineChart_총중량_4주` → `AnalysisTrendLineChart_TotalWeight_4Weeks`
- `Nav_부위별 분석` → `Nav_BodyAreaAnalysis`
- `SectionHeader_진행한운동` → `SectionHeader_PerformedExercises`
- `EmptyMessage_기간내기록없음` → `EmptyMessage_NoRecordsInPeriod`
- body-area/link/exercise layer names were normalized to semantic English names
- session-name/date text-layer names were normalized to `SessionName / SessionDate`

Final read-back across the five canonical Group 07 frames:
- Korean/mixed Figma layer-name count: `0`
- visible Korean product copy remains unchanged

## 07_GROUP_CONFIRMED_COMPONENTS

Canonical Common_Component group:
- `07_GROUP_CONFIRMED_COMPONENTS` — `1578:987`

Masters remain the same original nodes; no duplication/detach:
- `AnalysisPeriodTabs` — `961:1368`
- `MetricSegmentedControl` — `1025:1092`
- `AnalysisProgressRow` — `854:6951`

Variant/layer naming was normalized to English.

`AnalysisPeriodTabs` variants:
- `Active=4Weeks`
- `Active=3Months`
- `Active=1Year`

`MetricSegmentedControl` variants:
- `Active=TotalWeight`
- `Active=Sets`
- `Active=Time`

Final read-back inside `07_GROUP_CONFIRMED_COMPONENTS`:
- Korean/mixed Figma layer-name count: `0`

## Shared component naming maintenance

Shared Common_Component sources used by Group 07 were also normalized where needed:
- `Nav Header` internal title-layer names → `Title`
- `DialogCard` title/description layer names → `Title / Description`
- shared `DialogButtons` action-label layer names → `SecondaryLabel / PrimaryLabel`

Only layer names changed. Visible strings and component behavior did not change.

## Remaining legacy list components moved to Common_Component

The previous final-closure exception for Group 02-shared list masters is superseded by this explicit Product Owner cleanup request.

New organizational frame:
- `SHARED_LIST_COMPONENTS` — `1593:1386`

Original masters moved from legacy `MVP_공용_UI` into `Common_Component`:
- `RecentWorkoutRow` — `937:7292`
- `ListCard` — `952:611`

The original masters were moved, not copied, recreated, or detached. Existing Group 02/07 instances therefore retain their main-component linkage.

## Final structural QA

Canonical Group 07 frames:
- instance nodes checked: `77`
- missing main-component links: `0`
- source `Common_Component`: `77 / 77`
- source legacy `MVP_공용_UI`: `0`
- Korean/mixed layer names in canonical frames: `0`

Visual regression screenshots after the cleanup:
- `07A_Analysis_Home` — PASS
- `07B_BodyArea_Detail_Empty` — PASS
- `07D_Workout_History_Detail_DeleteConfirm` — PASS

No visible product copy, spacing, interaction meaning, chart content, session data, or body-map presentation changed in this maintenance pass.

## Result

**PASS — Group 07 naming and component organization are fully normalized through Common_Component.**

**GROUP 07 remains CLOSED.**

Body-map production asset mapping remains separately deferred as previously decided.

**NO CURSOR IMPLEMENTATION HANDOFF.**
