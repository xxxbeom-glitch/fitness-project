# Cable Attachment Recording & Active Workout Card — 2026-09-03

**Status:** PO APPROVED
**Scope:** 케이블 / 풀리 운동의 손잡이(attachment) 선택과 Active Workout 카드 동작

이 문서는 2026-09-03 Product Owner가 승인한 케이블 손잡이 UX 방향을 기록한다.

> 이 결정은 `docs/ux-decisions/2026-09-02-exercise-db-normalization.md`에 있던 `오버핸드 / 뉴트럴 / 언더핸드` 중심의 선택형 grip 가정을 **supersede**한다. 당시 `grip` 용어를 서로 다르게 이해한 상태에서 정리된 내용이며, 이번 결정에서 제품이 기록하려는 대상은 손바닥 방향이 아니라 **케이블에 장착하는 손잡이 / attachment**임을 명확히 한다.

## 1. 사용자 용어

사용자-facing 기본 용어는 **`손잡이`**를 사용한다.

내부 데이터 / 개발 용어는 `attachment`를 권장한다.

이번 기능이 의미하는 예:

- 스트레이트 바
- 와이드 랫 바
- 맥그립 클로즈
- 맥그립 미디엄
- 맥그립 와이드
- V바
- 로프

`오버핸드 / 언더핸드 / 뉴트럴`처럼 손바닥 방향을 뜻하는 grip은 이번 선택 UI의 기본 대상이 아니다.

## 2. 루틴에서의 손잡이 선택

손잡이 기록을 지원하는 운동은 **운동을 추가하는 흐름 안에서 손잡이를 선택**한다.

예:

`운동 추가 → 랫풀다운 선택 → 손잡이 선택 → 세트 구성 → 루틴 카드 추가`

같은 날 같은 운동을 손잡이 2개로 할 계획이면 하나의 카드 안에 숨기지 않고 **처음부터 카드 2개**로 둔다.

예:

1. `랫풀다운 · 맥그립 미디엄`
2. `랫풀다운 · 스트레이트 바`

각 카드는 자신의 세트 수 / 목표 kg / 횟수 구성을 가진다.

### 2.1 루틴 카드 표시 — 2026-09-08 PO clarification

손잡이를 운동 추가 단계에서 선택했더라도, 생성된 루틴 카드에서는 **선택 결과를 작은 상태 chip으로 표시**한다.

단, 카드 헤더에 불필요한 두 번째 설명 줄은 두지 않는다.

표시 원칙:

- 일반 운동: `부위 tag + 운동명`
- 손잡이 선택 운동: `부위 tag + 손잡이 status chip + 운동명`
- 예: `등` + `맥그립 미디엄` / `랫풀다운`
- 카드 아래에 이미 `SET / KG / REPS`가 있으면 `3세트 · 8–12회` 같은 중복 요약 문구는 운동명 아래에 반복하지 않는다
- 손잡이 chip은 **선택 결과 표시용**이며 카드 안에서 손잡이를 다시 선택하거나 변경하는 컨트롤이 아니다
- 손잡이가 없는 운동에는 빈 보조줄이나 빈 chip을 만들지 않는다
- 운동명 자체에 손잡이 종류가 이미 포함된 별도 canonical exercise라면 같은 정보를 별도 chip으로 다시 반복하지 않는다

Figma 적용 기준은 `docs/ux-decisions/2026-09-08-routine-figma-03-checkpoint.md`를 따른다.

## 3. Active Workout 카드 원칙

Active Workout에서 **카드 하나 = 오늘 실제로 수행할 하나의 운동 블록**이다.

손잡이는 카드 내부에 작은 chip / label 형태로 표시한다.

예:

`랫풀다운  [맥그립 미디엄]`

이 chip은 **상태 표시용이며 수정 UI가 아니다.**

운동 진행 중 기존 카드에서 손잡이를 다른 손잡이로 바꾸는 기능은 제공하지 않는다.

각 카드에는 기존 Active Workout 구조를 그대로 유지한다.

- 세트
- 이전 기록
- kg
- 횟수
- 완료 체크
- 세트 추가

같은 운동을 손잡이 2개로 하기로 했다면 두 카드가 모두 운동 목록에 계속 보여야 한다. 두 번째 손잡이를 사용자가 기억해서 탭 전환해야 하는 구조는 사용하지 않는다.

## 4. 운동 중 다른 손잡이로 더 하고 싶을 때

기존 카드를 수정하지 않는다.

다음 흐름으로 **새 카드**를 추가한다.

`운동 추가 → 원하는 운동 선택 → 손잡이 선택 → 새 카드 추가`

예:

이미 `랫풀다운 · 맥그립 미디엄`을 수행 중인데 스트레이트 바로 추가 수행하고 싶다면:

- 기존 `랫풀다운 · 맥그립 미디엄` 카드는 그대로 유지
- `운동 추가`에서 랫풀다운 선택
- `스트레이트 바` 선택
- `랫풀다운 · 스트레이트 바` 새 카드 생성

기존 카드의 세트나 기록을 새 손잡이로 변환하거나 덮어쓰지 않는다.

## 5. 기록 안정성 원칙

손잡이는 카드가 생성될 때 그 카드의 기록 맥락으로 고정된다.

- 완료한 세트의 손잡이가 나중에 바뀌지 않음
- 손잡이별 이전 기록이 다른 카드와 섞이지 않음
- 같은 운동의 여러 손잡이를 수행해도 각각 완료 여부를 명확히 확인 가능
- 운동 중 카드의 기록 기준이 갑자기 바뀌지 않음

잘못된 손잡이로 카드를 추가한 경우, 기록 중인 카드의 손잡이를 변경하는 것보다 **잘못 추가한 카드를 삭제하고 올바른 손잡이로 다시 추가하는 단순한 규칙**을 기본으로 한다.

## 6. Exercise identity와의 관계

이 UX 결정만으로 모든 attachment 변형을 하나의 exercise identity로 합치지 않는다.

예를 들어 Cable Bar Pushdown / Cable Rope Pushdown처럼 실제 운동명과 수행이 별도 운동으로 통용되는 경우는 기존 normalization 원칙에 따라 별도 exercise identity로 유지할 수 있다.

반대로 랫풀다운처럼 같은 운동 안에서 손잡이를 기록 차원으로 다루기로 한 경우에는 같은 canonical exercise 아래에서 attachment별 수행 카드 / 이전 기록을 관리할 수 있다.

정확히 어떤 운동이 attachment 선택을 지원하고 어떤 attachment 목록을 노출할지는 DB / asset 작업 재개 시 별도 mapping으로 확정한다.

## 7. 현재 보류 항목

아래는 이번 UX 승인에 포함되지 않는다.

- 전체 attachment taxonomy / 표준 이름
- 운동별 허용 attachment 목록
- 브랜드명 `MAG / 맥그립`을 canonical 명칭으로 직접 사용할지 generic 명칭과 병기할지
- 기존 구매 DB의 `neutral / underhand` source row를 어떻게 다시 정규화할지
- attachment별 PR / 분석 상세 계산 규칙

위 항목은 Exercise DB / asset 작업 HOLD 해제 후 재검수한다.

## 8. 2026-09-10 Group 04 picker refinement

Group 04의 실제 운동 추가 UX를 마무리하면서 다음 **MVP UI/interaction policy**를 확정한다.

### 8.1 Global attachment list를 그대로 노출하지 않는다

케이블 손잡이 시장에는 스트레이트 바, 랫 바, V/triangle 계열, 로프, 싱글 핸들, 다양한 multi-angle/ergonomic grip 등 변형이 많고, 같은 계열 안에서도 폭과 손목/손바닥 각도가 여러 형태로 나뉜다.

따라서 앱에서 모든 손잡이를 한 번에 보여주는 거대한 전역 목록을 만들지 않는다.

- canonical attachment data는 내부적으로 확장 가능하게 유지
- 사용자에게는 **현재 선택한 운동에서 허용/권장하는 attachment만 1단계 목록으로 노출**
- 운동별 allowlist는 canonical exercise ID 기준으로 매핑
- 구매 media의 파일명이 이 allowlist/taxonomy를 결정하지 않음
- media는 해당 attachment를 실제로 식별할 수 있을 때만 context media로 연결

### 8.2 브랜드명은 canonical identity로 고정하지 않는다

`MAG / 맥그립`처럼 특정 브랜드에 종속된 명칭은 canonical attachment ID의 기준으로 고정하지 않는다.

- 필요하면 검색 alias / 사용자 입력값 / 내부 synonym으로 보조 가능
- canonical 이름은 가능한 한 실제 형태/폭/방향을 설명하는 generic 명칭을 우선
- 브랜드 제품 자체를 정확히 기록하려는 사용자는 `직접 입력`을 사용할 수 있음

이 원칙 때문에 Figma 샘플은 `뉴트럴 그립 · 클로즈 / 미디엄 / 와이드`처럼 generic label을 사용한다. 이 샘플 문구가 전체 DB taxonomy의 완전한 목록을 의미하지는 않는다.

### 8.3 직접 입력 fallback

각 attachment picker의 마지막에는 `직접 입력`을 제공한다.

흐름:

`손잡이 선택 → 직접 입력 → 손잡이 이름 입력 → 사용하기`

MVP 규칙:

- 직접 입력값은 사용자가 만들고 있는 해당 운동 카드/기록 context에 저장
- 공용 canonical attachment taxonomy에 자동 승격하지 않음
- 입력 문자열만으로 기존 canonical attachment와 자동 merge하지 않음
- 입력 문자열만으로 특정 media를 자동 연결하지 않음
- 사용자별 custom attachment 라이브러리/자동완성/관리 기능은 MVP 범위 밖이며 실제 반복 사용 데이터가 생긴 뒤 검토

### 8.4 Selection behavior

- picker를 처음 열면 미선택 상태
- preset option을 탭하면 해당 attachment를 선택하고 기존 운동 추가 흐름으로 복귀
- `직접 입력`을 탭하면 direct-input support state로 이동
- 입력 후 `사용하기`를 누르면 custom attachment context로 복귀
- 별도 `적용` 버튼을 추가하지 않는다

### 8.5 Canonical Figma

Page:

- `04 운동 목록 · 상세` — node `233:2075`

States:

- `04H_Exercise_Attachment_Selection` — node `170:2174`
- `04H_Custom_Attachment_Input` — support state added 2026-09-10

04H 배경은 canonical `04A_Search`를 그대로 사용하도록 정리했다.

현재 랫풀다운 UI 샘플:

- 스트레이트 바
- 와이드 랫 바
- 뉴트럴 그립 · 클로즈
- 뉴트럴 그립 · 미디엄
- 뉴트럴 그립 · 와이드
- V바
- 직접 입력

이 목록은 **랫풀다운 UI 샘플/allowlist 예시**이며 전역 exhaustive taxonomy가 아니다. 실제 Production exercise별 allowlist는 Exercise DB data QA에서 별도로 확정한다.

## Remaining data boundary

Group 04에서 attachment picker의 **UI/interaction contract는 닫을 수 있다.**

다만 아래 데이터 작업은 계속 별도 OPEN으로 남긴다.

- Production exercise별 attachment allowlist
- canonical attachment ID/name 전체 목록
- 기존 source `neutral / underhand / attachment` row 재정규화
- attachment별 media mapping
- attachment별 PR / 분석 상세 계산 규칙
