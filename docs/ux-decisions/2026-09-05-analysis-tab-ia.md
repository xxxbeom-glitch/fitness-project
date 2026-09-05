# Analysis Tab IA

**Date:** 2026-09-05  
**Status:** PO APPROVED / IA LOCKED / SCREEN CONTENT DETAILS OPEN

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
- compact summary metrics such as workout count / completed sets / training volume where valid
- front/back body visualization for muscle-area distribution
- workout frequency summary
- recent exercise-progress summary
- recent workout records

Navigation:

- body area / distribution -> `부위별 분석`
- exercise-progress item -> `운동별 성장`
- workout-record item -> `운동 기록 상세`
- history entry / more -> `운동 기록`

The exact visible metric set and ordering remain OPEN for the next screen-content pass.

---

## 2. 부위별 분석

Purpose:

- help the user understand which body areas have been trained during the selected period

Approved direction:

- use front/back neutral-body visual assets
- highlight only the relevant trained areas rather than showing a decorative anatomical image with no data meaning
- support a readable body-area breakdown alongside the visual

Important boundary:

- the body map is a data visualization layer, not a second exercise-demo asset system
- exact scoring/intensity formula, color scale, and whether distribution uses sets, effective volume, or another normalized measure remain OPEN

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

Next task is to define the exact `분석 홈` content contract before drawing detailed UI:

1. default period and period options
2. exact top summary metrics
3. body-map calculation input and display rule
4. workout-frequency definition
5. `최근 성장한 운동` selection rule
6. recent-record card/list information density
7. empty / insufficient-data states

After those are locked, proceed to wireframe/Figma composition.
