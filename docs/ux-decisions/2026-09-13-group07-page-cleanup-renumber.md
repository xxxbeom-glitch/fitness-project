# Group 07 — Figma Page Cleanup / Renumber

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

Group 07 Figma page is cleaned to keep only the current Analysis path and the remaining workout-history screens.

Canonical Group 07 screen sequence is now:

1. `07A_분석홈` — `887:936`
2. `07B_부위상세` — `887:1028`
   - state variant: `07B_부위상세_Empty` — `1057:593`
3. `07C_운동기록_Exploration` — `836:1490`
4. `07D_운동기록상세_Exploration` — `836:1593`

`07B_부위상세_Empty` is not a separate IA destination. It is the no-record state of 07B.

## Removed from the Figma page

The following obsolete/reference frames were deleted:

- old `07A_분석홈_Exploration` — `836:1112`
- old `07B_부위별분석_Exploration` — `836:1265`
- old `07C_운동별성장_Exploration` — `836:1383`
- `07A_부위분포_OptionA_카드내요약` — `876:938`
- `07A_부위분포_OptionB_통합카드` — `876:992`
- obsolete flow-label text — `887:1117`

## Renumber rule

The former separate Group 07 `운동별 성장` screen is no longer part of the canonical Analysis IA because exercise history/growth is handled by the approved Group 04 exercise-detail tab family.

Therefore the remaining workout-history screens move up one letter:

- former 07D `운동 기록` -> current `07C_운동기록_Exploration`
- former 07E `운동 기록 상세` -> current `07D_운동기록상세_Exploration`

This is a naming/IA cleanup only. The 07C/07D visual/content designs remain pending review and are not newly approved by this checkpoint.

## Figma page organization

Page: `07 분석 · 운동 기록` — `233:2078`

Current frames are arranged left-to-right in one review row:

- 07A at `x=100`
- 07B at `x=530`
- 07B Empty at `x=960`
- 07C at `x=1390`
- 07D at `x=1820`

Page title copy was also simplified from exploration wording to `07 · 분석 / 운동 기록`.

## QA

- Figma top-level metadata read-back confirms only the current 07A/07B + 07B Empty + pending 07C/07D frames remain.
- 07A screenshot after cleanup renders normally.
- No visual content inside the approved 07A/07B screens was intentionally changed by this cleanup.

## Next open item

Continue one decision at a time from 07B:

1. decide long `진행한 운동` list behavior / row limit / `더 보기`
2. then review and finalize `07C_운동기록`
3. then review and finalize `07D_운동기록상세`

**NO CURSOR IMPLEMENTATION HANDOFF.**
