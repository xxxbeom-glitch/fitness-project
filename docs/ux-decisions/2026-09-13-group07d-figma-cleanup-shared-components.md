# Group 07D — Figma cleanup / shared component relocation

**Date:** 2026-09-13  
**Status:** PO VISUAL DIRECTION ACCEPTED / FIGMA CLEANUP APPLIED / SHARED-UI MASTER RELOCATION QA PASS / NO CURSOR HANDOFF

## Purpose

This checkpoint records the cleanup performed after the Product Owner accepted the current 07D visual direction. It does not reopen the already-approved 07A/07B decisions or the selected 07D visual treatments.

## Comparison cleanup — COMPLETE

The temporary performed-exercise comparison section has been removed from the canonical Group 07 page.

Removed section:
- `07D_수행운동_미니멀_비교안` — former node `1092:840`

The removed section contained the three already-reviewed alternatives:
- `A_TonalVertical`
- `B_Condensed`
- `C_MicroTable`

The selected C micro-table treatment remains applied in the live 07D screen. Only the temporary comparison artifacts were removed.

Current live performed-exercise nodes remain:
- `WorkoutSummaryCard` — `858:7171`
- `WorkoutSummaryTable` — `1097:7116`

No new shared micro-table component was created in this cleanup. The live micro-table structure remains stable and may be componentized later as a non-blocking design-system cleanup once 07D product rules are finished.

## 07D component masters moved to shared UI — COMPLETE

The two approved 07D-scoped component masters were moved off the Group 07 canvas and into the canonical shared UI page.

Target page:
- `MVP_공용_UI` — `105:3113`

Moved masters:
- `07D/PersonalRecordTrophyCard` — `1113:733`, `320 × 126`
- `07D/SessionSummaryCard` — `1124:736`, `320 × 159`

Current shared-UI canvas placement:
- `07D/PersonalRecordTrophyCard` — x=`6480`, y=`0`
- `07D/SessionSummaryCard` — x=`6480`, y=`166`

The components remain 07D-scoped in product meaning. This change only centralizes their master/original location on the shared UI page.

## Instance-link QA — PASS

Live 07D instances were verified after the move:
- `PersonalRecordTrophyCard` instance — `1113:739` → master `1113:733`
- `SessionSummaryCard` instance — `1124:754` → master `1124:736`

The master move preserved the existing instance links; no detach/rebuild occurred.

Group 07 page verification:
- temporary comparison section is absent
- no component/component-set masters remain on the Group 07 page
- canonical 07D screen remains `07D_운동기록상세_Exploration` — `836:1593`

## Visual QA — PASS

A full 07D screenshot was re-read after cleanup.

Verified unchanged:
- session intro
- `오늘의 신기록` trophy treatment
- PR → session-summary order
- unified 2 × 2 session summary
- session body distribution
- selected C micro-table performed-exercise treatment

No visual regression was observed from moving the masters or deleting the comparison artifacts.

## Current geometry evidence

Actual current Figma root frame:
- `07D_운동기록상세_Exploration` — `360 × 1437`

Its current content frame begins at y=`138` and has height `1210`, so the content region ends at y=`1348` inside the root frame.

This corrects the older checkpoint wording that described the root frame itself as `360 × 1348`.

## NEXT OPEN ITEM

The visual comparison/review gate is complete. Continue the remaining 07D product rules one decision at a time:

1. presentation when a saved session has no eligible `weight_reps` total volume; Group 06 already supports `총 볼륨 —`, so 07D should be reviewed for the same meaning and visual treatment rather than inventing another metric
2. multiple-PR detail scope in 07D
3. additional session metadata/actions only if genuinely required for MVP

The 07B long contributor-list policy remains deferred until the current 07D work is paused or completed.

**NO CURSOR IMPLEMENTATION HANDOFF.**
