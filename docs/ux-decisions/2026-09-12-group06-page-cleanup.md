# Group 06 Workout Completion — Figma Page Cleanup

**Date:** 2026-09-12  
**Status:** PO APPROVED · FIGMA CLEANUP PASS  
**Scope:** `06 운동 완료` 페이지에서 최종 구현에 필요한 화면/상태만 남기고 탐색·초안·레퍼런스 제거

## Product Owner decision

`06 운동 완료` 페이지는 더 이상 과거 탐색안을 보관하는 작업장이 아니다. 현재 승인된 최종 화면과 실제 구현에 필요한 조건부 상태만 유지한다.

## Final Figma artifacts kept

Figma file: `W3lZurXCXbThP67rF2xk2b`  
Page: `06 운동 완료` — `233:2077`

- 기본 완료 화면 `06A_Completion_Default` — `793:15748`
  - 기존 `최종화면`을 이름만 정리한 canonical main
  - PR이 있는 정상 대표 상태
- 신기록 없음 `06B_Completion_NoPR` — `819:702`
  - wrapper `FINAL_06_PR_NONE_CASE` — `819:696`
  - 비교 가능한 PR이 없을 때 `오늘의 신기록` 카드 전체 숨김
- 총 볼륨 비적용 `06C_Completion_VolumeNA` — `823:720`
  - wrapper `FINAL_06_VOLUME_NA_CASE` — `823:716`
  - 계산 가능한 `weight_reps` 완료 세트가 없을 때 `총 볼륨 —`
- 추천 루틴 저장 조건부 다이얼로그 `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `163:2142`
  - `추천 루틴 저장 여부`
  - `저장할 구성 선택`

PR이 1개인 경우와 여러 개인 경우는 완료 화면에서 모두 대표 PR 1개만 보이므로 별도 화면을 유지하지 않는다. 기본 완료 화면이 PR-present visual을 대표한다.

## Removed from the page

총 56개의 오래된 top-level artifact를 삭제했다.

주요 제거 범위:
- 이전 carousel main / carousel content reference
- 06A–06J 구형 완료 화면 variants
- 부분 기록 저장 완료 화면
- 공유 카드 초안
- body-map / bento / tonal exploration
- full dashboard draft
- chart A/B/C drafts
- simple A/B/C drafts
- 임시 metric/header/footer 조각
- Hevy 및 이미지 reference screenshots
- 사용하지 않는 floating instances / image layers

삭제된 대표 노드:
- `06A_Completion_Carousel` — `163:2031`
- `REORG_06_CAROUSEL_CONTENT` — `163:2073`
- `06I_부분기록저장` — `40:3501`
- `06A_Completion_Dashboard_Full_Draft` — `775:593`
- `06A_Chart_A_ExerciseTrend_Draft` — `783:653`
- `06A_Chart_B_RoutineVolume_Draft` — `783:729`
- `06A_Chart_C_PRCompare_Draft` — `783:801`
- `06A_Simple_A_Balanced_Draft` — `788:671`
- `06A_Simple_B_Minimal_Draft` — `788:726`
- `06A_Simple_C_ResultBoard_Draft` — `788:781`

## Page organization

페이지 상단 표기는 `06 · 운동 완료 · FINAL`로 정리했다.

현재 top-level은 다음만 유지한다.
- page title / description / divider
- `06A_Completion_Default`
- `FINAL_06_PR_NONE_CASE`
- `FINAL_06_VOLUME_NA_CASE`
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS`

## QA

- 기본 완료 화면 screenshot read-back: PASS
- 신기록 없음 screenshot read-back: PASS
- 총 볼륨 N/A screenshot read-back: PASS
- 추천 루틴 조건부 dialog screenshot read-back: PASS
- canonical node `793:15748` 유지
- local `CompletionStatusIcon` / `DualCTA` 기반 최종 화면 유지

Result: **PASS**

## NEXT OPEN ITEM

`FINAL_06_RECOMMENDED_ROUTINE_DIALOGS`의 두 상태를 현재 최종 완료 shell 기준으로 최종 검토한다.

- 추천 루틴 저장 여부
- 저장할 구성 선택

이미 제거한 carousel/chart/body-map/partial-save 완료 화면은 구체적인 새 PO 결정 없이는 다시 추가하지 않는다.

**NO CURSOR IMPLEMENTATION HANDOFF.**
