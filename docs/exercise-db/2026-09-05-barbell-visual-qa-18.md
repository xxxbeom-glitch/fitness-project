# Barbell Targeted Visual QA — 18 Files / 8 Candidate Groups

**Date:** 2026-09-05  
**Status:** COMPLETE / DERIVED NORMALIZATION RESULT  
**Source:** `MP4/MALE/Library_database` + `Barbell_Review_Candidates_18.zip`

## Purpose

`Library_database` 전체 2,109개 1차 장비 분류에서 나온 Barbell duplicate candidate **8 groups / 18 files**를 실제 영상 기준으로 재검수한다.

구매 원본 filename/path/media는 read-only provenance로 유지하며 수정하지 않는다.

## Review method

- 18개 파일의 SHA256을 확인했다.
- **binary-identical SHA256 duplicate는 0개**였다.
- 각 영상의 시작/중간/끝 및 여러 timeline frame을 비교했다.
- `FIX`, `VERSION`, `POV`, `without-weight`, `copy` 같은 filename suffix만으로 duplicate를 확정하지 않았다.
- app-facing 운동 identity는 실제 자세 / 관절 패턴 / 수행 경로를 우선해 판단했다.

## 8 group results

| Group | Files | Result | Decision |
|---|---:|---|---|
| Barbell Curl | 2 | SAME CANONICAL / LOAD-RENDER MEDIA VARIANT | 둘 다 standing barbell curl. 플레이트 유무와 모델/render 차이만 있어 같은 운동 identity/history로 처리 가능 |
| Barbell Deadlift | 2 | SAME CANONICAL / POV MEDIA VARIANT | front POV / side POV 차이만 있고 같은 conventional barbell deadlift 수행 |
| Barbell Full Clean | 2 | SAME CANONICAL / FIX-RENDER MEDIA VARIANT | 동작 sequence가 동일한 full clean. FIX 여부는 exercise identity를 나누지 않음 |
| Barbell Full Squat | 2 | SAME CANONICAL / POV MEDIA VARIANT | back POV / side POV의 동일 barbell full squat |
| Barbell Hang Snatch | 2 | SAME CANONICAL / TIMING-RENDER MEDIA VARIANT | 두 영상 모두 같은 hang-snatch sequence. frame timing/animation phase 차이는 있으나 history-defining execution 차이는 확인되지 않음 |
| Barbell Rear Lunge | 2 | **EXECUTION VARIANT** | VERSION-2는 front foot elevated/step-supported rear lunge, 다른 영상은 floor rear lunge. elevation은 ROM/실행 맥락이 달라 자동 history 병합 금지 |
| Barbell Standing Military Press | 2 | SAME CANONICAL / LOAD-RENDER MEDIA VARIANT | 같은 standing military press. plate 유무만 다름 |
| Barbell Upright Row | 4 | SAME CANONICAL / CAMERA-LOAD-RENDER MEDIA VARIANT | 360 orbit / fixed camera / plate 유무 차이. 모두 standing barbell upright-row movement로 확인되어 같은 parent로 묶음 |

## Group summary

- same canonical + media/POV/load/timing variant: **7 groups**
- execution variant: **1 group**
- unresolved group: **0**

## Important execution boundary

### Rear lunge

`Barbell-Rear-Lunge-(VERSION-2)_Thighs_.mp4`는 앞발이 step/platform 위에 올라간 상태에서 후방 런지를 수행한다.

`Barbell-Rear-Lunge_Thighs_.mp4`는 바닥에서 수행하는 일반 rear lunge다.

따라서:

- broad family는 `barbell rear lunge`
- execution context는 `front_foot_elevated` vs `floor`
- performance history는 자동 병합하지 않는다.

## Normalization boundary confirmed from this QA

1. 카메라 방향(front/back/side/360)만 다름 → same canonical + POV/media variant
2. plate 유무 / render revision / FIX 여부만 다름 → same canonical + media variant
3. animation timing/phase가 다르더라도 실제 movement sequence가 같으면 별도 canonical 근거가 아님
4. step/platform처럼 ROM과 수행 조건을 materially 바꾸는 요소는 explicit execution variant로 보존
5. raw source는 삭제/rename하지 않고 derived mapping만 수정한다.

## Next

Barbell targeted visual QA는 완료했다.

다음 우선순위:

1. Dumbbell duplicate candidates **9 groups / 20 files** direct visual QA
2. Kettlebell
3. Smith
4. Landmine
5. 전체 normalized source를 기존 Production Exercise DB v1과 mapping
6. 최종 G Fit canonical 후보 / 실제 gap 재산출
7. canonical mapping 안정화 후 production media transform / app-serving storage 결정

No Cursor implementation handoff.
