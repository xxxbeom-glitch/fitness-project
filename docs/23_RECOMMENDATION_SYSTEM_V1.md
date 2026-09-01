# 23 RECOMMENDATION SYSTEM V1

**Status:** IN PROGRESS · SPLIT MAPPING ON HOLD
**Updated:** 2026-09-01

## Purpose

Define the recommendation system before recommendation-result UX is expanded. Screen-level UX must not outrun confirmed product rules.

## First-run eligibility gate — CONFIRMED

Onboarding is shown only for a genuinely new Fitness account that has not completed first-run setup.

- new account, first successful login -> first-run onboarding
- existing account that already completed onboarding -> Home
- reinstall / relogin / another device does not make an existing account new
- incomplete onboarding resumes from persisted account/onboarding state

## Recommendation intake baseline — CONFIRMED

Initial recommendation inputs:

1. goal
2. training experience
3. weekly training availability
4. preferred workout duration

Equipment inventory is not collected during initial intake. Initial recommendation is gym-first and assumes a broadly equipped commercial gym; equipment mismatch is handled later through substitution.

## Recommendation intake interaction — CONFIRMED

The four recommendation inputs are **not four consecutive full-screen onboarding steps**.

After `추천 루틴 받기`, the app opens one `추천 루틴 설정` screen with four rows:

- 운동 목표
- 운동 경력
- 주당 가능일
- 운동 시간

Interaction:

- row tap -> bottom sheet
- select value -> return to same settings screen
- selected value appears inline and can be changed again
- all four values remain visible together
- `내 루틴 추천받기` is disabled until all four required values exist
- once complete, CTA becomes active

The sheet reuses the established Figma unit-settings pattern: dim overlay, 32px top corners, 20px horizontal padding, 52px option rows, standard 58px CTA.

## Goal — CONFIRMED

User-facing options:

1. `근육 증가`
2. `체지방 감량`
3. `건강·체력 향상`

Product decision:

- `근육 증가` and `근력 향상` are not exposed as two separate first-run goal choices
- `근육 증가` is retained as the single muscle/performance-oriented onboarding goal
- `근력 향상` remains important in workout progression, but is handled later through load/repetition history and progression behavior rather than a separate onboarding branch
- this is a product-taxonomy simplification for MVP; it does **not** claim that hypertrophy and maximal-strength programming are physiologically identical
- exact downstream program differences among the three confirmed goals still need to be defined before implementation

## Training experience — CONFIRMED

User-facing options:

1. `처음이에요`
2. `6개월 미만이에요`
3. `6개월~1년 미만이에요`
4. `1년 이상이에요`

Intent:

- segment the first year more closely
- keep `1년 이상` broad for MVP
- experience is a supporting signal, not a complete skill/strength classification
- `1년 이상` does not automatically mean advanced lifter

### Experience-based weekly frequency ceiling — CONFIRMED

| Training experience | Maximum prescribed resistance-training sessions / week |
|---|---:|
| `처음이에요` | 3 |
| `6개월 미만이에요` | 4 |
| `6개월~1년 미만이에요` | 5 |
| `1년 이상이에요` | 6 |

Baseline ceiling:

`frequency ceiling = min(user weekly availability, experience cap)`

This is a ceiling, not a requirement to always prescribe the ceiling.

## Weekly availability — CONFIRMED

Question meaning:

`일주일에 현실적으로 최대 며칠까지 운동할 수 있나요?`

Options:

`1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`

Semantics:

- selected value = maximum realistic weekly availability
- it is not the exact number the app must prescribe
- prescribed training days must never exceed the selected maximum
- no specific weekday selection is required in this onboarding step
- weekday scheduling remains optional later

## Workout duration — CONFIRMED

Question meaning:

`한 번 운동할 때 현실적으로 얼마나 시간을 쓸 수 있나요?`

Options:

- `30분`
- `45분`
- `60분`
- `90분 이상`

Semantics:

- selected value = the user's realistic **maximum resistance-training session time**
- the value is a planning budget, not a promise that every session must last exactly that long
- set-to-set rest time is included in this budget
- separate cardio time is not included in this onboarding value
- the matcher may create a shorter session when appropriate, but should not routinely design a session that exceeds the selected time budget
- exact exercise-count / set-count allocation for each time bucket remains a later program-design decision

## Demographic profile data — CONFIRMED FIELD SHAPE / SEPARATE FROM MATCHER

The broader new-user profile onboarding collects the following required demographic/profile values:

- sex: `남성 / 여성`
- birth date: full date of birth rather than age band or manually entered current age

Product rules:

- there is no `응답 안 함` option for sex in the current product design
- sex and birth date are collected only in first-run profile onboarding and persisted to the account
- returning users are not asked again merely because they relogin, reinstall, or use another device
- sex and birth date are **not recommendation-matcher inputs** at this stage
- they are not used to guess starting working weight
- birth date may later support age calculation / age policy / audience segmentation, but the recommendation system must not present it as a training-quality input unless a later decision creates a real program effect
- exact date-entry control (calendar, wheel, segmented date fields, etc.) may be finalized during detailed UI/implementation design; the stored product value remains date of birth
- privacy disclosure, consent treatment, minimum-age policy, and any future personalized-ad use remain separate open policy work before advertising activation

## Current wireframe scope — CONFIRMED

Canonical wireframe visualizes only the onboarding flow:

`로그인 -> 기본정보 -> 시작 방식 -> 추천 설정 1화면 + bottom sheets -> 입력 완료 CTA 상태`

It includes:

- basic profile fields: `성별(남성/여성) + 생년월일`
- confirmed goal options `근육 증가 / 체지방 감량 / 건강·체력 향상`
- confirmed training-experience options
- confirmed weekly-availability 1–7 day sheet
- confirmed workout-duration `30 / 45 / 60 / 90분 이상` sheet

It intentionally does **not** visualize:

- recommendation-result details
- prescribed frequency -> routine split / routine count
- detailed exercise/set volume derived from workout duration

## Product Owner hold — 2026-09-01

`prescribed weekly frequency -> routine split / routine count` mapping is **ON HOLD** by Product Owner request.

Do not continue or wireframe the previously discussed 1–6 day split table until Product Owner explicitly resumes this decision.

The already-confirmed experience-based frequency ceilings remain recorded policy; only the downstream split mapping is paused.

## Remaining open decisions

- privacy/consent/minimum-age treatment for sex and birth date data
- exact downstream program effects of the confirmed goal choices
- other downstream effects of experience bands beyond weekly ceiling
- prescribed frequency -> routine split / routine count **ON HOLD**
- workout duration -> exact exercise/set budget
- recommendation output contract
- deterministic template matching / tie-break rules
- substitution rules
- recommendation-result presentation
- first-workout handoff / load calibration

## Constraints retained

- recommendation and self-build remain equal first-run entry modes
- recommendation uses curated / QA-reviewed templates, not free-form LLM generation
- weekday assignment remains optional
- initial recommendation remains gym-first
- starting working weight is not guessed from sex/gender
- first-load calibration happens inside the actual workout
- recommendations should favor common, understandable gym movements and practical substitutions
- accepted recommended routines converge into the same routine/workout/history system as self-built routines
