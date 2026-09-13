# Group 07D — Personal-record trophy card

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / 07D-LOCAL COMPONENT CREATED / AUTO-LAYOUT QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 `오늘의 신기록` 영역은 기존 `CompletionPersonalRecordCard`를 변형해서 쓰지 않고, **07D 전용 local component**로 분리한다.

Component intent:
- 이 컴포넌트는 현재 07D 운동 기록 상세의 PR 표현만을 위한 local asset이다.
- Group 06의 기존 `CompletionPersonalRecordCard`를 수정하거나 회귀시키지 않는다.
- trophy image + card surface + PR text를 하나의 컴포넌트가 소유한다.
- trophy까지 auto-layout 흐름 안에 포함해 수동 absolute-position wrapper 의존성을 제거한다.

## Visual treatment

- trophy image: `64 × 64px`
- card 중앙 상단에 trophy를 배치
- trophy와 card surface를 vertical auto-layout으로 구성
- root auto-layout의 negative gap을 사용해 card top boundary가 trophy의 neck 부근을 통과하게 한다
- trophy 아래 text는 card padding으로 안정적인 여백을 확보한다
- label: `오늘의 신기록`
- record sample: `벤치프레스 80kg × 10회`

Current geometry:
- component width `320px`
- `TrophyZone`: `320 × 64`
- trophy: `64 × 64`
- root itemSpacing: `-32px`
- `CardSurface`: width `320`, hug-content height `94px`
- card surface y relative to component = `32px`
- card surface padding = top `40`, right `20`, bottom `12`, left `20`
- text gap = `6px`
- final component height = `126px`

This keeps the visual overlap while making the layout stable under auto-layout instead of relying on a manually positioned trophy layer outside the card.

## Figma

Canonical file/page:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07D_운동기록상세_Exploration` — `836:1593`

07D-local component:
- master `07D/PersonalRecordTrophyCard` — `1113:733`, `320 × 126`
- live instance `PersonalRecordTrophyCard` — `1113:739`, `320 × 126`
- trophy child — `64 × 64`
- component uses vertical auto-layout and `clipsContent=false`
- master and live instance heights normalized to the same `126px`

Superseded 07D construction:
- manual `PersonalRecordTrophyWrapper` `1108:733`
- reused `CompletionPersonalRecordCard` instance `1075:791` inside that wrapper
- `36 × 36` trophy treatment

The global/shared `CompletionPersonalRecordCard` remains available for its existing use cases and is not redefined by this 07D-local component.

## QA

Focused component screenshot = PASS.
Focused full 07D screenshot = PASS.

Verified:
- trophy is included in component structure
- trophy size is `64px`
- card boundary visually overlaps the trophy around its lower cup/neck transition
- label/record do not collide with trophy
- master uses hug-content auto-layout for the card surface and root
- live instance is normalized to the master size
- session summary/body distribution/performed-exercise sections remain intact

## Development boundary

No Cursor/development handoff is authorized.
