# Group 07D — Personal-record trophy overlap treatment

**Date:** 2026-09-13  
**Status:** PO DIRECTION APPLIED IN FIGMA / VISUAL QA PASS / NO CURSOR HANDOFF

## Decision

`07D 운동 기록 상세`의 `오늘의 신기록`은 텍스트만 있는 카드보다 보상/성취감을 강화하기 위해 trophy image를 사용한다.

Visual treatment:
- 기존 `CompletionPersonalRecordCard` content를 유지한다.
- trophy image는 `36 × 36px`로 사용한다.
- trophy는 카드 상단 중앙에 배치한다.
- normal content grid에 넣지 않고 overlap/tal-grid 방식으로 배치한다.
- card top boundary가 trophy의 neck 부근을 통과하도록 trophy를 위로 돌출시킨다.
- trophy 아래에 `오늘의 신기록` label, 그 아래에 실제 PR record를 배치한다.
- trophy와 text가 충돌하지 않도록 card top padding을 늘린다.

## Figma

Canonical file/page:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07D_운동기록상세_Exploration` — `836:1593`

Current nodes:
- wrapper `PersonalRecordTrophyWrapper` — `1108:733`, `320 × 82`
- `CompletionPersonalRecordCard` instance — `1075:791`, `320 × 82`
- trophy image layer `trophy_PR_36` — `1105:7639`, `36 × 36`

Geometry:
- trophy x = `142`, centered on 320px card
- trophy y = `-23` relative to wrapper/card top
- card top padding = `28px`
- `오늘의 신기록` label y = `28`
- record y = `50`
- wrapper clipsContent = false

This keeps the trophy visually detached from the normal grid while the card boundary overlaps the trophy around the neck area.

## QA

Focused full-screen screenshot after application = PASS.

Verified:
- trophy is 36px and centered
- trophy protrudes above the card
- card top boundary crosses the trophy around the intended neck area
- label/record do not collide with the trophy
- surrounding session summary/body distribution/performed-exercise sections are unchanged except downstream vertical shift
- current 07D frame height = `1304px`

## Development boundary

No Cursor/development handoff is authorized.
