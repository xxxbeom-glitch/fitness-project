# Group 04 Recording Type — History / Growth Policy

**Date:** 2026-09-15  
**Status:** PO APPROVED / PRODUCT POLICY LOCKED / FIGMA REFLECTED / FOCUSED QA PASS / NO CURSOR HANDOFF

## Scope

Group 04 `운동 목록 · 상세`의 `최근 기록` / `성장` 탭이 MVP 4종 recording type을 어떻게 표시하고 해석할지 확정한다.

이 결정은 Group 05 Active Workout에서 이미 확정된 recording semantics를 새로 만들지 않고 그대로 재사용한다.

MVP active recording types:

- `weight_reps` — 중량 + 횟수
- `reps` — 횟수
- `duration` — 시간
- `assisted_weight_reps` — 보조중량 + 횟수

Related locked source decisions:

- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`
- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

## Core rule

**04는 05에서 실제 저장한 운동 기록을 조회/분석한다.**

04 전용의 별도 기록값이나 환산값을 새로 만들지 않는다.

| recording type | 05 운동 중 저장값 | 04 최근 기록 표시 | 04 성장 핵심 지표 |
|---|---|---|---|
| `weight_reps` | 중량 + 횟수 | `80kg × 10회` | `중량 변화` |
| `reps` | 횟수 | `20회` | `반복 변화` |
| `duration` | 시간 | `45초` | `시간 변화` |
| `assisted_weight_reps` | 보조중량 + 횟수 | `보조 30kg × 10회` | `보조중량 변화` |

## Recent History

운동 상세의 `최근 기록`은 해당 exercise identity의 실제 완료 기록을 recording type 그대로 표시한다.

- `weight_reps`: 중량 + 횟수
- `reps`: 횟수만
- `duration`: 시간만
- `assisted_weight_reps`: 보조중량 + 횟수

다른 recording type으로 임의 변환하지 않는다.

특히 `duration`은 `KG`, fake reps 또는 일반 중량값을 요구하지 않는다.

## Growth

현재 04D Growth의 벤치프레스 예시는 `weight_reps` 대표 상태로 유지한다.

타입별 chart title / 의미:

- `weight_reps` → `중량 변화`
- `reps` → `반복 변화`
- `duration` → `시간 변화`
- `assisted_weight_reps` → `보조중량 변화`

각 그래프는 동일한 공통 chart shell / 기간 선택 구조를 재사용하고, 측정값과 단위만 recording type에 맞춘다.

## Personal Best / PR boundary

### `weight_reps`

현재 04D Growth의 개인 최고 기록 구조를 유지한다.

- `최고 중량`
- `최대 반복`

정확한 1RM 환산을 새로 도입하지 않는다.

### `reps`

개인 최고 기록은 `최대 반복`을 사용한다.

### `duration`

개인 최고 기록은 `최장 시간`을 사용한다.

### `assisted_weight_reps`

MVP에서는 별도의 `개인 최고 기록` 판정을 제공하지 않는다.

이유:

- 보조중량은 낮을수록 머신 도움을 덜 받는 방향이지만
- `보조 10kg × 2회`와 `보조 20kg × 12회`처럼 보조중량과 반복수가 동시에 달라질 때 단순 우열을 안전하게 정의할 수 없다.
- 기존 assisted 정책도 일반 weight PR / 1RM / 일반 weight-volume 계산을 적용하지 않도록 잠겨 있다.

따라서 MVP에서는 실제 보조중량의 변화 추이만 보여주고, 일반 중량 운동과 같은 PR 배지/최고기록 판정을 억지로 만들지 않는다.

## Data sufficiency

- 완료 기록 0회 → 최근 기록 / 성장 Empty state
- 기록 1회 → 해당 실제 기록은 표시 가능
- 선택 기간 안에서 추이 비교에 필요한 복수 기록이 없으면 → chart trend 비교 상태는 제공하지 않고 데이터 부족 상태로 처리

개인 최고 기록이 유효한 recording type은 기록 1회만 있어도 해당 실제 기록을 기준으로 표시할 수 있다.

## Group 05 dependency QA — PASS

Group 05 canonical page에는 이미 다음 대표 상태가 존재한다.

- `05A_Workout_Weight`
- `05B_Workout_Reps`
- `05C_Workout_Duration`
- `05E_Workout_Assisted`

`05C_Workout_Duration`을 focused-check한 결과, 플랭크 카드의 실제 입력 열은 `세트 / 시간 / 완료`이며 불필요한 `중량` 입력이 없다.

따라서 기존 `duration = 시간만` 정책과 일치하며 Group 05 수정은 하지 않았다. Group 05 closure는 그대로 유지한다.

## Figma reflection — COMPLETE

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Group 04 page:
- `04 운동 목록 · 상세` — `233:2075`

기존 벤치프레스 `weight_reps` 대표 화면은 유지한다.

추가 representative states:

- `04D_Exercise_Detail_History_Reps` — `1391:1619`
- `04D_Exercise_Detail_Growth_Reps` — `1391:1707`
- `04D_Exercise_Detail_History_Duration` — `1391:1779`
- `04D_Exercise_Detail_Growth_Duration` — `1391:1867`
- `04D_Exercise_Detail_History_Assisted` — `1391:1939`
- `04D_Exercise_Detail_Growth_Assisted` — `1391:2027`
- `04D_Exercise_Detail_History_Empty` — `1391:2099`
- `04D_Exercise_Detail_Growth_Empty` — `1391:2190`
- `04D_Exercise_Detail_Growth_Insufficient` — `1391:2265`

Reflected behavior:

- `reps` History는 `세트 / 횟수`만 표시하고 Growth는 `반복 변화`, 개인 최고 `최대 반복`을 사용한다.
- `duration` History는 `세트 / 시간`만 표시하고 Growth는 `시간 변화`, 개인 최고 `최장 시간`을 사용한다.
- `assisted_weight_reps` History는 `세트 / 보조중량 / 횟수`를 표시하고 Growth는 낮아지는 보조중량 추이를 그대로 보여준다. MVP 개인 최고 기록 섹션은 노출하지 않는다.
- 기록 0회용 History / Growth Empty state를 추가했다.
- 기록 1회 등 비교 가능한 복수 기록이 없는 경우 Growth chart는 `기록이 더 필요해요` 상태로 대체하고, 유효한 타입의 개인 최고 기록은 실제 1회 기록 기준으로 유지한다.
- 기존 `weight_reps` History 열 명칭은 Group 05에서 확정한 한국어 용어와 맞춰 `세트 / 중량 / 횟수`로 정리했다.

Design-system rule:

- 기존 Group 04 History / Growth 구조를 clone/reuse했다.
- 기존 `04C_Search_Empty`의 Empty text pattern을 재사용했다.
- 새 component master / token / style을 만들지 않았다.
- 기존 shared component instance는 detach하지 않았다.

## Focused QA — PASS

- 신규 representative state 9개 모두 `360 × 954`
- 신규 state의 shared component instance missing-main = `0`
- `05C_Workout_Duration`에 불필요한 중량 입력 없음
- screenshot read-back PASS:
  - reps History
  - duration History
  - reps Growth
  - duration Growth
  - assisted Growth
  - History Empty
  - Growth insufficient-data
- assisted Growth는 `35 → 35 → 30 → 25kg` 예시처럼 보조중량이 낮아지는 방향을 시각적으로 표현하며 point/path alignment 재검수 PASS

## NEXT OPEN ITEM

Recording-type-specific History / Growth 보완은 닫는다.

다음 Group 04 Product/UX QA는 `04E_Custom_Create` / `04F_Custom_Edit`의 선택형 필드 interaction을 검토한다.

대상:

- 장비
- 주 타겟 근육
- 보조 타겟 근육
- 기록 방식

기존 component / pattern을 우선 재사용하고, 실제 선택 흐름이 없는 상태를 그대로 구현 handoff하지 않는다.

## Development boundary

Product/UX + Figma 단계다. Product Owner가 개발 전환을 명시하기 전까지 Cursor/implementation handoff를 시작하지 않는다.
