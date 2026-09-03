# Assisted Machine Recording — 2026-09-03

**Status:** CONFIRMED — Product Owner approved 2026-09-03  
**Scope:** 머신 보조형 풀업 / 딥스의 세트 기록 의미와 MVP 데이터 타입

## Decision

어시스트 풀업과 어시스트 딥스는 일반 머신의 `weight_reps`와 분리해 **보조중량 + 횟수**로 기록한다.

내부 recording type:

`assisted_weight_reps`

사용자 입력 의미:

- `보조 kg` = 어시스트 머신의 핀/스택에 설정한 실제 보조중량
- `횟수` = 해당 세트 수행 횟수

예:

`보조 40 kg × 10회`

현재 적용 P0 exercise:

- `machine-assisted-pull-up` — 어시스트 풀업
- `machine-assisted-dip` — 어시스트 딥스

향후 같은 의미의 assisted exercise가 추가되면 동일 recording type을 재사용한다. 특정 운동 ID 두 개에만 하드코딩하는 정책으로 만들지 않는다.

## Why separate from normal weight

일반 중량 머신은 같은 조건에서 더 높은 중량을 다루는 것이 일반적인 progression 방향이다.

어시스트 머신은 반대로 **보조중량이 낮아질수록 사용자가 자신의 체중을 더 많이 부담**한다. 따라서 일반 `weight_reps`와 같은 중량 의미, PR 비교, 볼륨 의미를 적용하면 성장 방향을 거꾸로 해석할 수 있다.

Hevy의 authenticated built-in catalog도 `Pull Up (Assisted)`, `Chest Dip (Assisted)`, `Triceps Dip (Assisted)`를 일반 `weight_reps`와 다른 assisted bodyweight 유형으로 구분한다. 이번 결정은 경쟁 앱을 그대로 복제하는 것이 아니라, 실제 기계 중량 의미가 일반 머신과 반대라는 데이터 문제를 해결하기 위한 것이다.

## MVP behavior

- Active Workout에서 일반 `kg` 대신 **`보조 kg`**로 표시한다.
- 사용자가 머신에 설정한 보조중량 값을 그대로 저장한다.
- 횟수는 일반 세트와 동일하게 저장한다.
- 이전 기록에는 `보조 kg + 횟수`를 함께 보여줄 수 있어야 한다.
- 일반 중량 운동처럼 `더 높은 kg = 더 좋은 기록`으로 해석하지 않는다.
- MVP에서는 assisted exercise에 일반 중량 PR / 1RM / 일반 weight-volume 계산을 적용하지 않는다.
- 사용자 체중을 이용한 `체중 - 보조중량` 유효하중 계산은 MVP 범위 밖이다. 체중 입력을 강제하지 않는다.

향후 progression/PR 규칙이 필요해지면 별도 Product Decision으로 정의한다.

## Active Workout UI — PO APPROVED

Active Workout에서는 일반 운동 카드와 다른 별도 화면을 만들지 않는다. **기존 운동 카드 구조를 그대로 재사용**하고, 세트 입력의 `kg` 의미만 `보조 kg`로 바꾼다.

기본 카드 정보:

- 세트
- 이전 기록
- 보조 kg
- 횟수
- 완료 체크
- 세트 추가

예:

`이전 40×10 | 보조 kg 35 | 횟수 10`

어시스트 운동이라고 해서 카드에 항상 긴 설명이나 경고를 붙이지 않는다. 기록 속도를 우선한다.

### First-use helper

사용자가 어시스트 기록을 처음 접할 때만 짧은 안내를 한 번 보여주는 방향을 승인한다.

권장 의미:

> `보조 kg가 클수록 머신의 도움도 커집니다.`

- 첫 사용 이해를 돕는 보조 안내이며 매 세션 반복 노출하지 않는다.
- 이후 카드에는 `보조 kg` 레이블 자체만으로 기록한다.
- 높은 보조중량을 성과 상승처럼 색상 / PR 배지로 강조하지 않는다.

## Dip identity

이번 결정은 **어시스트 딥스를 가슴/삼두 버전으로 추가 분리하는 결정이 아니다.**

현재 승인 P0 범위에서는 `machine-assisted-dip` / `어시스트 딥스` 하나를 유지한다. 자세 변형을 별도 identity로 늘릴지는 실제 필요가 생길 때 별도 검토한다.

## Implementation note

이 문서는 제품/데이터 의미와 Active Workout UI 방향을 확정한 Decision이다. Cursor 제품 구현은 아직 승인되지 않았다.

구현 단계에서는 기존 Active Workout 세트 row 구조를 재사용하되 `recording_type == assisted_weight_reps`일 때 입력 레이블과 기록 비교 semantics만 분기하는 방향을 우선한다.
