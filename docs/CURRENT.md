# CURRENT — Fitness Project

**Updated:** 2026-09-03 18:05 KST

## Current mode

`PRODUCT / UX PLANNING — EXERCISE DB / ASSET WORK HOLD · ACTIVE WORKOUT CABLE ATTACHMENT CARD UX PO APPROVED · CURRENT FOCUS: ACTIVE WORKOUT REMAINING DETAILS · CANONICAL WIREFRAME v2026-09-02.14`

구매 운동 에셋과 `metadata.json` 원본은 계속 **read-only**로 보존한다. G Fit용 정규화 DB와 신규 제작 에셋은 별도 파생 데이터로 관리한다.

Production Exercise DB v1은 현재 구매 source **206개**를 기준으로 정규화한 제품 baseline이다.

- purchased source rows preserved: **206**
- app-facing canonical exercises: **195**
- MVP default search 제외 source rows: **8**
- source QA: **high 205 / medium 1 / low 0**
- production exception: **4**
- required canonical field blank: **0**
- English-only `name_ko`: **0**
- unexpected shared canonical group: **0**

MVP 기본 검색에서는 `Abdominals Stretch Variation 1–4`와 장비별 `Spinal Jefferson Curl` 4종을 제외한다. 원본 row / asset은 삭제하지 않고 source trace에 계속 보존한다.

production exception 4건은 현재 제품 DB 사용을 막지 않는 non-blocking exception으로 관리한다.

- `machine-45-degree-back-extension` — source prose / poster로 운동 identity는 확인했으나 현재 retrieval에서 raw structured header 1건을 정확히 회수하지 못함. raw source field를 추정 입력하지 않음.
- `dumbbell-single-arm-row`
- `kettlebell-row-single`
- `kettlebell-single-arm-row`

마지막 3개는 구매 poster와 source 설명의 자세가 불일치한다. G Fit에서는 실제 poster 수행을 기준으로 별도 exercise identity를 유지하고 구매 raw metadata는 그대로 보존한다. source instructions / description은 자세가 충돌하므로 사용자-facing 운동 설명으로 직접 재사용하지 않고 향후 G Fit normalized copy를 별도 작성한다.

케이블 / 풀리 운동에서 선택 기록하려는 대상은 `오버핸드 / 언더핸드 / 뉴트럴` 같은 손바닥 방향이 아니라 **스트레이트 바 / 와이드 랫 바 / 맥그립 계열 같은 손잡이(attachment)**다. 사용자-facing 용어는 `손잡이`, 내부 데이터 용어는 `attachment`를 권장한다.

Active Workout에서 손잡이는 카드 내부 chip / label로 **표시만** 하고 카드 안에서 수정하지 않는다. 같은 운동을 손잡이 2개로 할 예정이면 카드도 2개로 둔다. 운동 중 다른 손잡이로 더 하려면 `운동 추가 → 운동 선택 → 손잡이 선택 → 새 카드 추가` 흐름을 사용한다. 기존 카드의 세트 / 이전 기록 / kg / 횟수 / 완료 상태를 다른 손잡이로 변환하거나 덮어쓰지 않는다.

이 결정은 `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`가 기준이며, 기존 normalization 문서의 `오버핸드 / 뉴트럴 / 언더핸드` 중심 선택형 grip 가정은 superseded 상태다.

Production v1 기준으로 Planfit / Hevy + 국내 상용 헬스장 핵심 운동 gap analysis를 진행했다. 경쟁 앱의 전체 catalog 크기를 따라가지 않고, 현재 G Fit에 실제 공백이 큰 후보 **38개**를 검토했다.

- **P0 신규 에셋 승인: 16개**
- **P0 data-only 정리: 1개** (`machine-front-military-press`를 `숄더 프레스 머신`으로 찾기 쉬운 rename / alias 검토)
- **P1 후속 후보: 17개**
- **NO_ADD / 신규 에셋 불필요: 4개**

PO 승인 P0 16개:

1. 바벨 루마니안 데드리프트
2. 덤벨 루마니안 데드리프트
3. 바벨 힙 쓰러스트
4. 라잉 레그 컬 머신
5. 시티드 레그 컬 머신
6. 시티드 카프 레이즈 머신
7. 힙 어브덕션 머신
8. 힙 어덕션 머신
9. 스미스 머신 벤치프레스
10. 스미스 머신 스쿼트
11. 어시스트 풀업
12. 어시스트 딥스
13. 핵 스쿼트 머신
14. 플랭크
15. 크런치
16. 라잉 레그 레이즈

기존 후보의 `레그 레이즈`는 행잉/라잉 동작 혼동을 피하기 위해 `라잉 레그 레이즈`로 명확히 고정했다.

P0 16개 canonical row spec v1도 승인 완료했다. `machine-assisted-pull-up`, `machine-assisted-dip`은 일반 `weight_reps`가 아니라 **`assisted_weight_reps` = 보조중량 + 횟수**로 기록한다. UI에서는 일반 `kg` 대신 `보조 kg` 의미를 사용하고, 일반 중량 운동처럼 `더 높은 kg = 더 좋은 기록`으로 해석하지 않는다. MVP에서는 assisted 운동에 일반 weight PR / 1RM / bodyweight 기반 effective-load 계산을 적용하지 않는다.

P0 운동 범위와 canonical spec은 승인됐지만 신규 이미지 제작은 아직 시작하지 않는다. 구매 에셋과 같은 시각 계열을 AI reference로 활용하기 전 modification / derivative / AI 관련 라이선스 확인이 선행되어야 한다.

**Exercise DB / asset 상세 작업은 현재 HOLD다.** PO가 대규모 Gym Animations 계열 추가 구매 여부를 확인한 뒤 재개한다. HOLD 동안 Production 195, P0 16 approved spec, assisted recording semantics는 그대로 보존한다. 기존 `machine-front-military-press` shoulder press alias-only 결론과 hand-orientation grip mapping은 재개 시 다시 검수하며 지금 실행하지 않는다.

Cursor 제품 구현은 아직 승인되지 않았다.

## Current authority

우선순위:

1. 현재 Product Owner 결정
2. `docs/24_PRODUCT_DIRECTION_V2.md`
3. `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
4. `docs/ux-decisions/2026-09-02-exercise-db-normalization.md` — cable grip subsection은 위 2026-09-03 attachment 결정이 supersede
5. `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
6. `docs/exercise-db/p0-canonical-row-spec-v1.md`
7. `docs/exercise-db/exercise-db-gap-analysis-v1.md`
8. `docs/exercise-db/exercise-db-v1-production.md`
9. `docs/exercise-db/purchased-asset-classification-v0.6.md`
10. `docs/exercise-db/purchased-asset-classification-v0.5.md`
11. `docs/exercise-db/purchased-asset-classification-v0.4.md`
12. `docs/exercise-db/purchased-asset-classification-v0.3.md`
13. `docs/exercise-db/purchased-asset-classification-v0.2.md`
14. `docs/exercise-db/purchased-asset-classification-v0.1.md`
15. `docs/ux-decisions/2026-09-02-home-workout-routine-completion-locks.md`
16. `docs/08_DECISIONS.md` 중 위 문서들과 충돌하지 않는 기존 기반 결정
17. 현재 canonical wireframe / Figma

기존 recommendation-heavy onboarding 관련 DEC-005 / DEC-006 / DEC-009 / DEC-014의 오래된 흐름은 `docs/24_PRODUCT_DIRECTION_V2.md`의 2026-09-01 reset보다 우선하지 않는다.

## Product definition — CONFIRMED

Working name: `G Fit` (`Go Fitness`) — 가칭.

G Fit은 **운동 루틴을 만들고, 실제 운동을 빠르게 기록하고, 기록이 쌓일수록 성장과 개인화 가치를 높이는 웨이트 트레이닝 앱**이다.

제품 성격:

- 빠른 운동 기록이 본체
- 추천 루틴 / 운동 정보는 선택을 돕는 보조층
- 기록이 쌓이면 분석 / 개인화 가치가 커짐
- AI coach/chat-first 제품이 아님

Core loop:

`Home에서 다음 운동 바로 시작 → 운동 중 빠르게 기록 → 완료에서 오늘 결과 확인 → 분석에서 누적 변화 확인`

Bottom navigation:

`홈 / 루틴 / 분석 / 설정`

Exercise Library는 독립 primary tab이 아니라 루틴/운동 흐름 안에서 contextual하게 사용한다.

## First-run — CONFIRMED RESET

New account:

`로그인 → 기본정보(성별 + 생년월일) → Home`

Existing account:

`로그인 → Home`

기존 추천 설문 / 추천 결과 캐러셀 onboarding은 superseded.

닉네임 / 프로필 사진은 first-run 필수가 아니며 기본값을 자동 부여하고 Settings에서 변경한다.

## Approved UX locks

### Home

Home 최우선 역할은 **운동 시작 / 운동 복귀**다.

- 루틴 없음 → 추천 루틴 / 내 루틴 만들기
- 루틴 있음 + 요일 미지정 → 다음 운동
- 루틴 있음 + 요일 지정 → 오늘의 운동
- active workout → 운동 계속하기

### Active Workout

**전체 운동을 한 화면에서 이어서 보고 현재 운동만 펼쳐 기록**한다.

- 세트 / 이전 기록 / kg / 횟수 / 완료
- 다음 운동은 아래에 접어서 계속 보임
- 이전 기록은 입력 가까이에 표시
- 휴식 타이머는 작은 형태
- 운동 하나마다 별도 화면으로 이동하는 구조는 기본값이 아님

케이블 손잡이(attachment) UX — **PO APPROVED**:

- 카드 하나 = 오늘 실제로 수행할 하나의 운동 블록
- 손잡이는 카드 안에 chip / label로 표시하되 수정 UI로 사용하지 않음
- 같은 운동을 손잡이 2개로 할 계획이면 루틴부터 별도 카드 2개로 저장
- 운동 중 다른 손잡이를 추가하려면 `운동 추가 → 운동 선택 → 손잡이 선택 → 새 카드 추가`
- 기존 카드의 손잡이 / 완료 세트 / 이전 기록을 다른 손잡이로 바꾸지 않음
- 각 카드에는 기존 `세트 / 이전 / kg / 횟수 / 완료` 구조를 그대로 사용

### Recommended Routine Save Flow

`추천 루틴 선택 → 저장 없이 운동 시작 → 운동 완료 → 사용자가 내 루틴 저장 여부 결정`

- 오늘 운동 기록은 항상 저장
- 루틴 저장은 별도 선택
- 운동 중 구성이 바뀌었다면 저장 시 `오늘 한 구성 / 원래 추천 구성`을 추가로 선택하는 방향

### Post-workout Completion

완료 화면은 **오늘 운동을 풍부하게 복기**하는 화면이다.

상단 후보 카드:

1. 오늘 운동 요약
2. 오늘 좋아진 기록
3. 이번 주 기록

그 아래 오늘 실제 운동 결과 전체를 보여준다. 월별 추세 / 장기 그래프 / 깊은 종목 분석은 Analysis가 담당한다.

### Exercise Search / Add

**검색 중심 + 목록에서 바로 추가**가 기본이다.

- 루틴 만들기와 운동 중 추가에서 같은 선택 흐름 재사용
- 목록에서 상세 진입 없이 바로 추가 가능
- 목록 우선 정보: 운동명 / 장비 / 주요 부위 / 이미지 / 최근 기록
- 이름/이미지 선택 시 상세는 선택적으로 진입
- 없으면 직접 만들기
- Custom exercise는 MVP first-class history entity
- 손잡이 선택을 지원하는 운동은 `운동 선택 → 손잡이 선택 → 카드 추가`의 다음 단계를 사용

## Exercise DB normalization — APPROVED

기준 문서:

`docs/ux-decisions/2026-09-02-exercise-db-normalization.md`

케이블 손잡이 기록 부분은 다음 문서가 최신 기준이다.

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

핵심 규칙:

- 장비가 다르면 별도 운동 / 별도 이력
- 각도 / 주요 자세가 다르면 별도 운동 / 별도 이력
- 기본 identity는 최소 `동작 + 장비 + 각도/주요 자세`
- 케이블 기록 선택 대상은 hand-orientation grip이 아니라 **손잡이 / attachment**
- attachment를 기록 차원으로 사용하는 운동은 attachment별 수행 카드 / 이전 기록을 분리
- Cable Bar Pushdown / Cable Rope Pushdown처럼 별도 운동명으로 통용되는 attachment/movement 변형은 자동으로 하나의 운동에 합치지 않음
- 정확한 운동별 attachment 허용 목록 / taxonomy는 DB HOLD 해제 후 확정
- 하나의 standard exercise identity에 `name_ko` + `name_en` 동시 유지
- 구매 원본 영문은 `source_name_en`, 통합 전 다른 이름은 aliases/source metadata로 보존
- 제조사/브랜드별 머신 DB는 MVP 기본 범위에서 제외
- 같은 실제 수행만 duplicate merge; 애매하면 자동 통합하지 않음
- 사용자 부위 필터는 `가슴 / 등 / 어깨 / 팔 / 하체 / 코어 / 전신 / 기타`
- 내부 DB에는 가능한 범위에서 세부 주요/보조 근육 유지
- 직접 만든 운동은 큰 부위까지 필수, 세부 근육은 선택이며 앱이 임의 추정하지 않음
- 어시스트 머신은 `assisted_weight_reps`로 별도 기록하며 `보조 kg + 횟수` 의미를 사용

## Purchased exercise DB QA history

- **v0.1** — 파일명 기반 206개 1차 분류  
  `docs/exercise-db/purchased-asset-classification-v0.1.md`  
  commit `544e39a0744278362ff0fbf6745908424edbeffe`

- **v0.2** — metadata / poster 일부 재검수, false duplicate 정정  
  `docs/exercise-db/purchased-asset-classification-v0.2.md`

- **v0.3** — 케이블 / 풀리 metadata + grip mapping  
  `docs/exercise-db/purchased-asset-classification-v0.3.md`  
  commit `84a14a2ae500bd38f7fbdd7f672538afe1db296f`  
  high 55 / medium 1 / low 150

- **v0.4** — Band 11 + Barbell 24 source metadata enrichment  
  `docs/exercise-db/purchased-asset-classification-v0.4.md`  
  commit `3130116899bbbc55293b9fa0df533396c15841a6`  
  high 90 / medium 1 / low 115

- **v0.5** — Bodyweight 30 + Dumbbell 51 source metadata enrichment  
  `docs/exercise-db/purchased-asset-classification-v0.5.md`  
  commit `80106e804bf8fbdddd0eb2f54f1f48d63bc3584a`  
  high 171 / medium 1 / low 34

- **v0.6** — remaining metadata enrichment + 4 poster visual QA + canonical/display integrity pass  
  `docs/exercise-db/purchased-asset-classification-v0.6.md`  
  commit `fcf4ac79fd91aa5729e47a86de96a4cbddc19959`  
  high 205 / medium 1 / low 0

- **Production v1** — purchased-asset baseline promotion  
  `docs/exercise-db/exercise-db-v1-production.md`  
  commit `c213fb40da273328ab7094bca74eda86027fa2a3`  
  195 app-facing canonical / 206 source / 8 default-search exclusions / 4 non-blocking exceptions

- **Gap Analysis v1** — Planfit / Hevy + 국내 핵심 운동 gap review; P0 pack PO approved  
  `docs/exercise-db/exercise-db-gap-analysis-v1.md`  
  latest approval commit `1ab822c0e2caac94f4162f286e2a11af7f393b74`  
  P0 new assets 16 / P0 data-only 1 / P1 17 / NO_ADD 4

- **Assisted machine recording** — 어시스트 풀업/딥스 `보조중량 + 횟수` semantics PO approved  
  `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`  
  commit `aa699dc3d73236d23115419c3bbc48f934fec1c9`

- **Cable attachment Active Workout UX** — 손잡이 표시-only chip + 새 손잡이는 새 카드 추가 PO approved  
  `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`  
  commit `ad6fbdfe2222f44a245b85c1e03280993f00fe91`

- **P0 Canonical Row Spec v1** — 신규 P0 16개 canonical data spec approved, asset pending  
  `docs/exercise-db/p0-canonical-row-spec-v1.md`  
  commit `eacf9451f63af7f32c09bdd724ec4482a7aadc89`

### Legacy grip mapping — RE-REVIEW REQUIRED

2026-09-03 PO clarification으로 제품의 선택 기능은 hand-orientation grip이 아니라 cable **attachment / 손잡이**를 의미하는 것으로 정리됐다.

따라서 아래 과거 mapping은 source/history 참고용이며 **현재 제품 정책으로 구현하지 않는다.** DB / asset HOLD 해제 후 attachment 관점으로 재검수한다.

- `cable-single-arm-neutral-grip-row` + `cable-single-arm-underhand-grip-row` → `cable-single-arm-row`; 과거에는 neutral / underhand 별도 이력으로 해석
- `machine-pulldown` + `narrow-pulldown` → `lat-pulldown`; 과거에는 기본 기록 + `neutral_close` 별도 이력으로 해석
- `cable-supinating-row` → dynamic grip movement이므로 별도 운동으로 분류됨
- `Cable Bar Pushdown / Cable Rope Pushdown / Cable V-Bar Pushdown` → 현재 각각 별도 운동

원본 source row / asset은 수정하거나 삭제하지 않는다.

### Next DB / asset work — HOLD

PO의 추가 에셋 패키지 구매 여부 확인 전까지 상세 DB / 신규 에셋 작업을 진행하지 않는다.

HOLD checkpoint:

1. Production Exercise DB v1 **195 canonical / 206 source** 유지
2. P0 신규 16개 approved scope + canonical row spec 유지
3. Assisted pull-up / dip `assisted_weight_reps` semantics 유지
4. shoulder press alias-only 결론은 실행하지 않고 재검수 대기
5. hand-orientation grip mapping은 실행하지 않고 attachment 기준 재검수 대기
6. P0 신규 이미지 생성 시작하지 않음

구매 시 재개 순서:

1. 전달 패키지 / 전체 목록 / 라이선스 확인
2. 원본 source read-only 보존
3. G Fit gym / strength 범위 필터
4. 기존 Production 195 mapping
5. P0 16 mapping
6. shoulder press 포함 variant 재검수
7. attachment taxonomy / 운동별 허용 손잡이 mapping
8. gap / duplicate report 후 PO 검토

구매하지 않으면 현재 Production 195 + P0 16 기준에서 shoulder 분류 / missing asset 작업을 재개한다.

## Exercise asset direction

- 이미 구매한 exercise asset / metadata를 기본 라이브러리로 사용
- 원본은 read-only 보존, G Fit 정규화 결과는 별도 생성
- 겹치는 운동을 대규모 새 제작하지 않음
- 국내 헬스장 핵심 누락만 추가 제작
- 누락 에셋은 기존 구매 자료의 camera / crop / background / body proportion / muscle highlight 계열에 맞춤
- 중성적으로 보이는 해부학 3D 아바타 1계열 baseline
- 동일 운동 male/female 이중 에셋은 baseline에서 요구하지 않음
- 구매 원본을 AI reference로 직접 사용하기 전 modification / derivative / AI 관련 라이선스 확인 필요

## Theme — VALIDATION PENDING

PO는 구매 에셋과의 결합 때문에 light theme를 선호한다. 아직 global theme로 확정하지 않는다.

실제 구매 에셋으로 먼저 검증할 화면:

1. Exercise Search / Select
2. Exercise Detail
3. Active Workout

## Canonical artifacts

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

- Vercel project: `liftly-wireframe`
- project ID: `prj_w7P1KrlqbzDq9dBQ0UcFh2VuQipG`
- team ID: `team_cAq2nylL00z8u39kpinhZXQa`
- canonical version: `2026-09-02.14`
- production deployment: `dpl_FhbswP4x1T8oat9yQQKgsRic8hV8`

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

Living planning deck:

`https://docs.google.com/presentation/d/1F0EYIvZ2xfbi2hR0kdjyW8c-gXAHWaBLIajmPamczJM/edit`

Relevant review sources:

- `product/wireframe/exercise-review.html` — Exercise Search/Add PO approved
- `product/wireframe/grip-record-review.html` — latest cable attachment/card flow review prototype; direction PO approved, canonical promotion pending
- `product/wireframe/home-review.html`
- `product/wireframe/workout-review.html`
- `product/wireframe/completion-review.html`
- `product/wireframe/routine-review.html`

## Implementation status

**No Cursor handoff yet.**

Planning / UX가 현재 진행 중이며 Exercise DB / asset 상세 작업은 HOLD다. Product implementation은 주요 UX와 운동 DB / 에셋 범위가 충분히 안정된 뒤 Issue / Acceptance Criteria로 전환한다.

## Open items / blockers

- purchased asset modification / derivative / AI-reference license check
- 추가 Gym Animations 계열 package 구매 여부
- attachment taxonomy / 표준 명칭 / 운동별 허용 손잡이 mapping — DB HOLD 해제 후
- shoulder press plate-loaded / selectorized / iso-lateral 분류 재검수 — DB HOLD 해제 후
- P0 신규 에셋 production / QA — HOLD
- poster/source mismatch 3개 G Fit normalized user-facing 설명
- `machine-45-degree-back-extension` raw structured source header provenance gap — non-blocking
- approved attachment/card flow의 canonical wireframe 반영
- Active Workout remaining details
- actual purchased-asset light-theme validation
- recommended routine exact program contents
- completion dashboard exact metrics / formulas
- Analysis first-screen metrics / drilldown scope
- recommendation routine save button copy / detailed edge cases
