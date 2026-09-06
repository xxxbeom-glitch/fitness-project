# Home Button System — 2026-09-06

**Status:** PO APPROVED
**Scope:** Home 화면의 CTA / Compact Button 사용 규칙 및 Figma 공용 UI 정리

## Decision

Home에서 새 버튼 종류를 추가하지 않고 기존 `Compact Button` / `CTA Button` 두 단계로 사용한다.

### Compact Button

- 높이: `44px`
- 텍스트: `14 / 20`
- 좌우 패딩: `14px`
- 용도: 카드 내부의 작은 국소 행동
- 카드 하단 단독 Primary: 카드 콘텐츠 폭 전체 사용
- Home 카드 기준 단독 Primary 폭: `280 x 44`
- 두 버튼 병렬: 같은 폭 + `8px` gap

### CTA Button

- 높이: `58px`
- 텍스트: `16 / 24`
- 용도: 화면 또는 섹션의 가장 강한 단일 행동
- 기본: 컨테이너 폭을 채우는 형태
- 카드 내부 사용 시 카드 좌우 패딩을 따른다

## Hierarchy

- `Primary` = 현재 사용자가 가장 먼저 해야 하는 행동
- `Secondary` = 같은 위치에서 선택 가능한 대안 행동
- 한 영역의 Primary는 기본 1개
- 역할이 같으면 화면마다 같은 크기 규칙을 사용한다

## Home application

- `02A_Home_NoRoutine`
  - `추천 루틴 보기`: Primary Compact
  - `내 루틴 만들기`: Secondary Compact
  - 카드 하단 action row
  - `136 + 8 + 136`
- `02B_Home_RoutineSelected`
  - `운동 시작`: Primary Compact
  - `다른 루틴`: Secondary Compact
  - 카드 하단 action row
  - `136 + 8 + 136`
- `02C_Home_RoutinePicker`
  - `다른 루틴`을 눌렀을 때 여는 Bottom Sheet 상태
  - 현재 선택 루틴을 check로 표시
  - 루틴 선택 즉시 반영 후 닫힘
  - 별도 저장 CTA 없음
- `02D_Home_Active`
  - `돌아가기`: Primary Compact
  - `운동 종료`: Secondary Compact
  - 카드 하단 action row
  - `136 + 8 + 136`

## MVP scope note

- 루틴 요일 지정 / 요일 기반 `오늘 운동`은 MVP 1차에서 제외한다.
- `루틴 없이 바로 운동하기` / `빈 운동 시작`도 MVP 1차에서 제외한다.
- 따라서 `02E_PROPOSAL_QuickStart`는 Home state로 사용하지 않는다.

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Shared UI management block:

- page: `MVP_공용_UI`
- frame: `BUTTON_SYSTEM_MANAGEMENT`
- node: `248:1286`

Home page:

- page: `02 홈`

## QA note

2026-09-06 visual QA에서 카드 하단 단독 Primary를 `88 x 44`로 좌측 정렬하면 빈 공간이 과도해 전체 폭 `280 x 44`로 수정했다.

이후 Home 루틴 선택 정책이 확정되면서 `02B`는 단독 Primary가 아니라 `운동 시작 / 다른 루틴`의 2버튼 구조로 변경했다. `02A`와 동일하게 `136 + 8 + 136`을 사용한다.

`02D`도 진행 중 운동 상태에서 즉시 복귀와 종료를 모두 제공하기 위해 `돌아가기 / 운동 종료` 2버튼 구조로 변경했다. `돌아가기`를 Primary, `운동 종료`를 Secondary로 두고 동일하게 `136 + 8 + 136`을 사용한다.

현재 `Compact Button` 원본 컴포넌트의 Secondary default 텍스트 토큰은 Primary와 같은 어두운 텍스트를 사용해 대비가 낮다. Home의 Secondary instance는 밝은 텍스트 override를 사용하고, 전체 Compact Button source/component QA는 별도 공용 UI 정리에서 처리한다.
