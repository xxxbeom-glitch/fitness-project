# P0 Canonical Row Spec v1 — 2026-09-03

**Status:** APPROVED SPEC — Product Owner approved P0 scope + assisted recording semantics  
**Production status:** NOT YET PRODUCTION — 신규 asset / image QA / production merge 전  
**Baseline:** Production Exercise DB v1 — 195 canonical / 206 purchased source rows

## Purpose

Gap Analysis v1에서 승인된 P0 신규 운동 16개를 현재 `Exercises` canonical schema에 맞춰 정의한다.

중요:

- 구매한 206 source row / asset은 수정하지 않는다.
- 아래 16개는 purchased source row가 아니라 **G Fit 신규 파생 canonical spec**이다.
- 신규 poster가 아직 없으므로 `default_asset_source_slug`를 만들었다고 가정하지 않는다.
- `qa_status=spec_approved`는 데이터 명세 승인이라는 뜻이며 image/body/equipment QA 완료나 Production 승격을 뜻하지 않는다.
- 실제 Production DB 반영은 asset 제작 + QA 이후 별도 승격한다.

## Recording type addition

P0 16개 중 `machine-assisted-pull-up`, `machine-assisted-dip`은 2026-09-03 PO 승인 Decision에 따라 신규 recording type을 사용한다.

`assisted_weight_reps` = **보조중량 + 횟수**

세부 의미는 `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`를 따른다.

## Canonical rows

| # | canonical_id | name_ko | name_en | aliases | big_body_part_ko | primary_muscles_ko | secondary_muscles_ko | equipment | movement_pattern | angle_or_posture | recording_type |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `barbell-romanian-deadlift` | 바벨 루마니안 데드리프트 | Barbell Romanian Deadlift | Romanian Deadlift (Barbell); 바벨 RDL | 하체 | 둔근 / 햄스트링 | 코어 | Barbell | Hinge | hip_hinge | `weight_reps` |
| 2 | `dumbbell-romanian-deadlift` | 덤벨 루마니안 데드리프트 | Dumbbell Romanian Deadlift | Romanian Deadlift (Dumbbell); 덤벨 RDL | 하체 | 둔근 / 햄스트링 | 코어 | Dumbbell | Hinge | hip_hinge | `weight_reps` |
| 3 | `barbell-hip-thrust` | 바벨 힙 쓰러스트 | Barbell Hip Thrust | Hip Thrust (Barbell) | 하체 | 둔근 |  | Barbell | Hinge | bench_supported | `weight_reps` |
| 4 | `machine-lying-leg-curl` | 라잉 레그 컬 머신 | Lying Leg Curl Machine | Lying Leg Curl (Machine); 레그 컬 머신 | 하체 | 햄스트링 |  | Machine | Isolation | prone | `weight_reps` |
| 5 | `machine-seated-leg-curl` | 시티드 레그 컬 머신 | Seated Leg Curl Machine | Seated Leg Curl (Machine) | 하체 | 햄스트링 |  | Machine | Isolation | seated | `weight_reps` |
| 6 | `machine-seated-calf-raise` | 시티드 카프 레이즈 머신 | Seated Calf Raise Machine | Seated Calf Raise | 하체 | 종아리 |  | Machine | Isolation | seated_knee_flexed | `weight_reps` |
| 7 | `machine-hip-abduction` | 힙 어브덕션 머신 | Hip Abduction Machine | Hip Abduction (Machine) | 하체 | 중둔근 |  | Machine | Hip Abduction | seated | `weight_reps` |
| 8 | `machine-hip-adduction` | 힙 어덕션 머신 | Hip Adduction Machine | Hip Adduction (Machine) | 하체 | 내전근 |  | Machine | Hip Adduction | seated | `weight_reps` |
| 9 | `smith-machine-bench-press` | 스미스 머신 벤치프레스 | Smith Machine Bench Press | Bench Press (Smith Machine) | 가슴 | 대흉근 | 삼두근 | Smith Machine | Push | flat_bench | `weight_reps` |
| 10 | `smith-machine-squat` | 스미스 머신 스쿼트 | Smith Machine Squat | Squat (Smith Machine) | 하체 | 대퇴사두근 | 둔근 | Smith Machine | Squat | back_squat_guided | `weight_reps` |
| 11 | `machine-assisted-pull-up` | 어시스트 풀업 | Assisted Pull Up | Pull Up (Assisted); Assisted Pull-Up | 등 | 등 상부 / 광배근 | 이두근 / 승모근 | Machine | Pull | assisted_vertical_pull | `assisted_weight_reps` |
| 12 | `machine-assisted-dip` | 어시스트 딥스 | Assisted Dip | Dip (Assisted) | 가슴 | 대흉근 | 삼두근 | Machine | Push | assisted_dip | `assisted_weight_reps` |
| 13 | `machine-hack-squat` | 핵 스쿼트 머신 | Hack Squat Machine | Hack Squat (Machine) | 하체 | 대퇴사두근 | 둔근 | Machine | Squat | hack_squat_machine | `weight_reps` |
| 14 | `plank` | 플랭크 | Plank |  | 코어 | 코어 |  | Bodyweight | Core | forearm_plank | `time` |
| 15 | `crunch` | 크런치 | Crunch |  | 코어 | 복직근 |  | Bodyweight | Core | supine_crunch | `reps` |
| 16 | `lying-leg-raise` | 라잉 레그 레이즈 | Lying Leg Raise | 레그 레이즈 | 코어 | 복직근 |  | Bodyweight | Core | supine_leg_raise | `reps` |

## Shared fields for all 16

현재 Production `Exercises` schema의 나머지 필드는 아래처럼 처리한다.

- `grip_supported`: `no`
- `grip_variants`: blank
- `default_asset_source_slug`: blank until G Fit-created poster exists
- `source_row_count`: `0`
- `qa_status`: `spec_approved`
- `content_status`: `asset_pending`

신규 asset이 제작되면 그때 `default_asset_source_slug`를 실제 G Fit-created asset ID/slug로 연결한다. purchased source slug를 임시로 복사하지 않는다.

## Normalization basis

### Existing G Fit taxonomy consistency

현재 Production v1과 가능한 한 같은 분류 의미를 재사용한다.

- RDL → 기존 `kettlebell-romanian-deadlift`의 하체 / 둔근·햄스트링 / 코어 / Hinge 구조와 맞춤
- Hip Thrust → 기존 `kettlebell-hip-thrust`의 둔근 / Hinge 구조와 맞춤
- Smith flat bench → 기존 flat bench와 Smith incline bench의 장비/Push 구조를 기준으로 분리
- Smith squat → 기존 `barbell-squat`와 같은 기본 squat 계열이지만 장비 이력은 Smith Machine으로 분리
- Assisted pull-up → 기존 `pull-ups`와 타깃 분류를 맞추되 recording semantics만 assisted로 분리
- Assisted dip → 기존 `parralel-bar-dips`와 가슴/삼두 분류를 맞추되 recording semantics만 assisted로 분리

### Competitor/catalog cross-check

Gap Analysis v1에서 Planfit과 Hevy built-in catalog로 exercise 존재/명칭을 확인했다.

추가로 Hevy authenticated built-in catalog에서 recording type을 확인한 결과:

- `Plank` → duration
- `Crunch` → reps only
- `Lying Leg Raise` → reps only
- `Pull Up (Assisted)` → assisted bodyweight
- assisted dip variants → assisted bodyweight
- 나머지 P0 machine/free-weight 항목 → weight + reps 계열

이는 G Fit의 canonical taxonomy를 경쟁 앱과 동일하게 복제하기 위한 것이 아니라, 누락 운동과 기록 의미를 교차 검수하는 참고 근거다.

## Explicit non-decisions

이 문서에서 아직 확정하지 않는 것:

- 신규 poster 이미지 자체
- poster camera / crop / anatomy 상세
- 구매 에셋을 AI reference로 쓸 수 있는 라이선스 여부
- assisted 운동의 PR / progression 공식
- 사용자 체중을 이용한 effective load 계산
- P1 exercise 추가

## Next

1. P0 data-only `machine-front-military-press` → `숄더 프레스 머신` display / alias 정리
2. purchased asset modification / derivative / AI-reference license gate
3. gate 통과 후 16개 G Fit-created poster 제작
4. image / body / equipment / name QA
5. Production Exercise DB v1.x 승격
