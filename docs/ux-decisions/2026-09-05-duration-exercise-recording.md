# Duration-based Exercise Recording

**Date:** 2026-09-05  
**Status:** PO APPROVED / UI DETAIL DEFERRED

## Decision

플랭크처럼 수행 성과를 `횟수`보다 `유지 시간`으로 기록하는 것이 맞는 운동은 `recording_type = duration`으로 기록한다.

현재 P0 적용:

- `plank` → `duration`
- `crunch` → `reps`
- `lying-leg-raise` → `reps`

시간제 운동의 기록값은 초 단위 duration으로 저장하고, 의미 없는 가짜 reps로 변환하지 않는다.

이 결정은 이후 PO가 승인한 전체 운동 기록 타입 정책의 일부다.

Broader policy:

- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

## Rest Timer와의 경계

시간제 운동의 **수행시간 측정**과 기존 **휴식 타이머**는 서로 다른 기능이다.

- duration exercise timer: 해당 세트에서 실제로 수행한 시간을 측정/기록
- rest timer: 완료한 세트와 다음 세트 사이의 휴식시간

기존 Rest Timer 결정은 그대로 유지한다:

- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

시간제 운동을 추가한다고 기존 휴식 타이머 정책을 변경하지 않는다.

## UI scope

시간제 운동 전용 Active Workout UI의 최종 형태는 **지금 확정하지 않는다.**

Hevy 참고에서는 duration exercise가 일반 `KG / REPS` 대신 `TIME` 값을 사용하고, 수행시간과 Rest Timer를 분리한다. G Fit도 개념은 분리하되, 구체적인 세트 행 UI / 시작·정지 방식 / countdown vs stopwatch / 목표시간 표시는 후속 Figma·UX 작업에서 결정한다.

따라서 현재 단계에서는:

1. DB/recording schema에서 `duration`을 허용
2. Plank를 `duration`으로 Production 승격 가능
3. timed-set UI 상세는 별도 OPEN item으로 유지
4. UI 미확정이 P0 211 데이터 승격을 막지 않음

## Deferred UI questions

후속 Active Workout UX에서 정할 항목:

- 세트 행 안의 TIME 입력/시작 컨트롤
- 목표 시간과 실제 수행시간을 함께 보여줄지
- countdown / stopwatch 중 기본 방식
- 시간 종료 알림 방식
- 수행시간 종료 후 Rest Timer 자동 시작 조건

이 항목들은 현재 데이터 정책과 분리하여 결정한다.
