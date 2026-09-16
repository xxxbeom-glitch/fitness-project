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
- `03B_Routine_Empty` — `34:1438`
- all = `360 × 780`

Both populated states intentionally reuse the same list composition and `RoutineListCard` component instances. No special recommendation-only card, carousel, badge, illustration, or new foundation/component family is introduced.

### Shared tab pattern

Existing shared component reused:
- `fixed-tab-bar` — `638:3298`
- My state instance uses existing 2-tab left-active variant `638:3299`
- Recommended state instance uses existing 2-tab right-active variant `638:3304`
- labels are overridden to `내 루틴 / 추천 루틴`

The tab bar is centered at `x=16`, `y=118`, size `328 × 54`. Routine content starts immediately below at `y=172`.

The prior redundant section headings (`내 루틴`, `추천 루틴`) are removed because the selected tab already communicates the current list context.

### Empty-state alignment

`03B_Routine_Empty` is the empty state of the `내 루틴` tab, not a separate navigation model.

Applied:
- the same shared `fixed-tab-bar` left-active variant is added to `03B_Routine_Empty`
- labels remain `내 루틴 / 추천 루틴`
- empty content is reflowed from `y=118` to `y=172`
- content height becomes `608`
- existing empty-state copy and `루틴 만들기` CTA are preserved
- switching to `추천 루틴` must show the populated recommended-preset list rather than an empty state

This keeps the tab/navigation model consistent regardless of whether the user has personal routines.

### Header

All Routine List states use the same page header:
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
- if there are no personal routines, the `내 루틴` tab renders `03B_Routine_Empty` with the tab bar still visible.
- tapping `추천 루틴` switches the same Routine List surface to the preset list.
- `02A Home · 추천 루틴 받기` opens the same Routine List surface with `추천 루틴` active.
- tapping a recommended-routine card opens the existing `03C` recommended-routine detail for that selected preset.
- tapping `내 루틴` returns to either the populated personal routine list or `03B_Routine_Empty`, depending on whether personal routines exist.
- there is no intermediate personalization questionnaire.
- there is no recommendation-result carousel.
- the selected recommended routine is not automatically saved to `내 루틴` before workout.
- post-workout save behavior remains governed by the existing recommended-routine acceptance/completion policy.

## QA

Targeted screenshot QA = PASS for:
- `03A_Routine_List_My`
- `03A_Routine_List_Recommended`
- `03B_Routine_Empty`

Structural read-back:
- all tab instances remain linked to the existing shared `fixed-tab-bar` component set
- populated screens retain shared Nav Header / RoutineListCard linkage
- `03B_Routine_Empty` retains shared Nav Header / Compact Button linkage
- the empty-state tab instance uses the same `638:3299` left-active shared variant as the populated My Routine state
- no new tab component or local duplicate was created
- no clipping or overlap at `360 × 780`

## Scope boundary

This is a narrow explicit PO reopen of Group 03 Routine List navigation/presentation. It does not reopen already-closed routine create/edit/detail behavior.

Group 02 Home visual refinement remains otherwise deferred until the PO explicitly resumes it.

**NO CURSOR IMPLEMENTATION HANDOFF.**