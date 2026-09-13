# 04G 성장 탭 기간 선택 위치 및 패딩 조정

Status: FIGMA EXPLORATION UPDATED / PO PREFERS PERIOD OUTSIDE / VISUAL QA PASS / NO CURSOR HANDOFF

## Selected direction
- PO prefers `04G_Exercise_Growth_Exploration_PeriodOutside` over the card-inside comparison.
- Period segmented control remains outside the chart card, aligned to the `기록 추이` section header.
- The card-inside comparison screen remains in Figma only as a comparison artifact for now.

## Segmented control micro-adjustment
Shared component: `PeriodSegmentedControl` (`1010:1113`)
- Overall size remains `144 x 32`.
- Outer/internal padding increased by exactly 1px: `2px -> 3px` on all sides.
- Inter-segment gap remains `2px`.
- Each segment adjusts to approximately `44.67 x 26` within the fixed 144x32 shell.
- Variants updated consistently: `Active=4주`, `Active=3개월`, `Active=1년`.
- Approved outside-screen instance stays bound to the shared component.

## QA
- Screenshot QA on `04G_Exercise_Growth_Exploration_PeriodOutside` PASS.
- No clipping, overlap, or alignment regression observed.
- Chart and `개인 최고 기록` content unchanged.

## Scope
- This is a Figma/Product exploration refinement only.
- No Cursor/development handoff.