# 2026-09-19 Dialog copy simplification

**Status:** PO APPROVED COPY UPDATE · FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Scope

The Product Owner requested a readability pass on all live MVP dialogs because several messages were too long or used unnecessarily system-like wording.

This checkpoint covers **copy only**:
- dialog title
- description/body
- button labels

No dialog behavior, branching, destructive-action policy, component structure, or interaction order was changed.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`

## Copy principles applied

- use direct user language rather than system terminology where possible
- decision titles use `~할까요?`
- error/result titles use natural result language
- body text explains the consequence in one short sentence, two only when required
- destructive buttons use the real action name instead of generic confirmation
- active-workout dialogs prioritize short scan time
- existing secondary-left / primary-right button structure remains unchanged
- tone normalized toward `~해요 / ~돼요 / ~없어요`

## Updated dialogs

### Group 01 — Login

1. Login failure
- title: `로그인에 실패했어요`
- body: `잠시 후 다시 시도해 주세요.`
- actions: `닫기 / 다시 시도`

2. Network unavailable
- title: `인터넷에 연결되지 않았어요`
- body: `연결을 확인한 뒤 다시 시도해 주세요.`
- actions: `닫기 / 다시 시도`

3. Login service unavailable
- title: `지금은 로그인할 수 없어요`
- body: `잠시 후 다시 시도해 주세요.`
- actions: `닫기 / 다시 시도`

### Group 03 — Routine

4. Unsaved routine changes
- title: `저장하지 않고 나갈까요?`
- body: `변경한 내용은 사라져요.`
- actions: `나가기 / 계속 편집`

5. Delete routine
- title: `루틴을 삭제할까요?`
- body: `삭제하면 다시 복구할 수 없어요.`
- actions: `취소 / 삭제`

### Group 04 — Custom exercise

6. Unsaved custom-exercise changes
- title: `저장하지 않고 나갈까요?`
- body: `변경한 내용은 사라져요.`
- actions: `나가기 / 계속 편집`

7. Delete custom exercise
- title: `운동을 삭제할까요?`
- body:
  - `운동 목록과 루틴에서 삭제돼요.`
  - `이전 운동 기록은 그대로 남아요.`
- actions: `취소 / 삭제`

### Group 05 — Active workout

8. End incomplete workout
- title: `운동을 종료할까요?`
- body:
  - `아직 끝내지 않은 운동이 있어요.`
  - `완료한 세트까지만 기록돼요.`
- actions: `계속 운동 / 종료하고 저장`

9. End completed workout
- title: `운동을 종료할까요?`
- body: `모든 세트를 완료했어요.`
- actions: `계속 운동 / 운동 종료`

10. Discard active workout
- title: `이번 운동을 삭제할까요?`
- body: `지금까지 입력한 기록이 모두 삭제돼요.`
- actions: `계속 운동 / 기록 삭제`

11. Save today’s structural changes back to routine
- title: `바꾼 내용을 루틴에도 저장할까요?`
- body: `운동 추가 2개 · 삭제 1개 · 세트 추가 1개`
- actions: `오늘만 적용 / 루틴에 저장`

12. Start another routine while current workout is incomplete
- title: `새 루틴을 시작할까요?`
- body: `현재 운동은 완료한 세트까지만 저장되고 종료돼요.`
- actions: `계속 운동 / 종료 후 시작`

13. Start another routine after all sets are complete
- title: `새 루틴을 시작할까요?`
- body: `현재 운동을 저장하고 종료한 뒤 새 루틴을 시작해요.`
- actions: `계속 운동 / 종료 후 시작`

14. Replace exercise with completed sets
- title: `운동을 바꿀까요?`
- body: `바꾸면 이 운동에서 완료한 세트 기록이 삭제돼요.`
- actions: `취소 / 기록 삭제 후 변경`

### Group 07 — Workout history

15. Delete workout history item
- title: `운동 기록을 삭제할까요?`
- body: `삭제하면 다시 복구할 수 없어요.`
- actions: `취소 / 삭제`

### Group 08 — Account / Support

16. Delete account
- title: `계정을 탈퇴할까요?`
- body: `운동 기록, 루틴, 프로필 등 계정 데이터가 모두 삭제되고 복구할 수 없어요.`
- actions: `취소 / 탈퇴하기`

17. Inquiry submitted
- title: `문의가 접수되었어요`
- body: `입력한 이메일로 답변드릴게요.`
- action: `확인`

18. Inquiry send failed
- title: `문의를 보내지 못했어요`
- body: `인터넷 연결을 확인한 뒤 다시 시도해 주세요.`
- actions: `취소 / 다시 시도`

## Focused QA

All 18 live `DialogCard` instances were read back after the copy update.

Verified:
- live DialogCard count = `18`
- text overflow = `0`
- button-label overflow = `0`
- visible dialog text font family = SUIT
- missing main-component links inside dialog structures = `0`

Representative visual QA was also run for:
- custom exercise delete
- routine update prompt
- other-routine start
- exercise replacement
- account deletion

Focused copy QA: **PASS**

## Development boundary

No Cursor / implementation handoff is authorized.
