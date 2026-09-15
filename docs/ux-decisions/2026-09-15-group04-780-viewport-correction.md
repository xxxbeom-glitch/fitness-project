# Group 04 — 360×780 Viewport Correction

**Date:** 2026-09-15  
**Status:** PO CLARIFIED / FIGMA CORRECTED / QA PASS / NO CURSOR HANDOFF

## Rule

Group 04의 기본 화면 viewport는 `360 × 780`이다.

- top-level screen frame은 기본적으로 `360 × 780` 고정 viewport로 유지한다.
- 화면 안의 실제 콘텐츠가 780을 초과할 수는 있다.
- 초과 콘텐츠를 보여주기 위해 top-level screen 자체를 Hug-height 또는 900px+로 늘리지 않는다.
- 초과 콘텐츠는 해당 content frame의 vertical scroll로 처리한다.
- content frame은 viewport 안의 남은 높이를 사용하고 `clipsContent=true`, `overflowDirection=VERTICAL`로 구성한다.
- 780 안에 끝나는 화면은 그대로 `360 × 780`에서 완료한다.

이 규칙은 Group 04의 이전 `360 × 954` 표기/QA 메모를 supersede한다.

## Figma correction

Canonical file: `W3lZurXCXbThP67rF2xk2b`  
Page: `04 운동 목록 · 상세` — `233:2075`

Corrected:

- Group 04 top-level 360px screens 28개를 `360 × 780` viewport로 정리
- 이전 수정 과정에서 잘못 추가된 root `minHeight=780` 제거
- `04A_Search`, `04B_Search_Selected`, `04C_Search_Empty`의 `SearchContent`를 vertical scroll + clipping으로 정리
- attachment overlay의 base search content도 동일하게 vertical scroll + clipping 적용
- detail/history/create/edit/selector 화면은 780 viewport 안에서 남은 영역을 scroll container가 사용
- Empty state 중앙 정렬은 남은 viewport 영역의 Auto Layout center 기준 유지

## QA

- Group 04 top-level screen count: 28
- non-780 root: 0
- accidental root minHeight: 0
- vertical-scroll frame with clipping disabled: 0
- representative screenshot read-back:
  - `04A_Search` — `360 × 780`
  - `04D_Exercise_Detail_History` — `360 × 780`, 내부 history scroll
  - `04K_Custom_SecondaryMuscle_Select` — `360 × 780`, 내부 options scroll

## Development boundary

Product Owner가 개발 전환을 명시하기 전까지 Cursor/implementation handoff를 시작하지 않는다.
