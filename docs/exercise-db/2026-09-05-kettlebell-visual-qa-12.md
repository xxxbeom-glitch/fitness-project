# Kettlebell Targeted Visual QA — 12 Files / 6 Candidate Groups

**Date:** 2026-09-05  
**Status:** COMPLETE / DERIVED NORMALIZATION RESULT  
**Source:** `MP4/MALE/Library_database` + `Kettlebell_Review_Candidates_12.zip`

## Purpose

`Library_database` 전체 2,109개 1차 장비 분류에서 나온 Kettlebell duplicate candidate **6 groups / 12 files**를 실제 영상 기준으로 재검수한다.

구매 원본 filename/path/media는 read-only provenance로 유지하며 수정하지 않는다.

## Review method

- 12개 파일의 SHA256을 확인했다.
- binary-identical SHA256 duplicate는 **0개**였다.
- 각 영상의 시작/중간/끝 및 여러 timeline frame을 비교했다.
- `FIX`, `VERSION`, body-part suffix만으로 duplicate를 확정하지 않았다.
- app-facing 운동 identity는 실제 자세 / joint path / load position / implement count를 우선했다.

## 6 group results

| Group | Files | Result | Decision |
|---|---:|---|---|
| Kettlebell Bent Press | 2 | SAME CANONICAL / RENDER-PRESENTATION VARIANT | 둘 다 one-arm kettlebell bent press. 모델/render 및 frame timing 차이만 있어 같은 exercise identity/history로 처리 가능 |
| Kettlebell Forward Lunge | 2 | **LOAD-POSITION / IMPLEMENT VARIANT** | 한 소스는 single kettlebell goblet/front hold, 다른 소스는 two kettlebells hanging at sides. 같은 broad lunge family지만 load position과 총 external-load 의미가 달라 history 자동 병합 금지 |
| Kettlebell Good Morning | 2 | **NAMING / MOVEMENT MISMATCH** | `(male)` 소스는 kettlebell을 upper-back/behind-head에 둔 true good-morning pattern. 다른 소스는 kettlebell을 양손으로 아래에 hanging hold한 hip hinge로, 시각상 kettlebell deadlift/RDL family에 더 가까움. 같은 canonical로 자동 병합하지 않음 |
| Kettlebell Rear Lunge | 2 | SAME CANONICAL / RENDER-TIMING VARIANT | 둘 다 single kettlebell goblet/front-hold rear lunge. 시작 phase/render 차이만 있음 |
| Kettlebell Sumo Squat | 2 | **LOAD-POSITION VARIANT** | 한 소스는 kettlebell low-hang/between-legs, 다른 소스는 goblet/high-front hold. broad sumo-squat family는 같지만 load position과 기록 의미가 달라 history 자동 병합 금지 |
| Kettlebell Upright Row | 2 | SAME CANONICAL / POV-RENDER VARIANT | rear/front presentation 차이의 동일 two-hand kettlebell upright row movement |

## Group summary

- same canonical + render/POV/timing media variant: **3 groups**
- load-position / implement-count variant: **2 groups**
- naming / movement mismatch requiring separate canonical review: **1 group**
- unresolved group: **0**

## Important boundaries

### Forward lunge

- `Kettlebell-Forward-Lunge-(VERSION-2)_Thighs_.mp4` → single kettlebell goblet/front hold
- `Kettlebell-Forward-Lunge_Thighs_.mp4` → two kettlebells hanging at sides

같은 lunge movement라도 같은 숫자의 kg가 의미하는 external load가 다르므로 performance history를 자동 병합하지 않는다.

### Good morning naming mismatch

- `Kettlebell-Good-Morning-(male)_Hips_.mp4` → kettlebell을 upper-back/behind-head에 둔 good morning
- `Kettlebell-Good-Morning_Hips_.mp4` → kettlebell을 양손으로 아래에 들고 수행하는 hip hinge

후자는 vendor filename의 `Good Morning`을 normalized truth로 사용하지 않는다. 현재 derived direction은 `kettlebell deadlift / Romanian-deadlift family candidate`이며, 기존 Production Exercise DB와 mapping할 때 최종 normalized name을 확정한다.

### Sumo squat

- low hanging load
- goblet/high-front load

두 방식은 broad movement는 같지만 load position이 leverage와 기록 해석을 바꾸므로 explicit load-position context로 보존한다.

## Normalization boundary confirmed from this QA

1. render / POV / animation timing 차이만 있음 → same canonical + media variant
2. single vs double kettlebell처럼 implement count가 달라 총 external-load 의미가 달라짐 → explicit load/implement variant
3. goblet/high-front vs low-hang처럼 load position이 materially 달라짐 → history 자동 병합 금지
4. vendor filename과 실제 movement pattern이 충돌하면 raw filename은 보존하고 normalized movement family를 별도로 잡음
5. raw source는 삭제/rename하지 않고 derived mapping만 수정한다.

## Next

Kettlebell targeted visual QA는 완료했다.

남은 기본 targeted visual QA:

1. Smith duplicate candidate **1 group / 2 files**
2. Landmine duplicate candidates **4 groups / 8 files**
3. 필요 시 family별 naming/media exception 추가 소량 QA
4. 전체 normalized source를 기존 Production Exercise DB v1과 mapping
5. 최종 G Fit canonical 후보 / 실제 gap 재산출
6. canonical mapping 안정화 후 production media transform / app-serving storage 결정

No Cursor implementation handoff.
