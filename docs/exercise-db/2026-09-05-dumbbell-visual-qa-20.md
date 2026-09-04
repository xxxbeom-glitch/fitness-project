# Dumbbell Targeted Visual QA — 20 Files / 9 Candidate Groups

**Date:** 2026-09-05  
**Status:** COMPLETE / DERIVED NORMALIZATION RESULT  
**Source:** `MP4/MALE/Library_database` + `Dumbbell_Review_Candidates_20.zip`

## Purpose

`Library_database` 전체 2,109개 1차 장비 분류에서 나온 Dumbbell duplicate candidate **9 groups / 20 files**를 실제 영상 기준으로 재검수한다.

구매 원본 filename/path/media는 read-only provenance로 유지하며 수정하지 않는다.

## Review method

- 20개 파일의 SHA256을 확인했다.
- **binary-identical SHA256 duplicate는 0개**였다.
- 각 영상의 시작/중간/끝 및 여러 timeline frame을 비교했다.
- filename의 `VERSION`, `FIX`, body-part suffix, POV 표기만으로 duplicate를 확정하지 않았다.
- app-facing 운동 identity는 실제 자세 / 관절 패턴 / 수행 경로 / load position을 우선해 판단했다.

## 9 group results

| Group | Files | Result | Decision |
|---|---:|---|---|
| Dumbbell Alternate Shoulder Press | 2 | SAME CANONICAL / RENDER-PRESENTATION VARIANT | 둘 다 standing alternating dumbbell shoulder press. 한 소스의 multi-view/composite presentation 차이는 exercise identity를 나누지 않음 |
| Dumbbell Chest-Supported Lateral Raise | 2 | SAME CANONICAL / BENCH-RENDER MEDIA VARIANT | 둘 다 incline bench에 가슴을 지지한 lateral raise. bench/model presentation 차이만으로 history를 분리하지 않음 |
| Dumbbell Close-Grip Curl | 2 | SAME CANONICAL / RENDER VARIANT | 같은 standing close-grip dumbbell curl 수행 |
| Dumbbell Cross-Body Hammer Curl | 2 | SAME CANONICAL / RENDER-TIMING VARIANT | 같은 alternating cross-body hammer curl sequence |
| Dumbbell Hip Thrust | 2 | SAME CANONICAL / LOAD-RENDER MEDIA VARIANT | 같은 bench-supported dumbbell hip thrust. dumbbell render/placement depiction 차이는 있으나 수행 패턴은 동일 |
| Dumbbell Hyperextension | 3 | **LOAD-POSITION / EXECUTION VARIANT** | VERSION-2는 양손을 아래로 뻗어 dumbbell을 hanging position으로 들고 수행. 나머지 두 소스는 load를 몸통 가까이/가슴 쪽에 둔 수행. broad family는 같지만 leverage와 load meaning이 달라 history 자동 병합 금지 |
| Dumbbell Squat | 2 | SAME CANONICAL / RENDER VARIANT | 양손 dumbbell-at-sides squat로 동일 |
| Dumbbell Standing Scapular External Rotation | 3 | SAME CANONICAL / POV-RENDER VARIANT | front/back/side presentation 차이의 동일 standing scapular external-rotation movement |
| Dumbbell Stiff-Leg Deadlift | 2 | SAME CANONICAL / RENDER VARIANT | 같은 bilateral dumbbell stiff-leg deadlift movement |

## Group summary

- same canonical + media/render/POV/bench variant: **8 groups**
- load-position / execution variant: **1 group**
- unresolved group: **0**

## Important execution boundary

### Dumbbell Hyperextension

직접 영상 비교 결과:

- `Dumbbell-Hyperextension-(VERSION-2)-(male)_Hips_.mp4`
  - 두 dumbbell을 양손에 들고 팔을 아래로 뻗은 hanging load position
- `Dumbbell-Hyperextension-(male)_Hips-FIX_.mp4`
- `Dumbbell-Hyperextension-(male)_Hips_.mp4`
  - load를 몸통 가까이/가슴 쪽에 유지하는 형태

같은 45-degree hyperextension broad family이지만 load 위치가 바뀌면 같은 kg라도 몸통에 걸리는 moment arm이 달라진다.

따라서 derived normalization에서는:

- same broad parent: `dumbbell hyperextension`
- execution/load context: `hanging_load` vs `chest_close_load`
- performance history 자동 병합 금지

로 처리한다.

## Media-selection notes

일부 파일은 운동 identity는 같지만 app-serving media 선택 시 품질/일관성 관점에서 우선순위 차이가 있다.

- Alternate Shoulder Press의 multi-view/composite source는 운동 설명에는 유효하지만 single-subject media보다 UI 일관성이 떨어질 수 있음
- Scapular External Rotation은 POV/model render style 차이가 크지만 동일 운동 identity

이는 exercise identity가 아니라 후속 **production media selection** 문제로 분리한다.

## Normalization boundary confirmed from this QA

1. POV / render / model presentation 차이만 있음 → same canonical + media variant
2. bench 디자인/지지 형태가 조금 달라도 운동 자세와 joint path가 같음 → same canonical
3. animation timing 차이만 있고 movement sequence가 같음 → 별도 canonical 근거 아님
4. load position이 leverage와 기록 의미를 크게 바꾸면 explicit execution/load-position variant로 보존
5. raw source는 삭제/rename하지 않고 derived mapping만 수정한다.

## Next

Dumbbell targeted visual QA는 완료했다.

다음 우선순위:

1. Kettlebell duplicate candidates **6 groups / 12 files** direct visual QA
2. Smith **1 group / 2 files**
3. Landmine **4 groups / 8 files**
4. 필요 시 각 family의 naming/media exception 추가 targeted QA
5. 전체 normalized source를 기존 Production Exercise DB v1과 mapping
6. 최종 G Fit canonical 후보 / 실제 gap 재산출
7. canonical mapping 안정화 후 production media transform / app-serving storage 결정

No Cursor implementation handoff.
