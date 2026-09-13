# Group 07D — Compact performed-exercise summary

**Date:** 2026-09-13
**Status:** PO DIRECTION APPLIED IN FIGMA / QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 `수행 운동`은 세트를 1, 2, 3번 행으로 모두 펼쳐 보여주지 않는다.

각 수행 운동을 한 장의 compact card로 보여주고, 동일한 완료 기록 조합은 세트 수로 묶어 요약한다.

예:
- 벤치프레스
  - `80kg × 10회 × 2세트`
  - `75kg × 10회 × 1세트`
- 푸시업
  - `15회 × 2세트`
  - `12회 × 1세트`

이 요약은 표시 방식만 압축하는 것이며 저장된 원본 세트 데이터는 변경하지 않는다.

recording type에 없는 단위를 새로 만들지 않는다. reps-only, duration, assisted 등은 각 타입의 native 기록값을 기준으로 요약한다.

## Figma

- file `W3lZurXCXbThP67rF2xk2b`
- screen `07D_운동기록상세_Exploration` — `836:1593`
- existing component set `ExerciseCard` — `637:3561`
- added variant `Mode=WorkoutSummary` — `1079:744`
- current instances:
  - 벤치프레스 — `1079:747`
  - 랫풀다운 — `1079:750`
  - 푸시업 — `1079:753`

`Mode=WorkoutSummary` reuses the existing ExerciseCard surface/border/radius and existing `heading/01`, `body/01` styles. No new token family was created.

Current 07D screen height after replacing per-set tables: `360 × 1410`.
Full-screen screenshot QA = PASS.

## Development boundary

No Cursor/development handoff is authorized.
