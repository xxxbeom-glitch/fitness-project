# Group 04 Closure QA — 2026-09-10

**Status:** PASS · GROUP 04 CLOSED

## Scope

Final closure QA only. Previously approved / already-passed Group 04 work was not reopened.

Checked:

1. exercise-list/filter sample data against current canonical Production taxonomy
2. regressions from the latest shared changes only:
   - Nav Header
   - Empty State
   - filter rows
   - SelectedExerciseChip relocation
3. canonical screen viewport / key structure consistency after short-device QA edits

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — `233:2075`
- shared UI page: `MVP_공용_UI` — `105:3113`

## Findings and fixes

### 1. Canonical viewport regression — FIXED

Four canonical frames were found still left at the temporary short-device QA height `360 x 780`:

- `04A_Filter_Equipment_Page` — `515:3327`
- `04A_Filter_BodyPart_Page` — `515:3514`
- `04E_Custom_Create` — `34:1672`
- `04F_Custom_Edit` — `34:1692`

They were restored to the approved canonical `360 x 954` reference viewport.

Short-device scroll behavior remains preserved inside their fill/scroll content regions.

### 2. Body-part filter taxonomy mismatch — FIXED

The body-part filter still contained temporary detailed-muscle samples `이두 / 삼두` and omitted `팔 / 전신 / 기타`.

This conflicted with the approved large body-part taxonomy:

- 가슴
- 등
- 어깨
- 팔
- 하체
- 코어
- 전신
- 기타

Canonical body filter now uses:

`전체 / 가슴 / 등 / 어깨 / 팔 / 하체 / 코어 / 전신 / 기타`

All rows remain reused `OptionItem` instances. The added `기타` row is also an instance of the existing component.

Divider geometry was rechecked after the extra row was added: divider remains between rows, final row has no divider.

### 3. Exercise-list sample data alignment — FIXED

The dense Group 04 list samples were aligned to current Production naming / primary-muscle / equipment semantics.

Examples now include:

- `벤치프레스` — `대흉근 · 바벨`
- `랫풀다운` — `광배근 · 케이블`
- `덤벨 컬` — `이두근 · 덤벨`
- `덤벨 레터럴 레이즈` — `측면 삼각근 · 덤벨`
- `레그 익스텐션 머신` — `대퇴사두근 · 머신`
- `크런치` — `복직근 · 맨몸`

The previous temporary `케이블 크런치` sample was removed from the visible sample set because it is P1, not part of the current 195 + P0 16 target.

04H's dimmed background list was synchronized to the same sample set so the attachment overlay no longer displays stale list taxonomy.

### 4. 04B selected-chip stress sample — FIXED

The 10 selected chips now use current baseline/P0 identities only.

Current sample:

- 덤벨 레터럴 레이즈
- 덤벨 컬
- 랫풀다운
- 레그 익스텐션 머신
- 벤치프레스
- 크런치
- 스미스 머신 벤치프레스
- 어시스트 풀업
- 핵 스쿼트 머신
- 바벨 루마니안 데드리프트

This remains a stress-test sample, not a taxonomy rule.

## Shared-change regression QA

### SelectedExerciseChip relocation — PASS

- master: `569:1335`
- master parent: `MVP_공용_UI` — `105:3113`
- all 10 current 04B chips remain instances linked to the same master
- no detached or stray Group 04 master was introduced

### Nav Header — PASS

Across canonical Group 04 screens checked:

- Nav Header remains `360 x 56`
- left/right action slot = `44 x 44`
- visible icon = `24 x 24`
- expected Back / Plus / Save / None variants remain connected
- canonical screen roots are `360 x 954`

### Filter rows — PASS

- OptionItem row height = `52px`
- row text aligns to the 20px page/list line with 0 inner horizontal padding
- existing OptionItem component variants remain reused
- divider color/weight remains existing border token treatment between rows
- last row remains divider-free
- equipment filter remains 10 visible UI options
- body-part filter now has 9 options including `전체`

### Empty State — PASS

04C remains the approved 03B-style empty-state direction:

- centered title
- centered supporting copy
- compact primary action
- no fixed bottom footer CTA

No new regression found from the shared Nav Header work.

## Exercise detail sample — PASS after data alignment

04D `벤치프레스` sample keeps the approved flat information architecture while its detailed muscle labels now match the current Production sample taxonomy:

- 장비: 바벨
- 주 타겟 근육: 대흉근
- 보조 타겟 근육: 삼두근 · 전면 삼각근

No visual IA change was made.

## Screenshot / read-back result

Post-fix Figma read-back and screenshots confirm:

- 04A list renders without collision
- 04B horizontal selected-chip strip remains usable as the approved V2 pattern
- equipment/body filter pages render at `360 x 954`
- 04D remains visually intact after text correction
- 04E / 04F render correctly at restored `360 x 954`
- 04H attachment picker remains visually intact with dividers and synchronized base-list samples

No blocking regression remains.

## Final result

**PASS — GROUP 04 CLOSED**

This closes the Product/UX + Figma Group 04 screen track.

Not closed by this result:

- derived 211-row Production workbook/runtime DB regeneration
- exact Production attachment allowlists / canonical IDs / media mapping
- Cursor implementation

These remain separate deferred tracks.

## Next track

Resume Analysis from:

`canonical muscle/body-part taxonomy -> practical front/back body-map regions mapping`

Relevant existing decisions:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

**NO CURSOR IMPLEMENTATION HANDOFF.**
