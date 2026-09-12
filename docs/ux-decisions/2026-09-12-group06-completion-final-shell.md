# Group 06 Workout Completion — Final Shell

**Date:** 2026-09-12  
**Status:** PRODUCT/UX APPROVED · FIGMA QA PASS · COMMON COMPLETION SHELL LOCKED  
**Scope:** Group 06 `06 운동 완료` 공통 완료 화면 확정 및 디자인시스템 정리

## Product Owner decision

Product Owner가 `06 운동 완료` 페이지에 직접 만든 `최종화면` 구성을 최종 공통 완료 화면 방향으로 승인했다.

따라서 이전 carousel/full-dashboard/chart/A-B-C exploration은 더 이상 canonical main 후보가 아니며 reference/archive로 유지한다.

공통 완료 화면의 역할은 다음으로 lock한다.

1. 운동 완료 상태 확인
2. 올해 누적 운동 횟수 안내
3. 오늘 기록 핵심 수치 4개
   - 총 볼륨
   - 총 운동 시간
   - 총 운동 수
   - 총 진행 세트
4. 조건부 `오늘의 신기록` highlight
5. `기록 상세 보기 / 홈으로 돌아가기`

완료 화면에는 다음을 다시 넣지 않는다 unless later Product Owner decision explicitly changes the shell:
- full performed-exercise list
- carousel
- multiple charts
- multiple analysis cards
- dense next-step/comparison copy

상세 기록·차트·분석은 `기록 상세 보기` 및 별도 분석 흐름에서 다룬다.

## Personal-record conditional policy — PO APPROVED

`오늘의 신기록`은 항상 노출하는 고정 카드가 아니라 실제 비교 가능한 PR이 발생했을 때만 노출하는 조건부 highlight다.

- 비교 가능한 신기록이 없으면 `Card_PersonalRecord` 전체를 숨긴다.
- `신기록 없음`, 아쉬움/실패성 문구, 빈 placeholder는 표시하지 않는다.
- 해당 운동의 첫 수행은 비교 기준이 없으므로 신기록으로 계산하지 않는다.
- 신기록이 1개든 여러 개든 완료 화면에는 **대표 신기록 1개만** 표시한다.
- 완료 화면에는 신기록 총 개수나 `외 N개`를 표시하지 않는다.
- 전체 신기록은 `기록 상세 보기`에서 확인한다.

### Representative PR selection — MVP LOCK

여러 신기록 중 대표 1개를 고를 때 서로 다른 운동/recording type의 향상 폭을 점수화하거나 비교하지 않는다.

**1단계 — 대표 운동 선택**
- 현재 운동 세션의 표시 순서 기준으로, 유효한 PR이 발생한 첫 번째 운동을 대표 운동으로 선택한다.
- 사용자가 실제 수행을 순서 밖에서 했더라도 대표 선택은 세션의 현재 운동 표시 순서를 따른다.
- 이유: recording type 간 `얼마나 더 대단한 PR인가`를 억지로 환산하지 않고, 항상 동일하고 설명 가능한 결과를 만들기 위해서다.

**2단계 — 같은 운동에서 여러 PR이 발생했을 때 대표 기록 선택**

`weight_reps`
1. 이전 기록보다 높은 **최고 중량 PR**이 있으면 그것을 우선한다.
2. 최고 중량 PR이 없고 동일 중량에서 **반복수 PR**이 있으면 그 기록을 사용한다.
3. 반복수 PR이 여러 개면 더 높은 중량의 기록을 우선하고, 같은 중량이면 더 많은 반복수를 우선한다.
4. e1RM/추정 1RM이나 별도 점수는 MVP 대표 PR 선택에 사용하지 않는다.

`reps`
- 이전 최고 기록보다 많은 **최대 반복수**를 대표 PR로 사용한다.

`duration`
- 이전 최고 기록보다 긴 **최대 수행 시간**을 대표 PR로 사용한다.

`assisted_weight_reps`
1. 이전 기록보다 낮은 **최소 보조중량 PR**이 있으면 그것을 우선한다. 보조중량은 낮을수록 더 어려운 수행으로 본다.
2. 최소 보조중량 PR이 없고 동일 보조중량에서 반복수 PR이 있으면 그 기록을 사용한다.
3. 반복수 PR이 여러 개면 더 낮은 보조중량의 기록을 우선하고, 같은 보조중량이면 더 많은 반복수를 우선한다.

**공통 tie / validity rule**
- 이전 최고와 같은 값은 PR이 아니다.
- 완료 처리된 세트만 PR 판정 대상으로 사용한다.
- 같은 조건의 PR 후보가 완전히 동률이면 세션 표시 순서상 먼저 나온 세트를 사용한다.
- reserved recording type은 MVP 완료 화면 대표 PR 정책 범위 밖이다.

Figma comparison cases:
- `REORG_06_PR_CASES` — `819:696`
- 신기록 없음 `06A_PR_0_None` — `819:702`
- 신기록 1개 `06A_PR_1_Single` — `819:733`
- 신기록 2개 이상이지만 대표 1개만 노출 `06A_PR_Multi_RepresentativeOnly` — `819:762`

The canonical main remains `최종화면`; the three frames above are conditional comparison/state references, not separate navigation screens.

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `06 운동 완료` — `233:2077`
- canonical completion main: `최종화면` — `793:15748`
- local component library: `LOCAL_COMPONENT_LIBRARY` — `635:788`
- completion status component: `CompletionStatusIcon` — `742:901`
- bottom action component: `DualCTA` — `638:3344`

Previous `06A_Completion_Carousel` (`163:2031`) and exploration drafts remain reference/archive only.

## Design-system refinement applied

The Product Owner's rough final frame was refined in place without changing its approved content hierarchy.

### Structure / Auto Layout

- frame remains `360×780`
- root converted to vertical Auto Layout
- `StatusArea_Spacer` — 62
- `CompletionContent` — 620
- `CompletionFooter` — 98
- content horizontal inset = `spacing/20`
- content top padding = `spacing/24`
- `CompletionSummary` gap = `spacing/24`
- summary → personal-record separation = `spacing/32`
- metric grid row/column gap = `spacing/12`
- metric/personal-record card internal gap = `spacing/6`
- metric/personal-record card padding = vertical `spacing/12`, horizontal `spacing/16`
- card radius/fill continue using existing local Fitness bindings

Obsolete hidden scratch card and redundant completion wrappers inside `최종화면` were removed.

### Typography / hierarchy

Reused existing local Fitness text styles:

- completion title → `display/01` — SUIT Bold 20/28
- completion subtitle → `body/02` — SUIT Medium 13/18
- metric labels → `label/02` — SUIT Medium 12/16 + `text/secondary`
- metric values → `display/01` — SUIT Bold 20/28 + `text/primary`
- personal-record label → `label/02` + `text/secondary`
- personal-record value → `heading/02` — SUIT Bold 14/20 + `text/primary`
- bottom CTA typography remains the existing local `button/cta`

Small notation cleanup only:
- `13개` → `13세트`
- `벤치프레스 10KG X 12회` → `벤치프레스 10kg × 12회`

No new text style, spacing token, radius token, or completion component family was created.

## Component / binding QA

Focused QA on `최종화면` and PR conditional cases:

- local `CompletionStatusIcon` instance → main `742:901`, remote = false
- local `DualCTA` instance → main `638:3344`, remote = false
- root/content/summary/grid/card spacing uses existing Fitness Variables
- surfaces/radius/colors continue using existing Fitness Variables
- metric values resolve to local `display/01`
- personal-record value resolves to local `heading/02`
- metric/personal-record labels resolve to local `label/02` and `text/secondary`
- PR cases are clones of the locked common shell; canonical main was not replaced
- multi-PR case now visually matches the representative-only policy; no count / `외 N개` copy remains
- 3-case comparison screenshot read-back = PASS
- no new external component dependency introduced

Result: **PASS**

## NEXT OPEN ITEM

The common completion shell and PR conditional behavior are locked.

Next Group 06 Product/UX item:

**Decide how `총 볼륨` behaves when the completed session contains no volume-applicable work.**

After that, review the existing broader conditional completion states only as needed against the locked common shell.

Reference:
- `REORG_06_CONDITIONAL_STATES` — `163:2142`

Do not reopen the old carousel, chart drafts, or A/B/C shell comparison without a concrete conflict or Product Owner request.

**NO CURSOR IMPLEMENTATION HANDOFF.**
