# Workout Completion Metrics — 2026-09-04

**Status:** PO APPROVED
**Scope:** 운동 완료 화면의 기본 요약 지표 계산 규칙

## Decision

운동 완료 화면의 기본 요약 지표는 실제 세션의 최종 상태를 기준으로 계산한다.

기본 지표:

- 운동 시간
- 총 볼륨
- 완료 세트
- 완료 운동 수

## 1. 운동 시간

운동 시간은 사용자가 `운동 시작`을 누른 시점부터 `운동 종료`까지의 실제 세션 경과시간을 기준으로 한다.

- 명시적으로 일시정지한 시간은 제외한다.
- 앱을 잠깐 background로 보냈다는 이유만으로 자동 일시정지하지 않는다.
- 앱 interruption / restart 이후 세션이 복구되면 기존 세션 시간을 이어서 계산할 수 있어야 한다.

정확한 일시정지 UI / background 동작 구현은 개발 단계에서 현재 세션 persistence 정책과 함께 검증한다.

## 2. 완료 세트

완료 세트는 운동 종료 시점에 **최종적으로 완료 체크 상태인 세트만** 센다.

예:

- 예정 12세트 중 최종 체크 9개 → 완료 세트 9

입력값이 있어도 완료 체크가 되어 있지 않으면 완료 세트로 계산하지 않는다.

### Repeated check / uncheck semantics

같은 세트를 여러 번 터치한 횟수는 성과나 완료 횟수로 세지 않는다.

예:

`미완료 → 체크 → 체크 해제 → 다시 체크`

최종 상태가 체크라면 결과는 **완료 1세트**다.

원칙:

- 체크 상태 → 1세트
- 체크 해제 상태 → 0세트
- 동일 set row의 완료 event가 여러 번 발생해도 세트/볼륨을 중복 생성하지 않음
- 계산 기준은 event 횟수가 아니라 각 set의 최종 completion state

## 3. 완료 운동 수

해당 운동에서 **완료 체크된 세트가 하나 이상 있으면 완료 운동 1개**로 계산한다.

- 운동 목록에 존재하지만 완료 세트가 0개인 운동 → 제외
- 완료 세트가 1개 이상인 운동 → 1개

예:

- 벤치프레스 완료 세트 3개 → 1운동
- 랫풀다운 완료 세트 2개 → 1운동
- 숄더프레스 완료 세트 0개 → 제외

결과: 완료 운동 수 2

## 4. 총 볼륨

일반적인 중량 + 반복 기록 운동의 기본 총 볼륨은 **최종 완료된 세트만** 사용해 계산한다.

기본식:

`Σ(기록된 중량 × 실제 반복수)`

예:

- 80 kg × 10회 = 800 kg
- 80 kg × 8회 = 640 kg
- 70 kg × 10회 = 700 kg

총 볼륨 = 2,140 kg

완료 체크가 해제된 세트는 총 볼륨에서 제외한다. 같은 세트를 체크/해제/재체크해도 최종 완료 상태라면 한 번만 포함한다.

## 5. Exercise-type exceptions

`assisted_weight_reps`는 일반 weight-volume 계산에 포함하지 않는다.

이유:

- 보조 kg는 높을수록 더 강한 수행을 의미하지 않는다.
- MVP에서는 `체중 - 보조중량` 유효하중 계산을 하지 않는다.

따라서 assisted 운동을 일반 `kg × reps` 총 볼륨에 억지로 포함하지 않는다.

마찬가지로 duration / distance / 기타 non-weight recording type을 kg 총 볼륨으로 임의 환산하지 않는다.

해당 세션에 의미 있는 weight-volume이 없으면 `총 볼륨 0 kg`를 성과처럼 고정 노출하기보다 해당 지표를 숨기거나 exercise type에 맞는 다른 지표를 사용하는 방향을 허용한다. 정확한 대체 지표는 해당 recording type UX가 필요할 때 별도 결정한다.

## 6. Scope boundary

이번 결정은 완료 화면의 **기본 계산 원칙**을 확정한다.

다음은 이번 결정에서 임의로 추가 확정하지 않는다.

- 덤벨처럼 입력 중량이 한 손 기준인지 총합 기준인지에 따른 장비별 multiplier
- bodyweight 운동의 유효하중 환산
- assisted 운동의 유효하중
- duration / distance 운동의 통합 volume 환산

이런 값은 실제 exercise recording semantics가 확정될 때 별도 규칙으로 다룬다. 숨은 multiplier를 임의 적용하지 않는다.

## Product principle

완료 화면 지표는 사용자가 실제로 완료했다고 확정한 기록의 **최종 상태**를 반영해야 한다.

`터치 횟수`나 중간 상태가 아니라 `최종 완료 상태 + 저장된 실제 기록값`이 계산의 기준이다.

## Related decisions

- `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`
- `docs/ux-decisions/2026-09-03-workout-end-flow.md`
- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`

## Implementation

Cursor 구현 handoff는 아직 승인하지 않는다.
