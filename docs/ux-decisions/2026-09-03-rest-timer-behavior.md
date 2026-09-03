# Rest timer behavior

**Status:** PO APPROVED

**Date:** 2026-09-03

## Decision

Active Workout의 휴식 타이머는 사용자가 별도로 관리해야 하는 기능이 아니라, **세트 완료에 따라 자동으로 작동하는 보조 기능**으로 사용한다.

### Trigger

- 사용자가 세트 완료 체크를 하면 해당 운동의 휴식 타이머가 자동으로 시작된다.
- Figma의 `410_Rest_Timer`처럼 상단에서 내려오는 짧은 toast / pill 형태를 사용한다.

### Running behavior

- 예: 기본 휴식 시간이 1분이면 1분 카운트다운이 진행된다.
- 시작 직후 타이머 UI는 잠깐 노출되고 다시 사라질 수 있다.
- UI가 사라져도 타이머 자체는 계속 진행된다.
- 사용자는 휴식 시간을 꼭 기다릴 필요가 없다.
- 사용자가 바로 다음 세트나 다른 운동을 진행해도 타이머는 운동 흐름을 막거나 순서를 강제하지 않는다.
- 타이머 toast가 보이는 동안 사용자가 쉬고 싶지 않다면 `X`로 닫을 수 있다.
- `X`는 타이머를 조작하기 위한 복잡한 흐름이 아니라 단순히 현재 노출된 UI를 치우는 행동으로 사용한다.

### Controls

- MVP에서는 `+15초`, `-15초` 같은 시간 증감 버튼을 제공하지 않는다.
- 기본 조작은 최대한 단순하게 유지한다.
- 핵심은 `자동 시작 → 필요하면 X로 닫기 → 운동은 자유롭게 계속`이다.

### End of rest

- 설정된 휴식 시간이 끝나면 종료 피드백을 줄 수 있다.
- 정확한 종료 피드백 방식(진동 / 소리 / 다시 나타나는 toast / background notification)은 구현 및 디자인 단계에서 확정한다.
- 종료 피드백은 다음 세트 진행을 막지 않는다.

## Visual authority

- Figma node `410_Rest_Timer` (`1:1003`)의 상단 toast / pill 구조를 visual reference로 사용한다.
- 기존 `product/wireframe/rest-timer-review.html`의 persistent top-bar 형태와 `+15초 / -15초` 조작안은 최신 PO 결정에 의해 superseded 된다.

## Deferred

- 운동별 기본 휴식시간 설정값
- 사용자 개인 기본 휴식시간 설정
- 타이머 종료 시 진동 / 소리 세기 및 on/off
- background notification 정책
- 새 세트 완료 시 기존 타이머가 남아 있는 경우의 정확한 재시작 처리

## Implementation

Cursor 구현은 아직 승인하지 않는다.
