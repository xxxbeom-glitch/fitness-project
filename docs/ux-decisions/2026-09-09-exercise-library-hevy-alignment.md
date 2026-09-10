# Exercise Library / Add Exercise — Hevy Alignment — 2026-09-09

**Status:** PO APPROVED / CANONICAL 04A-04B
**Scope:** Group 04 운동 목록/검색/필터/다중선택의 상호작용 기준

## Decision

운동 목록(Add Exercise / Exercise Library) UX는 **가능한 범위에서 Hevy의 검증된 상호작용 구조를 우선 참고**한다.

단, 브랜드 색/타이포/토큰/컴포넌트는 LIFTLY Tracker APP 디자인 시스템을 사용하며 Hevy의 시각 스타일을 그대로 복제하지 않는다.

Reference screens:

- Hevy Add Exercise default: `https://mobbin.com/screens/7edd056a-3e30-4579-a512-c33976a9ba34`
- Hevy multi-selected Add Exercise: `https://mobbin.com/screens/7edd056a-3e30-4579-a512-c33976a9ba34`
- Hevy equipment filter: `https://mobbin.com/screens/ffbd8c5b-6d12-4d52-91e5-0e87152579de`
- Hevy muscle filter: `https://mobbin.com/screens/5f831a99-ce10-4881-8418-1fda8919c186`
- Hevy filtered list: `https://mobbin.com/screens/c1522754-cbe8-4738-81fe-0c8292fa5364`

## 1. Base list structure

Current Figma proposal is updated from the previous Hangul-initial-grouping concept to a Hevy-style hierarchy.

Primary structure:

1. Nav Header — `운동 추가`
2. search field
3. two filter triggers
   - `장비 전체`
   - `부위 전체`
4. `최근 운동`
5. `전체 운동`

Current list row keeps:

- exercise thumbnail
- exercise name
- `주동근 · 장비`
- right-side detail affordance

The previous `ㄱ/ㄴ/ㄷ...` section headers are no longer the primary list hierarchy.

### 전체 운동 ordering — PO LOCKED

`전체 운동`은 현재 표시 언어 기준 오름차순으로 정렬한다.

- 한국어 UI: 가나다순
- 영문 UI가 도입되면: A–Z 등 해당 표시 언어 정렬 기준 적용
- 별도의 초성 섹션 헤더는 MVP 기본 구조에 두지 않는다.
- `최근 운동`은 빠른 재선택을 위한 shortcut section이며, `전체 운동`에서 해당 운동을 제외하지 않는다. 즉 최근 운동에 노출된 운동도 전체 라이브러리에는 다시 포함된다.

Current Korean Figma sample `전체 운동` order:

1. 덤벨 컬
2. 랫풀다운
3. 레그 익스텐션
4. 벤치프레스
5. 사이드 레터럴 레이즈
6. 케이블 크런치

## 2. Recent exercises

Follow the Hevy pattern of placing recent exercises before the full library.

Product intent:

- frequently repeated workouts should be reachable before users search the full DB
- exact maximum count can be tuned later; do not treat the current static sample count as a hard data-schema rule
- when there is no usable exercise history, the `최근 운동` section can be omitted
- recent ordering should follow recency, not 가나다 ordering

## 3. Multi-selection

The previous proposal used `+ -> check` on the right side of each row.

This is superseded.

Hevy-aligned interaction:

- tapping the **exercise row** selects / deselects the exercise
- selected rows show a slim **left-side brand indicator**
- the right-side detail affordance remains available and does not become the selection control
- when selected count > 0, show a fixed bottom CTA
- CTA label: `N개 운동 추가`
- tapping the CTA completes the batch-add action

Current Figma selected-state sample uses `3개 운동 추가`.

Selection survives normal search/filter navigation until the user explicitly deselects, completes add, or exits/cancels the add flow.

### Selected-row visual alignment — PO LOCKED

- list divider geometry stays unchanged and remains the baseline left edge
- unselected rows keep the exercise thumbnail/content starting at that baseline left edge
- selected rows place the green selection indicator at that same baseline left edge
- selected-row thumbnail/text content is then indented to the right so the indicator occupies its own visual slot rather than overlaying the thumbnail
- current Figma selected-row indent is `8px`; divider position/width does not change
- selected state is tied to exercise identity, so the same selected exercise shown in both `최근 운동` and `전체 운동` reflects the same selected state

## 4. Right-side row action

Selection and exercise inspection are intentionally separated.

- row body: selection/deselection
- right-side affordance: exercise detail/history entry

Current Figma uses a small circular chevron detail action using the existing design system icon pattern.

The exact icon can be refined later if a clearer existing Tracker APP stats/detail icon is introduced, but its functional role is locked: **it is not the selection control.**

## 5. Filters

The previous full-page filter proposal is superseded for this Add Exercise flow.

Follow Hevy's faster interaction:

- `장비 전체` -> bottom sheet
- `부위 전체` -> bottom sheet
- single-select within each category
- current value is shown in the filter control after selection
- active filter combination filters the same exercise list
- no separate selected-filter chip row is required

The Tracker APP bottom-sheet visual language and existing `OptionItem` component are reused.

### Bottom-sheet visual treatment — PO CORRECTED

Filter sheets reuse the already-defined 04H bottom-sheet shell rather than a flat opaque sheet:

- outer sheet: existing `glass-surface-20` / glass treatment
- top corners: existing 04H radius treatment
- overlay: existing dimmed background pattern
- inner option-list container: `bg/default` with its existing rounded container treatment
- `OptionItem` selected/unselected states remain reused

Current proposal options are UI samples and must continue to align with canonical exercise DB taxonomy before implementation.

## 6. Direct custom exercise entry

Hevy exposes Create from the Add Exercise header.

LIFTLY current proposal follows the same intent using the existing Nav Header `RightAction=Plus` variant:

- top-right `+` -> 직접 운동 만들기

This supplements, rather than replaces, the existing no-result create entry.

## 7. LIFTLY-specific retained rules

Hevy is the interaction reference, not the product data model.

Retain LIFTLY policy:

- list metadata = `주동근 · 장비`
- secondary-muscle data is stored but not shown in compact exercise rows
- secondary muscles remain available for Exercise Detail, custom exercise metadata and later analysis/body-map logic
- canonical exercise identity/recording type/attachment rules remain governed by the fitness-project DB decisions

## 8. Canonical Figma state after promotion

Canonical page:

- `04 운동 목록 · 상세` — node `233:2075`

Promoted canonical states:

- `04A_Search` — node `207:1238`
- `04B_Search_Selected` — node `515:1140`

Canonical supporting filter states:

- `04A_Filter_Equipment_Sheet` — node `515:3327`
- `04A_Filter_BodyPart_Sheet` — node `515:3514`

Superseded/removed:

- old canonical `04A_Search` — node `34:1601`
- old canonical `04B_Search_Selected` — node `34:1622`
- `04I2_Filter_BodyPart_FullPage_Proposal`
- `04I3_Filter_Equipment_FullPage_Proposal`
- prior right-side `ExerciseSelectionControl` check/+ component

New/reused common patterns:

- `ExerciseRowSelectionIndicator` — Default / Selected
- `ExerciseRowDetailAction`
- existing `CTA Button`
- existing `OptionItem`
- existing 04H bottom-sheet shell/overlay styling

Promotion QA:

- promoted 04A/04B remain `360 × 954` vertical Auto Layout screens
- search/list structure remained intact after move/rename
- old canonical A/B frames were removed
- 04B selected state keeps the approved left green indicator + 8px content indent while dividers remain unchanged
- screenshot QA completed for promoted 04A and 04B

## 9. Next open item

04A/04B promotion is complete.

Next:

1. update canonical `04C_Search_Empty` to the same new header/search/filter system
2. ensure no-result example uses an actually absent/invalid search term rather than a valid exercise name
3. then continue 04D metadata QA
4. continue 04E/04F custom-exercise metadata QA
5. finish 04H attachment taxonomy/copy/direct-input decision
6. run full Group 04 structure/binding/visual QA

No Cursor implementation handoff yet.
