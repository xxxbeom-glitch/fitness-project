# Analysis Tab IA

**Date:** 2026-09-05  
**Status:** PO APPROVED / IA LOCKED / HOME PERIOD + TOP METRICS LOCKED / BODY-MAP VISUAL TREATMENT DEFERRED TO DESIGN / CALCULATION RULE NEXT

## Decision

The MVP Analysis area uses one primary `분석` tab with a summary-first home and contextual drilldowns.

Approved screen structure:

1. `분석 홈`
2. `부위별 분석`
3. `운동별 성장`
4. `운동 기록`
5. `운동 기록 상세`

This is an IA/navigation decision. It does not yet lock every metric, chart type, calculation formula, copy string, or visual layout.

---

## 1. 분석 홈

Purpose:

- show the user's recent training state at a glance
- act as the entry point into deeper Analysis screens
- avoid turning the first screen into a dense analytics dashboard

Approved content direction:

- period selection
- compact top summary metrics
- front/back body visualization for muscle-area distribution
- workout frequency summary
- recent exercise-progress summary
- recent workout records

Navigation:

- body area / distribution -> `부위별 분석`
- exercise-progress item -> `운동별 성장`
- workout-record item -> `운동 기록 상세`
- history entry / more -> `운동 기록`

### Analysis Home period — PO APPROVED

Default:

- `최근 4주`

Selectable periods:

- `4주`
- `3개월`
- `6개월`
- `1년`

Rules:

- `4주` is the default because it is long enough to reflect a repeated training pattern while remaining recent enough for actionable review.
- `1주` is not a primary Analysis-home period because it is too sensitive to one missed or shifted session and duplicates short-term status better handled by Home/recent history.
- `전체` is not a primary MVP period because long account history can flatten recent changes and make the first Analysis screen less actionable.
- the selected period applies to Analysis-home aggregate sections unless a later section-specific decision explicitly states otherwise.

### Analysis Home top summary metrics — PO APPROVED

The fixed top summary set is:

1. `운동 횟수`
2. `완료 세트`
3. `운동 시간`

#### 1. 운동 횟수

Count saved workout sessions in the selected period that contain actual persisted performed work.

- fully completed saved workout -> count 1
- saved partial workout with at least one completed/persisted set -> count 1
- discarded session -> count 0
- empty planned session with no persisted performed work -> count 0

Partial sessions remain distinguishable in workout history, but they still represent real training activity and therefore contribute to Analysis workout count.

#### 2. 완료 세트

Sum only final completed/persisted sets across saved sessions in the selected period.

- use the same final-state rule as Workout Completion Metrics
- checking/unchecking the same set multiple times does not create multiple completed sets
- planned but unfinished sets do not count
- this metric remains valid across `weight_reps`, `reps`, `duration`, `added_weight_reps`, `assisted_weight_reps`, and future set-based recording types

#### 3. 운동 시간

Sum actual saved-session exercise durations in the selected period.

- use the approved workout-time calculation rule from Workout Completion Metrics
- explicit paused time is excluded
- app backgrounding alone does not automatically remove time
- recovered sessions continue from preserved session state when technically supported

Display formatting can use human-readable total duration such as `12시간 40분`; exact typography remains a visual-design decision.

### Why `총 볼륨` is not one of the fixed three headline metrics

`총 볼륨` remains useful, but it is not universal across the approved exercise recording model.

Existing policy already excludes or limits several cases:

- `assisted_weight_reps` should not be treated as ordinary `kg × reps` volume
- `duration` should not be converted to kg volume
- bodyweight / future distance types do not share one meaningful hidden conversion

Therefore a fixed top-row `총 볼륨` number could represent only part of a user's actual training while visually appearing to summarize all training.

For MVP, volume may still appear in workout detail, exercise-specific progress, or a clearly scoped secondary Analysis module where the calculation is valid. It is not used as the universal third headline metric.

No previous-period percentage delta is locked into the top summary row yet. That can be considered later after the basic Analysis calculation/state rules are complete.

---

## 2. 부위별 분석

Purpose:

- help the user understand which body areas have been trained during the selected period

Approved direction:

- use front/back neutral-body visual assets as the current body-map concept
- visually distinguish the body areas represented by the underlying training data
- support a readable body-area breakdown alongside the visual

### Body-map visual treatment — OPEN / DESIGN-PHASE DECISION

The Product Owner explicitly does **not** lock the color/rendering behavior before actual visual design.

The following remain open and should be decided while composing the real Analysis UI and design system:

- whether the body map uses independent overlay layers, direct fills, masks, or another rendering technique
- whether training amount is shown through one hue with intensity changes, multiple related hues, another scale, or a different visual encoding
- exact neutral/untrained treatment
- exact brand color vs separate analytics accent color
- exact opacity, lightness, saturation, gradient, border, texture, or other visual states
- how much visual differentiation is readable at the final body-map size

Competitor references such as Hevy, Peloton, Tonal, Equinox+, and others are design references only; their color behavior is not adopted as product policy.

Important boundary:

- the body map remains a data visualization layer, not a second exercise-demo asset system
- exact scoring formula, primary/secondary muscle weighting, normalization, and calculation thresholds are separate product/data decisions and remain OPEN
- the eventual visual mapping from calculated values to color/appearance is deliberately deferred to the design pass so it can react to the final G Fit brand palette, contrast, asset style, and screen composition

---

## 3. 운동별 성장

Purpose:

- show progress for one selected exercise over time

Approved direction:

- exercise selection / identity is explicit
- show personal performance trend appropriate to the exercise recording type
- surface best/recent performance and PR context where available
- preserve access to the user's historical workout records for that exercise

Important boundary:

- not every exercise should be forced into a `kg` graph
- the approved recording-type model must drive which measures are meaningful (`weight_reps`, `reps`, `duration`, `added_weight_reps`, `assisted_weight_reps`, and reserved future types)
- exact graph metric and PR calculation rules remain OPEN

---

## 4. 운동 기록

Purpose:

- provide chronological access to completed and saved-partial workout sessions

Approved direction:

- date-based history list
- completed and partial records remain distinguishable
- tapping a record opens `운동 기록 상세`

This is workout-session history, not a duplicate Routine-management screen.

---

## 5. 운동 기록 상세

Purpose:

- show what actually happened in one saved workout session

Approved direction:

- session date / routine or session name where applicable
- performed exercise list
- completed set values according to each exercise recording type
- session summary values that can be derived from actually persisted work
- PR or notable-result context where valid

Partial-record rule remains unchanged:

- show only work that was actually completed/persisted
- do not reconstruct unperformed planned exercises or sets as if they happened

---

## Analysis hierarchy rule

The Analysis home must remain a summary/navigation surface.

Do not place every deep chart, full exercise history, and full workout log on the first screen.

Target hierarchy:

`분석 홈 -> 관심 영역 선택 -> 부위 / 운동 / 기록 상세`

This preserves a simple first screen while keeping deeper data available with one additional step.

---

## MVP boundary

This IA supports the already-approved MVP direction:

- date-based workout history
- prior performance by exercise
- simple PR indication
- workout summary dashboard
- basic progress analysis

Advanced analytics remain outside MVP unless separately approved.

---

## Next design pass

Already locked:

1. default period + period options
2. top summary metric set

Explicitly deferred to visual design:

- body-map color/rendering treatment

Next product/data decisions:

3. body-map calculation input, primary/secondary weighting, normalization, and calculation thresholds
4. workout-frequency definition
5. `최근 성장한 운동` selection rule
6. recent-record card/list information density
7. empty / insufficient-data states

After those product/data rules are defined, detailed wireframe/Figma composition can determine the final body-map visual treatment together with the G Fit design system.

Related metric calculation policy:

- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`