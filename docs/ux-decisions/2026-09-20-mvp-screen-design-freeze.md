# 2026-09-20 MVP Screen Design Freeze

**Status:** PO APPROVED · 94 CONTENT/STATE FRAMES FROZEN · POST-FREEZE DEEP QA FOUND TARGETED APP-SHELL FIX · IMPLEMENTATION NOT STARTED

## Decision

The Product Owner explicitly ends the current MVP screen-design pass at the present canonical Figma state.

No additional top-level MVP screen is required merely to represent a runtime state that can be expressed by the already approved shell/components and an explicit implementation rule.

Canonical Figma:
- file: `W3lZurXCXbThP67rF2xk2b`
- page: `MVP_전체_와이어프레임` — `34:1076`
- shared component page: `Common_Component`
- top-level MVP frames: `94`

This freeze does **not** authorize Cursor to invent missing product behavior. Product/behavior gaps that cannot be derived from an approved state remain `DECISION NEEDED`.

## Freeze baseline

Verified canonical state:
- `94` top-level frames
- group counts:
  - 00: 1
  - 01: 7
  - 02: 3
  - 03: 11
  - 04: 29
  - 05: 18
  - 06: 3
  - 07: 5
  - 08: 17
- `1,855 / 1,855` current MVP instances resolve to a main component
- missing main-component links: `0`
- live MVP component sources outside `Common_Component`: `0`

The existing radius exploration remains preview-only and is not part of this freeze.

## Runtime state rule — blank workout with zero exercises

The previous open item requesting a dedicated zero-exercise Active Workout Figma frame is closed as an **implementation-derived state**, not a new top-level screen.

When the user taps `빈 운동` from Home:

- create one active workout with no linked saved routine
- use the existing Group 05 Active Workout shell represented by `05A_Workout_Weight` — `148:1979`
- header title for the blank session: `빈 운동`
- keep the approved WorkoutLiveBar / elapsed-time / end-cancel structure
- ExerciseList starts empty
- keep the existing `운동 추가` action available
- tapping `운동 추가` enters the existing exercise search/selection flow
- after exercises are selected, render the same active-workout exercise-card family according to each exercise's `recording_type`
- the blank session must not silently create a saved routine
- after recorded work exists, normal workout completion/history semantics apply

No separate visual language or new navigation branch is introduced.

## Runtime state rule — optional routine name

The previous 03E / 03E2 Figma follow-up is also closed without adding another top-level screen.

Current behavior authority:
- `docs/ux-decisions/2026-09-18-group03-routine-name-auto-default-policy.md`

Implementation rule:
- a blank routine name is not an error
- save eligibility is determined by the existing non-name validity requirements
- current `03E_Routine_Create` shows Save Disabled because no exercise has been composed, **not because the name is blank**
- once the routine otherwise becomes valid, Save must be enabled even if the name remains blank
- at first save, a blank name receives `나의 루틴 YYMMDD`
- same-day automatically named routines receive `(2)`, `(3)` ... suffixes

A separate blank-name-with-exercises Figma frame is not required.

## Dynamic recording-type states

The MVP data policy currently contains four active recording types:
- `weight_reps`
- `reps`
- `duration`
- `assisted_weight_reps`

These do not require four separate top-level Active Workout screens merely to vary fields inside the shared exercise card.

Approved component-level derivations:
- `weight_reps` → weight + reps
- `reps` → reps only
- `assisted_weight_reps` → assistance weight + reps

However, the detailed `duration` Active Workout interaction remains explicitly deferred in:
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`

Therefore:
- the screen-design freeze remains valid
- Cursor must **not invent** stopwatch/countdown/start-stop behavior
- duration-set interaction is `DECISION NEEDED` before implementing that component state

## Asset boundary

The Production exercise-thumbnail overnight crop/mapping work remains open.

This is an asset-production / mapping task, not a reason to reopen MVP screen layout:
- structural UI implementation may proceed with the approved thumbnail component contract
- final visual/media QA cannot be claimed until Production mapping/crop QA is complete

## Supersession

This decision supersedes the following as **additional Figma-screen requirements**:
- CURRENT request for a dedicated zero-exercise Active Workout top-level frame
- CURRENT request for an additional 03E/03E2 visual state solely to prove that routine name is optional

The underlying behavior decisions remain active and are now implementation rules.

## Post-freeze deep-QA amendment — 2026-09-20

A later 94-screen behavior audit found that the frozen content/state frames are not the whole app-shell contract.

Verified design gap:
- product IA requires primary destinations `홈 / 루틴 / 분석 / 설정`
- current root screens contain no primary bottom-navigation instance
- `Common_Component` contains no corresponding primary bottom-navigation component

Interpretation:
- keep the existing 94 canonical content/state frames frozen
- do **not** reopen all screen families
- reopen only the primary app-shell navigation contract for a targeted design completion
- Cursor must not invent the missing bottom-navigation visual/state behavior

Additional product conflicts found by the same deep QA are recorded in:
- `docs/implementation/MVP_SCREEN_BEHAVIOR_MATRIX.md`
- `docs/implementation/MVP_HANDOFF_QA.md`

These include weekday scheduling, routine Duplicate semantics, and W/D/F set-type semantics.

## Result

**The 94 canonical content/state frames remain frozen. Primary app-shell navigation requires one targeted design FIX before UI implementation.**

Development handoff documentation is prepared, but the deep-QA FIX / DECISION NEEDED items must be resolved before production implementation. See `docs/CURRENT.md`.
