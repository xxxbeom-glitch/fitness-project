# CURRENT — Fitness Project

**Updated:** 2026-09-03 10:25 KST

## Current mode

`PRODUCT / UX PLANNING — EXERCISE DB v0.4 BAND+BARBELL METADATA QA COMPLETE · HIGH 90 / MEDIUM 1 / LOW 115 · NEXT: BODYWEIGHT + DUMBBELL METADATA ENRICHMENT · CANONICAL WIREFRAME v2026-09-02.14`

구매 운동 에셋은 원본을 **read-only**로 보존하고, G Fit용 정규화 DB를 별도 파생 파일로 만든다.

현재 source row **206개**는 그대로 유지한다. v0.4까지 실제 `metadata.json` / 일부 poster QA를 진행한 결과:

- high-confidence: **90**
- medium-confidence: **1**
- low-confidence / metadata pending: **115**
- v0.4에서 새로 실제 metadata를 반영한 row: **35** (`Band 11 + Barbell 24`)
- v0.3 대비 변경 row: **35**
- required core field blank: **0**
- 현재 high-confidence 실제 duplicate merge: **1** (`bodyweight-elevated-push-up` → `incline-push-up`)

v0.4에서는 Band의 `name_ko` 임시 영문 11개를 PO가 승인한 한국어 표기 톤으로 정리했고, source metadata에 없는 추정 보조근을 Band / Barbell 여러 항목에서 제거했다. `Barbell Stiff-Leg Deadlift`는 source metadata가 `Glutes / Hamstrings + Core`이므로 큰 부위를 `등 → 하체`로 정정했다.

`Barbell Deadlift`의 source structured muscle taxonomy는 `Trapezius / Core + Glutes`로 다소 이례적이다. 이를 임의 교정하지 않고 source 값을 그대로 보존하며 `SOURCE_MUSCLE_TAXONOMY_ODD` flag를 남겼다. 여기서 high-confidence는 **source metadata를 정확히 반영했다는 QA 신뢰도**이지 source의 운동과학 분류가 항상 완벽하다는 의미가 아니다.

선택형 그립 기록은 **MVP에서 케이블 / 풀리 기반 운동에만 적용**한다. `원암 케이블 로우`, `랫풀다운`의 v0.3 parent/grip mapping은 유지한다. 바벨·덤벨·일반 머신·Smith의 named grip variant는 별도 exercise identity로 관리한다.

Cursor 제품 구현은 아직 승인되지 않았다.

## Current authority

우선순위:

1. 현재 Product Owner 결정
2. `docs/24_PRODUCT_DIRECTION_V2.md`
3. `docs/ux-decisions/2026-09-02-exercise-db-normalization.md`
4. `docs/exercise-db/purchased-asset-classification-v0.4.md`
5. `docs/exercise-db/purchased-asset-classification-v0.3.md`
6. `docs/exercise-db/purchased-asset-classification-v0.2.md`
7. `docs/exercise-db/purchased-asset-classification-v0.1.md`
8. `docs/ux-decisions/2026-09-02-home-workout-routine-completion-locks.md`
9. `docs/08_DECISIONS.md` 중 위 문서들과 충돌하지 않는 기존 기반 결정
10. 현재 canonical wireframe / Figma

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

## Exercise DB normalization — APPROVED

기준 문서:

`docs/ux-decisions/2026-09-02-exercise-db-normalization.md`

핵심 규칙:

- 장비가 다르면 별도 운동 / 별도 이력
- 각도 / 주요 자세가 다르면 별도 운동 / 별도 이력
- 기본 identity는 최소 `동작 + 장비 + 각도/주요 자세`
- 선택형 그립 기록은 MVP에서 **케이블 / 풀리 운동에만** 적용
- 케이블 / 풀리라도 별도 운동명으로 통용되는 attachment/movement 변형은 무조건 합치지 않음
- 하나의 standard exercise identity에 `name_ko` + `name_en` 동시 유지
- 구매 원본 영문은 `source_name_en`, 통합 전 다른 이름은 aliases/source metadata로 보존
- 제조사/브랜드별 머신 DB는 MVP 기본 범위에서 제외
- 같은 실제 수행만 duplicate merge; 애매하면 자동 통합하지 않음
- 사용자 부위 필터는 `가슴 / 등 / 어깨 / 팔 / 하체 / 코어 / 전신 / 기타`
- 내부 DB에는 가능한 범위에서 세부 주요/보조 근육 유지
- 직접 만든 운동은 큰 부위까지 필수, 세부 근육은 선택이며 앱이 임의 추정하지 않음

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

### Current grip mapping

- `cable-single-arm-neutral-grip-row` + `cable-single-arm-underhand-grip-row` → `cable-single-arm-row`; neutral / underhand 별도 이력
- `machine-pulldown` + `narrow-pulldown` → `lat-pulldown`; 기본 기록 + `neutral_close` 별도 이력
- `cable-supinating-row` → dynamic grip movement이므로 별도 운동
- `Cable Bar Pushdown / Cable Rope Pushdown / Cable V-Bar Pushdown` → 현재 각각 별도 운동

### Next DB work

1. 남은 low-confidence **115개** actual `metadata.json` enrichment
2. 다음 배치: **Bodyweight + Dumbbell**
3. 이후 Kettlebell / Machine / 기타 잔여
4. `machine-face-pulls` medium 1개 + asset/metadata mismatch 4개 poster 재검수
5. canonical ID / aliases / bilingual display name 전체 검증
6. production Exercise DB v1 후보 승격
7. 그 뒤 Planfit / Hevy + 국내 핵심 운동과 비교해 **추가 제작 필요한 핵심 누락 운동 수량** 산출

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
- `product/wireframe/grip-record-review.html` — optional grip interaction review; MVP scope later narrowed to cable/pulley only
- `product/wireframe/home-review.html`
- `product/wireframe/workout-review.html`
- `product/wireframe/completion-review.html`
- `product/wireframe/routine-review.html`

## Implementation status

**No Cursor handoff yet.**

Planning / UX / Exercise DB normalization is still in progress. Product implementation begins only after current planning behavior is stable enough to write Issues / Acceptance Criteria without avoidable rework.

## Open items / blockers

- remaining **115** low-confidence purchased metadata rows enrichment
- `machine-face-pulls` 1 medium-confidence metadata/category QA
- asset/metadata posture conflict or mismatch 4 rows
- production Exercise DB v1 promotion after full QA
- core missing-exercise / additional asset gap analysis after DB v1
- grip selection UI exact form / last-used behavior
- purchased asset license check for AI-reference derivative work
- actual purchased-asset light-theme validation
- recommended routine exact program contents
- completion dashboard exact metrics / formulas
- Analysis first-screen metrics / drilldown scope
- recommendation routine save button copy / detailed edge cases
- autogenerated nickname format
- legal/policy pass for sex/date-of-birth collection
