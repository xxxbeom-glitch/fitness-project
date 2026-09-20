# Korean naming QA — core weighted equipment batch 01

**Date:** 2026-09-21  
**Status:** BATCH GENERATED · HIGH-CONFIDENCE DRAFTS IDENTIFIED · NOT PRODUCTION

## Scope

Core gym-first weighted equipment only:
- Dumbbell / Barbell / Cable / Machine / Kettlebell
- Smith Machine / Landmine / EZ Bar / Trap Bar / Sled / Weight Plate

Rows reviewed by rule set: **1562**

## Result

- UNRESOLVED: **803**
- EXISTING_DRAFT: **420**
- NEW_HIGH_CONFIDENCE_DRAFT: **323**
- NEW_REVIEW_DRAFT: **16**

High-confidence here means the English exercise name was fully covered by the controlled Korean gym-term glossary, contains no unresolved structural connector, and has no current semantic conflict flag.

`NEW_REVIEW_DRAFT` is intentionally not promoted; examples such as block/rack/support descriptions can need Korean word-order cleanup even when every token is translated.

## Naming style

Prefer familiar Korean gym usage and transliteration over literal prose translation:
- Barbell Bent Over Row → 바벨 벤트오버 로우
- Cable Face Pull → 케이블 페이스 풀
- Barbell Pause Bench Press → 바벨 포즈 벤치프레스
- Machine Preacher Curl → 머신 프리처 컬

## Artifact

- `data/exercises/gym-visual/v1/semantic/gym_visual_korean_naming_core_batch01.csv`

## NEXT

Promote only high-confidence naming drafts into the next semantic snapshot, then process unresolved core-equipment names and body/muscle conflicts.