# Group 07D — Personal-record trophy card

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / 07D-LOCAL COMPONENT / FRONT-LAYER + BORDER QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 `오늘의 신기록` 영역은 기존 `CompletionPersonalRecordCard`를 변형해서 쓰지 않고, **07D 전용 local component**로 분리한다.

Component intent:
- 이 컴포넌트는 현재 07D 운동 기록 상세의 PR 표현만을 위한 local asset이다.
- Group 06의 기존 `CompletionPersonalRecordCard`를 수정하거나 회귀시키지 않는다.
- trophy image + card surface + PR text를 하나의 컴포넌트가 소유한다.
- TrophySpace가 auto-layout geometry를 유지하고 actual trophy는 component 내부 absolute overlay로 처리해 카드 앞 레이어를 보장한다.

## Visual treatment

- trophy image: `64 × 64px`
- card 중앙 상단에 trophy를 배치
- trophy는 **CardSurface보다 앞 레이어**에 렌더링한다
- root vertical auto-layout의 negative gap을 사용해 card top boundary가 trophy의 lower cup/neck 부근을 지나가게 한다
- trophy 아래 text는 card padding으로 안정적인 여백을 확보한다
- label: `오늘의 신기록`
- record sample: `벤치프레스 80kg × 10회`
- **CardSurface는 07D의 다른 card와 동일한 border treatment를 사용한다**
  - border token: `border/default` (`VariableID:278:922`)
  - `1px`, `INSIDE`
  - surface / radius treatment도 기존 Fitness card와 일관되게 유지

Current geometry:
- component width `320px`
- `TrophySpace`: `320 × 64`
- trophy: `64 × 64`, absolute overlay at x=`128`, y=`0`
- root itemSpacing: `-32px`
- `CardSurface`: width `320`, hug-content height `94px`
- card surface y relative to component = `32px`
- card surface padding = top `40`, right `20`, bottom `12`, left `20`
- text gap = `6px`
- final component height = `126px`

## Figma

Canonical file/page:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07D_운동기록상세_Exploration` — `836:1593`

07D-local component:
- master `07D/PersonalRecordTrophyCard` — `1113:733`, `320 × 126`
- `CardSurface` — `1113:736`
- live instance `PersonalRecordTrophyCard` — `1113:739`, `320 × 126`
- trophy child — `64 × 64`
- component uses vertical auto-layout with `clipsContent=false`; trophy itself is an internal absolute overlay so it stays in front of the card surface

Superseded 07D construction:
- manual `PersonalRecordTrophyWrapper` `1108:733`
- reused `CompletionPersonalRecordCard` instance `1075:791` inside that wrapper
- `36 × 36` trophy treatment
- trophy-behind-card layer order
- borderless 07D personal-record card surface

The global/shared `CompletionPersonalRecordCard` remains available for its existing use cases and is not redefined by this 07D-local component.

## QA

Focused component/live-instance screenshot = PASS.

Verified:
- trophy size is `64px`
- trophy renders in front of CardSurface
- card boundary visually overlaps behind the trophy around its lower cup/neck transition
- label/record do not collide with trophy
- PR CardSurface now uses the exact same `border/default` token, `1px`, `INSIDE` stroke treatment as `07D/SessionSummaryCard`
- layout size and surrounding 07D sections are unchanged

## Development boundary

No Cursor/development handoff is authorized.
