# Group 07D — Flat performed-exercise table

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 `수행 운동`은 운동별 카드 묶음으로 표시하지 않는다.

04D `ExerciseMetadata_Flat`과 같은 flat key/value table 패턴을 사용한다.

표시 원칙:
- 왼쪽: 운동명
- 오른쪽: 완료 세트 요약
- 같은 중량/횟수 조합은 세트 수로 묶는다
- 서로 다른 조합은 **한 텍스트의 줄바꿈이 아니라 독립된 value layer**로 표시한다
- 복수 value layer는 세로 stack으로 정렬하고 `8px` 간격을 둔다
- 운동 간 구분은 card gap이 아니라 content divider를 사용한다
- 개별 1세트/2세트/3세트 행을 전부 펼치지 않는다
- 저장된 원본 set data는 그대로 유지한다

예:
- 벤치프레스
  - `80kg × 10회 × 2세트`
  - `75kg × 10회 × 1세트`
- 랫풀다운
  - `62.5kg × 10회 × 1세트`
  - `60kg × 10회 × 2세트`
- 푸시업
  - `15회 × 2세트`
  - `12회 × 1세트`

recording type에 없는 단위를 새로 만들지 않는다. reps-only, duration, assisted 등은 각 타입의 native 기록값으로 같은 요약 규칙을 적용한다.

## Shared design-system component

04D `ExerciseMetadata_Flat`의 row 구조를 공용 컴포넌트로 유지하되, 단일값/복수값 상황을 같은 component family에서 처리하도록 `FlatKeyValueRow`를 variant set으로 확장했다.

- `FlatKeyValueRow` component set — `1090:1104`
- `Lines=1` — `1085:1092`, `52px`
- `Lines=2` — `1090:1094`, `80px`
- `Lines=2` 우측 `ValueStack`: `ValueLine1` + `ValueLine2`, 독립 instance 2개, gap `8px`
- 기존 `RowLabel` / `RowValue` typography와 color를 재사용
- divider는 기존 `Role=Content, Orientation=Horizontal` divider를 재사용

04D `ExerciseMetadata_Flat` — `543:1048`은 `Lines=1`을 사용해 기존 단일행 표현을 유지한다.

07D current `Lines=2` instances:
- `PerformedExercise_벤치프레스` — `1090:1251`
- `PerformedExercise_랫풀다운` — `1090:1259`
- `PerformedExercise_푸시업` — `1090:1267`

The previously added `ExerciseCard > Mode=WorkoutSummary` variant remains superseded and removed.

## QA

- 07D 각 우측 데이터가 독립 `ValueLine1 / ValueLine2` layer로 존재함을 read-back 확인
- 각 value line 높이 `20px`, stack gap `8px`, row 높이 `80px`
- 04D `ExerciseMetadata_Flat` screenshot: visual regression 없음
- 07D full-screen screenshot: PASS
- 07D current screen: `836:1593`, `360 × 1284`
- 수행 운동 영역: card surface 없음, flat rows + dividers

## Development boundary

No Cursor/development handoff is authorized.
