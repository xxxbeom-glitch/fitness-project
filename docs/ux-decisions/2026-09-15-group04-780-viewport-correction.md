# Group 04 — 360×780 Baseline Height Correction

**Date:** 2026-09-15  
**Status:** PO CLARIFIED / FIGMA CORRECTED / REGRESSION QA PASS / NO CURSOR HANDOFF

## Rule

Group 04의 기본 화면 기준 높이는 `360 × 780`이다.

`780`은 모든 화면을 강제로 잘라 맞추는 최대 높이가 아니다.

- 실제 유한 콘텐츠가 780 안에 끝나면 top-level screen을 `360 × 780`으로 맞춘다.
- 실제 유한 콘텐츠가 780을 넘으면 콘텐츠를 누르거나 숨기지 않고 필요한 자연 높이만큼 top-level screen을 늘릴 수 있다.
- 검색 결과, 운동 기록처럼 데이터 양이 계속 늘어나는 화면은 `360 × 780` 화면 안에서 해당 content frame을 vertical scroll로 처리할 수 있다.
- 화면을 늘릴지 내부 스크롤을 사용할지는 콘텐츠 성격에 따라 결정하며, 모든 화면에 하나의 규칙을 강제로 적용하지 않는다.
- 화면 높이를 맞추기 위해 텍스트, 리스트, 섹션, footer를 압축하거나 잘라내지 않는다.
- root `minHeight=780` 같은 강제 제약은 사용하지 않는다.

이 기준은 이전 `360 × 954` 일괄 표기와, 모든 Group 04 root를 무조건 `360 × 780`으로 고정한다고 기록한 이전 문구를 supersede한다.

## Figma correction

Canonical file: `W3lZurXCXbThP67rF2xk2b`  
Page: `04 운동 목록 · 상세` — `233:2075`

강제 780 조정으로 생긴 실제 regression을 화면별로 다시 확인하고 수정했다.

### 780 유지 — 콘텐츠가 맞거나 원래 스크롤 성격인 화면

- `04A_Search` — `360 × 780`, 검색 목록 내부 vertical scroll
- `04B_Search_Selected` — `360 × 780`, 검색 목록 내부 vertical scroll
- `04D_Exercise_Detail_History` 및 recording-type History states — `360 × 780`, 기록 목록 내부 vertical scroll
- `04E_Custom_Create` — `360 × 780`
- `04F_Custom_Edit` / `04F_Custom_Edit_HistoryLocked` — `360 × 780`
- Growth 대표 states — `360 × 780`
- Empty states — `360 × 780`
- attachment/search 등 동적 목록 화면 — `360 × 780`, 필요한 영역만 vertical scroll

### 780보다 크게 복구 — 유한 콘텐츠가 실제로 더 필요한 화면

- `04D_Exercise_Detail_Info` — `360 × 894`
  - `ExerciseDetailContent` = `722px`
  - 마지막 `핵심 체크포인트`까지 표시
  - 기존 bottom padding `24px` 유지
- `04K_Custom_SecondaryMuscle_Select` — `360 × 834`
  - `SelectionPageContent` = `716px`
  - 마지막 `기타` 옵션까지 표시
  - 기존 bottom padding `20px` 유지

### Additional regression fix

- `04B_Search_Selected`의 `SelectionFooter`가 954px 좌표를 유지해 780 viewport 아래로 잘려 있던 문제 수정
- footer를 `y=680`, `height=100`으로 복구하여 화면 하단에 정상 노출
- scroll content는 footer 뒤 safe area를 유지하는 기존 패턴을 따른다

## QA

- `04D_Exercise_Detail_Info` — `360 × 894`, 전체 콘텐츠 및 bottom padding 확인
- `04K_Custom_SecondaryMuscle_Select` — `360 × 834`, 전체 옵션 확인
- `04B_Search_Selected` — `360 × 780`, footer bottom=`780` 확인
- `04E`, `04F`, `04F_HistoryLocked`, Growth 대표 상태는 `780`에서 콘텐츠 눌림/잘림 없음 확인
- search/history처럼 데이터가 늘어나는 화면은 내부 vertical scroll + clipping 유지
- root `minHeight=780` 강제 제약 없음

## Development boundary

Product Owner가 개발 전환을 명시하기 전까지 Cursor/implementation handoff를 시작하지 않는다.
