# Group 07B — Empty state plain-text refinement

**Date:** 2026-09-14  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

`07B_부위상세_Empty` keeps:
- screen title / back navigation
- period selector (`4주 / 3개월 / 1년`)
- `진행한 운동` SectionHeader

When the selected period has no contributing records:
- do not show the body map
- do not show an empty card, border, or surface
- show only `이 기간에는 {부위} 운동 기록이 없어요` as centered supporting text
- no CTA
- no placeholder exercise rows or zero-valued metric rows

If the user changes to a period with records, the normal populated 07B state returns with its body map and contributor list.

## Canonical Figma

- screen: `07B_부위상세_Empty` — `1057:593`
- section: `OverviewSection` — `1057:597`
- header: `SectionHeader` — `1057:627`
- message: `EmptyMessage_기간내기록없음` — `1057:7468`, `320 × 18`
- gap between header and message: `32px`

Removed from the empty state:
- body map `1057:599`
- card `1057:598`
- empty wrappers `1057:628`, `1057:7467`

Post-change screenshot/read-back = PASS.

This supersedes older 07B empty-state wording that retained a compact empty card.
