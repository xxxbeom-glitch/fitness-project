# Purchased Exercise Asset Classification v0.5

**Status:** CANDIDATE / NOT PRODUCTION-FINAL  
**Date:** 2026-09-03  
**Builds on:** `purchased-asset-classification-v0.4.md`  
**Original purchased assets / metadata:** READ-ONLY, unchanged

## Purpose

v0.5는 v0.4에서 남아 있던 low-confidence 항목 중 **Bodyweight 30개 + Dumbbell 51개 = 81개**를 사용자 제공 원본 `metadata.json`의 실제 구조화 필드로 다시 정리한 배치다.

이번 단계에서도 구매 원본 파일은 수정하지 않고 G Fit용 파생 candidate만 갱신했다.

반영한 source 구조화 필드:

- `primaryMuscles`
- `secondaryMuscles`
- `equipment`
- `movementPattern`
- `difficulty`

`high-confidence`는 **source metadata를 해당 candidate row에 정확히 반영했다는 QA 신뢰도**를 뜻한다. source 자체의 운동과학 taxonomy가 이례적인 경우에는 원본 값을 보존하고 별도 QA flag를 남긴다.

## QA summary

- Source rows preserved: **206**
- High-confidence QA: **171** (`v0.4: 90`)
- Medium-confidence: **1**
- Low-confidence / metadata pending: **34** (`v0.4: 115`)
- v0.5 metadata-enriched rows: **81**
  - Bodyweight: **30**
  - Dumbbell: **51**
- Rows changed from v0.4: **81**
- Korean temporary `name_ko` normalized: **1**
- Required core candidate blank rows: **0**
- Formula cells / formula errors: **0 / 0**
- Target metadata validation errors: **0**
- Confirmed true duplicate merge rows: **1**
- Existing cable / pulley grip mapping: unchanged
- Remaining known asset / metadata conflict or mismatch rows: **4**

## Notable corrections

### 1. Good Mornings

`good-mornings` source metadata:

- primary: `Glutes / Hamstrings`
- secondary: `Core`
- equipment: `Bodyweight`
- movement: `Hinge`
- difficulty: `beginner`

따라서 G Fit broad body를 기존 `등`에서 **`하체`**로 정정했다.

### 2. Inverted Row Korean display name

`inverted-row`의 `name_ko`에 남아 있던 영어 임시값 `Inverted Row`를 PO가 승인한 기존 한국어 이름 톤에 맞춰 **`인버티드 로우`**로 정규화했다.

source metadata:

- primary: `Trapezius / Back`
- secondary: `Biceps`
- equipment: `Bodyweight`
- movement: `Pull`
- difficulty: `beginner`

### 3. Bodyweight Deadlift source taxonomy review

`bodyweight-deadlift`의 source structured metadata는:

- primary: `Core`
- secondary: `Glutes`
- movement: `Hinge`

으로 되어 있어 일반적인 deadlift 설명과 비교하면 muscle taxonomy가 다소 이례적이다.

v0.5에서는 source를 임의로 고치지 않고 raw source field와 normalized candidate에 반영하면서 `SOURCE_MUSCLE_TAXONOMY_ODD` flag를 남겼다. 최종 production taxonomy 검수에서 source field와 G Fit 내부 분류를 분리해 재판단할 수 있다.

### 4. Source primary / secondary 중복 처리

일부 source row는 같은 muscle category를 primary와 secondary에 동시에 넣고 있다.

예:

- `bodyweight-russian-twist`: primary `Core`, secondary `Core`
- `bodyweight-squat`: primary `Glutes / Quadriceps`, secondary `Quadriceps`
- `dumbbell-russian-twist`: primary `Core`, secondary `Core`
- `dumbbell-seated-overhead-press`: primary `Shoulders`, secondary `Shoulders / Triceps`
- `dumbbell-thruster`: primary `Glutes / Shoulders / Quadriceps`, secondary `Shoulders`

원칙:

- `source_primary_muscles_en` / `source_secondary_muscles_en`에는 원본을 그대로 보존
- G Fit normalized secondary에서는 primary와 동일한 category 중복을 제거
- `SOURCE_DUPLICATE_MUSCLE_TAXONOMY` flag로 추적

### 5. Jefferson Curl scope 유지

다음 항목은 source `movementPattern`이 `Stretch`다.

- `bodyweight-spinal-jefferson-curl`
- `dumbbell-spinal-jefferson-curl`

따라서 정상 동작 자체를 오류로 보지 않되, 현재 MVP 웨이트 기록 기본 검색에 포함할지는 기존 **`1차 제외 검토`** 상태를 유지한다.

## Preserved decisions

v0.5는 기존 승인 정책을 변경하지 않는다.

- 원본 구매 에셋 / metadata는 read-only
- 장비가 다르면 별도 운동 기록
- 각도 / 주요 자세가 다르면 별도 운동 기록
- 선택형 그립 기록은 MVP에서 케이블 / 풀리 운동에만 적용
- `원암 케이블 로우`, `랫풀다운` parent / grip mapping 유지
- 바벨 / 덤벨 / 일반 머신 / Smith의 named grip variant는 별도 exercise identity
- Korean + English normalized display names를 함께 유지
- 제조사 / 브랜드별 머신 기본 DB는 MVP 범위 밖

## Derived artifacts

Working artifacts generated for v0.5:

- `gfit_exercise_db_v1_candidate_v0_5.xlsx`
- `gfit_exercise_db_v1_candidate_v0_5.csv`
- `QA_SUMMARY.md`
- `diagnostics.json`
- `Changed_From_v0_4` audit sheet inside workbook

원본 구매 파일은 수정 / 삭제 / 이름변경하지 않았다.

## Remaining metadata work

v0.5 이후 low-confidence **34개**가 남는다.

장비별 분포:

- Kettlebell: **20**
- Machine: **9**
- Smith Machine: **3**
- EZ Bar: **1**
- Plate: **1**

별도로 `machine-face-pulls` **1개 medium-confidence row**가 남아 있다.

## Next

1. 남은 low-confidence **34개**를 source metadata로 enrichment
2. `machine-face-pulls` medium 1개 재검수
3. asset / metadata conflict 또는 mismatch **4개** poster 재검수
4. canonical ID / aliases / bilingual display names 전체 검증
5. production Exercise DB v1 후보 승격
6. 이후 Planfit / Hevy + 국내 핵심 운동과 비교하여 **추가 제작이 필요한 핵심 누락 운동 수량** 산출
