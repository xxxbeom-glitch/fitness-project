# Figma Local Design System — 2026-09-06

**Status:** PO APPROVED / FIGMA APPLIED
**Figma file:** `W3lZurXCXbThP67rF2xk2b`

## Decision

현재 fitness tracker Figma 파일은 외부 `Tracker APP` 라이브러리에서 가져온 스타일/변수 정의를 직접 기준으로 사용하지 않는다. 현재 프로젝트에서 관리 가능한 로컬 Variable / Text Style / Effect Style을 Source로 두고, 기존 화면의 override 가능한 스타일/변수 참조를 로컬 자산으로 재바인딩한다.

외부 Component 자체는 이번 범위에서 detach/rebuild하지 않는다. Component 구조/Variant API는 기존 외부 원본을 유지하되, 현재 파일 내 실제 화면과 관리 UI에서 override 가능한 토큰/스타일 참조는 로컬 기준으로 전환한다.

## Local variable collections

총 5개 Collection / 73개 Variable.

- `Primitives`: 18
- `Colors`: 29 — mode `Dark`
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

## Effect

- `glass/elevated`를 로컬 Effect Style로 이전한다.

## Figma management

`MVP_공용_UI` 페이지에서 관리한다.

- `BUTTON_SYSTEM_MANAGEMENT`
  - Compact / CTA 사용 규칙
  - `button/compact`, `button/cta` 명시
- `LOCAL_FOUNDATIONS_MANAGEMENT`
  - 29 semantic colors
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

QA 결과 위 대상 페이지에서 확인 가능한 외부 Variable / Text Style / Effect Style 잔존 참조는 각각 `0`이며, 재바인딩 실패도 `0`이다.

## Scope boundary

이번 결정은 **style / variable ownership 이전**이다. 외부 Component definition 자체의 로컬 복제는 포함하지 않는다. 향후 공용 Component까지 프로젝트 자체 library로 완전히 독립해야 하는 시점에 Component/Variant migration을 별도 작업으로 진행한다.
