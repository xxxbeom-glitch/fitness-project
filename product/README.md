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

## Onboarding planning snapshot — BASELINE COMPLETE

현재 확정/기준안:

- 인증 필요
- 신규 계정 최초 로그인만 onboarding 진행
- 기존 계정 재로그인 / 재설치 / 다른 기기 로그인은 onboarding을 건너뛰고 Home
- 미완료 onboarding은 계정에 저장된 중단 지점에서 재개
- 신규 onboarding 기본정보는 `성별 + 생년월일`
- 성별 선택지는 `남성 / 여성`만 제공하며 `응답 안 함`은 두지 않음
- 성별 UI는 기존 52px 높이를 유지한 **2등분 직접 선택 버튼**
- 생년월일은 화살표 없는 **텍스트필드**, placeholder/example `1999-01-01`, 기본 형식 의도 `YYYY-MM-DD`
- 나이/연령대를 직접 받지 않고 실제 생년월일을 저장
- 성별·생년월일은 recommendation matcher와 분리
- 첫 시작 방식은 `추천 루틴 받기 / 내 루틴 직접 만들기` 동등한 2개 경로
- 추천 입력은 `운동 목표 / 운동 경력 / 주당 가능일 / 운동 시간`
- 추천 4개 입력은 4개 풀스크린 wizard가 아니라 **추천 설정 한 화면 + 항목별 bottom sheet**
- 운동 목표 선택지: `근육 증가 / 체지방 감량 / 건강·체력 향상`
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
- 현재 웹 와이어프레임 v`2026-09-01.6`은 onboarding baseline으로 유지
- 장비 inventory는 초기 추천 설문에서 제외
- 초기 추천은 일반적인 상업 헬스장 환경을 가정하고 장비 불일치는 대체운동으로 처리
- 추천은 자유 생성 LLM보다 curated / QA-reviewed template matching을 우선
- 시작 중량은 성별/생년월일로 고정 추정하지 않고 첫 실제 workout에서 calibration

### Deferred final onboarding policy pass

아래는 현재 제품 진행을 막지 않고 **구현/출시 전 마지막 onboarding 정책 패스**에서 함께 결정한다.

- 최소 가입 연령
- 이용약관 acknowledgement 위치
- 개인정보처리방침 / 개인정보 수집 고지 위치
- Google/Kakao provider consent와 Fitness 자체 약관/개인정보 고지의 최종 관계
- 기본정보 화면에 법적 고지를 통합할지, 별도 confirmation state가 필요한지

현재 방향성은 별도 약관 화면을 불필요하게 추가하지 않고 기본정보 단계에 자연스럽게 통합할 수 있는지 우선 검토하는 것이지만, 아직 최종 정책으로 고정하지 않는다.

### Product Owner visual review

- 2026-09-01: 신규 사용자 온보딩의 큰 구조를 Product Owner가 승인함.
- 2026-09-01: `목표 / 경력 / 주당 가능일 / 시간`을 개별 풀스크린으로 두지 않고 한 화면 리스트 + bottom sheet로 선택하는 구조를 승인함.
- 2026-09-01: 경력 선택지와 주당 가능일 1~7일을 확정함.
- 2026-09-01: 운동 시간 `30 / 45 / 60 / 90분 이상`을 확정함.
- 2026-09-01: 운동 목표 `근육 증가 / 체지방 감량 / 건강·체력 향상`을 확정함.
- 2026-09-01: 기본정보는 `성별(남성/여성) + 생년월일`로 확정하고 `응답 안 함`을 두지 않기로 함.
- 2026-09-01: 성별은 2등분 버튼, 생년월일은 `1999-01-01` placeholder의 텍스트필드로 확정함.
- 2026-09-01: onboarding 핵심 UX는 이 수준에서 닫고 약관/개인정보/최소연령은 마지막 정책 패스로 미룸.
- 2026-09-01: routine split 매핑은 보류함.

## Next planning focus — Home

Onboarding 다음에는 **활성 운동이 없는 Home 기본 상태**를 정리한다.

이미 확정되어 다시 열지 않는 것:

- bottom nav `홈 / 루틴 / 분석 / 설정`
- 운동 진행 중이면 Home에 active-workout return state 노출
- active-workout return state는 Home에만 노출

다음 검토 대상:

- 신규 사용자가 onboarding/self-build 이후 처음 Home에 들어왔을 때 보이는 내용
- Home의 primary workout-start CTA / hierarchy
- saved/recommended routine 노출 방식
- routine이 하나도 없는 empty state
- weekday schedule이 없을 때 `오늘의 운동` 대신 `다음 운동`을 어떻게 보여줄지

추천 결과 UX는 prescribed frequency -> split mapping이 현재 보류 중이므로 억지로 먼저 진행하지 않는다.

## No-drift rule

앞으로 기획/와이어프레임 작업에서 다음을 금지한다.

- 대화 중 임시 HTML을 새로운 기준본처럼 사용
- 기존 production deployment의 HTML을 역으로 복사해 source로 삼기
- 별도 Product Owner-facing Vercel URL 생성
- 임시 wrapper / compression bootstrap / 이전 deployment URL dependency로 production을 구성
- Figma 디자인 시스템을 확인하지 않고 와이어프레임 공통 스타일을 임의 재설정
- GitHub source를 갱신하지 않은 채 runtime만 수정

와이어프레임 변경은 반드시 `product/wireframe/README.md`의 순서를 따른다.
