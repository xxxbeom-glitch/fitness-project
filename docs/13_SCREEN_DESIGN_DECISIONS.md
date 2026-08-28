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
- Use a **single full-screen weight-training hero photograph** as the primary background.
- Apply a dark treatment/overlay so brand and authentication actions remain legible.
- Provider authentication actions are grouped near the bottom of the screen.
- Do **not** use a multi-slide marketing carousel for first entry.
- The composition should be Tonal-led in restraint and brand impact, while authentication behavior remains Fitness-specific.

### Still to decide
- Exact hero message/brand-copy treatment.
- Exact source/style of the hero photograph.
- Exact provider-button visual treatment and legal-copy placement.
- Loading/error/cancel presentation for provider authentication.

Do not copy Tonal or Hevy brand assets, exact copy, or proprietary imagery.
