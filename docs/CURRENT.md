# CURRENT — Fitness Project

**Updated:** 2026-09-03 22:30 KST

## Current mode

`PRODUCT / UX PLANNING PAUSED — LATEST APPROVED UX CHECKPOINT SAVED · NEXT: RECOMMENDED ROUTINE POST-WORKOUT SAVE EDGE CASE · FIGMA SYNC PENDING · EXERCISE DB / ASSET WORK HOLD · NO CURSOR HANDOFF`

## Resume rule

다음 대화에서는 **이미 PO가 패스/승인한 항목을 다시 설명하거나 재논의하지 않는다.**

재개 순서:

`CURRENT 확인 → 아래 Latest checkpoint 확인 → NEXT OPEN ITEM부터 바로 논의`

기존 화면을 다룰 때는 항상:

`최신 GitHub 결정 확인 → 기존 Figma frame 확인 → 있으면 변경점만 sync → 없을 때만 신규 화면 생성`

---

## Latest checkpoint — 2026-09-03 session end

오늘 제품/UX 논의에서 아래 항목을 추가 확정했다.

### 1. Workout End Flow — PO APPROVED

기준:

`docs/ux-decisions/2026-09-03-workout-end-flow.md`

확정:

- 모든 예정 세트를 완료해도 자동 종료하지 않음
- 사용자가 `운동 종료`를 누르면 확인창 표시
- 완료 상태 의미: `모든 세트를 완료했습니다. 운동을 종료할까요?`
- 미완료 세트/운동이 있어도 사용자는 언제든 조기 종료 가능
- 미완료 상태에서는 완료 체크된 세트까지만 기록된다는 점을 안내
- 미완료 운동은 루틴에서 자동 삭제하지 않음
- 일반 종료에서 `저장하지 않기`를 기본 선택지로 두지 않음
- 루틴 구조 변경이 있으면 종료 이후 기존 정책대로 `오늘만 적용 / 루틴 업데이트` 확인
- 전체 운동 기록 자체를 통째로 폐기하는 별도 edge case는 아직 OPEN

Figma mapping:

- `403a_Workout_End_Incomplete` → 미완료 상태 조기 종료 확인
- `403b_Workout_End_Complete` → 모든 세트 완료 후 종료 확인
- `403c_Workout_Save_Or_Discard` → 기존 save/discard 의미로 사용하지 않음

### 2. Exercise Reorder — PO APPROVED

기준:

`docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

확정:

- `421_Exercise_Reorder`는 유지
- 사용자가 순서변경 화면에서 **직접 드래그해 운동 목록 순서를 바꾸면 즉시 루틴 순서에 자동 저장**
- 종료 시 `오늘만 적용 / 루틴 업데이트`를 다시 묻지 않음
- 단순히 화면상 3번째 운동을 먼저 수행한 것은 순서 변경이 아님
- 실제 수행 순서는 계속 자유롭고, 수행 순서만 달라졌다고 루틴 순서를 바꾸지 않음

따라서 `421_Exercise_Reorder`의 역할은 더 이상 OPEN이 아니다.

### 3. Recommended Routine Detail Flow — PO APPROVED

기준:

`docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`

Flow:

`Home 추천 루틴 카드 → 추천 루틴 상세 → 운동 시작 → Active Workout`

확정:

- 추천 카드를 누르자마자 운동을 시작시키지 않음
- 시작 전에 간단한 상세 화면을 한 번 거침
- 상세에서 루틴명 / 짧은 설명 / 운동 수 / 총 세트 / 예상 시간 / 전체 운동 목록 / 세트·반복 범위를 확인
- 하단 고정 CTA는 `운동 시작`
- 추천 루틴 상세에는 `내 루틴으로 저장` 버튼을 두지 않음
- 기존 정책대로 저장 없이 먼저 운동하고, 운동 완료 후 내 루틴 저장 여부를 결정

Review source:

`product/wireframe/recommended-routine-detail-review.html`

Review deployment used for PO review:

- deployment: `dpl_GEXDsSQWhYbMKA19udGDWWx8Ma1G`
- PO response: 방향 PASS
- final visual styling은 Figma 단계에서 조정 가능하지만 제품 흐름은 재논의하지 않음

---

## NEXT OPEN ITEM — 다음 대화에서 여기부터

### Recommended Routine post-workout save edge case

이미 확정된 기본 정책:

`추천 루틴 선택 → 상세 확인 → 저장 없이 운동 시작 → 운동 완료 → 내 루틴 저장 여부 선택`

아직 정하지 않은 부분:

추천 루틴을 실제 운동 중 수정한 경우, 완료 후 `내 루틴으로 저장`할 때 **어떤 구성을 저장할지**.

예:

- 원래 추천: 운동 6개
- 실제 수행 중 운동 삭제 / 추가 / 세트 변경 등 구조 변경 발생

검토할 후보:

- `오늘 한 구성으로 저장`
- `원래 추천 구성으로 저장`

이 선택을 **구조 변경이 있었을 때만 보여줄지**, 정확한 문구와 예외를 다음 대화에서 결정한다.

**아직 PO 결정 아님. 다음 대화의 첫 논의 대상이다.**

---

## Approved UX baseline — do not reopen

### Home

- 최우선 역할 = 운동 시작 / 운동 복귀
- 루틴 없음 → G Fit 추천 루틴 + 내 루틴 만들기
- 추천 루틴 = 개인화 AI가 아니라 G Fit curated ready-made routine
- 카드 1개 = 완성된 루틴 1개
- 추천 카드에서 실제 운동 구성 노출
- 루틴 있음 + 요일 미지정 → 다음 운동
- 루틴 있음 + 요일 지정 → 오늘 운동
- active workout → 운동 계속하기
- 추천 루틴은 먼저 저장하지 않고 운동 가능

### Exercise Search / Add

- 검색 중심
- 목록에서 바로 추가
- 루틴 만들기와 운동 중 추가에서 같은 선택 흐름 재사용
- 이름/이미지 선택 시 Exercise Detail은 선택 진입
- 없으면 Custom Exercise 생성
- 손잡이 지원 운동: `운동 선택 → 손잡이 선택 → 카드 추가`

### Cable attachment

기준:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

- 사용자 용어 `손잡이`, 내부 `attachment`
- 같은 운동 + 다른 손잡이 = 별도 카드
- Active Workout 기존 카드에서 손잡이 자체를 mutate하지 않음

### Active Workout

기준:

`docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

- 강제 운동 순서 없음
- 원하는 운동부터 수행 가능
- `건너뛰기`, `다른 운동 먼저` 같은 별도 상태 없음
- 미수행 운동은 그냥 미수행 상태
- 실제 수행 순서는 루틴 구조 변경이 아님
- 운동/세트 추가·삭제 등 실제 구조 변경만 종료 시 루틴 반영 여부 확인
- explicit reorder만 즉시 자동 저장

### Rest Timer

기준:

`docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

- 세트 완료 체크 → 자동 시작
- 상단 toast/pill
- 사용자를 막지 않음
- UI가 사라져도 countdown 지속 가능
- X로 현재 표시 닫기
- ±15초는 MVP 제외

### Assisted machine

기준:

`docs/ux-decisions/2026-09-03-assisted-machine-recording.md`

- `assisted_weight_reps`
- `보조 kg + 횟수`
- 높은 보조 kg를 더 좋은 기록으로 해석하지 않음

### Workout Complete

기준:

`docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`

- 1:1.25 카드 캐러셀
- 내부 스크롤 기본 사용 안 함
- 의미 있는 카드만 조건부 노출 가능
- 완료 카드 구성/방향은 planning PASS
- final visual polish는 Figma에서 조정

---

## Figma status

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

기존 screen을 새로 기획하지 않고 최신 승인 정책에 맞춰 sync한다.

주요 기존 frames:

- `110 / 111 Home`
- `301 / 301a / 302 Exercise Search`
- `401a Workout Active`
- `410 Rest Timer`
- `403a / 403b / 403c Workout End`
- `421 Exercise Reorder`
- `501 Workout Complete`

추가/신규 state가 필요한 것:

- attachment picker
- recommended routine detail
- assisted first-use helper
- 향후 필요한 routine-change confirmation 정리

**이번 세션에서 제품 결정은 진행했지만 해당 결정들의 실제 Figma sync 작업은 아직 완료하지 않았다.**

---

## Exercise DB / asset — HOLD

Production baseline 및 P0 16 승인 상태는 유지.

HOLD 해제 전까지 실행하지 않음:

- 신규 P0 asset production
- attachment taxonomy 전체 mapping
- shoulder press variant 최종 정리

주요 blocker:

- Gym Animations 추가 package 구매 여부
- purchased asset modification / derivative / AI-reference license 확인

---

## Remaining planning OPEN items

다음 항목은 아직 남아 있으나, **다음 대화에서는 Recommended Routine post-workout save edge case부터 시작한다.**

- 추천 루틴 실제 프로그램 contents
- 추천 루틴 완료 후 save edge case / copy
- 전체 workout discard 별도 진입 / copy
- completion exact metric / formula
- progression hint exact metric / observation threshold
- Exercise Detail scope
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer 종료 signal 세부 동작

`421_Exercise_Reorder` 목적은 해결됨.
`추천 루틴 상세 → 운동 시작` 흐름도 해결됨.
`Workout End 기본/조기 종료` 흐름도 해결됨.

---

## Canonical / review artifacts

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

주의:

- canonical production 전체 앱 wireframe에는 최신 모든 PO 결정이 아직 반영되지 않음
- review artifact와 canonical production을 구분

Latest recommendation detail review source:

`product/wireframe/recommended-routine-detail-review.html`

---

## Implementation status

**No Cursor handoff.**

현재는 제품/UX 결정 + Figma sync 준비 단계다. 다음 대화에서 남은 제품 결정을 이어간 뒤, 핵심 화면이 충분히 안정되면 Figma sync 및 이후 구현 Issue/AC로 넘긴다.
