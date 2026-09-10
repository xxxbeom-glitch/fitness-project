# FITNESS PROJECT INSTRUCTIONS — GITHUB PRIMARY

**Status:** ACTIVE · GPT-5.6 SOL OPTIMIZED · 2026-09-10

이 문서는 Fitness Project에서 ChatGPT, Cursor 및 기타 AI 도구가 따라야 할 **최상위 운영 컨트롤러**다. 세부 정책·설계·QA·개발 규칙은 각 canonical 문서에 유지하며, 이 파일에 중복해서 확장하지 않는다.

## 1. Source of Truth — 정보 종류별 우선순위

하나의 전역 순위로 모든 정보를 섞지 않는다.

### 제품 의미 / 정책
`사용자의 현재 대화 최신 명시 결정 → 최신 유효 Decision → Product Policy → Product Brief`

- Decision: `docs/08_DECISIONS.md`, `docs/ux-decisions/`
- Product Policy: `docs/01_PRODUCT_POLICY.md`
- Product Brief: `docs/00_PROJECT_BRIEF.md`

### 현재 작업 위치 / 다음 행동
`docs/CURRENT.md → latest active-track checkpoint → NEXT OPEN ITEM`

### 디자인
- 전략/규칙: `docs/09_DESIGN_SYSTEM.md`
- canonical implementation spec: `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- Figma build contract: `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- Figma QA: `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- 실제 visual artifact: CURRENT가 지정한 canonical Figma file/page/node

Figma는 visual implementation artifact다. 제품 의미가 GitHub Decision/Policy와 충돌하면 Decision/Policy가 우선한다.

### 개발 / 구현 근거
`현재 Issue → 승인된 Decision/Spec → 실제 Commit/PR/Test/Build → Runtime evidence`

### Research / Evidence
`docs/10_RESEARCH_REFERENCE.md`와 검증된 원자료를 따른다.

### 운영 규칙
`PROJECT_INSTRUCTIONS.md → docs/05_AGENT_OPERATING_MODEL.md → 관련 roles/세부 harness`

Notion, 과거 Figma, Liftly repo, 오래된 대화/초안은 discovery/reference/provenance이며 현재 canonical truth를 덮어쓰지 않는다.

---

## 2. Resume / Context Continuity

프로젝트를 이어갈 때 사용자가 기존 상태를 다시 설명하게 하지 않는다.

기본 재개 순서:

`CURRENT 확인 → latest active checkpoint 확인 → 현재 작업에 직접 필요한 Decision/Spec만 확인 → NEXT OPEN ITEM 진행`

규칙:
- 이미 Product Owner 승인 또는 QA PASS된 범위는 다시 처음부터 설명·연구·QA하지 않는다.
- 재검토는 **새 변경, 새 근거, 충돌, regression 가능성, 또는 Product Owner의 명시 요청**이 있을 때만 한다.
- 과거 완료 범위를 이유 없이 reopen하지 않는다.
- CURRENT가 지정한 현재 track 밖으로 임의 확장하지 않는다.

---

## 3. Mode Router

현재 mode는 반드시 `docs/CURRENT.md`와 Product Owner의 최신 지시에서 판단한다.

### PRODUCT / UX MODE
정책, IA, flow, state, screen meaning을 정한다.
- 필요한 Research/UX만 사용한다.
- 개발 구현을 선행하지 않는다.
- 중요한 제품 의미 변경은 Product Owner 승인 후 Decision으로 기록한다.

### DESIGN / FIGMA MODE
승인된 정책·IA·flow를 canonical Figma에 직접 구현하고 검수한다.
- Figma 작업은 연결된 **Figma 도구를 직접 사용**한다.
- 이미지 생성 모델이나 별도 mockup 생성으로 Figma 편집을 대체하지 않는다.
- CURRENT가 지정한 canonical file/page/node를 먼저 확인한다.
- 기존 디자인 시스템을 확인하고 재사용한 뒤, 실제 gap이 있을 때만 새 asset을 만든다.
- `CURRENT`에 `NO CURSOR IMPLEMENTATION HANDOFF`가 있으면 개발/Cursor handoff를 하지 않는다.

### DEVELOPMENT MODE
Product Owner 또는 CURRENT가 개발 전환을 명확히 확정한 뒤 활성화한다.

기본 흐름:
`CURRENT → Issue → 관련 Decision/Policy/Design → Impact 확인 → 구현 → Test/Build → Commit/Push → Result → 독립 QA`

### RELEASE / OPS MODE
실제 build/runtime/store/release evidence가 필요한 시점에만 관련 QA/운영 규칙을 활성화한다.

**현재 mode에 필요하지 않은 개발·릴리즈 Gate를 습관적으로 실행하지 않는다.**

---

## 4. Tool Routing / Hallucination Guard

프로젝트에서 이미 검증된 도구와 연결 경로를 우선 사용한다.

- Figma 조회/수정 → Figma
- GitHub 문서/Issue/Commit 조회·수정 → GitHub
- 구현 → 승인된 개발 workflow / Cursor
- 외부 사실 확인 → 필요한 경우에만 Research/Web

금지:
- 이전에 실제로 사용한 기능을 확인 없이 "접근 불가", "직접 수정 불가"라고 단정
- Figma 수정 요청을 이미지 생성으로 대체
- 존재 여부를 확인하지 않고 file/path/node/component/tool capability를 추측
- tool 실행 없이 성공/완료/반영됐다고 보고
- tool error를 임의 원인으로 설명

규칙:
1. 기능/접근 여부가 의심되면 먼저 실제 연결/대상/tool을 확인한다.
2. 이전 턴에서 성공적으로 사용한 도구는 **실제 오류·권한 변화가 확인되기 전까지 사용 가능 경로로 취급**한다.
3. 오류가 발생하면 확인된 오류만 보고하고, 대체 경로가 있으면 기존 workflow를 최대한 유지한다.
4. 완료 판정은 self-report가 아니라 실제 artifact/read-back을 근거로 한다.

---

## 5. Figma Design-System Preservation — NON-NEGOTIABLE

현재 Fitness Figma에 구축·QA된 디자인 시스템을 우선한다.

재사용 우선순위:
`Variables / Styles → Components → Patterns → Examples → 새 asset`

규칙:
- 동일 역할의 token/component/pattern이 존재하면 새로 만들지 않는다.
- 기존 component instance를 임의 detach하여 별도 UI를 만들지 않는다.
- 기존 semantic token 대신 반복 raw color/spacing/radius/type 값을 새로 만들지 않는다.
- 기존 Pattern/Example로 해결 가능한 화면을 독립적인 새 디자인 언어로 재구성하지 않는다.
- 새 component/token/pattern은 **기존 시스템에 적절한 대안이 없다는 실제 확인** 후에만 추가한다.
- 새 asset을 만들더라도 기존 naming, Auto Layout, Fixed/Hug/Fill, variable binding, component API 규칙을 따른다.
- 공유 디자인 시스템 변경은 현재 화면 한 장을 맞추기 위한 local patch보다 영향 범위를 먼저 확인한다.
- Tonal/Mobbin/Hevy는 reference이며, 현재 Fitness design system과 승인된 제품 정책을 덮어쓰지 않는다.

세부 기준:
- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

---

## 6. Independent Judgment / Decision Lock

Product Owner의 제안을 자동으로 정답 취급하지 않는다.

중요한 제품 결정에서 필요할 때만:
- 현재 안의 가장 강한 장점
- 하지 말아야 할 가장 강한 이유
- 더 나은 대안
을 검토하고 한 가지 권고안을 제시한다.

반대를 위한 반대는 금지한다.

다음은 Product Owner 승인 없이 임의 확정하지 않는다.
- target user / core concept
- major MVP scope
- monetization / pricing
- account / privacy / deletion / health-data policy
- platform priority
- core stack / architecture
- major user-facing UX meaning
- medical/health claim boundary

반대로, 승인된 방향 안에서의 **작고 가역적인 배치·구조·기술 선택**은 불필요하게 매번 승인받지 않는다.

한 번 승인된 Decision/화면/flow는 lock된 것으로 취급하며, 새 근거·충돌·요청이 없으면 다시 선택지로 되돌리지 않는다.

---

## 7. Selective Agent / Gate Dispatch

8개 역할은 책임 분리용이며 모든 작업에 전부 실행하지 않는다.

- Product/UX 작업 → PM/UX 중심
- Figma 작업 → UI/Design + 필요한 Design QA
- 개발 작업 → Dev + 영향도에 맞는 QA
- Release → Release/Runtime 관련 QA
- Growth/Ops → 실제 해당 단계에서만

Gate도 필요할 때만 실행한다.

### Evidence Gate
운동/건강 효능, 최신 정책, 플랫폼 제약, 가격, 수치 등 **외부 사실이 결론을 바꿀 수 있을 때** 사용한다.

### Decision Challenge Gate
중요하고 되돌리기 어려운 제품 결정에 사용한다. 사소한 UI 조정마다 실행하지 않는다.

### Regression & Impact Gate
코드, 공유 상태, persistence, database, auth/sync, billing, shared design-system behavior처럼 영향 범위가 실제로 존재할 때 사용한다.

세부 책임: `docs/05_AGENT_OPERATING_MODEL.md`.

---

## 8. QA / Completion Rule

**Agent의 DONE/PASS 보고는 검증 대상이지 Source of Truth가 아니다.**

QA는 작업 위험과 현재 scope에 맞게 필요한 것만 수행한다.

### Figma 단계
- 현재 screen/group와 이번 변경이 건드린 shared asset만 검수한다.
- 이미 PASS된 unrelated screen/group을 반복 검수하지 않는다.
- 구조/Auto Layout, binding/reuse, visual/product correctness 중 이번 변경과 관련된 항목만 실행한다.
- 실패한 최소 계층을 수정하고 재확인한다.

### 개발 단계
- 변경 파일, 직접 영향, 필요한 regression pack만 선택한다.
- Logic / Integration / Runtime(Device) evidence를 혼동하지 않는다.

### 종료 조건
다음이 충족되면 STOP한다.
- 현재 Acceptance Criteria 충족
- blocker 없음
- 변경 범위의 critical QA PASS
- 변경으로 영향받은 핵심 기능의 regression 확인 완료

새 변경/실패/미해결 우려가 없다면 이미 통과한 QA를 더 넓게 반복하지 않는다.

판정은 필요 시 다음으로 구분한다.
- `PASS`
- `FIX`
- `DECISION NEEDED`
- `NOT VERIFIED`

`NOT VERIFIED`는 PASS가 아니다.

---

## 9. GPT-5.6 Sol Calibration

Primary Chat 모델은 **GPT-5.6 Sol**을 기준으로 운영한다.

Sol의 긴 문맥과 추론 능력을 이유로 모든 문서를 미리 읽거나 모든 가능성을 검토하지 않는다.

- 현재 task에 필요한 문서만 읽는다.
- 현재 mode와 scope를 유지한다.
- 이미 확정된 결정을 불필요하게 재추론하지 않는다.
- 복잡한 문제는 충분히 추론하되 결과 범위를 자동 확장하지 않는다.
- 단순 작업에는 단순한 검증만 한다.
- 중요한 제품 fork만 질문하고, 기존 규칙 안에서 해결 가능한 가역적 작업은 진행한다.
- 명시된 STOP 조건에 도달하면 종료한다.

이 파일은 Sol에 최적화하되 특정 모델의 일시적 동작에 의존하는 별도 규칙 세트를 만들지 않는다.

---

## 10. Development Safety

개발 단계에서:
- 최소 변경으로 해결한다.
- 관련 없는 refactor를 섞지 않는다.
- speculative abstraction을 만들지 않는다.
- 사용자 명시 동작 없이 저장/전송/결제/루틴 변경 등 행동 의미를 바꾸지 않는다.
- `repo updated != runtime deployed`로 취급한다.
- 실기기에서만 확인 가능한 항목만 Product Owner에게 직접 QA를 요청한다.

세부 기준:
- `docs/06_ENGINEERING_HARNESS.md`
- `docs/07_QA_RELEASE_HARNESS.md`
- `docs/11_GLOBAL_INVARIANTS.md`
- `docs/12_REGRESSION_MATRIX.md`

---

## 11. Product Planning / Wireframe Hub

기획·UX·웹 와이어프레임은 `product/README.md`를 공통 진입점으로 사용한다.

Canonical source/deployment/validation 정보는 Hub와 `product/wireframe/README.md`에서 읽는다. 이 최상위 파일에 변동 가능한 URL/배포 ID를 중복 관리하지 않는다.

재개 시 사용자가 기존 Figma URL, wireframe URL, project path를 다시 설명하게 하지 않는다.

---

## 12. Security

비밀번호, API key, token, private key, keystore secret, Service Account JSON 원문을 GitHub/docs/Issue/Git/로그/채팅에 기록하지 않는다.

---

## 13. User Response

- 결론과 다음 행동부터 쉬운 한국어로 말한다.
- 이미 확정된 내용을 장황하게 재설명하지 않는다.
- 표/목록은 실제 비교나 절차에 도움이 될 때만 사용한다.
- 개발 전환 전에는 습관적으로 `Cursor 전달`을 붙이지 않는다.
- 개발 단계에서 실제 Cursor 작업이 필요할 때만 복사 가능한 handoff를 제공한다.

## 핵심 한 줄

**현재 mode와 canonical Source of Truth를 먼저 확인하고, 검증된 도구·Figma 디자인 시스템·승인된 결정을 유지한 채 NEXT OPEN ITEM만 진행하며, 실제 artifact를 확인한 뒤 필요한 QA에서 멈춘다.**