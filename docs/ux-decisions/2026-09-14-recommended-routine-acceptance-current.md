# Recommended Routine Acceptance — Current Canonical Flow

**Date:** 2026-09-14  
**Status:** RECORDED CURRENT DECISION · SUPERSEDES DEC-014  
**Scope:** 추천 결과 확인부터 운동 시작, 운동 완료 후 내 루틴 저장까지의 현재 제품 흐름

## Supersession

`docs/08_DECISIONS.md`의 `DEC-014 — Accepting a recommended routine goes directly to Home`은 이후 Product Owner가 승인한 추천 루틴 상세/운동 후 저장 정책과 충돌하므로 현재 흐름에 대해 superseded로 취급한다.

현재 canonical 근거:
- `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`
- `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`
- Group 06의 최신 recommended-routine save dialog checkpoints

이 문서는 새 제품 방향을 추가하는 것이 아니라 위의 이후 PO 승인 결정을 하나의 현재 계약으로 정리한다.

## Current flow

추천 입력 3개를 완료한 뒤의 기본 흐름:

`추천 결과/상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부 선택`

Rules:
- 추천 루틴 상세의 Primary CTA는 `운동 시작`이다.
- 추천 루틴을 운동 시작 전에 자동으로 `내 루틴`에 저장하지 않는다.
- 추천 루틴 상세에 별도 `내 루틴 저장` CTA를 두지 않는다.
- 오늘 수행한 운동 기록 저장과 추천 루틴 자체를 `내 루틴`에 저장하는 것은 별개의 동작이다.
- 추천 루틴으로 완료한 오늘 운동 기록은 저장한다.
- 운동 완료 후 사용자가 앞으로 다시 사용할 루틴인지 명시적으로 선택한다.
- 추천 루틴 저장을 선택했고 운동/세트 구조를 변경한 경우에만 저장할 루틴 구성을 추가로 선택한다.
- 중량/횟수 변경, 단순 수행 순서 차이, 일부 미수행은 추천 루틴 구조 변경으로 보지 않는다.

## Group 03 impact

`03C_추천루틴상세`의 현재 Figma 의미가 canonical이다.

- 실제 루틴명을 header에 표시
- 일반 루틴 상세와 동일한 요약/운동 목록 구조
- header Edit action 없음
- Primary CTA = `운동 시작`
- CTA 이후 Active Workout으로 진입

따라서 과거 `이 루틴 사용하기 → 저장 → Home` 흐름을 Group 03 구현 계약으로 사용하지 않는다.

## Weekday note

이 변경은 weekday scheduling을 추천 수락 흐름에 다시 추가하지 않는다. 현재 MVP의 weekday 관련 별도 정책을 그대로 따른다.

## Development boundary

이 문서는 제품/UX Source of Truth 정합성 보정이다. Product Owner가 개발 전환을 명시하기 전까지 Cursor 구현 handoff를 시작하지 않는다.
