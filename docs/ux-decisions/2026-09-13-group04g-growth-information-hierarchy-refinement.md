# 04G Growth tab — information hierarchy refinement

**Status:** FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

## Scope
Refines only the exploratory `04G_Exercise_Growth_Exploration` screen in Figma. `07C_운동별성장_Exploration` remains unchanged and no IA merge/delete decision is made here.

Canonical Figma file: `W3lZurXCXbThP67rF2xk2b`

Exploration screen:
- `04G_Exercise_Growth_Exploration` — `1000:1519`
- Growth tab uses shared `fixed-tab-bar` 3-tab variant with `Active=성장`.

## Refinement rationale
The earlier version repeated the same `80kg` fact across recent-change, trend, and PR blocks and made the scope of `4주 / 3개월 / 1년` ambiguous.

The refined hierarchy is:
1. `기록 추이`
   - existing shared `FilterSelectButton` metric selector, default sample `최고 중량`
   - existing shared `AnalysisPeriodTabs`, default `4주`
   - one trend card whose headline is the selected-period delta (`4주 변화 / +2.5kg`)
2. `개인 최고 기록`
   - `SectionHeader / Trailing=Meta`
   - meta copy `전체 기록 기준` so PR scope is explicitly independent from the selected trend period
   - two existing `MetricCard` instances with richer context:
     - 최고 중량: `80kg × 10회`
     - 최대 반복: `70kg × 12회`

## Removed from this exploration
- standalone `최근 기록 변화` card
- duplicate current-value presentation that repeated the same 80kg fact across multiple adjacent blocks

## Design-system reuse
Reused existing assets; no new shared component was created:
- `fixed-tab-bar` 3-tab variant
- `SectionHeader`
- `AnalysisPeriodTabs`
- `FilterSelectButton`
- `MetricCard`
- existing 07C trend-chart visual frame/tokens as the exploration chart base

Page content inset remains 20px; major section gap is 32px.

## QA
Screenshot QA on `1000:1519` after refinement: PASS.
- Growth tab active state visible
- `기록 추이` header + metric selector readable
- period selector visually scoped to trend content
- chart card renders without clipping/collision
- all-time PR scope explicitly shown as `전체 기록 기준`
- metric values include load/repetition context
- 07C not modified

## Open product decisions
- This does not decide whether 07C is eventually retained, merged into 04G, or removed.
- Metric selector behavior/options by recording type are not locked in this checkpoint.
- Current values are review placeholders, not production fixtures.
