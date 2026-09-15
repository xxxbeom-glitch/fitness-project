# Group 04 Custom Exercise — Selection Flow

**Date:** 2026-09-15  
**Status:** PO APPROVED / PRODUCT POLICY LOCKED / FIGMA QA PASS / NO CURSOR HANDOFF

## Scope

`04E_Custom_Create` / `04F_Custom_Edit`의 커스텀 운동 설정 선택 흐름을 확정한다.

대상 필드:

- 장비
- 주 타겟 근육
- 보조 타겟 근육
- 기록 방식

## Selection pattern

기존 Fitness의 full-page single-selection pattern을 재사용한다.

- 상단 `Nav Header`
- `OptionItem` 목록
- 현재 선택값은 check 상태
- 항목 탭 시 값 선택 후 이전 create/edit 화면으로 복귀
- 새 selector component/pattern을 만들지 않는다.

### 장비

단일 선택.

대표 선택 화면: `04I_Custom_Equipment_Select`

### 주 타겟 근육

단일 선택. 필수값.

대표 선택 화면: `04J_Custom_PrimaryMuscle_Select`

### 보조 타겟 근육

단일 선택이지만 선택 자체는 optional.

- `선택 안 함` 제공
- 하나의 보조 타겟만 저장

대표 선택 화면: `04K_Custom_SecondaryMuscle_Select`

### 기록 방식

MVP 4종 중 단일 선택:

- `중량 + 횟수`
- `횟수`
- `시간`
- `보조중량 + 횟수`

대표 선택 화면: `04L_Custom_RecordingType_Select`

Group 05 Active Workout의 동일 recording semantics를 사용한다.

## Edit behavior — existing history lock

PO approved:

**이미 완료 운동 기록이 하나 이상 존재하는 커스텀 운동은 `기록 방식`을 변경할 수 없다.**

이유:

- 과거 기록의 컬럼/단위/성장 해석을 유지해야 한다.
- `중량 + 횟수`로 누적된 히스토리를 이후 `시간` 등 다른 schema로 바꾸면 동일 exercise identity의 기록 의미가 충돌한다.

UI:

- 기존 기록이 있는 `04F`에서는 `기록 방식` row를 read-only(`ValueOnly`)로 표시
- 안내문: `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`
- 장비 / 주 타겟 / 보조 타겟은 기존 편집 흐름 유지

대표 상태: `04F_Custom_Edit_HistoryLocked`

기록이 아직 없는 커스텀 운동은 `기록 방식`을 변경할 수 있다.

## Figma QA result

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Added representative states:

- `04I_Custom_Equipment_Select` — `1396:2298`
- `04J_Custom_PrimaryMuscle_Select` — `1396:8091`
- `04K_Custom_SecondaryMuscle_Select` — `1396:8179`
- `04L_Custom_RecordingType_Select` — `1396:8271`
- `04F_Custom_Edit_HistoryLocked` — `1396:8393`

QA:

- all states `360 × 954`
- existing `OptionItem`, `Nav Header`, `RowValue` reused
- no new component/token/style
- no component detach
- missing main-component link = 0
- screenshot/read-back PASS

## Development boundary

Product/UX + Figma 단계다. Product Owner가 개발 전환을 명시하기 전까지 Cursor/implementation handoff를 시작하지 않는다.
