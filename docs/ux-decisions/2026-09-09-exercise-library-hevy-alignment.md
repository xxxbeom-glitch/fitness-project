# Exercise Library / Add Exercise — Hevy Alignment — 2026-09-09

**Status:** PO APPROVED / CANONICAL GROUP 04 CORE ALIGNED / 04B SELECTED-SUMMARY COMPARISON OPEN
**Scope:** Group 04 운동 목록/검색/필터/다중선택 및 연결 상세/커스텀 운동 상태의 상호작용 기준

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

## 9. Group 04 progress — 2026-09-10

### 04C no-result — UPDATED

Canonical `04C_Search_Empty` was rebuilt onto the same current Add Exercise shell as 04A.

- current node: `539:1050`
- `360 × 954` vertical Auto Layout
- same Nav Header / search / `장비 전체` / `부위 전체` filter structure
- invalid search example: `레그프레쓰`
- empty-state message retained
- direct custom-exercise CTA retained
- structure / binding / screenshot QA completed

### 04D exercise detail — METADATA UPDATED

Canonical `04D_운동상세` keeps the approved `운동 정보 | 최근 기록` 2-tab structure and now includes the missing structured metadata.

- node: `40:2325`
- equipment: `바벨`
- primary target: `가슴`
- secondary target: `삼두 · 전면 어깨`
- exercise-method text retained
- `핵심 체크포인트` section added
- existing Tracker APP row/value components and semantic tokens reused
- normalized to `360 × 954` vertical screen shell
- structure / binding / screenshot QA completed

### 04E / 04F custom exercise — METADATA UPDATED

Custom exercise create/edit now exposes the structured fields needed by the approved MVP recording model.

Canonical nodes:

- `04E_Custom_Create` — `34:1672`
- `04F_Custom_Edit` — `34:1692`

Visible setting rows, in order:

1. `장비`
2. `주 타겟 근육`
3. `보조 타겟 근육`
4. `기록 방식`

Create-state sample:

- 장비: `선택`
- 주 타겟 근육: `선택`
- 보조 타겟 근육: `선택 안 함`
- 기록 방식: `중량 + 횟수`

Edit-state sample:

- 운동명: `케이블 풀다운 (커스텀)`
- 장비: `케이블`
- 주 타겟 근육: `등`
- 보조 타겟 근육: `이두`
- 기록 방식: `중량 + 횟수`

Additional cleanup:

- 04F Nav Header title corrected to `운동 수정`
- both E/F normalized to `360 × 954` vertical Auto Layout shells
- existing `RowLabel`, `RowValue`, thumbnail, input, Nav Header, delete CTA patterns retained
- spacing/surface/radius bindings preserved on added rows
- structure / binding / screenshot QA completed

Recording-type authority remains:

- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- MVP active: `weight_reps`, `reps`, `duration`, `added_weight_reps`, `assisted_weight_reps`
- user-facing `기록 방식` copy represents this product concept; detailed selector-state UI may be refined during implementation-facing interaction specification

### 04H attachment picker — UI/INTERACTION ALIGNED

Canonical node:

- `04H_Exercise_Attachment_Selection` — `170:2174`
- supporting direct-input state — `04H_Custom_Attachment_Input` `552:3356`

Aligned behavior:

- background is the canonical 04A search screen
- current exercise only exposes its allowed/recommended attachment choices
- preset tap selects immediately and returns; no Apply button
- final row = `직접 입력`
- direct input uses existing `InputBox` + primary CTA `사용하기`
- custom text remains exercise-record context only in MVP and is not auto-promoted into canonical taxonomy
- production per-exercise allowlist/data normalization remains a separate DB task and does not block visual Group 04 closure unless it causes a screen contradiction

### 04G recent history — VIEWPORT / SCROLL NORMALIZED

Canonical node:

- `04G_Exercise_History` — `34:1714`

Final screen shell:

- viewport normalized from `360 × 1102` to **`360 × 954`**
- root = vertical Auto Layout
- StatusArea / Nav Header / two-tab bar remain fixed-height top structure
- `ExerciseHistoryContent` fills the remaining viewport and is the vertical scroll region
- current content region = `360 × 782`
- existing dated set-history content remains intact below the fold
- structure QA / binding inspection / screenshot QA completed

This closes the previous 04G viewport blocker.

## 10. 04B selected-exercise overview — COMPARISON OPEN / NOT YET CANONICAL

The PO raised a new usability question: when many exercises (example: 10) are selected, the left green indicators and bottom count CTA show state but do not let the user quickly review **which exercises** are selected.

Do **not** repurpose `최근 운동` as the selected list. `최근 운동` is historical/recency navigation; selected exercises are temporary state for the current add flow.

Reference patterns reviewed beyond Hevy:

- MyFitnessPal: selection count only in bottom CTA
- Shopify: explicit `View selected`
- GitHub: separate `Selected` section
- Beli: selected-item chips with remove affordance
- Formula 1: selected items summarized in a dedicated top strip

Three Figma comparison proposals were created below the canonical Group 04 screens. **Canonical `04B_Search_Selected` was not modified.**

### 1안 — summary row

- node: `560:1117`
- name: `04B_V1_Selected_Summary_Row`
- shows one compact row between filters and recent exercises
- copy concept: `선택한 운동` + `10개 >`
- reuses existing `RowLabel` and `RowValue(Type=ValueChevron)`
- keeps the list visually closest to current Hevy-like density

### 2안 — selected chips

- node: `560:1293`
- name: `04B_V2_Selected_Chips`
- shows `선택한 운동 10개` plus horizontal selected chips
- current sample: `벤치프레스 ×`, `랫풀다운 ×`, `덤벨 컬 ×`, `+7`
- reuses existing `FilterChip` instances for visual comparison
- exposes selected names most quickly but adds persistent visual density

### 3안 — selected list section

- node: `560:1471`
- name: `04B_V3_Selected_Section`
- shows a dedicated selected-exercise section above recent exercises
- current sample expands 3 selected exercise rows and provides `7개 더 보기 >`
- most explicit/reviewable, but consumes the most vertical space

All three comparison screens:

- are `360 × 954`
- preserve canonical search + equipment/body filters
- preserve selected-row green indicator behavior
- preserve recent/all lists beneath the comparison UI
- use bottom CTA sample `10개 운동 추가`
- were structure-checked and screenshot-QA'd
- remain **proposal-only until PO selects a direction**

## 11. Resume / next open item

On the next chat, do not redo Hevy/reference research unless the PO asks.

Resume from this exact point:

1. PO visually compares **1안 / 2안 / 3안** in Figma and chooses one, or chooses to keep canonical 04B unchanged
2. only after the choice, promote/refine that selected-exercise overview behavior into canonical `04B_Search_Selected`
3. verify/fix canonical 04B bottom CTA scroll-safety so the last exercise row is not obscured by `N개 운동 추가`
4. run final exercise list/filter sample-data QA against canonical Production taxonomy
5. run final Group 04 A~H structure/binding/screenshot QA and decide CLOSE vs remaining corrections

No Cursor implementation handoff yet.
