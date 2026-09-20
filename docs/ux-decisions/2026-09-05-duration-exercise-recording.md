# Duration-based Exercise Recording

**Date:** 2026-09-05  
**Status:** PO APPROVED · ACTIVE WORKOUT UX RESOLVED 2026-09-20

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

## Active Workout UX — resolved 2026-09-20

MVP에서는 duration 세트 전용 stopwatch/countdown 기능을 만들지 않는다.

Current rule:
- Active Workout의 duration 세트는 shared `ExerciseCard / Mode=WorkoutDuration`을 사용한다.
- 세트 행은 `TIME` 값 입력/수정 + 완료 체크 구조다.
- 사용자는 필요하면 Nav Header의 기존 Manual Timer를 참고용으로 사용할 수 있다.
- Manual Timer와 duration 세트 값은 자동 연동하지 않는다.
- Manual Timer가 00:00에 도달해도 duration 세트가 자동 완료되거나 시간이 자동 입력되지 않는다.
- 사용자가 현재 TIME 값을 확인/수정한 뒤 세트를 직접 완료 체크한다.
- 완료된 duration 세트에는 그 시점의 TIME 값을 초 단위 duration으로 저장한다.
- duration 세트 완료 후에는 다른 세트와 동일한 automatic Rest Timer 규칙을 적용한다.

## Timer boundary

세 가지 시간 개념은 분리한다:
- workout elapsed time: 전체 운동 경과 시간
- Manual Timer: 사용자가 필요할 때 헤더에서 수동으로 사용하는 참고용 countdown
- Rest Timer: 완료한 세트와 다음 세트 사이의 자동 휴식시간

duration 기록을 위해 별도의 네 번째 타이머를 추가하지 않는다.

기존 Rest Timer 결정은 그대로 유지한다:
- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

## Figma reflection

Existing shared component already matches this policy:
- `Common_Component > ExerciseCard > Mode=WorkoutDuration` — `651:3614`
- TIME column present
- per-set completion control present
- no inline stopwatch/countdown start-stop control

No additional top-level Active Workout frame is required.
