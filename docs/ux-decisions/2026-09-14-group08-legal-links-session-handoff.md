# Group 08 — Legal links + session handoff

**Date:** 2026-09-14  
**Status:** PRODUCT/UX CURRENT · FIGMA CLEANUP APPLIED · NO CURSOR HANDOFF

## Scope

This checkpoint closes the current Group 08 support/legal exploration session and records any current-session decisions that were not sufficiently explicit in GitHub before moving to a new chat.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- exploration section `08_SETTINGS_V1_EXPLORATION` — `1158:645`

## Legal / privacy presentation decision

Product Owner decision:
- `이용약관` and `개인정보처리방침` are **not rendered as full legal documents inside the app**.
- Settings keeps the two entry rows.
- Tapping each row navigates to a public external document URL.
- The planned publishing surface is a public Notion shared page; the actual Notion pages / URLs are **not created yet**.
- The public pages must be accessible without login and remain readable by users.
- Exact browser presentation (system browser vs in-app browser) is not locked at this Product/UX stage.

Figma cleanup applied:
- deleted temporary `08K_이용약관_Exploration_V1` — former node `1267:1034`
- deleted temporary `08L_개인정보처리방침_Exploration_V1` — former node `1268:1039`
- deleted obsolete legacy in-app legal document screen `08F_법률문서` — former node `41:3827`
- retained Settings-home entry rows:
  - `SettingRow_이용약관` — `1158:781`
  - `SettingRow_개인정보처리방침` — `1158:785`
- post-cleanup read-back confirmed no `08F / 08K / 08L` full-document frame remains on the Group 08 page.

## Pre-release legal follow-up — NOT a current Figma blocker

Before store release:
- create and publish the actual Terms and Privacy public pages
- keep the approved account-exit privacy-destruction rules consistent with the Privacy Policy
- disclose support-inquiry data / attachment handling
- decide and state the exact retention/deletion period for support inquiry records and attachments; **this value is still unresolved and must not be invented**
- provide the external account-deletion request web entry required for store compliance
- keep the unified support/privacy contact at `lumianthecompany@gmail.com`

## Current-session history audit

The following current-session decisions / approvals are carried forward so a new chat does not reopen them accidentally.

### Workout settings — presentation / flow approved

Canonical Figma:
- `08G_운동설정_Exploration_V1` — `1158:7365`
- `08G1_기본휴식시간_Sheet_Exploration_V1` — `1163:676`
- `08G2_타이머종료음_Exploration_V1` — `1163:7296`

Current approved structure:
- 기본 휴식 시간
- 타이머 종료음
- 타이머 종료 진동
- 운동 중 화면 꺼짐 방지
- 기본 휴식 시간 uses the shared drum-roll bottom sheet
- selectable range = `없음` to `5분`, step `5초`
- timer end sound currently has 3 choices
- tapping a sound both selects it and previews it immediately
- labels `기본 / 차임 / 벨` are temporary until actual sound assets are chosen

Important qualifier:
- current displayed values/toggle states are not promoted here into new product defaults unless separately locked; this checkpoint records the approved screen/interaction direction, not an invented default policy.

### Notification settings — current scope accepted

Canonical Figma:
- `08H_알림설정_Exploration_V1` — `1158:7457`

Current scope:
- `운동 리마인더` is removed
- remaining rows are `휴식 타이머 알림` and `업데이트 및 공지`

Important qualifier:
- exact launch default on/off values are not newly locked by this checkpoint.

### Screen sizing rule

Global Fitness Figma rule remains:
- width = `360px`
- minimum frame height = `780px`
- never shrink below 780 because content is short
- if content is long, extend vertically beyond 780

### Already approved / locked in prior checkpoints

Do not reopen without a new issue:
- Group 08B profile/account base and account-exit flow/privacy policy
- unit settings
- FAQ accordion and shared `AccordionItem`
- support inquiry flow and shared `TextArea` / `AttachmentSlot`
- Group 07 analysis
- Group 06 completion

## Group 08 current unresolved items

Still unresolved / TBD:
- `구독 관리`
- `언어`
- `테마`
- actual timer sound assets / final labels
- exact support-inquiry record / image attachment retention period
- actual public Terms / Privacy URLs
- external account-deletion request URL

These do not all need to block the current Figma closeout. Release-specific URLs / retention disclosure can be completed later before production release.

## NEXT OPEN ITEM

Start the next chat from **Group 08 closeout**:
1. decide whether `구독 관리 / 언어 / 테마` are visible at MVP launch or hidden/deferred
2. check whether any remaining Group 08 launch-level policy is truly blocking
3. perform only the necessary final Settings-home cleanup / Group 08 lock

Do not rebuild legal full-text screens in Figma. Terms and Privacy now use external public pages.

## Development boundary

Product Owner has not authorized development/Cursor handoff. Stay in Product/UX + Figma until explicitly switched.
