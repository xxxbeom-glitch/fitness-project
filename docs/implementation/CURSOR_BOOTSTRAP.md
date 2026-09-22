# Cursor Development Bootstrap — Tampin

**Status:** DEVELOPMENT AUTHORIZED · DEV-001 ISSUE #5 READY · RUNTIME IMPLEMENTATION NOT YET EXECUTED  
**Updated:** 2026-09-22
**Canonical Repository:** `xxxbeom-glitch/tampin`
**Canonical URL:** `https://github.com/xxxbeom-glitch/tampin`

Legacy aliases such as `xxxbeom-glitch/fitness-project` are not used for clone/pull/handoff instructions.

## Purpose
Liftly의 UI/quality harness와 OnTalk의 GitHub Task/QA 운영 방식을 Tampin의 현재 architecture에 맞게 통합한다.

Tampin은 아래를 그대로 복사하지 않는다.
- Liftly의 Kotlin / Jetpack Compose / Gradle 전용 구조
- OnTalk의 chat / billing / abuse-specific product rules

Tampin의 canonical architecture:
- Android only
- React Native + Expo + TypeScript
- Expo Development Build
- local-first
- SQLite / expo-sqlite
- Supabase Postgres/Auth/Storage
- Android package `com.lumian.tampin`

## Cursor operating path
```text
Product Owner approval
→ ChatGPT creates scoped GitHub Issue
→ Cursor pulls repository
→ PROJECT_INSTRUCTIONS
→ CURRENT
→ assigned Issue
→ linked Decision / Spec / Figma
→ TASK_CONTRACT
→ implement
→ type/lint/test/build
→ commit/push
→ Issue evidence
→ ChatGPT independent QA
→ PASS / FIX / BLOCKED
```

## Human relay protocol

GitHub Issue가 Cursor의 실행 지시 원본이다. ChatGPT가 별도의 장문 구현 프롬프트를 반복 작성하지 않는다.

Normal loop:

```text
ChatGPT: Issue/CURRENT 준비
User → Cursor: "GitHub 확인하고 현재 Issue 진행해."
Cursor: 구현 → Test/Build → Commit/Push → Issue evidence → review
User → ChatGPT: "커서 완료. GitHub 확인해."
ChatGPT: Commit/Diff/Test/Figma 독립 QA → PASS/FIX/BLOCKED
```

사용자는 두 에이전트 사이에서 구현 내용을 번역하거나 결과를 복사하는 역할을 맡지 않는다.
GitHub 접근 장애가 있을 때만 예외적으로 복사형 handoff를 사용한다.

## Repository harness
```text
.cursor/
├─ rules/
│  ├─ 00-project-core.mdc
│  ├─ 10-react-native-expo-ui.mdc
│  ├─ 20-task-git-handoff.mdc
│  ├─ 30-quality-and-recovery.mdc
│  └─ 40-production-engineering.mdc
└─ skills/
   ├─ implement-figma-screen/SKILL.md
   ├─ register-debug-screen/SKILL.md
   ├─ diagnose-and-recover/SKILL.md
   └─ review-production-readiness/SKILL.md

agent/
├─ TASK_CONTRACT.md
├─ SESSION_HANDOFF.md
├─ ERROR_LEDGER.md
├─ FIGMA_SCREEN_MAP.md
└─ specs/
   └─ DEBUG_SCREEN_CATALOG_GUIDE.md

.github/
└─ ISSUE_TEMPLATE/
   └─ tampin-task.md
```

## Initial application source-tree contract
아래는 첫 Expo bootstrap Issue에서 생성할 방향이다.
현재 harness commit에서는 빈 runtime 폴더를 미리 만들지 않는다.

```text
src/
├─ app/
│  ├─ navigation/
│  └─ providers/
├─ design-system/
│  ├─ tokens/
│  └─ components/
├─ features/
│  ├─ startup/
│  ├─ auth/
│  ├─ home/
│  ├─ routine/
│  ├─ exercise/
│  ├─ workout/
│  ├─ completion/
│  ├─ analysis/
│  └─ settings/
├─ data/
│  ├─ contracts/
│  └─ mock/
├─ platform/
├─ shared/
└─ debug/
   └─ ui-catalog/
```

## Why this tree
- feature-first로 00–08 화면군을 찾기 쉽게 유지한다.
- design-system을 Figma Common_Component와 대응시킨다.
- data contract와 mock을 분리해 이후 SQLite/Supabase adapter로 교체할 수 있게 한다.
- Android-specific runtime은 `platform/` 경계에 둔다.
- Debug UI Catalog는 production flow와 분리한다.
- 실제 필요 전에는 module/abstraction을 더 늘리지 않는다.

## DB/backend deferred implementation rule
Product Owner direction:
- exercise production DB/media 연결은 후순위
- 초기 개발은 UI/navigation/mock-flow를 먼저 진행할 수 있음

따라서 초기 단계에서는:
- `data/contracts` + deterministic `data/mock`까지만 허용
- SQLite schema/repository는 별도 persistence Issue에서 생성
- Supabase/Auth/Storage/Sync는 각각 승인된 후속 Issue에서 연결
- AsyncStorage/파일 JSON을 core workout의 임시 production persistence로 사용하지 않음
- active-workout recovery/persistence는 SQLite 전까지 final PASS 처리하지 않음

## Navigation / state library
현재 canonical architecture는 React Native + Expo + TypeScript까지만 lock되어 있다.

Expo Router / React Navigation, global state library 등은 이 bootstrap 문서에서 선행 확정하지 않는다.
첫 implementation Issue에서 현재 Expo baseline과 요구사항을 확인해 최소 선택으로 제안/결정한다.
제품 의미를 바꾸지 않는 기술 선택은 승인된 architecture 범위 안에서 처리한다.

## Debug UI Catalog
초기 UI 구현의 핵심 QA 장치다.

- canonical 96 rows를 한 번에 구현하지 않는다.
- 각 Issue가 구현한 화면/state를 Catalog에 함께 등록한다.
- 실제 login/DB/backend 없이 fake state로 direct render한다.
- 화면 QA가 navigation/data readiness에 막히지 않게 한다.

## Verification contract
첫 bootstrap 이후 package scripts에는 최소한 다음 성격의 검증 경로가 있어야 한다.
- type check
- lint
- unit test
- Android Development Build 또는 equivalent runnable verification

UI Task는 추가로:
- Debug UI Catalog
- Figma comparison

고위험 Task는:
- `docs/11_GLOBAL_INVARIANTS.md`
- `docs/12_REGRESSION_MATRIX.md`
- production-readiness skill
을 적용한다.

## Development gate
이 harness가 repo에 존재하는 것은 **개발 시작 승인 자체가 아니다**.

Product Owner가 2026-09-22 Development mode를 명시적으로 승인했고 첫 scoped Issue #5 / DEV-001이 생성되었다.

Current action:
- Cursor reads CURRENT + Issue #5 + linked docs + TASK_CONTRACT
- Cursor executes DEV-001 only
- later product-screen/persistence/backend work requires separate Issues
