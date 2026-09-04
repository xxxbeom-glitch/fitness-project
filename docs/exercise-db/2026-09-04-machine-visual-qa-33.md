# Machine Targeted Visual QA — 33 Files

**Date:** 2026-09-04  
**Status:** COMPLETE / DERIVED NORMALIZATION RESULT  
**Source:** `MP4/MALE/Library_database` + `Machine_Review_Candidates.zip`

## Purpose

`Library_database` 전체 2,109개 filename/size 1차 장비 분류에서 나온 Machine 검수 대상 33개를 실제 영상 기준으로 확인한다.

- filename 기준 Machine duplicate candidates: **25 files / 12 groups**
- `Assisted-*` / `Hack-*` 등 Machine 여부 ambiguous: **8 files**
- total direct visual QA: **33 files**

구매 원본 filename/path/media는 read-only provenance로 유지한다.

## Review method

- 33개 영상의 SHA256을 확인했다.
- **binary-identical SHA256 duplicate는 0개**였다.
- 영상의 시작/중간/끝 여러 frame을 추출해 같은 candidate group끼리 비교했다.
- filename의 `VERSION`, `FIX`, body-part suffix만으로 duplicate를 확정하지 않았다.
- Machine의 기구 프레임/브랜드형 설계 차이는 그 자체만으로 새 exercise identity를 만들지 않고, 실제 자세·관절 패턴·그립·수행 경로가 같은지를 우선했다.

## 12 duplicate-candidate group results

| Group | Files | Result | Decision |
|---|---:|---|---|
| Lever Back Extension | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | 두 영상 모두 seated back-extension machine. 기구 설계는 다르지만 사용자-facing 운동은 같은 back extension으로 처리 가능 |
| Lever Chest Press | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | horizontal seated machine chest press. plate-loaded/selectorized 형태 차이는 별도 canonical 근거가 아님 |
| Lever Cross Lat Pulldown | 2 | SAME CANONICAL / CAMERA-MEDIA VARIANT | 같은 cross lat pulldown machine 수행을 전/후 시점으로 보여주는 media variant |
| Lever High Row (plate-loaded) | 2 | **GRIP VARIANT** | 같은 high-row family지만 실제 손잡이/그립 형태가 다름. non-Cable grip variant 기존 정책에 따라 동일 기록으로 자동 병합하지 않음 |
| Lever Lateral Raise | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | forearm-pad/handle 접촉 방식과 기구 설계는 다르지만 seated shoulder-abduction movement는 동일 |
| Lever Preacher Curl (plate-loaded) | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | 같은 preacher-curl movement. 기구 디자인 차이만으로 분리하지 않음 |
| Lever Seated Calf Raise (plate-loaded) | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | knee-flexed seated calf raise로 동일 |
| Lever Seated Fly | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | seated chest fly/pec-deck family로 동일 |
| Lever Seated Reverse Fly (parallel grip) | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | parallel-grip seated reverse fly로 동일 |
| Lever Seated Row | 2 | SAME CANONICAL / MACHINE-DESIGN MEDIA VARIANT | seated lever-row family로 동일 |
| Lever Triceps Extension | 2 | **EXECUTION VARIANT** | 한 영상은 elbows-forward/support-pad extension, 다른 영상은 upper arms beside torso에서 elbow extension. 수행 자세/경로가 커서 자동 history 병합 금지 |
| Sled 45-degree Leg Press | 3 | SAME CANONICAL / POV-MEDIA VARIANT | Back POV / Side POV / base render는 동일 45-degree sled leg press 수행 |

### Group summary

- same canonical + media/machine-design variant: **10 groups**
- grip variant: **1 group**
- execution variant: **1 group**
- unresolved duplicate group: **0**

`SAME CANONICAL`은 구매 asset 파일 자체를 삭제/중복제거한다는 뜻이 아니다. raw asset은 모두 보존하고 app-facing exercise identity에서만 같은 parent로 묶는다.

## 8 ambiguous Machine-or-non-Machine results

| Raw filename | Visual result | Machine scope | Normalization direction |
|---|---|---|---|
| `Assisted-Bulgarian-Split-Squat_Thighs_.mp4` | 손으로 지지대를 잡는 Bulgarian split squat; counterweight/assisted machine 없음 | **NON-MACHINE** | bodyweight/support-assisted execution variant |
| `Assisted-Chin-Up-on-a-bench-(male)_Back_.mp4` | pull-up bar + bench 보조 맥락; assisted counterweight machine 없음 | **NON-MACHINE** | bench-assisted/bodyweight chin-up context |
| `Assisted-Parallel-Close-Grip-Pull-up_Back-FIX_.mp4` | knee-pad/counterweight assisted pull-up machine | **MACHINE** | assisted pull-up machine + close/parallel grip context |
| `Assisted-Pull-up_Back.mp4` | knee-pad/counterweight assisted pull-up machine | **MACHINE** | assisted pull-up machine |
| `Assisted-Single-Arm-Pull-up-(male)_Back_.mp4` | 일반 pull-up rack에서 one-arm pull-up; 영상상 외부 assistance 없음 | **NON-MACHINE** | one-arm pull-up; `Assisted` vendor wording naming exception으로 추적 |
| `Assisted-Single-Leg-Press_Thighs-FIX_.mp4` | selectorized standing single-leg press machine | **MACHINE** | single-leg press machine |
| `Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4` | kneeling/knee-pad counterweight assisted dip machine | **MACHINE** | assisted dip machine |
| `Hack-Calf-Raise_Calves_.mp4` | hack-squat style sled machine에서 calf raise | **MACHINE** | hack-machine calf raise |

### Ambiguous summary

- Machine confirmed: **5 / 8**
- Non-Machine confirmed: **3 / 8**
- unresolved: **0**

따라서 filename-only Machine 202 rows에 visual-confirmed 5 rows를 더하면 **Machine source scope candidate = 207 rows**다.

이 수치는 raw source row 수이며 최종 unique G Fit canonical exercise 수가 아니다.

## Normalization boundary confirmed from this QA

Machine 계열에는 Cable과 다른 경계가 하나 있다.

1. 같은 자세/관절 패턴/수행 경로인데 기구 프레임·렌더·카메라만 다름 → same canonical + media variant
2. 실제 grip/handle orientation 차이가 의미 있음 → grip variant로 보존
3. elbow position / torso posture / movement path가 크게 달라짐 → execution variant, history 자동 병합 금지
4. `Assisted`라는 filename prefix만으로 assisted machine으로 추정하지 않음; counterweight/knee-pad/platform 등 실제 영상 근거 확인
5. raw filename이 실제 영상과 충돌하면 raw는 유지하고 normalized derived value에서 예외 처리

Non-Cable grip variant는 기존 Production DB v1 정책대로 별도 exercise identity/history 후보로 유지한다.

## Next

Machine targeted visual QA는 완료했다.

다음 우선순위:

1. Barbell duplicate candidates **8 groups / 18 files** visual QA
2. Dumbbell
3. Kettlebell
4. Smith
5. Landmine
6. 전체 normalized source를 기존 Production Exercise DB v1과 mapping
7. 최종 canonical 후보 / 실제 gap 재산출

No Cursor implementation handoff.
