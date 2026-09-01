# LIFTLY Product Planning Hub

**Status:** ACTIVE
**Updated:** 2026-09-01

이 폴더는 Fitness Project의 **기획·UX·와이어프레임 작업 진입점**이다.

중요: 이 폴더가 기존 `docs/`의 정책/Decision을 복제해서 별도 Source of Truth를 만드는 것은 아니다. 제품 정책과 결정의 최종 권위는 기존 GitHub 문서에 있고, 이 Hub는 그 문서들과 와이어프레임/Vercel/Figma를 연결한다.

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

Figma는 시각 디자인 기준이다. 제품 정책/UX 의미가 GitHub 확정 Decision과 충돌하면 GitHub가 우선한다.

### Cumulative wireframe

`https://liftly-wireframe.vercel.app`

Product Owner에게 보여주는 누적 웹 와이어프레임은 이 URL 하나만 사용한다.

Current wireframe version: `2026-09-01.10`

## Onboarding planning snapshot — BASELINE COMPLETE

- 인증 필요
- 신규 계정 최초 로그인만 onboarding 진행
- 기존 계정 재로그인 / 재설치 / 다른 기기 로그인은 onboarding을 건너뛰고 Home
- 미완료 onboarding은 저장된 중단 지점에서 재개
- 기본정보는 `성별 + 생년월일`
- 성별 `남성 / 여성`, `응답 안 함` 없음
- 성별 UI는 52px 높이 2등분 직접 선택 버튼
- 생년월일은 화살표 없는 텍스트필드, placeholder `1999-01-01`
- 성별·생년월일은 recommendation matcher와 분리
- 시작 방식은 `추천 루틴 받기 / 내 루틴 직접 만들기` 동등한 2개 경로
- 추천 입력은 `운동 목표 / 운동 경력 / 주당 가능일 / 운동 시간`
- 추천 입력은 한 화면 list + bottom sheet 구조
- 목표: `근육 증가 / 체지방 감량 / 건강·체력 향상`
- 경력: `처음이에요 / 6개월 미만이에요 / 6개월~1년 미만이에요 / 1년 이상이에요`
- 주당 가능일: `1일`~`7일`, 현실적인 최대 일수
- 운동 시간: `30분 / 45분 / 60분 / 90분 이상`, 최대 웨이트 세션 시간 예산
- 장비 inventory는 초기 추천 설문에서 제외
- 초기 추천은 상업 헬스장 환경을 가정하고 장비 불일치는 대체운동으로 처리
- 추천은 curated / QA-reviewed template matching, free-form LLM generation 아님
- 시작 중량은 성별/생년월일로 추정하지 않고 첫 실제 workout에서 calibration

## Recommendation result — CURRENT FOCUS

Product Owner가 2026-09-01에 다음 방향을 승인했다.

`추천 설정 완료 -> 추천 결과 전용 화면 -> 3개 후보 카드 캐러셀 -> 이 루틴으로 시작하기 -> 선택 프로그램 저장 -> Home`

Current baseline:

- 결과 화면은 onboarding과 normal Home UI와 다른 전용 visual state
- 선택 전에는 추천 프로그램을 `내 루틴`에 저장하지 않음
- normal bottom navigation 없이 후보 선택에 집중
- horizontal card carousel
- 한 번에 하나의 프로그램 카드가 화면 content width를 거의 전부 사용
- 이전 side-peek card treatment는 제거
- pagination + swipe로 후보 전환
- 세 후보는 `기본형 / 간결형 / 볼륨형`
- `기본형`은 provisional `가장 추천` treatment 가능
- 세 후보는 `초급 / 중급 / 고급`이 아님
- 모두 같은 사용자의 경력/시간/제약 범위 안에서 pre-filter
- CTA `이 루틴으로 시작하기`는 active card에 적용
- 카드 안에서 DAY 단위 실제 운동 구성과 `반복수 × 세트수` 처방을 확인할 수 있어야 함
- 운동 행은 `운동명 | 반복수 × 세트수` 식으로 빠르게 scan 가능한 구성을 우선
- DAY selector는 탭으로 전환하고 후보 카드의 horizontal swipe와 중첩하지 않음
- 현재 와이어프레임 운동명/반복수/세트수는 UI 구조용 샘플이며 프로그램 정책 확정값이 아님

Current wireframe은 `주 3일`을 카드 구조 설명용 예시로 사용한다. 이는 실제 frequency/split 정책 확정이 아니다.

## Explicit hold

다음은 Product Owner 요청으로 계속 보류한다.

- prescribed weekly frequency -> routine split / routine count mapping
- previously discussed 1–6 day split table

이 보류를 추천 결과 UI 예시가 우회해서 확정하지 않는다.

## Deferred final onboarding policy pass

구현/출시 전 마지막 onboarding 정책 패스에서 결정:

- 최소 가입 연령
- 이용약관 acknowledgement 위치
- 개인정보처리방침 / 개인정보 수집 고지 위치
- Google/Kakao provider consent와 Fitness 자체 고지의 최종 관계
- 기본정보 화면 통합 vs 별도 confirmation state

## Next planning decision

현재 recommendation-result wireframe을 검토한 뒤:

**`기본형 / 간결형 / 볼륨형`을 실제 program variable에서 무엇으로 구분할지**를 결정한다.

그 다음 Home default-state 기획으로 돌아간다.

## No-drift rule

- 대화 중 임시 HTML을 새로운 기준본처럼 사용하지 않음
- production deployment HTML을 source로 역복사하지 않음
- 별도 Product Owner-facing Vercel URL을 만들지 않음
- 임시 wrapper / compression bootstrap / 이전 deployment URL dependency 금지
- Figma 확인 없이 공통 스타일 임의 reset 금지
- GitHub source 갱신 없이 runtime만 수정 금지

와이어프레임 변경은 `product/wireframe/README.md`의 update/deploy/read-back 순서를 따른다.
