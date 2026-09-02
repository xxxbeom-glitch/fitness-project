# Purchased Exercise Asset Classification v0.2

**Status:** CANDIDATE / NOT PRODUCTION-FINAL  
**Date:** 2026-09-02  
**Supersedes for QA findings:** `purchased-asset-classification-v0.1.md`  
**Original purchased assets / metadata:** READ-ONLY, unchanged

## Purpose

v0.1은 Google Drive poster 파일명 중심의 1차 분류였다. v0.2는 실제 `metadata.json`에서 직접 확인한 항목과 poster 시각 검수를 일부 결합해 v0.1의 휴리스틱 오류를 바로잡고, production Exercise DB v1 후보를 만들기 위한 QA 단계다.

중요: 현재 환경에서는 File Library의 `metadata.json` 전체를 로컬 파일로 일괄 export하지 못했기 때문에 **206개 전체를 metadata 기반으로 검증했다고 주장하지 않는다.** 직접 검색·검수한 항목만 high/medium confidence로 올리고 나머지는 v0.1 값을 유지한 low-confidence candidate로 남겼다.

## PO review note — Korean display naming

2026-09-02 Product Owner가 현재 `name_ko`에 적용된 한국어 표시명 방향을 검토하고 **전반적으로 무난하다고 승인**했다.

- 현재 적용된 한국어 표기 톤을 v1 정리의 기준으로 유지한다.
- 영어가 임시값으로 남아 있는 `name_ko` 항목은 같은 톤으로 한국어 표시명을 채운다.
- 이 승인은 개별 운동의 metadata / 중복 / 자세 판정을 승인한 것이 아니라 **한국어 표시명 스타일 방향에 대한 승인**이다.
- 영어 표시명 `name_en`과 원본 추적용 `source_name_en`은 별도로 계속 보존한다.

## PO decision — grip scope for MVP

Product Owner는 선택형 그립 기록의 원래 의도가 **케이블 / 풀리 머신 운동**이었다고 명확히 했다.

MVP에서는 다음처럼 처리한다.

- 선택형 그립 기록은 **케이블 / 풀리 기반 운동에만 적용**한다.
- 그중에서도 같은 운동으로 보는 것이 자연스러운 경우에만 대표 그립을 하위 기록으로 둔다.
- 바벨 / 덤벨 / 일반 머신 운동에는 선택형 그립 기록을 확장하지 않는다.
- `Close-Grip Bench Press`처럼 케이블 / 풀리 범위 밖에서 별도 운동명으로 통용되는 운동은 일반 별도 exercise identity로 처리한다.
- 따라서 v0.2에서 열어둔 `named grip variant exception` 문제는 별도의 전역 예외 규칙 없이 해소한다.
- 어떤 케이블 / 풀리 운동에 실제 그립 옵션을 노출할지와 대표 그립 목록은 후속 DB/UI 정리에서 확정한다.

## QA summary

- Source rows preserved: **206**
- High-confidence metadata/poster QA: **26**
- Medium-confidence review: **4**
- Low-confidence / full metadata ingestion pending: **176**
- Confirmed true duplicate merge rows: **1**
- Name / body-part / equipment corrections: **10**
- Asset-metadata or posture conflicts requiring review: **4**
- Required core candidate fields blank: **0**

## Important corrections from v0.1

### 1. Confirmed true duplicate

`bodyweight-elevated-push-up` → canonical `incline-push-up`

`Bodyweight Elevated Push Up`과 `Incline Push Up`은 source metadata의 동작 설명과 poster를 함께 확인했을 때 모두 손을 높은 박스/벤치에 두는 raised-hands push-up이다. 같은 G Fit exercise identity로 통합한다.

원본 source slug / source English name은 alias와 source metadata로 보존한다.

### 2. Dumbbell one-arm row — v0.1 merge cancelled

v0.1은 `dumbbell-single-arm-row`를 `dumbbell-row-unilateral`에 통합 후보로 두었지만 poster QA에서 주요 자세 차이가 확인됐다.

- `dumbbell-row-unilateral`: 한쪽 무릎 + 한 손을 벤치에 지지하는 형태
- `dumbbell-single-arm-row`: 두 발을 바닥에 둔 staggered stance + 한 손 지지 형태로 보임

이미 승인된 `각도 / 주요 자세가 다르면 별도 기록` 원칙에 따라 자동 통합을 취소한다.

또한 source metadata 설명과 실제 poster 표현 사이에 불일치 가능성이 있어 두 row 모두 `에셋/metadata 불일치 검수`로 남긴다.

### 3. Kettlebell row — v0.1 merge cancelled

`kettlebell-single-arm-row`와 `kettlebell-row-single`은 poster 수행 형태가 서로 같지 않다. v0.1의 중복 통합을 취소하고 별도 row로 유지한다.

두 에셋 역시 source metadata 설명과 poster 표현의 일치 여부를 추가 QA한다.

### 4. Machine Cable V-Bar Pushdowns — duplicate가 아니라 canonical rename

v0.1:

`machine-cable-v-bar-push-downs` → `cable-v-bar-pushdown` 중복 통합 후보

v0.2:

별도 `cable-v-bar-pushdown` source asset이 확인된 것이 아니다. source metadata 내용은 cable pulley + V-bar triceps pushdown이므로:

- canonical: `cable-v-bar-pushdown`
- `name_ko`: `케이블 V바 푸시다운`
- `name_en`: `Cable V-Bar Pushdown`
- source name: `Machine Cable V Bar Pushdowns`
- source equipment: `Machine`
- normalized equipment: `Cable Machine`
- big body part: `팔`
- primary: `삼두근`

즉 **중복 제거가 아니라 이름/장비 분류 정정**이다.

### 5. Machine Seated Cable Row — duplicate가 아니라 canonical rename

source metadata는 전형적인 seated low-cable row 수행을 설명한다.

- canonical: `cable-seated-row`
- `name_ko`: `시티드 케이블 로우`
- `name_en`: `Seated Cable Row`
- source name: `Machine Seated Cable Row`
- source equipment: `Machine`
- normalized equipment: `Cable Machine`
- big body part: `등`

별도 duplicate source asset이 확인된 것이 아니므로 v0.1의 `중복 통합`에서 **이름/장비 분류 정정**으로 변경한다.

## Confirmed heuristic corrections

v0.1 generator의 문자열 규칙 때문에 실제 metadata와 다른 분류가 일부 생겼다.

- `dumbbell-leg-curl`: `팔 / 미지정` → **하체 / 햄스트링**
- `barbell-upright-row`: 일반 row 계열 근육 → **어깨 / 측면 삼각근·승모근**
- `dumbbell-upright-row`: 일반 row 계열 근육 → **어깨 / 측면 삼각근·승모근**
- `barbell-wrist-curl`: 이두근 → **전완근**
- `dumbbell-wrist-curl`: 이두근 → **전완근**
- `bench-dips`: 가슴 → source primary 기준 **팔 / 삼두근**
- `diamond-push-ups`: 가슴 → source primary 기준 **팔 / 삼두근**
- `band-high-face-pull`: 등 → source primary `Shoulders` 기준 **어깨 / 후면 삼각근**
- `kettlebell-windmill`: 전신/컨디셔닝 → **코어 / Rotation / advanced**

Face Pull의 다른 세부 에셋들은 개별 metadata 재수집 전까지 medium-confidence `분류 검토`로 남긴다.

## Source vs normalized equipment

원본 데이터와 G Fit용 분류는 분리한다.

예: `landmine-t-bar-rows`

- source metadata equipment: `Barbell`
- G Fit normalized equipment: `Landmine`

원본 값을 덮어쓰지 않고 `equipment_source`와 `equipment_normalized`로 함께 보존한다.

## Candidate DB fields

v1 candidate는 다음 구조를 사용한다.

- `source_file`
- `source_slug`
- `canonical_id`
- `name_ko`
- `name_en`
- `source_name_en`
- `aliases`
- `big_body_part_ko`
- `primary_muscles_ko`
- `secondary_muscles_ko`
- `source_primary_muscles_en`
- `source_secondary_muscles_en`
- `equipment_source`
- `equipment_normalized`
- `movement_pattern_source`
- `difficulty_source`
- `angle_or_posture`
- `grip_variant`
- `recording_type`
- `status_v0_1`
- `status`
- `qa_basis`
- `qa_confidence`
- `qa_flags`
- `notes`

## QA boundary / next

현재 v1 candidate는 audit trail용이며 production-final이 아니다.

다음 순서:

1. 남은 low-confidence **176 row**를 source `metadata.json`으로 전수 enrichment.
2. `qa_flags`가 있는 posture / cable-grip / category 예외만 poster를 추가 시각 검수.
3. 케이블 / 풀리 운동 중 실제로 그립 하위 기록이 필요한 운동과 대표 그립 목록을 정리한다.
4. canonical IDs / aliases / bilingual display names 최종 검증.
5. 그 뒤 Planfit / Hevy + 국내 핵심 운동과 비교하여 **추가 제작이 필요한 핵심 운동 수량**을 산출한다.

원본 구매 파일은 계속 read-only로 유지한다.
