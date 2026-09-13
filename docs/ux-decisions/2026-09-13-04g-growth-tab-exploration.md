# 04G Growth Tab Exploration

**Date:** 2026-09-13  
**Status:** FIGMA EXPLORATION APPLIED / VISUAL QA PASS / 07C RETAINED / PO REVIEW OPEN / NO CURSOR HANDOFF

## Scope

Product Owner requested keeping current `07C_운동별성장_Exploration` intact while testing the same growth-analysis concept inside Group 04 exercise detail as a third tab.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Group 04 page:
- `04 운동 목록 · 상세` — `233:2075`

Existing recent-record screen remains:
- `04G_Exercise_History` — `34:1714`

New exploration screen:
- `04G_Exercise_Growth_Exploration` — `1000:1519`

## Shared 3-tab shell

The existing shared `fixed-tab-bar` component set is reused.

Current tab labels:
- `운동 정보`
- `최근 기록`
- `성장`

Growth exploration uses:
- `Type=3탭`
- `Active=성장`
- `State=Default`

The existing recent-record 04G remains `Active=최근 기록`.

## Growth content

The growth screen intentionally does not duplicate the full date-by-date set history already owned by the `최근 기록` tab.

Current first-pass hierarchy:
1. period selector `4주 / 3개월 / 1년`
2. `최근 기록 변화`
3. `기록 추이`
4. PR summary inside the trend section
   - `최고 중량`
   - `최대 반복`

Reusable Figma assets:
- `AnalysisPeriodTabs` shared component
- `SectionHeader / Trailing=None`
- existing 07C `RecentChangeSection`
- existing 07C `TrendSection`
- shared `MetricCard` instances inside PR summary

Current sample values remain review-only placeholders:
- previous comparable record: `77.5kg × 10회`
- current representative record: `80kg × 10회`
- 최고 중량: `80kg`
- 최대 반복: `12회`

## Prototype connection

The 04G recent-record and growth screens are connected through the shared top tab bar:
- existing `04G_Exercise_History` 성장 tab -> `04G_Exercise_Growth_Exploration`
- new growth screen 최근 기록 tab -> existing `04G_Exercise_History`

## QA

Focused screenshot/read-back on the new growth screen:
- 360 × 954 shell preserved: PASS
- Nav Header / exercise title preserved: PASS
- shared `fixed-tab-bar` active state = 성장: PASS
- period selector reused: PASS
- recent-change card reused: PASS
- trend chart and PR metric cards reused: PASS
- no duplicate full recent-history list inside 성장 tab: PASS
- clipping / collision: PASS
- prototype recent-record <-> growth navigation reactions: PASS

## Boundary

- `07C_운동별성장_Exploration` is intentionally retained and unchanged.
- This checkpoint does **not** decide whether 07C will later be merged into 04G.
- This checkpoint does **not** change the locked Analysis IA yet.
- No development / Cursor handoff.
