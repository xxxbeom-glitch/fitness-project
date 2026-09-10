# Group 05 Other Routine Switch — 2026-09-10

**Status:** PO APPROVED / FIGMA REFLECTED / FOCUSED QA PASS

## Scope

현재 운동이 진행 중인 상태에서 사용자가 루틴 목록으로 이동해 다른 루틴의 `운동 시작`을 누르는 경우의 충돌 처리.

## Decision

기존 `05N_Workout_OtherRoutine`에서 `다른 루틴 시작`을 누른 뒤 다시 `05K`를 띄우는 2단 확인 구조를 사용하지 않는다.

다른 루틴 시작 시점에 현재 운동의 완료 상태를 확인하고, 기존 `05K / 05L` 종료 다이얼로그 계열을 재사용한 **05N 상태별 다이얼로그**를 바로 보여준다.

### 1. 현재 운동이 미완료 상태

Canonical Figma:

- `05N_Workout_OtherRoutine_Incomplete` — `727:3622`

Copy:

- title: `현재 운동을 종료할까요?`
- description: `아직 완료하지 않은 운동이 있습니다.\n완료한 세트까지만 기록하고 새 루틴을 시작합니다.`
- secondary: `계속 운동`
- primary: `종료 후 시작`

Behavior:

- `계속 운동` → 현재 운동 세션으로 복귀
- `종료 후 시작` → 실제 완료 체크된 세트까지만 현재 운동 기록으로 저장하고 현재 세션 종료
- 미완료 세트/운동을 완료된 것으로 기록하지 않음
- 이후 사용자가 선택했던 새 루틴을 시작

### 2. 현재 운동이 모든 예정 세트 완료 상태

Canonical Figma:

- `05N_Workout_OtherRoutine_Complete` — `727:3842`

Copy:

- title: `현재 운동을 종료할까요?`
- description: `모든 세트를 완료했습니다.\n현재 운동을 저장하고 새 루틴을 시작합니다.`
- secondary: `계속 운동`
- primary: `종료 후 시작`

Behavior:

- `계속 운동` → 현재 운동 세션으로 복귀
- `종료 후 시작` → 현재 운동 기록 저장 후 현재 세션 종료 → 선택했던 새 루틴 시작

## Existing end-flow compatibility

이 흐름은 새로운 저장 정책을 만들지 않고 기존 workout-end 정책을 재사용한다.

현재 세션에 루틴 구조 변경이 있었다면 기존 승인 정책에 따라 종료 확인 뒤 `05O_Workout_UpdateRoutine` 확인을 거친다. `오늘만 적용 / 루틴 업데이트` 어느 쪽을 선택해도 오늘 운동 기록은 보존되며, 해당 처리가 끝난 뒤 새 루틴을 시작한다.

따라서 다른 루틴 시작 때문에 완료된 운동 기록을 폐기하거나, 기존 루틴 구조를 묵시적으로 덮어쓰지 않는다.

## Figma reflection

- superseded single `05N_Workout_OtherRoutine` (`148:3561`) removed
- approved draft states promoted to canonical:
  - `05N_Workout_OtherRoutine_Incomplete` — `727:3622`
  - `05N_Workout_OtherRoutine_Complete` — `727:3842`
- existing local `DialogCard` + `DialogButtons` reused
- no new dialog component/token added

## Focused QA

Both canonical 05N states:

- missing main: 0
- remote main: 0
- missing Variable: 0
- remote Variable: 0
- missing Style: 0
- remote Style: 0
- screenshot read-back: PASS

## Related locked policy

- `docs/ux-decisions/2026-09-03-workout-end-flow.md`
- `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

## Remaining Group 05 open item

- exercise replacement after one or more sets of the current exercise have already been completed

**NO CURSOR IMPLEMENTATION HANDOFF.**
