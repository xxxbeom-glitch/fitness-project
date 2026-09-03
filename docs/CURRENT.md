# CURRENT — Fitness Project

**Updated:** 2026-09-03 20:30 KST

## Current mode

`PRODUCT / UX PLANNING — FIGMA ↔ LATEST PRODUCT DECISION AUDIT COMPLETE · CURRENT FOCUS: FIGMA CORE LOOP SYNC PASS 1 · EXERCISE DB / ASSET WORK HOLD · NO CURSOR HANDOFF`

## Immediate checkpoint

2026-09-03 기존 Figma 전체 Page `0:1`을 최신 GitHub / PO 결정과 대조했다.

Audit:

`docs/figma-product-sync-audit-2026-09-03.md`

핵심 운영 원칙:

`최신 GitHub 정책 확인 → 기존 Figma frame 확인 → 있으면 차이만 수정 → 없을 때만 신규 화면/와이어프레임 생성`

이미 Figma에 있는 흐름을 확인하지 않고 같은 화면을 처음부터 다시 기획하지 않는다.

현재 다음 단계는 **Figma Core Loop Sync Pass 1**이다.

1. Home (`110 / 111`)
2. Exercise Search (`301 / 301a / 302`) + attachment branch
3. Active Workout (`401a`)
4. Rest Timer (`410`)
5. End Flow (`403a / 403b / 403c`)
6. Workout Complete (`501`)

이 단계는 신규 제품 기획이 아니라 **기존 Figma에 이미 있는 화면을 최신 승인 정책에 맞게 수정하는 디자인 sync**다.

Cursor 제품 구현은 아직 승인되지 않았다.

---

## Current authority

충돌 시 우선순위:

1. 현재 Product Owner의 최신 명시적 결정
2. `docs/24_PRODUCT_DIRECTION_V2.md`
3. `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`
4. `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
5. `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`
6. `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
7. `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
8. `docs/ux-decisions/2026-09-02-exercise-db-normalization.md` — cable grip subsection은 2026-09-03 attachment 결정이 supersede
9. `docs/exercise-db/p0-canonical-row-spec-v1.md`
10. `docs/exercise-db/exercise-db-gap-analysis-v1.md`
11. `docs/exercise-db/exercise-db-v1-production.md`
12. `docs/ux-decisions/2026-09-02-home-workout-routine-completion-locks.md` 중 위 최신 문서들과 충돌하지 않는 부분
13. 기존 canonical Figma / Vercel wireframe

`docs/figma-product-sync-audit-2026-09-03.md`는 **결정 문서가 아니라 현재 Figma와 최신 결정의 차이를 기록한 audit evidence**다.

---

## Product definition — CONFIRMED

Working name: `G Fit` (`Go Fitness`) — 가칭.

G Fit은 **운동 루틴을 만들고, 실제 운동을 빠르게 기록하고, 기록이 쌓일수록 성장과 개인화 가치를 높이는 웨이트 트레이닝 앱**이다.

Core loop:

`Home에서 오늘/다음 운동 바로 시작 → 운동 중 빠르게 기록 → 완료에서 오늘 결과 확인 → 분석에서 누적 변화 확인`

Bottom navigation:

`홈 / 루틴 / 분석 / 설정`

Exercise Library는 독립 primary tab이 아니라 루틴/운동 흐름 안에서 contextual하게 사용한다.

### First-run — CONFIRMED RESET

New account:

`로그인 → 기본정보(성별 + 생년월일) → Home`

Existing account:

`로그인 → Home`

기존 추천 설문 / 추천 결과 onboarding은 superseded.

닉네임 / 프로필 사진은 first-run 필수가 아니며 기본값을 자동 부여하고 Settings에서 변경한다.

---

## Approved UX locks

### Home

Home의 최우선 역할은 **운동 시작 / 운동 복귀**다.

- 루틴 없음 → 추천 루틴 / 내 루틴 만들기
- 루틴 있음 + 요일 미지정 → 다음 운동
- 루틴 있음 + 요일 지정 → 오늘의 운동
- active workout → 운동 계속하기

추천 루틴은 개인화 추천이 아니라 G Fit이 미리 준비하고 검수한 ready-made routine이다.

- 카드 1개 = 완성된 루틴 1개
- 예: 무분할 전신 / 상체 / 하체
- `프리셋`보다 사용자-facing 용어 `추천 루틴` 사용

현재 Figma `111_Home_Empty`는 단순 empty state라 이 방향을 반영하도록 구조 수정이 필요하다.

### Exercise Search / Add

**검색 중심 + 목록에서 바로 추가**가 기본이다.

- 루틴 만들기와 운동 중 추가에서 같은 선택 흐름 재사용
- 목록에서 상세 진입 없이 바로 추가 가능
- 이름/이미지 선택 시 Exercise Detail은 선택 진입
- 없으면 직접 만들기
- Custom exercise는 일반 운동처럼 이력을 가짐
- 손잡이 선택 지원 운동은 `운동 선택 → 손잡이 선택 → 카드 추가`

현재 Figma `301 / 301a / 302`의 검색 구조는 재사용하되 attachment picker branch가 필요하다.

### Active Workout

기본 구조는 **전체 운동을 한 화면에서 이어서 보고 현재 운동만 펼쳐 기록**이다.

- 세트 / 이전 기록 / kg / 횟수 / 완료
- 다음 운동은 아래에 계속 보임
- 이전 기록은 입력 가까이 표시
- 사용자는 원하는 운동 카드를 바로 열어 수행 가능
- 강제 수행 순서 없음
- `건너뛰기` 상태 없음
- `다른 운동 먼저` 같은 별도 상태 없음
- 실제 수행 순서가 달라도 루틴 변경으로 보지 않음
- 미수행 운동은 그냥 미수행 상태이며 자동 삭제하지 않음

#### Cable attachment — PO APPROVED

- 사용자 용어: `손잡이`
- 내부 용어: `attachment`
- 카드 하나 = 하나의 실제 수행 블록
- 손잡이는 카드 안에서 표시만 하고 수정하지 않음
- 같은 운동을 손잡이 2개로 하면 카드도 2개
- 다른 손잡이로 추가 수행 → `운동 추가 → 운동 선택 → 손잡이 선택 → 새 카드`
- 기존 카드의 기록 / 완료 상태 / 손잡이를 다른 카드로 변환하지 않음

기준:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

#### Assisted machine — PO APPROVED

`machine-assisted-pull-up`, `machine-assisted-dip` 등 assisted 운동은:

- recording type `assisted_weight_reps`
- `보조 kg + 횟수` 기록
- 일반 `kg` 대신 `보조 kg`
- 더 높은 보조 kg를 더 좋은 기록으로 해석하지 않음
- 일반 중량 PR / 1RM / weight-volume 의미를 그대로 적용하지 않음
- 첫 사용에만 짧은 helper: `보조 kg가 클수록 머신의 도움도 커집니다.`

### Active Workout routine changes — PO APPROVED

루틴 구조 변경으로 보는 것:

- 운동 추가
- 운동 삭제
- 세트 추가
- 세트 삭제
- 다른 손잡이의 새 카드 추가 등 실제 카드 구조 변경

루틴 구조 변경이 아닌 것:

- 실제 수행 순서
- 일부 운동 미수행
- kg 변경
- 횟수 변경
- 완료 세트 결과 자체

운동 종료 시 구조 변경이 있었다면 한 번만 요약해서 묻는다.

예:

`운동 추가 2개 · 운동 삭제 1개 · 세트 추가 1개`

선택:

- `오늘만 적용`
- `루틴 업데이트`

오늘 운동 기록은 어느 쪽을 선택해도 보존한다.

현재 Figma `403c_Workout_Save_Or_Discard`는 기본 종료 단계로 그대로 사용하지 않고, 최신 정책에 맞춘 routine-change confirmation으로 repurpose하거나 실제 전체 폐기 edge case와 분리해야 한다.

### Rest Timer — PO APPROVED

Figma `410_Rest_Timer`의 상단 toast / pill 구조를 visual reference로 유지한다.

- 세트 완료 체크 → 자동 시작
- 설정 시간 카운트다운
- 잠깐 노출 후 UI는 사라질 수 있음
- UI가 사라져도 타이머는 계속 진행 가능
- 사용자는 기다리지 않고 다음 세트 / 다른 운동 진행 가능
- toast가 보일 때 `X`로 닫을 수 있음
- `+15초 / -15초`는 MVP에서 사용하지 않음
- 타이머는 운동 순서나 진행을 막지 않음
- 정확한 종료 진동 / 소리 / 알림은 디자인·구현 단계에서 확정

기준:

`docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

### Post-workout Completion — PO APPROVED / PLANNING PASS

기존 Figma `501_Workout_Complete`의 단순 요약 구조는 최신 방향으로 교체한다.

완료 화면 중심은 **1:1.25 비율의 카드 캐러셀**이다.

기본 카드 후보:

1. 오늘 기록 요약
2. 총 볼륨 비유
3. 오늘의 발전
4. 최근 루틴 흐름 + 다음 운동 힌트 — 조건부
5. 오늘 운동 부위
6. 오늘 한 운동 / 실제 수행 결과
7. 최근 흐름 — 조건부

공통 원칙:

- 한 카드에서 바로 이해되는 정보량
- 내부 스크롤을 기본으로 하지 않음
- 카드마다 시각적 중심 하나
- 의미 없는 카드는 생략 가능
- 정확한 여백 / 글자 크기 / 그래프 밀도 / 아바타 크기는 Figma 디자인 단계에서 조정

`최근 루틴 흐름 + 다음 운동 힌트`는 루틴 전체 + 포함 운동별 여러 꺾은선을 함께 보고 그 맥락에서 힌트를 설명하는 구조로 PO 승인됐다.

현재 카드 기준 export 방향:

- 사진 저장
- 스토리 공유
- 카카오톡
- 더보기 / 시스템 공유

추천 루틴으로 시작한 세션은 운동 완료 후 `내 루틴으로 저장` 선택을 조건부로 추가한다.

기준:

`docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`

### Recommended Routine Save Flow

`추천 루틴 선택 → 저장 없이 운동 시작 → 운동 완료 → 사용자가 내 루틴 저장 여부 결정`

- 오늘 운동 기록은 항상 저장
- 루틴 저장은 별도 선택
- 운동 중 추천 구성을 바꿨다면 저장 시 `오늘 한 구성 / 원래 추천 구성`을 추가로 선택하는 방향

정확한 추천 루틴 상세 화면 / 저장 버튼 copy는 아직 OPEN.

---

## Figma sync audit result

### 기본 구조 재사용 가능

- `201_Routine_List`
- `203_Routine_List_Empty`
- `210_Routine_Detail`
- `341_Library_Exercise_History` — recording type별 label semantics 보완
- `630_Unit_Settings_Sheet`

### 기존 화면 유지 + 기능/상태 수정

- `110_Home`
- `220_Routine_Create`
- `230_Routine_Edit`
- `301_Exercise_Search`
- `301a_Exercise_Search_Selected`
- `302_Exercise_Search_Empty`
- `310_Custom_Exercise_Create`
- `311_Custom_Exercise_Edit`
- `401a_Workout_Active`
- `410_Rest_Timer`

### 구조 / 의미 큰 수정 필요

- `111_Home_Empty` — 추천 루틴 + 내 루틴 만들기 방향 반영
- `403a_Workout_End_Incomplete`
- `403b_Workout_End_Complete`
- `403c_Workout_Save_Or_Discard` — 최신 routine-update semantics와 재정렬
- `421_Exercise_Reorder` — 단순 다른 운동 선행 용도로 쓰지 않음; 유지 목적 재검토
- `501_Workout_Complete` — 승인 완료 캐러셀 구조로 교체

### 현재 Figma에 별도 frame 미확인

- 추천 루틴 상세 / 사용 flow
- attachment picker
- assisted first-use helper state
- routine-change confirmation 전용 상태 (`403c` repurpose 가능)
- Exercise Detail
- Analysis first screen / drilldown
- Settings main
- first-run 기본정보 화면 — 현재 디자인 우선순위 밖으로 둔 기존 맥락이 있어 즉시 blocker는 아님

---

## Exercise DB / asset — HOLD

구매 원본 source / metadata는 계속 read-only 보존한다.

Production baseline:

- purchased source: **206**
- app-facing canonical: **195**
- default search exclusion: **8**
- production non-blocking exception: **4**

P0 신규 16개 canonical spec은 승인됐지만 신규 asset production은 시작하지 않는다.

HOLD 해제 전까지 실행하지 않는 것:

- shoulder press alias / variant 최종 처리
- hand-orientation grip mapping 구현
- attachment taxonomy / 운동별 허용 손잡이 전체 mapping
- P0 신규 이미지 제작

재개 조건:

- 추가 Gym Animations 계열 package 구매 여부 결정
- purchased asset modification / derivative / AI-reference license 확인

---

## Theme — VALIDATION PENDING

PO는 구매 운동 에셋과의 결합을 고려해 light theme를 선호하지만 global theme로 아직 확정하지 않는다.

실제 구매 에셋으로 우선 검증할 화면:

1. Exercise Search / Select
2. Exercise Detail
3. Active Workout

---

## Canonical artifacts

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

- canonical wireframe version: `2026-09-02.14`
- 현재 최신 PO 결정들이 모두 canonical production wireframe에 반영된 상태는 아님
- review preview와 canonical production을 구분한다

Current sync audit:

`docs/figma-product-sync-audit-2026-09-03.md`

Relevant review artifacts:

- `product/wireframe/exercise-review.html`
- `product/wireframe/grip-record-review.html`
- `product/wireframe/workout-card-actions-review.html`
- `product/wireframe/rest-timer-review.html` — visual/controls 일부 superseded
- `product/wireframe/workout-end-review.html`
- `product/wireframe/completion-review.html`
- `product/wireframe/progression-hint-review.html`
- `product/wireframe/bodypart-summary-review.html`
- `product/wireframe/completion-cards-all-review.html`

---

## Next

### Figma Sync Pass 1

기존 Core Loop를 최신 정책과 맞춘다.

1. Home
2. Exercise Search + attachment selection branch
3. Active Workout
4. Rest Timer
5. Workout End Flow
6. Workout Complete carousel

Figma 작업 방식은 **기존 frame을 기준으로 변경점만 전달**한다. 이미 있는 화면을 처음부터 다시 생성하는 프롬프트를 만들지 않는다.

### Figma Sync Pass 2 / 신규 화면

Pass 1 이후:

1. 추천 루틴 flow
2. Exercise Detail
3. Analysis first screen
4. Settings main

---

## Open items / blockers

### Design / planning

- Figma Sync Pass 1
- 추천 루틴 exact program contents
- 추천 루틴 상세 / 저장 edge cases 및 copy
- completion exact metrics / formulas
- progression hint exact metric / observation threshold
- Analysis first-screen metrics / drilldown scope
- Exercise Detail scope
- Settings main scope
- `421_Exercise_Reorder`의 향후 역할 확정
- 전체 workout discard edge case의 정확한 진입 / copy

### DB / asset

- purchased asset modification / derivative / AI-reference license check
- 추가 Gym Animations package 구매 여부
- attachment taxonomy / 표준 명칭 / 운동별 허용 손잡이 mapping — HOLD 해제 후
- shoulder press plate-loaded / selectorized / iso-lateral 재검수 — HOLD 해제 후
- P0 신규 asset production / QA — HOLD
- poster/source mismatch 3개 G Fit normalized user-facing 설명
- `machine-45-degree-back-extension` raw structured source provenance gap — non-blocking
- actual purchased-asset light-theme validation

---

## Implementation status

**No Cursor handoff yet.**

현재는 Figma / Product sync 단계다. 주요 Core Loop 디자인이 최신 결정과 동기화되고, 신규 핵심 MVP 화면 범위가 충분히 안정된 뒤 Issue / Acceptance Criteria로 구현 단계에 넘긴다.
