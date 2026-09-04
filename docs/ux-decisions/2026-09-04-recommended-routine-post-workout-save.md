# Recommended Routine Post-workout Save — 2026-09-04

**Status:** PO APPROVED
**Scope:** 추천 루틴으로 운동을 완료한 뒤 해당 루틴을 `내 루틴`으로 저장할지 결정하는 흐름

## Decision

추천 루틴으로 시작한 운동의 **오늘 운동 기록은 항상 저장**한다.

운동 기록 저장과 추천 루틴을 `내 루틴`으로 저장하는 것은 서로 다른 동작이다.

추천 루틴은 운동 전에 자동 저장하지 않는다. 사용자가 실제로 운동을 끝낸 뒤, 완료 흐름에서 앞으로도 사용할 루틴인지 선택한다.

## Default completion flow

추천 루틴을 그대로 사용해 운동을 마쳤다면 완료 흐름에서 다음 선택을 제공한다.

- Primary: `내 루틴으로 저장`
- Secondary: `루틴은 저장하지 않기`

의미:

- `내 루틴으로 저장` → 해당 추천 루틴을 이후 Home / My Routines에서 다시 사용할 수 있도록 저장
- `루틴은 저장하지 않기` → 오늘 운동 기록만 남기고 추천 루틴 자체는 내 루틴으로 추가하지 않음

추천 루틴 저장을 적극적으로 유도하되, 사용자의 명시 선택 없이 자동으로 내 루틴에 고정하지 않는다.

## What does not count as a routine-structure change

다음은 추천 루틴 구조 변경으로 보지 않는다.

- 실제 사용 중량 변경
- 실제 수행 반복수 변경
- 일부 세트 / 운동 미완료
- 단순히 수행 순서가 달라짐

따라서 이런 경우에는 별도 분기 없이 기본 저장 질문만 보여준다.

## If the routine structure was changed

운동 추가 / 삭제, 세트 추가 / 삭제 등 실제 루틴 구조 변경이 있었고 사용자가 `내 루틴으로 저장`을 선택한 경우에만 한 번 더 어떤 구성을 저장할지 묻는다.

선택:

- `오늘 한 구성으로 저장`
- `원래 추천 구성으로 저장`

이 추가 선택은 추천 루틴을 저장하지 않는 사용자에게는 노출하지 않는다.

## Product principle

핵심은 다음과 같다.

`오늘 운동 기록은 항상 저장` + `추천 루틴을 앞으로 내 루틴으로 사용할지는 운동 후 사용자가 결정`

## Related decisions

- `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`
- `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`
- `docs/ux-decisions/2026-09-03-workout-end-flow.md`
- `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

## Implementation

Cursor 구현 handoff는 아직 승인하지 않는다.
