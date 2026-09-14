# Group 08 Support Inquiry — Current PASS

**Date:** 2026-09-14  
**Status:** CURRENT · PO APPROVED · FIGMA QA PASS  
**Scope:** Group 08 settings/account support flow — `문의하기`

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `08 설정 · 계정` — `233:2079`
- inquiry default: `08J_문의하기_Exploration_V1` — `1257:927`
- category sheet: `08J1_문의카테고리_Sheet_Exploration_V1` — `1260:946`
- submit success: `08J2_문의접수완료_Exploration_V1` — `1261:977`
- submit failure: `08J3_문의전송실패_Exploration_V1` — `1261:1044`
- shared component: `TextArea` — `1255:1137`
- shared component: `AttachmentSlot` — `1255:1161`

## Approved inquiry form

The Fitness MVP inquiry form uses the same core structure previously validated in the OnTalk project.

Required fields:
- 문의 카테고리
- 회신 이메일
- 문의 내용

Optional:
- 이미지 첨부, maximum 3 images

Current category-sheet labels are first-pass product copy and may be revised later without reopening the approved screen structure:
- 앱 오류
- 운동 기록·루틴
- 분석·운동 데이터
- 계정·로그인
- 기능 제안
- 기타

The form CTA is `보내기`. Empty/incomplete required fields keep submission unavailable; attachments are not required.

## Support delivery policy

Fitness customer support / inquiry mail is centralized to:

`lumianthecompany@gmail.com`

Planned implementation reuses the already validated OnTalk operational pattern rather than inventing a second support pipeline:

`Fitness app inquiry → Supabase support record → DB trigger / Edge Function → Resend → lumianthecompany@gmail.com`

Implementation requirements when development begins:
- ops destination email must be server-side configuration, not a client-embedded secret
- the user's reply email must be retained as the reply target so operations can answer directly
- inquiry metadata may include app version, OS/device information, user identifier when authenticated, and source/flow when useful for support
- uploaded images must use private storage and be attached or securely referenced by the server-side notification flow
- exact retention/deletion policy for inquiry records and attachments must be reflected in the privacy policy before production release

This checkpoint records product/UX direction only. Product Owner has not requested Cursor/development handoff.

## Shared UI

### TextArea
- canonical shared `TextArea` — `1255:1137`
- variants:
  - `State=Default`
  - `State=Filled`
  - `State=Focused`
- reuses existing Fitness surface, border, radius, typography, placeholder/text, and focus-color tokens
- no new foundation token added

### AttachmentSlot
- canonical shared `AttachmentSlot` — `1255:1161`
- variants:
  - `State=Empty`
  - `State=Filled`
- uses existing `icon/plus`, `icon/image`, `icon/close-circle`
- three 72px attachment slots are shown in the inquiry form
- no new foundation token added

## Result states

### Success
- title: `문의가 접수되었어요`
- explains that a reply will be sent to the entered reply email
- confirmation action closes the result state

### Failure
- title: `문의 전송에 실패했어요`
- asks the user to check network status and retry
- actions: `취소 / 다시 시도`

Existing shared dialog patterns are reused.

## Screen sizing

- all current inquiry states use `360×780`
- global Group 08 rule remains: never shrink a screen below 780px height
- if future content grows, extend the frame vertically instead of compressing the viewport below 780px

## QA result

Targeted Figma QA PASS:
- inquiry form layout PASS
- category selector / bottom-sheet state PASS
- success dialog PASS
- failure dialog PASS
- shared `InputBox`, `Nav Header`, `CTA Button`, `DialogCard` reuse PASS
- shared `TextArea` / `AttachmentSlot` linkage PASS
- max 3 attachment presentation PASS
- `360×780` minimum frame rule PASS
- no current clipping PASS

## Next open item

Continue Group 08 with terms / privacy / legal presentation.

Legal/privacy work must reuse the already approved account-exit privacy-destruction policy and must define the support-inquiry data/attachment handling disclosed to users. Store-compliance work must also include an external account-deletion request path.
