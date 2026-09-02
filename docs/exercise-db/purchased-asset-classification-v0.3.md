# Purchased Exercise Asset Classification v0.3

**Status:** CANDIDATE / NOT PRODUCTION-FINAL  
**Date:** 2026-09-03  
**Builds on:** `purchased-asset-classification-v0.2.md`  
**Original purchased assets / metadata:** READ-ONLY, unchanged

## Purpose

v0.3은 Product Owner가 확정한 **`선택형 그립 기록은 MVP에서 케이블 / 풀리 운동에만 적용`** 원칙을 실제 구매 `metadata.json`에 적용한 첫 분류 배치다.

이번 단계에서는:

1. 기존 candidate의 케이블 / 풀리 계열을 실제 source metadata로 재수집해 신뢰도를 올리고,
2. 같은 케이블 운동에서 static grip만 다른 항목을 같은 canonical parent의 그립별 기록으로 매핑하고,
3. 바벨 / 덤벨 / 일반 머신 / Smith처럼 케이블 / 풀리 범위 밖의 기존 grip 후보를 별도 exercise identity로 정리했다.

중요: **206개 전체 metadata enrichment 완료를 주장하지 않는다.** 이번 배치는 cable / pulley 중심이며 남은 non-cable low-confidence row는 계속 후속 정리 대상이다.

## QA summary

- Source rows preserved: **206**
- High-confidence QA: **55** (`v0.2: 26`)
- Medium-confidence: **1** (`v0.2: 4`)
- Low-confidence / metadata pending: **150** (`v0.2: 176`)
- v0.3 actual metadata-enriched rows: **30**
- Rows with classification/data changes from v0.2: **34**
- Confirmed true duplicate merge rows: **1**
- Cable / pulley grip-subrecord source rows: **3**
- Confirmed cable / pulley grip parent groups: **2**
- Non-cable grip rows explicitly resolved as separate identities: **6**
- Shared canonical groups including true duplicate + grip mapping: **3**
- Required core candidate fields blank: **0**
- Remaining asset / metadata conflict or mismatch rows: **4**

현재 남은 medium-confidence row는 `machine-face-pulls` 1개다. 나머지 low-confidence row는 cable / pulley 바깥의 full metadata enrichment가 아직 필요한 항목들이다.

## Confirmed cable / pulley grip mapping

### 1. One-Arm Cable Row

두 구매 항목은 source metadata상 다음 핵심 수행 조건이 같다.

- Cable Machine
- horizontal Pull
- chest-height pulley
- standing unilateral stance
- single handle

차이는 static grip이다.

| source slug | canonical | G Fit display | grip variant | decision |
|---|---|---|---|---|
| `cable-single-arm-neutral-grip-row` | `cable-single-arm-row` | `원암 케이블 로우` / `Single-Arm Cable Row` | `neutral` | same parent / separate grip history |
| `cable-single-arm-underhand-grip-row` | `cable-single-arm-row` | `원암 케이블 로우` / `Single-Arm Cable Row` | `underhand` | same parent / separate grip history |

즉 검색 목록을 grip별 운동으로 늘리지 않고 `원암 케이블 로우` 하나를 찾은 뒤 필요한 사용자만 neutral / underhand 기록을 분리할 수 있게 한다.

### 2. Lat Pulldown

`machine-pulldown`의 source equipment 표기는 `Machine`이지만 실제 수행은 thigh pad + pulley stack + pulldown bar를 사용하는 전형적인 pulley lat pulldown이다.

`narrow-pulldown`은 source instructions가 **close-grip V-handle을 cable에 장착**하고 palms-facing neutral grip으로 수행한다고 명시한다.

| source slug | canonical | G Fit display | grip variant | decision |
|---|---|---|---|---|
| `machine-pulldown` | `lat-pulldown` | `랫풀다운` / `Lat Pulldown` | 기본 기록 | parent base / grip not required |
| `narrow-pulldown` | `lat-pulldown` | `랫풀다운` / `Lat Pulldown` | `neutral_close` | same parent / separate grip history |

두 항목의 G Fit normalized equipment는 `Cable Machine`으로 정리한다. source equipment `Machine` 값은 원본 추적용으로 그대로 보존한다.

## Cable movement that stays separate

### Cable Supinating Row

`cable-supinating-row`은 neutral/overhand 상태에서 시작해 **반복 동작 중 손목을 실제로 supination하는 것 자체가 수행 패턴의 일부**다.

따라서 이는 사용자가 운동 전에 고르는 static grip 옵션이 아니다.

- canonical: `cable-supinating-row`
- decision: **별도 운동 유지**
- flag: `DYNAMIC_GRIP_MOVEMENT_NOT_SUBRECORD`

## Cable attachment variants — conservative v0.3 treatment

다음 triceps pushdown 계열은 v0.3에서 별도 운동으로 유지한다.

- `cable-bar-pushdown`
- `cable-rope-pushdown`
- `machine-cable-v-bar-push-downs` → canonical `cable-v-bar-pushdown`

이유:

- rope는 하단에서 손을 벌리고 회전하는 수행이 source metadata에 명시됨
- straight bar / V-bar / rope는 attachment mechanics 자체가 다름
- 현재 승인 원칙도 **케이블 운동이면 무조건 하나의 grip parent로 합친다**가 아니라, 같은 운동으로 보는 것이 자연스러운 경우에만 선택형 grip 기록을 쓰는 것이다.

따라서 attachment 변형을 과도하게 합치는 것보다 v0.3에서는 분리 유지가 더 안전하다. 실제 사용자 검색 중복 문제가 확인되면 나중에 다시 묶을 수 있다.

## Non-cable grip candidates — resolved

MVP 선택형 grip 기능이 cable / pulley에만 적용되므로 아래 항목은 더 이상 `grip exception` 검토 대상이 아니다.

- `barbell-close-grip-bench-press` → 별도 운동 유지
- `diamond-push-ups` → 별도 운동 유지
- `machine-neutral-row` → 별도 운동 유지
- `machine-underhand-row` → 별도 운동 유지
- `ez-bar-reverse-preacher-curl` → 별도 운동 유지
- `smith-machine-close-grip-bench-press` → 별도 운동 유지

즉 `Close-Grip Bench Press` 때문에 전역 grip 예외 규칙을 만들 필요가 없다.

## Important source-metadata corrections in v0.3

### Cable face pulls

실제 source metadata로 다음 세 항목의 primary category 검토를 해소했다.

- `cable-bar-face-pull` → Shoulders / rear-delt-oriented → `어깨 / 후면 삼각근`
- `cable-rope-kneeling-face-pull` → Shoulders + Trapezius → `어깨 / 후면 삼각근`, 보조 `승모근`
- `cable-seated-rope-face-pull` → Shoulders → `어깨 / 후면 삼각근`

### Cable isolation / press rows

실제 metadata를 반영해 cable chest / arm / core rows의 source primary, secondary, movement pattern, difficulty를 채웠다. source metadata에 없는 추정 보조근은 제거했다.

예:

- `cable-bench-chest-fly`: source secondary 없음 → 추정 `전면 삼각근` 제거
- `cable-pec-fly`: source secondary 없음 → 추정 `전면 삼각근` 제거
- `cable-bench-straight-leg-kickback`: source secondary `Core` → 기존 추정 `햄스트링`을 `코어`로 정정
- `cable-side-bend`: source primary `Core` + oblique 수행 설명 → 주요 근육 `복사근`, 추정 `복직근` secondary 제거

### Machine Cable V-Bar Push Downs

v0.2에서 canonical/equipment 정정은 이미 완료됐지만 v0.3 source 재확인에서 movement pattern도 바로잡았다.

- source name: `Machine Cable V Bar Push Downs`
- source equipment: `Machine`
- normalized equipment: `Cable Machine`
- source movement pattern: **`Isolation`**
- canonical: `cable-v-bar-pushdown`

기존 candidate의 `Push` 표기는 `Isolation`으로 정정했다.

## Source vs normalized values

v0.3에서도 원본과 G Fit용 값은 분리한다.

예:

- `machine-pulldown`
  - source equipment: `Machine`
  - normalized equipment: `Cable Machine`
  - source name: `Machine Pulldown`
  - G Fit name: `랫풀다운` / `Lat Pulldown`

- `smith-machine-close-grip-bench-press`
  - source equipment: `Machine`
  - normalized equipment: `Smith Machine`
  - source primary: `Triceps`
  - source secondary: `Chest`
  - G Fit: `스미스 머신 클로즈그립 벤치프레스` / `Smith Machine Close-Grip Bench Press`

source 값을 덮어쓰지 않는다.

## Current canonical groups with multiple source rows

현재 source row가 둘 이상 연결되는 canonical group은 3개다.

1. `incline-push-up`
   - true duplicate merge: `bodyweight-elevated-push-up` + `incline-push-up`
2. `cable-single-arm-row`
   - cable grip mapping: neutral + underhand
3. `lat-pulldown`
   - cable/pulley base + narrow neutral grip

true duplicate와 grip subrecord mapping은 같은 개념이 아니므로 QA에서 별도로 구분한다.

## QA boundary / next

v0.3도 production-final DB가 아니다.

다음 순서:

1. 남은 low-confidence **150 row**를 실제 `metadata.json`으로 전수 enrichment한다.
2. `machine-face-pulls` 1개 medium row와 posture / asset mismatch flag가 남은 4개 row만 poster를 추가 검수한다.
3. canonical IDs / aliases / Korean-English display names를 전체 검증한다.
4. 그 뒤 production Exercise DB v1로 승격한다.
5. 확정 DB를 Planfit / Hevy / 국내 핵심 운동과 비교해 **핵심 누락 운동과 추가 이미지 제작 수량**을 산출한다.

현재 cable / pulley grip mapping 때문에 추가 Product Owner 결정을 요구하는 blocker는 없다.
