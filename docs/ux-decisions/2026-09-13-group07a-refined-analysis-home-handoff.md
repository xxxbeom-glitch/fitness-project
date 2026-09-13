# Group 07A — Refined Analysis Home / New-Chat Handoff

**Date:** 2026-09-13  
**Status:** FIGMA REVIEW DRAFT / PO-DIRECTED REFINEMENT APPLIED / CHART SCALE·BUCKET RULES OPEN / NO CURSOR IMPLEMENTATION HANDOFF

## Purpose

This checkpoint records the Product Owner review work completed in the current conversation so the next chat can continue from the exact current Group 07 state without reopening completed mechanical QA.

This is **not final Product Owner approval of Group 07**. It records the latest review-draft artifact and the decisions/questions that are currently active.

---

## Canonical Figma / active review artifacts

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `07 분석 · 운동 기록` — `233:2078`

Current active refined 07A frame:
- `07A_분석홈_부위Row딥링크_Exploration` — `887:936`

Current selected-body 07B exploration candidate:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

Current 07A trend-card nodes:
- `ActivityTrendCard` — `922:1519`
- `MetricChart_4Weeks` — `922:1523`
- metric dropdown instance — `925:600`

Relevant local analysis row master:
- `AnalysisExerciseVolumeRow` — `891:3581`

Earlier base exploration frames remain reference artifacts unless explicitly removed:
- `07A_분석홈_Exploration` — `836:1112`
- `07B_부위별분석_Exploration` — `836:1265`
- `07C_운동별성장_Exploration` — `836:1383`
- `07D_운동기록_Exploration` — `836:1490`
- `07E_운동기록상세_Exploration` — `836:1593`

---

# 1. 07A top area — period selector + trend card

## Period selector

The Analysis period remains the approved set:
- `4주`
- `3개월`
- `6개월`
- `1년`

Current Figma refinement:
- the period tab bar is now **360px full width** at the screen level.
- the underline/tab rail no longer inherits the inner 20px content margin.
- downstream cards/content keep their normal inner content width.

## Headline metric presentation changed from 3 cards to one chart card

The three approved headline metrics remain unchanged as product meaning:
- `운동 횟수`
- `완료 세트`
- `운동 시간`

The current 07A review-draft presentation changed from three simultaneous `MetricCard`s to a **single metric trend card**.

Current structure:
- top-left = selected metric's aggregate value only, e.g. `12회`
- top-right = small metric dropdown, e.g. `운동 횟수 ▾`
- below = fixed-size trend chart

The duplicate left-side metric label was removed because the dropdown already communicates the active metric.

### Metric dropdown

The current dropdown reuses the existing Fitness `FilterSelectButton` pattern rather than creating a new parallel control.

Current review size:
- approximately `104 × 32`

Options:
- `운동 횟수`
- `완료 세트`
- `운동 시간`

The original `FilterSelectButton` master remains the existing shared source; the analysis card uses a compact instance treatment.

### Current trend-card geometry

Current Figma:
- card = `320 × 208`
- standard horizontal card padding = `spacing/20`
- chart area = `280 × 132`
- chart-area size must remain stable when metric or period changes

Current `운동 횟수` sample:
- aggregate value = `12회`
- four buckets = `2 / 3 / 4 / 3`
- current sample Y-axis = `0 / 2 / 4 / 6`

The sample values are review data only, not product fixtures.

---

# 2. Chart-axis direction — current PO-reviewed direction

Reference-first review was performed against Mobbin before the latest Figma change.

Key reference patterns:
- Hevy August Report — same chart area switches `Workouts / Duration / Volume / Sets`
  - https://mobbin.com/screens/f0d75c60-056b-445a-8753-95ef4b804adf
- Tonal Total Workouts — stable chart frame with Week / Month / Year
  - https://mobbin.com/screens/8815ce5b-8321-434d-afd7-3a8f55f81542
- Tonal Total Volume — same frame pattern with different unit / scale
  - https://mobbin.com/screens/7b996db9-f556-4656-aea3-ac8e76be62aa
- Strava Progress — stable graph region across range selection
  - https://mobbin.com/screens/8dc137a4-09f0-4a04-adfd-1f4c6719c712
- Bevel Activity Summary — fixed graph region across `1M / 3M / 6M / 1Y`
  - https://mobbin.com/screens/c5c48379-c32a-4d8a-aa11-e4c567c478a4
- Garmin Connect running analytics — period and metric selectors are independent while the chart region remains stable
  - https://mobbin.com/screens/22bd5bab-877b-4bc6-9aad-23a44b500678

## Current visual rule applied in Figma

The Y-axis is now represented with **4 fixed visual levels** rather than the earlier 3-label sample.

Current sample:
- `0 / 2 / 4 / 6`

Applied rule at review-draft level:
- chart frame size does not change
- Y-axis label count/positions do not change between metrics
- grid positions do not change between metrics
- selected metric changes the **numbers / units / bar heights**, not the physical graph region
- period change must follow the same fixed-frame principle

## Still OPEN — must be defined before this becomes a locked chart spec

The following exact calculation rules are **not yet locked**:
- how the Y-axis maximum is calculated from data
- rounding / “nice number” rules for each metric
- whether the upper bound uses headroom and, if so, exact headroom
- bucket definition for `4주 / 3개월 / 6개월 / 1년`
- maximum bucket count
- bar width / gap changes as bucket count changes
- X-axis label density and which bucket labels are shown
- tap / tooltip behavior for hidden or dense bucket labels
- zero-data and insufficient-data behavior
- exact formatting for long duration values

Do not implement an arbitrary dynamic axis before these are defined.

---

# 3. 07A `운동 부위 분포`

The earlier top-3-only list was rejected.

Current review-draft uses one integrated card containing:
- front/back body visualization
- full body-area distribution rows

Section title:
- `운동 부위 분포`

No section-level `전체 보기` action is currently used because all body-area groups are visible in the card.

Current card spacing:
- `BodyDistributionCard` uses `spacing/20` horizontal padding.
- body-map preview and ranked-list content align to the same 20px internal card line.

## Current body-area taxonomy shown in 07A

The Product Owner corrected the list to the current **7 primary body-area groups**:
- 가슴
- 등
- 어깨
- 하체
- 이두
- 삼두
- 코어

`팔` must not replace the separate `이두 / 삼두` groups in this view.

Current sample order / percentages in Figma:
- 하체 `31%`
- 등 `28%`
- 가슴 `21%`
- 어깨 `12%`
- 이두 `3%`
- 삼두 `3%`
- 코어 `2%`

These values intentionally sum to `100%`, but they are **sample review values only**.

Distribution meaning remains based on the already-locked weighted completed-set exposure:
- primary mapped muscle = `1.0`
- secondary mapped muscle = `0.5`
- distribution share = area score / total mapped score

Each row currently keeps a chevron and is treated as a drilldown affordance.

---

# 4. 07A `최근 기록 변화`

This section was materially refined again after the earlier 2026-09-13 note in `2026-09-12-group07b-e-local-component-spacing-qa.md`.

**This checkpoint supersedes the older “exercise name + delta only” presentation note.**

Current row information:
- exercise thumbnail
- exercise name
- current representative record
- delta in parentheses
- chevron

Examples currently shown:
- `벤치프레스` — `80kg (+2.5kg)`
- `랫풀다운` — `62.5kg (+2.5kg)`
- `플랭크` — `75초 (+15초)`

Current visual hierarchy:
- exercise name = `heading/02`, 14 Bold, `text/primary`
- current record = `body/01`, 14 Medium, `text/primary`
- delta = `label/02`, 12 Medium, `brand/primary`
- chevron = tertiary treatment

Thumbnail treatment:
- `44 × 44`
- radius `8`

The rows are no longer three independent rounded cards.

Current presentation:
- one shared outer card
- three internal rows
- row horizontal padding = `spacing/20`
- content dividers align to the same 20px internal card line
- compact identity/delta gaps remain on the existing smaller spacing tokens where appropriate

Navigation responsibility remains:
- row tap -> selected exercise in `07C 운동별 성장`
- `04G_Exercise_History` remains the canonical detailed date-by-date / set-level exercise history UI
- 07C should route to/reuse 04G when full history is needed rather than duplicating another detailed exercise-history pattern

No section-level `전체 보기` is currently used for `최근 기록 변화`.

---

# 5. Analysis exercise identity / thumbnail reuse

Existing exercise-list components were too broad for repeated analysis-row identity use, so the current review introduced a lightweight local analysis identity pattern:
- exercise thumbnail
- exercise name

Current thumbnail size after PO review:
- `44px`

The same identity pattern is reused in:
- 07A recent-record-change rows
- 07B selected-body contributing-exercise rows

This avoids rebuilding separate thumbnail/name structures across Analysis screens.

---

# 6. Shared Divider component refinement

During the 07A row-card refinement, the existing file was checked for repeated divider usage.

Two real visual roles were identified rather than forcing one raw color everywhere:

## `Divider / Role=Content`
- semantic role: ordinary list/content separation
- token/color basis: `border/default`
- visual color: approximately `#232326`

## `Divider / Role=ActionSheet`
- semantic role: action-sheet/menu separation
- token/color basis: `bg/elevated`
- visual color: approximately `#1E1E22`

Orientation support:
- Horizontal
- Vertical

The shared divider pattern was applied to the relevant existing 02/03 Action Sheet and 04/07 content-list cases rather than leaving repeated raw divider frames.

Focused screenshot/read-back QA during the edit showed no intended visual regression.

---

# 7. Fitness horizontal spacing calibration — PO APPROVED 2026-09-13

Cross-screen Figma QA against existing Routine / Active Workout / Completion / Analysis artifacts showed that current Fitness has converged on a stronger 20px horizontal rhythm than the older Phase-A reconstruction note implied.

Current rule:
- 360px Fitness page content inset = `spacing/20`
- standard 320px page-level card horizontal padding = `spacing/20`
- visually equivalent adjacent standard cards should not alternate between 16 and 20 without a component-role reason
- `spacing/16` remains valid for compact internals, small metric tiles, dense selector rows, chart internals and other intentionally compact roles
- vertical padding remains component-role specific
- deliberate full-bleed patterns such as the approved Analysis period tab rail may break the 20px line

Canonical design-system spec updated:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

Applied in current 07A:
- `ActivityTrendCard` horizontal padding -> `spacing/20`
- `BodyDistributionCard` horizontal padding -> `spacing/20`
- `AnalysisProgressRow` horizontal padding -> `spacing/20`
- recent-progress dividers -> `spacing/20` inset
- existing `WorkoutRow` already used `spacing/20` and remains unchanged

Focused Figma screenshot/read-back after the change showed no clipping/collision and a more consistent horizontal alignment.

---

# 8. 07B selected-body detail — CURRENT EXPLORATION CANDIDATE, NOT LOCKED

The current Figma exploration diverged from the older approved 07B inline-expansion policy.

Current candidate behavior:
- user taps a body-area row in 07A
- 07B opens already scoped to that selected area, e.g. `등 분석`
- the broad 7-area distribution list is **not repeated** on that selected-area detail
- large front/back body map remains
- helper copy explains the selected-period contribution basis
- `진행한 운동` shows exercises that contributed to the selected area

Current row pattern:
- thumbnail
- exercise name
- trailing total-weight sample

Current sample:
- 랫풀다운 — `3,030kg`
- 시티드 로우 — `2,430kg`
- 바벨 로우 — `1,860kg`

## IMPORTANT LOCK CONFLICT

The canonical approved document `2026-09-05-analysis-body-area-drilldown.md` still says:
- 07B contains the broad body-area distribution list
- tapping a row expands contributing exercises **inline**
- no separate selected-body detail page is introduced

Therefore the current `887:1028` selected-body page behavior is **exploration only** until the Product Owner explicitly approves superseding the old 07B interaction decision.

Do not silently rewrite the locked 07B policy from the Figma draft alone.

## Recording-type issue still open

Trailing `kg` is not a universal exercise metric.

Ordinary `weight_reps` can support total weight/volume, but:
- `reps`
- `duration`
- `assisted_weight_reps`
- other non-ordinary-weight types

must not be forced into a false kg value.

The selected-body exercise-row metric needs a recording-type-safe rule before lock.

---

# 9. Other 07A review changes retained

- the earlier `요즘 운동 흐름` / workout-frequency block was removed from the current 07A review draft by Product Owner request.
- lower Analysis content was pulled upward after that removal.
- Group 07 bottom app bar remains intentionally absent during current content review.
- sample values / sample chart bars / sample percentages are not product data and must not be treated as locked fixtures.

---

# NEXT OPEN ITEM — exact resume point

Resume in **Product/UX + Figma review mode**, no development handoff.

1. **Define the adaptive chart rule** while preserving the current fixed visual frame:
   - Y-axis max / rounding per metric
   - period bucket rules for `4주 / 3개월 / 6개월 / 1년`
   - X-axis label-density rule
   - bar width/gap behavior
   - tooltip/tap behavior
   - zero/insufficient-data behavior
2. Apply/QA only the resulting chart-rule changes in the current 07A refined frame.
3. Before locking 07B, explicitly resolve whether the selected-body-detail exploration (`887:1028`) supersedes the existing approved inline-expansion 07B policy.
4. Define a recording-type-safe trailing metric for 07B contributing-exercise rows if the selected-body-detail direction is approved.

Do **not** repeat the already-passed Group 07 local-component / spacing migration QA unless a new shared-system change creates a concrete regression risk.

**NO CURSOR IMPLEMENTATION HANDOFF.**
