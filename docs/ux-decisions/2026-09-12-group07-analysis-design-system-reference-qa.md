# Group 07 Analysis / Workout History — Design-System + Reference QA

**Date:** 2026-09-12  
**Status:** REVIEW DRAFT REFINED · FIGMA FOCUSED QA PASS · NOT PO APPROVED  
**Scope:** `07 분석 · 운동 기록` exploration의 디자인시스템 재점검, Mobbin reference review, 추가 refinement 및 focused QA

## Basis reviewed

Design / QA references:
- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- current local Fitness Variables / Styles / Components in Figma

Product / Analysis references remain unchanged:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

Important implementation interpretation:
- the older Tonal Phase-A spec remains design rationale/reference,
- current approved Fitness Figma local system is the current visual implementation basis for Group 07,
- Group 07 therefore continues to use current local SUIT text styles, dark Fitness semantic variables, and current spacing/radius tokens rather than reverting approved screens to the older Phase-A proxy typography.

## Mobbin reference review

Functional reference — Hevy:
- Statistics / advanced statistics list: https://mobbin.com/screens/86efd7f0-76d0-4934-a354-e72a388850a0
- Statistics body graph: https://mobbin.com/screens/c8837fd2-c265-4e1a-8e27-7bcb5bb463bb
- Muscle distribution: https://mobbin.com/screens/c5399ee4-59cc-485e-a29c-a15de74be849
- Exercise summary/progress: https://mobbin.com/screens/80f164aa-c011-4469-ba7a-158116427cab

Visual hierarchy reference — Tonal:
- movement power/history: https://mobbin.com/screens/309a6d35-3e00-43b9-9d55-d3181ff4dbbb
- monthly volume review: https://mobbin.com/screens/fc400513-e1be-49cc-9f5b-8cd6fd55f259
- total-workouts statistics: https://mobbin.com/screens/93ffb0da-29cd-4a78-8c10-8f5fa1e24966
- monthly review stats hierarchy: https://mobbin.com/screens/0fd9fa1a-0438-4448-b0dd-2e9d45029165

Observed direction used in the refinement:
- analysis home should remain summary-first instead of becoming a dense dashboard,
- period navigation is clearer as a flat tab treatment than repeated pill chips,
- large/clear metric conclusions should precede chart detail,
- charts should explicitly state what metric is being visualized,
- body visualization should communicate relative period emphasis rather than show every muscle at equal visual intensity,
- detailed workout history remains a drilldown surface.

No competitor branding/copy/assets were copied as production assets.

## Figma refinement applied

Canonical file: `W3lZurXCXbThP67rF2xk2b`  
Page: `07 분석 · 운동 기록` — `233:2078`

Frames retained:
- `07A_분석홈_Exploration` — `836:1112`
- `07B_부위별분석_Exploration` — `836:1265`
- `07C_운동별성장_Exploration` — `836:1383`
- `07D_운동기록_Exploration` — `836:1490`
- `07E_운동기록상세_Exploration` — `836:1593`

### 07A
- period selector: ad-hoc rounded pills -> existing local `fixed-tab-bar` 4-tab pattern
- workout consistency conclusion: long sentence -> `주 평균 3회` metric-first treatment
- recent progress rows: generic `상승` -> concrete deltas (`+2.5kg`, `+15초` examples)
- body-map sample: existing layered front/back asset retained, per-layer opacity varied to demonstrate period emphasis
- record-delta row sizing corrected so trailing delta does not wrap

### 07B
- period selector replaced with the same local 4-tab pattern
- same period-specific body-map visual-emphasis experiment applied
- existing inline contributing-exercise structure preserved

### 07C
- period selector replaced with the same local 4-tab pattern
- trend chart now explicitly says `최고 중량 기준` in the current weight+reps example
- broken exploratory series segments replaced with one clean editable trend path aligned to dated points
- `80kg` current plotted metric value exposed in the chart header
- exact recording-type graph metric remains OPEN; this is still an example visualization, not a policy lock

### 07D
- partial-save history status copy clarified from `부분` to `부분 기록`

### All five frames
- long review-artifact bottom navigation repositioned after content to remove visual overlap
- frame heights trimmed to content + consistent review spacing
- exact matching screen-level spacing / padding / radius values rebound to current local Fitness Variables
- no new token family or parallel design system created

## Focused QA

### QA-1 — Structure / Auto Layout
**PASS**

- major content stacks remain Auto Layout
- long review frames no longer have BottomAppBar/content overlap
- record delta values remain one line
- 07C chart path now matches the plotted dots
- no new unnecessary absolute layout outside chart/body-map visualization needs

### QA-2 — Design system / binding
**PASS for Group 07 screen-owned layers**

- all Group 07 screen text nodes resolve to current local text styles
- screen-owned token-like spacing/padding/radius values: no remaining raw token drift after binding pass
- 07A/07B/07C period selector main = local `638:3309`, remote = false
- local Nav Header / workout-row / chevron assets retained where already used
- no new component or variable family created

Known shared-system debt, not introduced by Group 07:
- `BottomAppBar / Active=분석` still points to the existing shared imported source used on `MVP_공용_UI`.
- localizing that shared family would affect broader navigation ownership and should be handled as a separate shared-component migration, not patched only inside Group 07.
- existing local `SectionHeader` family is not used to replace Group 07 section headings in this pass because its current typography is a legacy Inter treatment and would regress the current SUIT-based Group 07 typography. Do not modify that shared component from this exploration without impact QA on its existing users.

### QA-3 — Visual / reference / product
**PASS as exploration / NOT final approval**

- 07A hierarchy is faster to scan after period-tab and metric-first refinements
- 07B body-map emphasis no longer visually implies equal training across every muscle in the sample state
- 07C chart communicates the example metric and trend more clearly
- 07D partial state is clearer
- 07E remains the persisted-set detailed record surface
- locked Analysis IA/product rules were not changed

## Boundary

This pass improves the current Figma exploration and its mechanical consistency. It does **not** approve the final Group 07 UI and does not lock:
- the exact body-map rendering scale/thresholds,
- the recording-type-specific chart metric rules,
- representative-set / progress calculation formulas,
- empty / insufficient-data states.

## NEXT OPEN ITEM

Product Owner reviews the refined `07A_분석홈_Exploration` first, then 07B -> 07C -> 07D -> 07E.

**NO CURSOR IMPLEMENTATION HANDOFF.**
