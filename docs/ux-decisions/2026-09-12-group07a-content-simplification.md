# Group 07A 분석 홈 — content simplification

**Date:** 2026-09-12  
**Status:** PO APPROVED CHANGE · FIGMA APPLIED · NO CURSOR HANDOFF

## Decision

`07A_분석홈_Exploration`에서 기존 `요즘 운동 흐름` 섹션을 제거한다.

제거 범위:
- 섹션 헤더 `요즘 운동 흐름`
- `주 평균 3회` 요약
- 주차별 운동 빈도 막대 차트

## Reason

해당 섹션은 상단 `운동 횟수`와 의미가 겹치고, 분석 홈에서 별도 막대 차트로 유지할 만큼 핵심성이 높지 않다.

07A는 더 간결하게 다음 흐름으로 유지한다.

1. 기간 선택
2. 운동 횟수 / 완료 세트 / 운동 시간
3. 어디를 많이 했나
4. 최근 기록 변화
5. 최근 운동

사용자 질문 흐름:
- 얼마나 했나
- 어디를 했나
- 기록이 좋아졌나
- 최근 무엇을 했나

## Figma

Canonical frame:
- `07A_분석홈_Exploration` — `836:1112`

Applied:
- `ConsistencySection` 삭제
- 하위 섹션을 기존 Auto Layout 흐름으로 상향 배치
- major section spacing `32` 유지
- frame height를 콘텐츠에 맞게 축소
- post-edit screenshot QA PASS

현재 frame height:
- `360 × 1097`

## Boundary

- 07A 전체가 최종 승인된 것은 아님.
- 현재 PO review를 계속 진행한다.
- Cursor / development handoff는 하지 않는다.
