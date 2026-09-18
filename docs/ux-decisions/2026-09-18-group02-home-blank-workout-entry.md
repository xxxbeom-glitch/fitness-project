# 2026-09-18 Group 02 Home blank-workout entry

**Status:** PO APPROVED · FIGMA REFLECTED · FOLLOW-UP REQUIRED FOR EMPTY ACTIVE-WORKOUT STATE

## Decision

For the no-routine Home state (`02A_Home_NoRoutine`), the primary start choices are:

1. `빈 운동 시작`
2. `내 루틴 만들기`

The previous Home action `추천 루틴 받기` is removed from 02A.

## Rationale

The primary early target remains general gym users and experienced lifters. Home should optimize for starting or resuming training with minimum friction rather than lead with coaching/recommendation.

`빈 운동 시작` supports users who want to enter training immediately and add exercises during the active session without first creating or adopting a routine.

## Blank-workout behavior

- tapping `빈 운동 시작` starts an active workout without a saved routine
- the active workout initially contains no exercises
- the user adds exercises from the existing exercise-add flow
- the existing active-workout flexibility rules still apply: add/remove/reorder exercises and add/remove sets
- completing the workout stores normal workout history
- starting a blank workout does not automatically create a saved routine

## Recommended routines

Recommended ready-made routines are not removed from the MVP by this decision.

They are demoted from the no-routine Home primary action and should live as a secondary discovery/use path under the Routine area.

The exact Routine-tab placement and presentation may be refined later. Do not restore recommended routines as the primary 02A entry without a new PO decision.

## Figma

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Applied:
- screen `02A_Home_NoRoutine` — `1346:686`
- shared `HomeStartChoiceCard` set — `1719:1048`
- former `Type=Recommended` variant repurposed to `Type=BlankWorkout` — `1719:1042`
- title: `빈 운동 시작`
- description: `루틴 없이 운동을 추가하며 바로 기록해보세요.`
- `Type=BuildOwn` remains unchanged

## Direct follow-up

The current MVP Figma has no dedicated zero-exercise active-workout screen.

A focused active-workout empty state is therefore required so `빈 운동 시작` has a canonical destination. This is a targeted follow-up and does not reopen unrelated Group 05 behavior.

## Development boundary

No Cursor / implementation handoff is authorized.
