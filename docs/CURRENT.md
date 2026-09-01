# CURRENT — Fitness Project

**Updated:** 2026-09-01

## Current mode

`PRODUCT / UX PLANNING — RECOMMENDATION RESULT CARD CONTENT REVIEW · ONBOARDING BASELINE COMPLETE`

신규 사용자 onboarding 입력 UX는 현재 기준으로 충분히 확정했다. 현재 기획 초점은 **추천 설정 완료 후 사용자가 실제 추천 프로그램을 선택하는 결과 단계**다.

Top-level IA와 active-workout navigation/state 규칙은 기존 확정안을 그대로 유지한다. Cursor implementation은 아직 승인되지 않았다.

## Product / planning authority

기획·UX·와이어프레임 작업 공통 진입점:
- `product/README.md`

Canonical sources:
- `docs/08_DECISIONS.md`
- `docs/13_SCREEN_DESIGN_DECISIONS.md`
- `docs/14_IA_STORYBOARD.md`
- `docs/23_RECOMMENDATION_SYSTEM_V1.md`
- `product/wireframe/index.html`
- `product/wireframe/README.md`

## Onboarding baseline — COMPLETE FOR CURRENT PLANNING PASS

New account:

`로그인 -> 기본정보 -> 시작 방식 -> 추천 설정 1화면`

Existing account:

`로그인 -> Home`

Incomplete first-run onboarding resumes from persisted account state.

### Basic profile information

Confirmed:

- 성별: `남성 / 여성`
- 성별 UI: 기존 52px 높이 영역을 2등분한 직접 선택 버튼
- `응답 안 함` 없음
- 생년월일: full date of birth
- 생년월일 UI: 화살표 없는 텍스트필드
- placeholder/example: `1999-01-01`
- primary format intent: `YYYY-MM-DD`
- 성별/생년월일은 recommendation matcher와 분리
- 시작 중량 추정에 사용하지 않음
- 재로그인/재설치/다른 기기 로그인만으로 다시 입력시키지 않음

Implementation-detail follow-up:

- input masking / invalid-date / future-date / field error behavior
- exact keyboard behavior

### Legal / privacy / minimum-age policy — DEFERRED

출시 전 마지막 onboarding 정책 패스에서 함께 결정한다.

- minimum account age / age restriction
- Terms of Use acknowledgement placement
- Privacy Policy / personal-data disclosure placement
- Google/Kakao provider consent와 Fitness-owned terms/privacy notices의 관계
- 기본정보 화면 통합 vs 별도 confirmation state

현재 방향성은 불필요한 standalone legal screen을 피하는 것이지만 아직 최종 정책은 아니다.

## Recommendation intake — CONFIRMED

Start mode:

- `추천 루틴 받기`
- `내 루틴 직접 만들기`

Recommendation settings rows:

1. 운동 목표
2. 운동 경력
3. 주당 가능일
4. 운동 시간

각 row는 bottom sheet를 열며, 네 값이 모두 입력되면 `내 루틴 추천받기` CTA가 활성화된다.

Confirmed goal choices:

- `근육 증가`
- `체지방 감량`
- `건강·체력 향상`

Confirmed training-experience choices:

- `처음이에요`
- `6개월 미만이에요`
- `6개월~1년 미만이에요`
- `1년 이상이에요`

Confirmed weekly availability:

`1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`

선택값은 현실적으로 확보 가능한 **최대 일수**다.

Confirmed workout duration:

`30분 / 45분 / 60분 / 90분 이상`

선택값은 세트 간 휴식을 포함하고 별도 유산소는 제외한 **최대 웨이트 트레이닝 세션 시간 예산**이다.

Confirmed experience-based weekly frequency ceiling:

- 처음 -> max 3/week
- < 6 months -> max 4/week
- 6 months to < 1 year -> max 5/week
- 1+ year -> max 6/week

Baseline ceiling:

`min(user weekly availability, experience cap)`

## Recommendation result — CONFIRMED BASELINE

추천 설정 완료 직후 Home으로 가지 않는다.

Confirmed flow:

`추천 설정 완료 -> 추천 결과 전용 화면 -> 3개 후보 카드 캐러셀 -> 이 루틴으로 시작하기 -> 선택 프로그램 저장 -> Home`

Rules:

- 결과 선택 화면은 onboarding 입력 화면 및 일반 Home UI와 **다른 전용 visual state**로 구성
- 사용자가 하나를 수락하기 전에는 추천 프로그램을 `내 루틴`에 저장하지 않음
- 결과 화면에서 normal bottom navigation은 노출하지 않음
- 한 번에 한 후보가 active card
- 좌우 후보 카드 일부가 보여 horizontal swipe 가능성을 전달
- pagination으로 1/3, 2/3, 3/3 표시
- CTA `이 루틴으로 시작하기`는 현재 active candidate에 적용
- 뒤로 가면 추천 설정을 다시 조정할 수 있음

Three-candidate baseline:

1. `기본형` — 균형 잡힌 기본 추천, `가장 추천` 표현 가능
2. `간결형` — 구성 단순화 / 상대적으로 짧은 세션 지향
3. `볼륨형` — 동일 사용자 허용 범위 안에서 볼륨 강조

Important:

- `초급 / 중급 / 고급` 선택지가 아님
- 세 후보 모두 사용자의 운동 경력과 입력 조건 안에서 pre-filter되어야 함
- swipe로 experience ceiling을 우회할 수 없음
- 정확한 후보별 세트/운동 수/볼륨 차이는 아직 미확정

### Candidate card content — CONFIRMED SHAPE

추천 결과 카드는 프로그램 성격 설명만 보여주면 안 된다.

사용자는 선택 전에 카드 안에서 **실제로 어떤 운동을 하게 되는지** 확인할 수 있어야 한다.

Required content shape:

- candidate type/name
- frequency / session-time context
- multi-day 프로그램이면 `DAY 1 / DAY 2 / DAY 3` 같은 day selector
- selected day의 실제 운동명 목록
- 각 운동의 반복수 × 세트수 prescription, 예: `8–12회 × 3세트`
- CTA `이 루틴으로 시작하기`

Current wireframe의 운동명/반복수/세트수는 **UI 구조 확인용 샘플**이며 아직 프로그램 정책이 아니다. 실제 운동 composition은 exercise DB, duration budget, template QA, split policy가 확정될 때 결정한다.

Older `one primary recommended routine` / `single recommended routine` presentation wording in DEC-006 / DEC-014 is superseded by `docs/23_RECOMMENDATION_SYSTEM_V1.md`의 2026-09-01 result policy. Curated matching과 선택 후 Home 이동 원칙은 유지한다.

## Explicit hold

다음은 계속 **ON HOLD**:

- prescribed weekly frequency -> routine split / routine count mapping
- previously discussed 1–6 day split table

현재 추천 결과 와이어프레임에서 `주 3일`을 예시로 보여줄 수 있으나, 이는 UI 개념 설명용이며 위 매핑을 확정하지 않는다.

## Canonical wireframe

GitHub source:
- `product/wireframe/index.html`

Current target version for this pass:
- `2026-09-01.9`

Production:
- `https://liftly-wireframe.vercel.app`

Current visual scope:

- confirmed onboarding baseline
- recommendation-result dedicated carousel review
- each candidate card contains day selector + exercise prescription list

Previous Home default-state review is paused/removed from current wireframe so recommendation acceptance flow can be settled first.

Canonical Figma:
- `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

## Next decision after wireframe review

추천 결과 화면을 본 뒤 다음 하나를 결정한다:

**카드 안에서 하루 운동 구성 전체를 어느 깊이까지 보여줄지, 그리고 `기본형 / 간결형 / 볼륨형`의 실제 프로그램 차이를 무엇으로 만들지.**

그 다음에 Home 기본 상태 검토로 돌아간다.

## Open later

- onboarding legal/privacy/minimum-age final policy pass
- exact program effects of each confirmed goal
- workout-duration -> exact exercise/set budget
- other experience effects beyond frequency ceiling
- split/routine-count mapping — **ON HOLD**
- deterministic template matching / tie-break rules
- substitution rules
- first-workout handoff / load calibration
- post-acceptance Home default-state design

## Existing IA / workout rules remain valid

- primary bottom navigation: `홈 / 루틴 / 분석 / 설정`
- exercise library is contextual, not a primary tab
- one active workout at a time
- active session survives restart until finish/discard
- Home exposes active-workout return state
- Routine/Analysis/Settings remain usable while workout is active under existing lock rules
- structural edits during workout apply to current session and may prompt saved-routine update at completion
- load/reps changes are performance records and do not trigger routine-structure update prompts

## Canonical source rule

GitHub remains Source of Truth. For planning/wireframe work, start from `product/README.md`. `product/wireframe/index.html` is the canonical web-wireframe source; Vercel runtime is never a separate source of truth.
