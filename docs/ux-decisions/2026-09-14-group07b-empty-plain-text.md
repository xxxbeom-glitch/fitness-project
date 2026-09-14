# Group 07B — Empty state plain-text refinement

**Date:** 2026-09-14  
**Status:** PO APPROVED / FINAL CENTERING CONFIRMED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

`07B_부위상세_Empty` keeps only:
- screen title / back navigation
- period selector (`4주 / 3개월 / 1년`)

When the selected period has no contributing records:
- do not show the body map
- do not show the `진행한 운동` SectionHeader
- do not show an empty card, border, or surface
- show only `이 기간에는 {부위} 운동 기록이 없어요`
- center the message horizontally and vertically in the remaining screen area below the period tabs
- no CTA
- no placeholder exercise rows or zero-valued metric rows

If the user changes to a period with records, the normal populated 07B state returns with the `진행한 운동` section, body map, and contributor list.

## Canonical Figma

- screen: `07B_부위상세_Empty` — `1057:593`
- period tabs end at y=`192`
- centered empty-state content area: `Content` — `1057:596`, x=`20`, y=`192`, `320 × 698`
- message: `EmptyMessage_기간내기록없음` — `1057:7468`, centered within the content area

Removed from the empty state:
- body map `1057:599`
- card `1057:598`
- empty wrappers `1057:628`, `1057:7467`
- `진행한 운동` SectionHeader `1057:627`
- former `OverviewSection` wrapper `1057:597`

Final PO visual confirmation after the last Figma adjustment: centered placement accepted.

Post-change screenshot/read-back = PASS.

This supersedes older 07B empty-state wording that retained either a card or the `진행한 운동` section title in the zero-record state.
