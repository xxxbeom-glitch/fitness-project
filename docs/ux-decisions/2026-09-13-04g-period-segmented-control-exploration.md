# 04G 성장 탭 기간 선택 UI 탐색

Status: FIGMA EXPLORATION APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Scope
04G `04G_Exercise_Growth_Exploration`의 기록 추이 기간 선택 UI를 기존 드롭다운에서 compact segmented control로 교체했다.

## Figma
- Screen: `1000:1519` `04G_Exercise_Growth_Exploration`
- New shared component set: `1010:1113` `PeriodSegmentedControl`
- Variants:
  - `1010:1092` `Active=4주`
  - `1010:1099` `Active=3개월`
  - `1010:1106` `Active=1년`
- Live instance: `1010:1868` `GrowthPeriodSegmentedControl`

## UI contract
- Size: 144 x 32
- Options: `4주 / 3개월 / 1년`
- Default: `4주`
- Outer shell: `bg/surface`, `border/subtle`, `radius/md`
- Selected segment: `bg/elevated`, `radius/sm`, brand-colored selected label
- Inactive labels: `text/secondary`
- Placed inline at the right side of the `기록 추이` section header.
- Previous `최근 4주` dropdown was removed.
- Existing chart and personal-best content were not changed.

## QA
- Screenshot QA: PASS
- Shared component linkage: PASS
- Variable bindings: PASS
- Previous dropdown node removed: PASS
- No clipping/collision in 360px screen: PASS

## Notes
- This is still an exploration of 04G growth-tab presentation.
- 07C was not modified.
- No implementation/Cursor handoff is authorized by this checkpoint.
