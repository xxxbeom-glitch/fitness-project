# MVP Implementation Handoff — Start Here

**Status:** DEVELOPMENT AUTHORIZED · DEV-001 ISSUE #5 READY · 96-SCREEN CANONICAL · ANDROID-ONLY ARCHITECTURE LOCKED  
**Updated:** 2026-09-22
**Canonical Repository:** `xxxbeom-glitch/tampin`

이 폴더는 Cursor가 MVP 구현을 시작하기 전에 읽는 **개발 진입점**이다.

## Read order

Cursor는 아래 순서로 읽는다.

1. `PROJECT_INSTRUCTIONS.md`
2. `docs/CURRENT.md`
3. `docs/implementation/MVP_IMPLEMENTATION_HANDOFF.md`
4. `docs/implementation/MVP_SCREEN_INVENTORY.md`
5. `docs/implementation/MVP_SCREEN_BEHAVIOR_MATRIX.md`
6. `docs/implementation/MVP_HANDOFF_QA.md`
7. `docs/24_PRODUCT_DIRECTION_V2.md`
8. `docs/01_PRODUCT_POLICY.md`
9. `docs/11_GLOBAL_INVARIANTS.md`
10. 현재 Task와 직접 관련된 최신 `docs/ux-decisions/`
11. `docs/06_ENGINEERING_HARNESS.md`
12. `docs/12_REGRESSION_MATRIX.md`
13. `docs/07_QA_RELEASE_HARNESS.md`
14. canonical Figma

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `MVP_전체_와이어프레임` — `34:1076`
- shared component page: `Common_Component`
- current canonical top-level MVP frames: `96`

Figma는 visual implementation artifact다. 행동/제품 의미가 GitHub의 최신 Decision/Policy와 충돌하면 GitHub가 우선한다.

## Do not use as implementation authority

다음은 historical planning/reference이며 구현 요구사항의 Source of Truth가 아니다.

- `product/wireframe/*`
- 오래된 추천 루틴 관련 문서
- recommendation-heavy onboarding/result-carousel 문서
- 과거 dark-theme wireframe token 값
- `docs/09_DESIGN_SYSTEM.md` / `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`의 Phase-A Pretendard/old Tonal provisional 수치가 current Figma와 충돌하는 경우 해당 옛 수치
- superseded Figma/wireframe 이름 또는 화면

현재 MVP에는 **추천 루틴 기능이 없다**.

현재 플랫폼은 **Android 전용**이다. iOS / Apple Sign in / Live Activity / iPhone QA / App Store 작업은 현재 MVP 구현 범위가 아니다.

## Current readiness

준비 완료:
- canonical 96-screen Figma inventory + Light roots
- sequential Product/UX handoff QA through Group 08
- current product/policy alignment
- Figma component-linkage QA
- Android-only architecture + pre-release architecture re-audit Blocks 01–14
- Cursor-facing behavior/data/design contract
- 2026-09-22 profile-photo 1:1 crop flow amendment

현재 handoff verdict: **DEVELOPMENT AUTHORIZED · DEV-001 READY FOR CURSOR**

현재 Product/UX 또는 architecture blocker: **0**

구현 시작 Gate:
1. Product Owner의 명시적 Development-mode 승인 — **COMPLETE 2026-09-22**
2. 첫 scoped GitHub Issue — **COMPLETE: Issue #5 / DEV-001**

현재 실행 대상:
- Issue #5 `[DEV-001] Expo app bootstrap + Android development foundation`
- bootstrap 범위만 수행하며 canonical MVP screen 구현은 다음 Issue부터 진행

별도 non-blocking side-track:
- Production exercise-thumbnail full crop/mapping QA
- final app-owned timer-end sound assets/labels
- public Terms/Privacy URLs + support-retention disclosure before release

이 side-track들은 첫 scoped implementation Issue 생성을 위한 개발 승인 자체를 막지 않지만, 관련 기능의 최종 visual/release QA 전에는 완료되어야 한다.

## Development boundary

이 문서 세트의 존재는 자동으로 구현 시작을 승인하지 않는다.

Product Owner가 2026-09-22 Development mode를 승인했다.
- 첫 implementation Issue = GitHub Issue #5 / DEV-001
- Cursor는 현재 Issue 범위만 구현한다.
- 한 번에 전체 앱을 무경계로 구현하지 않는다.

## Cursor execution harness

Prepared 2026-09-22:
- `.cursor/rules/`
- `.cursor/skills/`
- `agent/TASK_CONTRACT.md`
- `agent/FIGMA_SCREEN_MAP.md`
- `agent/specs/DEBUG_SCREEN_CATALOG_GUIDE.md`
- `.github/ISSUE_TEMPLATE/tampin-task.md`
- `docs/implementation/CURSOR_BOOTSTRAP.md`
- `scripts/verify-ui.ps1`

This is development preparation only. Production implementation remains gated by explicit Product Owner Development-mode authorization.

The initial source-tree / mock-first boundary is defined in `CURSOR_BOOTSTRAP.md`. SQLite/Supabase are not to be replaced by ad-hoc temporary production persistence during the UI-first phase.
