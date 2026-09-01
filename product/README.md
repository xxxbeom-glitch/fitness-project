# LIFTLY Product Planning Hub

**Status:** ACTIVE
**Updated:** 2026-09-01

이 폴더는 Fitness Project의 **기획·UX·와이어프레임 작업 진입점**이다.

중요: 이 폴더가 기존 `docs/`의 정책/Decision을 복제해서 별도 Source of Truth를 만드는 것은 아니다. 제품 정책과 결정의 최종 권위는 기존 GitHub 문서에 있고, 이 Hub는 그 문서들과 와이어프레임/Vercel/Figma를 한곳에서 연결한다.

## 작업 시작 규칙

기획·UX·와이어프레임 관련 작업을 시작하거나 이어갈 때는 다음 순서로 확인한다.

1. `PROJECT_INSTRUCTIONS.md`
2. `product/README.md`
3. `docs/CURRENT.md`
4. 관련 `docs/08_DECISIONS.md`
5. 관련 기획 문서
6. `product/wireframe/README.md`
7. `product/wireframe/index.html`
8. 필요한 경우 Figma / Vercel runtime 확인

사용자에게 프로젝트 위치나 기존 와이어프레임 주소를 다시 묻지 않는다.

## Canonical planning sources

| 영역 | Canonical source |
|---|---|
| 현재 상태 / 다음 행동 | `docs/CURRENT.md` |
| Product Brief | `docs/00_PROJECT_BRIEF.md` |
| Product Policy | `docs/01_PRODUCT_POLICY.md` |
| 주요 Decision | `docs/08_DECISIONS.md` |
| Design System | `docs/09_DESIGN_SYSTEM.md` + Tonal 관련 문서 |
| Screen-level decisions | `docs/13_SCREEN_DESIGN_DECISIONS.md` |
| IA / Storyboard | `docs/14_IA_STORYBOARD.md` |
| Recommendation System v1 | `docs/23_RECOMMENDATION_SYSTEM_V1.md` |
| 현재 웹 와이어프레임 원본 | `product/wireframe/index.html` |
| 와이어프레임 배포 규칙 | `product/wireframe/README.md` |

## Canonical visual artifacts

### Figma

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

Figma는 시각 디자인 기준이다. 제품 정책/UX 의미가 GitHub의 확정 Decision과 충돌하면 GitHub가 우선한다.

### Cumulative wireframe

`https://liftly-wireframe.vercel.app`

Product Owner에게 보여주는 누적 웹 와이어프레임은 이 URL 하나만 사용한다.

## Current first-run planning snapshot

현재 확정/기준안:

- 인증 필요
- 신규 계정 최초 로그인만 onboarding 진행
- 기존 계정 재로그인 / 재설치 / 다른 기기 로그인은 onboarding을 건너뛰고 Home
- 미완료 onboarding은 계정에 저장된 중단 지점에서 재개
- 신규 onboarding에서 성별·나이 프로필 정보를 수집하는 방향
- 성별·나이는 recommendation matcher와 분리
- 첫 시작 방식은 `추천 루틴 받기 / 내 루틴 직접 만들기` 동등한 2개 경로
- 추천 입력은 `운동 목표 / 운동 경력 / 주당 가능일 / 운동 시간`
- 추천 4개 입력은 4개 풀스크린 wizard가 아니라 **추천 설정 한 화면 + 항목별 bottom sheet**
- 운동 경력 선택지:
  - `처음이에요`
  - `6개월 미만이에요`
  - `6개월~1년 미만이에요`
  - `1년 이상이에요`
- 주당 가능일 선택지: `1일`~`7일`
- 주당 가능일은 사용자가 현실적으로 확보 가능한 **최대 일수**
- 운동 시간 선택지: `30분 / 45분 / 60분 / 90분 이상`
- 운동 시간은 세트 간 휴식을 포함하고 별도 유산소는 제외한 **최대 웨이트 트레이닝 세션 시간 예산**
- 경험 기반 주간 처방 ceiling `3 / 4 / 5 / 6회` 정책은 recommendation-system 문서에 기록되어 있음
- **prescribed frequency -> routine split / routine count 매핑은 Product Owner가 현재 보류함**
- 현재 웹 와이어프레임은 추천 결과/분할 로직까지 확장하지 않고 **온보딩 흐름까지만 시각화**함
- 장비 inventory는 초기 추천 설문에서 제외
- 초기 추천은 일반적인 상업 헬스장 환경을 가정하고 장비 불일치는 대체운동으로 처리
- 추천은 자유 생성 LLM보다 curated / QA-reviewed template matching을 우선
- 시작 중량은 성별/나이로 고정 추정하지 않고 첫 실제 workout에서 calibration

### Product Owner visual review

- 2026-09-01: 신규 사용자 온보딩의 큰 구조를 Product Owner가 승인함.
- 2026-09-01: `목표 / 경력 / 주당 가능일 / 시간`을 개별 풀스크린으로 두지 않고 한 화면 리스트 + bottom sheet로 선택하는 구조를 승인함.
- 2026-09-01: 경력 선택지와 주당 가능일 1~7일을 확정함.
- 2026-09-01: 운동 시간 `30 / 45 / 60 / 90분 이상`을 확정함.
- 2026-09-01: routine split 매핑은 보류하고, canonical wireframe은 현재 온보딩 흐름까지만 유지하기로 함.

아직 확정하지 않은 세부 선택지/매칭 규칙은 `docs/23_RECOMMENDATION_SYSTEM_V1.md`에서 관리하되 Product Owner가 재개하기 전까지 분할 매핑을 자동 진행하지 않는다.

## No-drift rule

앞으로 기획/와이어프레임 작업에서 다음을 금지한다.

- 대화 중 임시 HTML을 새로운 기준본처럼 사용
- 기존 production deployment의 HTML을 역으로 복사해 source로 삼기
- 별도 Product Owner-facing Vercel URL 생성
- 임시 wrapper / compression bootstrap / 이전 deployment URL dependency로 production을 구성
- Figma 디자인 시스템을 확인하지 않고 와이어프레임 공통 스타일을 임의 재설정
- GitHub source를 갱신하지 않은 채 runtime만 수정

와이어프레임 변경은 반드시 `product/wireframe/README.md`의 순서를 따른다.
