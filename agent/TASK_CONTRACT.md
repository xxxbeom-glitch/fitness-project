# Active Task Contract

이 문서는 현재 Cursor 구현 작업 한 건만 유지한다.
새 Issue를 시작할 때 이전 내용을 교체한다.

## Current state
- Development authorization: GRANTED — 2026-09-22
- Previous Issue: #5 / DEV-001 — PASS · merged to main
- Active implementation Issue: #6
- Task ID: DEV-002
- Status: READY
- Next Owner: Cursor

## Task
- Task ID: DEV-002
- GitHub Issue: #6 — `[DEV-002] Expo/EAS link + Android runtime smoke`
- Branch: Cursor creates one task branch containing DEV-002 in the branch name
- Figma screen/state: N/A — environment/runtime verification only
- Figma node: N/A

## Goal

DEV-001에서 생성한 Tampin Expo 앱을 Product Owner의 Expo/EAS project에 연결하고, Android emulator 또는 USB-debug device가 있으면 실제 Development Build 설치/실행까지 확인한다.

이 Task에서는 canonical Figma 화면을 구현하지 않는다.

## Required

- DEV-001 main baseline preserved
- current EAS CLI login state check
- create/link one Tampin EAS project
- linked EAS project identity read-back
- minimal Android-only `eas.json` development profile
- `developmentClient: true`
- Expo Doctor/current equivalent
- Android package remains `com.lumian.tampin`
- strongest practical Android local install/launch evidence
- bootstrap shell + Debug UI Catalog runtime verification when target exists
- Commit/Push + Issue Result/Test/Commit/Not Verified

## Allowed Scope

- EAS project metadata/link config
- `eas.json` Android development profile
- small config correction required by Expo Doctor or Development Build runtime
- local Android emulator/device verification
- Issue/handoff evidence updates

If interactive EAS login is required, ask Product Owner to complete only that local interactive step.

## Forbidden / Do Not Change

- canonical Figma screen implementation
- Design System transcription
- SQLite/Supabase/Auth/Google/Kakao/Storage/Sync
- exercise production DB/media
- Sentry/PostHog
- Android notification/exact-alarm/boot runtime
- Google Play submission
- cloud/production EAS build without separate Product Owner approval
- iOS/App Store work
- unrelated refactor

## Risk / Impact

- Risk: Low–Medium
- Affected invariants: INV-014 evidence level, INV-015 repo updated != runtime deployed
- Regression: DEV-001 type/lint/test + package identity must remain intact

## Verification

- [ ] DEV-001 static checks remain PASS
- [ ] Expo Doctor/current equivalent
- [ ] EAS project link read-back
- [ ] Android package = `com.lumian.tampin`
- [ ] Android local install/launch if runtime target available
- [ ] bootstrap shell visible if runtime target available
- [ ] Debug UI Catalog reachable in development if runtime target available
- [ ] Runtime/Device evidence honestly labeled
- [ ] no out-of-scope feature implementation

## Done When

- Issue #6 Acceptance Criteria are met or environment-only runtime blocker is clearly recorded as NOT VERIFIED
- changes committed and pushed
- Issue #6 Result contains EAS project/config + actual verification evidence
- Next Owner = ChatGPT
- Cursor does not start the next Task automatically

## Result

- Status: NOT_STARTED
- Evidence: pending Cursor execution
- Not Verified: pending Cursor execution
- Commit: pending
