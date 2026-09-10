# ExerciseCard ExerciseInfo layout correction

**Status:** PO APPROVED / FIGMA REFLECTED / FOCUSED QA PASS

**Date:** 2026-09-10

## Decision

`ExerciseCard`의 상단 `CardHeader` 안에 있는 `ExerciseInfo`는 고정 높이 또는 상단 정렬로 두지 않는다.

- `ExerciseInfo`는 `CardHeader`의 세로축을 **Fill container** 한다.
- `ExerciseInfo` 내부 콘텐츠는 세로축 **가운데 정렬**한다.
- 가로축/텍스트 정렬은 기존 왼쪽 정렬을 유지한다.

PO가 05G/05H의 `ExerciseInfo`에 직접 적용한 동일 원칙을 Active Workout의 공용 `ExerciseCard`에도 적용한다.

## Figma reflection

Canonical local component:

- `ExerciseCard` component set — `637:3561`

All seven `ExerciseInfo` frames inside the local component set were updated to:

- `layoutAlign = STRETCH` — horizontal Auto Layout parent에서 세로 Fill container
- `primaryAxisAlignItems = CENTER` — vertical `ExerciseInfo` 내부 세로 가운데 정렬

No new component, token, Variable or Style was created.

## Focused QA

Representative read-back:

- Active Workout assisted exercise card (`어시스트 풀업`) visually matches the PO-provided reference: thumbnail / info / more action share the header height and the tag + exercise name group is vertically centered.

Binding / ownership check on `ExerciseCard`:

- instance count in component subtree: 104
- missing main: 0
- remote main: 0
- missing Variable: 0
- remote Variable: 0
- missing Style: 0
- remote Style: 0

## Scope

This is a local component layout correction only. It does not reopen prior Group 03/05 visual QA or change exercise recording behavior.

## Development boundary

No Cursor implementation handoff yet.
