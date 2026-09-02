# G Fit Product Planning Hub

**Status:** ACTIVE
**Updated:** 2026-09-02

이 폴더는 Fitness Project의 기획·UX·와이어프레임 작업 진입점이다.

## Current authority

현재 상위 제품 방향은 다음 문서를 우선한다.

1. `docs/24_PRODUCT_DIRECTION_V2.md`
2. `docs/CURRENT.md`
3. `docs/08_DECISIONS.md`
4. `docs/00_PROJECT_BRIEF.md`
5. 관련 Product / Policy / IA 문서

기존 `docs/23_RECOMMENDATION_SYSTEM_V1.md`는 **SUPERSEDED / historical reference only**다.

## Current planning mode

`PRODUCT / UX PLANNING — G FIT WHOLE-APP WIREFRAME REVIEW · HOME FIRST`

Working name: `G Fit (Go Fitness)` — 가칭.

제품 중심:
- 루틴 생성/관리
- 운동 실행/기록
- 기본 분석
- 기록이 쌓인 뒤 개인화 제안

첫 출시 MVP:
- Core Tracker
- 핵심 Exercise / Program Content

Post-MVP:
- AI / personalization
- Social
- Monetization

## Current onboarding baseline

New account:

`로그인 -> 성별 + 생년월일 -> Home`

기존 추천 설문과 추천 결과 캐러셀은 폐기됐다.

Home에서는:
- `G Fit 추천 루틴`
- `내 루틴 만들기`

를 제공한다.

`추천 루틴`은 사용자-facing 용어이고, 의미는 **G Fit이 미리 구성하고 검수한 ready-made routine**이다. 첫 진입에서는 개인 맞춤 추천을 의미하지 않는다.

추천 루틴은 여러 카드로 제공할 수 있다.

- 카드 1개 = 완성된 루틴 1개
- 예: `무분할 전신 루틴`, `상체 루틴`, `하체 루틴`

추천 카드 탭 이후의 상세/저장/시작 flow는 OPEN이다.

## Exercise visual baseline

- 중성적으로 보이는 해부학 느낌 3D avatar 1계열
- male/female 운동 asset 이중 제작은 baseline에서 요구하지 않음
- social profile image와 exercise visual은 별개
- grip 시각화는 필요한 운동에 한해 제공하는 방향

## Existing foundation retained

다음 기존 기획은 유지한다.

- primary nav: `홈 / 루틴 / 분석 / 설정`
- one active workout
- active workout recovery
- flexible live workout edits
- previous performance inline
- offline-first persistence / safe sync
- custom exercise support
- weekday scheduling optional
- AI/recommendation may suggest but must not silently alter workout records or routines

## Wireframe status

Current canonical review wireframe:

- source: `product/wireframe/index.html`
- stylesheet: `product/wireframe/style.css`
- guide: `product/wireframe/README.md`
- version: `2026-09-02.14`
- production: `https://liftly-wireframe.vercel.app`

### Planning-spec layout — v14

Product Owner 요청에 따라 current whole-app review artifact를 현업 화면설계서 형태로 재구성했다.

- document metadata: 상단
- phone mockup: 좌측
- 화면 목적 / 진입 조건 / 요소 / 동작 / Validation / 이동 / 비고: 우측
- phone 안에는 실제 앱 UI만 유지
- `CONFIRMED / REVIEW / OPEN / POST-MVP` 등 기획 상태와 설명은 phone 밖 명세 영역에서 관리
- 주변 shell은 light planning document, phone은 기존 Figma-synced dark G Fit UI 유지
- 기존 whole-app 주요 화면과 제품 의미는 보존

이 표현 변경은 새로운 Product Decision이 아니다.

### Figma design-system sync

Phone UI는 canonical Figma의 visual language를 계속 사용한다.

대표 기준:

- 360px screen / 20px side padding / 320px content
- SUIT typography
- `bg/default #0A0A0C`
- `bg/surface #161618`
- `bg/elevated #1E1E22`
- `brand/primary #34D399`
- common radius 12
- Nav Header 56
- CTA 320×58
- Input 320×52
- Home hero 320×128
- RoutineCard 320×124
- ExerciseItem 320×96
- Bottom App Bar 360×78
- Completion primary metrics 154×94

정확한 inspected baseline과 제한사항은 `product/wireframe/README.md`에 기록한다.

중요: 디자인시스템 sync 또는 planning-spec layout은 REVIEW/OPEN 제품 가설을 확정시키지 않는다.

현재 visualized areas:
- Account / Onboarding
- Home 4 states
- Routine / G Fit recommended routines
- Exercise DB / Guide / custom exercise
- Active workout
- Workout complete dashboard
- Analysis / History
- Settings

표시 의미:

- `CONFIRMED` = 기존 확정 정책
- `REVIEW` = 현재 화면 검토 가설
- `OPEN` = Product Owner가 보고 결정할 항목
- `POST-MVP` = 장기 구조 reference

REVIEW/OPEN 항목은 구현 요구사항이 아니며 Product Owner 승인 전에는 Decision으로 승격하지 않는다.

## Runtime status

v2026-09-02.14 production deploy/read-back 완료:

- Vercel project: `liftly-wireframe`
- deployment: `dpl_FhbswP4x1T8oat9yQQKgsRic8hV8`
- state: `READY`
- canonical: `https://liftly-wireframe.vercel.app`
- HTML: HTTP 200 / v14 markers 확인
- CSS: HTTP 200

## Next planning sequence

현재는 whole-app wireframe을 보면서 다음 순서로 검토한다.

1. Home — `02A / 02B / 02C / 02D`
2. Routine / G Fit recommended routines
3. Exercise DB / assets / identity
4. Active workout
5. Post-workout summary dashboard
6. Analysis
7. Settings
8. AI / personalization
9. Social
10. Legal / privacy / age / platform policy
11. Monetization

## No-drift rule

- GitHub가 Source of Truth
- Figma는 visual/design-system reference
- Figma/wireframe이 최신 제품 결정을 역으로 덮어쓰지 않음
- superseded recommendation V1을 새 기능의 기본값으로 재사용하지 않음
- REVIEW/OPEN wireframe 가설을 구현 Task로 자동 변환하지 않음
- 구현은 상위 기획이 충분히 정리된 뒤 진행
