# Home Routine Selection — 2026-09-06

**Status:** PO APPROVED · UPDATED 2026-09-14
**Scope:** MVP 1차 Home의 저장 루틴 선택 / 시작 흐름 + 현재 Home 3-state Figma 방향

## Decision

MVP 1차에서는 루틴 요일 지정 기능을 제공하지 않는다.

Home에서 저장 루틴이 있는 경우 앱이 요일을 기준으로 `오늘 운동`을 만들거나 근거 없이 특정 루틴을 `다음 운동`으로 계산하지 않는다.

Home은 현재 상태에 따라 아래 3가지만 제공한다.

1. 저장 루틴 없음
2. 저장 루틴 있음
3. 진행 중 운동 있음

기존 Home 대시보드형 구성보다 `지금 어떤 운동을 시작할 것인가`를 중심으로 한 실행형 Home을 사용한다.

## Home states

### 02A — No Routine

저장된 루틴이 없을 때 추천과 직접 만들기를 **동등한 1차 진입 경로**로 제시한다.

Current Figma:
- `02A_Home_NoRoutine` — `1346:686`

Current direction:
- heading: `어떻게 운동을 시작할까요?`
- option 1: `추천 루틴 받기`
- option 2: `내 루틴 만들기`
- 두 선택지는 동일한 크기 / 동일한 위계의 큰 카드로 배치한다.
- 어느 한쪽만 Primary CTA처럼 더 강하게 표현하지 않는다.
- 카드마다 짧은 설명과 visual-artwork 영역을 둘 수 있다.
- 카드 surface / border / radius / typography / spacing은 기존 Fitness Design System을 따른다.
- 최근 운동 영역은 Home 하단의 보조 정보로 유지할 수 있다.

Reference principle:
- Peloton Strength+의 `Pick a program / Generate a custom workout`처럼 두 시작 방법을 큰 동등 카드로 보여주는 정보 구조를 참고했다.
- 레퍼런스의 브랜드 비주얼 자체를 복제하지 않는다.

Artwork direction:
- 기존 신기록 달성 트로피 일러스트와 같은 glossy 3D clip-art 계열 톤을 후보로 사용한다.
- 추천 루틴은 `guide / compass` 의미, 직접 만들기는 `checklist + add` 의미가 적합하다.
- 두 artwork는 같은 조형 언어를 유지하되 색상은 서로 구분할 수 있다.
- 최종 artwork asset / crop / size 적용은 현재 checkpoint에서 아직 lock하지 않는다.

Recommendation route note:
- `추천 루틴 받기`가 곧바로 `03C_추천루틴상세`로 이동한다고 간주하지 않는다.
- 기존 추천 정책상 추천 결과 전에는 목표 / 주당 운동 가능일 / 선호 운동시간의 3개 입력이 존재한다.
- Home에서 재추천할 때 기존 답변을 재사용할지 다시 질문할지는 별도 결정 전까지 TBD다.

### 02B — Routine Selected

저장된 루틴이 있을 때 현재 선택된 루틴 하나를 중심으로 즉시 운동을 시작할 수 있게 한다.

Current Figma:
- `02B_Home_RoutineSelected` — `1329:593`

Current direction:
- heading: `운동을 시작해볼까요?`
- 주요 부위 compact tags를 루틴명 위에 한 그룹으로 배치한다.
- routine name example: `Push Day`
- metadata example: `5개 운동 · 19세트 · 약 50분`
- Primary CTA: `운동 시작`
- `다른 루틴`은 루틴 변경 action이며 `03A_Routine_List`로 이동한다.
- 최근 운동 row의 좌측 정보는 루틴명만 표시하고 진행시간은 넣지 않는다.
- 최근 운동 날짜는 보조 정보로 유지할 수 있다.

Home이 요일 또는 자동 추천 알고리즘으로 `오늘 운동` / `다음 운동`을 임의 결정하지 않는다.

## 02D — Active Workout

진행 중 운동이 있으면 Home에서 진행 중임을 명확히 보여주고 현재 운동으로 한 번에 복귀할 수 있어야 한다.

Current Figma:
- `02D_Home_Active` — `1346:710`

Current direction:
- 진행 중 운동의 routine/session identity를 보여준다.
- main action은 `운동 계속하기` 계열의 복귀 action이다.
- Home에서 새 루틴 선택보다 현재 active session 복귀가 우선이다.
- active workout recovery / persistence 정책은 기존 workout-session reliability 결정을 따른다.

## Selected routine behavior

- Home은 사용자가 마지막으로 명시적으로 선택했거나 최근 시작에 사용한 루틴을 기본 선택 상태로 기억하는 방향을 사용한다.
- 최초 진입처럼 선택 이력이 전혀 없는 경우의 fallback 우선순위는 구현 전 별도 확정한다.
- Home의 `다른 루틴`은 Home 내부 선택 UI를 열지 않고 `03A_Routine_List`로 이동한다.
- `03A` 진입 이후의 루틴 선택 / 상세 / 시작 / Home 복귀 동작은 Group 03의 canonical flow를 따른다. Home 문서에서 별도 선택 동작을 중복 정의하지 않는다.

## Other routine navigation — supersedes old 02C picker

2026-09-14 PO 결정으로 기존 `02C_Home_RoutinePicker` Bottom Sheet 방식은 폐기한다.

- `다른 루틴` → `03 루틴 / 03A_Routine_List`
- Home 위에 Routine Picker Bottom Sheet를 열지 않는다.
- Home에 별도 루틴 선택 overlay/sheet 상태를 유지하지 않는다.
- 기존 `02C_Home_RoutinePicker` Figma frame은 제거한다.
- cross-group QA에서 02C Bottom Sheet가 다시 나타나면 regression/FIX 대상으로 본다.

## Figma / Design System

File: `W3lZurXCXbThP67rF2xk2b`
Page: `02 홈` — `233:2073`

Current Home states:
- `02A_Home_NoRoutine` — `1346:686`
- `02B_Home_RoutineSelected` — `1329:593`
- `02D_Home_Active` — `1346:710`

Destination:
- page `03 루틴`
- `03A_Routine_List` — `34:1401`

Current Home refinements reuse the existing Fitness Design System wherever the role matches, including semantic background / surface / border / text tokens, radius and spacing variables, typography styles, AppLogo, SectionHeader, ListCard, RecentWorkoutRow, CTA Button, Tag, and canonical chevron assets.

Do not create a duplicate Home-specific foundation token or duplicate shared component when the existing system already covers the role.

Figma Design에서는 서로 다른 page 간 prototype `NAVIGATE` 연결을 직접 만들 수 없으므로, canonical artifact는 flow annotation + GitHub route contract로 cross-page 목적지를 명시한다.

## Out of scope — MVP 1차

- 루틴 요일 지정
- 요일 기반 `오늘 운동`
- 자동 루틴 추천 / 순환 알고리즘으로 `다음 운동` 결정
- 루틴 없이 빈 운동 시작
- Home 전용 Routine Picker Bottom Sheet

## Open items

- Home에서 `추천 루틴 받기` 재진입 시 기존 3개 추천 입력값을 재사용할지 / 다시 입력받을지 결정
- 02A large-card artwork의 최종 asset / crop / size 확정 및 Figma 적용
- Home 3-state 최종 targeted QA 후 Group 02 lock

No Cursor implementation handoff yet.
