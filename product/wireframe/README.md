# G Fit Cumulative Wireframe

**Status:** CANONICAL · WHOLE-APP PLANNING SPEC · FIGMA SYSTEM SYNCED
**Wireframe version:** `2026-09-02.14`
**Updated:** 2026-09-02

## Canonical source

- HTML: `product/wireframe/index.html`
- CSS: `product/wireframe/style.css`
- Production: `https://liftly-wireframe.vercel.app`

이 파일이 웹 와이어프레임의 운영 기준이다. 로컬 임시 파일이나 이전 Vercel deployment는 기준이 아니다.

## v2026-09-02.14 — planning-spec layout

Product Owner 요청에 따라 기존의 **dark review-board / horizontal card rail** 표현을 실제 현업 화면설계서에 가까운 구조로 재편했다.

핵심 원칙:

> 모바일 phone mockup에는 실제 사용자에게 노출되는 앱 UI와 데이터만 둔다. 제품 검토 상태, 정책 설명, OPEN/REVIEW 메모는 phone 밖 명세 영역에서 관리한다.

현재 화면설계서 구조:

1. 상단 document metadata
   - Page Title
   - Version
   - Status
   - Screen Scope
   - Visual Basis
   - Review Rule
   - Description / Purpose
2. 각 화면 상단 metadata strip
   - Screen ID / Name
   - Screen Path
   - Review State
3. 좌측
   - 실제 G Fit 모바일 화면 mockup
4. 우측
   - 화면 목적
   - 진입 조건
   - 주요 요소
   - 동작 / 상태
   - Validation
   - 이동 / 다음
   - 비고 / OPEN point

변경된 표현 규칙:

- 주변 planning document는 white / light-gray 기반의 spreadsheet-like shell을 사용한다.
- phone UI는 기존 dark G Fit visual language를 유지한다.
- 기존 phone 내부 `.wire-note`, `.open-box`, `검토안`, 제품 정책 설명은 spec table로 이동했다.
- `CONFIRMED / REVIEW / OPEN / POST-MVP`는 삭제하지 않고 각 화면의 `Review State`와 우측 비고에서 유지한다.
- 기존 whole-app 주요 화면과 상태는 삭제하지 않았다.
- 반응형에서는 desktop의 `phone left / spec right`를 좁은 화면에서 vertical stack으로 전환한다.

이 레이아웃 변경 자체는 새로운 Product Decision이 아니다. 기존 제품 정책과 REVIEW/OPEN 상태를 더 명확하게 검토하기 위한 planning artifact 구조 변경이다.

## Current review purpose

Product Owner가 앱 전체 주요 화면을 한 번에 보고, 실제 화면과 기획 설명을 분리한 상태에서 Home부터 순차적으로 제품 결정을 확정한다.

상태 의미:

- `CONFIRMED` = 기존 확정 제품 정책 / behavior
- `REVIEW` = 비교·검토용 UI·정보구조 가설
- `OPEN` = Product Owner가 화면을 보고 결정할 항목
- `POST-MVP` = 장기 구조 reference이며 첫 출시 범위를 의미하지 않음

Figma 디자인시스템을 반영했다는 이유로 `REVIEW / OPEN` 항목이 Product Decision이 되는 것은 아니다.

## Figma design-system sync baseline

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

직접 확인한 대표 authored frames:

- `110_Home`
- `111_Home_Empty`
- `201_Routine_List`
- `210_Routine_Detail`
- `220_Routine_Create`
- `230_Routine_Edit`
- `301_Exercise_Search`
- `310_Custom_Exercise_Create`
- `401a_Workout_Active`
- `501_Workout_Complete`
- `REF_하단앱바 배치 기준`

### Phone visual baseline

Colors:

- `bg/default`: `#0A0A0C`
- `bg/surface`: `#161618`
- `bg/elevated`: `#1E1E22`
- `border/subtle`: `#232326`
- `text/primary`: `#F0F0F2`
- `text/secondary`: `#8E8E93`
- `text/tertiary`: `#48484A`
- `brand/primary`: `#34D399`

Typography / representative dimensions:

- SUIT
- screen width `360`
- standard side padding `20`
- content width `320`
- Nav Header `56`
- Home TodayHeroCard `320 × 128`
- Home HeatmapCard `320 × 104`
- Home WorkoutRow `320 × 60`
- RoutineCard `320 × 124`
- CTA `320 × 58`
- Input `320 × 52`
- weekday selector `34 × 34`
- Exercise search `320 × 44`
- Exercise filter chip `32` high
- Exercise item `320 × 96`
- Active-workout progress section `72`, track `8`
- Completion primary metric `154 × 94` × 2
- Bottom App Bar `360 × 78`
- common radius `12`

중요: 이 웹 와이어프레임은 Figma component를 그대로 export한 final UI spec이 아니다. Figma visual baseline 안에서 현재 제품 검토 내용을 표현하는 planning artifact다.

## Visualized scope — preserved in v14

1. Account / Onboarding
   - 로그인
   - 성별 + 생년월일
   - 자동 닉네임/기본 프로필 이미지 검토안
2. Home
   - 루틴 없음
   - 루틴 있음 + 요일 미지정
   - 루틴 있음 + 요일 지정
   - active workout 복귀 상태
3. Routine
   - 내 루틴 목록
   - G Fit 추천 루틴
   - 추천 루틴 상세
   - 내 루틴 상세
   - 루틴 생성/수정
4. Exercise DB / Guide
   - 운동 검색/선택
   - 중성 해부학 3D placeholder
   - grip guide concept
   - YouTube guide slot
   - custom exercise
5. Active workout
   - 진행률
   - 세트 기록 + 이전 수행
   - 휴식 타이머
   - 운동 추가/메뉴
   - 기존 확정 dialog flows
6. Workout complete
   - summary dashboard 검토안
   - partial-save summary
7. Analysis / History
   - overview
   - exercise trend/history
   - workout-record detail
8. Settings
   - 운동 설정
   - 프로필
   - 계정/데이터
   - post-MVP extension placeholder

## Current high-level product baseline

Current first run:

`로그인 -> 기본정보(성별 + 생년월일) -> Home`

- recommendation-heavy onboarding/result-carousel은 superseded.
- nickname / profile image는 first-run에서 강제 설정하지 않는다.
- 계정 생성 시 기본값을 자동 부여하고 Settings에서 변경하는 방향이다.
- 01C는 profile-default 표현 검토용이며 현재 확정 first-run flow를 변경하지 않는다.

Home direction:

- 루틴이 없는 사용자는 `G Fit 추천 루틴` + `내 루틴 만들기`를 볼 수 있음
- 추천 카드 하나 = G Fit이 미리 구성한 ready-made routine 하나
- 예: `무분할 전신 / 상체 / 하체`
- 초기 추천 루틴은 개인화 recommendation matcher가 아님
- 기존 루틴 사용자는 추천 콘텐츠보다 오늘/다음 운동과 최근 상태가 우선

## Existing confirmed behavior preserved

- bottom nav: `홈 / 루틴 / 분석 / 설정`
- exercise library contextual
- independent daily-routine model
- weekday assignment optional
- one active workout
- active workout restart/recovery
- Home-only active-workout return state
- Routine browseable/read-only while workout active
- flexible live workout structural edits
- completion-time saved-routine update prompt after structural changes
- load/reps are performance records
- partial save stores completed work only
- prior performance visible during logging

## Main OPEN points

- Home: scheduled `오늘 운동` vs unscheduled `다음 루틴`
- 신규 Home 추천 루틴 노출량
- 추천 루틴 card/detail 정보량
- 추천 루틴 detail -> save/start semantics
- routine hierarchy / weekday control placement
- exercise filtering/search behavior
- 3D / grip / video hierarchy
- active-workout visual density
- post-workout summary MVP metrics
- Analysis MVP depth
- Settings detail scope

## Runtime verification — v2026-09-02.14

Verified:

- deployment target: `production`
- Vercel project: `liftly-wireframe`
- deployment ID: `dpl_FhbswP4x1T8oat9yQQKgsRic8hV8`
- Vercel state: `READY`
- canonical alias: `https://liftly-wireframe.vercel.app`
- HTML HTTP `200`
- `CANONICAL_WIREFRAME_VERSION: 2026-09-02.14`
- `PLANNING_SPEC_LAYOUT: 2026-09-02`
- `Product Planning Wireframe` marker present
- `screen-spec` / `screen-notes` / `화면 목적` planning-spec structure present
- canonical production alias resolves to the v14 deployment
- `style.css` is served separately and existing G Fit phone component CSS is retained

Runtime HTML/read-back validation is complete. Pixel-perfect browser visual QA is separate from HTTP/source validation and should be handled during Product Owner visual review.

## Mandatory update sequence

1. 관련 GitHub Decision / planning 문서 확인
2. canonical HTML/CSS 수정
3. `CANONICAL_WIREFRAME_VERSION` 갱신
4. source validation
5. GitHub commit
6. 동일 Vercel project production deploy
7. canonical URL read-back
8. HTTP 200 + version marker + CSS 확인
9. Product Owner에게 동일 production URL 전달

`repo updated != runtime deployed`이며 둘 다 확인하기 전에는 완료로 보지 않는다.

## Stability rules

- Product Owner-facing URL은 하나만 유지
- superseded recommendation survey/result carousel 화면은 current artifact에서 유지하지 않음
- 미확정 화면은 REVIEW/OPEN으로 명시
- Figma는 visual/design-system reference이며 제품 정책 Source of Truth는 GitHub
- wireframe이 제품 정책을 임의로 생성하지 않음
