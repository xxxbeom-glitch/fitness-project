# Shared SectionHeader Consolidation

**Date:** 2026-09-13  
**Status:** FIGMA DESIGN-SYSTEM QA PASS · SHARED COMPONENT CONSOLIDATED · NO PRODUCT BEHAVIOR CHANGE

## Why this cleanup was needed

During 07A review, the `02A_Home_NoRoutine` screen was found to already use the same 24px section-header visual pattern that Analysis had recreated as a separate `AnalysisSectionHeader` component.

Before cleanup:
- 02 Home used repeated raw 24px `section-header` frames.
- 07 Analysis used a separate `AnalysisSectionHeader` component set.
- the existing shared component named `SectionHeader` was actually a different 40px list/search label pattern used by Group 04.

Keeping all three structures would create duplicate visual patterns and ambiguous component naming.

## Shared 24px SectionHeader — canonical

A new shared component set now owns the ordinary 24px page-section header pattern.

Figma:
- `SectionHeader` — `942:7323`
- `Trailing=None` — `942:7315`
- `Trailing=Meta` — `942:7317`
- `Trailing=Action` — `942:7320`

All variants:
- width `320`
- height `24`
- left title uses the existing local section-heading style
- trailing text uses the existing secondary compact text style
- title/trailing text use content-width auto resize so longer labels do not wrap or clip unexpectedly

Variant meaning:
- `Trailing=None`: title only
- `Trailing=Meta`: right-side informational text, not an action
  - example: `이번 달 운동 진행률` / `15 / 30일`
- `Trailing=Action`: right-side navigation/action text
  - example: `최근 운동` / `전체 기록`

Meta and Action remain separate even when their visual treatment is similar because their interaction semantics differ.

## Previous 40px SectionHeader renamed

The older `SectionHeader` component set used by Group 04 is not the same visual/structural role.

It is now renamed:
- `ListSectionLabel` — `638:3359`

Existing Group 04 instances remain connected and visually unchanged.

## Migration applied

### 02 Home
All canonical 24px raw section-header frames across the four Home states were replaced with the shared component.

Migrated count:
- `12` raw frames -> shared `SectionHeader` instances

Examples:
- `처음 운동을 시작해볼까요?` -> `Trailing=None`
- `이번 달 운동 진행률 / 15 / 30일` -> `Trailing=Meta`
- `최근 운동` -> `Trailing=None`
- `선택한 루틴` -> `Trailing=None`
- `진행 중인 운동` -> `Trailing=None`

Post-migration raw 24px section-header count on the canonical `02 홈` page:
- `0`

### 07 Analysis
All existing `AnalysisSectionHeader` instances on the Analysis page were migrated to the same shared component.

Migrated count:
- `20` Analysis instances -> shared `SectionHeader` instances

The old `AnalysisSectionHeader` component has no remaining live instances and is removed from the active canvas/library structure.

Current shared-instance total across the migrated 02/07 pages:
- `32`

## QA

Focused visual QA:
- `02A_Home_NoRoutine` screenshot: PASS
- current `07A_분석홈_부위Row딥링크_Exploration` screenshot: PASS

A first migration pass exposed a long-title width issue because the source Analysis title layer had fixed text width. The shared master was corrected to content-width auto resize, after which `처음 운동을 시작해볼까요?` and the remaining Home headers render as a single line without clipping.

No intended layout, typography, spacing, navigation, or product-behavior change was introduced beyond component consolidation and naming cleanup.

## Rule going forward

Use the shared 24px `SectionHeader` for ordinary page-section headers.

- use `Trailing=None` for title-only sections
- use `Trailing=Meta` for informational trailing values/counters
- use `Trailing=Action` for tappable/navigation trailing text
- do not create a page-specific parallel 24px section-header component when this shared pattern is sufficient
- keep `ListSectionLabel` for its separate 40px list/search grouping role

**NO CURSOR IMPLEMENTATION HANDOFF.**