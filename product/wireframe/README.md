# G Fit Cumulative Wireframe

**Status:** CANONICAL · WHOLE-APP REVIEW DRAFT
**Wireframe version:** `2026-09-01.12`
**Updated:** 2026-09-01

## Canonical source

`product/wireframe/index.html`

이 파일이 웹 와이어프레임의 원본이다. 로컬 임시 파일, 채팅에서 생성한 HTML, 이전 Vercel deployment HTML은 원본이 아니다.

## Current review purpose

Product Owner 요청으로 현재는 Home부터 화면을 하나씩 말로 확정하기보다, **앱 전체 주요 화면을 먼저 시각화하고 실제 화면을 보면서 천천히 결정하는 패스**다.

현재 v2026-09-01.12는 `docs/24_PRODUCT_DIRECTION_V2.md`를 기준으로 만든 **검토용 구조 초안**이다.

중요:

- 화면에 보인다는 이유만으로 새로운 제품 정책이 확정되는 것은 아니다.
- 기존 확정 정책은 `CONFIRMED`로 표시한다.
- 아직 정하지 않은 정보 구조/UI는 `REVIEW` 또는 `OPEN`으로 표시한다.
- Product Owner 승인 전에는 REVIEW/OPEN 항목을 구현 Task/Acceptance Criteria로 사용하지 않는다.

## Visualized scope

현재 누적 wireframe에는 다음을 포함한다.

1. Account / Onboarding
   - 로그인
   - 성별 + 생년월일
   - 자동 닉네임/기본 프로필 이미지 검토 상태
2. Home
   - 루틴 없는 신규 사용자
   - 내 루틴 있음 + 요일 미지정
   - 내 루틴 있음 + 요일 지정
   - active workout 진행 중 복귀 상태
3. Routine
   - 내 루틴 목록
   - G Fit 추천 루틴
   - 추천 루틴 상세
   - 내 루틴 상세
   - 루틴 생성/수정
4. Exercise DB / Guide
   - 운동 검색/선택
   - 중성 해부학 3D avatar placeholder
   - grip guide concept
   - reviewed YouTube guide slot
   - custom exercise
5. Active workout
   - 세트 기록 + 이전 수행
   - 휴식 타이머
   - 운동 추가/메뉴
   - saved-routine update confirmation
   - active-session replacement dialog
6. Workout complete
   - workout summary dashboard review
   - partial-save summary
7. Analysis / History
   - analysis overview
   - exercise history/trend
   - workout-record detail
8. Settings
   - workout settings
   - profile
   - account/data
   - post-MVP intelligence/social placeholder

## Current high-level product baseline

The old recommendation-heavy onboarding and dedicated recommendation-result carousel are superseded.

Current first-run baseline:

`로그인 -> 기본정보(성별 + 생년월일) -> Home`

Current Home direction:

- 루틴이 없는 사용자는 Home에서 G Fit이 미리 구성한 `추천 루틴` 카드와 `내 루틴 만들기`를 볼 수 있다.
- 카드 하나가 루틴 하나를 나타낸다.
- 예시: `무분할 전신 루틴 / 상체 루틴 / 하체 루틴`
- 초기 추천 루틴은 개인 데이터 기반 recommendation matcher가 아니라 G Fit curated ready-made routine이다.
- 루틴이 있는 일반 Home에서는 추천 콘텐츠보다 오늘/다음 운동 시작과 최근 상태가 우선한다.

## Existing confirmed behavior preserved

- bottom navigation: `홈 / 루틴 / 분석 / 설정`
- exercise library is contextual, not a primary tab
- independent daily-routine model
- weekday assignment optional
- one active workout at a time
- active workout survives interruption/restart
- Home exposes one-tap return to active workout
- active-workout return card is Home-only
- Routine remains browseable/read-only while any workout is active
- active workout may add/remove/replace/reorder exercises and change planned set count
- structural live-workout changes ask at completion whether to update the saved routine
- load/reps are performance records, not routine-structure changes
- partial save stores only completed work
- prior performance remains visible during logging

## Main OPEN review points represented visually

- Home: scheduled `오늘 운동` vs unscheduled `다음 루틴` priority
- Home: amount/location of G Fit recommended-routine exposure after user has routines
- recommended-routine card information density
- recommendation card tap -> detail -> save/start semantics
- exact routine-tab hierarchy and weekday-setting placement
- exercise-library filtering/search behavior
- 3D/grip/video hierarchy inside exercise detail
- active-workout visual density
- post-workout summary MVP metrics
- Analysis MVP depth/metrics
- Settings profile/account/data detail

## Canonical runtime

- Production URL: `https://liftly-wireframe.vercel.app`
- Vercel project: `liftly-wireframe`
- Vercel project ID: `prj_w7P1KrlqbzDq9dBQ0UcFh2VuQipG`
- Vercel team ID: `team_cAq2nylL00z8u39kpinhZXQa`

Machine-readable binding: `product/wireframe/PROJECT_BINDING.json`

## Visual baseline

Web wireframe continues the existing dark Fitness visual language for structure review:

- font: SUIT
- bg/default: `#0A0A0C`
- bg/surface: `#161618`
- border: around `#232326`
- text/primary: `#F0F0F2`
- text/secondary: `#8E8E93`
- brand/primary: `#34D399`
- standard side padding: around `20px`
- standard card/input radius: around `12px`
- standard CTA height: around `54–58px`

This is a low/mid-fidelity planning artifact, not final UI spec.

## Mandatory update sequence

1. 관련 GitHub Decision / planning 문서를 확인한다.
2. `product/wireframe/index.html`을 수정한다.
3. HTML의 `CANONICAL_WIREFRAME_VERSION` marker를 갱신한다.
4. source validation을 수행한다.
5. GitHub에 source를 commit한다.
6. 동일 Vercel project `liftly-wireframe`에 production deploy한다.
7. `https://liftly-wireframe.vercel.app`을 read-back 한다.
8. HTTP 200 + 새 version marker + 핵심 화면 문자열을 확인한다.
9. 검증 후 Product Owner에게 같은 production URL을 전달한다.

`repo updated != runtime deployed`이며 둘 다 확인하기 전에는 완료라고 하지 않는다.

## Source validation gate

- `index.html` exists
- current `CANONICAL_WIREFRAME_VERSION` exists
- HTML parse succeeds
- no dependency on prior Vercel deployment hostname
- no `DecompressionStream` / temporary render bootstrap
- `style.css` exists and contains the current review selectors
- representative review strings exist: `G Fit 추천 루틴`, `운동 완료 대시보드`, `분석`, `설정`

## Runtime validation gate

- deployment state = `READY`
- canonical alias = `liftly-wireframe.vercel.app`
- canonical URL HTTP 200
- latest version marker present
- representative current-review strings present
- `style.css` HTTP 200

## Stability rules

- Product Owner-facing wireframe URL은 하나만 유지한다.
- superseded recommendation-survey/result-carousel screens are not retained in the current artifact.
- unconfirmed screens are explicitly labeled REVIEW/OPEN.
- wireframe must not silently convert review hypotheses into Product Policy.
- GitHub source update without runtime verification is not complete.
