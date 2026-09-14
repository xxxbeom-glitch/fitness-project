# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 08 SETTINGS/ACCOUNT EXPLORATION ACTIVE · 08B PROFILE/ACCOUNT LOCKED · UNIT + WORKOUT SETTINGS APPROVED · GROUP 07 ANALYSIS LOCKED · GROUP 06 COMPLETION APPROVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-14-group08b-profile-account-lock.md`

Supporting Group 08 checkpoints:
- `docs/ux-decisions/2026-09-14-group08-profile-account-current.md` — superseded by the Group 08B lock checkpoint
- `docs/ux-decisions/2026-09-14-group08-profile-settings-pass.md` — superseded for the current profile/account flow
- `docs/ux-decisions/2026-09-14-group08-unit-settings-policy.md`
- `docs/ux-decisions/2026-09-14-group08-settings-account-exploration-v1.md`

Supporting locked / prior checkpoints:
- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`
- `docs/ux-decisions/2026-09-14-group07b-empty-plain-text.md`
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- `docs/ux-decisions/2026-09-13-group07d-figma-cleanup-shared-components.md`
- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

---

# GROUP 08 — SETTINGS / ACCOUNT EXPLORATION ACTIVE

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- exploration section `08_SETTINGS_V1_EXPLORATION` — `1158:645`

Current exploration screens:
- `08A_설정홈_Exploration_V1` — `1158:649`
- locked profile base `08B_추천안_닉네임+로그인수단_Exploration_V2` — `1204:770`
- `08B1_ProfilePhoto_Sheet_Exploration_V1` — `1181:724`
- `08B1_더보기_계정탈퇴_Sheet_Exploration_V1` — `1207:799`
- `08B2_계정탈퇴확인_Exploration_V2` — `1207:859`
- `08C_단위설정_Sheet_Exploration_V1` — `1175:709`
- `08G_운동설정_Exploration_V1` — `1158:7365`
- `08H_알림설정_Exploration_V1` — `1158:7457`
- `08G1_기본휴식시간_Sheet_Exploration_V1` — `1163:676`
- `08G2_타이머종료음_Exploration_V1` — `1163:7296`

Current PO-approved / recorded directions:
- `구독 관리`, `언어`, `테마` = TBD
- `운동 리마인더` removed
- default rest time uses a bottom-sheet drum-roll picker
- rest-time range = `없음` through `5분`, step = `5초`
- timer end sound currently has 3 choices; tapping selects and immediately previews the sound
- current sound labels `기본 / 차임 / 벨` are temporary until real sound assets are selected

## 08B Profile + account — LOCKED

### Profile
- profile photo can be changed from profile settings
- photo action sheet offers `사진 선택 / 기본 이미지로 변경 / 취소`
- nickname is editable
- no large `프로필 정보` section heading
- gender and birthdate are not editable profile-setting fields in the current MVP flow
- gender / birthdate remain onboarding-collected data; no post-signup edit behavior is currently defined

### Logged-in provider
- no separate `로그인 수단` section
- current provider is represented inside the nickname InputBox as a leading provider icon
- visual pattern = `[provider icon] 닉네임`
- current Figma example = Google
- Kakao uses the same field pattern with the Kakao provider icon
- multiple-provider linking / account-link management is excluded from current MVP

### Account actions
- visible body action = `로그아웃`
- logout does not require a confirmation dialog in the current direction
- account deletion entry is moved to the profile header `⋮` action
- `⋮` → account-management bottom sheet → destructive `계정 탈퇴` → final confirmation dialog
- deletion confirmation communicates destructive account-data deletion and no recovery

### Screen sizing / CTA
- current Fitness screen width = `360px`
- minimum screen/frame height = `780px`
- never shrink below 780px because content is short
- content may extend the frame beyond 780px when needed
- `저장` CTA belongs after page content and is not a sticky/fixed overlay

### Figma cleanup
- rejected `08B_OptionA_분리형` and `08B_OptionB_통합형` comparison frames were removed
- Option A / Option B comparison labels were removed
- only the locked current 08B direction remains active

Targeted Figma QA for base profile, profile-photo sheet, deletion sheet, and deletion-confirm state = PASS.

## Unit settings — APPROVED

- supported weight units = `kg / lb`
- global unit preference applies to current input, previous-value references, past workout records, completion/session detail, analysis, and PR weight displays
- changing units converts presentation/input display only; historical source records are not destructively rewritten
- per-exercise unit override is excluded from MVP
- Settings home shows the current unit value on the `단위 설정` row
- unit selector remains a bottom sheet with `kg (킬로그램)` and `lb (파운드)`
- Figma targeted QA = PASS

## Shared UI changed during Group 08

### Wheel picker
- shared component `WheelPicker/SingleColumn` — `1169:1105`
- rest-time instance `WheelPicker_RestTime` — `1170:697`
- 1 column / 5 visible rows / 40px row height
- selected row centered between divider lines
- existing Fitness tokens reused; no new token added

### InputBox
- canonical shared `InputBox` — `635:807`
- variant axes:
  - `State=Default / Filled / Focused`
  - `LeadingIcon=None / Social`
- 6 total variants
- standard fields remain `LeadingIcon=None`
- profile nickname uses `Filled + Social`
- current social example uses a 16px Google icon followed by editable nickname text

Group 08 is NOT locked yet. Approved/locked areas should not be reopened without a new reason.

---

# GROUP 06 — COMPLETION UI APPROVED

Canonical Figma page:
- `06 운동 완료` — `233:2077`

Canonical/state screens:
- `06A_Completion_Default` — `793:15748`
- `06B_Completion_NoPR` — `819:702`
- `06C_Completion_VolumeNA` — `823:720`

Current shared completion structure and conditional behavior remain APPROVED. Latest targeted screenshot QA = PASS.

Do not reopen without a new change, conflict, regression risk, or explicit review request.

---

# GROUP 07 — LOCKED

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- `07D_운동기록상세_Exploration` — `836:1593`
- `07D_운동기록상세_DeleteConfirm` — `1136:4054`

07A / 07B / 07D are locked. Latest targeted Figma QA = PASS.

Do not mechanically repeat Group 06/07 QA.

---

# NEXT OPEN ITEM

Continue Group 08 with support / legal presentation:
1. `자주 묻는 질문`
2. `문의하기`
3. terms / privacy / legal presentation

After those are resolved, reassess remaining Group 08 TBD items (`구독 관리`, `언어`, `테마`) only if needed for Group 08 closeout.

Do not reopen locked 08B profile/account, approved unit, or workout settings without a new issue.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
