# G Fit Cumulative Wireframe

**Status:** CANONICAL · WHOLE-APP REVIEW DRAFT · FIGMA SYSTEM SYNCED
**Wireframe version:** `2026-09-01.13`
**Updated:** 2026-09-01

## Canonical source

- HTML: `product/wireframe/index.html`
- CSS: `product/wireframe/style.css`
- Production: `https://liftly-wireframe.vercel.app`

이 파일이 웹 와이어프레임의 운영 기준이다. 로컬 임시 파일이나 이전 Vercel deployment는 기준이 아니다.

## Current review purpose

Product Owner 요청으로 앱 전체 주요 화면을 먼저 시각화하고, 실제 화면을 보면서 Home부터 천천히 제품 결정을 확정한다.

중요:

- `CONFIRMED` = 기존 확정 제품 정책
- `REVIEW` = 비교/검토용 UI·정보구조 가설
- `OPEN` = Product Owner가 화면을 보고 결정할 항목
- Figma 디자인시스템을 반영했다는 이유로 `REVIEW / OPEN` 항목이 Product Decision이 되는 것은 아니다.
- Product Owner 승인 전에는 REVIEW/OPEN 화면을 Cursor Task / Acceptance Criteria로 사용하지 않는다.

## Figma design-system sync — v2026-09-01.13

2026-09-01 v13부터 기존 GitHub 토큰 메모만 참고하지 않고, 실제 canonical Figma 파일의 metadata / variables / screen structure를 직접 확인해 웹 검토 화면의 시각 언어를 다시 맞췄다.

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

확인한 대표 authored frames:

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

### Directly inspected visual baseline

Colors:

- `bg/default`: `#0A0A0C`
- `bg/surface`: `#161618`
- `bg/elevated`: `#1E1E22`
- `border/subtle`: `#232326`
- `text/primary`: `#F0F0F2`
- `text/secondary`: `#8E8E93`
- `text/tertiary`: `#48484A`
- `brand/primary`: `#34D399`

Typography:

- SUIT
- Display 01: 20 / 28 Bold
- Display 02: 24 / 32 Bold
- Heading 01: 16 / 24 Bold
- Heading 02: 14 / 20 Bold
- Body 01: 14 / 20 Medium
- Body 02: 13 / 18 Medium
- Label 01: 12 / 16 Bold
- Label 02: 12 / 16 Medium
- Caption 01: 11 / 14 Medium
- Tag 01: 11 / 14 SemiBold

Representative dimensions/patterns:

- screen width: `360`
- standard side padding: `20`
- content width: `320`
- Nav Header: `56`
- Home `TodayHeroCard`: `320 × 128`
- Home `HeatmapCard`: `320 × 104`
- Home `WorkoutRow`: `320 × 60`
- Routine `RoutineCard`: `320 × 124`
- CTA: `320 × 58`
- Input: `320 × 52`
- Routine weekday selector: `34 × 34`
- Exercise search field: `320 × 44`
- Exercise filter chip: `32` high
- Exercise item: `320 × 96`
- Active-workout progress section: `72`, track `8`
- Completion primary metric: `154 × 94` × 2
- Bottom App Bar reference: `360 × 78`
- common radius: `12`, with `6 / 8 / 16 / full` variants as defined in Figma

v13 웹 화면은 이 변수와 비례, 기존 surface/tag/list-card 문법을 기준으로 재구성했다.

### Important limitation

v13은 **Figma 컴포넌트를 코드로 그대로 export/import한 final UI spec이 아니다.**

직접 확인한 Figma variable / metadata / authored-screen proportion을 기반으로 현재 제품 검토안을 같은 디자인 언어 안에 배치한 planning artifact다. 예를 들어 working name이 `G Fit`이므로 Figma의 기존 AppLogo asset 자체를 복제하지 않고 placeholder text를 사용한다.

## Visualized scope

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

Old recommendation-heavy onboarding/result-carousel은 superseded다.

Current first run:

`로그인 -> 기본정보(성별 + 생년월일) -> Home`

Home direction:

- 루틴이 없는 사용자는 `G Fit 추천 루틴` + `내 루틴 만들기`를 볼 수 있음
- 추천 카드 하나 = ready-made routine 하나
- 예: `무분할 전신 / 상체 / 하체`
- 초기 추천 루틴은 개인화 recommendation matcher가 아니라 G Fit curated routine
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

## Runtime verification — v2026-09-01.13

Verified:

- deployment target: production
- Vercel state: `READY`
- canonical alias: `https://liftly-wireframe.vercel.app`
- HTML HTTP `200`
- `CANONICAL_WIREFRAME_VERSION: 2026-09-01.13`
- `Figma design-system synced` marker present
- `style.css` HTTP `200`
- production CSS contains the inspected Figma baseline variables and component proportions

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
