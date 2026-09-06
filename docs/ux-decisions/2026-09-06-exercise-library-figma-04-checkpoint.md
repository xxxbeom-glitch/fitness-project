# Exercise Library / Search Figma Group 04 Checkpoint — 2026-09-06

**Status:** IN PROGRESS / DESIGN QA CHECKPOINT
**Scope:** Figma `GROUP_04_운동 목록 / 상세`의 현재 정리 상태, 확정 구조, 미확정 제안, 다음 QA 순서

## Canonical design target

Figma file:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=34-1880`

Group:

- `GROUP_04_운동 목록 / 상세` — node `34:1880`

현재 04 그룹은 A~H 8개 상태로 정리되어 있다.

1. `04A` 운동 검색 / 추가
2. `04B` 운동 여러 개 선택 중
3. `04C` 검색 결과 없음
4. `04D` 운동 상세 / 운동 정보
5. `04E` 직접 운동 만들기
6. `04F` 직접 만든 운동 수정
7. `04G` 운동 상세 / 최근 기록
8. `04H` 운동 선택 → 손잡이 바텀시트

## 1. Exercise Detail D/G — FIGMA ALIGNED WITH APPROVED POLICY

기존 승인 문서 `2026-09-04-exercise-detail-scope.md`의 2탭 구조를 Figma에 맞췄다.

한 개의 Exercise Detail 화면이 있고 상태만 다르다.

- `04D` = `운동 정보` 탭 선택 상태
- `04G` = `최근 기록` 탭 선택 상태

정리된 사항:

- D/G 모두 동일 운동명 `벤치프레스` 예시로 통일
- D에 `운동 정보 / 최근 기록` 탭 추가
- D에 있던 별도 `내 최근 기록 / 기록 전체 보기` 중복 블록 제거
- G는 `최근 기록` 탭 상태 유지
- 두 화면은 별도 IA가 아니라 같은 상세 화면의 탭 상태다

관련 승인 문서:

- `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`

## 2. Attachment H/I duplicate cleanup — COMPLETE

이전 Figma에는 손잡이 바텀시트 표현이 04H/04I로 중복되어 있었다.

정리 결과:

- 이전 04H 삭제
- 이전 04I를 `04H`로 승격
- canonical card: `CARD_04H` — node `170:2169`
- screen name: `04H_Exercise_Attachment_Selection`
- 최종 표현 목적: **운동 검색/선택 흐름에서 attachment 지원 운동을 선택하면 손잡이 선택 바텀시트를 보여주는 상태**
- `04I` 이름/라벨은 기존 attachment 중복 상태에서 제거됨

레이아웃 QA:

- top-level card overlap: 없음
- group out-of-bounds: 없음

관련 승인 문서:

- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

## 3. Attachment current refinement — PARTIALLY LOCKED / TAXONOMY OPEN

기존 승인 정책에서 제품 사용자 용어는 `손잡이`, 내부 용어는 `attachment`다.

이번 검토에서 추가로 확인한 방향:

- 구매 Gym Animations 파일명이 앱의 손잡이 taxonomy를 결정해서는 안 된다.
- 실제 헬스장에서 사용되는 손잡이 경우의 수를 제품 기준으로 보고, 구매 media는 가능한 범위에서 연결한다.
- 같은 canonical 운동 안에서 attachment만 달라지는 경우에는 운동명을 불필요하게 별도 exercise로 증식시키지 않는 방향을 유지한다.
- media가 손잡이를 정확히 식별할 수 있을 때는 해당 media-context를 기본 표현으로 사용할 수 있다.
- media가 generic family 수준만 식별되면 Close/Medium/Wide 같은 세부형을 임의로 특정 media와 1:1이라고 주장하지 않는다.

현재 **미확정 / 추가 결정 필요**:

- 운동별 실제 허용 손잡이 전체 목록
- MAG 계열의 `클로즈 / 미디엄 / 와이드` 및 추가 세부형 구조
- 1단계 목록 vs 계층형 선택 구조
- 사용자가 원하는 손잡이가 없을 때 `직접 입력`을 최종 UI에 어떻게 노출할지
- 직접 입력값의 재사용/저장 정책
- 04H에 표시할 최종 예시 옵션과 copy

따라서 현재 04H의 기존 예시 5개 옵션은 **최종 taxonomy로 간주하지 않는다.**

## 4. Exercise search list reference review — MOBBIN REVIEWED

운동 검색/추가 화면의 리스트 표현을 Mobbin에서 비교했다.

검토한 대표 패턴:

- Hevy: thumbnail + exercise name + body-part metadata + add action
- Bevel: thumbnail + exercise name + equipment metadata + `+`, custom exercise entry를 list 안에 배치
- Peloton Strength+: thumbnail + name + equipment + checkbox, multi-select 후 하단 add CTA
- Equinox+: thumbnail + name + muscle/equipment secondary line
- MyFitnessPal / Garmin: text-heavy compact list
- WHOOP: card-style row

현재 추천 synthesis:

- `운동 썸네일`
- `운동명`
- 두 번째 줄에 `부위 · 장비`
- 오른쪽 `+`
- 카드형보다 얇은 separator 기반 flat list
- multi-select에서는 `+`를 선택 상태/check로 바꾸고 하단에 선택 개수 기반 추가 CTA

### 04I LIST PROPOSAL — NOT PO APPROVED

비교를 위해 별도 proposal을 Figma에 만들었다.

- card: `CARD_04I_LIST_PROPOSAL`
- node: `207:1233`
- screen: `04I_Search_List_Proposal`
- 기존 `04A`는 변경하지 않았다

Proposal row 예시:

- 랫풀다운 — `등 · 케이블`
- 벤치프레스 — `가슴 · 바벨`
- 레그 익스텐션 — `하체 · 머신`
- 덤벨 컬 — `이두 · 덤벨`
- 케이블 크런치 — `코어 · 케이블`
- 사이드 레터럴 레이즈 — `어깨 · 덤벨`

이 proposal은 **Product Owner 비교용이며 아직 canonical/approved가 아니다.**

## 5. Group 04 QA — OPEN ITEMS

04 그룹 전체 QA에서 아직 닫지 않은 항목:

### 04A / 04B

현재 mock 데이터의 운동명과 부위 tag가 잘못 매칭된 항목이 있다.

예:

- 레그 익스텐션 → `코어`로 표시
- 덤벨컬 → `하체`로 표시
- 케이블 크런치 → `등`으로 표시
- 사이드 레터럴 레이즈 → `가슴`으로 표시

또한 `코어` 운동 예시는 존재하지만 상단 필터에는 `코어`가 없다.

### 04C

검색어 예시가 `레그프레스`인데 결과 없음 상태로 표현되어 있어 mock example로 부적절하다.

### 04D

2탭 구조는 맞췄지만 승인된 Exercise Detail 정보 중 다음을 추가 검토해야 한다.

- 장비
- 주 근육 / 보조 근육 구분
- 핵심 체크포인트 / 주의점

### 04E / 04F

Custom exercise의 MVP structured metadata 정책 대비 현재 화면에 부족한 항목:

- 장비
- 기록 방식 / recording type

관련 정책:

- `docs/08_DECISIONS.md` DEC-012
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

### 04H

구조는 중복 제거했지만 최종 손잡이 taxonomy와 copy가 아직 open이다.

## 6. Next action

새 대화에서 바로 다음 순서로 진행한다.

1. **04I list proposal을 Product Owner가 기존 04A와 비교**
2. 승인 시 04A/04B에 같은 list pattern을 정식 반영; 미승인 시 proposal 폐기
3. 04A/B mock 데이터와 filter QA 정리
4. 04C no-result 예시 정리
5. 04D approved metadata 보완
6. 04E/F custom exercise metadata 보완
7. 04H attachment taxonomy / direct-input UX 확정 후 최종 반영
8. Group 04 전체 layout/state QA 후 종료 판단

## Boundary

- 현재는 Figma / Product UX 단계다.
- Cursor 구현 handoff 없음.
- `04I_LIST_PROPOSAL`은 비교용 proposal이며 승인되지 않았다.
- Analysis body-area granularity 작업은 이 Figma 04 pass가 끝날 때까지 재개 지점으로 보존한다.
