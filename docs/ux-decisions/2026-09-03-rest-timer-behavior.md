# Rest timer behavior

**Status:** PO APPROVED · FIGMA REFLECTED

**Date:** 2026-09-03  
**Updated:** 2026-09-10

## Decision

Active Workout의 휴식 타이머는 사용자가 별도로 관리해야 하는 기능이 아니라, **세트 완료에 따라 자동으로 작동하는 보조 기능**으로 사용한다.

### Trigger

- 사용자가 세트 완료 체크를 하면 해당 운동의 휴식 타이머가 자동으로 시작된다.
- 상단에서 내려오는 짧은 toast / pill 형태를 사용한다.

### Running behavior

- 예: 기본 휴식 시간이 1분이면 1분 카운트다운이 진행된다.
- 타이머가 시작되면 toast / pill이 화면 상단에서 아래로 내려와 노출된다.
- 카운트다운이 끝나면 toast / pill은 다시 위로 사라진다.
- 사용자는 휴식 시간을 꼭 기다릴 필요가 없다.
- 사용자가 바로 다음 세트나 다른 운동을 진행해도 타이머는 운동 흐름을 막거나 순서를 강제하지 않는다.
- 노출 중 사용자가 UI를 치우고 싶으면 `X`로 닫을 수 있다.
- `X`는 노출된 UI만 닫는 행동이며 복잡한 타이머 조작 흐름을 열지 않는다.

이전의 `시작 직후 잠깐 노출 후 임의로 사라질 수 있음` 표현은 최신 PO 결정에 의해 superseded 된다. 기본 presentation은 **카운트다운 동안 노출 → 종료 시 위로 사라짐**이다.

### Controls

- MVP에서는 `+15초`, `-15초` 같은 시간 증감 버튼을 제공하지 않는다.
- 별도 일시정지/재설정 버튼을 toast 안에 추가하지 않는다.
- 핵심은 `자동 시작 → 필요하면 X로 닫기 → 운동은 자유롭게 계속`이다.

### End of rest

- 설정된 휴식 시간이 끝나면 toast / pill은 위로 사라진다.
- 종료 시 별도 진동 / 소리 / background notification 여부는 구현 및 디자인 단계에서 별도 확정한다.
- 종료 피드백은 다음 세트 진행을 막지 않는다.

## Figma visual authority

Canonical Figma file: `W3lZurXCXbThP67rF2xk2b`

- local `RestTimerPill` component — `721:3456`
- `05F_Workout_RestTimer` — `721:3460`
- local component library — `635:788`

The temporary copied `410_Rest_Timer` frame on the Group 05 page was used only as the visual reference and removed after localization.

`RestTimerPill` uses existing local design-system foundations:

- `glass/surface-20`
- `radius/full`
- `spacing/12`, `spacing/20`, `spacing/2`
- `text/primary`
- `state-bg/danger`, `state/danger`
- `display/01`

No new token was added.

The source reference did not contain actual Figma prototype reactions. The drop-down / count-down / upward-dismiss motion is therefore a product interaction rule, while `05F` is the canonical static representative state.

## Focused binding QA — 2026-09-10

- `RestTimerPill`: remote Variable 0 / missing Variable 0
- `RestTimerPill`: remote Style 0 / missing Style 0
- `05F_Workout_RestTimer`: missing main 0 / remote main 0
- `05F_Workout_RestTimer`: remote Variable 0 / missing Variable 0
- `05F_Workout_RestTimer`: remote Style 0 / missing Style 0
- representative screenshot read-back: PASS

## Deferred

- 운동별 기본 휴식시간 설정값
- 사용자 개인 기본 휴식시간 설정
- 타이머 종료 시 진동 / 소리 세기 및 on/off
- background notification 정책
- 새 세트 완료 시 기존 타이머가 남아 있는 경우의 정확한 재시작 처리

## Implementation

Cursor 구현은 아직 승인하지 않는다.
