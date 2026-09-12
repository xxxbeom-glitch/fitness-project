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
4. 오늘의 신기록 1개
5. `기록 상세 보기 / 홈으로 돌아가기`

완료 화면에는 다음을 다시 넣지 않는다 unless later Product Owner decision explicitly changes the shell:
- full performed-exercise list
- carousel
- multiple charts
- multiple analysis cards
- dense next-step/comparison copy

상세 기록·차트·분석은 `기록 상세 보기` 및 별도 분석 흐름에서 다룬다.

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
- metric values → `display/02` — SUIT Bold 24/32 + `text/primary`
- personal-record label → `label/02` + `text/secondary`
- personal-record value → `heading/02` — SUIT Bold 14/20 + `text/primary`
- bottom CTA typography remains the existing local `button/cta`

Small notation cleanup only:
- `13개` → `13세트`
- `벤치프레스 10KG X 12회` → `벤치프레스 10kg × 12회`

No new text style, spacing token, radius token, or completion component family was created.

## Component / binding QA

Focused QA on `최종화면`:

- local `CompletionStatusIcon` instance → main `742:901`, remote = false
- local `DualCTA` instance → main `638:3344`, remote = false
- root/content/summary/grid/card spacing uses existing Fitness Variables
- surfaces/radius/colors continue using existing Fitness Variables
- metric values resolve to local `display/02`
- personal-record value resolves to local `heading/02`
- metric/personal-record labels resolve to local `label/02` and `text/secondary`
- screenshot read-back at 360×780 = PASS
- no new external component dependency introduced

Result: **PASS**

## NEXT OPEN ITEM

The common completion shell is now locked.

Next Group 06 work:

**Review the existing conditional completion states only as needed against this locked common shell.**

Reference:
- `REORG_06_CONDITIONAL_STATES` — `163:2142`

Do not reopen the old carousel, chart drafts, or A/B/C shell comparison without a concrete conflict or Product Owner request.

**NO CURSOR IMPLEMENTATION HANDOFF.**
