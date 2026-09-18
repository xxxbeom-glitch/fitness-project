# 2026-09-19 Group 02 Home component / binding maintenance

**Status:** FIGMA REFLECTED · COMPONENT/BINDING QA PASS · NO CURSOR HANDOFF

## Scope

This checkpoint records design-system maintenance for the already approved canonical Home states:

- `02A_Home_NoRoutine` — `1346:686`
- `02B_Home_RoutineSelected` — `1329:593`
- `02D_Home_Active` — `1346:710`

No product behavior was reopened. The goal was to remove remaining repeated local Home UI, reuse existing Group 02 components, expose required instance properties, and bind remaining layout values to existing design-system variables.

## Reuse decision

Existing Group 02 masters were reused first:

- `HomeRoutineFocusCard` — `1719:1037`
- `HomeStartChoiceCard` — `1719:1048`
- shared `chevron-right` — `636:893`

No new Home card system was introduced.

Only two missing reusable elements were added:

- `HomeQuickAction` — `2038:1951`
- `HomeRoutineTile` — `2039:1953`

## HomeQuickAction

Purpose:
- shared compact action affordance for Home start/resume cards

Structure:
- size: `36 × 36`
- nested shared `chevron-right` instance
- no duplicate SVG/vector asset

Bindings:
- fill → `brand/soft`
- radius → `radius/full`
- chevron stroke → `action/primary`
- existing chevron stroke-weight binding remains intact

Reused in:
- `HomeRoutineFocusCard / Ready`
- `HomeRoutineFocusCard / Active`
- `HomeStartChoiceCard / BlankWorkout`
- `HomeStartChoiceCard / BuildOwn`

## HomeRoutineFocusCard

The existing component set remains canonical.

Current variants:
- `State=Ready` — `320 × 80`
- `State=Active` — `320 × 80`

Bindings:
- gap → `spacing/12`
- horizontal padding → `spacing/20`
- vertical padding → `spacing/16`
- radius → `radius/md`
- surface → `bg/surface`
- existing subtle shadow binding retained

Component properties added:
- `RoutineName` — TEXT
- `RoutineMeta` — TEXT

Current production use:
- 02B Ready: `Push Day` / `5개 운동 · 약 50분`
- 02D Active: `Push Day` / `18분째 진행 중 · 8 / 19세트`

## HomeStartChoiceCard

The existing component set remains canonical.

Current variants:
- `Type=BlankWorkout` — `320 × 80`
- `Type=BuildOwn` — `320 × 80`

Bindings:
- gap → `spacing/12`
- horizontal padding → `spacing/20`
- vertical padding → `spacing/16`
- radius → `radius/md`
- surface → `bg/surface`
- existing subtle shadow binding retained

Both variants now reuse `HomeQuickAction`.

Copy remains fixed by Type:
- BlankWorkout → `빈 운동` / `루틴 없이 바로 기록`
- BuildOwn → `내 루틴 만들기` / `운동과 세트를 직접 구성`

## HomeRoutineTile

New reusable component for the approved Home `내 루틴` 2 × n grid.

Size:
- `156 × 88`

Bindings:
- internal gap → `spacing/8`
- padding → `spacing/14`
- radius → `radius/md`
- surface → `bg/surface`
- subtle shadow → existing Home card shadow binding
- name → existing 14/20 Bold text style + `text/primary`
- meta → existing 13/18 Medium text style + `text/tertiary`

Component properties:
- `RoutineName` — TEXT
- `RoutineMeta` — TEXT

Canonical 02B instances:
- `HomeRoutineTile / PullDay` — `2039:9098`
- `HomeRoutineTile / LegDay` — `2039:9102`

Right-side chevron remains intentionally absent.

## 02B manual-frame cleanup

The following repeated local frames were removed from canonical 02B and replaced by Common_Component instances:

- manual selected-routine quick-start card
- manual blank-workout quick-start card
- manual Pull Day routine tile
- manual Leg Day routine tile

Post-maintenance manual repeated Home-card frame count in 02B:
- `0`

Current canonical 02B instances:
- `RoutineFocusCard / Ready` — `2039:9083`
- `StartChoiceCard / BlankWorkout` — `2039:9091`
- `HomeRoutineTile / PullDay` — `2039:9098`
- `HomeRoutineTile / LegDay` — `2039:9102`

## Home layout variable bindings

Canonical 02A / 02B / 02D Home scroll containers now bind:
- top padding → `spacing/24`
- horizontal padding → `spacing/20`
- bottom padding → `spacing/32`
- section gap → `spacing/24`

Section-level bindings:
- standard header-to-content gap → `spacing/12`
- 02B My Routine grid gap → `spacing/8`

No new spacing/radius/color variables were created.

## Focused QA

Screen QA:
- 02A manual repeated Home-card frames = `0`
- 02B manual repeated Home-card frames = `0`
- 02D manual repeated Home-card frames = `0`
- visible text overflow = `0`
- visible text family = SUIT
- missing main-component links in 02A/02B/02D = `0`

Design-system QA:
- `HomeQuickAction` nested chevron resolves to existing `chevron-right`
- `HomeQuickAction` color/radius bindings verified
- `HomeRoutineTile` spacing/radius/surface/shadow/text bindings verified
- `HomeRoutineTile` TEXT property references verified
- `HomeRoutineFocusCard` Ready/Active both resolve at `320 × 80`
- `HomeStartChoiceCard` BlankWorkout/BuildOwn both resolve at `320 × 80`

Whole-MVP read-back:
- top-level independent screen frames: `98`
- instances: `1,980 / 1,980`
- missing main-component links: `0`
- instance sources outside `Common_Component`: `0`

Focused component/binding QA: **PASS**

## Development boundary

No Cursor / implementation handoff is authorized.
