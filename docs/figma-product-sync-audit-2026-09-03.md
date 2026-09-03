# Figma ↔ Latest Product Decision Sync Audit — 2026-09-03

**Status:** AUDIT / REVIEW — 제품 결정 문서가 아님  
**Purpose:** 기존 Figma 화면을 다시 기획하지 않고, 최신 PO 결정과의 차이만 식별하기 위한 동기화 점검

## Compared sources

- Canonical Figma: `W3lZurXCXbThP67rF2xk2b`, Page `0:1`
- `docs/24_PRODUCT_DIRECTION_V2.md`
- `docs/CURRENT.md`
- `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`

최신 PO 결정이 기존 Figma / wireframe보다 우선한다.

## Summary

현재 Figma는 주요 Tracker 화면의 뼈대가 이미 상당 부분 존재한다. 따라서 다음 단계는 새 화면을 처음부터 재기획하는 것이 아니라 **기존 화면을 최대한 재사용하고 최신 기능 차이만 수정하는 sync pass**가 우선이다.

### A. 기본 구조 재사용 가능

#### `201_Routine_List` / `203_Routine_List_Empty`
- 루틴 목록 / 빈 상태 기본 구조는 현재 제품 방향과 큰 충돌 없음.
- 카드 세부 카피 / 추천 루틴 연결 등은 디자인 단계에서 보완 가능.

#### `210_Routine_Detail`
- 루틴 요약 + 운동 카드 + 운동 시작의 기본 구조는 재사용 가능.
- attachment 지원 운동은 카드에 손잡이 표시가 필요할 수 있음.

#### `341_Library_Exercise_History`
- 세트 이력을 날짜별로 보는 기본 구조는 재사용 가능.
- recording type에 따라 `WEIGHT` 의미가 달라질 수 있으므로 assisted 계열은 `보조 kg` semantics 분기 필요.
- attachment별 이력 UX의 정확한 노출 방식은 아직 별도 확정 전.

#### `630_Unit_Settings_Sheet`
- 현재 확정 제품 정책과 직접 충돌하는 내용 없음.

### B. 기존 화면 유지 + 기능/상태 수정 필요

#### `110_Home`
- 오늘/다음 운동을 상단에서 빠르게 시작한다는 핵심은 최신 제품 방향과 맞음.
- 진행 중 운동이 있을 때 `운동 계속하기`가 최우선이 되는 상태 variant 필요.
- Home의 상세 분석은 보조 수준으로 유지해야 하며 운동 시작/복귀보다 위로 올라오면 안 됨.

#### `220_Routine_Create` / `230_Routine_Edit`
- 루틴 이름 / 요일 / 운동 구성의 기본 틀은 유지 가능.
- attachment 지원 운동 추가 시 `운동 선택 → 손잡이 선택 → 세트 구성 → 카드 추가` branch가 필요.
- 같은 운동을 손잡이 2개로 쓰면 카드 2개로 유지하는 정책을 반영해야 함.

#### `301_Exercise_Search` / `301a_Exercise_Search_Selected` / `302_Exercise_Search_Empty`
- 검색 중심 + 목록 선택이라는 큰 구조는 최신 결정과 맞음.
- 루틴 만들기와 운동 중 추가에서 같은 선택 흐름을 재사용해야 함.
- attachment 지원 운동 선택 시 손잡이 선택 단계가 후속으로 붙어야 함.
- 목록에서 바로 추가가 가능해야 하며 상세 화면은 선택 진입이어야 함.

#### `310_Custom_Exercise_Create` / `311_Custom_Exercise_Edit`
- 화면 자체는 존재함.
- 최신 정책상 custom exercise는 최소 `운동 이름 + 장비 + 큰 부위 + 기록 방식` 의미를 충족해야 함.
- 현재 Figma metadata만으로 내부 setting row의 실제 라벨을 확정할 수 없어, 이 필드들이 모두 있는지는 디자인 sync 때 직접 확인 필요.
- 큰 부위는 필수, 세부 근육은 선택이며 앱이 임의 추정하지 않음.

#### `401a_Workout_Active`
- `한 화면 전체 운동 + 현재 운동만 펼침` 구조는 그대로 유지.
- 다음 기능 차이만 반영:
  - 사용자는 어떤 운동 카드든 바로 열어 수행 가능; 강제 수행 순서 없음.
  - `건너뛰기` 상태 / `다른 운동 먼저` 별도 상태 없음.
  - 실제 수행 순서가 달라도 루틴 변경으로 처리하지 않음.
  - attachment 지원 카드는 `랫풀다운 · 맥그립 미디엄`처럼 손잡이를 표시만 하고 카드 안에서 수정하지 않음.
  - 다른 손잡이로 더 하면 기존 카드를 바꾸지 않고 새 카드 추가.
  - assisted 기록은 일반 `kg` 대신 `보조 kg` 표시.
  - assisted first-use helper는 첫 접촉 시 한 번만 짧게 제공.
  - 운동 추가 / 삭제 / 세트 추가 / 삭제 등 실제 구조 변경은 종료 시 루틴 업데이트 확인 대상으로 누적.

#### `410_Rest_Timer`
- 상단 toast / pill 시각 구조는 visual authority로 유지.
- 기능 정책만 최신화:
  - 세트 완료 체크 → 자동 시작.
  - 설정된 시간 동안 카운트다운.
  - 타이머 UI가 사라져도 카운트다운은 계속 가능.
  - 사용자는 기다리지 않고 바로 다음 세트/다른 운동 진행 가능.
  - `X`로 현재 toast를 닫을 수 있음.
  - `+15초 / -15초`는 MVP에서 사용하지 않음.
  - 종료 피드백 방식은 추후 디자인/구현에서 확정.

### C. 기존 화면은 있으나 구조/의미를 크게 수정해야 함

#### `111_Home_Empty`
현재 Figma의 단순 empty state만으로는 최신 Home 방향을 충족하지 못함.

최신 방향:
- 루틴이 없을 때 `추천 루틴`과 `내 루틴 만들기`를 함께 제공.
- 추천 루틴은 category questionnaire가 아니라 G Fit이 준비한 ready-made routine 카드.
- 카드 1개 = 완성된 루틴 1개.

따라서 `111_Home_Empty`는 기존 empty message만 유지하는 수준이 아니라 추천 루틴 진입을 포함하도록 구조 수정 필요.

#### `403a_Workout_End_Incomplete` / `403b_Workout_End_Complete`
- 기존 modal shell은 재사용 가능하지만 최신 종료 정책과 branch를 맞춰야 함.
- 미수행 운동이 있다는 이유만으로 `건너뛰기` 상태를 만들거나 루틴에서 제거하지 않음.
- 오늘 실제 완료한 세트 기록은 보존되어야 함.
- 루틴 구조 변경이 없으면 별도 루틴 업데이트 질문 없이 완료로 진행.

#### `403c_Workout_Save_Or_Discard`
현재 이름/역할은 최신 기본 종료 정책과 충돌 가능성이 높아 **기본 종료 단계로 그대로 사용하면 안 됨**.

최신 정책은:
- 오늘 운동 기록은 저장되는 것이 기본.
- 운동 중 루틴 구조가 바뀐 경우에만 종료 시 변경 요약 후 `오늘만 적용 / 루틴 업데이트`를 한 번 묻는다.

따라서 이 frame은:
- `루틴 변경 확인` modal로 repurpose하거나,
- 실제 전체 운동 폐기 edge case용으로 별도 분리해야 함.

정확한 modal copy / full-discard 진입 경로는 아직 후속 확정 필요.

#### `421_Exercise_Reorder`
- 최신 결정상 단순히 다른 운동을 먼저 하려고 reorder할 필요가 없음. 사용자는 원하는 운동 카드를 바로 수행하면 됨.
- 실제 수행 순서가 바뀌는 것은 루틴 변경이 아님.
- 따라서 이 화면을 Active Workout의 일반적인 `운동 순서 변경` 수단으로 사용하면 최신 정책과 충돌.
- 향후 `저장된 루틴의 표시 순서 자체를 명시적으로 바꾸는 기능`으로 유지할지는 별도 결정 필요.

#### `501_Workout_Complete`
기존 완료 요약 화면은 최신 PO 승인 완료 캐러셀 방향에 의해 사실상 superseded.

새 구조:
- 1:1.25 카드 캐러셀
- 오늘 기록 요약
- 총 볼륨 비유
- 오늘의 발전
- 최근 루틴 흐름 + 다음 운동 힌트 (조건부)
- 오늘 운동 부위
- 오늘 한 운동 / 실제 수행 결과
- 최근 흐름 (조건부)
- 카드별 정보량은 한 장에서 바로 이해 가능한 수준으로 제한
- 현재 카드 기준 사진 저장 / 스토리 / 카카오톡 / 시스템 공유 방향
- 추천 루틴 세션이면 `내 루틴으로 저장` 선택을 조건부 추가

기존 `501_Workout_Complete`는 디자인 단계에서 위 구조로 다시 구성해야 함.

### D. 현재 Figma에 별도 화면/상태가 확인되지 않음

#### 추천 루틴
필요한 최소 흐름:
- Home 추천 루틴 카드
- 추천 루틴 내용 확인
- 저장 없이 운동 시작
- 운동 완료 후 `내 루틴으로 저장` 조건부 선택
- 운동 중 추천 구성이 바뀌었다면 저장 시 `오늘 한 구성 / 원래 추천 구성` 선택

정확한 추천 루틴 상세 화면은 아직 OPEN.

#### Attachment picker
- `운동 선택 → 손잡이 선택 → 카드 추가` 중 `손잡이 선택` 화면/시트가 별도 frame으로 확인되지 않음.

#### Assisted first-use helper state
- `보조 kg가 클수록 머신의 도움도 커집니다.` 의미를 첫 사용에 한 번만 보여주는 상태가 별도 확인되지 않음.

#### Routine-change confirmation state
- `운동 추가 2개 · 운동 삭제 1개 · 세트 추가 1개` 같은 간단한 변경 요약 + `오늘만 적용 / 루틴 업데이트` 전용 상태가 현재 별도 frame으로 확인되지 않음.
- `403c` repurpose 후보.

#### Exercise Detail
- Exercise Search에서 이름/이미지를 누르면 선택적으로 진입하는 상세 화면이 현재 Page 1에서 별도 frame으로 확인되지 않음.
- `341_Library_Exercise_History`는 이력 화면이며 운동 가이드/detail 전체를 대체한다고 확정된 상태가 아님.

#### Analysis
- Bottom navigation 방향에는 `분석`이 있으나 현재 Page 1에 Analysis first-screen / drilldown frame이 확인되지 않음.
- `docs/CURRENT.md`에도 `Analysis first-screen metrics / drilldown scope`가 open item으로 남아 있음.

#### Settings main
- Bottom navigation 방향에는 `설정`이 있으나 현재 Page 1에는 main Settings frame이 확인되지 않음.
- `630_Unit_Settings_Sheet`만 존재.

#### First-run basic info
- 제품 정책은 `로그인 → 성별 + 생년월일 → Home`으로 확정되어 있으나 현재 Page 1에서 해당 frame은 확인되지 않음.
- 다만 이전 작업에서 인증/온보딩을 현재 디자인 우선순위 밖으로 둔 맥락이 있으므로 즉시 blocker로 보지는 않음.

## Priority recommendation

### Sync Pass 1 — 기존 핵심 Core Loop 먼저
1. `110 / 111 Home`
2. `301 Exercise Search` + attachment branch
3. `401a Active Workout`
4. `410 Rest Timer`
5. `403a/b/c End Flow`
6. `501 Workout Complete`

이 6개 영역은 이미 Figma가 있으므로 새로 기획하지 말고 **현재 화면을 기준으로 최신 결정만 반영**한다.

### Sync Pass 2 — 아직 없는 핵심 MVP 화면
1. 추천 루틴 flow
2. Exercise Detail
3. Analysis first screen
4. Settings main

### Deferred / external blocker
- purchased asset license / derivative / AI-reference 확인
- Gym Animations 추가 구매 여부
- attachment taxonomy / 운동별 허용 손잡이 mapping
- shoulder press variant 재검수
- P0 신규 asset production
- 실제 구매 asset 기반 light-theme validation

## Process rule going forward

새 UI 항목을 논의하기 전에 반드시:

`최신 GitHub 정책 확인 → Figma 기존 frame 확인 → 있으면 차이만 수정 → 없을 때만 신규 wireframe/review 생성`

기존 Figma 화면을 확인하지 않고 같은 흐름을 처음부터 다시 기획하지 않는다.

## Implementation

이 문서는 Figma / product sync audit이다. Cursor 구현 승인 문서가 아니다.
