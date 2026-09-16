# Group 02 Home Refinement Checkpoint — 2026-09-14

**Status:** DEFERRED BY PO / RECOMMENDED PRESET ROUTE PATCH APPLIED 2026-09-16
**Phase:** Product / UX / Figma
**Development handoff:** NOT APPROVED

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `02 홈` — `233:2073`

Current Home state screens:
- `02A_Home_NoRoutine` — `1346:686`
- `02B_Home_RoutineSelected` — `1329:593`
- `02D_Home_Active` — `1346:710`

The previous Home dashboard direction and old `02C_Home_RoutinePicker` are no longer the current design basis.

## Product direction

Home is an action-first surface: the center of gravity is choosing / resuming a workout, not filling the screen with dashboard metrics.

The current MVP Home remains a 3-state model:

1. no saved routine
2. saved / selected routine
3. active workout

No weekday-based `오늘 운동`, auto-selected `다음 운동`, empty ad-hoc workout start, or Home-local routine picker is added.

## 02A — No Routine

The previous asymmetric CTA structure was replaced with two equal-priority large option cards.

Current copy / structure:
- heading: `어떻게 운동을 시작할까요?`
- card 1: `추천 루틴 받기`
- card 2: `내 루틴 만들기`
- both cards use equal visual volume and hierarchy
- each card supports a short explanatory line and a visual-artwork area
- recent workout remains secondary below the start choices

Design-system direction:
- same surface / border / radius treatment for both cards
- same typography hierarchy for both cards
- Auto Layout and spacing variables follow the existing Fitness Design System
- canonical chevron asset is reused
- do not turn either path into a stronger Primary CTA because recommendation and self-build are equal primary entry modes

Reference used for information hierarchy:
- Peloton Strength+ large-card choice pattern
- reference is structural only; LIFTLY visual language remains canonical

Artwork exploration:
- glossy 3D clip-art language consistent with the existing PR/trophy illustration was explored
- recommended-routine concept: compass / guide
- self-build concept: checklist + add
- colors may differ by card while retaining the same 3D material / lighting language
- final asset placement is still open and must not be treated as locked

### Recommendation routing — UPDATED 2026-09-16

The current recommendation experience is preset-based, not a personalized questionnaire.

- `추천 루틴 받기` opens the curated recommended-routine list.
- no `목표 / 주당 가능일 / 운동시간` matcher screens are required in the current MVP route.
- the recommended list reuses the existing `03A_Routine_List` structure rather than introducing a special carousel or recommendation-only visual pattern.
- selecting one preset opens the existing `03C` recommended-routine detail.

Canonical route:

`02A 추천 루틴 받기 → 03A_Recommended_Routine_List → 03C 추천 루틴 상세 → 운동 시작`

Figma:
- page `03 루틴` — `233:2074`
- `03A_Recommended_Routine_List` — `1613:1996`

Detailed current contract:
- `docs/ux-decisions/2026-09-16-recommended-routine-preset-list.md`

This supersedes the older note in this checkpoint that reintroduced three recommendation-matching inputs.

## 02B — Routine Selected

Current layout was rebuilt around one routine-focus card rather than a dashboard stack.

Current hierarchy:
- `운동을 시작해볼까요?`
- compact muscle/body-area tags above the routine name
- routine name (`Push Day` example)
- metadata below the identity group (`5개 운동 · 19세트 · 약 50분` example)
- Primary `운동 시작`
- `다른 루틴` action routes to `03A_Routine_List`
- recent workout is a small secondary section
- recent-workout row shows routine name on the left; duration was explicitly removed from the left-side label

Tag refinement completed during this pass:
- compact Tag variant was introduced for the smaller Home label presentation
- `tag/compact` typography uses a smaller type scale than the default tag

## 02D — Active Workout

Active workout remains the third Home state.

Requirement:
- clearly expose that an active workout exists
- provide a one-step return to the current workout
- active-session recovery remains governed by the existing workout persistence/reliability decision

## Navigation contract

- `02A 추천 루틴 받기` → `03A_Recommended_Routine_List` → selected `03C` recommended-routine detail
- `02A 내 루틴 만들기` → Group 03 routine-create flow
- `02B 운동 시작` → active workout
- `02B 다른 루틴` → `03A_Routine_List`
- `02D 운동 계속하기` → current active workout

Cross-page Figma prototype navigation is represented by flow annotation + GitHub route contract when direct page-to-page prototype linking is unavailable.

## Design-system / QA status

Verified during the current Home refinement:
- existing semantic color variables reused
- existing spacing / radius variables reused for the edited Home structures
- existing AppLogo / CTA / Tag / SectionHeader / ListCard / RecentWorkoutRow / chevron assets reused when their roles match
- no new foundation token is required for the Home direction itself
- user edits to the current canonical Home basis are preserved rather than regenerated from the old layouts

Recommended-preset list patch verified 2026-09-16:
- cloned/reused `03A_Routine_List` composition
- shared Nav Header and `RoutineListCard` linkage retained
- no recommendation-specific card/component family added
- `03A_Recommended_Routine_List` screenshot QA PASS at 360 × 780

Current Home remains deferred outside this explicit recommendation-route patch.

## Next open items

1. finalize / apply 02A large-card artwork treatment if retained
2. targeted screenshot + component/binding QA across `02A / 02B / 02D` when PO resumes Home refinement
3. lock Group 02 only after the PO explicitly resumes and accepts the three-state Home set

Do not begin Cursor implementation handoff.
