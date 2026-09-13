# 04G Growth Personal Best Table Sync

Status: FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

- Figma screen: `04G_Exercise_Growth_Exploration` (`1000:1519`).
- `개인 최고 기록` remains separated from period-scoped trend data and keeps `전체 기록 기준` meta.
- Replaced the two standalone MetricCard tiles with the same flat metadata-table pattern used in the Exercise Information tab (`ExerciseMetadata_Flat`).
- Reused shared components:
  - `RowLabel` (`638:3323`)
  - `RowValue / Type=ValueOnly` (`638:3333`)
  - `Divider / Role=Content, Orientation=Horizontal` (`915:593`)
- Rows:
  - `최고 중량` → `80kg × 10회`
  - `최대 반복` → `70kg × 12회`
- Table width 320px, row height 52px, content divider 1px; no card shell.
- Screenshot QA: PASS; no clipping/collision.
- This checkpoint does not change 07C or finalize 04G/07C IA consolidation.
