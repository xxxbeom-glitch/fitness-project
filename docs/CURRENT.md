# CURRENT — Fitness Project

**Updated:** 2026-08-28

## Current mode

`BOOTSTRAP MODE`

The repository operating structure is initialized. Product discovery is being converted into explicit product decisions before implementation begins.

## Current product state

Confirmed:
- general-purpose weight-training tracker
- primary first-run split: **recommended routine / build my own routine**
- users are segmented more by desired guidance/control than by beginner vs experienced labels alone
- recommendation uses **curated program-template matching**, not LLM-generated routines
- one primary recommended routine is shown by default
- initial recommendation onboarding is intentionally short: **goal + weekly training availability + workout duration**
- goal question copy is fixed as **`운동 목표가 무엇인가요?`**
- goal choices are fixed as **체지방 감량 / 근육량 증가 / 체력 향상**
- weekly-availability question copy is fixed as **`일주일에 며칠 운동할 수 있나요?`**
- weekly-availability choices are fixed as **1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일**
- selected availability does not require prescribing resistance training on every available day
- workout-duration choices are fixed as **30 / 45 / 60 minutes**; no `75+` option in the initial recommendation flow
- initial recommended-routine experience is **gym-first**; no separate home-workout recommendation branch in the first scope
- training experience, equipment inventory, weekday assignment, height/body weight, and sex/gender are not required to receive the first recommendation
- accepting a recommended routine goes directly to Home; no post-recommend weekday-scheduling step is inserted
- weekday scheduling remains optional and can be configured later
- scheduled users can see **Today's workout**; unscheduled users can see **Next workout**
- first release requires account sign-in; guest mode is not in the initial scope
- Android sign-in providers: **Google / Kakao**
- iOS sign-in providers: **Google / Kakao / Apple**
- Android and iOS are intended to proceed in parallel rather than treating iOS as a later port
- a single internal Fitness account may link multiple supported sign-in providers
- Profile/Settings includes account/authentication management with provider states such as **연결됨 / 연결하기**
- provider linking requires real provider authentication; matching email alone must not silently merge accounts
- if a provider is already attached to another Fitness account, MVP blocks the link rather than merging histories; duplicate-account history merge is deferred
- workout recording is **offline-first**: durable local save first, automatic cloud synchronization when connectivity is available
- core workout logging must remain usable without a live network connection
- an active workout remains **in progress until the user explicitly finishes or discards it**
- app close, force-kill, phone lock, network loss, or device reboot must not end the workout
- reopening the app on the same device must recover the active session and preserve recorded session progress
- routines and completed history may synchronize across multiple signed-in devices
- an in-progress workout has **one active editing device at a time**; a second phone/tablet must not concurrently edit the same live session
- future Watch support may be a paired companion exception while preserving one logical active-session authority
- cross-device takeover/transfer is not required for MVP unless separately promoted
- in-app account deletion is required under Settings → Account management → Delete account
- deleting an account deletes all user data associated with that account, including workout history, routines, custom exercises, profile/body data, and synchronized account data
- there is **no recovery/grace period** after final account-deletion confirmation; the deletion is irreversible from the user's perspective
- exact backend deletion completion timing, re-authentication, legally required retention exceptions, provider unlinking, and backend cleanup mechanics still need confirmation
- sex/gender is not used to assign a fixed first working weight
- first working weight is calibrated from actual performance when prior history is absent
- first-load guidance uses a short, skippable **in-workout coach-mark state**, not a standalone tutorial route
- exercises with no history show an explicit no-history state and do not receive a guessed fixed working weight
- `8–12 reps` is the default first-calibration range only when a program does not define another target rep range
- after the first set, the user can classify the load as **가벼웠어요 / 적당했어요 / 무거웠어요** in a compact in-workout sheet and adjust the next set accordingly
- later sessions prioritize actual prior kg/reps over population-based estimates
- exact curated template count/composition is deferred until the exercise database and substitution data are reviewed
- the template library may later contain multiple overlapping/similar variants; it does not need to be artificially small
- Home direction is action-first with large cards rather than a dense analytics dashboard; summary metrics must be directly interpretable
- recommended exercises should prioritize common, understandable, accessible gym movements
- unavailable equipment should be handled with simple exercise substitutions
- beginner onboarding should not require split-training theory or detailed equipment knowledge
- medical diagnosis and condition-specific exercise safety judgments are outside product scope
- exercise detail is **text-first and media-optional**; no fixed empty 3D/video area is required
- exercise detail may show recent personal performance and one prioritized reviewed guide video when available
- self-built routines expose per-exercise **set count + target rep range** instead of silently inventing rep targets after save
- custom exercises are MVP-critical and minimally carry **name + equipment + primary muscle + optional secondary muscle + logging method**
- height/body weight can remain optional profile data later
- fast logging and prior-performance visibility remain core after the routine is selected
- flexible session editing remains core
- active-session recovery is release-critical
- Watch / MCP / InBody / Health integrations / social / primary AI coaching remain post-MVP unless promoted by a later decision

## Project OS bootstrap status

Completed:
- repository operating structure
- top-level `PROJECT_INSTRUCTIONS.md` upgraded from OnTalk lessons for Fitness
- 8-role agent model defined: Product / Research-Evidence / UX / UI-Design / Dev / QA / Growth / Ops
- Growth/Ops defined but intentionally dormant until useful
- Evidence Gate defined for exercise/health/product claims
- Decision Challenge Gate defined: strongest support / strongest objection / different framing
- Regression & Impact Gate defined from OnTalk regression lessons
- Fitness-specific Global Invariants added
- Fitness-specific Regression Matrix added
- engineering evidence split into Logic / Integration / Runtime(Device)
- AI-assisted design pipeline defined:
  `Product Decision -> UX IA/Storyboard -> Figma low-fi -> Mobbin/reference research -> UI synthesis -> Figma refinement -> Design QA -> Development`
- Figma explicitly treated as visual artifact, not product-policy Source of Truth
- Mobbin explicitly treated as pattern reference, not exact-token/screen-copy source
- exercise/health research evidence hierarchy and counter-evidence rules defined
- existing Fitness/Liftly design/code/data assets remain reuse candidates, not immutable product truth
- product brief updated for recommendation/self-build model
- decision log updated through `DEC-020`
- account-entry direction fixed to Google/Kakao/Apple sign-in with Android+iOS parallel product planning
- account-provider linking confirmed in Profile/Settings; duplicate-account history merge is intentionally excluded from MVP
- offline-first workout persistence + automatic cloud sync confirmed
- multi-device policy keeps one active workout writer while allowing synchronized non-active data across devices
- active-session lifecycle now survives app/process/device restart and remains active until explicit user finish/discard
- account deletion is confirmed to remove all account-associated user data, with no user-visible recovery/grace period after final confirmation
- optional body-data and medical-boundary policies documented
- first-load calibration direction confirmed without demographic kg guessing
- V0.4 exercise-detail, self-build/custom-exercise, and first-use workout wireframes refined against current decisions and reference patterns
- Figma page **`V0.5_PRODUCTIZED_WIREFRAME`** created as a preserved successor to V0.4
- all **31 core wireframe screens** were restructured against current product decisions and multi-app reference patterns, with consistent 390×844 viewports, clearer root/detail/state hierarchy, and action prioritization
- first-load guidance, set feedback, rest timer, incomplete-end confirmation, and session recovery are represented as contextual in-workout/state surfaces rather than unnecessary standalone navigation concepts
- V0.5 structural QA found exactly 31 numbered screens and no unresolved placeholder/TBD copy inside the reviewed wireframes

Project OS v0.1 is **not frozen yet**. The operating model is now materially stronger, but several product/implementation decisions remain open.

## Deferred by explicit product decision

- exact recommended-program template count
- exact template exercise composition
- detailed variant matrix
- cross-device active-workout takeover/transfer unless later user demand justifies it
- duplicate-account workout-history merge/recovery unless real user demand justifies it

These should be decided after the relevant data or user need is available for review.

## Next bootstrap decisions

1. finish account/privacy/data architecture: deletion re-authentication, provider unlinking, retention exceptions, and canonical data ownership
2. monetization stance for the first release
3. finalize platform/technical stack for parallel Android+iOS delivery
4. run Design QA on the current productized wireframes / successor design artifacts after the remaining product policies are settled
5. finalize minimum design tokens/components after core IA is stable
6. cross-document QA before Project OS v0.1 freeze

## Canonical source

`GitHub Repository`

Notion IDEA LAB, old Figma, and Liftly remain useful as discovery/research/reuse provenance. Once a product decision is confirmed for execution, GitHub is the maintained source of truth.

## Current blocker

No repository-structure blocker.

Implementation should not begin as if the product were fully specified until the remaining Bootstrap decisions are resolved or explicitly marked as assumptions/TBD.

## Next action

Product Owner and ChatGPT are resolving the remaining non-design Bootstrap decisions one by one.

Next product decision: **account deletion re-authentication behavior**.

Design QA and final design-system cleanup can follow after these product policies are sufficiently stable.

Do not design the final template matrix yet. That work is intentionally deferred until the exercise database is ready.

## Operating rule

This file contains only the current state, blockers, and next action. Historical decisions belong in `08_DECISIONS.md`; implementation history belongs in Issues/Commits/Tests.
