# Group 07B — 07A Visual / Binding Sync

**Date:** 2026-09-13  
**Status:** FIGMA APPLIED / VISUAL QA PASS / PRODUCT POLICY STILL OPEN / NO CURSOR HANDOFF

## Scope

Current 07B exploration:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

This pass applies the common visual/design-system rules already established in the refined 07A screen without changing the unresolved 07B product-policy question.

## Applied

### Analysis period selector
- reused shared `AnalysisPeriodTabs`
- options remain `4주 / 3개월 / 1년`, default `4주`
- moved from the inner 320px content column to the same 360px full-bleed rail used by current 07A
- position: `x=0 / y=138 / 360×54`
- content column starts at `x=20 / y=216 / width=320`, preserving the previous body-map vertical position

### Section / spacing bindings
- page content remains `spacing/20` inset
- major section gap remains `spacing/32`
- section header → content remains `spacing/12`
- existing shared `SectionHeader / Trailing=None` is retained
- body-map surface/radius/stroke bindings remain on current Fitness variables

### 진행한 운동 list
The previous loose three-row list now uses the same grouped-list grammar established in 07A:
- shared `ListCard` shell
- `AnalysisExerciseVolumeRow` instances
- shared `Divider / Role=Content` between rows
- divider inset = `spacing/20`
- row = `60px`
- row horizontal padding = `spacing/20`
- row vertical padding = `spacing/8`
- identity gap = `spacing/12`
- thumbnail = `44×44`

Current Figma nodes:
- list wrapper `887:1065`
- shared `ListCard` instance `986:620`
- divider wrappers `986:621`, `986:623`
- contributor row master `891:3581`
- exercise identity master `904:7258`

### Long exercise names
07B contributor exercise names now follow the same long-name principle used in refined 07A:
- `heading/02` 14 / 20
- `text/primary`
- one line
- ending ellipsis
- row height must not grow for a long title

Review samples were changed to real exercise-data-style names to exercise the layout:
- `원암 뉴트럴 그립 케이블 로우`
- `시티드 케이블 로우`
- `플레이트 로드 T바 로우 머신`

The trailing `kg` samples remain only review fixtures. This sync does **not** resolve the separate open decision about recording-type-safe contributor metrics.

## QA

- full-bleed period rail matches current 07A geometry: PASS
- body-map content vertical position preserved after tab reparenting: PASS
- `ListCard` / shared Divider composition: PASS
- spacing variable bindings on rows/dividers: PASS
- 44px thumbnail alignment: PASS
- long exercise-name single-line behavior: PASS
- full 07B screenshot read-back: PASS
- no clipping/collision introduced: PASS

## Boundary

This is visual/design-system synchronization only.

Still open:
1. whether selected-body-detail 07B supersedes the previously locked inline-expansion policy
2. if approved, the recording-type-safe trailing metric instead of a universal `kg` value

**NO CURSOR IMPLEMENTATION HANDOFF.**