# Purchased Exercise Asset Classification v0.1

**Status:** FIRST PASS  
**Date:** 2026-09-02  
**Basis:** Google Drive exercise asset folder poster `.webp` filenames + approved G Fit exercise DB rules.

This is not the final production exercise DB. It is the first normalization pass used to estimate scope, merge candidates, exclusion candidates, and follow-up QA.

## Summary

- Source assets scanned: **206**
- 이름 변경 / 기본 유지: **172**
- 유지 · 전신/컨디셔닝: **14**
- 유지 · 그립 하위 기록 후보: **7**
- 중복 통합: **5**
- 1차 제외: **4**
- 1차 제외 검토: **4**

## By big body part

- 등: **48**
- 하체: **45**
- 가슴: **33**
- 팔: **31**
- 코어: **18**
- 어깨: **17**
- 전신: **13**
- 기타: **1**

## By equipment

- Dumbbell: **56**
- Bodyweight: **38**
- Barbell: **27**
- Cable Machine: **24**
- Kettlebell: **23**
- Machine: **16**
- Resistance Band: **12**
- Smith Machine: **4**
- EZ Bar: **2**
- Other: **2**
- Landmine: **1**
- Plate: **1**

## Merge candidates

These are first-pass merge candidates. Original English source names must remain as aliases/source metadata.

| Source asset | Canonical G Fit ID | Reason |
|---|---|---|
| `bodyweight-elevated-push-up` | `incline-push-up` | Same practical exercise category: elevated/incline push-up |
| `dumbbell-single-arm-row` | `dumbbell-row-unilateral` | Same practical exercise: one-arm dumbbell row |
| `kettlebell-single-arm-row` | `kettlebell-row-single` | Same practical exercise: one-arm kettlebell row |
| `machine-cable-v-bar-push-downs` | `cable-v-bar-pushdown` | Cable V-bar pushdown should live under cable triceps pushdown family |
| `machine-seated-cable-row` | `cable-seated-row` | Cable row should not be treated as a generic machine brand category |

## Exclusion / review candidates

| Source asset | First-pass decision | Reason |
|---|---|---|
| `abdominals-stretch-variation-one` | 1차 제외 | Stretch/mobility, not core G Fit weight-tracking inventory |
| `abdominals-stretch-variation-two` | 1차 제외 | Stretch/mobility, not core G Fit weight-tracking inventory |
| `abdominals-stretch-variation-three` | 1차 제외 | Stretch/mobility, not core G Fit weight-tracking inventory |
| `abdominals-stretch-variation-four` | 1차 제외 | Stretch/mobility, not core G Fit weight-tracking inventory |
| `barbell-spinal-jefferson-curl` | 1차 제외 검토 | Valid movement, but mobility/skill-oriented |
| `bodyweight-spinal-jefferson-curl` | 1차 제외 검토 | Valid movement, but mobility/skill-oriented |
| `dumbbell-spinal-jefferson-curl` | 1차 제외 검토 | Valid movement, but mobility/skill-oriented |
| `kettlebell-spinal-jefferson-curl` | 1차 제외 검토 | Valid movement, but mobility/skill-oriented |

## Grip / sub-record candidates

These should not automatically expand the default search list. They should be reviewed as optional sub-record/grip variants under a base exercise where possible.

- `barbell-close-grip-bench-press`
- `smith-machine-close-grip-bench-press`
- `narrow-pulldown`
- `cable-single-arm-neutral-grip-row`
- `cable-single-arm-underhand-grip-row`
- `machine-neutral-row`
- `machine-underhand-row`

## Required production DB fields

Each production exercise row should carry at least:

- `canonical_id`
- `name_ko`
- `name_en`
- `source_name_en`
- `aliases`
- `source_slug`
- `big_body_part_ko`
- `primary_muscles_ko`
- `secondary_muscles_ko`
- `equipment`
- `angle_or_posture`
- `grip_variant`
- `recording_type`
- `asset_file`
- `status`
- `notes`

## Important rule

English is not just an internal memo field. For future international expansion, every exercise should keep a clean English display name separately from the original purchased source name.

Example:

- `name_ko`: `인클라인 덤벨 벤치프레스`
- `name_en`: `Incline Dumbbell Bench Press`
- `source_name_en`: purchased source name
- `aliases`: alternate names and merged source names

## Follow-up QA

This v0.1 pass is based on filenames. Before implementation, it still needs:

1. Full `metadata.json` field enrichment.
2. Image-level duplicate confirmation for merge candidates.
3. Korean naming polish for all remaining literal names.
4. Representative grip list decision by exercise.
5. License check for direct app usage / derivative / AI-reference use.
