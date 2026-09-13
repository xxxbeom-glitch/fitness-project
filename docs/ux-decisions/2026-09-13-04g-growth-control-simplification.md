# 04G Growth Control Simplification

Status: FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

## Figma
- Screen: `04G_Exercise_Growth_Exploration` (`1000:1519`)
- Removed nested `4주 / 3개월 / 1년` tab row from the Growth tab.
- Reused the existing `FilterSelectButton` as the single period control.
- Period control label: `최근 4주`.
- Removed the user-facing metric dropdown. The growth metric is selected automatically by recording type/exercise semantics.
- Chart header now communicates the metric as `최고 중량`, with the current selected-period change shown as `+2.5kg`.
- Resulting Growth content is simplified to: `기록 추이 + 기간 선택` -> chart -> `개인 최고 기록` table.

## QA
- Screenshot QA PASS.
- No overlap/clipping after removing the nested period tabs.
- Existing shared `FilterSelectButton`, `SectionHeader`, RowLabel/RowValue, and Divider assets remain reused.

## Open
- This is still an exploration. 07C remains unchanged.
- Final metric-selection policy by recording type is not locked here.
