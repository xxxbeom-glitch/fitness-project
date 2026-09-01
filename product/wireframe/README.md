# LIFTLY Cumulative Wireframe

**Status:** CANONICAL
**Wireframe version:** `2026-09-01.6`
**Updated:** 2026-09-01

## Canonical source

`product/wireframe/index.html`

이 파일이 웹 와이어프레임의 원본이다. 로컬 임시 파일, 채팅에 생성된 HTML, 이전 Vercel deployment HTML은 원본이 아니다.

## Current visual scope

현재 Product Owner 검토 범위는 **신규 사용자 온보딩**이다.

현재 화면에 반영된 범위:

- 로그인
- 신규/기존 계정 분기 정책
- 기본정보: `성별(남성/여성) + 생년월일`
- 성별은 기존 52px 높이 영역을 **남성/여성 2등분 버튼**으로 표시
- 성별에 `응답 안 함` 옵션 없음
- 생년월일은 연령대/현재 나이 대신 실제 full date of birth를 저장
- 생년월일은 **화살표 없는 텍스트필드**로 표시
- 생년월일 placeholder/example: `1999-01-01`
- 시작 방식: `추천 루틴 받기 / 내 루틴 직접 만들기`
- 추천 설정 한 화면: `운동 목표 / 운동 경력 / 주당 가능일 / 운동 시간`
- 운동 목표 확정 선택지:
  - `근육 증가`
  - `체지방 감량`
  - `건강·체력 향상`
- `근력 향상`은 별도 첫 온보딩 목표에서 제외하고 이후 기록 기반 progression에서 다룸
- 운동 경력 확정 선택지:
  - `처음이에요`
  - `6개월 미만이에요`
  - `6개월~1년 미만이에요`
  - `1년 이상이에요`
- 주당 가능일 확정 선택지: `1일`~`7일`
- 주당 가능일의 의미: 사용자가 현실적으로 확보 가능한 **최대 일수**
- 운동 시간 확정 선택지: `30분 / 45분 / 60분 / 90분 이상`
- 운동 시간의 의미: 세트 간 휴식 포함, 별도 유산소 제외한 **최대 웨이트 트레이닝 세션 시간 예산**
- 네 추천 입력을 모두 선택했을 때 CTA 활성화 상태

현재 화면에서 의도적으로 제외 / 후속 설계:

- 추천 결과 상세 화면
- 주당 처방 횟수 -> routine split / routine count 매핑
- 각 목표가 실제 프로그램 변수에 주는 정확한 효과
- 운동시간별 정확한 exercise/set volume budget
- 생년월일 input masking / validation / error behavior
- 개인정보 고지/동의 및 최소연령 정책

## Canonical runtime

- Production URL: `https://liftly-wireframe.vercel.app`
- Vercel project: `liftly-wireframe`
- Vercel project ID: `prj_w7P1KrlqbzDq9dBQ0UcFh2VuQipG`
- Vercel team ID: `team_cAq2nylL00z8u39kpinhZXQa`

Machine-readable binding: `product/wireframe/PROJECT_BINDING.json`

## Canonical Figma

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

현재 웹 와이어프레임 공통 스타일은 Figma의 실제 design-system token/pattern을 최대한 따른다.

현재 확인된 주요 visual baseline:

- font: SUIT
- bg/default: `#0A0A0C`
- bg/surface: `#161618`
- bg/elevated: `#1E1E22`
- border: `#232326`
- text/primary: `#F0F0F2`
- text/secondary: `#8E8E93`
- brand/primary: `#34D399`
- standard side padding: `20px`
- standard card/input radius: `12px`
- large card radius: `16px`
- standard CTA height: `58px`
- standard input/control height: `52px`
- bottom-sheet top radius: `32px`
- bottom-sheet option row: `52px`

## Mandatory update sequence

와이어프레임을 수정할 때는 아래 순서를 바꾸지 않는다.

1. 관련 GitHub Decision / planning 문서를 확인한다.
2. `product/wireframe/index.html`을 수정한다.
3. HTML에 `CANONICAL_WIREFRAME_VERSION` marker를 갱신한다.
4. source validation을 수행한다.
5. GitHub에 source를 commit한다.
6. **동일 Vercel project** `liftly-wireframe`에 production deploy한다.
7. `https://liftly-wireframe.vercel.app`을 read-back 한다.
8. HTTP 200 + 새 version marker + 핵심 화면 문자열을 확인한다.
9. 검증이 끝난 뒤 Product Owner에게 링크를 전달한다.

`repo updated != runtime deployed`이며, 둘 다 확인하기 전에는 완료라고 하지 않는다.

## Source validation gate

Production deploy 전 최소 확인:

- `index.html`이 존재함
- `CANONICAL_WIREFRAME_VERSION` marker가 존재함
- HTML/inline JavaScript syntax가 유효함
- 예전 Vercel deployment hostname을 asset/script dependency로 참조하지 않음
- `DecompressionStream` bootstrap 같은 임시 렌더링 우회가 없음
- production을 구성하는 핵심 CSS/JS가 이전 deployment URL에 의존하지 않음
- 신규 변경이 기존 확정 화면/탭을 이유 없이 제거하지 않음

## Runtime validation gate

Deploy 후 최소 확인:

- Vercel deployment state = `READY`
- canonical alias = `liftly-wireframe.vercel.app`
- canonical URL HTTP status = `200`
- response body 안에 최신 `CANONICAL_WIREFRAME_VERSION`가 있음
- response body 안에 현재 작업 화면의 대표 문자열이 있음

실패하면 새 임시 URL을 사용자에게 던지지 말고 같은 source/project를 수정해서 다시 검증한다.

## Stability rules

- Product Owner-facing wireframe URL은 하나만 유지한다.
- 폐기된 비교안은 확정 후 source에서 제거한다.
- 아직 검토 중인 안은 `검토안` 또는 `보류`로 명시한다.
- Figma를 그대로 복제하는 것이 목적이 아니라, UX 검토용 구조를 Figma visual language로 표현한다.
- 제품 정책을 와이어프레임이 임의로 바꾸지 않는다.
- production 장애 회피를 위해 임시 deployment 조각을 서로 참조하는 구조를 만들지 않는다.
