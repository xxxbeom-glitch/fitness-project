# Analysis 07C — Exercise Progress

**Date:** 2026-09-05  
**Status:** PO APPROVED / FIRST-PASS STRUCTURE LOCKED

## Decision

`07C 운동별 성장` is the detail screen reached from an exercise row in `07A 분석 홈 > 최근 기록 변화`.

First-pass screen structure:

1. selected exercise identity
2. Analysis period selector
3. `최근 기록 변화` summary
4. `기록 추이` chart
5. recent workout records for that exercise
6. PR context where valid

## Meaning of the two main sections

### 최근 기록 변화

Purpose: give the user the short conclusion.

- compare a recent representative record with an earlier comparable record
- example: `77.5kg × 10 -> 80kg × 10`
- optimized for quickly answering: `최근에 좋아졌나?`

### 기록 추이

Purpose: show the path over time.

- show multiple dated records across the selected period
- visualize how the exercise record changed rather than only showing two endpoints
- example sequence: `75kg × 10 -> 77.5kg × 10 -> 77.5kg × 11 -> 80kg × 10`

So the relationship is:

- `최근 기록 변화` = conclusion
- `기록 추이` = process

Both remain on the same 07C screen.

## Navigation

- tap an exercise row in `07A 분석 홈 > 최근 기록 변화` -> open 07C with that exercise preselected
- back -> return to Analysis Home

## Still OPEN

The following are not locked by this approval:

- exact comparison rule when weight and reps both change, e.g. `80kg × 8` vs `77.5kg × 10`
- exact PR formula / PR types
- exact graph metric by recording type
- exact representative set selection rule
- exact treatment for `reps`, `duration`, `added_weight_reps`, and `assisted_weight_reps`
- exact chart styling

These calculation rules can be decided later without changing the approved first-pass screen hierarchy.

## Next

Proceed to `07D 운동 기록` structure and content decisions.
