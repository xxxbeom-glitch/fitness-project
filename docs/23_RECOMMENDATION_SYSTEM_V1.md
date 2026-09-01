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

## Demographic profile data — SEPARATE FROM MATCHER

Sex/gender and age belong to broader new-user profile onboarding for potential future audience segmentation / advertising use.

- they are not recommendation-matcher inputs at this stage
- they are not used to guess starting working weight
- returning users are not asked again merely because they relogin
- exact field shape / consent / age-floor / ad-data treatment remain open before implementation or personalized-ad activation

## Current wireframe scope — CONFIRMED

Canonical wireframe currently visualizes only the onboarding flow:

`로그인 -> 기본정보 -> 시작 방식 -> 추천 설정 1화면 + bottom sheets -> 입력 완료 CTA 상태`

It now includes the confirmed training-experience options and weekly-availability 1–7 day sheet.

It intentionally does **not** visualize:

- recommendation-result details
- prescribed frequency -> routine split / routine count
- unconfirmed goal options as final
- unconfirmed workout-duration options as final

## Product Owner hold — 2026-09-01

`prescribed weekly frequency -> routine split / routine count` mapping is **ON HOLD** by Product Owner request.

Do not continue or wireframe the previously discussed 1–6 day split table until Product Owner explicitly resumes this decision.

The already-confirmed experience-based frequency ceilings remain recorded policy; only the downstream split mapping is paused.

## Remaining open decisions

- exact sex/gender and age field shape / consent treatment
- final goal options and program effects
- other downstream effects of experience bands beyond weekly ceiling
- prescribed frequency -> routine split / routine count **ON HOLD**
- workout duration -> exercise/set budget
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
