# 13 SCREEN DESIGN DECISIONS

**Status:** BOOTSTRAP — SCREEN-BY-SCREEN REVIEW IN PROGRESS
**Updated:** 2026-08-28

This document records approved screen-level UX/UI decisions during the current design QA/redesign pass.

Global reference rule:
- **Tonal** leads visual composition, hierarchy, restraint, spacing rhythm, and overall UI tone.
- **Hevy** leads practical strength-training functionality and repeated workout interactions.
- **Fitness GitHub policy** remains authoritative for actual behavior and scope.

## 01 — First Entry / Authentication

### Confirmed structure
- Signup and login are **not split into separate product paths**.
- Authentication uses provider-based **`계속하기`** actions.
- Existing linked users are signed in; first-time users receive a new internal Fitness account after successful provider authentication.
- Android providers: **Google / Kakao**.
- iOS providers: **Google / Kakao / Apple**.

### Confirmed visual composition
- Use a **single full-screen hero-media area** as the primary background treatment.
- The final hero asset may be a **photograph or video** selected/provided later by the Product Owner; exact source, subject, crop, motion treatment, and production style are intentionally deferred.
- The current Figma pass may use a replaceable placeholder asset and must not depend on one specific final image/video to remain legible and usable.
- Apply a dark treatment/overlay as needed so brand and authentication actions remain legible over the eventual media.
- Provider authentication actions are grouped near the bottom of the screen.
- Do **not** use a multi-slide marketing carousel for first entry.
- Show the **Fitness brand/logo plus one short hero line** rather than logo-only treatment or long explanatory copy.
- Keep the hero message concise so the media and brand retain primary visual impact.
- The exact hero wording is **provisional** during the current design pass and will be refined later with final naming/brand voice; temporary copy may be used in Figma without becoming product policy.
- The composition should be Tonal-led in restraint and brand impact, while authentication behavior remains Fitness-specific.

### Provider-button treatment — CONFIRMED
- Google, Kakao, and Apple authentication controls should remain immediately recognizable as their respective provider actions.
- The surrounding screen composition follows the Tonal-led Fitness visual direction, but provider buttons must not be visually homogenized in a way that conflicts with the provider's current official sign-in branding requirements.
- Exact provider button artwork, text treatment, spacing, color, icon use, and other brand-specific implementation details must be checked against each provider's current official guidance at implementation/release time rather than inferred from competitor screenshots.
- Fitness may harmonize placement, width, spacing between buttons, and surrounding layout where allowed, while preserving provider-required identity and treatment.

### Authentication transient states — CONFIRMED
- Provider authentication loading, user cancellation, and recoverable authentication errors remain **states of the first-entry screen**, not separate navigation screens.
- While a provider authentication attempt is in progress, the selected provider action shows clear in-place progress and prevents accidental duplicate submission.
- If the user cancels the provider flow, return quietly to the unchanged first-entry screen without presenting cancellation as an error.
- If authentication fails for a recoverable reason, keep the user on the first-entry screen and show a concise, non-blocking error message with an immediate retry path.
- These transient states must preserve the Tonal-led quiet visual composition while making system status unambiguous.

### Legal / terms / privacy treatment — CONFIRMED
- Keep **`이용약관`** and **`개인정보처리방침`** links persistently accessible in the lower legal area of the first-entry screen.
- Do **not** use a blanket sentence that treats provider sign-in as automatic consent to every legal/privacy item.
- After successful provider authentication, if the provider identity maps to an existing Fitness account, sign the user in without repeatedly asking for the same onboarding agreement on every login.
- If the provider identity is new, show one concise **new-user terms confirmation** step before completing normal first-run account setup.
- The new-user confirmation requires explicit agreement to the **service Terms of Use**.
- The **Privacy Policy remains separately viewable** and is not turned into a generic mandatory checkbox merely to process account data that is necessary for the service contract.
- If future product behavior introduces processing that actually requires user consent — for example optional marketing or other non-essential consent-based processing — that consent must be presented separately rather than bundled into the service-terms agreement.
- Exact production legal copy, lawful-basis mapping, and any consent-required data categories must receive a final legal/privacy review before release; the screen design must not invent those details from competitor screenshots.

### Deferred media decision
- Final hero photo/video selection and art direction are deferred until suitable media is available.
- Do not block the screen-level UX/design pass on final media production.

### Screen-01 status
- Core structure and interaction policy are sufficiently defined to proceed to Figma refinement.
- Final hero media and final hero marketing copy remain intentionally replaceable/deferred.

Do not copy Tonal or Hevy brand assets, exact copy, or proprietary imagery.
