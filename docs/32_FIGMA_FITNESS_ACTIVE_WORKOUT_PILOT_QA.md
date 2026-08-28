# 32 FIGMA FITNESS ACTIVE WORKOUT PILOT QA

**Status:** PASS — FIRST FITNESS SCREEN / SYSTEM-STRESS PILOT  
**Updated:** 2026-08-29

## Purpose

Validate the passing Tonal Phase-A system against the first real Fitness-specific product screen before producing the remaining MVP screens in bulk.

The Product Owner explicitly chose a small-batch workflow because real product composition is expected to expose design-system corrections that representative Examples cannot reveal.

Target Figma file: `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`)  
Page: `10_FITNESS_SCREENS`  
Screen: `20_운동기록` (`123:273`)

## Why active workout first

Active workout is the highest-stress MVP surface because it combines repeated numeric input, prior-performance context, set completion, rest timing, dense repeated rows, and session actions.

Product authority remains GitHub decisions/policy. Hevy is used for repeated strength-training interaction reference; Tonal remains the visual-system reference.

Representative Hevy references checked during this pass:
- https://mobbin.com/screens/3c0f68f3-69ee-4892-bce4-3939fcce734e
- https://mobbin.com/screens/94e23c81-0a16-4f85-a705-4e26eabfb727
- https://mobbin.com/screens/71e7447a-9e62-4ed3-9151-83ddff8c9f47

Representative Tonal composition references checked during this pass:
- https://mobbin.com/screens/c281932e-ae03-4adc-ae7f-98cb8db9421e
- https://mobbin.com/screens/b8bf6776-884a-4f05-9426-cab43455b3f6

## Screen scope

The first screen intentionally covers the base active-workout state rather than every workout state at once.

Included:
- Korean product copy
- workout title / elapsed active-session state
- contextual workout top bar with finish action
- exercise prescription (`세트 · 반복수`)
- rest timer status
- set / previous / kg / reps / completion columns
- prior-history example
- explicit no-history example
- add-set action
- add-exercise action below the initial fold

Deferred to later states after this base screen is accepted:
- first-load coach mark
- first-set feeling feedback sheet (`가벼웠어요 / 적당했어요 / 무거웠어요`)
- edit/delete/reorder sheets and actions
- active-session recovery prompt
- conflict/other-device states

## Product-screen-driven system corrections

### 1. Dense workout content uses existing `Space/ComponentX = 16`

The first composition exposed that the normal `Space/PageX = 24` inset is too expensive for a repeated five-column set-entry surface, especially at 320px.

Correction:
- active workout dense content uses the already-existing semantic `Space/ComponentX = 16`
- this was applied to SessionHeader, Exercise blocks, and the bottom add-exercise action row
- no new arbitrary spacing token was introduced

This is a controlled density exception for the active workout surface, not a global replacement of PageX=24.

### 2. New reusable `Workout/SetRow`

Created in `02_COMPONENTS`:
- component ID: `123:12`
- baseline size: 342 x 52, responsive through FILL instances
- component properties:
  - Set
  - Previous
  - Weight
  - Reps
  - Status (instance swap)
- completion status reuses the existing `Control/Check` family
- status touch wrapper is 44 x 44

Initial fixed-column construction failed the narrow-width stress test conceptually. It was corrected before screen QA:
- Previous column = flexible
- Weight cell/text = flexible
- Reps cell/text = flexible
- Set and completion target remain fixed

The redundant fixed divider was removed from the component so it does not encode width-specific geometry.

### 3. New reusable `Workout/AddSetAction`

The first screen initially produced two identical local `+ 세트 추가` frames. Integration QA flagged this as a reuse drift risk.

Correction:
- created `Workout/AddSetAction` in `02_COMPONENTS`
- component ID: `128:59`
- both exercise blocks now use linked instances
- no local duplicate remains for this repeated action

## Current visible screen

Representative content:
- `운동 기록`
- `완료`
- `푸시 데이`
- `벤치프레스` with prior set history and one completed set
- `인클라인 덤벨프레스` with explicit `이전 기록 없음 · 중량을 직접 입력해 주세요`

The no-history state does not guess a working weight, consistent with DEC-010 / DEC-013.

## QA results

### Structure / reuse
**PASS**

- `Workout/SetRow` instances: 6, all linked to `123:12`
- `Workout/AddSetAction` instances: 2, both linked to `128:59`
- no repeated local AddSetAction duplicate remains
- active workout uses scroll content inside a clipped 390 x 844 screen

### Typography
**PASS**

- unstyled text = 0
- Pretendard Phase-A styles reused
- Korean product copy used in the real Fitness screen

### Spacing / token integrity
**PASS**

- non-canonical local spacing = 0
- canonical spacing without Variable binding = 0
- dense horizontal inset = 16 and bound to `Space/ComponentX`
- no accidental page + child double horizontal inset identified

### Responsive
Temporary QA clones were created and removed after checking.

- 320px: non-intentional horizontal overflow = 0; clipped text = 0; SetRow width = 288
- 360px: non-intentional horizontal overflow = 0; clipped text = 0; SetRow width = 328
- 390px: non-intentional horizontal overflow = 0; clipped text = 0
- 430px: non-intentional horizontal overflow = 0; clipped text = 0; SetRow width = 398

### Visual / product
**PASS FOR PILOT SCOPE**

The screen establishes a practical Fitness-specific density while preserving the restrained Phase-A hierarchy.

One non-blocking Phase-A artifact remains visible: the current TopBar leading close icon is still represented by the existing placeholder/icon-slot treatment. Final Fitness iconography is a later system task and was not allowed to expand this pilot into a broad icon-library redesign.

## What this pilot proved

The Product Owner's concern was correct: representative system Examples were not enough to freeze the final screen rules.

The first real Fitness screen immediately exposed two useful corrections:
1. dense workout logging needs the existing 16pt ComponentX inset instead of ordinary 24pt PageX
2. repeated workout interactions need dedicated reusable components rather than screen-local reconstruction

This validates the small-batch strategy:

`representative real screen -> QA -> system correction -> next representative screen`

rather than producing the entire MVP screen inventory in one batch.

## Next step

Product Owner visual review of `20_운동기록` comes first.

If no major direction change is required, proceed to the second representative real Fitness screen: **Home**.

Do not start bulk MVP screen production yet. After Home and First-run Path Choice, run another cross-screen system review before expanding in larger batches.
