# LIFTLY Cumulative Wireframe

**Status:** CANONICAL
**Wireframe version:** `2026-09-01.11`
**Updated:** 2026-09-01

## Canonical source

`product/wireframe/index.html`

이 파일이 웹 와이어프레임의 원본이다. 로컬 임시 파일, 채팅에 생성된 HTML, 이전 Vercel deployment HTML은 원본이 아니다.

## Current visual scope

현재 Product Owner 검토 범위는 **추천 결과 전용 카드 캐러셀**이다.

### Confirmed onboarding baseline

현재 화면에 계속 유지되는 확정 범위:

- 로그인
- 신규/기존 계정 분기
- 기본정보: `성별(남성/여성) + 생년월일`
- 성별 52px 높이 2등분 버튼
- `응답 안 함` 없음
- 생년월일 화살표 없는 텍스트필드
- placeholder `1999-01-01`
- 시작 방식: `추천 루틴 받기 / 내 루틴 직접 만들기`
- 추천 설정 한 화면: `운동 목표 / 운동 경력 / 주당 가능일 / 운동 시간`
- 목표: `근육 증가 / 체지방 감량 / 건강·체력 향상`
- 경력: `처음이에요 / 6개월 미만이에요 / 6개월~1년 미만이에요 / 1년 이상이에요`
- 주당 가능일: `1일`~`7일`
- 운동 시간: `30분 / 45분 / 60분 / 90분 이상`

### Recommendation result carousel — current review

Confirmed flow baseline:

`추천 설정 완료 -> 추천 결과 전용 화면 -> 3개 후보 카드 캐러셀 -> 이 루틴으로 시작하기 -> 선택 프로그램 저장 -> Home`

Current wireframe shows three carousel positions:

1. `기본형` active
2. `간결형` active
3. `볼륨형` active

Structural rules:

- recommendation result has a distinct visual state from onboarding and normal Home
- no normal bottom navigation before candidate acceptance
- no recommended routine is saved before `이 루틴으로 시작하기`
- one card is active at a time
- active program card uses nearly the full available screen content width
- side-peek cards are removed
- horizontal swipe/drag + `1 / 3`, `2 / 3`, `3 / 3` pagination communicate candidate switching
- result header is intentionally minimal: navigation + pagination + one head copy only
- onboarding-condition chips and auxiliary eyebrow/subcopy are removed from the result header
- CTA applies to the active card
- `기본형` may show `가장 추천`
- candidate types are not `초급 / 중급 / 고급`
- all candidates must remain inside the same user's experience/time constraints
- each candidate card exposes DAY selector + actual exercise names + repetition × set prescription
- DAY uses explicit controls rather than another horizontal swipe layer
- exercise rows prioritize scan speed with exercise name left / prescription right
- 카드 설명만 보고 수락하게 하지 않음

The wireframe uses `주 3일` and visible exercise prescriptions as **UI examples only**.

It does not confirm:

- any input -> prescribed frequency mapping
- 3-day split composition
- exact exercise names/order
- exact repetition/set prescription
- exact exercise count / set count
- exact parameter differences among `기본형 / 간결형 / 볼륨형`

### Deferred / outside current review

- post-acceptance Home default-state design
- prescribed frequency -> routine split / routine count — **ON HOLD**
- exact goal -> program variable effects
- duration -> exact exercise/set budget
- legal/privacy/minimum-age final onboarding policy

## Canonical runtime

- Production URL: `https://liftly-wireframe.vercel.app`
- Vercel project: `liftly-wireframe`
- Vercel project ID: `prj_w7P1KrlqbzDq9dBQ0UcFh2VuQipG`
- Vercel team ID: `team_cAq2nylL00z8u39kpinhZXQa`

Machine-readable binding: `product/wireframe/PROJECT_BINDING.json`

## Canonical Figma

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

웹 와이어프레임은 Figma visual language를 참고하되 제품 정책/UX 의미는 GitHub가 우선한다.

현재 주요 baseline:

- font: SUIT
- bg/default: `#0A0A0C`
- bg/surface: `#161618`
- border: `#232326`
- text/primary: `#F0F0F2`
- text/secondary: `#8E8E93`
- brand/primary: `#34D399`
- standard side padding: `20px`
- standard card/input radius: `12px`
- standard CTA height: `58px`
- standard input/control height: `52px`
- bottom-sheet top radius: `32px`
- bottom-sheet option row: `52px`

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

- `index.html` 존재
- `CANONICAL_WIREFRAME_VERSION` 존재
- HTML syntax가 유효함
- 이전 Vercel deployment hostname dependency 없음
- `DecompressionStream` 같은 임시 렌더링 우회 없음
- 핵심 CSS가 이전 deployment URL에 의존하지 않음
- 확정 화면을 이유 없이 제거하지 않음

## Runtime validation gate

- deployment state = `READY`
- canonical alias = `liftly-wireframe.vercel.app`
- canonical URL HTTP 200
- 최신 version marker 포함
- 현재 검토 화면 대표 문자열 포함
- `style.css` HTTP 200

## Stability rules

- Product Owner-facing wireframe URL은 하나만 유지한다.
- 폐기된 비교안은 source에서 제거한다.
- 아직 검토 중인 안은 `검토안`으로 명시한다.
- Figma를 그대로 복제하는 것이 아니라 UX 검토 구조를 visual language로 표현한다.
- 제품 정책을 와이어프레임이 임의로 바꾸지 않는다.
- 임시 deployment 조각을 서로 참조하지 않는다.
