# Group 07B — Integrated Body Detail Card Exploration

**Date:** 2026-09-13  
**Status:** FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

## Scope

Current 07B exploration:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

This exploration tests a tighter visual continuation from the current 07A body-distribution card by placing the selected-body map, helper copy, and contributing-exercise rows inside one shared outer card.

This does **not** yet resolve the open product-policy conflict about selected-body detail vs. the previously locked inline-expansion behavior, and it does not approve universal trailing `kg` values for all recording types.

## Figma changes

### Integrated card
- former `BodyMapGroup` renamed/reworked as `SelectedBodyDetailCard` — `887:1034`
- size: `320 × 502`
- vertical Auto Layout
- horizontal padding: `spacing/20`
- vertical padding: `spacing/16`
- internal gap: `spacing/16`
- `bg/surface`, `border/subtle`, `radius/md` bindings reused from the Fitness design system

### Body map
- `BodyMapPreview` — `887:1035`
- reduced from `320 × 270` to `280 × 184`
- inner surface/border removed because the integrated parent card now owns the shell
- selected-body opacity/highlight behavior preserved
- front/back body placement aligned to the same compact geometry used by 07A body-map presentation

### Helper copy
- remains directly below the body map
- width aligned to the card internal content line: `280px`

### Contributing exercise block
- former external selected-area section moved inside `SelectedBodyDetailCard`
- renamed `ExerciseContributionSection` — `887:1063`
- `SectionHeader / Trailing=None` retained for `진행한 운동`
- section internal gap: `spacing/12`

### Exercise list
- nested `ListCard` shell removed; the integrated outer card now owns surface/radius
- list width: `280px`
- three `AnalysisExerciseVolumeRow` instances retained
- row height: `60px`
- vertical padding: `spacing/8`
- horizontal padding becomes `0` because the outer card already provides the `spacing/20` inset
- row content geometry therefore remains equivalent to the previous 320px list with 20px row padding
- content dividers retained between rows at `280px`
- long exercise names remain single-line with ending ellipsis

Current review sample names:
- `원암 뉴트럴 그립 케이블 로우`
- `시티드 케이블 로우`
- `플레이트 로드 T바 로우 머신`

## QA

Read-back checks:
- outer card semantic Variable bindings: PASS
- 20px horizontal / 16px vertical card spacing bindings: PASS
- shared SectionHeader instance retained: PASS
- shared AnalysisExerciseVolumeRow instances retained: PASS
- nested list surface removed: PASS
- long-name truncation remains active: PASS
- period selector remains 360px full-bleed above content: PASS
- full-screen screenshot after integration: PASS

## Open product decisions

Still open and intentionally unchanged by this exploration:
1. whether this selected-body detail page supersedes the previously locked 07B inline-expansion behavior
2. a recording-type-safe trailing metric for contributing-exercise rows; current `kg` values are still review placeholders and are not universal

**NO CURSOR IMPLEMENTATION HANDOFF.**
