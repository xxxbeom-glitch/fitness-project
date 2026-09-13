# Group 07 — Figma Page Cleanup / Renumber

**Date:** 2026-09-13  
**Status:** PARTIALLY SUPERSEDED BY LATER PO DECISION / CURRENT IA SYNCED / NO CURSOR HANDOFF

> Later PO direction in the same review session removed the separate `07C_운동기록_Exploration` overview.  
> The current canonical state is captured in `2026-09-13-group07-session-detail-current-checkpoint.md` and `docs/CURRENT.md`.

## Original cleanup decision

This checkpoint originally cleaned the Group 07 Figma page and moved the remaining workout-history screens up one letter after the old separate exercise-growth screen was retired.

At that intermediate point the sequence was:

1. `07A_분석홈` — `887:936`
2. `07B_부위상세` — `887:1028`
   - state variant: `07B_부위상세_Empty` — `1057:593`
3. `07C_운동기록_Exploration` — `836:1490`
4. `07D_운동기록상세_Exploration` — `836:1593`

That intermediate sequence is **no longer canonical** because the PO later removed the separate 07C workout-record overview.

## Current correction

Current canonical Group 07 IA is:

1. `07A_분석홈` — `887:936`
2. `07B_부위상세` — `887:1028`
   - state variant: `07B_부위상세_Empty` — `1057:593`
3. `07D_운동기록상세_Exploration` — `836:1593`

Rules:
- `07B_부위상세_Empty` is a state variant, not a separate IA destination.
- `07C_운동기록_Exploration` was deleted by later PO direction and must not be recreated unless the PO explicitly changes direction.
- `07D_운동기록상세_Exploration` keeps the `07D` name for now; do not auto-renumber it to `07C` without explicit PO direction.
- exercise-specific history/growth remains in the Group 04 exercise-detail family (`최근 기록 / 성장`).
- Group 06 completion `기록 상세 보기` routes to 07D, which represents one saved workout session.

## Removed obsolete/reference frames

The initial cleanup removed:

- old `07A_분석홈_Exploration` — `836:1112`
- old `07B_부위별분석_Exploration` — `836:1265`
- old `07C_운동별성장_Exploration` — `836:1383`
- `07A_부위분포_OptionA_카드내요약` — `876:938`
- `07A_부위분포_OptionB_통합카드` — `876:992`
- obsolete flow-label text — `887:1117`

Later in the same review session, the separate `07C_운동기록_Exploration` was also removed.

## Why 07C overview was removed

The PO reviewed the role of the two remaining record screens and confirmed:
- exercise-level recent history and growth already belong to Group 04
- the meaningful remaining Group 07 record surface is the saved workout-session detail
- the 07C overview therefore duplicated navigation/record concepts without a clear MVP role

The workout-session detail itself remains necessary because it is the destination for Group 06 completion `기록 상세 보기` and shows the persisted result of one completed/saved session.

## QA / Source of Truth

Current source of truth:
- `docs/CURRENT.md`
- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`

The old four-screen sequence in this file is preserved only as historical context for the cleanup sequence and must not override the later correction above.

## Current next work

- continue 07D session-detail review one decision at a time
- keep 07B long contributor-list policy deferred while 07D is under active PO review

**NO CURSOR IMPLEMENTATION HANDOFF.**
