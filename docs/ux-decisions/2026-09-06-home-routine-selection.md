# Home Routine Selection — 2026-09-06

**Status:** PO APPROVED · UPDATED 2026-09-14
**Scope:** MVP 1차 Home의 저장 루틴 선택 / 시작 흐름

## Decision

MVP 1차에서는 루틴 요일 지정 기능을 제공하지 않는다.

Home에서 저장 루틴이 있는 경우 앱이 요일을 기준으로 `오늘 운동`을 만들거나 근거 없이 특정 루틴을 `다음 운동`으로 계산하지 않는다.

대신 Home은 현재 선택된 루틴 하나를 보여주고 사용자가 바로 시작하거나 루틴 목록으로 이동할 수 있게 한다.

## Home states

- 저장 루틴 없음 → `추천 루틴 보기` / `내 루틴 만들기`
- 저장 루틴 있음 → 현재 선택된 루틴 + `운동 시작` / `다른 루틴`
- 진행 중 운동 있음 → 진행 중 운동으로 `돌아가기`

요일 지정에 기반한 별도 `오늘 운동` Home state는 MVP 1차에서 사용하지 않는다.

## Selected routine behavior

- Home은 사용자가 마지막으로 명시적으로 선택했거나 최근 시작에 사용한 루틴을 기본 선택 상태로 기억하는 방향을 사용한다.
- 최초 진입처럼 선택 이력이 전혀 없는 경우의 fallback 우선순위는 구현 전 별도 확정한다.
- Home의 `다른 루틴`은 Home 내부 선택 UI를 열지 않고 `03A_Routine_List`로 이동한다.
- `03A` 진입 이후의 루틴 선택 / 상세 / 시작 / Home 복귀 동작은 Group 03의 canonical flow를 따른다. Home 문서에서 별도 선택 동작을 중복 정의하지 않는다.

## 02B — selected routine

- Section: `선택한 루틴`
- 카드에는 루틴명, 운동 수 / 예상 시간, 주요 부위를 표시한다.
- 요일 관련 문구는 표시하지 않는다.
- 카드 하단 Action Row:
  - `운동 시작`: Primary Compact
  - `다른 루틴`: Secondary Compact
  - 동일 폭 `136 + 8 + 136`
- `다른 루틴` action destination = `03A_Routine_List`

## Other routine navigation — supersedes old 02C picker

2026-09-14 PO 결정으로 기존 `02C_Home_RoutinePicker` Bottom Sheet 방식은 폐기한다.

- `다른 루틴` → `03 루틴 / 03A_Routine_List`
- Home 위에 Routine Picker Bottom Sheet를 열지 않는다.
- Home에 별도 루틴 선택 overlay/sheet 상태를 유지하지 않는다.
- 기존 `02C_Home_RoutinePicker` Figma frame은 제거한다.
- cross-group QA에서 02C Bottom Sheet가 다시 나타나면 regression/FIX 대상으로 본다.

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Home page:
- `02 홈`
- `02B_Home_RoutineSelected`
- old `02C_Home_RoutinePicker` = retired / deleted

Destination:
- page `03 루틴`
- `03A_Routine_List` — `34:1401`

Figma Design에서는 서로 다른 page 간 prototype `NAVIGATE` 연결을 직접 만들 수 없으므로, canonical artifact는 02 페이지의 flow annotation + GitHub route contract로 목적지를 명시한다. 제품 구현 시 실제 route는 `02B 다른 루틴 → 03A`로 연결한다.

## Out of scope — MVP 1차

- 루틴 요일 지정
- 요일 기반 `오늘 운동`
- 자동 루틴 추천 / 순환 알고리즘으로 `다음 운동` 결정
- 루틴 없이 빈 운동 시작
- Home 전용 Routine Picker Bottom Sheet
