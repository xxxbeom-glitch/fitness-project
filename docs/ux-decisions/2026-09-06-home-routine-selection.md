# Home Routine Selection — 2026-09-06

**Status:** PO APPROVED
**Scope:** MVP 1차 Home의 저장 루틴 선택 / 시작 흐름

## Decision

MVP 1차에서는 루틴 요일 지정 기능을 제공하지 않는다.

Home에서 저장 루틴이 있는 경우 앱이 요일을 기준으로 `오늘 운동`을 만들거나 근거 없이 특정 루틴을 `다음 운동`으로 계산하지 않는다.

대신 Home은 현재 선택된 루틴 하나를 보여주고 사용자가 바로 시작하거나 다른 루틴으로 바꿀 수 있게 한다.

## Home states

- 저장 루틴 없음 → `추천 루틴 보기` / `내 루틴 만들기`
- 저장 루틴 있음 → 현재 선택된 루틴 + `운동 시작` / `다른 루틴`
- 진행 중 운동 있음 → 진행 중 운동으로 `돌아가기`

요일 지정에 기반한 별도 `오늘 운동` Home state는 MVP 1차에서 사용하지 않는다.

## Selected routine behavior

- Home은 사용자가 마지막으로 명시적으로 선택했거나 최근 시작에 사용한 루틴을 기본 선택 상태로 기억하는 방향을 사용한다.
- 사용자가 `다른 루틴`에서 새 루틴을 선택하면 Home의 선택 루틴이 그 루틴으로 바뀐다.
- 최초 진입처럼 선택 이력이 전혀 없는 경우의 fallback 우선순위는 구현 전 별도 확정한다.

## 02B — selected routine

- Section: `선택한 루틴`
- 카드에는 루틴명, 운동 수 / 예상 시간, 주요 부위를 표시한다.
- 요일 관련 문구는 표시하지 않는다.
- 카드 하단 Action Row:
  - `운동 시작`: Primary Compact
  - `다른 루틴`: Secondary Compact
  - 동일 폭 `136 + 8 + 136`

## 02C — routine picker

`다른 루틴`을 누르면 Home 위에 Bottom Sheet로 저장 루틴 선택 목록을 연다.

- 제목: `다른 루틴`
- 설명: `운동할 루틴을 선택하세요.`
- 현재 선택된 루틴은 check 상태로 표시한다.
- 다른 루틴을 누르면 즉시 Home 선택 루틴을 바꾸고 sheet를 닫는다.
- 별도의 `저장` CTA는 두지 않는다.
- 요일 정보는 목록에 사용하지 않는다.

## Figma

File: `W3lZurXCXbThP67rF2xk2b`
Page: `02 홈`

- `02B_Home_RoutineSelected`
- `02C_Home_RoutinePicker`

## Out of scope — MVP 1차

- 루틴 요일 지정
- 요일 기반 `오늘 운동`
- 자동 루틴 추천 / 순환 알고리즘으로 `다음 운동` 결정
- 루틴 없이 빈 운동 시작
