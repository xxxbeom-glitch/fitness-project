# Group 04 Custom Exercise — Delete Policy

**Date:** 2026-09-15  
**Status:** PO APPROVED / PRODUCT POLICY LOCKED / FIGMA REFLECTION PENDING / NO CURSOR HANDOFF

## Scope

`04F_Custom_Edit`에서 사용자가 직접 만든 커스텀 운동을 삭제할 때의 데이터/루틴 처리 규칙을 확정한다.

## Approved delete behavior

커스텀 운동 삭제는 단순히 운동 라이브러리에서만 숨기는 동작이 아니다.

삭제 승인 후:

- 해당 커스텀 운동은 운동 목록/검색/새 운동 추가 대상에서 제거한다.
- 해당 커스텀 운동이 포함된 **모든 저장 루틴에서도 제거한다.**
- 이미 완료된 과거 운동 기록은 삭제하지 않는다.
- 과거 운동 기록을 기반으로 한 최근 기록/성장 이력도 유지한다.

즉, 사용자가 삭제한 운동이 새 선택 대상이나 현재 저장 루틴에 계속 남아 있어 "삭제했는데 왜 아직 있지?"라는 혼란이 생기지 않게 하되, 역사 데이터는 보존한다.

## Confirmation requirement

루틴까지 영향을 주는 파괴적 변경이므로 삭제 전 확인 다이얼로그를 반드시 노출한다.

권장 기본 문구:

- Title: `운동을 삭제할까요?`
- Body: `이 운동은 운동 목록과 포함된 모든 루틴에서 제거됩니다. 완료된 운동 기록은 유지됩니다.`
- Actions: `취소 / 삭제`

앱이 영향받는 루틴 수를 확실히 계산할 수 있는 경우에는 본문에 `N개의 루틴`처럼 구체적인 영향을 표시할 수 있다.

## Historical data invariant

삭제 후에도 완료된 세션의 운동명/세트/중량/횟수/시간 등 당시의 실제 수행 기록은 그대로 유지한다.

커스텀 운동 정의 삭제가 과거 완료 기록을 재작성하거나 연쇄 삭제하지 않는다.

## Remaining edge case — DECISION NEEDED

삭제 대상 운동이 어떤 저장 루틴의 **유일한 운동 1개**인 경우, 해당 운동을 제거하면 빈 루틴이 된다.

이 경우:

- 빈 루틴 자체도 함께 삭제할지
- 빈 루틴을 남길지

는 아직 Product Owner 결정이 필요하다.

이 edge case가 확정되기 전에는 Group 04 삭제 flow를 최종 CLOSED로 판정하지 않는다.

## Development boundary

Product/UX + Figma 단계다. Product Owner가 개발 전환을 명시하기 전까지 Cursor/implementation handoff를 시작하지 않는다.
