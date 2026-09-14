# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 02 HOME REFINEMENT ACTIVE · HOME 3-STATE MODEL · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-14-group02-home-refinement-checkpoint.md`

Directly relevant decisions / checkpoints:
- `docs/ux-decisions/2026-09-06-home-routine-selection.md`
- `docs/08_DECISIONS.md` — recommendation/self-build equality, curated recommendation policy, recommendation inputs
- `docs/ux-decisions/2026-09-08-routine-figma-03-checkpoint.md` — Group 03 route/destination context

Prior approved / locked checkpoints should not be reopened without a new issue:
- `docs/ux-decisions/2026-09-14-group01-cross-group-qa.md`
- `docs/ux-decisions/2026-09-08-routine-figma-03-checkpoint.md`
- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- Group 08 settings/account checkpoints from 2026-09-14 remain recorded in `docs/ux-decisions/`; Group 08 is not the current focus.

---

# GROUP 02 — HOME REFINEMENT ACTIVE

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `02 홈` — `233:2073`

Current Home state screens:
- `02A_Home_NoRoutine` — `1346:686`
- `02B_Home_RoutineSelected` — `1329:593`
- `02D_Home_Active` — `1346:710`

The old Home dashboard direction and old `02C_Home_RoutinePicker` are not current.

## 02A — No Routine

Current direction:
- heading: `어떻게 운동을 시작할까요?`
- two equal-priority large cards:
  - `추천 루틴 받기`
  - `내 루틴 만들기`
- both choices use the same visual volume / hierarchy
- neither path is presented as a stronger Primary CTA
- large-card information hierarchy references Peloton Strength+ structurally, while LIFTLY Design System remains canonical
- current artwork direction explores glossy 3D clip-art consistent with the existing PR/trophy illustration language
  - recommendation concept: compass / guide
  - self-build concept: checklist + add
  - colors may differ while material / lighting language stays consistent
- final artwork asset/crop/size application is not locked yet
- recent workout remains secondary below the start choices

Recommendation routing:
- do not route `추천 루틴 받기` directly to `03C_추천루틴상세`
- confirmed recommendation matching inputs remain goal / weekly availability / preferred workout duration
- Home re-entry behavior for those inputs is still TBD: reuse prior answers vs ask again

## 02B — Routine Selected

Current direction:
- heading: `운동을 시작해볼까요?`
- compact body-area tags above routine name
- routine name
- metadata below identity group, e.g. `5개 운동 · 19세트 · 약 50분`
- Primary `운동 시작`
- `다른 루틴` → `03A_Routine_List`
- recent workout remains a small secondary section
- recent-workout row left side shows routine name only; duration removed

The current `02B` is the design basis. Do not restore the old dashboard-heavy Home layout.

## 02D — Active Workout

Current direction:
- clearly expose an active session
- provide one-step return to the current workout
- active-session persistence/recovery follows the existing workout reliability decision

## Home state policy

MVP Home remains exactly three states:
1. no saved routine
2. saved / selected routine
3. active workout

Do not add:
- Home-local Routine Picker Bottom Sheet
- weekday-based `오늘 운동`
- automatic `다음 운동` selection without an explicit product rule
- routine-less empty workout start

## Design-system rule

Current Home refinements reuse the existing Fitness Design System when the role matches:
- semantic background / surface / border / text variables
- spacing and radius variables
- typography styles
- AppLogo
- CTA Button
- Tag / compact Tag
- SectionHeader
- ListCard
- RecentWorkoutRow
- canonical chevron assets

Do not create duplicate foundation tokens or duplicate shared components for the Home-specific layout.

---

# NEXT OPEN ITEM

Continue from the current `02A_Home_NoRoutine` large-card refinement.

1. finalize whether the large-card artwork is retained and apply final artwork asset / crop / size if approved
2. decide Home recommendation re-entry behavior: reuse prior 3 matching answers vs ask again
3. run targeted screenshot + component/binding QA across `02A / 02B / 02D`
4. lock Group 02 only after PO accepts the full three-state Home set

Do not return to old Home variants or old `02C` picker.
Do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
