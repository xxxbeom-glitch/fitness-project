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
- 카드 우측 단독 버튼: 최소 폭 `88px`
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
  - `136 + 8 + 136`
- `02B_Home_Next`
  - `운동 시작`: Primary Compact `88 x 44`
- `02C_Home_Today`
  - `운동 시작`: Primary Compact `88 x 44`
- `02D_Home_Active`
  - `돌아가기`: Primary Compact `88 x 44`
- `02E_PROPOSAL_QuickStart`
  - `빈 운동 시작`: Primary CTA `280 x 58`

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Shared UI management block:

- page: `MVP_공용_UI`
- frame: `BUTTON_SYSTEM_MANAGEMENT`
- node: `248:1286`

Home page:

- page: `02 홈`

## QA note

현재 `Compact Button` 원본 컴포넌트의 Secondary default 텍스트 토큰은 Primary와 같은 어두운 텍스트를 사용해 대비가 낮다. 원본 컴포넌트가 직접 수정 가능한 로컬 source가 아니어서 Home의 Secondary instance와 공용 UI 예시에만 밝은 텍스트 override를 적용했다. 전체 Compact Button source/component QA는 별도 공용 UI 정리에서 처리한다.
