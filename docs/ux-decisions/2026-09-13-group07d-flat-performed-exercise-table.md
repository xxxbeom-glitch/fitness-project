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
- 서로 다른 조합은 줄바꿈으로 이어서 표시한다
- 운동 간 구분은 card gap이 아니라 content divider를 사용한다
- 개별 1세트/2세트/3세트 행을 전부 펼치지 않는다
- 저장된 원본 set data는 그대로 유지한다

예:
- 벤치프레스 → `80kg × 10회 × 2세트` / `75kg × 10회 × 1세트`
- 랫풀다운 → `62.5kg × 10회 × 1세트` / `60kg × 10회 × 2세트`
- 푸시업 → `15회 × 2세트` / `12회 × 1세트`

recording type에 없는 단위를 새로 만들지 않는다. reps-only, duration, assisted 등은 각 타입의 native 기록값으로 같은 요약 규칙을 적용한다.

## Shared design-system component

04D `ExerciseMetadata_Flat`의 row 구조를 공용 컴포넌트로 승격했다.

- `FlatKeyValueRow` — `1085:1092`
- 기존 `RowLabel` / `RowValue` typography와 color를 재사용
- divider는 기존 `Role=Content, Orientation=Horizontal` divider를 재사용

04D `ExerciseMetadata_Flat` — `543:1048`도 같은 `FlatKeyValueRow` 인스턴스로 교체해 04D/07D가 동일 패턴을 공유한다.

Current 04D instances:
- `MetadataRow_장비` — `1085:1097`
- `MetadataRow_주 타겟 근육` — `1085:1102`
- `MetadataRow_보조 타겟 근육` — `1085:1107`

Current 07D instances:
- `PerformedExercise_벤치프레스` — `1085:1252`
- `PerformedExercise_랫풀다운` — `1085:1258`
- `PerformedExercise_푸시업` — `1085:1264`

The previously added `ExerciseCard > Mode=WorkoutSummary` variant is superseded and removed.

## QA

- 04D `ExerciseMetadata_Flat` screenshot: visual regression 없음
- 07D full-screen screenshot: PASS
- 07D current screen: `836:1593`, `360 × 1260`
- 수행 운동 영역: card surface 없음, flat rows + dividers

## Development boundary

No Cursor/development handoff is authorized.
