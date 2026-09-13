# Group 07D — Session summary unified card

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / DEDICATED COMPONENT / VISUAL QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 세션 요약 4개 지표를 각각 독립 카드로 나누지 않는다.

`수행 운동`에서 채택한 단일 카드 패턴과 동일하게, 하나의 통합 카드 안에서 요약 지표를 구성한다.

Current metrics:
- 총 볼륨
- 운동 시간
- 운동 수
- 완료 세트

PO 추가 피드백에 따라 이 통합 요약 카드는 07D 전용 로컬 컴포넌트로 정의한다.

PO 추가 피드백에 따라 Overview에서 표시 순서는 다음으로 변경한다:
1. session title + date
2. conditional personal-record trophy card
3. session summary card

즉 `오늘의 신기록`이 있을 때 신기록 보상을 먼저 보여주고, 그 아래에 총 볼륨/운동 시간/운동 수/완료 세트 요약을 배치한다.

## Layout

- one enclosing card surface
- 2 × 2 metric grid
- 내부 셀에는 별도 card surface를 두지 않음
- 가로/세로 content divider로 셀만 구분
- 각 셀은 기존 `CompletionMetricCard`의 label/value typography를 재사용
- outer padding `16px`
- card radius `12px`
- existing Fitness surface/border tokens 재사용

Balanced spacing refinement:
- component size `320 × 159`
- inner width `288px`
- each metric row height `56px`
- two metric cells have equal flexible width `143.5px` each
- vertical divider `1 × 40px`, row center aligned → top/bottom visual inset `8px`
- horizontal divider `288 × 1px`
- root vertical item spacing `7px`
- resulting vertical rhythm is symmetrical: `16 / 56 / 7 / 1 / 7 / 56 / 16`

The goal is to keep the existing visual density while removing the previous 135px / 136px asymmetric cell widths and 57px row imbalance.

## Component rule

Dedicated local component:
- `07D/SessionSummaryCard`
- this component owns the outer surface, 2×2 grid, and dividers
- the nested metric content continues to reuse `CompletionMetricCard` instances
- do not modify the shared `CompletionMetricCard` globally for this 07D composition

## Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07D_운동기록상세_Exploration` — `836:1593`
- `OverviewSection` — `858:7170`, vertical auto layout, `24px` gap
- overview child order: `SessionIntro` → `PersonalRecordTrophyCard` → `SessionSummary`
- `SessionSummary` wrapper — `1075:776`, `320 × 159`
- component master `07D/SessionSummaryCard` — `1124:736`, `320 × 159`
- live instance `SessionSummaryCard` — `1124:754`, `320 × 159`

Superseded live construction:
- raw frame `SessionSummaryCard` — `1103:751`
- previous Overview order `SessionIntro → SessionSummary → PersonalRecordTrophyCard`

## QA

Focused component screenshot after componentization and spacing refinement = PASS.
Focused full-screen 07D screenshot after order swap = PASS.

Verified:
- four separate metric cards remain removed
- one shared card surface
- 2 × 2 hierarchy preserved
- left/right cells are equal width
- top/bottom and center-divider spacing is visually balanced
- typography/value prominence preserved
- personal-record trophy card now appears above the session summary
- body distribution and performed-exercise card are unchanged

## Development boundary

No Cursor/development handoff is authorized.
