# 23 RECOMMENDATION SYSTEM V1

**Status:** IN PROGRESS
**Updated:** 2026-09-01

## Purpose

Define the recommendation system before continuing recommendation-flow wireframes. The system must make clear what user inputs are collected, what each input changes, how a reviewed routine template is selected, and what is shown to the user.

This document is the working source for recommendation-system design. Screen-level recommendation UX should not outrun these rules.

## First-run eligibility gate — CONFIRMED

Onboarding is shown only for a genuinely new Fitness account that has not completed first-run setup.

Entry behavior:

- new account, first successful login -> first-run onboarding
- existing account that already completed onboarding -> skip onboarding and go directly to Home
- reinstalling the app, signing in again, or signing in on another device does not make an existing account a new user
- if first-run onboarding was started but not completed, the account should resume the incomplete onboarding rather than being treated as a fully onboarded returning user

The gate must therefore be based on persisted account/onboarding state, not only a local `first launch` flag on the device.

First-run onboarding is the place where initial profile information and the recommendation/self-build entry decision are collected. Returning users should not be forced through those questions again merely because they logged out or changed devices.

## Confirmed baseline

The Product Owner selected the balanced recommendation-input direction as the current baseline.

Initial recommendation inputs:

1. goal
2. training experience
3. weekly training availability
4. preferred workout duration

Equipment inventory is not collected during the initial recommendation flow. The initial recommendation remains gym-first and assumes a broadly equipped commercial-gym context. Equipment mismatch is handled later through exercise substitution rather than a long first-run equipment questionnaire.

This supersedes the earlier three-input onboarding assumption in DEC-009 for the current design pass. DEC-009's existing wording/choices for goal, weekly availability, and duration remain provisional until each input is reviewed again in this recommendation-system pass.

## Recommendation intake interaction — CONFIRMED

The four recommendation inputs are **not** presented as four consecutive full-screen onboarding steps.

After the user chooses `추천 루틴 받기`, the app opens one `추천 루틴 설정` screen containing four rows:

- 운동 목표
- 운동 경력
- 주당 가능일
- 운동 시간

Interaction rule:

- tapping a row opens a bottom sheet over the same screen
- the user selects one value and returns to the same recommendation-settings screen
- the selected value is shown inline in that row and can be changed again by tapping it
- all four values remain visible together so the user can review the complete recommendation profile before submitting
- `내 루틴 추천받기` remains disabled until all four required inputs have values
- once all four values are present, the CTA becomes active and goes directly to the recommendation result
- there is no additional confirmation screen between completed settings and the recommendation result

This replaces the earlier wireframe concept of `goal screen -> experience screen -> availability screen -> duration screen`.

The bottom-sheet presentation should reuse the existing Figma design-system pattern represented by the unit-settings sheet: dimmed overlay, 32px top corners, 20px horizontal padding, 52px option rows, and the standard 58px CTA.

Why:

- the four questions are independent inputs; one answer does not change which question is asked next
- a four-screen wizard makes the intake feel longer than the actual information burden
- the single settings screen gives the user immediate visibility into what is still missing and makes corrections cheaper

## Training-experience input — CONFIRMED

User-facing question should refer to the period of **consistent resistance-training experience**, not simply time since the user first visited a gym.

Confirmed options:

1. `처음이에요`
2. `6개월 미만이에요`
3. `6개월~1년 미만이에요`
4. `1년 이상이에요`

Product intent:

- the first year is segmented more closely because this is where beginner onboarding and exercise-complexity differences are most likely to matter
- `1년 이상` is intentionally kept as one broad bucket for MVP rather than creating 1–3 year / 3+ year tiers without a clear program-level need
- training experience is a supporting matcher signal, not a complete measure of skill or strength
- the app must not assume that everyone in `1년 이상` is an advanced lifter
- exact downstream effects on exercise complexity, volume, progression expectations, and technique guidance still need to be defined before implementation

### Experience-based weekly frequency ceiling — CONFIRMED

Training experience sets a ceiling on the number of prescribed resistance-training sessions per week:

| Training experience | Maximum prescribed resistance-training sessions / week |
|---|---:|
| `처음이에요` | 3 |
| `6개월 미만이에요` | 4 |
| `6개월~1년 미만이에요` | 5 |
| `1년 이상이에요` | 6 |

Baseline rule:

`frequency ceiling = min(user weekly availability, experience cap)`

Examples:

- `처음이에요` + `7일` available -> no more than 3 prescribed resistance-training sessions
- `6개월 미만이에요` + `3일` available -> no more than 3 prescribed sessions
- `1년 이상이에요` + `6일` available -> no more than 6 prescribed sessions

This is a ceiling, not a requirement to always prescribe the ceiling. Goal, workout-duration budget, recovery burden, and later template rules may justify fewer sessions, but never more than both the user's selected availability and the experience cap.

## Weekly-availability input — CONFIRMED

User-facing meaning:

`일주일에 현실적으로 최대 며칠까지 운동할 수 있나요?`

Confirmed options:

- `1일`
- `2일`
- `3일`
- `4일`
- `5일`
- `6일`
- `7일`

Matcher semantics:

- the selected value is the user's **maximum realistic weekly availability**, not a promise that the program must prescribe exactly that many resistance-training sessions
- the matcher may prescribe fewer weekly sessions when that is more appropriate for the user's goal, experience, session duration, or recovery burden
- the matcher must not prescribe more weekly training days than the selected maximum
- this onboarding input captures the number of available days only; it does not require the user to choose specific weekdays at this stage
- weekday assignment remains optional and can be configured later under the existing scheduling policy
- experience-based frequency ceilings apply before a final routine split is selected

Still open within weekly availability:

- prescribed frequency -> split / routine-count mapping
- whether some goal / workout-duration combinations should prescribe fewer sessions than the experience/availability ceiling

## Demographic profile data — separate from recommendation matching

The Product Owner wants to collect sex/gender and age information for potential future audience segmentation / targeted advertising.

Current product direction:

- sex/gender and age are **profile / monetization data**, not recommendation-matching inputs
- they must not be used to guess a starting working weight
- they should not be presented as though they are required to generate a better workout recommendation unless a later product rule gives them a real recommendation effect
- sex/gender and age collection belongs in the new-user onboarding/profile setup path, not in returning-user login
- collection timing within first-run onboarding, exact field shape, consent copy, and whether the fields are optional are still to be finalized before implementation
- because future personalized advertising may use account-linked demographic information, privacy disclosure, consent/opt-out behavior, app-store data-safety declarations, and age-treatment rules must be defined before ad activation
- the age-floor / minor-user policy is still open and must be resolved before demographic data is used for personalized advertising

Preferred product separation:

`Recommendation inputs` = goal / training experience / weekly availability / workout duration

`Profile demographics` = sex/gender / age information

The two sets may appear within the broader first-run experience, but they should remain conceptually and technically separate so that advertising/profile collection does not distort the recommendation algorithm.

## Why this baseline

Compared with the earlier three-input version, training experience gives the matcher one additional signal that can materially affect exercise complexity, progression expectations, and program volume while keeping onboarding short.

Compared with a detailed Hevy/Fitbod-style intake, this avoids asking first-run users to inventory equipment, preferred body parts, detailed schedule, body measurements, and other fields before they can see a useful recommendation.

## Current recommendation-system design order

Review and confirm one item at a time:

1. Goal — question wording, choices, and exactly what each choice changes in the program.
2. Training experience — bands and weekly frequency ceiling confirmed; other downstream effects still to define.
3. Weekly availability — input semantics/options and experience-based ceiling confirmed; split mapping still to define.
4. Workout duration — session-time buckets and how they constrain exercise/set volume.
5. Recommendation output contract — routine count, exercise order, sets, rep ranges, rest, and what is intentionally excluded.
6. Template matching — deterministic matching/tie-breaking and reviewed template coverage.
7. Equipment mismatch/substitution rules.
8. Recommendation result UX.
9. First workout handoff and first-load calibration.

Demographic-profile collection is tracked separately from this recommendation logic and should be finalized before implementation / advertising activation.

## Constraints retained from existing decisions

- Recommendation and self-build remain equal first-run entry modes.
- Recommendations use curated, QA-reviewed templates rather than free-form LLM generation.
- Weekday assignment remains optional.
- Initial recommendation remains gym-first.
- Starting working weight is not guessed from sex/gender; first-load calibration happens inside the actual workout.
- Recommended exercises should favor common, understandable gym movements and support practical substitutions.
- Accepting the final recommended routine should eventually converge into the same routine/workout/history system used by self-built routines.

## Open decision now

### Prescribed frequency -> routine split

Next decision: define the default routine split / routine count for prescribed weekly frequencies from 1 to 6 sessions.

The split should be simple enough for a curated-template system and should not create unnecessary variants without a meaningful program-level difference.

### Goal input — still open

Candidate user-facing goals discussed so far:

- 근육 증가
- 근력 향상
- 체지방 감량
- 건강·체력 향상

These remain a working proposal until the Product Owner explicitly confirms the final set and their downstream program effects.
