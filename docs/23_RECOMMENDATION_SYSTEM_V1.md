# 23 RECOMMENDATION SYSTEM V1

**Status:** IN PROGRESS
**Updated:** 2026-09-01

## Purpose

Define the recommendation system before continuing recommendation-flow wireframes. The system must make clear what user inputs are collected, what each input changes, how a reviewed routine template is selected, and what is shown to the user.

This document is the working source for recommendation-system design. Screen-level recommendation UX should not outrun these rules.

## Confirmed baseline

The Product Owner selected the balanced recommendation-input direction as the current baseline.

Initial recommendation flow:

1. goal
2. training experience
3. weekly training availability
4. preferred workout duration

Equipment inventory is not collected during the initial recommendation flow. The initial recommendation remains gym-first and assumes a broadly equipped commercial-gym context. Equipment mismatch is handled later through exercise substitution rather than a long first-run equipment questionnaire.

This supersedes the earlier three-input onboarding assumption in DEC-009 for the current design pass. DEC-009's existing wording/choices for goal, weekly availability, and duration remain provisional until each input is reviewed again in this recommendation-system pass.

## Why this baseline

Compared with the earlier three-input version, training experience gives the matcher one additional signal that can materially affect exercise complexity, progression expectations, and program volume while keeping onboarding short.

Compared with a detailed Hevy/Fitbod-style intake, this avoids asking first-run users to inventory equipment, preferred body parts, detailed schedule, body measurements, and other fields before they can see a useful recommendation.

## Current recommendation-system design order

Review and confirm one item at a time:

1. Goal — question wording, choices, and exactly what each choice changes in the program.
2. Training experience — bands/wording and exactly what it changes.
3. Weekly availability — meaning of the selected days and frequency/split mapping rules.
4. Workout duration — session-time buckets and how they constrain exercise/set volume.
5. Recommendation output contract — routine count, exercise order, sets, rep ranges, rest, and what is intentionally excluded.
6. Template matching — deterministic matching/tie-breaking and reviewed template coverage.
7. Equipment mismatch/substitution rules.
8. Recommendation result UX.
9. First workout handoff and first-load calibration.

## Constraints retained from existing decisions

- Recommendation and self-build remain equal first-run entry modes.
- Recommendations use curated, QA-reviewed templates rather than free-form LLM generation.
- Weekday assignment remains optional.
- Initial recommendation remains gym-first.
- Starting working weight is not guessed from sex/gender; first-load calibration happens inside the actual workout.
- Recommended exercises should favor common, understandable gym movements and support practical substitutions.
- Accepting the final recommended routine should eventually converge into the same routine/workout/history system used by self-built routines.

## Open decision now

### Goal input

Next decision: define the goal question and choices based on whether each choice causes a meaningful and defensible change in the generated resistance-training program.

The prior choices were:

- 체지방 감량
- 근육량 증가
- 체력 향상

These are not automatically retained. They must be re-evaluated before wireframing because the recommendation system should not collect a field unless its answer has a clear downstream effect.
