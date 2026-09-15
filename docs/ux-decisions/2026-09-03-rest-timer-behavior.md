# Rest timer behavior

**Status:** PO APPROVED · FIGMA REFLECTED

**Date:** 2026-09-03  
**Updated:** 2026-09-15

## Decision

Active Workout의 휴식 타이머는 사용자가 별도로 관리해야 하는 기능이 아니라, **세트 완료에 따라 자동으로 작동하는 보조 기능**으로 사용한다.

### Trigger

- 사용자가 세트 완료 체크를 하면 해당 운동의 휴식 타이머가 자동으로 시작된다.
- 사용자가 별도 시작 동작을 하지 않는다.

### Running behavior

- 예: 기본 휴식 시간이 1분이면 1분 카운트다운이 진행된다.
- 사용자는 휴식 시간을 꼭 기다릴 필요가 없다.
- 사용자가 바로 다음 세트나 다른 운동을 진행해도 타이머는 운동 흐름을 막거나 순서를 강제하지 않는다.
- 타이머가 실행 중인 동안에는 화면 하단에 고정된 `RestLiveBar`가 노출된다.
- 카운트다운이 끝나거나 사용자가 `휴식 종료`를 누르면 `RestLiveBar`가 제거된다.

이전의 상단 toast / pill presentation과 `X = UI만 닫기` 동작은 2026-09-15 PO 승인으로 superseded 된다.

### Fixed-bottom presentation — 2026-09-15

Canonical representative viewport: `360 × 780`.

상단 고정 구조는 그대로 유지한다.

- `StatusArea_Spacer` — `62`
- `Nav Header` — `56`
- `WorkoutLiveBar` — `64`
- fixed top total — `182 px`

Rest Timer가 실행 중일 때:

- `WorkoutContent`: y `182`, h `526`, 내부 세로 스크롤
- `RestLiveBar`: y `708`, h `72`, 화면 하단 고정
- 운동 목록은 상단 고정 영역과 하단 RestLiveBar 사이에서만 스크롤된다.
- RestLiveBar는 Nav Header / WorkoutLiveBar를 대체하거나 숨기지 않는다.

Reference: `docs/ux-decisions/2026-09-15-group05-rest-live-bar-amendment.md`.

### Countdown hierarchy

- `휴식` 라벨은 표시하지 않는다.
- 남은 시간만 크게 표시한다.
- representative value: `01:29`
- typography: `display/01` — SUIT Bold `20 / 28`
- color: `text/primary`

### Progress track / fill

RestLiveBar의 최상단에 `2 px` 진행 라인을 표시한다.

- Track: `border/default`
- Fill: `brand/primary`
- Fill은 왼쪽에서 시작한다.
- 남은 시간이 줄수록 **Fill의 오른쪽 끝이 왼쪽으로 이동**하며 길이가 줄어든다.
- Figma의 특정 Fill 길이는 대표 상태일 뿐 고정 percentage를 의미하지 않는다.

### Controls

오른쪽 action은 `휴식 종료`다.

- `휴식 종료`를 누르면 현재 휴식 카운트다운 자체를 종료한다.
- 종료 후 RestLiveBar를 제거한다.
- MVP에서는 UI만 숨기고 같은 Rest Timer를 백그라운드에서 계속 돌리는 별도 close action을 두지 않는다.

MVP에서 제공하지 않음:

- `+15초`
- `-15초`
- Rest Timer pause
- Rest Timer reset

### End of rest

- 설정된 휴식 시간이 0이 되면 RestLiveBar를 제거한다.
- 다음 세트 진행을 막는 별도 transition은 없다.
- 정확한 등장/퇴장 motion, 진동, 소리, background notification 여부는 별도 확정한다.

## Figma visual authority

Canonical Figma file: `W3lZurXCXbThP67rF2xk2b`

- page: `05 운동 중` — `233:2076`
- canonical `05F_Workout_RestTimer` — `1498:2769`
- local `RestLiveBar` component — `1516:6598`
- canonical RestLiveBar instance — `1516:6607`
- local Group 05 component area — `05_GROUP_CONFIRMED_COMPONENTS` — `1485:922`

`RestLiveBar` reuses existing design-system foundations:

- `bg/workout-live`
- `display/01`
- `label/02`
- `text/primary`
- `border/default`
- `brand/primary`
- `radius/xs`
- `spacing/20`
- `spacing/10`
- `spacing/8`
- `spacing/16`

Locked visual details:

- bar: `360 × 72`
- horizontal padding: `20`
- top padding: `8`
- bottom padding: `16`
- asymmetric vertical padding is intentional
- progress Track / Fill height: `2`
- `휴식 종료` touch target: `76 × 44`
- `휴식 종료` visual: `76 × 32`

The previous local `RestTimerPill` component and its canonical 05F instance were removed after the new RestLiveBar was promoted.

## Focused presentation QA — 2026-09-15

- canonical 05F retains local `Nav Header` and `WorkoutLiveBar` instances
- `WorkoutContent` read-back: `360 × 526`, y `182`, clipped internal scroll
- `RestLiveBar` read-back: `360 × 72`, y `708`
- countdown read-back: `display/01`, `20 / 28`
- action read-back: `label/02`
- progress Track: `border/default`, `2 px`
- progress Fill: `brand/primary`, `2 px`
- bar background: `bg/workout-live`
- spacing bindings: `spacing/20`, `spacing/10`, `spacing/8`, `spacing/16`
- obsolete RestTimerPill remaining instance count: `0`
- canonical 360 × 780 screenshot read-back: PASS

## Deferred

- 운동별 기본 휴식시간 설정값
- 사용자 개인 기본 휴식시간 설정
- 타이머 종료 시 진동 / 소리 세기 및 on/off
- background notification 정책
- 새 세트 완료 시 기존 타이머가 남아 있는 경우의 정확한 재시작 처리
- exact runtime entrance/exit animation

## Implementation

Cursor 구현은 아직 승인하지 않는다.
