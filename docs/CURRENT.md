# CURRENT — Fitness Project

**Updated:** 2026-09-04 22:43 KST

## Current mode

`EXERCISE DB / ASSET SOURCE ANALYSIS ACTIVE · GYM ANIMATIONS PURCHASED · RAW R2 UPLOAD IN PROGRESS · CABLE NORMALIZATION STARTED · PRODUCT/UX BASELINE PRESERVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 **이미 PO가 패스/승인한 항목을 다시 설명하거나 재논의하지 않는다.**

재개 순서:

`CURRENT 확인 → 아래 Latest checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

기존 화면을 다룰 때는 항상:

`최신 GitHub 결정 확인 → 기존 Figma frame 확인 → 있으면 변경점만 sync → 없을 때만 신규 화면 생성`

---

## Latest checkpoint — 2026-09-04 Gym Animations source analysis

### 1. Gym Animations package purchased / source HOLD resolved

기준:

`docs/exercise-db/2026-09-03-asset-source-purchase-hold.md`

구매:

- Gym Animations
- `Gym Workout Man Package`

기존 Exercise DB / asset source purchase HOLD는 해제되었다.

새 패키지는 **G Fit canonical exercise DB 자체가 아니라 raw source catalog**로 취급한다.

기존 Production Exercise DB v1과 P0 승인 상태는 보존하고, 새 소스를 기준으로 중복/variant/gap을 다시 판단한다.

### 2. Delivered source structure confirmed

상세:

`docs/exercise-db/2026-09-04-gym-animations-source-analysis-checkpoint.md`

확인된 전체 원본:

- **17,085 files**
- **98.69 GB**
- top level: `GIFS`, `MP4`

주요 Male MP4 폴더:

- `MP4/MALE/Gym_Workout_` → 2,081 MP4
- `MP4/MALE/Home_Workout_` → 2,120 MP4
- `MP4/MALE/Library_database` → 2,109 MP4

중복 비교 결과:

- `Gym_Workout_` 2,081개는 모두 `Library_database`에 동일 파일로 존재
- 2,081개 SHA256 비교 결과 전부 동일
- `Library_database`에 28개 추가
- `Home_Workout_`은 Gym 계열과 exact overlap 6개뿐이라 거의 별도 catalog

따라서 향후 Male Gym raw 분석 기준은:

`MP4/MALE/Library_database`

로 잡는다.

원본 filename/path는 변경하지 않고 보존한다.

### 3. Cable source first-pass classification

`Library_database` 기준 Cable raw videos:

- **297**
- broad exercise groups: **58**
- direct visual review needed: **14**
- duplicate candidate groups: **18 groups / 38 files**
- explicit attachment/accessory wording detected: **56 files**

중요 확인:

source에는 attachment별 Cable media가 실제로 다수 존재한다.

예:

- lat pulldown + rope
- lat pulldown + MAG grip
- lat pulldown + V-bar
- pro lat bar pulldown
- twin handle / parallel grip pulldown
- attachment별 triceps pushdown / row variants

따라서 PO-approved Cable UX의 실현 가능성이 강해졌다.

기본 구조:

`canonical exercise + attachment context + attachment-specific media`

예:

- `exercise_id = lat_pulldown`
- 기본/초기 손잡이는 wide lat bar로 둘 수 있음
- V-bar / MAG / rope 등을 선택하면 attachment context와 매칭 media가 바뀜
- 검색 목록에서 source variant를 전부 별도 canonical exercise로 노출할 필요는 없음

단, 모든 attachment 변형을 하나로 강제 통합하지는 않는다. 실제로 별도 운동으로 통용되는 경우는 normalization 결과에 따라 별도 identity를 유지할 수 있다.

기준 UX 문서:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

### 4. Cloudflare R2 raw source setup

Raw source bucket:

`gfit-source-original`

정책:

- 구매 원본 폴더 트리 / 파일명 그대로 업로드
- raw bucket과 향후 app-serving derivative media는 분리
- 원본은 read-only provenance layer로 유지

Windows `rclone` + Cloudflare R2 S3 endpoint 연결 완료.

빈 버킷 연결 테스트 성공.

현재 업로드 명령 실행 중:

`D:\project\111111111\Animations` → `r2:gfit-source-original/Animations`

현재 상태는 **UPLOAD IN PROGRESS**다.

완료 판정 전 반드시 remote 검증:

- expected files: **17,085**
- expected size: **~98.69 GB**

`rclone size`로 remote count/size를 확인하기 전에는 DONE으로 처리하지 않는다.

---

## NEXT OPEN ITEM — Exercise DB / asset

R2 raw upload 완료 후:

1. remote file count / total size 검증
2. Cable visual-review 14개 QA
3. Cable에서 `canonical exercise / attachment / grip-posture variant / duplicate` 규칙 확정
4. 같은 규칙을 Machine / Barbell / Dumbbell / Kettlebell / Smith / Landmine으로 확장
5. 기존 Production Exercise DB v1과 mapping
6. 최종 G Fit canonical 후보 수 / 실제 gap 재산출
7. production media transform / app-serving storage 구조 결정

**현재는 raw source analysis 단계이며 Cursor 구현 handoff 없음.**

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

### Exercise Detail

기준:

`docs/ux-decisions/2026-09-04-exercise-detail-scope.md`

- 기존 Figma `341_Library_Exercise_History`의 `운동 정보 | 최근 기록` 2탭 구조 유지
- 새 Exercise Detail IA를 만들지 않고 `운동 정보` 탭을 완성
- 운동 정보 우선순위 = 동작 미디어 → 운동명 → 장비 + 주요 근육 → 보조 근육 → 짧은 운동 방법 → 핵심 체크포인트
- 구매한 Gym Animations media가 있으면 상단 주요 visual로 활용 가능
- media가 없어도 상세 화면은 완전해야 하며 빈 media slot을 고정 예약하지 않음
- `최근 기록`은 기존 날짜별 세트 / 중량 / 반복 기록 구조 유지
- Exercise Detail 안에 장기 분석 dashboard를 중복하지 않음
- MVP에서는 `How to`, `Leaderboard` 등 추가 tab을 만들지 않음
- 운동 검색에서 Exercise Detail을 반드시 거치지 않고 목록에서 바로 추가 가능

### Cable attachment

기준:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

- 사용자 용어 `손잡이`, 내부 `attachment`
- 같은 운동 + 다른 손잡이 = 별도 카드
- Active Workout 기존 카드에서 손잡이 자체를 mutate하지 않음
- 같은 canonical exercise에서 attachment에 따라 media를 다르게 연결할 수 있음

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

- `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`

- 1:1.25 카드 캐러셀
- 내부 스크롤 기본 사용 안 함
- 의미 있는 카드만 조건부 노출 가능
- 완료 카드 구성/방향은 planning PASS
- final visual polish는 Figma에서 조정
- 운동 시간 = 시작~종료 경과시간에서 명시적 pause 제외
- 완료 세트 = 종료 시 최종 체크 상태인 세트 수
- 같은 세트를 체크/해제/재체크해도 최종 체크라면 1세트만 계산
- 완료 운동 수 = 완료 세트가 1개 이상인 운동 수
- 일반 weight/reps 총 볼륨 = 완료 세트의 `Σ(기록 중량 × 실제 반복수)`
- assisted / duration / distance 등은 일반 kg 총 볼륨에 억지로 포함하지 않음
- 장비별 hidden multiplier는 별도 semantics 확정 전 임의 적용하지 않음

### Progression Hint

기준:

`docs/ux-decisions/2026-09-04-progression-hint-threshold.md`

- MVP v1의 일반 증량 힌트는 달력 기간이 아니라 실제 수행 기록 기준
- 같은 루틴의 같은 운동 + 같은 중량에서 최근 5회 기록을 관찰
- 최근 5회 중 4회 이상 성공 + 가장 최근 수행도 성공이면 증량 힌트 후보
- 성공 = 예정 세트 전체 완료 + 모든 예정 세트에서 목표 반복 범위 상단 달성
- 한 번의 컨디션 흔들림은 허용하지만 짧은 성공 2번만으로 바로 증량을 권하지 않음
- 사용자가 먼저 중량을 올리거나 낮추면 새 중량에서 다시 관찰
- 세트 수 / 목표 반복 범위가 바뀌면 새 조건에서 다시 관찰
- `7일`, `2주` 같은 달력 기간은 MVP 증량 조건으로 사용하지 않음
- `+2.5kg`, `+5%` 같은 정확한 증량 폭은 MVP에서 자동 처방하지 않고 `한 단계 올려봐도 좋아요` 수준으로 제안
- assisted / bodyweight / duration / distance 등은 일반 증량 규칙에서 제외
- `4/5`는 제품 MVP 임계값이며 실제 데이터 / 사용자 피드백에 따라 후속 수정 가능

### Workout End Flow / Whole Workout Discard

기준:

`docs/ux-decisions/2026-09-03-workout-end-flow.md`

- 모든 예정 세트를 완료해도 자동 종료하지 않음
- 사용자가 `운동 종료`를 누르면 확인
- 미완료 상태에서도 조기 종료 가능
- 일반 종료는 완료 체크된 세트까지 저장
- 전체 운동 기록을 버리는 기능은 일반 종료와 별도 destructive action
- 기존 Figma `403c_Workout_Save_Or_Discard`를 전체 운동 기록 삭제 최종 확인으로 재사용
- 전체 삭제 확정 시 이번 세션의 운동 기록 / 완료 세트 / active session을 남기지 않음
- 이미 즉시 저장된 explicit routine reorder는 workout discard로 자동 롤백하지 않음

### Exercise Reorder

기준:

`docs/ux-decisions/2026-09-03-active-workout-routine-update.md`

- 직접 drag reorder 시 즉시 루틴 순서에 자동 저장
- 단순 수행 순서 변화는 루틴 reorder가 아님

### Recommended Routine Detail Flow

기준:

`docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`

Flow:

`Home 추천 루틴 카드 → 추천 루틴 상세 → 운동 시작 → Active Workout`

- 추천 카드를 누르자마자 운동 시작하지 않음
- 상세에서 루틴 구성 확인
- CTA `운동 시작`
- 상세에 `내 루틴으로 저장` 없음
- 저장 없이 운동 후 완료 시 저장 여부 결정

### Recommended Routine Post-workout Save

기준:

`docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`

- 추천 루틴으로 수행한 오늘 운동 기록은 항상 저장
- 운동 기록 저장과 추천 루틴을 `내 루틴`으로 저장하는 것은 별개
- 완료 후 Primary `내 루틴으로 저장`
- Secondary `루틴은 저장하지 않기`
- 사용자의 선택 없이 추천 루틴을 자동 저장하지 않음
- 실제 루틴 구조를 변경했고 저장을 선택한 경우에만 `오늘 한 구성 / 원래 추천 구성` 추가 선택
- kg / 반복수 / 일부 미완료 / 단순 수행 순서 차이는 루틴 구조 변경이 아님

---

## Product/UX OPEN items preserved

Exercise DB / asset source analysis와 별개로 아래 제품 항목은 여전히 OPEN이다.

- 추천 루틴 실제 프로그램 contents — Exercise DB / substitution data 선행 필요
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer 종료 signal 세부 동작

Exercise DB 분석 중이라고 해서 이 항목들이 결정된 것으로 간주하지 않는다.

---

## Figma status

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

기존 screen을 새로 기획하지 않고 최신 승인 정책에 맞춰 sync한다.

주요 기존 frames:

- `110 / 111 Home`
- `301 / 301a / 302 Exercise Search`
- `341 Library Exercise Detail / History`
- `401a Workout Active`
- `410 Rest Timer`
- `403a / 403b / 403c Workout End`
- `421 Exercise Reorder`
- `501 Workout Complete`

추가/신규 state 또는 sync가 필요한 것:

- attachment picker
- `341` 운동 정보 tab content
- recommended routine detail
- assisted first-use helper
- recommended routine post-workout save state
- routine-change confirmation 정리
- `403c`를 whole-workout discard confirmation copy로 sync

**최신 제품 결정들의 실제 Figma sync는 아직 완료되지 않았다.**

---

## Canonical / review artifacts

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

주의:

- canonical production 전체 앱 wireframe에는 최신 모든 PO 결정이 아직 반영되지 않음
- review artifact와 canonical production을 구분

---

## Implementation status

**No Cursor implementation handoff.**

현재는 Exercise DB / source asset analysis + raw media ops 단계다. Source normalization과 canonical mapping이 안정된 뒤 필요한 구현 Issue/AC로 넘긴다.
