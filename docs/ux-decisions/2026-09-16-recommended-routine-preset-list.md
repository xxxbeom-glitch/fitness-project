# Recommended Routine — Preset List Flow

**Date:** 2026-09-16  
**Status:** PO APPROVED · FIGMA APPLIED · TARGETED QA PASS · NO CURSOR HANDOFF

## Decision

The current MVP recommendation experience is **not a personalized matcher/questionnaire**.

`추천 루틴` means a set of curated ready-made routines prepared and reviewed by the product. The user chooses one preset and then reviews its existing routine-detail screen before starting the workout.

The routine-list entry is now a **single tabbed surface** rather than separate My Routine and Recommended Routine destinations.

Current route:

`02A Home · 추천 루틴 받기 → 03A Routine List · 추천 루틴 tab active → 03C 추천 루틴 상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부`

This supersedes older Group 02 notes that reintroduced `목표 / 주당 가능일 / 운동시간` recommendation-input screens. Those questionnaire inputs are not part of the current preset-based recommendation route.

## Figma

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `03 루틴` — `233:2074`

Tabbed Routine List states:
- `03A_Routine_List_My` — `34:1401`
- `03A_Routine_List_Recommended` — `1613:1996`
- both = `360 × 780`

Both states intentionally reuse the same list composition and `RoutineListCard` component instances. No special recommendation-only card, carousel, badge, illustration, or new foundation/component family is introduced.

### Shared tab pattern

Existing shared component reused:
- `fixed-tab-bar` — `638:3298`
- My state instance uses existing 2-tab left-active variant `638:3299`
- Recommended state instance uses existing 2-tab right-active variant `638:3304`
- labels are overridden to `내 루틴 / 추천 루틴`

The tab bar is centered at `x=16`, `y=118`, size `328 × 54`. Routine content starts immediately below at `y=172` with the existing 20px content inset.

The prior redundant section headings (`내 루틴`, `추천 루틴`) are removed because the selected tab already communicates the current list context.

### Header

Both tab states use the same page header:
- title = `루틴`
- left action = None
- right action = Plus

The Plus action remains a page-level create-routine action; recommended cards themselves remain non-editable/non-manageable.

### Representative recommended presets

Current Figma sample names:
- `상체 루틴`
- `하체 루틴`
- `하체 · 코어 루틴`

The sample names and current card metadata/tags are representative Figma content for layout QA. They do **not** lock the final curated preset catalog or exercise composition.

## Interaction contract

- Routine List defaults to `내 루틴` when entered through the normal Routine destination.
- tapping `추천 루틴` switches the same Routine List surface to the preset list.
- `02A Home · 추천 루틴 받기` opens the same Routine List surface with `추천 루틴` active.
- tapping a recommended-routine card opens the existing `03C` recommended-routine detail for that selected preset.
- tapping `내 루틴` returns to the personal routine list state.
- there is no intermediate personalization questionnaire.
- there is no recommendation-result carousel.
- the selected recommended routine is not automatically saved to `내 루틴` before workout.
- post-workout save behavior remains governed by the existing recommended-routine acceptance/completion policy.

## QA

Targeted screenshot QA = PASS for both tab states:
- `03A_Routine_List_My`
- `03A_Routine_List_Recommended`

Structural read-back:
- both tab instances remain linked to the existing shared `fixed-tab-bar` component set
- both screens retain shared Nav Header / RoutineListCard linkage
- missing main-component links = `0` on both states
- content/list alignment is identical between the two tab states
- no clipping or overlap at `360 × 780`

## Scope boundary

This is a narrow explicit PO reopen of Group 03 Routine List navigation/presentation. It does not reopen already-closed routine create/edit/detail behavior.

Group 02 Home visual refinement remains otherwise deferred until the PO explicitly resumes it.

**NO CURSOR IMPLEMENTATION HANDOFF.**
