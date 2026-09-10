# Figma Local Component Migration — 2026-09-10

**Status:** PO REQUESTED / 01–04 COMPLETE / QA PASS
**Scope:** Canonical Figma pages `01 로그인 · 첫 진입`, `02 홈`, `03 루틴`, `04 운동 목록 · 상세`

## Goal

현재 작업된 01–04 화면의 혼합 dependency를 정리한다.

최종 목표 구조:

`01–04 screen → current Fitness file local component → current Fitness local Variable / Style`

이번 작업은 승인된 UI를 다시 디자인하는 작업이 아니다. 기존 화면/interaction/variant를 유지한 채 외부 component library 의존성만 현재 Fitness Figma 파일 내부 자산으로 이관한다.

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- `01 로그인 · 첫 진입` — page `233:2072`
- `02 홈` — page `233:2073`
- `03 루틴` — page `233:2074`
- `04 운동 목록 · 상세` — page `233:2075`
- shared UI — `MVP_공용_UI` page `105:3113`
- local migration management frame — `LOCAL_COMPONENT_LIBRARY` `635:788`

## Migration rules

1. 이미 current file의 local component에 연결된 instance는 유지한다.
2. 동일 역할의 local component가 이미 있으면 새 component를 만들지 않고 해당 local component로 swap한다.
3. local equivalent가 없을 때만 기존 external source component/component set을 current file에 local master로 편입한다.
4. Variant / Component Property / Auto Layout / instance override를 유지한다.
5. screen instance를 detach하지 않는다.
6. nested component dependency도 검사해 external child instance를 local child component로 교체한다.
7. component 내부 및 screen override의 external Variable / Style binding도 current local foundation으로 재바인딩한다.
8. visual regression이 없음을 실제 artifact read-back으로 확인한다.

## 01 로그인 · 첫 진입 — PASS

Localized/reused families:

- `AppLogo`
- `CTA Button`
- `InputBox`
- `DialogCard`
- `DialogButtons`
- Nav Header child icons
  - arrow-left
  - plus
  - edit
  - more-vertical

Additional local text styles were created only because no current local equivalent existed for the dialog source typography roles:

- `dialog/title`
- `dialog/secondary`
- `dialog/primary`

Existing local `Nav Header` master was retained; only its transitive external icon dependencies were replaced with local icon masters.

Final dependency audit:

- external component instance: `0`
- external variable: `0`
- external style: `0`

## 02 홈 — PASS

Localized/reused families:

- `AppLogo` — reused from 01 migration
- `Compact Button`
- `HeatmapCard`
- `WorkoutRow`
- `OptionItem`
- `chevron-right`
- `icon/check`

Nested external icon dependencies in `WorkoutRow` / `OptionItem` were replaced with local icon masters.

Final dependency audit:

- external component instance: `0`
- external variable: `0`
- external style: `0`

## 03 루틴 — PASS

Localized/reused families:

- `Tag`
- `Routine Summary`
- `ExerciseCard`
- `SetField`
- `SetAddButton`
- `SetDeleteButton`
- `col-done`
- `CTA Button` / `InputBox` / `Compact Button` — reused from earlier migration
- `icon/more-vertical` — reused local icon

`ExerciseCard` was localized as a real component set and its nested child component references were reconnected to the local Tag / SetField / set-action / completion / icon masters. No detach-based screen duplication was used.

### Missing Tag token roles added

The approved Tag source used four semantic color roles that did not have local equivalents. To preserve the approved visual treatment while removing external bindings, local primitives/semantic aliases were added for:

- `tag-bg/tricep`
- `tag/tricep`
- `tag-bg/shoulder`
- `tag/shoulder`

A residual `tag/01` external text-style override on four routine labels was also rebound to the existing local `tag/01` style.

Final dependency audit:

- external component instance: `0`
- external variable: `0`
- external style: `0`

## 04 운동 목록 · 상세 — PASS

Existing local Group 04 components were retained where already valid:

- `Nav Header`
- `FilterSelectButton`
- `ExerciseSearchRow`
- `ExerciseRowSelectionIndicator`
- `ExerciseRowDetailAction`
- `SelectedExerciseChip`
- `ExerciseSearchRow_Selected`

Localized/reused external families:

- `fixed-tab-bar`
- `RowLabel`
- `RowValue`
- `thumbnail/photo-register`
- `DualCTA`
- `DateHeader`
- `SearchField`
- `SectionHeader`
- `Toggle`
- `icon/search`
- `OptionItem` — reused local family from 02
- `CTA Button` — reused local family from 01
- `InputBox` — reused local family from 01
- `Compact Button` — reused local family from 02

Nested external dependencies were also removed:

- `RowValue` → local Toggle / chevron-right / check
- `DualCTA` → local CTA Button variants
- `SearchField` → local search icon
- `ExerciseRowDetailAction` → local chevron-right
- `FilterSelectButton` → local chevron-right

`ExerciseSearchRow_Selected` master `598:1392` was an existing local master without a page parent. The same master was moved to `MVP_공용_UI`; its node ID and all existing instance links were preserved.

### Missing local primitives added

Two existing approved visual roles lacked a current-file local primitive and therefore were added rather than left externally bound:

- `neutral/50` = white — required by local Toggle
- `border/thin` = `0.5` — required by approved OptionItem/filter/attachment divider treatment

The full-page filter `spacing/20`, selected `brand/primary` overrides, and divider weight overrides were rebound to current local variables.

Final dependency audit across canonical 04 tree (`1097` inspected nodes):

- external component instance: `0`
- external variable: `0`
- external style: `0`

## Final combined QA — 01–04

Actual Figma tree audit after all swaps/rebindings:

| Page | Inspected nodes | Screen instances | External component | External variable | External style |
| --- | ---: | ---: | ---: | ---: | ---: |
| 01 로그인 · 첫 진입 | 91 | 13 | 0 | 0 | 0 |
| 02 홈 | 363 | 39 | 0 | 0 | 0 |
| 03 루틴 | 1272 | 278 | 0 | 0 | 0 |
| 04 운동 목록 · 상세 | 1097 | 293 | 0 | 0 | 0 |

Representative visual/artifact read-back also confirmed no intended layout/state regression in:

- 01 login / basic information / dialog states
- 02 home / empty state
- 03 routine list/create/edit and ExerciseCard view/edit
- 04A search
- 04B selected chips + selected-row indicator + footer CTA
- 04D exercise detail
- 04E custom exercise create
- 04H attachment picker including 0.5px row dividers
- 04A equipment full-page filter including selected state and final-row no-divider behavior

## Boundary

This PASS means **the canonical screen trees on pages 01–04 no longer depend on external components, variables, or styles**.

It does **not** mean the entire Figma file has been globally audited or that all unused/external library assets elsewhere in the file were removed/unsubscribed.

Do not reopen approved 01–04 visual design solely because component ownership changed.

## Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

Product Owner has not opened development transition for this scope.
