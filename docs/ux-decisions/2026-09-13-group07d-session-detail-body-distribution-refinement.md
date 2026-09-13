# Group 07D — Workout Session Detail Body Distribution Refinement

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / VISUAL QA PASS / DETAIL POLICY STILL IN REVIEW / NO CURSOR HANDOFF

## Context

`07D 운동 기록 상세` is the saved workout-session detail surface opened from the Group 06 completion screen via `기록 상세 보기` and may also be reused when a saved past workout session is opened later.

This screen is distinct from Group 04 exercise detail:
- Group 04 `최근 기록 / 성장` = one canonical exercise across sessions
- Group 07D = one saved workout session and all work actually persisted in that session

The separate `07C_운동기록_Exploration` overview screen was removed from Figma by PO direction. The current Group 07 session-detail work continues directly on 07D.

## PO direction applied

Add the approved 07A `운동 부위 분포` visual pattern to 07D.

For a workout-session detail:
- reuse the same front/back body-map card pattern used by 07A
- show only body areas that actually contributed to the selected saved session in the percentage list
- the body map should highlight only body areas represented by the performed session, rather than showing unrelated lower-body/core areas for an upper-body-only session
- session-specific distribution is derived from the same completed/persisted muscle-exposure basis already used by Analysis; do not invent kg/reps/duration conversion for this visualization

The current Figma values are review/sample data, not product fixtures.

## Current sample composition

Current sample session uses upper-body exercises and therefore shows only:
- 가슴 — 36%
- 등 — 28%
- 삼두 — 16%
- 어깨 — 12%
- 이두 — 8%

These values exist only to validate layout and are not locked production values.

## Design-system reuse applied

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- current session detail `07D_운동기록상세_Exploration` — `836:1593`

### Body distribution

07A source pattern:
- `BodyDistributionSection` — `887:946`
- `BodyDistributionCard` — `887:948`

07D clone:
- `SessionBodyDistributionSection` — `1075:794`
- section `320 × 448`
- unified card `320 × 412`
- body map + relevant-area list remain in one card
- `SectionHeader` remains the shared component
- section gap = `spacing/12`
- page section gap = `spacing/32`
- card internal spacing/padding/radius/color bindings are inherited from the approved 07A pattern

### Session summary

Legacy 07D summary cards were replaced by the current shared completion component:
- `CompletionMetricCard` master — `936:914`
- four instances: 총 볼륨 / 운동 시간 / 운동 수 / 완료 세트
- two-column gap = `spacing/12`

The sample values remain unchanged for review.

### Personal record

The former raw `PRHighlight` frame was replaced with:
- `CompletionPersonalRecordCard` master — `936:918`
- current 07D instance — `1075:791`

Current sample copy remains:
- `오늘의 신기록`
- `벤치프레스 80kg × 10회`

### Performed exercises

Existing 07D exercise-detail cards remain component instances and were preserved:
- WeightReps `ExerciseCard`
- Reps `ExerciseCard`
- shared `SectionHeader`

No new duplicate component/token was created for this pass.

## QA

Focused full-screen screenshot after the refinement = PASS.

Verified visually:
- session title/date hierarchy preserved
- shared summary metric components align to current spacing
- PR component aligns to the same card system
- `운동 부위 분포` is inserted between overview and `수행 운동`
- only session-relevant area rows are shown
- unrelated lower-body/core highlights are removed from the current upper-body sample body map
- performed-exercise cards remain unchanged and readable
- 20px page content inset and existing Fitness dark-surface card treatment are preserved

## Still open

07D is not fully closed yet. Continue one decision at a time for remaining product/detail rules, including:
- non-applicable total-volume presentation in session detail
- PR detail scope when multiple PRs exist
- any additional session metadata/actions that are genuinely required for MVP

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
