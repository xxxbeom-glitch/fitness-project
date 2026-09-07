# Figma Local Design System — 2026-09-06

**Status:** PO APPROVED / FIGMA APPLIED
**Figma file:** `W3lZurXCXbThP67rF2xk2b`

## Decision

현재 fitness tracker Figma 파일은 외부 `Tracker APP` 라이브러리에서 가져온 스타일/변수 정의를 직접 기준으로 사용하지 않는다. 현재 프로젝트에서 관리 가능한 로컬 Variable / Text Style / Effect Style을 Source로 두고, 기존 화면의 override 가능한 스타일/변수 참조를 로컬 자산으로 재바인딩한다.

외부 Component 자체는 이번 범위에서 detach/rebuild하지 않는다. Component 구조/Variant API는 기존 외부 원본을 유지하되, 현재 파일 내 실제 화면과 관리 UI에서 override 가능한 토큰/스타일 참조는 로컬 기준으로 전환한다.

## Local variable collections

기존 기준은 총 5개 Collection / 73개 Variable이다. 2026-09-07 사용 규칙 v1에서 `text/on-brand` 1개를 추가하므로 적용 후 총 74개가 된다.

- `Primitives`: 18
- `Colors`: 29 → 30 (`text/on-brand` 추가)
- `Spacing`: 15
- `Radius`: 9
- `Border`: 2

### Binding model

- `Colors` semantic token은 가능한 경우 로컬 `Primitives`를 alias한다.
- `Primitives`는 picker 노출을 막기 위해 scope `[]`.
- `Spacing` → `GAP`
- `Radius` → `CORNER_RADIUS`
- Border width → `STROKE_FLOAT`
- Color token은 실제 쓰임에 따라 `FRAME_FILL`, `SHAPE_FILL`, `TEXT_FILL`, `STROKE_COLOR` 등으로 제한한다.
- `ALL_SCOPES`는 사용하지 않는다.

모든 로컬 Variable에는 WEB / Android / iOS code syntax를 설정한다.

## Local typography

기존 Tracker APP type ramp를 값 변경 없이 로컬화한다.

- `display/01` — SUIT Bold 20/28
- `display/02` — SUIT Bold 24/32
- `heading/01` — SUIT Bold 16/24
- `heading/02` — SUIT Bold 14/20
- `body/01` — SUIT Medium 14/20
- `body/02` — SUIT Medium 13/18
- `label/01` — SUIT Bold 12/16
- `label/02` — SUIT Medium 12/16
- `caption/01` — SUIT Medium 11/14
- `tag/01` — SUIT SemiBold 11/14

Button typography는 의미상 별도 스타일로 분리한다.

- `button/compact` — SUIT Medium 14/20
- `button/cta` — SUIT Bold 16/24

수치가 `body/01`, `heading/01`과 같더라도 Button 전용 스타일을 사용해 향후 버튼만 독립적으로 수정할 수 있게 한다.

# Foundation Usage Rules v1 — 2026-09-07

**Status:** PO APPROVED
**Pilot application scope:** `02 홈`만 우선 적용. 다른 페이지는 아직 이 규칙으로 일괄 수정하지 않는다.

이 규칙의 목적은 화면마다 타이포 크기·색·간격을 임의로 다시 판단하지 않고, 콘텐츠의 역할과 계층으로 토큰을 선택하게 하는 것이다.

## Typography usage

- `display/02` — 큰 KPI 숫자 / 가장 강한 수치. 일반 화면 제목이나 카드 제목에는 사용하지 않는다.
- `display/01` — 화면의 대표 제목 또는 강한 Hero 정보. 일반 카드·리스트 제목에는 사용하지 않는다.
- `heading/01` — 주요 섹션 제목 / 주요 카드 제목.
- `heading/02` — 리스트 항목 제목 / 작은 카드 제목.
- `body/01` — 주요 본문 / 일반 선택 항목.
- `body/02` — 날짜·개수·보조 설명 등 Secondary 정보.
- `label/01` — 작지만 강조가 필요한 상태·분류·짧은 정보.
- `label/02` — 카드 내부 메타정보 / 짧은 보조 설명.
- `caption/01` — 가장 낮은 우선순위의 보조 정보.
- `tag/01` — Tag / Chip 전용.
- `button/compact` — Compact Button 전용.
- `button/cta` — CTA Button 전용.

같은 크기와 줄높이를 공유하더라도 역할이 다르면 토큰을 섞지 않는다. 예를 들어 `body/01`과 `button/compact`가 모두 14/20이어도 버튼에는 `button/compact`만 사용한다.

## Text / color usage

- `text/primary` — 제목, 중요한 값, 사용자가 반드시 읽어야 하는 핵심 정보.
- `text/secondary` — 설명, 메타정보, 날짜, 보조 문장.
- `text/tertiary` — Caption, Hint, 낮은 우선순위 정보.
- `text/on-brand` — Primary Brand 배경 위 텍스트. `neutral/950`을 alias한다.
- `brand/primary` — Primary CTA, Selected/Active 상태, 핵심 Progress.
- `state/danger` — 삭제·종료 등 Destructive 의미.
- `state-bg/danger` — Danger 상태의 약한 배경.
- `tag/*` — 해당 근육 Tag에서만 사용.
- `heatmap/*` — Heatmap에서만 사용.

Background / border 역할:

- `bg/default` — 화면 기본 배경.
- `bg/surface` — 일반 카드 / 컨테이너.
- `bg/elevated` — Bottom Sheet, Modal 등 한 단계 떠 있는 영역.
- `border/default` — 명확한 경계가 필요한 컨트롤.
- `border/subtle` — 약한 카드 경계 / 구분선.

`bg/default`를 Primary 버튼 텍스트 색으로 사용하는 기존 우회 바인딩은 중단한다. Primary 버튼 텍스트는 `text/on-brand`를 사용한다.

## Spacing hierarchy

현재 숫자 Spacing token을 유지하되 일반 UI에서 다음 역할로 제한해서 사용한다.

- `spacing/2` — optical adjustment 같은 극소 예외.
- `spacing/4` — 제목↔메타정보, 아이콘↔라벨처럼 매우 강하게 묶인 관계.
- `spacing/6` — 제목↔설명문.
- `spacing/8` — 병렬 버튼 / 관련 컨트롤.
- `spacing/12` — 텍스트 묶음↔CTA, Section Header↔Content.
- `spacing/16` — 같은 컴포넌트 내부의 서로 다른 Content Group.
- `spacing/20` — 카드 padding / 화면 좌우 padding.
- `spacing/24` — 큰 카드 내부 Block 구분.
- `spacing/32` — 주요 Section↔Section / 화면 콘텐츠 상단 여백.
- `spacing/40`, `48`, `64` — Hero, Empty State 등 큰 레이아웃 분리.

`spacing/10`, `14`, `18`은 기존 호환용으로 유지하지만 새로운 일반 화면 설계의 기본 선택지로 쓰지 않는다. 특정 컴포넌트에서 명확한 이유가 있을 때만 예외적으로 사용한다.

## Home pilot mapping

`02 홈`을 이 규칙의 첫 적용 화면으로 사용한다.

- 루틴/진행 중 카드의 주요 제목 → `heading/01 + text/primary`
- 카드 내부 메타정보 → `label/02 + text/secondary`
- Home 주요 섹션 제목 → `heading/01 + text/primary`
- 최근 운동 리스트 제목 → `heading/02 + text/primary`
- 최근 운동 날짜 → `body/02 + text/tertiary`
- 큰 KPI 수치가 유지되는 경우 → `display/02 + text/primary`
- KPI 설명 → `caption/01 + text/tertiary`
- Primary Compact Button → `button/compact + text/on-brand`
- Secondary Compact Button → `button/compact + text/primary`
- 병렬 버튼 gap → `spacing/8`
- 카드 padding → `spacing/20`
- 카드 텍스트↔Action Row → `spacing/12`
- 화면 주요 section gap → `spacing/32`
- 화면 좌우 padding → `spacing/20`

Home에서 Product Owner가 수동으로 조정한 시각적 계층을 기준값으로 삼으며, 이번 pilot은 그 비주얼을 임의로 재설계하는 작업이 아니라 Auto Layout / Token binding을 이 규칙에 맞게 정규화하는 작업이다.

## Effect

- `glass/elevated`를 로컬 Effect Style로 이전한다.

## Figma management

`MVP_공용_UI` 페이지에서 관리한다.

- `BUTTON_SYSTEM_MANAGEMENT`
  - Compact / CTA 사용 규칙
  - `button/compact`, `button/cta` 명시
- `LOCAL_FOUNDATIONS_MANAGEMENT`
  - semantic colors
  - 12 typography styles
  - 15 spacing tokens
  - 9 radius tokens
  - 2 border tokens

## Rebinding result

다음 페이지의 override 가능한 외부 Variable / Text Style / Effect Style 참조를 로컬 자산으로 재바인딩했다.

- `Page 1` source/reference
- `01 로그인 · 첫 진입`
- `02 홈`
- `03 루틴`
- `04 운동 목록 · 상세`
- `05 운동 중`
- `06 운동 완료`
- `07 분석 · 운동 기록`
- `08 설정 · 계정`
- `MVP_공용_UI`

`MVP_전체_와이어프레임`은 사용 중인 style/variable reference가 없어 변경 대상이 아니다.

기존 QA 결과 위 대상 페이지에서 확인 가능한 외부 Variable / Text Style / Effect Style 잔존 참조는 각각 `0`이며, 재바인딩 실패도 `0`이다.

## Scope boundary

이번 결정은 **style / variable ownership + usage rule**이다. 외부 Component definition 자체의 로컬 복제는 포함하지 않는다.

2026-09-07 pilot에서는 새 usage rule을 **Home에만 적용**한다. 다른 화면은 Home pilot QA가 끝난 뒤 순차적으로 이 규칙에 맞춰 정리한다.
