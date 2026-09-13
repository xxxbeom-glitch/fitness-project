# Group 07D — Session summary unified card

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / VISUAL QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 세션 요약 4개 지표를 각각 독립 카드로 나누지 않는다.

`수행 운동`에서 채택한 단일 카드 패턴과 동일하게, 하나의 통합 카드 안에서 요약 지표를 구성한다.

Current metrics:
- 총 볼륨
- 운동 시간
- 운동 수
- 완료 세트

## Layout

- one enclosing card surface
- 2 × 2 metric grid
- 내부 셀에는 별도 card surface를 두지 않음
- 가로/세로 content divider로 셀만 구분
- 각 셀은 기존 `CompletionMetricCard`의 label/value typography를 재사용
- dense inner padding `16px`
- card radius `12px`
- existing Fitness surface/border tokens 재사용

## Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07D_운동기록상세_Exploration` — `836:1593`
- `SessionSummary` — `1075:776`, `320 × 159`
- `SessionSummaryCard` — `1103:751`, `320 × 159`

The existing `CompletionMetricCard` instances remain as the metric content source, but their individual surface/stroke/radius shell is overridden inside the unified summary card.

## QA

Focused full-screen screenshot after applying the unified summary card = PASS.

Verified:
- four separate metric cards removed
- one shared card surface
- 2 × 2 hierarchy preserved
- typography/value prominence preserved
- body distribution, PR card, performed-exercise card unchanged

## Development boundary

No Cursor/development handoff is authorized.
