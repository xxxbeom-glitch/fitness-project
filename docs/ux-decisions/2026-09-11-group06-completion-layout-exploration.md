# Group 06 Workout Completion — Layout Exploration Checkpoint

**Date:** 2026-09-11  
**Status:** ACTIVE / PRODUCT-UX + FIGMA / NOT PRODUCT-LOCKED  
**Scope:** Group 06 운동 완료 화면의 콘텐츠 축약 및 시각 방향 탐색

## Canonical Figma — unchanged

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `06 운동 완료` — `233:2077`
- current canonical main: `06A_Completion_Carousel` — `163:2031`
- local component library: `LOCAL_COMPONENT_LIBRARY` — `635:788`
- completion status component: `CompletionStatusIcon` — `742:901`

이번 작업에서 만든 화면들은 모두 **Draft exploration**이다. Product Owner가 아직 최종 방향을 확정하지 않았으므로 기존 canonical main을 교체하지 않는다.

## 1. Full completion dashboard exploration

Created:

- `06A_Completion_Dashboard_Full_Draft` — `775:593`
- 360×1000

Structure:
- success icon + `운동 완료`
- `오늘 기록` — 총 볼륨 hero + 운동 시간 / 완료 세트 / 완료 운동
- `오늘의 성과` — 최고 기록 + 다음 운동 힌트
- `수행한 운동` list
- `기록 상세 보기 / 홈으로 돌아가기`

Visual/layout cleanup was applied using the existing Fitness design-system spacing, typography, surfaces, radius, local components and bindings.

This draft is intentionally preserved as the fuller comparison case, but it raised a product concern: since a separate `기록 상세 보기` path exists, the completion screen may be duplicating too much detail.

## 2. Chart explorations — comparison only

Created three chart-oriented completion variants:

1. `06A_Chart_A_ExerciseTrend_Draft` — `783:653`
   - selected exercise recent 5-session trend
   - line chart
   - sample: bench press +7.5kg

2. `06A_Chart_B_RoutineVolume_Draft` — `783:729`
   - same-routine recent total-volume trend
   - bar chart
   - current session emphasized

3. `06A_Chart_C_PRCompare_Draft` — `783:801`
   - direct previous-best vs today comparison
   - two-bar comparison

Focused Figma QA on all three:
- missing main component = 0
- remote main component = 0
- missing Variable = 0
- remote Variable = 0
- missing Style = 0
- remote Style = 0
- screenshot read-back = PASS

No chart direction was product-approved. Current interpretation is that richer charts may fit `기록 상세` or deferred `분석` better than the immediate completion page.

## 3. Simplified completion explorations

After the Product Owner raised the `기록 상세 보기` separation, three concise alternatives were created:

### A — Balanced
- `06A_Simple_A_Balanced_Draft` — `788:671`
- success header
- today summary
- one compact best-record highlight
- bottom dual actions

### B — Minimal
- `06A_Simple_B_Minimal_Draft` — `788:726`
- success header
- today summary only
- bottom dual actions

### C — Result Board
- `06A_Simple_C_ResultBoard_Draft` — `788:781`
- success header
- today summary and best-record highlight merged into one result card
- bottom dual actions

All three are 360×780.

Focused QA:
- existing local `CompletionStatusIcon` reused
- existing local `DualCTA` reused
- component missing/remote = 0
- Variable missing/remote = 0
- Style missing/remote = 0
- screenshot read-back = PASS

These are **not canonical and not yet approved**.

## 4. Current product direction under review

Working direction, not yet locked:

> The completion page should function as a short post-workout summary, while detailed exercise records, comparisons and charts belong behind `기록 상세 보기` unless a later decision proves they are essential at completion time.

Likely completion-page responsibilities:
1. confirm workout completion / save state
2. show a concise summary of today's workout
3. optionally show one meaningful highlight such as a best record
4. provide `기록 상세 보기 / 홈으로 돌아가기`

Items currently considered candidates to remove from the completion page:
- full performed-exercise list
- multiple charts
- multiple analysis cards
- dense comparison copy

Do not treat this as a final Decision until Product Owner approves a specific shell.

## 5. Mobbin visual references reviewed

High-value reference set for the next review:

- [Peloton — workout complete](https://mobbin.com/screens/1bc43851-2b2b-4242-a4f9-e14ae5242120) — very concise completion → summary → view workout / done
- [Ladder — workout complete](https://mobbin.com/screens/3a9eda02-3ea8-48fd-9458-73ee3677b059) — completion moment treated as a distinct visual event
- [Hevy — nice work](https://mobbin.com/screens/db9dd20e-1263-4da0-88ef-4fdca528cc6a) — duration / volume / sets as the main completion metrics
- [Bevel — strength training result](https://mobbin.com/screens/5f7837bf-96da-4c5d-a614-655893f9cbf3) — one dominant result with supporting metrics
- [Tonal — Free Lift result](https://mobbin.com/screens/4efe0ff7-04f9-4cfa-a74e-37872c80deaa) — strong central result object and concise workout metrics
- [Ladder — result data layout](https://mobbin.com/screens/71401625-f188-4059-9d11-3b2e3f032e29) — bold numbers can carry the visual hierarchy without many cards
- [Tonal — strength dashboard](https://mobbin.com/screens/74e51c99-0993-4408-9ef7-fcd0a2ebd96c) — useful if a stronger visual/body-map direction is revisited
- [Peloton Strength+ — total volume](https://mobbin.com/screens/7d46ceb5-9b75-40df-a0ea-07cce7f0b929) — one dominant metric with minimal trend support
- [Duolingo — completion](https://mobbin.com/screens/c00bbcbd-f4c9-4b5c-acf0-00dd9be39813) — large completion visual + exactly a few results + one primary action
- [Mimo — completion](https://mobbin.com/screens/b5772854-5c51-4fca-b828-0df669bfa4d4) — compact completion state with three result metrics

Reference principle remains unchanged: Mobbin/Tonal/Hevy are reference only; the local Fitness design system and approved product decisions take priority.

## NEXT OPEN ITEM — exact resume point

**Resume by reviewing the simplified Group 06 completion shell, not the old carousel from scratch.**

Compare these current drafts first:
- A Balanced — `788:671`
- B Minimal — `788:726`
- C Result Board — `788:781`

Decide:
1. whether completion should remain summary-only because `기록 상세 보기` exists
2. which of A/B/C, or a small hybrid, becomes the common completion shell
3. whether the shell needs one stronger visual signature beyond ordinary stacked cards — e.g. dominant result number, distinct completion hero, or one compact highlight

Do not promote any draft to canonical until Product Owner approves the direction.

After the common completion shell is approved, review Group 06 conditional states only as needed.

**NO CURSOR IMPLEMENTATION HANDOFF.**
