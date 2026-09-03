# Purchased Exercise Asset Classification v0.4

**Status:** CANDIDATE / NOT PRODUCTION-FINAL  
**Date:** 2026-09-03  
**Builds on:** `purchased-asset-classification-v0.3.md`  
**Original purchased assets / metadata:** READ-ONLY, unchanged

## Purpose

v0.4는 v0.3에서 남아 있던 low-confidence 항목 중 **Band 11개 + Barbell 24개 = 35개**를 사용자 제공 원본 `metadata.json`의 실제 구조화 필드로 다시 정리한 배치다.

이번 단계에서는 source `primaryMuscles / secondaryMuscles / equipment / movementPattern / difficulty`를 별도 source 필드에 보존하고, G Fit의 한국어 표시명 / 큰 부위 / 세부 근육 / 자세 값은 source가 실제로 지원하는 범위 안에서 다시 정규화했다.

중요: 여기서 `high-confidence`는 **원본 metadata를 정확히 읽고 G Fit 후보 행에 반영했다는 QA 신뢰도**를 뜻한다. 원본 metadata 자체의 운동과학적 분류가 항상 완벽하다는 뜻은 아니다. 원본이 이례적이면 원본은 그대로 보존하고 flag로 남긴다.

## QA summary

- Source rows preserved: **206**
- High-confidence QA: **90** (`v0.3: 55`)
- Medium-confidence: **1**
- Low-confidence / metadata pending: **115** (`v0.3: 150`)
- v0.4 metadata-enriched rows: **35**
  - Band: **11**
  - Barbell: **24**
- Rows changed from v0.3: **35**
- English temporary values removed from `name_ko` in this batch: **11**
- Required core candidate fields blank: **0**
- Formula cells / formula errors: **0 / 0**
- Confirmed true duplicate merge rows: **1**
- Existing cable/pulley grip mapping: unchanged
- Asset/metadata conflict or mismatch rows remaining: **4**

## Korean naming cleanup

PO가 승인한 기존 한국어 이름 톤을 그대로 유지하면서 Band의 임시 영문 `name_ko`를 정리했다.

예:

- `Band Curl` → `밴드 컬`
- `Band Hip Abduction` → `밴드 힙 어브덕션`
- `Band Kneeling Pulldown` → `니링 밴드 풀다운`
- `Band Lateral Raise` → `밴드 레터럴 레이즈`
- `Band Romanian Deadlift` → `밴드 루마니안 데드리프트`
- `Band Row` → `밴드 로우`
- `Band Seated Pulldown` → `시티드 밴드 풀다운`
- `Band Single Arm Lateral Raise` → `원암 밴드 레터럴 레이즈`
- `Band Wood Chopper` → `밴드 우드초퍼`

`name_en`과 구매 원본 `source_name_en`은 계속 별도로 보존한다.

## Metadata-driven corrections

v0.3의 이름 기반 추정에서 source metadata보다 넓게 붙어 있던 보조근을 여러 항목에서 제거했다.

대표 사례:

- Band Curl: source secondary 없음 → 임시 `전완근` 제거
- Band Pullover: source secondary 없음 → 임시 `대흉근 / 삼두근` 제거
- Band Row: source secondary `Biceps` → 임시 `후면 삼각근` 제거
- Barbell Bench Press: source secondary `Triceps` → 임시 `전면 삼각근` 제거
- Barbell Bent-Over Row: source secondary `Biceps` → 임시 `후면 삼각근` 제거
- Barbell Curl / Drag Curl / Shrug / Pullover: source에 없는 inferred secondary 제거

### Barbell Stiff-Leg Deadlift

source metadata:

- primary: `Glutes / Hamstrings`
- secondary: `Core`
- movement: `Hinge`

따라서 G Fit 큰 부위를 기존 `등`에서 **`하체`**로 정정하고, 주요 근육을 `둔근 / 햄스트링`, 보조 근육을 `코어`로 정리했다.

### Barbell Deadlift — source taxonomy review flag

source structured metadata는 다음처럼 되어 있다.

- primary: `Trapezius / Core`
- secondary: `Glutes`
- movement: `Hinge`

같은 source의 설명 문구는 lower/mid back, glutes, hamstrings도 언급하므로 구조화된 muscle taxonomy가 다소 이례적이다. v0.4에서는 이를 임의 교정하지 않고 **source structured 값을 그대로 보존**하면서 `SOURCE_MUSCLE_TAXONOMY_ODD` flag를 남겼다. production 승격 전에 source taxonomy와 G Fit 내부 muscle taxonomy를 분리해 다룰 수 있다.

### Barbell Jefferson Curl

source metadata는 `movementPattern: Stretch`이며 설명도 loaded spinal mobility exercise로 정의한다. 따라서 운동 자체를 오류로 보지는 않지만 MVP 웨이트 기록 기본 검색에 넣을지 여부는 기존처럼 **`1차 제외 검토`**로 유지한다.

## Preserved v0.3 policy

v0.4는 승인된 케이블 / 풀리 그립 정책을 변경하지 않는다.

- 선택형 그립 기록은 케이블 / 풀리 기반 운동에서만 사용
- `원암 케이블 로우`, `랫풀다운`의 기존 parent/grip mapping 유지
- 바벨 / 덤벨 / 일반 머신 / Smith의 named grip variant는 별도 운동 identity
- straight bar / rope / V-bar pushdown은 현재 별도 운동 유지

## Artifact

Derived working files:

- `gfit_exercise_db_v1_candidate_v0_4.xlsx`
- `gfit_exercise_db_v1_candidate_v0_4.csv`
- `QA_SUMMARY.md`

구매 원본 파일은 수정 / 삭제 / 이름변경하지 않았다.

## Next

남은 low-confidence **115개**를 같은 방식으로 실제 source metadata로 정리한다.

다음 배치 우선순위:

1. Bodyweight
2. Dumbbell
3. Kettlebell / Machine / 기타 잔여
4. poster mismatch / canonical ID / alias / bilingual-name 최종 QA
5. production Exercise DB v1 후보 승격
6. 이후 Planfit / Hevy + 국내 핵심 운동과 비교해 **실제 추가 제작이 필요한 핵심 누락 운동 수량** 산출
