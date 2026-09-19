# MVP Implementation Handoff — Start Here

**Status:** HANDOFF PREPARED · SCREEN DESIGN FROZEN · IMPLEMENTATION NOT STARTED  
**Updated:** 2026-09-20

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
- frozen top-level MVP frames: `94`

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

## Current readiness

준비 완료:
- MVP screen design freeze
- canonical screen inventory
- current product/policy alignment
- Figma component-linkage QA
- Cursor-facing behavior/data/design contract

현재 handoff verdict: **FIX / DECISION NEEDED**

구현 전 해결:
1. primary bottom navigation visual/component contract
2. weekday scheduling / today-next semantics
3. routine Duplicate behavior
4. W / D / F set-type semantics
5. automatic Rest Timer already-running / end-feedback runtime policy
6. active-session recovery system-notification UX
7. production app technology stack / platform architecture
8. `duration` recording type의 Active Workout timed-set interaction
9. launch platform 결정에 따라 iOS Apple sign-in/provider copy alignment

문서 정리 완료:
- current Product Direction / Project Brief의 브랜드 명칭을 Tampin으로 동기화

별도 asset side-track:
- Production exercise-thumbnail full crop/mapping QA

이 side-track은 초기 구조 개발을 막지는 않지만 최종 visual/release QA 전에는 완료되어야 한다.

## Development boundary

이 문서 세트의 존재는 자동으로 구현 시작을 승인하지 않는다.

Product Owner가 개발 시작을 명시하고 현재 blockers가 해소된 뒤:
- 첫 implementation Issue를 만든다.
- 해당 Issue의 범위만 Cursor에 전달한다.
- 한 번에 전체 앱을 무경계로 구현하지 않는다.
