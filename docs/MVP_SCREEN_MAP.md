# MVP SCREEN MAP — G Fit

**Updated:** 2026-09-05  
**Status:** ACTIVE PLANNING INDEX / NOT A NEW PRODUCT DECISION

이 문서는 `온보딩 → Home → 루틴 → 운동 DB → Active Workout → 완료 → 분석 → 설정`의 **1차 MVP 전체 화면/상태를 한 곳에서 찾기 위한 인덱스**다.

목적:

- Product Owner가 전체 흐름과 남은 결정을 한 번에 본다.
- ChatGPT가 다음 대화에서 화면 ID만으로 관련 Decision/Figma/OPEN 항목을 빠르게 복원한다.
- 이미 확정된 항목을 다시 묻지 않는다.
- `PO가 결정해야 하는 것`, `ChatGPT가 기존 정책/레퍼런스로 정리해도 되는 것`, `디자인/개발 단계에서 결정할 것`을 분리한다.

중요: 이 인덱스는 기존 Decision을 요약/연결하는 문서다. 충돌 시 `PROJECT_INSTRUCTIONS.md → 최신 Decision/Product Policy → CURRENT`가 우선한다.

## 상태 표기

- `LOCKED` — 제품/UX 의미가 충분히 확정됨. PO 재결정 불필요.
- `STRUCTURE PASS` — 화면 구조는 승인됐고 계산/세부 상태 일부만 OPEN.
- `OPEN` — 제품/UX 결정이 남음.
- `DEFER` — MVP 차단 요소가 아니며 이후 단계로 미룸.
- `DEPENDENCY` — 화면이 아니라 구현/데이터/디자인 의존성.

## 결정 담당

- `PO` — 핵심 제품 의미/MVP 범위라 Product Owner 확인 필요.
- `GPT` — 기존 정책, Figma, Hevy/Mobbin 패턴을 기반으로 ChatGPT가 안을 정리하고 기본안을 잠글 수 있음. PO가 이견 있을 때만 재검토.
- `DESIGN` — 제품 의미를 바꾸지 않는 시각/밀도/인터랙션 표현.
- `ENG` — 승인된 의미를 구현하는 기술 세부.
- `RELEASE` — 법률/스토어/실기기 등 출시 전 확인.

---

## 01 · Account / First run

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `01A` | 로그인 / provider 계속하기 | LOCKED | DESIGN · ENG · RELEASE | 없음 | `DEC-015`, `docs/01_PRODUCT_POLICY.md`, `docs/13_SCREEN_DESIGN_DECISIONS.md` |
| `01B` | 신규 사용자 약관 확인 | LOCKED | DESIGN · RELEASE | 없음 | `docs/01_PRODUCT_POLICY.md`, `docs/13_SCREEN_DESIGN_DECISIONS.md` |
| `01C` | 기본정보 — 성별 + 생년월일 | STRUCTURE PASS | GPT · PO(연령정책) · RELEASE | 없음 | `docs/00_PROJECT_BRIEF.md`, `docs/13_SCREEN_DESIGN_DECISIONS.md` |
| `01D` | 인증 loading / cancel / recoverable error | LOCKED STATE | DESIGN · ENG | 없음 | `docs/13_SCREEN_DESIGN_DECISIONS.md` |

Current first run is `로그인 → 기본정보 → Home`. 과거 추천 설문/결과 onboarding은 superseded.

---

## 02 · Home

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `02A` | Home — 저장 루틴 없음 | STRUCTURE PASS | GPT · DESIGN | `111_Home_Empty` `1:674` | `docs/00_PROJECT_BRIEF.md`, `2026-09-02-home-workout-routine-completion-locks.md` |
| `02B` | Home — 루틴 있음 / 요일 미지정 / 다음 운동 | STRUCTURE PASS | GPT | `110_Home` 기반 | `DEC-007`, `docs/14_IA_STORYBOARD.md` |
| `02C` | Home — 루틴 있음 / 요일 지정 / 오늘 운동 | LOCKED DIRECTION | DESIGN | `110_Home` `1:641` | `DEC-007`, `docs/14_IA_STORYBOARD.md` |
| `02D` | Home — 운동 진행 중 / 돌아가기 | LOCKED | DESIGN · ENG | `110_Home` 파생 | `docs/14_IA_STORYBOARD.md`, `DEC-018` |
| `02E` | 빈 운동 / 즉흥 운동 Quick Start | OPEN GAP | **PO** | 없음 | `DEC-001`, Hevy logging flow reference |

`02A`에서는 ready-made `G Fit 추천 루틴`과 `내 루틴 만들기`를 노출할 수 있다. 추천 설문은 없다.

---

## 03 · Routine / Ready-made routine

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `03A` | 루틴 목록 | LOCKED BASE | DESIGN | `201_Routine_List` `1:701` | `docs/14_IA_STORYBOARD.md` |
| `03B` | 루틴 Empty | LOCKED BASE | DESIGN | `203_Routine_List_Empty` `1:738` | `docs/00_PROJECT_BRIEF.md` |
| `03C` | G Fit 추천 루틴 상세 | LOCKED | DESIGN | 없음 | `2026-09-03-recommended-routine-detail-flow.md` |
| `03D` | 내 루틴 상세 | LOCKED BASE | DESIGN | `210_Routine_Detail` `1:747` | `docs/00_PROJECT_BRIEF.md`, `docs/14_IA_STORYBOARD.md` |
| `03E` | 루틴 만들기 | LOCKED BASE | DESIGN | `220_Routine_Create` `1:757` | `DEC-012`, `docs/00_PROJECT_BRIEF.md` |
| `03F` | 루틴 수정 | LOCKED BASE | DESIGN | `230_Routine_Edit` `1:777` | `DEC-012`, `docs/00_PROJECT_BRIEF.md` |
| `03G` | Active Workout 중 Routine read-only 상태 | LOCKED | DESIGN · ENG | 기존 Routine 파생 | `docs/14_IA_STORYBOARD.md` |
| `03H` | 추천 루틴 실제 템플릿/운동 구성 | OPEN / DATA DEP | GPT · PO REVIEW | 없음 | `docs/00_PROJECT_BRIEF.md`, Exercise DB P0 211 |

추천 루틴 상세 CTA는 `운동 시작`. 운동 전 자동 저장하지 않고 운동 완료 후 저장 여부를 묻는다.

---

## 04 · Exercise Library / Detail

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `04A` | 운동 검색 / 추가 | LOCKED DIRECTION | DESIGN | `301_Exercise_Search` `1:799` | `2026-09-02-home-workout-routine-completion-locks.md` |
| `04B` | 운동 다중 선택 상태 | LOCKED BASE | DESIGN | `301a_Exercise_Search_Selected` `1:820` | Figma + same add flow |
| `04C` | 검색 Empty / 직접 만들기 | LOCKED BASE | DESIGN | `302_Exercise_Search_Empty` `1:851` | `DEC-003`, `DEC-012` |
| `04D` | 운동 상세 / 가이드 / 최근 기록 | LOCKED | DESIGN | 현재 Figma top-level 없음 | `DEC-011`, `2026-09-04-exercise-detail-scope.md` |
| `04E` | 커스텀 운동 만들기 | LOCKED | DESIGN | `310_Custom_Exercise_Create` `1:870` | `DEC-003`, `DEC-012` |
| `04F` | 커스텀 운동 수정 | LOCKED BASE | DESIGN | `311_Custom_Exercise_Edit` `1:890` | `DEC-003`, `DEC-012` |
| `04G` | 특정 운동 과거 세트 기록 | LOCKED DATA VIEW / ROUTE REVIEW | GPT | `341_Library_Exercise_History` `1:912` | Figma; 07C와 중복 역할 정리 필요 |
| `04H` | 케이블 손잡이 선택 | LOCKED MEANING / MAPPING OPEN | GPT · DATA | 없음 | `2026-09-03-cable-attachment-active-workout.md` |

운동 추가는 `검색 → 목록에서 바로 추가`가 기본. 상세 화면은 선택적 확인 단계다.

---

## 05 · Active Workout

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `05A` | Active Workout — weight + reps | LOCKED CORE | DESIGN | `401a_Workout_Active` `1:986` | `DEC-002`, `DEC-004`, `docs/14_IA_STORYBOARD.md` |
| `05B` | reps-only 세트 행 | STRUCTURE PASS | GPT · DESIGN | `05A` 파생 | `2026-09-05-exercise-recording-types.md` |
| `05C` | duration 세트 행 | OPEN UI | **GPT** | `05A` 파생 | `2026-09-05-duration-exercise-recording.md` |
| `05D` | added-weight 세트 행 | STRUCTURE PASS | GPT | `05A` 파생 | `2026-09-05-exercise-recording-types.md` |
| `05E` | assisted 세트 행 — 보조 kg | LOCKED | DESIGN | `05A` 파생 | `2026-09-03-assisted-machine-recording.md` |
| `05F` | 자동 Rest Timer pill | LOCKED BEHAVIOR | DESIGN · ENG | `410_Rest_Timer` `1:1003` | `2026-09-03-rest-timer-behavior.md` |
| `05G` | 첫 중량 가이드 coach mark | LOCKED CONCEPT | GPT · DESIGN | Active 파생 | `DEC-010`, `DEC-013` |
| `05H` | 첫 세트 체감 피드백 sheet | LOCKED CONCEPT | DESIGN | Active 파생 | `DEC-010`, `DEC-013` |
| `05I` | 운동 메뉴 — 정보/교체/순서/삭제 | LOCKED | DESIGN | Active 파생 | `2026-09-03-active-workout-routine-update.md` |
| `05J` | 운동 순서 변경 | LOCKED | DESIGN · ENG | `421_Exercise_Reorder` `1:1019` | `2026-09-03-active-workout-routine-update.md` |
| `05K` | 미완료 운동 종료 확인 | LOCKED | DESIGN | `403a_Workout_End_Incomplete` `1:1010` | `2026-09-03-workout-end-flow.md` |
| `05L` | 전체 완료 후 종료 확인 | LOCKED | DESIGN | `403b_Workout_End_Complete` `1:1013` | `2026-09-03-workout-end-flow.md` |
| `05M` | 전체 운동 기록 삭제 최종 확인 | LOCKED | DESIGN · ENG | `403c_Workout_Save_Or_Discard` `1:1016` | `2026-09-03-workout-end-flow.md` |
| `05N` | 진행 중 다른 루틴 시작 | LOCKED | DESIGN · ENG | dialog 파생 | `docs/14_IA_STORYBOARD.md` |
| `05O` | 세션 구조 변경 → 저장 루틴 반영 여부 | LOCKED | DESIGN · ENG | dialog 파생 | `2026-09-03-active-workout-routine-update.md` |
| `05P` | 앱 interruption/restart 세션 복구 | LOCKED POLICY | ENG | UI state 필요 | `DEC-004`, `DEC-018`, `docs/01_PRODUCT_POLICY.md` |

---

## 06 · Workout Complete

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `06A` | 운동 완료 캐러셀 shell | LOCKED CONTENT SYSTEM | DESIGN | `501_Workout_Complete` `1:1030`은 구형 baseline | `2026-09-03-post-workout-completion-carousel.md` |
| `06B` | 오늘 기록 요약 카드 | LOCKED | DESIGN | 06A 파생 | `2026-09-04-workout-completion-metrics.md` |
| `06C` | 오늘의 발전 / PR 카드 | STRUCTURE PASS | GPT | 06A 파생 | `2026-09-03-post-workout-completion-carousel.md` |
| `06D` | 최근 루틴 흐름 + 다음 운동 힌트 | LOCKED for general weight/reps | DESIGN | 06A 파생 | `2026-09-04-progression-hint-threshold.md` |
| `06E` | 오늘 운동 부위 카드 | STRUCTURE PASS | DESIGN | 06A 파생 | Completion doc + Analysis body-map 1.0/0.5 policy |
| `06F` | 오늘 한 운동 / 실제 수행 결과 카드 | LOCKED | DESIGN | 06A 파생 | `2026-09-03-post-workout-completion-carousel.md` |
| `06G` | 추천 루틴 → 내 루틴 저장 여부 | LOCKED | DESIGN | conditional | `2026-09-04-recommended-routine-post-workout-save.md` |
| `06H` | 추천 루틴 구조 변경 후 저장 구성 선택 | LOCKED | DESIGN | conditional | `2026-09-04-recommended-routine-post-workout-save.md` |
| `06I` | 부분 저장 완료 표현 | LOCKED DATA / UI REVIEW | GPT · DESIGN | completion 파생 | `2026-09-03-workout-end-flow.md` |
| `06J` | 사진 저장 / 스토리 / 카카오 / 시스템 공유 | APPROVED DIRECTION / MVP PRIORITY OPEN | **PO** 또는 DEFER | 없음 | `2026-09-03-post-workout-completion-carousel.md`, Project Brief out-of-MVP social boundary |

---

## 07 · Analysis / History

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `07A` | 분석 홈 | STRUCTURE PASS | GPT · DESIGN | 아직 없음 | `2026-09-05-analysis-tab-ia.md`, current review |
| `07B` | 부위별 분석 | FIRST-PASS LOCKED | DESIGN | 아직 없음 | `2026-09-05-analysis-body-area-drilldown.md` |
| `07C` | 운동별 성장 | FIRST-PASS LOCKED | **GPT** calculation | 아직 없음 | `2026-09-05-analysis-exercise-progress.md` |
| `07D` | 운동 기록 — 날짜순 세션 history | OPEN DETAIL | **GPT** | 기존 Figma pattern 재사용 | `2026-09-05-analysis-tab-ia.md` |
| `07E` | 운동 기록 상세 | STRUCTURE PASS | **GPT** density | 기존 wireframe + Figma history pattern | `2026-09-05-analysis-tab-ia.md` |
| `07F` | 분석 Empty / insufficient-data states | OPEN | **GPT** | 없음 | Analysis decision deferred items |

07A 기간은 `4주 / 3개월 / 6개월 / 1년`. Body-map 계산은 완료 세트의 primary `1.0`, secondary `0.5` 규칙으로 LOCKED. 시각 표현은 DESIGN에서 조정.

---

## 08 · Settings / Account

| ID | 화면/상태 | 상태 | 남은 담당 | Figma | 핵심 Ref |
|---|---|---|---|---|---|
| `08A` | 설정 홈 | OPEN DETAIL / SCOPE BASE LOCKED | **GPT** | 아직 top-level 없음 | `docs/00_PROJECT_BRIEF.md`, `docs/01_PRODUCT_POLICY.md` |
| `08B` | 프로필 설정 | STRUCTURE PASS | GPT · DESIGN | existing profile fields only | Project Brief + screen decisions |
| `08C` | kg/lb 단위 설정 | LOCKED | DESIGN · ENG | `630_Unit_Settings_Sheet` `1:1069` | `docs/00_PROJECT_BRIEF.md` |
| `08D` | 계정 관리 / 연결 provider | LOCKED POLICY / UI OPEN | **GPT** | 없음 | `DEC-019`, `docs/01_PRODUCT_POLICY.md` |
| `08E` | 계정 삭제 최종 확인 | LOCKED POLICY / UI OPEN | GPT · RELEASE | 없음 | `DEC-020`, `docs/01_PRODUCT_POLICY.md` |
| `08F` | 이용약관 / 개인정보처리방침 진입 | LOCKED ACCESS / COPY RELEASE CHECK | RELEASE | 없음 | `docs/01_PRODUCT_POLICY.md` |
| `08G` | 기본 휴식시간/진동 등 추가 운동 설정 | DEFER / OPTIONAL | GPT | 일부 old draft only | MVP Basic settings currently requires kg/lb only |

---

## 09 · Non-screen MVP dependencies

| ID | 의존성 | 상태 | 다음 담당 | Ref |
|---|---|---|---|---|
| `09A` | Production exercise DB derived artifact `211` rows | DEPENDENCY / DATA LOCKED, ARTIFACT PENDING | GPT/QA → ENG later | `docs/CURRENT.md`, `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md` |
| `09B` | 운동 media transform sample / serving format | DEFERRED PARALLEL | GPT/QA | `docs/CURRENT.md` |
| `09C` | offline-first persistence / sync / active-session recovery | POLICY LOCKED / IMPLEMENTATION PENDING | ENG + QA | `DEC-004`, `DEC-016~021`, `docs/01_PRODUCT_POLICY.md` |
| `09D` | Analysis / Settings final Figma pass | PENDING | DESIGN | canonical Figma `W3lZurXCXbThP67rF2xk2b` |
| `09E` | MVP implementation Issue/AC decomposition | PENDING AFTER FLOW LOCK | GPT → Cursor | `PROJECT_INSTRUCTIONS.md` |

---

# PO decision queue — keep intentionally small

현재 Product Owner가 직접 개입할 가치가 큰 항목은 우선 아래만 잡는다.

1. `02E` — **빈 운동/즉흥 운동 Quick Start를 1차 MVP에 넣을지**. General-purpose tracker와 DEC-001에는 맞지만 현재 Figma/핵심 흐름에 명시적 진입점이 없다.
2. `06J` — **완료 카드 외부 공유 기능을 1차 MVP까지 넣을지, 후순위로 미룰지**. 완료 카드 콘텐츠 구조와 별개로 native share는 구현 범위를 키운다.
3. `01C` — **최소 연령/연령 제한 정책**. 화면 설계는 진행할 수 있지만 출시 전에 제품/법률 기준 확정 필요.

그 외 OPEN 항목은 우선 ChatGPT가 기존 Decision/Figma/Hevy reference를 바탕으로 1차안을 만든 뒤, 의미가 바뀌는 경우에만 PO에게 올린다.

# ChatGPT autonomous queue

Product Owner를 멈춰 세우지 않고 ChatGPT가 먼저 정리할 항목:

1. `07D / 07E` 운동 기록 / 상세 wireframe
2. `08A~08E` Settings / account-management 기본 IA
3. `05C` duration Active Workout 상세 UI
4. `07C` recording type별 progress / PR 비교 규칙 후보
5. `07A / 07F` frequency, recent-record density, empty/insufficient states
6. `04G` Figma exercise history와 Analysis 07C 역할 중복 정리
7. `02B` unscheduled `다음 운동` 선정 기본 규칙
8. Rest Timer 종료 signal 등 구현/디자인 세부

# Figma source inventory checked

Canonical Figma: `W3lZurXCXbThP67rF2xk2b`

현재 확인된 authored top-level frames:

- `110_Home` / `111_Home_Empty`
- `201_Routine_List` / `203_Routine_List_Empty` / `210_Routine_Detail`
- `220_Routine_Create` / `230_Routine_Edit`
- `301_Exercise_Search` / `301a_Exercise_Search_Selected` / `302_Exercise_Search_Empty`
- `310_Custom_Exercise_Create` / `311_Custom_Exercise_Edit`
- `341_Library_Exercise_History`
- `401a_Workout_Active`
- `403a / 403b / 403c` workout-end modal shells
- `410_Rest_Timer`
- `421_Exercise_Reorder`
- `501_Workout_Complete`
- `630_Unit_Settings_Sheet`
- `REF_하단앱바 배치 기준`

Current authored phone baseline is 360px wide, 20px side inset, SUIT, dark neutral surfaces, radius 12, current mint accent `#34D399`, and floating 4-tab bottom app bar.

# Reference note

Hevy is used as a practical strength-training interaction reference, especially for routine detail, quick start, previous-performance set logging, timers, workout completion, history, and analysis. Hevy behavior is not automatically adopted when it conflicts with G Fit decisions.
