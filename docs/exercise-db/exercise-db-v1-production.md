# G Fit Exercise DB v1 — Production Baseline

**Date:** 2026-09-03  
**Status:** PRODUCTION APPROVED — PURCHASED-ASSET BASELINE  
**Builds on:** `purchased-asset-classification-v0.6.md`

## Purpose

구매한 206개 운동 source와 metadata를 그대로 보존한 채, G Fit MVP에서 실제로 사용할 수 있는 정규화 exercise DB baseline을 확정한다.

구매 원본 asset / metadata는 계속 **read-only**다. 사용자-facing 이름, canonical identity, 장비/부위 정규화, grip parent, MVP 제외 여부는 별도 G Fit 파생 데이터로 관리한다.

## Production result

- purchased source rows preserved: **206**
- app-facing canonical exercises: **195**
- MVP default search에서 제외한 source rows: **8**
- source QA: **high 205 / medium 1 / low 0**
- production exceptions tracked: **4**
- English-only `name_ko`: **0**
- canonical required-field blanks: **0**
- unexpected shared canonical groups: **0**

## MVP exclusions

구매 source 중 Stretch / Mobility 성격이 강한 아래 8개는 source/asset을 삭제하지 않고 `Source_Map`에 보존하되 MVP 기본 운동 검색에서 제외한다.

- Abdominals Stretch Variation 1–4
- Barbell Spinal Jefferson Curl
- Bodyweight Spinal Jefferson Curl
- Dumbbell Spinal Jefferson Curl
- Kettlebell Spinal Jefferson Curl

Jefferson Curl 4개는 v0.6까지 `1차 제외 검토`였으나 source `movementPattern=Stretch`와 G Fit의 웨이트 기록 MVP 범위를 기준으로 `1차 제외`로 정리한다.

## Production exceptions — non-blocking

### 1. `machine-45-degree-back-extension`

source prose + poster로 45도 back extension / hyperextension 동작과 lower-back / glute / hamstring 맥락은 확인됐다. 다만 현재 File Library retrieval에서는 해당 row의 structured header (`primaryMuscles / secondaryMuscles / movementPattern / difficulty`)를 정확히 회수하지 못했다.

처리:

- raw structured source field는 추정해서 채우지 않는다.
- source provenance gap을 exception으로 추적한다.
- normalized G Fit identity / 검색 / 기록에는 사용할 수 있으므로 production blocker로 보지 않는다.

### 2–4. poster와 source prose의 자세 불일치

- `dumbbell-single-arm-row`
- `kettlebell-row-single`
- `kettlebell-single-arm-row`

처리:

- 실제 poster가 보여주는 수행을 기준으로 G Fit identity / display name을 유지한다.
- 구매 raw metadata는 `Source_Map`에 그대로 보존한다.
- source instructions / description은 poster 자세와 충돌하므로 사용자-facing 운동 설명에 직접 재사용하지 않는다.
- 향후 해당 3개 운동의 G Fit용 normalized 설명을 별도로 작성하고 QA한다.

## Canonical grouping

Production DB에서 의도적으로 source 여러 개가 하나의 canonical exercise로 연결되는 그룹은 다음과 같다.

- `incline-push-up` — `bodyweight-elevated-push-up` + `incline-push-up`
- `cable-single-arm-row` — neutral / underhand source를 하나의 parent + optional grip history로 관리
- `lat-pulldown` — base pulldown + narrow neutral source를 하나의 parent + optional grip history로 관리

케이블 / 풀리 외 장비의 named grip variant는 기존 승인 정책대로 별도 exercise identity다.

## Production workbook model

- `Exercises` — app-facing canonical exercise 195개
- `Grip_Variants` — 케이블 / 풀리 optional grip history
- `Source_Map` — 구매 source 206개 전체 provenance
- `Excluded` — MVP default search 제외 source
- `Production_Exceptions` — non-blocking exception 4건
- `QA_Summary` — release QA summary

## Important boundary

이 문서의 `PRODUCTION APPROVED`는 **현재 구매 에셋을 G Fit용으로 정규화한 baseline이 제품 데이터로 사용 가능하다는 의미**다.

전체 시장의 운동을 모두 포함했다는 의미는 아니다. 누락 운동 추가는 별도 gap analysis를 거쳐 국내 헬스장 핵심 운동만 추가한다.

Next:

`Production DB v1 → Planfit / Hevy / 국내 핵심 운동 gap analysis → P0 추가 제작 수량 확정 → 추가 asset 제작 / QA`
