# 24 PRODUCT DIRECTION V2

**Status:** CONFIRMED BASELINE — PRODUCT RESET
**Updated:** 2026-09-02

## Purpose

2026-09-01 Product Owner review에서 G Fit의 상위 제품 방향을 다시 정리했다.

이 문서는 기존 recommendation-heavy onboarding / result-carousel 기획보다 최신이다. 충돌 시 이 문서와 `docs/CURRENT.md`를 우선한다.

Working product name: `G Fit` (`Go Fitness`) — **가칭이며 출시 브랜드 확정이 아님**.

## Product identity — CONFIRMED

G Fit은 **운동 루틴을 만들고, 실행 기록을 쌓고, 지속적으로 관리하는 웨이트 트레이닝 앱**이다.

Primary early target:
- 일반적인 헬스 이용자
- 숙련자

초보자도 사용할 수 있어야 하지만, 제품 전체를 초보자 교육용으로 단순화하지 않는다.

Core repeated value:
- 오늘/다음 운동을 빠르게 시작
- 중량 / 횟수 / 세트 / 휴식을 간단히 기록
- 이전 기록과 누적 데이터를 직관적으로 확인
- 기록이 쌓일수록 이후 개인화 제안의 가치가 커짐

## Product layers — CONFIRMED DIRECTION

G Fit은 다음 네 층으로 확장한다.

1. **Core Tracker** — 루틴 생성/관리, 운동 실행, 기록, 기본 분석
2. **Exercise / Program Content** — 자체 운동 DB, 운동 가이드 에셋, G Fit 제공 루틴
3. **Personal Intelligence** — 실제 운동 기록 기반 개인화 제안 및 데이터 해석
4. **Social** — 운동 사진, 좋아요, 루틴 공유 등

첫 출시는 1번 Core Tracker를 완성하는 것이 우선이며, 2번의 핵심 콘텐츠가 이를 지원한다. 3번과 4번은 제품 구조에는 고려하되 첫 출시 blocker가 아니다.

## MVP — CONFIRMED RESET

첫 출시 MVP의 핵심 범위:

- 루틴 생성 / 수정 / 삭제 / 관리
- G Fit이 준비한 추천 루틴을 사용 가능
- 운동 시작 / 진행 / 종료
- 기본 운동 기록: `중량 / 횟수 / 세트 / 휴식`
- 이전 수행 기록 확인
- 기본 운동 이력 / 성장 데이터
- 운동 종료 후 다양한 정보를 한눈에 보는 **운동 요약 대시보드**
- 기본 분석

현재 MVP에서 제외:

- RPE / RIR 같은 고급 체감 강도 입력
- AI 코치/chat을 주요 인터페이스로 제공
- 자동 루틴 수정
- 자동 progressive-overload 적용
- 소셜 피드 / 사진 / 좋아요 / 루틴 공유
- 유료화

유료화는 전체 기능 정의 후 별도 결정한다.

## Core user loop — CONFIRMED

`오늘/다음 운동 확인 -> 운동 시작 -> 세트 기록 -> 운동 종료 -> 요약/성장 확인 -> 다음 운동에서 이전 데이터 재사용`

Home의 핵심 우선순위:

1. 오늘 또는 다음 운동을 바로 시작
2. 최근 운동/성장 상태를 빠르게 확인

루틴이 존재하는 일반 Home에서는 추천 콘텐츠보다 사용자의 현재 운동 행동이 우선한다.

### Home primary action — CONFIRMED 2026-09-02

Home의 가장 중요한 역할은 **사용자가 지금 할 운동을 바로 시작하거나, 진행 중인 운동으로 바로 돌아가게 하는 것**으로 확정한다.

동일한 Home 구조에서 최상단 행동만 상태에 따라 바뀐다.

- 루틴 없음 -> `추천 루틴` / `내 루틴 만들기`
- 루틴 있음 + 요일 미지정 -> `다음 운동`
- 루틴 있음 + 요일 지정 -> `오늘의 운동`
- active workout 존재 -> `운동 계속하기`

상세 그래프와 깊은 분석은 `분석` 탭으로 보내고 Home에서는 운동 시작/복귀가 묻히지 않게 한다.

카드 모양, 이번 주 상태의 정확한 지표, 최근 운동의 정보량은 후속 UI 단계에서 조정할 수 있다. 이 세부 표현을 바꾸더라도 **Home의 최상위 역할은 운동 시작/복귀**라는 방향은 유지한다.

## Routine model — CONFIRMED DIRECTION

사용자는 두 방식을 모두 동등하게 사용할 수 있다.

- **내 루틴 직접 만들기**
- **G Fit 추천 루틴 사용하기**

사용자-facing 용어는 `프리셋`이 아니라 **`추천 루틴`**을 사용한다.

다만 초기 `추천 루틴`은 사용자 데이터를 바탕으로 계산된 개인화 추천이 아니다.

정의:

> G Fit이 미리 구성하고 검수한 ready-made routine을 사용자가 선택해서 사용하는 기능.

개인 맞춤이라고 오해시키는 카피는 사용하지 않는다.

### Home recommendation presentation — CONFIRMED

신규 사용자는 onboarding 완료 후 바로 Home으로 이동한다.

Home에는 G Fit이 미리 준비한 여러 **추천 루틴 카드**를 노출할 수 있다.

- 카드 1개 = 완성된 루틴 1개
- 예시: `무분할 전신 루틴`, `상체 루틴`, `하체 루틴` 등
- 사용자는 원하는 카드를 선택해서 사용할 수 있음
- 별도의 category-first questionnaire를 먼저 통과할 필요 없음
- `내 루틴 만들기`도 함께 제공

추천 카드를 탭한 뒤 정확히 어떤 상세/확인 단계를 거쳐 운동을 시작하는지는 아직 OPEN이다.

## First-run onboarding — CONFIRMED RESET

New account baseline:

`로그인 -> 기본정보 -> Home`

기존의:

`시작 방식 -> 운동 목표 / 경력 / 주당 가능일 / 운동 시간 -> 추천 결과 캐러셀`

흐름은 **폐기 / superseded** 한다.

### Required profile fields

현재 first-run 필수 정보:

- 성별: `남성 / 여성`
- 생년월일: full date of birth

성별과 생년월일은 시작 중량을 추정하는 용도로 사용하지 않는다.

생년월일의 연령 정책/법적 목적, 성별 데이터의 향후 개인화 사용 범위와 고지 방식은 출시 전 policy pass에서 재검증한다.

### Social identity defaults

소셜 기능을 쓰지 않는 사용자에게 닉네임/프로필 사진 설정을 강제하지 않는다.

계정에는 기본값을 자동 부여한다.

- 기본 생성 닉네임
- 기본 프로필 이미지
- 사용자가 원할 때 Settings에서 변경

정확한 자동 닉네임 format은 TBD. 공개 nickname과 내부 immutable user ID는 동일 개념으로 취급하지 않는다.

## Exercise visual asset direction — CONFIRMED

운동 시범 에셋은 profile sex에 따라 male/female 모델을 매핑하지 않는다.

Baseline:

- **중성적으로 보이는 해부학 느낌의 3D 아바타 1계열**
- 운동 동작 자체와 타깃 부위의 이해에 집중
- male/female 두 벌의 동일 운동 asset 제작은 baseline에서 요구하지 않음
- social profile image와 exercise-demo avatar는 완전히 별개

운동 DB/에셋은 장기 제품 자산으로 직접 구축하는 방향을 검토한다.

우선순위를 나눠 핵심 운동부터 제작하고 출시 후에도 지속 업데이트할 수 있다.

그립 차이가 실제 수행 이해에 중요한 운동은 별도 그립 시각자료를 제공하는 방향을 유지한다. 정확한 exercise identity / grip-variant data model은 별도 결정한다.

## Exercise guidance — CONFIRMED DIRECTION

운동 방법은 자체 시각 에셋을 중심으로 이해시키되, 필요하면 검수된 YouTube 영상을 가이드 콘텐츠로 활용할 수 있다.

YouTube embed/API/삭제/광고/콘텐츠 품질 정책은 구현 전에 별도 검증한다.

## Active workout presentation — CONFIRMED 2026-09-02

운동 중 기록 화면의 기본 구조는 **전체 운동을 한 화면에서 이어서 보고, 현재 운동만 펼쳐서 기록하는 방식**으로 확정한다.

기본 원칙:

- 현재 운동은 펼쳐서 `세트 / 이전 기록 / kg / 횟수 / 완료`를 한곳에 표시
- 다음 운동들은 같은 화면 아래에서 접힌 상태로 계속 보이게 함
- 사용자는 화면을 따로 넘기지 않고 다음 운동을 확인하거나 건너뛰기 쉬워야 함
- 이전 수행 기록은 입력 영역 가까이에 둠
- 세트 완료 후 휴식 타이머는 기록 화면을 가리지 않는 작은 형태로 표시
- 운동 하나마다 별도 화면처럼 이동하는 구조를 기본값으로 사용하지 않음

이 구조를 선택한 이유는 단순한 화면보다 실제 운동 중 **기록 속도, 다음 운동 확인, 순서 변경과 건너뛰기 자유도**를 더 중요하게 보기 때문이다.

처음 하는 운동의 중량 안내와 첫 세트 체감 피드백도 별도 화면으로 보내지 않고 이 Active workout 안에서 짧게 제공하는 기존 방향을 유지한다.

세부 카드 크기, 입력 컨트롤 모양, 접힘/펼침 애니메이션은 후속 UI 단계에서 조정할 수 있다.

## Personalization / AI — CONFIRMED DIRECTION

G Fit의 제품 정체성은 `AI fitness coach`가 아니다.

AI 또는 개인화 기능은 **사용자의 실제 운동 데이터를 해석하는 보조 레이어**다.

Core rule:

> 개인화 기능은 제안할 수 있지만 사용자 기록이나 루틴을 자동으로 변경하지 않는다.

가능한 장기 예:

- 최근 수행 기록을 바탕으로 중량 증가 제안
- 특정 부위의 최근 운동량 감소/부족 신호
- 장기간 같은 중량/반복수 정체 감지
- 다음 운동 준비 제안

개인화는 운동 전 / 중 / 후 / Home에 각각 일부 들어갈 수 있다.

우선순위 방향:

`운동 후 분석 > 운동 전 준비 > Home 장기 인사이트 > 운동 중 최소 개입`

운동 중에는 기록 흐름을 방해하지 않도록 개입을 최소화한다.

LLM 없이 구조화된 규칙/통계로 더 안정적으로 해결 가능한 문제는 굳이 LLM을 사용하지 않는다.

## Post-workout / Analysis — CONFIRMED DIRECTION

운동 종료 후 단순 완료 화면보다 **다양한 데이터를 직관적으로 담은 요약 대시보드**를 제공하는 방향이다.

후보 데이터 예:

- 운동 시간
- 총 세트
- 총 볼륨
- 부위별 수행량
- PR
- 이전 수행 대비 변화
- 주간 누적
- 성장 추세

정확한 MVP 지표와 계산법은 Analysis 기획 단계에서 확정한다.

## Social — POST-MVP CONFIRMED DIRECTION

소셜 기능은 장기 제품 축으로 필요하다.

현재 방향:

- 운동 사진 업로드
- 좋아요
- 사용자 루틴 공유
- 다른 사용자의 공개 루틴 탐색/활용 가능성

운동 기록/루틴/게시물의 공개 여부는 사용자가 선택할 수 있어야 한다.

세부 범위인 팔로우, 댓글, 신고/차단, 피드 ranking, 루틴 복사 정책 등은 Social planning pass에서 결정한다.

## Existing foundations retained

다음 기존 결정은 새 방향과 충돌하지 않으므로 유지한다.

- primary navigation: `홈 / 루틴 / 분석 / 설정`
- weekday scheduling is optional
- one active workout at a time
- active workout must survive interruption/restart
- active workout remains flexible: exercise/set changes are allowed
- prior performance should be immediately available during logging
- workout records must not be silently changed by recommendation/AI
- offline-first active-workout persistence and safe sync principles
- custom exercises remain important because gym equipment differs

## Superseded recommendation planning

다음 기존 기획은 현재 방향으로 **superseded** 한다.

- recommendation-first onboarding branch
- recommendation input questionnaire: goal / experience / weekly availability / workout duration
- experience-based recommendation ceiling as a first-run matcher requirement
- dedicated recommendation-result screen before Home
- three-candidate `기본형 / 간결형 / 볼륨형` carousel
- recommendation-result skip/exit UX problem
- onboarding recommendation questionnaire -> curated matcher requirement

향후 개인화 추천을 다시 설계할 수 있으나, first-run onboarding의 전제는 아니다.

## Next planning sequence

화면 polish보다 제품 구조를 먼저 확정한다.

1. Account / Onboarding baseline 마무리
2. Home structure
3. Routine / G Fit recommended-routine system
4. Exercise DB / visual assets / exercise identity
5. Active workout execution
6. Post-workout summary dashboard
7. Analysis
8. Settings
9. AI / personalization planning pass
10. Social planning pass
11. Legal / privacy / minimum-age / platform-policy final pass
12. Monetization after core feature definition

현재 확정된 큰 방향:

- Home -> 운동 시작/복귀를 최우선
- Active workout -> 전체 운동을 한 화면에서 보고 현재 운동만 펼쳐 기록

**현재 다음 결정:** 추천 루틴 카드를 누른 뒤 `상세 확인 -> 저장/시작`을 어떤 방식으로 연결할지.

Implementation / Cursor handoff는 이 상위 기획이 충분히 정리되기 전까지 시작하지 않는다.
