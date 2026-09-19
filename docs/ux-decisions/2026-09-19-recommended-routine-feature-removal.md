# 2026-09-19 Recommended routine feature removal

**Status:** PO APPROVED · SUPERSEDING PRODUCT DECISION · FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Decision

The current MVP has **no recommended-routine feature**.

This is not merely a Home-placement change or a navigation refinement. Recommended routines themselves are removed from the current MVP product scope.

Current Routine product scope:
- user-created saved routines
- routine create / edit / delete / manage
- workout start from a saved routine
- blank-workout start without a saved routine

Not part of the current MVP:
- recommended-routine discovery
- recommended-routine list/catalog
- recommended-routine detail
- recommendation questionnaire / matching
- recommended-routine acceptance
- recommended-routine post-workout save prompt
- recommended-routine modified-save choice
- My Routine / Recommended Routine tab navigation

Future personalization or AI suggestions are a separate product layer and do not imply the return of a recommended-routine catalog or recommendation flow.

## Supersession

This decision supersedes all prior product/UI decisions that kept recommended routines in the MVP, including:
- `DEC-005 — Recommendation and self-build are equal primary entry modes`
- `DEC-006 — Recommended routines use curated program matching, not LLM generation`
- `DEC-009 — Initial recommendation onboarding is three inputs and gym-first`
- `DEC-014 — Accepting a recommended routine goes directly to Home`
- `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`
- `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`
- later Group 06 recommended-routine save-dialog checkpoints

Historical documents remain useful only as history and must not be used as current product requirements.

## Canonical Figma changes

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`

### Routine list

Former:
- `03A_Routine_List_My`
- `03A_Routine_List_Recommended`
- shared `RoutineTabs` navigation between `내 루틴 / 추천 루틴`

Current:
- `03A_Routine_List` — `34:1401`
- no RoutineTabs
- Nav Header = `루틴` + existing Plus action
- content = `내 루틴` only
- shared SectionHeader remains but has no redundant trailing creation action
- existing saved-routine list remains

Deleted:
- `03A_Routine_List_Recommended` — former `1613:1996`

### Routine empty state

Current:
- `03B_Routine_Empty` — `34:1438`
- no RoutineTabs
- no recommended-routine preview
- Nav Header right action removed in the empty state
- primary empty-state CTA `루틴 만들기` remains the single creation emphasis

### Recommended-routine detail

Deleted:
- `03C_추천루틴상세` — former `40:2272`

### Workout-completion recommended-routine dialogs

Deleted:
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — former `1896:8585`
- `FINAL_06_RECOMMENDED_ROUTINE_MODIFIED_SAVE_DIALOG` — former `1896:8610`

Generic shared dialog components remain because they are not recommendation-specific.

## Design-system note

No recommendation-specific Common_Component main components were found, so no shared component deletion was necessary.

The removal changes live product screens/flows only and does not delete generic reusable components.

## Focused QA

Post-removal read-back:
- top-level recommended-routine screens = `0`
- visible `추천 루틴 / 추천루틴 / 추천 결과 / 추천받...` text in live MVP page = `0`
- `RoutineTabs` instances in `03A_Routine_List / 03B_Routine_Empty` = `0`
- visible text overflow in both Routine screens = `0`
- visible text font family = SUIT
- missing main-component links in both Routine screens = `0`

Whole-MVP read-back:
- top-level independent frames = `94`
- instances = `1,855 / 1,855`
- missing main-component links = `0`
- instance sources outside `Common_Component` = `0`

Focused QA: **PASS**

## Development boundary

No Cursor / implementation handoff is authorized.
