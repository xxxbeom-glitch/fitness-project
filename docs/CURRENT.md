# CURRENT — Fitness Project

**Updated:** 2026-09-02 23:46 KST

## Current mode

`PRODUCT / UX PLANNING — EXERCISE DB v1 CANDIDATE BUILT · CABLE/PULLEY GRIP SCOPE APPROVED · NEXT: FULL METADATA ENRICHMENT + CABLE GRIP MAPPING · CANONICAL WIREFRAME v2026-09-02.14`

Product Owner가 운동 DB의 핵심 기록 기준인 **장비별 분리**, **각도/주요 자세별 분리**, **케이블/풀리 운동에 한정한 선택형 그립 기록**, **한국어/영어 표시명 병행**, **구매 에셋 내부의 실제 중복 통합 규칙**, **큰 부위 중심의 사용자 필터 + 세부 근육 데이터 병행**을 승인했다. 제조사 / 브랜드별 머신 DB는 MVP 기본 범위에서 제외한다.

구매 에셋 **206개 파일명 기반 v0.1** 이후 실제 `metadata.json`과 일부 poster를 다시 검수한 **v0.2 QA**를 진행했다. 그 결과 v0.1의 중복 후보 5개 중 현재 **실제 중복으로 high-confidence 확인된 것은 `bodyweight-elevated-push-up` → `incline-push-up` 1건**이며, dumbbell/kettlebell row 후보는 주요 자세/에셋 차이 때문에 자동 통합을 취소했다. `machine-cable-v-bar-push-downs`, `machine-seated-cable-row`는 duplicate가 아니라 canonical 이름/장비 분류 정정으로 변경했다.

별도 G Fit Exercise DB v1 candidate를 생성했으며 원본 구매 에셋/metadata는 수정하지 않았다. 현재 206 row 중 source metadata/poster로 직접 검수한 high-confidence 26개, medium 4개, 아직 전체 metadata enrichment가 필요한 low-confidence 176개 상태다. 따라서 이 candidate는 production-final이 아니다.

선택형 그립 기록의 MVP 범위는 **케이블 / 풀리 기반 운동**으로 제한한다. 랫풀다운·시티드 케이블 로우처럼 같은 운동으로 보는 것이 자연스러운 경우에만 대표 그립을 하위 기록으로 둔다. 바벨·덤벨·일반 머신 운동에는 이 기능을 확장하지 않는다. 따라서 `Close-Grip Bench Press` 같은 비케이블 운동은 별도 운동 identity로 처리하며 전역 그립 예외 규칙은 더 이상 필요하지 않다.

Cursor 제품 구현은 아직 승인되지 않았다.

## Current authority

우선순위:

1. 현재 Product Owner 결정
2. `docs/24_PRODUCT_DIRECTION_V2.md`
3. `docs/ux-decisions/2026-09-02-exercise-db-normalization.md`
4. `docs/exercise-db/purchased-asset-classification-v0.2.md`
5. `docs/exercise-db/purchased-asset-classification-v0.1.md`
6. `docs/ux-decisions/2026-09-02-home-workout-routine-completion-locks.md`
7. `docs/08_DECISIONS.md` 중 위 문서들과 충돌하지 않는 기존 기반 결정
8. 현재 canonical wireframe / Figma

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

## Approved UX locks — 2026-09-02

### 1. Home

Home의 최우선 역할은 **운동 시작 / 운동 복귀**다.

상태별 상단 행동:

- 루틴 없음 → 추천 루틴 / 내 루틴 만들기
- 루틴 있음 + 요일 미지정 → 다음 운동
- 루틴 있음 + 요일 지정 → 오늘의 운동
- active workout → 운동 계속하기

Home은 상세 분석 화면이 아니다.

### 2. Active Workout

운동 기록 화면은 **전체 운동을 한 화면에서 이어서 보고 현재 운동만 펼쳐 기록**한다.

- 세트 / 이전 기록 / kg / 횟수 / 완료를 한곳에 표시
- 다음 운동은 아래에 접어서 계속 보임
- 이전 기록은 입력 영역 가까이에 둠
- 휴식 타이머는 화면을 가리지 않는 작은 형태
- 운동 하나마다 별도 화면으로 이동하는 구조는 기본값이 아님

### 3. Recommended Routine Save Flow

추천 루틴을 시작한다고 자동 저장하지 않는다.

`추천 루틴 선택 → 저장 없이 운동 시작 → 운동 완료 → 사용자가 내 루틴 저장 여부 결정`

- 오늘 운동 기록은 항상 저장
- 루틴 저장은 별도 선택
- 운동 중 구성을 바꿨다면 저장할 때만 `오늘 한 구성 / 원래 추천 구성` 선택을 추가로 묻는 방향
- 정확한 버튼 문구와 배치는 완료 화면 UI 단계에서 조정 가능

### 4. Post-workout Completion

완료 화면은 오늘 운동 정보를 풍부하게 보여주되 **상단 카드 캐러셀로 나눠 담는다.**

상단 후보 구조:

1. 오늘 운동 요약
2. 오늘 좋아진 기록
3. 이번 주 기록

그 아래에는 오늘 실제 운동 결과 전체를 보여준다.

추천 루틴으로 운동했다면 완료 화면 하단에서 저장 여부를 묻는다.

월별 추세 / 장기 그래프 / 깊은 종목 분석은 Analysis가 담당한다.

정확한 지표와 계산법은 아직 OPEN.

### 5. Exercise Search / Add

운동 추가는 **검색 중심 + 목록에서 바로 추가**를 기본으로 한다.

- 루틴 만들기와 운동 중 추가에서 같은 선택 흐름 재사용
- 검색 결과 목록에서 운동 상세를 거치지 않고 바로 추가 가능
- 목록 우선 정보: 운동명 / 장비 / 주요 부위 / 운동 이미지 / 최근 기록
- 부위 / 장비 필터는 가볍게 제공
- 운동 이름 또는 이미지를 눌렀을 때만 상세 화면 진입
- 운동 상세는 선택 단계이며 운동 추가의 필수 단계가 아님
- 찾는 운동이 없으면 직접 만들기
- 직접 만든 운동도 일반 운동처럼 기록 / 이력을 가짐

Custom exercise 기반 결정은 DEC-003 / DEC-012 유지.

### 6. Exercise Identity / Grip History / Naming

운동 기록은 실제로 비교 가능한 수행끼리만 같은 기록으로 묶는다.

**장비 방식이 다르면 별도 기록**으로 관리한다.

예:

- 벤치프레스
- 덤벨 벤치프레스
- 스미스 머신 벤치프레스
- 체스트 프레스 머신
- 케이블 프레스

위 기록들의 이전 kg / 횟수 / PR은 서로 섞지 않는다.

**각도 / 주요 자세가 다르면 별도 기록**으로 관리한다.

예:

- 벤치프레스
- 인클라인 벤치프레스
- 디클라인 벤치프레스
- 덤벨 벤치프레스
- 인클라인 덤벨 벤치프레스
- 인클라인 스미스 머신 벤치프레스

기본 exercise identity는 최소한 `동작 + 장비 + 각도/주요 자세`를 구분할 수 있어야 한다.

**운동 이름은 한국어 / 영어를 모두 정식 데이터로 유지**한다.

한국어 시장에서는 국내 통용명을 우선 표시하지만, 영어 이름을 버리거나 한국어로 덮어쓰지 않는다. 같은 exercise identity가 언어별 표시명을 가진다.

예:

- `벤치프레스` / `Bench Press`
- `덤벨 벤치프레스` / `Dumbbell Bench Press`
- `스미스 머신 벤치프레스` / `Smith Machine Bench Press`
- `인클라인 벤치프레스` / `Incline Bench Press`
- `인클라인 덤벨 벤치프레스` / `Incline Dumbbell Bench Press`

구매 에셋 원본 영문명은 `source_name_en` 성격의 원본 추적 데이터로 별도 보존하고, 해외 사용자에게 보여줄 `name_en`은 중복/표현을 정리한 영어 표시명으로 관리한다. 통합 전 다른 이름은 alias / 검색어로 남긴다.

**선택형 그립 기록은 MVP에서 케이블 / 풀리 운동에만 적용**한다.

예: `랫풀다운`, `시티드 케이블 로우`

- 사용자가 그립 구분이 필요 없으면 별도 선택 없이 기본 기록으로 운동 가능
- 필요한 사용자만 오버핸드 / 뉴트럴 / 언더핸드 같은 대표 그립을 선택해 별도 이력을 사용
- 그립 미선택 기록과 각 대표 그립의 이전 kg / 횟수 / PR은 서로 섞지 않음
- 기존 기본 기록을 나중에 특정 그립 기록으로 자동 재분류하지 않음
- 바벨 / 덤벨 / 일반 머신 운동에는 MVP 그립 선택 기능을 적용하지 않음
- 케이블 / 풀리 운동이라도 별도 운동명으로 통용되는 변형은 무조건 하위 그립으로 합치지 않음

`클로즈그립 벤치프레스`처럼 케이블 / 풀리 범위 밖에서 별도 운동명으로 통용되는 운동은 별도 exercise identity로 처리한다.

어떤 케이블 / 풀리 운동에 그립 선택을 실제로 노출할지, 대표 그립 목록, 마지막 선택 기억 여부는 아직 OPEN.

### 7. Body-part classification / Custom exercise

운동을 찾는 기본 부위 필터는 접근성을 우선해 큰 부위로 단순화한다.

기본 큰 부위:

`가슴 / 등 / 어깨 / 팔 / 하체 / 코어 / 전신 / 기타`

세부 근육은 DB와 분석용 데이터로 별도 유지한다. 예를 들어 `등` 아래에서 광배근 / 승모근 / 등 상부 등을 세밀하게 기록할 수 있고, `하체` 아래에서 대퇴사두근 / 햄스트링 / 둔근 / 내전근 / 외전근 / 종아리 등을 구분할 수 있다.

운동 검색 결과에서는 상세 화면에 들어가지 않아도 빠르게 구분할 수 있도록 `장비 + 주요 근육` 정도를 작은 보조정보로 노출한다. 주요/보조 근육 전체 정보는 상세와 분석에서 더 깊게 사용한다.

직접 만든 운동은 다음 원칙을 따른다.

- 운동 이름 / 장비 / 큰 부위 / 기록 방식은 필수
- 세부 주요 근육 / 보조 근육은 선택
- 큰 부위만 입력해도 운동 생성 가능
- 사용자가 큰 부위만 입력했다면 G Fit이 특정 세부 근육을 임의로 추론해 확정하지 않음

즉 **찾을 때는 쉽게, 내부 데이터와 분석은 세밀하게** 가져간다.

## Exercise DB / asset direction

기본 Exercise Asset Library는 이미 구매한 exercise asset / metadata를 사용한다.

원칙:

- 구매 자료와 겹치는 운동을 대규모로 새 제작하지 않음
- 국내 헬스장에서 필요한 핵심 누락 운동만 gap으로 추가
- 누락 에셋은 기존 구매 자료와 카메라 / crop / 배경 / 인체 비율 / 근육 highlight를 최대한 같은 계열로 맞춤
- 중성적으로 보이는 해부학 3D 아바타 1계열이 baseline
- 동일 운동 male/female 이중 에셋은 baseline에서 요구하지 않음
- grip visual은 실제 수행 이해에 가치가 있을 때 사용

구매 원본 에셋을 AI reference로 직접 사용하기 전 modification / derivative / AI 관련 라이선스를 확인해야 한다.

### Brand / manufacturer machine scope

MVP 기본 운동 DB에서는 Hammer Strength / Cybex 등 **제조사·브랜드별 머신 목록을 별도로 운영하지 않는다.**

- 기본 DB는 일반적인 운동명 / 장비 수준으로 유지
- 특정 브랜드·모델 머신의 기록을 따로 관리하고 싶은 사용자는 `직접 만든 운동`으로 별도 기록 가능
- 제조사 / 모델 DB 확장은 실제 사용자 수요가 확인된 뒤 재검토

## Purchased DB normalization — APPROVED

정규화 기준 문서:

`docs/ux-decisions/2026-09-02-exercise-db-normalization.md`

승인된 기준:

- 장비가 다르면 별도 운동 기록
- 각도 / 주요 자세가 다르면 별도 운동 기록
- 선택형 그립 기록은 MVP에서 케이블 / 풀리 운동에만 적용
- 하나의 exercise identity에 **한국어 표시명과 영어 표시명을 모두 유지**
- 구매 원본 영문명은 원본 추적용으로 별도 보존하고, 사용자용 영문명은 필요하면 정규화
- 브랜드/제조사별 머신 DB는 MVP 기본 범위에서 제외
- 구매 에셋 안에서 **이름만 다르지만 실제 수행이 같은 항목은 하나의 G Fit 운동으로 통합**
- 중복 통합 여부는 이름만 보지 않고 기본 동작 / 장비 / 각도·주요 자세 / 한쪽·양쪽 같은 주요 수행 방식과 가능한 경우 실제 운동 이미지까지 함께 확인
- 통합된 원본 이름은 alias / 검색어 / source metadata로 보존
- 사용자 기본 부위 분류는 큰 부위 중심으로 단순화하되, 기본 운동 DB의 세부 근육 데이터는 별도로 유지

### First-pass classification — COMPLETE

기록 문서:

`docs/exercise-db/purchased-asset-classification-v0.1.md`

commit:

`544e39a0744278362ff0fbf6745908424edbeffe`

파일명 기준 Google Drive 원본 에셋 **206개**를 1차 분류했다. 이 결과는 audit trail로 유지하며 덮어쓰지 않는다.

### Metadata / poster QA v0.2 — PARTIAL COMPLETE

기록 문서:

`docs/exercise-db/purchased-asset-classification-v0.2.md`

핵심 결과:

- source rows 206개 그대로 보존
- high-confidence metadata/poster QA: 26
- medium-confidence: 4
- low-confidence / full metadata enrichment pending: 176
- high-confidence 실제 중복 통합: 1 (`bodyweight-elevated-push-up` → `incline-push-up`)
- 이름/장비/부위 정정: 10
- poster/metadata 불일치 또는 자세 차이 검수: 4
- v0.1 원본과 구매 원본은 수정하지 않음
- 한국어 표시명 톤은 Product Owner가 전반적으로 무난하다고 승인
- 케이블 / 풀리 한정 선택형 그립 범위 확정

v1 candidate에는 `source` 값과 G Fit `normalized` 값을 분리해 보존하고 `qa_basis / qa_confidence / qa_flags`를 추가했다. low-confidence row는 production 확정으로 취급하지 않는다.

### Next

1. 남은 low-confidence 176 row를 실제 `metadata.json`으로 전수 enrichment한다.
2. `qa_flags`가 있는 posture / cable-grip / category 예외만 poster를 추가 확인한다.
3. 케이블 / 풀리 운동 중 실제 그립 하위 기록이 필요한 운동과 대표 그립 목록을 정리한다.
4. canonical ID / aliases / bilingual display names를 최종 검증해 production Exercise DB v1로 승격한다.
5. 확정된 G Fit DB를 국내 핵심 운동 및 Planfit·Hevy 레퍼런스와 비교해 **핵심 누락 운동과 추가 이미지 제작 수량**을 산출한다.

## Theme — VALIDATION PENDING

Product Owner는 구매 에셋과의 결합 때문에 light theme를 선호한다.

아직 global theme로 확정하지 않는다.

먼저 실제 구매 에셋을 다음 화면에 넣어 검증한다.

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
- production state previously verified READY / HTTP 200

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

Living planning deck:

`G Fit 기획 진행본 - 쉬운 문장 버전 2026-09-02`

`https://docs.google.com/presentation/d/1F0EYIvZ2xfbi2hR0kdjyW8c-gXAHWaBLIajmPamczJM/edit`

## Latest review evidence

Exercise Search / Add review source:

- GitHub: `product/wireframe/exercise-review.html`
- source commit: `1c95c122cc9775966cf1ace778f35d9cecb88e9f`
- preview deployment: `dpl_9UBKHfnc2zQcjoDaJGuQ6vCz6tz7`
- preview URL: `https://liftly-wireframe-gopt8hf2u-xxxbeom-glitchs-projects.vercel.app/exercise-review.html`
- Product Owner approval: 2026-09-02

Grip history review source:

- GitHub: `product/wireframe/grip-record-review.html`
- approved source commit: `0dd26331908bd7f769961fed11578ca4e6f1faca`
- preview deployment: `dpl_BprdwuMdcN1bEjYZeWLjeiAKaw56`
- preview URL: `https://liftly-wireframe-cb74hs3xy-xxxbeom-glitchs-projects.vercel.app/grip-record-review.html`
- HTTP read-back: `200`
- Product Owner approval: 2026-09-02
- optional-grip decision lock update commit: `aa38a6cf0031a6e508619355edbca862fe68aba6`
- MVP cable/pulley-only scope update commit: `4a31f23cd6f6e62126cb6bf663313e57a791db0e`

Exercise identity / naming rule lock:

- Product Owner approval: 2026-09-02
- equipment + angle + display-name rule update commit: `7394a15036d57bb510557a063bddc734453ed0ac`

Purchased DB duplicate normalization lock:

- Product Owner approval: 2026-09-02
- decision doc create commit: `04157dc2be2d5fa3afb9de873d98b41e493e3dea`

Body-part classification / custom exercise lock:

- Product Owner approval: 2026-09-02
- decision doc update commit: `f763e8e6a86aea9ceb071327a397250467382497`

Bilingual exercise naming lock:

- Product Owner direction: 2026-09-02
- decision doc update commit: `a850bf6f4884f1881d6b0a69750298e90b1b2e27`

Purchased asset classification v0.1:

- first-pass classification commit: `544e39a0744278362ff0fbf6745908424edbeffe`
- source assets scanned: 206
- based on source filenames; audit trail preserved

Purchased asset metadata/poster QA v0.2:

- QA report initial commit: `5b8f5ff100878c0db030f5384798bda690b9274d`
- cable/pulley grip resolution update commit: `57516854cbc06288161788bbf6f56490fbc3242e`
- v0.1 heuristic errors and false duplicate assumptions documented
- production-final DB is not yet claimed

Review-only previews do not automatically replace canonical production.

## Implementation status

No Cursor handoff yet.

Planning / UX approval is still in progress. Product implementation should begin only after the current planning pass has enough locked behavior to write stable Issues and Acceptance Criteria.

## Open items / blockers

- remaining 176 low-confidence purchased metadata rows enrichment
- asset/metadata posture conflicts in dumbbell/kettlebell row assets
- cable / pulley exercise representative grip mapping
- production Exercise DB v1 promotion after QA
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
