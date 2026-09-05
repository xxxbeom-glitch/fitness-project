# Analysis Tab IA

**Date:** 2026-09-05  
**Status:** PO APPROVED / IA LOCKED / HOME PERIOD + TOP METRICS LOCKED / BODY-MAP DATA BASIS LOCKED / VISUAL TREATMENT DEFERRED / BODY-AREA GRANULARITY NEXT

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

### Body-map data calculation — PO DELEGATED / PRODUCT DECISION LOCKED

The body map is driven by **completed-set muscle exposure**, not by kg volume, exercise count, or a recovery/fatigue estimate.

For every final completed/persisted set:

- each mapped **primary muscle** receives `1.0` muscle-set point
- each mapped **secondary muscle** receives `0.5` muscle-set point
- an unfinished/unpersisted set contributes `0`

If an exercise has more than one primary muscle, each primary muscle receives the full `1.0` contribution for that completed set. If it has multiple secondary muscles, each receives `0.5`.

This means muscle-set points are **per-muscle exposure scores**. Their sum across muscles can exceed the global completed-set count and must not be presented as if it were the user's literal total number of sets.

Examples:

- bench press, 4 completed sets -> chest `4.0`; triceps `2.0`; anterior deltoid `2.0` when those mappings are primary/secondary in the canonical exercise data
- an exercise with glutes + hamstrings both marked primary, 3 completed sets -> glutes `3.0`; hamstrings `3.0`

#### Recording-type rule

The body-map score deliberately does not multiply by load, reps, duration, or assistance value.

Therefore a completed set can contribute to body-area exposure whether the exercise uses:

- `weight_reps`
- `reps`
- `duration`
- `added_weight_reps`
- `assisted_weight_reps`
- future set-based recording types

This keeps the body map usable across weighted, bodyweight, timed, and assisted exercises without inventing a false common kg-volume formula.

#### Missing muscle mapping

If an exercise has no usable primary/secondary muscle mapping:

- it remains part of workout history and global workout/set summaries
- it is excluded only from the body-map muscle calculation until valid mapping exists
- the UI must not guess a muscle solely from exercise name text at runtime

#### Period values retained for design/use

For each muscle, Analysis should be able to derive and retain three related values from the same underlying score:

1. **period score** — total weighted muscle-set points in the selected period
2. **weekly-average score** — period score normalized by the eligible date span, used when a comparable rate across `4주 / 3개월 / 6개월 / 1년` is needed
3. **distribution share** — that muscle's period score divided by the sum of all muscle scores, used when a relative distribution view is useful

Weekly-average normalization uses the actual available account-history span inside the selected period rather than counting dates before the account existed. If fewer than 7 eligible days exist, the weekly-average value is treated as insufficient/unstable and the raw period score remains available; exact empty/insufficient-data presentation is decided in the later state pass.

The visual design is **not required to expose all three numbers**. Retaining them prevents the UI from forcing a new backend calculation later when the actual body-map composition is tested.

#### Interpretation boundary

`1.0 / 0.5` is a pragmatic fractional-set accounting convention for visualization and training-distribution analysis. It is **not** a claim that every secondary muscle receives exactly 50% of a primary muscle's physiological stimulus.

For MVP:

- do not label body-map levels as `optimal`, `undertrained`, `overtrained`, `recovered`, or similar physiological judgments
- do not derive readiness/recovery from these values
- do not set scientific-looking target bands solely to determine color strength

Recent resistance-training literature commonly analyzes weekly set volume, and a 2026 meta-regression explicitly evaluated indirect sets with a fractional `0.5` accounting model among its volume definitions. Hevy also documents primary `1` / secondary `0.5` as one practical way to account for overlapping volume. These support the convention as a reasonable tracking heuristic, not as an exact biological measurement.

Evidence references:

- Pelland et al., *Sports Medicine* (2026), PMID `41343037`
- Schoenfeld et al., *Journal of Sports Sciences* (2017), PMID `27433992`
- Hevy, `How Many Sets Per Muscle Group For Optimal Growth?`

### Body-map visual treatment — OPEN / DESIGN-PHASE DECISION

The Product Owner explicitly does **not** lock the color/rendering behavior before actual visual design.

The following remain open and should be decided while composing the real Analysis UI and design system:

- whether the body map uses independent overlay layers, direct fills, masks, or another rendering technique
- whether training amount is shown through one hue with intensity changes, multiple related hues, another scale, or a different visual encoding
- exact neutral/untrained treatment
- exact brand color vs separate analytics accent color
- exact opacity, lightness, saturation, gradient, border, texture, or other visual states
- how much visual differentiation is readable at the final body-map size
- whether the final visual maps primarily from weekly-average score, distribution share, or a tested combination of the retained values

Competitor references such as Hevy, Peloton, Tonal, Equinox+, and others are design references only; their color behavior is not adopted as product policy.

Important boundary:

- the body map remains a data visualization layer, not a second exercise-demo asset system
- underlying completed-set weighting is locked as above
- exact visual thresholds and rendering remain open until real design calibration
- body-area granularity / mapping to the final front-back visual regions remains a separate next decision

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
3. body-map completed-set data basis: primary `1.0` / secondary `0.5`
4. period / weekly-average / distribution-share derived values retained

Explicitly deferred to visual design:

- body-map color/rendering treatment
- exact visual thresholds / final mapping from calculated values to appearance

Next product/data decisions:

5. body-area granularity / mapping to the final front-back visual regions
6. workout-frequency definition
7. `최근 성장한 운동` selection rule
8. recent-record card/list information density
9. empty / insufficient-data states

After those product/data rules are defined, detailed wireframe/Figma composition can determine the final body-map visual treatment together with the G Fit design system.

Related metric calculation policy:

- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`
