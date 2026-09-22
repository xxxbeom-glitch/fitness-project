# Active Task Contract

이 문서는 현재 Cursor 구현 작업 한 건만 유지한다.
새 Issue를 시작할 때 이전 내용을 교체한다.

## Current state
- Development authorization: GRANTED — 2026-09-22
- Active implementation Issue: #5
- Task ID: DEV-001
- Status: review
- Next Owner: ChatGPT

## Task
- Task ID: DEV-001
- GitHub Issue: #5 — `[DEV-001] Expo app bootstrap + Android development foundation`
- Branch: `DEV-001-expo-bootstrap`
- Figma screen/state: N/A — bootstrap only
- Figma node: N/A

## Goal

기존 `xxxbeom-glitch/tampin` repository의 문서/harness/data를 보존하면서 React Native + Expo + TypeScript Android 앱의 최소 production-development 기반을 만든다.

이 Task는 **앱 bootstrap**만 수행한다. canonical MVP 화면 구현은 하지 않는다.

## Required

- current supported Expo + React Native + TypeScript baseline
- Android package = `com.lumian.tampin`
- exactly one package manager / one lockfile
- `docs/implementation/CURSOR_BOOTSTRAP.md`의 최소 `src/` boundary
- development-only Debug UI Catalog shell
- real `typecheck`, `lint`, `test` scripts
- deterministic bootstrap smoke test
- `scripts/verify-ui.ps1` mandatory checks
- strongest practical Android compile/run verification
- Commit/Push + Issue Result/Test/Commit/Risk/Not Verified

## Allowed Scope

- Expo/RN/TS runtime scaffold
- app/config/package metadata required for bootstrap
- minimal navigation/entry structure needed for the app and dev-only catalog
- minimal test/lint/type configuration
- minimal placeholder UI required to prove bootstrap/catalog rendering
- bootstrap source-tree creation

## Forbidden / Do Not Change

- canonical Figma screen implementation
- Figma token transcription / Design System implementation beyond bootstrap necessities
- SQLite schema/repository/migrations
- AsyncStorage/JSON as temporary production workout persistence
- Supabase/Auth/Google/Kakao/Storage/Sync
- exercise production DB/media wiring
- Sentry/PostHog
- Android notification/exact-alarm/boot runtime
- product policy/UX/Figma changes
- recommended-routine revival
- iOS/App Store product work
- unrelated refactor/rename/move of existing docs/data

## Risk / Impact

- Risk: Medium
- Affected invariants: INV-013, INV-014, INV-015
- Regression packs: no production runtime pack yet; verify existing repo artifacts remain intact and Debug Catalog is not a normal release/user flow

## Verification

- [x] Expo config resolves
- [x] Android package read-back = `com.lumian.tampin`
- [x] exactly one lockfile (`package-lock.json`)
- [x] Type/static validation
- [x] Lint
- [x] deterministic unit/smoke test
- [x] `scripts/verify-ui.ps1`
- [x] development-only Debug UI Catalog shell
- [x] Android compile (`assembleDebug`) PASS — device/runtime install NOT VERIFIED
- [x] existing docs/harness/data preserved
- [x] no out-of-scope persistence/backend/product screen added

## Done When

- GitHub Issue #5 Acceptance Criteria are satisfied or honestly marked NOT VERIFIED/BLOCKED where environment prevents runtime evidence
- changes are committed and pushed
- Issue #5 Result section contains technical choices and executed evidence
- Issue #5 identifies Commit SHA and known risk
- Issue #5 hands ownership to ChatGPT for independent QA
- Cursor does not start DEV-002 automatically

## Result

- Status: READY_FOR_REVIEW
- Expo/tooling: Expo SDK 57 / RN 0.86.3 / TypeScript 5.9 / expo-dev-client 57.0.19
- Package manager: npm (`package-lock.json` only)
- Navigation baseline: local React state `RootShell` only (no Expo Router / React Navigation)
- Android native project: generated via `expo prebuild`, gitignored (`/android`)
- Evidence: typecheck/lint/test PASS; verify-ui.ps1 PASS; android assembleDebug PASS
- Not Verified: device install/run, Expo Go path intentionally not used as runtime contract
- Commit: `6fd23cdc5de8e8a3d40aba4d2bfb32a28267844d`
- Notes: Catalog entry gated by `__DEV__`; Issue #5 Result comment posted; Next Owner=ChatGPT
