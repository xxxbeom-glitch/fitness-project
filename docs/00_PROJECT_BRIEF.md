# 00 PROJECT BRIEF

**Status:** ACTIVE — V2 ALIGNED
**Updated:** 2026-09-01

## Product definition — CONFIRMED

G Fit은 **운동 루틴을 만들고, 실행 기록을 쌓고, 지속적으로 관리하는 general-purpose weight-training tracker**다.

Primary early target:
- 일반적인 헬스 이용자
- 숙련자

초보자도 사용할 수 있어야 하지만 제품 전체를 초보자 교육용으로 단순화하지 않는다.

Core product principle:

> 사용자가 운동을 빠르게 시작하고, 최소한의 마찰로 기록하며, 쌓인 데이터가 다음 운동과 이후 개인화에 계속 가치를 더하게 한다.

## Core user loop

`오늘/다음 운동 확인 -> 운동 시작 -> 이전 기록 확인 -> 중량/횟수/세트 기록 -> 휴식 -> 운동 종료 -> 요약/성장 확인 -> 다음 운동`

## Core problems

### Routine / program start

사용자는 두 방식 모두를 동등하게 사용할 수 있어야 한다.

- 직접 루틴 만들기
- G Fit이 미리 준비한 추천 루틴 사용하기

추천 루틴은 first-run 개인화 matcher 결과가 아니라 **G Fit이 미리 구성하고 검수한 ready-made routine**이다.

### Workout logging

During training, logging becomes annoying when users must:
- repeatedly re-enter the same weight/reps
- navigate away to see previous performance
- follow a rigid exercise order
- edit a session through too many screens
- keep touching a phone during rest periods
- trust an app that may lose the active session

## Product principles — CONFIRMED

### 1. Do not interrupt training

Target flow:

`Start workout -> see prior performance -> confirm/edit kg/reps -> complete set -> rest timer -> next set`

### 2. User controls the workout

Users can:
- reorder exercises
- add/remove exercises during a session
- add/remove sets
- correct completed sets
- create custom exercises

Recommendation / personalization may suggest but must not silently change routines or completed history.

### 3. Historical data compounds in value

Records should enable:
- prior-performance comparison
- PRs
- progress trends
- workout-volume analysis
- later personalization
- later AI-assisted explanation where useful

### 4. AI is not the product identity

G Fit is not an AI coach-first product.

Use structured product logic when it is more reliable, testable, faster, and cheaper. AI/LLM may later help interpret user workout data or explain recommendations.

### 5. Reliability is core

Active workout data must survive interruption/restart whenever technically feasible. Offline workout logging must remain usable without a network dependency.

## First-run onboarding — CONFIRMED

New account:

`로그인 -> 성별 + 생년월일 -> Home`

The old recommendation questionnaire / result carousel is superseded.

Home can expose:
- G Fit 추천 루틴 cards
- 내 루틴 만들기

Example recommended-routine cards:
- 무분할 전신 루틴
- 상체 루틴
- 하체 루틴

Each card represents one complete ready-made routine. Exact detail / save / start interaction remains to be decided.

## Home direction — CONFIRMED

Use an action-first dashboard.

Information priority:
1. what should I do now?
2. how did recent training go?
3. am I progressing?

For a user with routines, today's/next workout is more important than recommendation content.

## Exercise content direction

Exercise DB and visual guidance are long-term product assets.

Current visual baseline:
- one neutral anatomy-inspired 3D avatar family
- no required male/female duplicate exercise asset set
- grip visuals where they materially improve exercise understanding
- reviewed YouTube guidance may complement proprietary visuals where appropriate

## MVP — CONFIRMED RESET

### Routine management
- create/edit/delete routines
- use G Fit recommended ready-made routines
- add exercises
- reorder exercises
- configure basic set/rep prescription
- optional weekday assignment

### Custom exercises
- exercise name
- target body area / primary muscle
- equipment/type
- independent prior-performance history

### Active workout
- start routine/workout
- enter weight and reps
- show previous performance inline
- complete/uncomplete sets
- add/remove sets
- edit completed data
- add/remove/reorder exercises
- automatic rest timer
- recover active session after interruption/restart

### History / basic analysis
- save completed/partial workout appropriately
- date-based history
- prior performance by exercise
- simple PR indication
- workout summary dashboard
- basic progress analysis

### Basic settings
- kg/lb
- required profile fields from first run
- optional later profile/social settings

## Explicitly out of MVP

These do not block first release:

- AI coaching/chat primary interface
- automatic progressive overload
- RPE / RIR advanced logging
- advanced analytics
- social feed
- workout photos / likes / routine sharing
- comments / DM
- Apple Watch / Wear OS
- InBody / Health Connect / Apple Health
- nutrition
- trainer/PT tools
- paid subscription

## Post-MVP direction

### Personal Intelligence
Use actual workout history to provide suggestions such as:
- load increase opportunities
- stalled exercise patterns
- muscle-group volume changes
- next-workout preparation

Suggestions remain user-controlled.

### Social
Potential scope:
- workout photos
- likes
- routine sharing
- public/private choices controlled by the user

Users who do not use social should not be forced to set a custom nickname or profile photo. Defaults may be assigned automatically and edited later.

## MVP validation question

> After creating or adopting a routine and completing one workout, does the user choose G Fit again for the next workout instead of returning to the previous method?

## Current authority

For the latest reset details, see:
- `docs/24_PRODUCT_DIRECTION_V2.md`
- `docs/CURRENT.md`
