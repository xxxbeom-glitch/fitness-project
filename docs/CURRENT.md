# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 08 SETTINGS/ACCOUNT EXPLORATION ACTIVE · LEGAL LINKS POLICY SET · SUPPORT INQUIRY APPROVED · FAQ APPROVED · 08B PROFILE/ACCOUNT LOCKED WITH ACCOUNT-EXIT PRIVACY POLICY · UNIT + WORKOUT SETTINGS APPROVED · NOTIFICATION SCOPE ACCEPTED · GROUP 07 ANALYSIS LOCKED · GROUP 06 COMPLETION APPROVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-14-group08-legal-links-session-handoff.md`

Supporting Group 08 checkpoints:
- `docs/ux-decisions/2026-09-14-group08-support-inquiry-pass.md`
- `docs/ux-decisions/2026-09-14-group08-faq-accordion-pass.md`
- `docs/ux-decisions/2026-09-14-group08b-account-exit-privacy-policy.md`
- `docs/ux-decisions/2026-09-14-group08b-account-exit-flow.md` — superseded for deletion/privacy copy by later checkpoint
- `docs/ux-decisions/2026-09-14-group08b-profile-account-lock.md` — base 08B profile/account lock; account-exit subflow superseded by later checkpoints
- `docs/ux-decisions/2026-09-14-group08-profile-account-current.md` — superseded
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
- `08B2_계정탈퇴_Exploration_V1` — `1222:846`
- `08B3_계정탈퇴확인_Exploration_V1` — `1222:7487`
- `08C_단위설정_Sheet_Exploration_V1` — `1175:709`
- `08G_운동설정_Exploration_V1` — `1158:7365`
- `08H_알림설정_Exploration_V1` — `1158:7457`
- `08G1_기본휴식시간_Sheet_Exploration_V1` — `1163:676`
- `08G2_타이머종료음_Exploration_V1` — `1163:7296`
- `08I_FAQ_Exploration_V1` — `1232:812`
- `08I1_FAQ_Expanded_Exploration_V1` — `1232:924`
- `08J_문의하기_Exploration_V1` — `1257:927`
- `08J1_문의카테고리_Sheet_Exploration_V1` — `1260:946`
- `08J2_문의접수완료_Exploration_V1` — `1261:977`
- `08J3_문의전송실패_Exploration_V1` — `1261:1044`

Current PO-approved / recorded directions:
- `구독 관리`, `언어`, `테마` = TBD
- `운동 리마인더` removed
- default rest time uses a bottom-sheet drum-roll picker
- rest-time range = `없음` through `5분`, step = `5초`
- timer end sound currently has 3 choices; tapping selects and immediately previews the sound
- current sound labels `기본 / 차임 / 벨` are temporary until real sound assets are selected

## Workout settings — PRESENTATION / FLOW APPROVED

- current screen = `08G_운동설정_Exploration_V1` — `1158:7365`
- structure = 기본 휴식 시간 / 타이머 종료음 / 타이머 종료 진동 / 운동 중 화면 꺼짐 방지
- 기본 휴식 시간 = bottom-sheet wheel picker, `없음` through `5분`, `5초` step
- timer end sound = 3 current choices; one tap selects + immediately previews
- current sound labels are temporary until actual assets are chosen
- do not reinterpret current displayed toggle/value examples as newly locked launch defaults unless separately decided

## Notification settings — CURRENT SCOPE ACCEPTED

- current screen = `08H_알림설정_Exploration_V1` — `1158:7457`
- `운동 리마인더` is removed
- remaining rows = `휴식 타이머 알림`, `업데이트 및 공지`
- exact launch default on/off values are not newly locked by the session-handoff checkpoint

## 08B Profile + account — BASE LOCKED / ACCOUNT-EXIT PRIVACY POLICY UPDATED

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
- logout does not require a confirmation dialog
- account deletion entry remains in the profile header `⋮`
- current flow = `⋮ → 계정 관리 바텀시트 → 계정 탈퇴 → 전용 계정 탈퇴 화면 → 계정 탈퇴하기 → 최종 확인 다이얼로그`
- the bottom sheet is an entry point only and does not perform deletion directly
- dedicated deletion screen explains deletion scope, privacy destruction, irreversible loss, and rejoin behavior
- deletion scope shown as one comma-separated sentence = `운동 기록, 루틴, 직접 만든 운동, 프로필 및 신체 정보, 앱 설정 및 계정 데이터`
- same Google/Kakao provider can be used for a new signup later, but deleted historical app data is not restored
- final dialog actions = `취소 / 탈퇴하기`; final action is destructive red
- final dialog copy explicitly includes 개인정보
- actual account-exit processing starts only after final confirmation
- no 7-day / 30-day grace period in current MVP direction
- external Google/Kakao accounts themselves are not removed; the Fitness app account/data relationship is the target
- after successful completion, end the current session and return to login entry
- obsolete profile/account exploration frames explicitly removed by PO remain deleted

### Personal-information destruction policy
- account deletion is also a privacy-destruction event, not only account UI removal
- app-held nickname, profile image, gender, birthdate, body information, and app-held social-login linkage information are included when actually stored
- deletion must make the personal information non-restorable / non-reproducible
- if another law requires retention, only the required minimum data is kept separately from ordinary user data for the required period, then destroyed
- Google/Kakao provider accounts themselves are not deleted
- privacy policy must state processing/retention period, destruction procedure/method, and any legal-retention basis/items
- this policy was checked against Korean Personal Information Protection Act Articles 21 and 30 on 2026-09-14

### Screen sizing / CTA
- current Fitness screen width = `360px`
- minimum screen/frame height = `780px`
- never shrink below 780px because content is short
- content may extend the frame beyond 780px when needed
- page CTA belongs after page content and is not a sticky/fixed overlay

### Figma cleanup
- rejected `08B_OptionA_분리형` and `08B_OptionB_통합형` comparison frames were removed
- Option A / Option B comparison labels were removed
- superseded frames `08B_프로필_계정_Exploration_V2` and `08B2_프로필_계정탈퇴확인_Exploration_V1` were removed
- only the locked current 08B profile direction and current account-exit states remain active

Targeted Figma QA for base profile, account-management sheet, dedicated account-exit screen, final confirm, profile-photo sheet, comma-separated deletion scope, and privacy-destruction notice = PASS.

## Unit settings — APPROVED

- supported weight units = `kg / lb`
- global unit preference applies to current input, previous-value references, past workout records, completion/session detail, analysis, and PR weight displays
- changing units converts presentation/input display only; historical source records are not destructively rewritten
- per-exercise unit override is excluded from MVP
- Settings home shows the current unit value on the `단위 설정` row
- unit selector remains a bottom sheet with `kg (킬로그램)` and `lb (파운드)`
- Figma targeted QA = PASS

## FAQ — APPROVED

- FAQ default screen = `08I_FAQ_Exploration_V1` — `1232:812`
- expanded example = `08I1_FAQ_Expanded_Exploration_V1` — `1232:924`
- FAQ uses shared `AccordionItem` rather than local one-off rows
- question/answer presentation uses accordion `Collapsed / Expanded` states
- final current spacing:
  - question row `56px`
  - expanded answer top spacing `4px`
  - chevron visual `16×16`
- `문의하기` row chevron is normalized to the same canonical `chevron-right` component and 16px visual size used by the accordion
- FAQ default and expanded screenshots = PASS
- current FAQ frame height respects the global minimum `360×780`

## Support inquiry — APPROVED

- default screen = `08J_문의하기_Exploration_V1` — `1257:927`
- category selector = `08J1_문의카테고리_Sheet_Exploration_V1` — `1260:946`
- success state = `08J2_문의접수완료_Exploration_V1` — `1261:977`
- failure state = `08J3_문의전송실패_Exploration_V1` — `1261:1044`
- required fields = 문의 카테고리, 회신 이메일, 문의 내용
- image attachments are optional, maximum 3
- current category labels are first-pass copy and can be revised later without reopening the approved screen structure
- CTA = `보내기`
- empty/incomplete required fields keep submit unavailable
- all Fitness customer-support / inquiry operations route to `lumianthecompany@gmail.com`
- planned development reuses the validated OnTalk pattern: `app inquiry → Supabase record → DB trigger / Edge Function → Resend → ops inbox`
- operations destination email must remain server-side configuration rather than a client-embedded secret
- reply email is used as the response target for CS replies
- exact inquiry-record / attachment retention and deletion policy must be reflected in the privacy policy before production
- this approval is product/UX policy only; no Cursor implementation handoff has been requested
- inquiry default/category/success/failure Figma screenshots and shared-component linkage = PASS

## Legal / privacy presentation — EXTERNAL PUBLIC LINKS

- Settings keeps `이용약관` and `개인정보처리방침` entry rows
- full legal documents are not rendered as dedicated app screens
- each row will open a public external document URL
- planned publication surface = public Notion shared pages; actual pages / URLs are not created yet
- exact system-browser vs in-app-browser presentation is not locked yet
- Figma full-document screens removed:
  - temporary `08K_이용약관_Exploration_V1` — former `1267:1034`
  - temporary `08L_개인정보처리방침_Exploration_V1` — former `1268:1039`
  - obsolete legacy `08F_법률문서` — former `41:3827`
- Settings rows remain:
  - `SettingRow_이용약관` — `1158:781`
  - `SettingRow_개인정보처리방침` — `1158:785`
- pre-release follow-up must create actual public URLs, keep privacy/deletion policy consistent, disclose support inquiry handling, and provide an external account-deletion request web entry
- exact support inquiry / attachment retention period remains unresolved and must not be invented

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

### AccordionItem
- canonical shared `AccordionItem` — `1238:1139`
- variants:
  - `State=Collapsed`
  - `State=Expanded`
- exposed properties:
  - `Question`
  - `Answer`
  - `ShowDivider`
- existing Fitness tokens/styles and canonical `chevron-right` — `636:893` reused
- no new foundation token added

### TextArea
- canonical shared `TextArea` — `1255:1137`
- variants:
  - `State=Default`
  - `State=Filled`
  - `State=Focused`
- existing Fitness surface, border, radius, typography, placeholder/text, and focus tokens reused
- no new foundation token added

### AttachmentSlot
- canonical shared `AttachmentSlot` — `1255:1161`
- variants:
  - `State=Empty`
  - `State=Filled`
- existing `icon/plus`, `icon/image`, `icon/close-circle` reused
- current inquiry UI shows three 72px slots
- no new foundation token added

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

Continue in a new chat from **Group 08 closeout**.

1. decide whether `구독 관리 / 언어 / 테마` are visible at MVP launch or hidden/deferred
2. identify whether any remaining launch-level Group 08 policy actually blocks closeout
3. perform only the necessary final Settings-home cleanup / Group 08 lock

Release follow-up, not current Figma blocker:
- create actual public Terms / Privacy URLs
- create external account-deletion request URL
- finalize support-inquiry record / attachment retention period and disclose it
- choose final timer sound assets / labels if required before implementation/release

Do not recreate in-app legal full-text screens. Do not reopen locked 08B profile/account base, approved unit, workout settings, FAQ, support inquiry, Group 06, or Group 07 without a new issue.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
