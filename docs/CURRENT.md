# CURRENT — Fitness Project

**Updated:** 2026-09-05 00:29 KST

## Current mode

`EXERCISE DB / ASSET SOURCE ANALYSIS ACTIVE · RAW R2 VERIFIED · CABLE COMPLETE · MACHINE QA COMPLETE · BARBELL QA COMPLETE · DUMBBELL QA COMPLETE · KETTLEBELL QA COMPLETE · SMITH + LANDMINE FINAL TARGETED VISUAL QA NEXT · PRODUCT/UX BASELINE PRESERVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO가 승인/패스한 항목을 다시 설명하거나 재논의하지 않는다.

재개 순서:

`CURRENT 확인 → Latest checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

기존 화면을 다룰 때는:

`최신 GitHub 결정 확인 → 기존 Figma frame 확인 → 있으면 변경점만 sync → 없을 때만 신규 화면 생성`

---

# Latest checkpoint — Gym Animations source normalization

## 1. Purchased source / raw analysis base

구매:

- Gym Animations
- `Gym Workout Man Package`

전체 원본:

- **17,085 files**
- **98.69 GB**
- top level: `GIFS`, `MP4`

Male MP4 주요 폴더:

- `Gym_Workout_` → 2,081
- `Home_Workout_` → 2,120
- `Library_database` → 2,109

`Gym_Workout_` 2,081개는 `Library_database` 대응 파일과 SHA256까지 모두 동일하고, `Library_database`가 28개 더 많다.

따라서 Male Gym raw 분석 기준:

`MP4/MALE/Library_database`

구매 원본 filename/path/media는 **read-only provenance**로 유지한다.

기준:

- `docs/exercise-db/2026-09-04-gym-animations-source-analysis-checkpoint.md`

## 2. Cloudflare R2 raw upload — VERIFIED / DONE

Raw bucket:

`gfit-source-original`

Upload:

`D:\project\111111111\Animations` → `r2:gfit-source-original/Animations`

검증:

- objects: **17,085**
- size: **98.694 GiB**
- exact: **105,972,019,458 Byte**

원본 count/size와 일치하므로 raw upload는 DONE이다.

## 3. Cable normalization — COMPLETE

기준:

- `docs/exercise-db/2026-09-04-cable-normalization-rule-v1.md`
- `docs/exercise-db/2026-09-04-cable-visual-review-14.md`
- `docs/exercise-db/2026-09-04-cable-normalization-map-v0.1.md`
- `docs/exercise-db/2026-09-04-cable-duplicate-visual-qa-38.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

핵심 rule:

1. 같은 운동 + 손잡이만 다름 → `same canonical + attachment context/media`
2. 그립만 다름 → `same parent family + grip variant/context`
3. 자세 / 한손·양손 / behind-neck / 큰 수행 경로 차이 → execution variant, history 자동 병합 금지
4. 운동 자체가 materially 다름 → separate canonical candidate
5. true duplicate는 filename이 아니라 실제 수행 기준
6. raw source는 수정하지 않고 derived normalized data를 별도 관리

Cable source:

- `Cable*` raw: **297**
- cable-associated extra: **1**
- working manifest: **298 rows**

Visual QA:

- ambiguous 14개 직접 검수 완료
- duplicate candidates 18 groups / 38 files 직접 검수 완료
- true app-facing duplicate groups: **14**
- execution-variant groups: **2**
- attachment-variant groups: **1**
- mixed source-media exception groups: **1**

주요 source exception:

- `Cable One Arm Front Raise.mp4` → 실제로는 dumbbell squat-to-overhead-press / thruster-like media
- Male catalog 내 female-model Cable media 존재

Cable derived reference artifact:

- `cable_normalization_map_v0_2.csv`

## 4. Full Library_database 2,109 equipment pass — COMPLETE

기준:

- `docs/exercise-db/2026-09-04-library-2109-equipment-pass-v0.1.md`

Manifest integrity:

- rows: **2,109**
- unique filenames: **2,109**
- blank filenames: **0**

1차 분류:

- Machine high-confidence: **202**
- Barbell: **212**
- Dumbbell: **493**
- Kettlebell: **188**
- Smith: **61**
- Landmine: **33**
- EZ Bar: **35**
- Machine-or-nonmachine ambiguous: **8**
- Other / not-yet-normalized: **579**

Duplicate candidate scan:

- Machine: **12 groups / 25 files**
- Barbell: **8 groups / 18 files**
- Dumbbell: **9 groups / 20 files**
- Kettlebell: **6 groups / 12 files**
- Smith: **1 group / 2 files**
- Landmine: **4 groups / 8 files**
- EZ Bar: **0**

이 수치는 filename cleanup 기반 review candidate이며 자동 merge하지 않는다.

## 5. Machine targeted visual QA — COMPLETE

기준:

- `docs/exercise-db/2026-09-04-machine-visual-qa-33.md`

33 files 직접 검수:

- duplicate candidates: **25 files / 12 groups**
- ambiguous machine/non-machine: **8 files**
- binary-identical SHA256 duplicate: **0**

12 group 결과:

- same canonical + machine-design/media variant: **10 groups**
- grip variant: **1 group** — Lever High Row
- execution variant: **1 group** — Lever Triceps Extension
- unresolved: **0**

8 ambiguous 결과:

- Machine confirmed: **5**
- Non-Machine confirmed: **3**
- unresolved: **0**

현재 Machine source-scope candidate = **207 raw rows**. Final canonical count가 아님.

## 6. Barbell targeted visual QA — COMPLETE

기준:

- `docs/exercise-db/2026-09-05-barbell-visual-qa-18.md`

8 groups / 18 files 직접 비교:

- same canonical + POV/load/render/timing media variant: **7 groups**
- execution variant: **1 group**
  - Barbell Rear Lunge → `front_foot_elevated` vs standard `floor`
- unresolved: **0**

Barbell boundary:

- 카메라/플레이트/render/FIX 차이만으로 identity 분리하지 않음
- step/platform처럼 ROM/수행 조건이 크게 달라지면 execution variant

## 7. Dumbbell targeted visual QA — COMPLETE

기준:

- `docs/exercise-db/2026-09-05-dumbbell-visual-qa-20.md`

9 groups / 20 files 직접 비교:

- same canonical + media/render/POV/bench variant: **8 groups**
- load-position / execution variant: **1 group**
  - Dumbbell Hyperextension → `hanging_load` vs `chest_close_load`
- unresolved: **0**

Dumbbell boundary:

- render/POV/bench 디자인 차이만으로 identity를 나누지 않음
- load position이 leverage와 기록 의미를 크게 바꾸면 별도 execution/load context로 보존

## 8. Kettlebell targeted visual QA — COMPLETE

기준:

- `docs/exercise-db/2026-09-05-kettlebell-visual-qa-12.md`

6 groups / 12 files 직접 비교:

- same canonical + render/POV/timing media variant: **3 groups**
  - Bent Press
  - Rear Lunge
  - Upright Row
- load-position / implement-count variant: **2 groups**
  - Forward Lunge → single goblet/front hold vs two kettlebells at sides
  - Sumo Squat → low-hang vs goblet/high-front hold
- naming / movement mismatch: **1 group**
  - `Kettlebell-Good-Morning-(male)` → true good morning, kettlebell upper-back/behind-head
  - `Kettlebell-Good-Morning_Hips_` → visual movement is hanging kettlebell hip hinge, closer to kettlebell deadlift/RDL family candidate
- unresolved: **0**

Kettlebell boundary:

- render/POV/timing만 다름 → same canonical + media variant
- single vs double kettlebell처럼 implement count가 달라 총 external-load 의미가 달라지면 explicit variant
- goblet/high-front vs low-hang처럼 load position이 기록 의미를 materially 바꾸면 history 자동 병합 금지
- vendor filename과 실제 movement가 충돌하면 raw filename은 보존하고 normalized family를 별도로 정함

---

# NEXT OPEN ITEM — Exercise DB / asset

## Immediate next

기본 targeted visual QA의 마지막 묶음:

- **Smith: 1 group / 2 files**
- **Landmine: 4 groups / 8 files**

사용자 반복 작업을 줄이기 위해 **Smith + Landmine 10 files를 한 ZIP으로 묶어 한 번에 검수**한다.

그 다음 순서:

1. Smith + Landmine 10 direct visual QA
2. 필요 시 각 family의 naming/media exception만 소량 추가 QA
3. 전체 normalized source를 기존 Production Exercise DB v1과 mapping
4. 최종 G Fit canonical 후보 수 / 실제 gap 재산출
5. canonical mapping 안정화 후 production media selection/transform / app-serving storage 결정

**현재는 source normalization 단계이며 Cursor implementation handoff 없음.**

---

# Approved UX baseline — do not reopen

## Home

- 운동 시작 / 복귀가 최우선
- 루틴 없음 → G Fit 추천 루틴 + 내 루틴 만들기
- 추천 루틴은 curated ready-made routine, AI 생성 아님
- 카드 1개 = 완성 루틴 1개, 실제 운동 구성 노출
- 추천 루틴은 저장 전 바로 운동 가능

## Exercise Search / Add

- search-first, 목록에서 바로 추가
- 루틴 만들기 / 운동 중 추가 흐름 재사용
- Exercise Detail은 선택 진입
- 없으면 Custom Exercise
- 손잡이 지원 운동: `운동 선택 → 손잡이 선택 → 카드 추가`

## Exercise Detail

기준:

`docs/ux-decisions/2026-09-04-exercise-detail-scope.md`

- 기존 Figma `341_Library_Exercise_History`의 `운동 정보 | 최근 기록` 2탭 유지
- `운동 정보`: 동작 미디어 → 운동명 → 장비/주요 근육 → 보조 근육 → 짧은 방법 → 핵심 체크포인트
- Gym Animations media가 있으면 상단 visual로 활용 가능
- media가 없어도 화면은 완전해야 함
- `최근 기록`: 날짜별 세트 / 중량 / 반복
- 장기 분석 dashboard는 Exercise Detail에 중복하지 않음

## Cable attachment

기준:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

- 사용자 용어 `손잡이`, 내부 `attachment`
- 같은 운동 + 다른 손잡이 = Active에서 별도 카드
- 기존 카드의 손잡이를 운동 중 mutate하지 않음
- attachment별 media / 이전 기록 맥락 보존

## Active Workout / Routine update

기준:

`docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

- 강제 운동 순서 없음
- 미수행 운동은 그냥 미수행
- 실제 수행 순서는 루틴 구조 변경 아님
- 운동/세트 추가·삭제 같은 구조 변경만 종료 시 반영 여부 확인
- explicit drag reorder는 즉시 saved routine 순서에 저장

## Rest Timer

기준:

`docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

- 세트 체크 → 자동 timer
- 상단 nonblocking toast/pill
- UI를 닫아도 countdown 지속
- X는 표시만 숨김
- ±15초 MVP 제외
- 정확한 종료 signal은 OPEN

## Assisted machine

기준:

`docs/ux-decisions/2026-09-03-assisted-machine-recording.md`

- `assisted_weight_reps`
- 보조 kg + 횟수
- 높은 보조 kg를 더 좋은 기록으로 해석하지 않음

## Workout Complete

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

## Progression Hint

기준:

`docs/ux-decisions/2026-09-04-progression-hint-threshold.md`

- 같은 루틴 + 같은 운동 + 같은 중량 최근 5회 관찰
- 5회 중 4회 성공 + 최신 수행 성공이면 증량 힌트 후보
- 성공 = 예정 세트 전체 완료 + 모든 세트 목표 반복 상단 달성
- 달력 기간은 조건 아님
- 정확한 증량 kg/%는 처방하지 않음
- `4/5`는 조정 가능한 MVP 제품 임계값

## Workout End / Discard

기준:

`docs/ux-decisions/2026-09-03-workout-end-flow.md`

- 자동 종료 없음, 사용자가 `운동 종료`
- 조기 종료 가능, 체크된 세트만 저장
- 전체 운동 버리기는 일반 종료와 별도 destructive action
- 기존 Figma `403c`를 whole-workout discard confirmation으로 재사용
- discard가 explicit reorder 자동 저장을 롤백하지 않음

## Recommended Routine

기준:

- `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`
- `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`

- Home 추천 카드 → 상세 → `운동 시작` → Active
- 상세에서 pre-save 없음
- 오늘 운동 기록 저장과 `내 루틴` 저장은 별개
- 완료 후 `내 루틴으로 저장` / `루틴은 저장하지 않기`
- 구조 변경 후 저장을 고른 경우에만 `오늘 한 구성 / 원래 추천 구성`

---

# Product/UX OPEN items preserved

Exercise DB / asset source normalization과 별개로 여전히 OPEN:

- 추천 루틴 실제 프로그램 contents — Exercise DB / substitution data 선행 필요
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer 종료 signal 세부 동작

최근 Analysis 논의에서 `기간 선택 / 운동 요약 / 운동 빈도 / 바디맵 기반 운동 부위 분포` 방향을 검토했지만 아직 별도 PO-approved decision으로 승격하지 않았다.

---

# Figma status

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
- Analysis screen 미작성 / scope OPEN

최신 제품 결정들의 실제 Figma sync는 아직 완료되지 않았다.

---

# Canonical / review artifacts

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

최신 모든 PO 결정이 아직 반영된 것은 아니다. GitHub Decision / CURRENT가 더 최신이면 GitHub를 우선한다.

---

# Implementation status

**No Cursor implementation handoff.**

현재는 Exercise DB / source asset analysis + normalization 단계다. Source normalization과 canonical mapping이 안정된 뒤 필요한 구현 Issue/AC로 넘긴다.
