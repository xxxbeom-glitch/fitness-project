# CURRENT — Fitness Project

**Updated:** 2026-09-05

## Current mode

`EXERCISE DB / ASSET SOURCE ANALYSIS ACTIVE · RAW R2 VERIFIED · MAIN EQUIPMENT TARGETED QA COMPLETE · OLD P0 16/16 SOURCE COVERED · P1 15/17 SOURCE COVERED + 2 TRUE SOURCE GAPS · P1 IDENTITY REVIEW COMPLETE · FULL PRODUCTION MAPPING NEXT · PRODUCT/UX BASELINE PRESERVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO가 승인/패스한 항목을 다시 설명하거나 재논의하지 않는다.

재개 순서:

`CURRENT 확인 → Latest checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

기존 화면을 다룰 때는:

`최신 GitHub 결정 확인 → 기존 Figma frame 확인 → 있으면 변경점만 sync → 없을 때만 신규 화면 생성`

---

# Latest checkpoint — Gym Animations normalization / Production mapping

## 1. Purchased source / raw analysis base

구매:

- Gym Animations
- `Gym Workout Man Package`

원본 전체:

- **17,085 files**
- **98.69 GB**

Male Gym 분석 기준:

- `MP4/MALE/Library_database`
- **2,109 MP4 rows**

`Gym_Workout_` 대응 2,081개는 `Library_database`와 SHA256까지 동일하고, `Library_database`가 28개 더 많으므로 Male source 분석 기준은 `Library_database`다.

구매 원본 filename/path/media는 **read-only provenance**로 유지한다.

기준:

- `docs/exercise-db/2026-09-04-gym-animations-source-analysis-checkpoint.md`
- `docs/exercise-db/2026-09-05-normalization-resume-checkpoint.md`

## 2. Cloudflare R2 raw upload — VERIFIED / DONE

Raw bucket:

`gfit-source-original`

검증:

- objects: **17,085**
- size: **98.694 GiB**
- exact: **105,972,019,458 Byte**

원본 count/size와 일치. Raw upload DONE.

## 3. Targeted normalization / visual QA — COMPLETE

완료:

- Cable
- Machine
- Barbell
- Dumbbell
- Kettlebell
- Smith
- Landmine
- P1 identity review 3

주요 결과 문서:

- `docs/exercise-db/2026-09-04-cable-normalization-rule-v1.md`
- `docs/exercise-db/2026-09-04-cable-visual-review-14.md`
- `docs/exercise-db/2026-09-04-cable-duplicate-visual-qa-38.md`
- `docs/exercise-db/2026-09-04-machine-visual-qa-33.md`
- `docs/exercise-db/2026-09-05-barbell-visual-qa-18.md`
- `docs/exercise-db/2026-09-05-dumbbell-visual-qa-20.md`
- `docs/exercise-db/2026-09-05-kettlebell-visual-qa-12.md`
- `docs/exercise-db/2026-09-05-smith-landmine-visual-qa-10.md`
- `docs/exercise-db/2026-09-05-p1-identity-review-3-result.md`

공통 boundary:

1. 같은 운동 + 미디어/렌더/POV 차이만 있음 → same canonical + media variant
2. cable attachment 차이 → same canonical + attachment context/media
3. grip-only 차이 → same parent family + grip context
4. 자세 / laterality / load position / implement count / 수행 경로가 기록 의미를 materially 바꾸면 execution/load context로 보존
5. vendor filename보다 실제 visual movement를 우선
6. raw source는 수정하지 않고 normalized data를 별도 관리

기본 ZIP 기반 대량 duplicate/ambiguity 검수는 종료한다. 이후 Production mapping 중 특정 identity conflict가 새로 발견될 때만 소량 targeted visual QA를 추가한다.

## 4. Full 2,109 equipment-pass baseline

Raw/source-family first pass:

- Machine high-confidence: **202**
- Barbell: **212**
- Dumbbell: **493**
- Kettlebell: **188**
- Smith: **61**
- Landmine: **33**
- EZ Bar: **35**
- Machine-or-nonmachine ambiguous: **8**
- Other / not-yet-normalized: **579**

이 수치는 **raw/source-family rows**이며 final canonical exercise count가 아니다.

## 5. Production DB / old gap remap

기준:

- 기존 Production DB v1: **195 app-facing canonical / 206 source rows**
- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/exercise-db-gap-analysis-v1.md`
- `docs/exercise-db/2026-09-05-production-gap-remap-after-gym-animations.md`
- `docs/exercise-db/2026-09-05-p1-identity-review-3-result.md`

### Old P0 16

새 2,109 source와 다시 비교한 결과:

- **16 / 16 source candidate found**
- source-availability 기준 신규 asset 제작 필요: **16 → 0**
- P0 운동의 제품 우선순위 자체는 유지
- 바뀐 것은 `새 에셋 제작` 필요성이다.

따라서 P0 기본 행동:

`기존 구매 source 선택 → canonical mapping → naming/equipment/body-part QA → Production 승격`

### Old P1 17 — IDENTITY REVIEW COMPLETE

최종 결과:

- source-covered: **15 / 17**
- true source gaps: **2 / 17**
- unresolved: **0**

3건 최종 판정:

1. standard bilateral `Dumbbell Deadlift` → **TRUE_GAP_REMAINS**
   - RDL / stiff-leg / straight-leg / sumo / unilateral source는 있으나 conventional bilateral identity는 없음
2. standard-stance `Smith Machine Romanian Deadlift` → **SOURCE_COVERS_EXISTING_IDENTITY**
   - `Smith-Deadlift_Hips.mp4` 실제 영상은 standard-stance RDL-like hip hinge
   - raw filename은 그대로 보존하고 normalized identity만 Smith RDL로 mapping 가능
3. standard floor bodyweight `Sit Up` → **TRUE_GAP_REMAINS**
   - decline / vertical / twisting / loaded / band variants만 확인되고 plain floor sit-up은 없음

따라서 향후 P1 전체를 확장할 경우 현재 신규 source/asset 필요 후보는:

- Dumbbell Deadlift
- Sit Up

**2개**다. 둘 다 P1이며 MVP blocker는 아니다.

Trap Bar Deadlift source는 존재한다. Production 승격 시 `Trap Bar` equipment taxonomy 결정이 별도로 필요하다.

## 6. Important boundary — final canonical count NOT VERIFIED

아직 `2,109 raw rows → final G Fit canonical count`를 숫자로 확정하지 않는다.

이유:

- **579 Other / not-yet-normalized rows**가 남아 있음
- attachment / grip / execution context 흡수 필요
- 일부 vendor filename과 실제 movement 충돌 사례 존재
- targeted duplicate QA 완료 ≠ full canonical mapping 완료

단순히 reviewed duplicate 수를 2,109에서 빼서 canonical 수를 만드는 것은 금지한다.

---

# NEXT OPEN ITEM — Exercise DB / asset

## Immediate next

**2,109 source 전체를 기존 Production 195 canonical anchor에 bulk mapping한다.**

각 source row를 다음 중 하나로 분류:

- existing Production canonical
- new canonical candidate
- attachment context
- grip context
- execution/load context
- media duplicate/variant
- excluded/non-gym-first
- unresolved

다음 bulk pass에 필요한 입력:

- `MP4/MALE/Library_database`의 **2,109-row full filename/path/size manifest**

현재 active context에 그 full manifest가 직접 없으면 로컬 source folder에서 한 번만 다시 export해서 업로드한다. 사용자가 영상을 일일이 고르는 방식으로 돌아가지 않는다.

그 다음:

1. filename/rule 기반 bulk mapping
2. unresolved identity만 최소 targeted visual QA
3. 실제 source-derived canonical candidate count 계산
4. 실제 gym-first MVP gap 수 재산출
5. 정말 필요한 G Fit-created 신규 asset만 최종 확정
6. canonical mapping 안정화 후 production media selection / transform / app-serving storage 결정

**현재 Cursor implementation handoff 없음.**

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

- `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`

- 기존 Figma `341_Library_Exercise_History`의 `운동 정보 | 최근 기록` 2탭 유지
- `운동 정보`: 동작 미디어 → 운동명 → 장비/주요 근육 → 보조 근육 → 짧은 방법 → 핵심 체크포인트
- Gym Animations media가 있으면 상단 visual로 활용 가능
- media가 없어도 화면은 완전해야 함
- `최근 기록`: 날짜별 세트 / 중량 / 반복
- 장기 분석 dashboard는 Exercise Detail에 중복하지 않음

## Cable attachment

기준:

- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

- 사용자 용어 `손잡이`, 내부 `attachment`
- 같은 운동 + 다른 손잡이 = Active에서 별도 카드
- 기존 카드의 손잡이를 운동 중 mutate하지 않음
- attachment별 media / 이전 기록 맥락 보존

## Active Workout / Routine update

기준:

- `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

- 강제 운동 순서 없음
- 미수행 운동은 그냥 미수행
- 실제 수행 순서는 루틴 구조 변경 아님
- 운동/세트 추가·삭제 같은 구조 변경만 종료 시 반영 여부 확인
- explicit drag reorder는 즉시 saved routine 순서에 저장

## Rest Timer

기준:

- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`

- 세트 체크 → 자동 timer
- 상단 nonblocking toast/pill
- UI를 닫아도 countdown 지속
- X는 표시만 숨김
- ±15초 MVP 제외
- 정확한 종료 signal은 OPEN

## Assisted machine

기준:

- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`

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

- `docs/ux-decisions/2026-09-04-progression-hint-threshold.md`

- 같은 루틴 + 같은 운동 + 같은 중량 최근 5회 관찰
- 5회 중 4회 성공 + 최신 수행 성공이면 증량 힌트 후보
- 성공 = 예정 세트 전체 완료 + 모든 세트 목표 반복 상단 달성
- 달력 기간은 조건 아님
- 정확한 증량 kg/%는 처방하지 않음
- `4/5`는 조정 가능한 MVP 제품 임계값

## Workout End / Discard

기준:

- `docs/ux-decisions/2026-09-03-workout-end-flow.md`

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

Exercise DB / asset normalization과 별개로 OPEN:

- 추천 루틴 실제 프로그램 contents — Exercise DB / substitution data 선행 필요
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer 종료 signal 세부 동작

최근 Analysis 논의의 `기간 선택 / 운동 요약 / 운동 빈도 / 바디맵 기반 운동 부위 분포`는 아직 별도 PO-approved decision으로 승격하지 않았다.

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

현재는 Exercise DB / source asset analysis + normalization + Production mapping 단계다. Canonical mapping이 안정된 뒤 필요한 구현 Issue/AC로 넘긴다.
