# Group 07D — Workout Session Detail Body Distribution Refinement

**Date:** 2026-09-13  
**Status:** BODY-DISTRIBUTION DECISION CURRENT / OTHER 07D SUBSECTIONS SUPERSEDED BY LATER CHECKPOINTS / NO CURSOR HANDOFF

> Scope note: this document remains canonical only for the 07D `운동 부위 분포` decision.  
> Later checkpoints supersede the older session-summary, personal-record, performed-exercise, screen-order, and current-geometry details that existed when this body-distribution pass was first made.  
> Current 07D state: `2026-09-13-group07-session-detail-current-checkpoint.md` and `docs/CURRENT.md`.

## Context

`07D 운동 기록 상세` is the saved workout-session detail surface opened from the Group 06 completion screen via `기록 상세 보기` and may also be reused when a saved past workout session is opened later.

This screen is distinct from Group 04 exercise detail:
- Group 04 `최근 기록 / 성장` = one canonical exercise across sessions
- Group 07D = one saved workout session and all work actually persisted in that session

The separate `07C_운동기록_Exploration` overview screen was removed from Figma by later PO direction. The current Group 07 session-detail work continues directly on 07D.

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

07A source pattern:
- `BodyDistributionSection` — `887:946`
- `BodyDistributionCard` — `887:948`

07D current body-distribution section:
- `SessionBodyDistributionSection` — `1075:794`
- section `320 × 448`
- unified card `320 × 412`
- body map + relevant-area list remain in one card
- `SectionHeader` remains the shared component
- section gap = `spacing/12`
- page section gap = `spacing/32`
- card internal spacing/padding/radius/color bindings are inherited from the approved 07A pattern

## Calculation rule

Use the same completed/persisted muscle-exposure basis already locked for Analysis:
- primary muscle contribution `1.0`
- secondary muscle contribution `0.5`
- no load/reps/duration/assistance multiplier
- no invented conversion between recording types

Only areas with contribution in the selected saved session appear in the session-specific list.

## QA

The body-distribution insertion and current upper-body review sample were visually QA'd as PASS.

Verified:
- same approved 07A front/back body-map composition is reused
- only session-relevant area rows are shown
- unrelated lower-body/core highlights are removed from the current upper-body sample body map
- 20px page content inset and Fitness dark-surface card treatment are preserved

## Later 07D checkpoints

Do not use the older state from this pass to infer the current summary/PR/performed-exercise UI. Use:
- `2026-09-13-group07d-session-summary-unified-card.md`
- `2026-09-13-group07d-personal-record-trophy-treatment.md`
- `2026-09-13-group07d-flat-performed-exercise-table.md`
- `2026-09-13-group07-session-detail-current-checkpoint.md`

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
