# Group 01 — Login / First Entry Cross-group QA — 2026-09-14

**Status:** PRODUCT/UX FIGMA QA PASS · NO CURSOR HANDOFF

## Purpose

This is the canonical Group 01 verification and Figma component-history checkpoint for `01 로그인 · 첫 진입`. It consolidates the planning-vs-Figma QA pass plus all follow-up component/state refinements completed in the same session.

Canonical Figma file: `W3lZurXCXbThP67rF2xk2b`

## Canonical planning sources checked
- `docs/01_PRODUCT_POLICY.md`
- `docs/ux-decisions/2026-09-07-login-onboarding-figma-checkpoint.md`
- `docs/ux-decisions/2026-09-07-login-error-dialog-states.md`
- `docs/ux-decisions/2026-09-07-onboarding-basic-info-validation.md`
- `docs/ux-decisions/2026-09-07-onboarding-legal-consent.md`
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

## Product / policy result

### 01A Login
- unified social-login entry
- Android providers = Google / Kakao
- legal notice + Terms / Privacy text links remain
- CS entry = `로그인에 문제가 있나요? 문의하기`
- no standalone login-error route
- failures use DialogCard / DialogButtons

### 01C Basic information
- required = sex + DOB
- default sex = none selected
- DOB placeholder = `19880101`
- DOB = YYYYMMDD, 8 digits, valid date
- incomplete/invalid required state keeps `시작하기` Disabled
- invalid DOB shows inline error
- sex/DOB are not used to infer workout starting weight
- demographic use = later sex/age distribution analysis
- exact age restriction remains TBD

Removed/forbidden standalone states remain absent:
- separate `01B` Terms screen
- standalone `01D` Login Error screen

## Current Group 01 Figma states
Page `01 로그인 · 첫 진입` — `233:2072`

- `01A_Login` — `40:2075`
- `01C_Basic_Info` — `40:2138`
- `01C1_Basic_Info_Error` — `1292:1183`
- `01C2_Basic_Info_Focused` — `1314:645`
- `01C3_Basic_Info_Filled` — `1314:670`
- `01C4_Basic_Info_Disabled` — `1314:695`
- `01A1_Login_Error_Overlay_Cases` — `1296:643`
  - General — `1296:644`
  - Network — `1296:676`
  - Service — `1296:708`

## Complete correction / refinement history

### 1. Basic-info helper copy removed
Initial helper copy implied the demographic fields were required for workout analysis. It was temporarily corrected to demographic-distribution wording, then removed by PO decision because it added little UI value.

Current Basic Info UI contains no redundant helper sentence. The collection purpose remains a policy/privacy concern.

### 2. DOB error state added
`01C1_Basic_Info_Error` was added with:
- selected sex example
- invalid DOB example `19881340`
- inline copy `올바른 생년월일 8자리를 입력해주세요.`
- CTA Disabled
- semantic danger binding

### 3. SexOptions componentized
Ad-hoc sex-option frames were replaced by canonical `ModeTile` instances.

Canonical set: `ModeTile` — `1292:1142`

The selected styling was finalized by PO as:
- background = `brand/primary`
- text = `text/on-brand` dark/black treatment

The temporary white-text direction was reverted.

### 4. InputBox Error state added, then full state system normalized
Canonical set: `InputBox` — `635:807`

Final axes:
- `State = Default / Filled / Focused / Error / Disabled`
- `LeadingIcon = None / Social`
- total = **10 variants**

Normalization history:
- existing standalone `Error + None` — `1292:1143` moved into canonical InputBox set
- `Error + Social` — `1312:922` added
- `Disabled + None` — `1312:925` added
- `Disabled + Social` — `1312:927` added
- Disabled follows existing Fitness 30% opacity convention
- Error stroke remains bound to `state/danger`
- existing bg/surface, border, spacing, radius bindings retained

Explicit Basic Info field-state screens now verify actual component instances:
- Default → `01C_Basic_Info`
- Error → `01C1_Basic_Info_Error`
- Focused → `01C2_Basic_Info_Focused`
- Filled → `01C3_Basic_Info_Filled`
- Disabled → `01C4_Basic_Info_Disabled`

Focused/Filled/Disabled screenshot and read-back QA = PASS.

### 5. ModeTile / SexOptions interaction variants expanded
Final axes:
- `Selected = False / True`
- `State = Default / Pressed / Disabled`
- total = **6 variants**

Variants:
- False / Default — `1292:1138`
- True / Default — `1292:1140`
- False / Pressed — `1315:603`
- True / Pressed — `1315:605`
- False / Disabled — `1315:607`
- True / Disabled — `1315:609`

Behavior:
- selected Default = `brand/primary + text/on-brand`
- selected Pressed = 75% opacity, aligned with CTA primary pressed behavior
- unselected Pressed = `bg/elevated`
- Disabled = 30% opacity
- all six variants remain 154×52

Targeted QA: structure PASS, semantic bindings PASS, existing Group 01 linkage PASS, duplicate check PASS, screenshot QA PASS.

### 6. hint-icon componentized and finalized at 16px
PO supplied the icon in `01C1_Basic_Info_Error`.

Canonical component:
- `icon/hint` — `1302:594`

History:
- first componentized at 14×14
- increased by PO request to next size
- **final = 16×16**

Validation instance:
- `HintIcon` — `1302:597`
- parent = `FieldMessage_Error`
- vector strokes = `state/danger` — `VariableID:278:931`
- BirthError copy uses the same semantic danger color

No raw error color or duplicate icon was introduced.

### 7. Login dialog QA presentation normalized
The previous isolated DialogCard references were replaced with 360×780 full-screen QA states.

Final presentation rule used here:
- viewport = 360×780
- empty dark/black background is allowed
- do not duplicate the underlying login UI for QA reference
- full-screen `ModalOverlay` = 360×780
- overlay uses `bg/overlay`
- canonical DialogCard instance remains centered at viewport center x=180 / y=390

General / network / service error states all follow this structure. Screenshot/read-back = PASS.

### 8. Spacing / naming cleanup
Existing values were rebound to semantic spacing variables where appropriate, including login legal/CS gaps, DialogCard padding, and arrow-left padding. Product screen/state names were normalized to semantic English names. Intentional 62px status-area shell offset was not reinterpreted as ordinary spacing.

### 9. Common_Component canonical collection created
PO created page:
- `Common_Component` — `1313:8699`

Collection area:
- `01_GROUP_CONFIRMED_COMPONENTS` — `1318:593`

The following **canonical originals were moved, not copied**:
- `AppLogo` — `633:3251`
- `Nav Header` — `360:2361`
- `CTA Button` — `635:793`
- `InputBox` — `635:807`
- `ModeTile` — `1292:1142`
- `DialogButtons` — `635:814`
- `DialogCard` — `635:842`
- `icon/arrow-left` — `635:854`
- `icon/hint` — `1302:594`

They are grouped for later design-guide/component-guide work under:
- Brand & Navigation
- Forms & Selection
- Feedback & Dialog
- Icons

Move QA verified:
- existing Group 01 instances still resolve to the same original component IDs
- InputBox states remain linked to `635:807`
- SexOptions remain linked to `1292:1142`
- login DialogCard instances remain linked to `635:842`
- HintIcon remains linked to `1302:594`
- no duplicate originals for this moved Group 01 set remain in the old `MVP_공용_UI` component-library area
- collection screenshot QA = PASS

## Current confirmed Group 01 component inventory
- AppLogo
- Nav Header
- CTA Button
- InputBox — 10 variants
- ModeTile — 6 variants
- DialogButtons
- DialogCard
- icon/arrow-left
- icon/hint — 16px

These canonical originals are now collected on `Common_Component` for future design-guide documentation.

## Dependency / regression result
- Group 01 product-screen component linkage remains intact after canonical relocation
- no avoidable detached replacement was introduced
- no duplicate canonical family was created during the latest state expansions
- current targeted visual and structure QA = PASS

## Boundary / deferred
This QA does not decide a new age cutoff, email/password auth, separate Terms screen, standalone login-error route, sex/DOB-based starting-weight logic, or development implementation.

## Development boundary
**NO CURSOR IMPLEMENTATION HANDOFF.**

The project remains in Product/UX Figma verification and design-system consolidation mode until PO explicitly changes phase.
