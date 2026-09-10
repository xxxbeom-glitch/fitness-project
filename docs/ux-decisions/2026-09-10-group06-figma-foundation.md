# Group 06 Workout Completion — Figma Foundation

**Date:** 2026-09-10  
**Status:** ACTIVE / PRODUCT-UX + FIGMA  
**Scope:** Group 06 `06 운동 완료` canonical visual foundation and local design-system migration

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `06 운동 완료` — `233:2077`
- main completion screen: `06A_Completion_Carousel` — `163:2031`
- current carousel content reference: `REORG_06_CAROUSEL_CONTENT` — `163:2073`
- current conditional-state reference: `REORG_06_CONDITIONAL_STATES` — `163:2142`
- shared local UI page: `MVP_공용_UI` — `105:3113`
- local component library: `LOCAL_COMPONENT_LIBRARY` — `635:788`

Older hidden 06A–06J frames remain reference/archive material. They were not promoted back to canonical and were not modified by this migration.

## Existing screen read-back before migration

The current canonical completion composition is one 360×780 completion screen:
- success state/header
- one large carousel card region
- carousel pagination
- `이미지 저장 / 공유`
- bottom actions `기록 상세 보기 / 홈으로 돌아가기`

The supporting carousel reference currently contains five content concepts:
1. 오늘 기록 요약
2. 오늘의 발전 / 최고 기록
3. 최근 5회 흐름 / 다음 운동 힌트
4. 오늘 운동 부위 body-map placeholder
5. 실제 수행 운동

Conditional reference states currently include:
- 추천 루틴 저장 여부
- 원래 추천 구성 vs 오늘 구성 저장 선택
- 부분 기록 저장 완료 summary

These product meanings are not re-approved by this foundation migration; they are the next Product/UX review scope.

## Design-system migration

The current visual system already used local Fitness Variables and text styles, but the canonical 06 screen still depended on external component-library instances.

External dependencies identified:
- completion `CheckCircle` and nested check icon
- primary `ShareCTA`
- bottom `DualCTA` and nested CTA buttons
- two conditional `DialogCard` instances and nested `DialogButtons`

Applied:
- created local `CompletionStatusIcon` — `742:901` because no adequate completion/success status component existed in `LOCAL_COMPONENT_LIBRARY`.
  - fixed 64×64
  - `brand/primary` fill
  - `radius/full`
  - contains existing local `icon/check` — `636:895`
  - check color overridden inside the local completion component to `bg/default` for the approved success-circle contrast
- `ShareCTA` swapped to local `CTA Button / Type=Primary, State=Default` — `635:794`
- bottom actions swapped to local `DualCTA` — `638:3344`, which uses local CTA Button instances
- both conditional dialogs swapped to local `DialogCard / Type=Default` — `635:843`
- their nested buttons now use local `DialogButtons / State=Default` — `635:815`

No external component dependency remains in the current canonical Group 06 artifacts.

## Binding normalization

The existing 06 raw product-specific card layouts were preserved rather than prematurely componentized before Product/UX review.

Focused binding corrections:
- main `CarouselCard_오늘기록요약` — padding `spacing/20`, gap `spacing/12`, corners `radius/md`
- carousel reference `CarouselCard_오늘기록요약` — same bindings
- `TodayExercises` stacks — gap `spacing/8`
- main `CompletionBody` — gap `spacing/12`

Other current completion cards already had local spacing/radius/fill bindings and local text styles; no parallel token system was added.

## Focused QA

### `06A_Completion_Carousel` — `163:2031`
- instances: 6
- missing main component: 0
- external/remote main component: 0
- Variables: 15 / missing 0 / remote 0
- Styles: 6 / missing 0 / remote 0
- 360×780 screenshot read-back: PASS

### `REORG_06_CAROUSEL_CONTENT` — `163:2073`
- external component: 0
- Variables: 15 / missing 0 / remote 0
- Styles: 6 / missing 0 / remote 0
- visual read-back: PASS

### `REORG_06_CONDITIONAL_STATES` — `163:2142`
- instances: 4
- missing main component: 0
- external/remote main component: 0
- Variables: 13 / missing 0 / remote 0
- Styles: 6 / missing 0 / remote 0
- dialog copy/layout screenshot read-back: PASS

### `CompletionStatusIcon` — `742:901`
- nested component uses local `icon/check`
- missing main component: 0
- external/remote main component: 0
- Variables: 5 / missing 0 / remote 0

## Design-system rule for Group 06

Continue using:

`existing local Variables/Styles → existing local Components → approved Fitness patterns → new local asset only after confirming a real gap`

Do not rebuild the completion UI in a parallel visual system and do not reintroduce external component dependencies.

## NEXT OPEN ITEM

Review Group 06 Product/UX meaning and interaction one part at a time using the now-localized Figma foundation.

Start from the main completion screen and decide whether the current completion hierarchy/content is correct, then review the five carousel contents and conditional states only as needed.

Do not start Cursor/development handoff unless Product Owner explicitly switches to development.
