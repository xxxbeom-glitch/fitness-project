# G Fit Product Planning Hub

**Status:** ACTIVE
**Updated:** 2026-09-01

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

`PRODUCT / UX PLANNING — G FIT PRODUCT DIRECTION V2`

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

Current deployed wireframe version `2026-09-01.11`은 superseded recommendation-flow 화면을 포함하므로 **현재 제품 정책을 대표하지 않는다**.

새 상위 구조를 충분히 확정하기 전까지 recommendation-result UI polish 또는 Cursor implementation을 진행하지 않는다.

## Next planning sequence

1. Account / Onboarding baseline 마무리
2. Home
3. Routine / G Fit recommended routines
4. Exercise DB / assets / identity
5. Active workout
6. Post-workout summary dashboard
7. Analysis
8. Settings
9. AI / personalization
10. Social
11. Legal / privacy / age / platform policy
12. Monetization

## No-drift rule

- GitHub가 Source of Truth
- Figma/wireframe이 최신 제품 결정을 역으로 덮어쓰지 않음
- superseded recommendation V1을 새 기능의 기본값으로 재사용하지 않음
- 구현은 상위 기획이 충분히 정리된 뒤 진행
