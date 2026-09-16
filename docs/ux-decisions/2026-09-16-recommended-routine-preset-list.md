# Recommended Routine — Preset List Flow

**Date:** 2026-09-16  
**Status:** PO APPROVED · FIGMA APPLIED · TARGETED QA PASS · NO CURSOR HANDOFF

## Decision

The current MVP recommendation experience is **not a personalized matcher/questionnaire**.

`추천 루틴` means a set of curated ready-made routines prepared and reviewed by the product. The user chooses one preset and then reviews its existing routine-detail screen before starting the workout.

Current route:

`02A Home · 추천 루틴 받기 → 03A_Recommended_Routine_List → 03C 추천 루틴 상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부`

This supersedes older Group 02 notes that reintroduced `목표 / 주당 가능일 / 운동시간` recommendation-input screens. Those questionnaire inputs are not part of the current preset-based recommendation route.

## Figma

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `03 루틴` — `233:2074`

New preset-list screen:
- `03A_Recommended_Routine_List` — `1613:1996`
- `360 × 780`

Source reused:
- `03A_Routine_List` — `34:1401`

The recommended list intentionally reuses the same routine-list composition and `RoutineListCard` component instances. No special recommendation-only card, carousel, badge, illustration, or new foundation/component family is introduced.

Minimal semantic differences:
- Nav Header title = `추천 루틴`
- left action = Back
- right create action = None
- section title = `추천 루틴`
- current representative routine names:
  - `상체 루틴`
  - `하체 루틴`
  - `하체 · 코어 루틴`

The sample names and current card metadata/tags are representative Figma content for layout QA. They do **not** lock the final curated preset catalog or exercise composition.

## Interaction contract

- tapping a recommended-routine card opens the existing `03C` recommended-routine detail for that selected preset
- there is no intermediate personalization questionnaire
- there is no recommendation-result carousel
- the selected recommended routine is not automatically saved to `내 루틴` before workout
- post-workout save behavior remains governed by the existing recommended-routine acceptance/completion policy

## QA

Targeted screenshot QA of `03A_Recommended_Routine_List` = PASS:
- preserves the 03A visual/list structure
- shared Nav Header and RoutineListCard component linkage retained
- no special recommendation visual language introduced
- text/layout renders without clipping or overlap at 360 × 780

## Scope boundary

This is a narrow explicit PO reopen for the missing recommended-preset selection step. It does not reopen already-closed Group 03 routine create/edit/detail behavior.

Group 02 Home visual refinement remains otherwise deferred until the PO explicitly resumes it.

**NO CURSOR IMPLEMENTATION HANDOFF.**
