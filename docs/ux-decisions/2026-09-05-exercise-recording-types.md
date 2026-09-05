# Exercise Recording Types

**Date:** 2026-09-05  
**Status:** PO APPROVED / MVP 5 TYPES ACTIVE / 3 TYPES RESERVED

## Decision

G Fit은 모든 운동을 `중량 + 횟수` 한 가지 방식으로 기록하지 않는다.

운동 identity마다 `recording_type`을 지정하고, Active Workout의 세트 입력 UI는 해당 타입에 맞춰 달라진다.

현재 MVP에서 실제 사용하는 기본 recording type은 **5종**으로 확정한다.

| recording_type | 기록값 | 대표 예시 | MVP |
|---|---|---|---|
| `weight_reps` | 중량 + 횟수 | 벤치프레스, 스쿼트, 일반 머신 | ACTIVE |
| `reps` | 횟수 | 푸시업, 크런치, 라잉 레그 레이즈 | ACTIVE |
| `duration` | 시간 | 플랭크, 데드행, 월싯 | ACTIVE |
| `added_weight_reps` | 추가중량 + 횟수 | 중량 풀업, 중량 딥스 | ACTIVE |
| `assisted_weight_reps` | 보조중량 + 횟수 | 어시스트 풀업, 어시스트 딥스 | ACTIVE |

향후 확장을 위해 아래 **3종은 schema-level reserved**로 둔다. MVP에서 별도 UI를 우선 구현하지 않는다.

| recording_type | 기록값 | 대표 예시 | MVP |
|---|---|---|---|
| `weight_duration` | 중량 + 시간 | weighted hold 계열 | RESERVED |
| `distance_duration` | 거리 + 시간 | 러닝, 로잉 등 | RESERVED |
| `distance_weight` | 거리 + 중량 | 파머스 워크, 수트케이스 캐리 | RESERVED |

따라서 현재 G Fit recording model은 **5 active + 3 reserved = 8종**으로 관리한다.

---

## Semantics

### `weight_reps`

일반적인 프리웨이트 / 머신 세트 기록.

예:

- 80 kg × 8 reps
- 50 kg × 12 reps

### `reps`

외부 중량을 기본 기록값으로 요구하지 않는 반복 운동.

예:

- Push Up 20 reps
- Crunch 15 reps
- Lying Leg Raise 12 reps

G Fit은 홈트 중심 제품이 아니지만, 헬스장에서도 수행하는 bodyweight 운동 때문에 `reps`는 MVP 필수 타입이다.

### `duration`

유지시간 자체가 수행 성과인 운동.

예:

- Plank 45 sec
- Dead Hang 60 sec

초 단위 duration을 기록하며 fake reps로 변환하지 않는다.

세트 수행시간 측정과 Rest Timer는 별도 기능이다.

Reference:

- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`

### `added_weight_reps`

사용자의 체중에 **추가한 외부 중량**을 기록한다.

예:

- Weighted Pull-Up: +20 kg × 5 reps
- Weighted Dip: +15 kg × 8 reps

이 값이 커지는 것은 일반적으로 더 큰 외부 부하를 의미한다.

### `assisted_weight_reps`

사용자의 체중을 상쇄하는 **보조 중량**을 기록한다.

예:

- Assisted Pull-Up: 30 kg assistance × 8 reps

추가중량과 해석 방향이 반대이므로 `added_weight_reps` 또는 `weight_reps`와 합치지 않는다.

Reference:

- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`

---

## Why separate types

같은 숫자라도 recording semantics가 다르다.

- Bench Press 30 kg → 사용자가 들어 올린 외부 중량
- Weighted Pull-Up +30 kg → 체중에 추가된 부하
- Assisted Pull-Up 30 kg → 체중에서 상쇄된 보조량
- Plank 30 sec → 유지시간

따라서 단일 `weight / reps` 모델로 통합하면 기록 비교와 Progress/PR 해석이 틀어진다.

운동 identity가 recording type을 결정하고, history / PR / progression logic도 해당 의미를 따라야 한다.

---

## Active Workout UI boundary

세트 행은 recording type에 따라 필요한 필드만 노출한다.

예시:

- `weight_reps` → `KG / 횟수`
- `reps` → `횟수`
- `duration` → `시간`
- `added_weight_reps` → `추가중량 / 횟수`
- `assisted_weight_reps` → `보조중량 / 횟수`

다만 현재 단계에서 각 타입의 세부 UI를 모두 새로 설계하지 않는다.

특히 `duration`의 시작/정지, countdown/stopwatch, 목표시간 표시, 종료 signal은 후속 Figma/UX에서 결정한다.

기존 Rest Timer 정책은 변경하지 않는다.

---

## Product boundary

- recording type은 **운동의 기록 의미**를 정의한다.
- equipment category와 recording type은 같은 개념이 아니다.
- 동일 장비라도 운동에 따라 recording type이 달라질 수 있다.
- recording type이 다르면 history / PR 계산을 무리하게 같은 공식으로 처리하지 않는다.
- Reserved 3종은 미래 호환성을 위한 schema 범위이며, 현재 MVP catalog를 cardio/home-workout 방향으로 확장한다는 의미가 아니다.

---

## Current P0 application

- `plank` → `duration`
- `crunch` → `reps`
- `lying-leg-raise` → `reps`
- `machine-assisted-pull-up` → `assisted_weight_reps`
- `machine-assisted-dip` → `assisted_weight_reps`
- 나머지 P0 weighted machine/free-weight rows → `weight_reps`

P0 16 Production promotion QA는 이 recording-type policy를 기준으로 진행한다.

## Deferred

후속 UX / implementation에서 결정:

- `duration` timed-set UI
- `added_weight_reps` 세트 입력 copy / 표시 방식
- reserved 3종의 실제 Active Workout UI
- recording type별 PR / progression 계산 세부 규칙

No Cursor implementation handoff is implied by this decision alone.
