# CURRENT — Fitness Project

**Updated:** 2026-09-04 23:27 KST

## Current mode

`EXERCISE DB / ASSET SOURCE ANALYSIS ACTIVE · GYM ANIMATIONS PURCHASED · RAW R2 UPLOAD VERIFIED · CABLE NORMALIZATION RULE V1 APPROVED · CABLE MANIFEST MAP V0.1 COMPLETE · DUPLICATE VISUAL QA 38 NEXT · PRODUCT/UX BASELINE PRESERVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 **이미 PO가 패스/승인한 항목을 다시 설명하거나 재논의하지 않는다.**

재개 순서:

`CURRENT 확인 → Latest checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

기존 화면을 다룰 때는 항상:

`최신 GitHub 결정 확인 → 기존 Figma frame 확인 → 있으면 변경점만 sync → 없을 때만 신규 화면 생성`

---

## Latest checkpoint — 2026-09-04 Gym Animations / Cable normalization

### 1. Purchased source / canonical analysis base

구매:

- Gym Animations
- `Gym Workout Man Package`

상세:

- `docs/exercise-db/2026-09-04-gym-animations-source-analysis-checkpoint.md`

전체 원본:

- **17,085 files**
- **98.69 GB**
- top level: `GIFS`, `MP4`

Male MP4 주요 폴더:

- `Gym_Workout_` → 2,081
- `Home_Workout_` → 2,120
- `Library_database` → 2,109

`Gym_Workout_` 2,081개는 `Library_database`의 동일 파일과 SHA256까지 전부 동일하며, `Library_database`가 28개 더 많다.

따라서 Male Gym raw 분석 기준은:

`MP4/MALE/Library_database`

구매 원본 filename/path/media는 read-only provenance로 유지한다.

### 2. Cloudflare R2 raw upload — VERIFIED / DONE

Raw bucket:

`gfit-source-original`

Upload:

`D:\project\111111111\Animations` → `r2:gfit-source-original/Animations`

검증 결과:

- objects: **17,085**
- size: **98.694 GiB**
- exact: **105,972,019,458 Byte**

원본 count/size와 일치하므로 raw R2 upload는 **DONE / VERIFIED**다.

### 3. Cable direct visual QA — COMPLETE

상세:

- `docs/exercise-db/2026-09-04-cable-visual-review-14.md`

14개 ambiguous Cable 영상을 직접 검수했다.

결과:

- **14 / 14 complete**
- review subset exact duplicate: **0**
- attachment-only variant가 실제로 존재함을 확인
- lat pulldown rear/behind-neck 계열은 동일 parent family + grip/posture context가 타당
- half-kneeling / unilateral / bilateral 등 큰 실행 차이는 attachment swap으로 흡수하지 않음
- vendor filename과 실제 동작이 충돌하는 naming 사례 확인
- Male 분석 catalog 안 female-model Cable Seated Chest Press 1개를 media exception으로 확인

### 4. Cable normalization rule v1 — PO APPROVED

기준:

- `docs/exercise-db/2026-09-04-cable-normalization-rule-v1.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

Core rule:

1. 같은 운동 + 손잡이만 다름 → `same canonical + attachment context/media`
2. 그립만 다름 → `same parent family + grip variant/context`
3. 자세 / 한손·양손 / behind-neck / 큰 수행 경로 차이 → explicit execution variant, history 자동 병합 금지
4. 회전 / 관절 패턴 / 운동 자체가 materially 다름 → separate canonical movement candidate
5. true duplicate는 filename 유사성이 아니라 실제 수행이 사실상 동일할 때만 확정
6. raw source는 수정하지 않고 normalized derived data를 별도 관리

### 5. Cable manifest normalization map v0.1 — COMPLETE

상세:

- `docs/exercise-db/2026-09-04-cable-normalization-map-v0.1.md`

업로드된 filename/size manifest 결과:

- manifest rows: **298**
- `Cable*` prefix rows: **297**
- cable-associated extra: **1**
  - `Inverse-Leg-Curl-(on-pull-up-cable-machine)_Thighs.mp4`

즉 기존 **297 Cable raw videos**는 prefix catalog count로 유지하고, 후속 broad manifest에서 cable-machine 관련 1개를 별도 `source_scope`로 추가 발견한 것이다.

v0.1 결과:

- mapped: **298 / 298**
- unresolved movement-family rows: **0**
- direct visual-QA overrides: **14**
- duplicate candidates: **18 groups / 38 rows**
- derived attachment-context rows: **57**
- working movement-family labels: **71**

주의:

- 71은 normalization 작업용 family label 수이며 최종 G Fit canonical exercise 수가 아니다.
- 이전 first-pass attachment metric 56은 당시 detector 결과로 보존한다.
- v0.1의 57은 `Cable-Bar-Lateral-Pulldown`을 `bar_unspecified` attachment context로 추가 인식한 expanded detector 결과다.

Naming correction candidate:

- `Cable-Incline-Pushdown_Back_` → `Incline Cable Straight-Arm Pulldown`
- `Cable-Standing-Pulldown-(with-rope)_Forearms_` → `Standing High Cable Rope Curl` candidate, Medium-High confidence

Full derived row map은 현재 review artifact `cable_normalization_map_v0_1.csv`로 생성되어 있으며, duplicate 판정이 끝난 뒤 canonical map으로 승격한다.

---

## NEXT OPEN ITEM — Exercise DB / asset

### Immediate next

**18 duplicate candidate groups / 38 files direct visual QA**

목적:

- true duplicate인지
- 실제 수행/자세가 다른 version인지
- media만 다른 동일 exercise인지

를 확정한다.

그 다음 순서:

1. duplicate visual QA 38 완료
2. Cable parent / attachment / grip / execution / duplicate map 확정
3. Machine / Barbell / Dumbbell / Kettlebell / Smith / Landmine으로 동일 normalization rule 확장
4. 기존 Production Exercise DB v1과 mapping
5. 최종 G Fit canonical 후보 수 / 실제 gap 재산출
6. production media transform / app-serving storage 구조 결정

**현재는 source normalization 단계이며 Cursor 구현 handoff 없음.**

---

## Approved UX baseline — do not reopen

### Home

- 운동 시작 / 복귀가 최우선
- 루틴 없음 → G Fit 추천 루틴 + 내 루틴 만들기
- 추천 루틴은 curated ready-made routine, AI 생성 아님
- 카드 1개 = 완성 루틴 1개, 실제 운동 구성 노출
- 추천 루틴은 저장 전 바로 운동 가능

### Exercise Search / Add

- search-first, 목록에서 바로 추가
- 루틴 만들기 / 운동 중 추가 흐름 재사용
- Exercise Detail은 선택 진입
- 없으면 Custom Exercise
- 손잡이 지원 운동: `운동 선택 → 손잡이 선택 → 카드 추가`

### Exercise Detail

기준:

`docs/ux-decisions/2026-09-04-exercise-detail-scope.md`

- 기존 Figma `341_Library_Exercise_History`의 `운동 정보 | 최근 기록` 2탭 유지
- `운동 정보`: 동작 미디어 → 운동명 → 장비/주요 근육 → 보조 근육 → 짧은 방법 → 핵심 체크포인트
- Gym Animations media가 있으면 상단 visual로 활용 가능
- media가 없어도 화면은 완전해야 함
- `최근 기록`: 날짜별 세트 / 중량 / 반복
- 장기 분석 dashboard는 Exercise Detail에 중복하지 않음

### Cable attachment

기준:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

- 사용자 용어 `손잡이`, 내부 `attachment`
- 같은 운동 + 다른 손잡이 = Active에서 별도 카드
- 기존 카드의 손잡이를 운동 중 mutate하지 않음
- attachment별 media / 이전 기록 맥락 보존

### Active Workout / Routine update

기준:

`docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

- 강제 운동 순서 없음
- 미수행 운동은 그냥 미수행
- 실제 수행 순서는 루틴 구조 변경 아님
- 운동/세트 추가·삭제 같은 구조 변경만 종료 시 반영 여부 확인
- explicit drag reorder는 즉시 saved routine 순서에 저장

### Rest Timer

기준:

`docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

- 세트 체크 → 자동 timer
- 상단 nonblocking toast/pill
- UI를 닫아도 countdown 지속
- X는 표시만 숨김
- ±15초 MVP 제외
- **정확한 종료 signal은 OPEN**

### Assisted machine

기준:

`docs/ux-decisions/2026-09-03-assisted-machine-recording.md`

- `assisted_weight_reps`
- 보조 kg + 횟수
- 높은 보조 kg를 더 좋은 기록으로 해석하지 않음

### Workout Complete

기준:

- `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`

- 1:1.25 카드 carousel, 내부 스크롤 기본 사용 안 함
- 의미 있는 카드만 조건부 노출
- 운동 시간 = 시작~종료에서 명시적 pause 제외
- 완료 세트 = 종료 시 최종 체크 상태
- 체크/해제/재체크 반복해도 같은 세트는 1세트
- 완료 운동 수 = 완료 세트 1개 이상인 운동
- 일반 weight/reps 볼륨 = 완료 세트 `Σ(weight × reps)`
- assisted / duration / distance는 일반 kg volume에 억지로 포함하지 않음

### Progression Hint

기준:

`docs/ux-decisions/2026-09-04-progression-hint-threshold.md`

- 같은 루틴 + 같은 운동 + 같은 중량 최근 5회 관찰
- 5회 중 4회 성공 + 최신 수행 성공이면 증량 힌트 후보
- 성공 = 예정 세트 전체 완료 + 모든 세트 목표 반복 상단 달성
- 달력 기간은 조건 아님
- 정확한 증량 kg/%는 처방하지 않음
- `4/5`는 조정 가능한 MVP 제품 임계값

### Workout End / Discard

기준:

`docs/ux-decisions/2026-09-03-workout-end-flow.md`

- 자동 종료 없음, 사용자가 `운동 종료`
- 조기 종료 가능, 체크된 세트만 저장
- 전체 운동 버리기는 일반 종료와 별도 destructive action
- 기존 Figma `403c`를 whole-workout discard confirmation으로 재사용
- discard가 explicit reorder 자동 저장을 롤백하지 않음

### Recommended Routine

기준:

- `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`
- `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`

- Home 추천 카드 → 상세 → `운동 시작` → Active
- 상세에서 pre-save 없음
- 오늘 운동 기록 저장과 `내 루틴` 저장은 별개
- 완료 후 `내 루틴으로 저장` / `루틴은 저장하지 않기`
- 구조 변경 후 저장을 고른 경우에만 `오늘 한 구성 / 원래 추천 구성`

---

## Product/UX OPEN items preserved

Exercise DB / asset source analysis와 별개로 여전히 OPEN:

- 추천 루틴 실제 프로그램 contents — Exercise DB / substitution data 선행 필요
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer 종료 signal 세부 동작

최근 Analysis 논의에서 `기간 선택 / 운동 요약 / 운동 빈도 / 바디맵 기반 운동 부위 분포` 방향을 검토했지만, 아직 별도 PO-approved decision으로 승격하지 않았다.

---

## Figma status

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

주요 기존 frames:

- `110 / 111 Home`
- `301 / 301a / 302 Exercise Search`
- `341 Library Exercise Detail / History`
- `401a Workout Active`
- `410 Rest Timer`
- `403a / 403b / 403c Workout End`
- `421 Exercise Reorder`
- `501 Workout Complete`

추가/신규 state 또는 sync 필요:

- attachment picker
- `341` 운동 정보 tab content
- recommended routine detail
- assisted first-use helper
- recommended routine post-workout save state
- routine-change confirmation 정리
- `403c` whole-workout discard copy sync
- Analysis screen은 아직 미작성 / scope OPEN

최신 제품 결정들의 실제 Figma sync는 아직 완료되지 않았다.

---

## Canonical / review artifacts

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

최신 모든 PO 결정이 아직 반영된 것은 아니다. GitHub Decision / CURRENT가 더 최신이면 GitHub를 우선한다.

---

## Implementation status

**No Cursor implementation handoff.**

현재는 Exercise DB / source asset analysis + normalization 단계다. Source normalization과 canonical mapping이 안정된 뒤 필요한 구현 Issue/AC로 넘긴다.
