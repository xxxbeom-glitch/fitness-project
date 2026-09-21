# Gym Visual semantic normalization v6 checkpoint

**Date:** 2026-09-21  
**Status:** SMITH MACHINE KOREAN NAMING BATCH 03 PROMOTED · MANUAL QA OPEN

## Change

- newly promoted Smith Machine Korean naming drafts: **52**
- promotion source: `gym_visual_korean_naming_core_batch03.csv`
- all 52 targets were verified against semantic v5 as:
  - present exactly once
  - `equipment = Smith Machine`
  - empty `name_ko_draft`
  - `qa_status = MANUAL_QA_REQUIRED`
- no identity, equipment, body-part, muscle, recording-type, catalog-status, or source-media field was changed

## Semantic v6 artifact verification

Current MVP semantic rows: **3,722**

MVP row QA status:
- AUTO_DRAFT_COMPLETE: **1,047**
- MANUAL_QA_REQUIRED: **2,675**

Korean name drafts present in MVP semantic files: **1,095**

The project-wide semantic manual-QA total also includes the unchanged general/home-context review pool (**425** rows), so the consolidated remaining manual-QA count is:

- **3,100 = 2,675 MVP rows + 425 review rows**

Consolidated Korean naming drafts become **1,096**, because the prior consolidated count included one draft outside the three MVP semantic parts.

## Naming boundary

This batch deliberately excludes ambiguous or structurally noisy Smith Machine names, including:
- vendor/truncation errors
- `with / on / from / to` constructions that need Korean word-order review
- context-heavy chair/bench variants where search exposure is not yet decided
- abbreviation-sensitive names such as JM Press where label style should be checked separately

The promoted 52 rows use already established Tampin Korean gym terminology such as:
- 스미스 머신
- 벤트오버 로우
- 클로즈 그립 벤치프레스
- 힙 쓰러스트
- 스플릿 스쿼트
- 루마니안 데드리프트
- 업라이트 로우

## Artifacts

- `data/exercises/gym-visual/v1/semantic/gym_visual_korean_naming_core_batch03.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v6_part1.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v6_part2.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v6_part3.csv`

## NEXT

Continue remaining semantic naming/metadata QA. Prioritize clear gym-first weighted-equipment names first; keep ambiguous structural/vendor/context rows unresolved until their semantics or app-facing relevance are verified.
