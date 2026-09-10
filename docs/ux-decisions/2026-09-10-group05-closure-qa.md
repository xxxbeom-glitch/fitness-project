# Group 05 Active Workout — Closure QA

**Date:** 2026-09-10  
**Status:** CLOSED / PO APPROVED  
**Scope:** Group 05 `05 운동 중`

## Closure decision

Product Owner approved moving from Group 05 to Group 06. Group 05 has no remaining Product/UX blocker that requires another screen before moving on.

Canonical Figma:
- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`

The track closes on the existing approved/QA-passed decisions and artifacts. Previously passed unrelated screens were not re-opened or re-QA'd solely for closure.

## Locked Group 05 behavior at closure

- active workout records the supported recording types defined in the existing recording-type decisions.
- set completion and rest-timer behavior remain as approved.
- active-session recovery remains system-notification based with the same session resumed on return.
- workout action menu remains `대체 운동 / 순서 변경 / 삭제`.
- explicit reorder changes the routine display order; merely performing exercises out of order does not.
- exercise replacement uses the approved fixed candidate pool, completed-set destructive confirmation, and current-session-only deletion rule.
- switching to another routine uses the approved incomplete/complete state-specific confirmation.
- newly added/replaced exercises follow the approved first-time vs. prior-history initialization rule.

## Final visual simplifications before closure

- `운동 구성` section title was removed from the active-workout list presentation.
- workout card table labels use Korean naming (`세트 / 중량 / 횟수 / 완료`, with recording-type-specific equivalents such as `시간` or `보조중량`).
- MVP does not distinguish warm-up/drop/failure set types in Active Workout.
- all displayed sets are regular work sets and are numbered sequentially `1..N`.

These are reflected in the canonical local `ExerciseCard` workout variants and current Group 05 screens.

## Closure rule

Do not re-open Group 05 unless there is:
- a new Product Owner request,
- a newly discovered policy/interaction conflict,
- a regression caused by a later shared-system change,
- or a concrete dependency from another track.

## Next track

Proceed to Group 06 `운동 완료` in Product/UX + Figma mode.

No Cursor/development handoff is implied.
