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
- application stack is **React Native + Expo + TypeScript**, developed from **Windows PC + Cursor**
- Android and iOS share one primary codebase wherever practical
- Android runtime/device QA is performed continuously during implementation
- iOS-compatible code/configuration is maintained from the beginning, but iOS runtime/device QA remains **not complete** until an iPhone test device is available
- once an iPhone is acquired, release-critical iOS flows must receive real-device QA before iOS release
- a single internal Fitness account may link multiple supported sign-in providers
- Profile/Settings includes account/authentication management with provider states such as **연결됨 / 연결하기**
- provider linking requires real provider authentication; matching email alone must not silently merge accounts
- if a provider is already attached to another Fitness account, MVP blocks the link rather than merging histories; duplicate-account history merge is deferred
- workout recording is **offline-first**: every meaningful workout/session change is durably saved locally first
- core workout logging must remain usable without a live network connection
- server sync is **change-driven only**; no unsynchronized changes means no upload request
- ordinary edits use a **3-second debounce** before synchronization so rapid edits can be coalesced
- set completion, workout completion, app backgrounding, and network reconnection trigger an immediate sync attempt
- failed/offline sync changes remain durably queued and retry automatically when connectivity returns
- during an in-progress workout, the current active device's local state is authoritative for the latest unsynchronized changes
- after successful synchronization, the cloud account record is the long-term canonical record for completed workouts, routines, custom exercises, profile data, and optional body data; local storage remains the offline working copy/replica
- an active workout remains **in progress until the user explicitly finishes or discards it**
- app close, force-kill, phone lock, network loss, or device reboot must not end the workout
- reopening the app on the same device must recover the active session and preserve recorded session progress
- routines and completed history may synchronize across multiple signed-in devices
- an in-progress workout has **one active editing device at a time**; a second phone/tablet must not concurrently edit the same live session
- future Watch support may be a paired companion exception while preserving one logical active-session authority
- cross-device takeover/transfer is not required for MVP unless separately promoted
- in-app account deletion is required under Settings → Account management → Delete account
- deleting an account deletes all normal user data associated with that account, including workout history, routines, custom exercises, profile/body data, and synchronized account data
- there is **no recovery/grace period** after final account-deletion confirmation; the deletion is irreversible from the user's perspective
- account deletion does **not** require provider re-authentication immediately before deletion; a clear destructive final confirmation remains required
- deleting an account also unlinks/revokes all linked Google, Kakao, and Apple authentication providers where applicable
- the only account-deletion retention exception is data that must be kept by law for a defined period; only the minimum required data is retained, separated from ordinary product data, used only for that legal purpose, and deleted when the legal retention period ends
- legally retained data must not be used to restore the deleted Fitness account or normal workout/profile history
- exact backend deletion completion timing and cleanup mechanics remain implementation details to define before release
- monetization/pricing/subscription structure is **intentionally not fixed during the current Bootstrap pass**; it will be revisited later as the implemented product and real user value become clearer
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
- **Tonal is the primary visual/UI reference** for screen composition, visual hierarchy, restraint, typography emphasis, spacing rhythm, and overall fitness-product tone
- **Hevy is the primary functional/interaction reference** for practical weight-training flows such as fast set logging, prior-performance visibility, routines, exercise selection/history, and active-workout controls
- Tonal and Hevy are references rather than specifications: neither may override confirmed Fitness GitHub policy, and exact screens, copy, brand assets, proprietary imagery, or unverified tokens are not copied
- other design references are secondary and should be used only when a specific UX problem is not adequately covered by Tonal or Hevy
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
  `Product Decision -> UX IA/Storyboard -> Figma low-fi -> Tonal/Hevy reference research -> UI synthesis -> Figma refinement -> Design QA -> Development`
- Figma explicitly treated as visual artifact, not product-policy Source of Truth
- primary design-reference split confirmed: **Tonal-led visual/UI direction + Hevy-led workout functionality/interaction**, with GitHub policy remaining authoritative
- Mobbin/reference material remains pattern evidence, not exact-token/screen-copy specification
- exercise/health research evidence hierarchy and counter-evidence rules defined
- existing Fitness/Liftly design/code/data assets remain reuse candidates, not immutable product truth
- product brief updated for recommendation/self-build model
- decision log is consolidated through `DEC-021`; account/privacy/data ownership policy is materially settled
- account-entry direction fixed to Google/Kakao/Apple sign-in with Android+iOS parallel product planning
- account-provider linking confirmed in Profile/Settings; duplicate-account history merge is intentionally excluded from MVP
- offline-first workout persistence + automatic cloud sync confirmed
- synchronization cadence confirmed as change-driven with 3-second edit debounce and immediate sync on important lifecycle/boundary events
- canonical data ownership confirmed: active-device local state owns latest unsynced active-workout changes; successfully synced durable account data uses cloud as the long-term canonical record
- multi-device policy keeps one active workout writer while allowing synchronized non-active data across devices
- active-session lifecycle now survives app/process/device restart and remains active until explicit user finish/discard
- account deletion is confirmed to remove all normal account-associated user data, with no user-visible recovery/grace period, no provider re-authentication before final deletion confirmation, linked authentication providers unlinked/revoked on deletion, and only narrow legally required retention allowed
- monetization is intentionally deferred rather than prematurely constraining the MVP around an unvalidated revenue model
- platform/technical stack is confirmed in `docs/09_TECHNICAL_STACK.md`: React Native + Expo + TypeScript on Windows/Cursor with one shared Android/iOS codebase
- current Runtime/Device QA is Android-only; iOS real-device QA remains explicitly pending until an iPhone is acquired
- optional body-data and medical-boundary policies documented
- first-load calibration direction confirmed without demographic kg guessing
- V0.4 exercise-detail, self-build/custom-exercise, and first-use workout wireframes refined against current decisions and reference patterns
- Figma page **`V0.5_PRODUCTIZED_WIREFRAME`** created as a preserved successor to V0.4
- all **31 core wireframe screens** were restructured against current product decisions and multi-app reference patterns, with consistent 390×844 viewports, clearer root/detail/state hierarchy, and action prioritization
- first-load guidance, set feedback, rest timer, incomplete-end confirmation, and session recovery are represented as contextual in-workout/state surfaces rather than unnecessary standalone navigation concepts
- V0.5 structural QA found exactly 31 numbered screens and no unresolved placeholder/TBD copy inside the reviewed wireframes

Project OS v0.1 is **not frozen yet**. Product/privacy/data/platform decisions are now sufficiently stable to move into the next design validation pass.

## Deferred by explicit product decision

- monetization model, pricing, subscription/ad structure, and paid/free feature boundaries; revisit during later product development when concrete user value and scope are clearer
- exact recommended-program template count
- exact template exercise composition
- detailed variant matrix
- cross-device active-workout takeover/transfer unless later user demand justifies it
- duplicate-account workout-history merge/recovery unless real user demand justifies it

These should be decided after the relevant data or user need is available for review.

## Next bootstrap decisions

1. run screen-by-screen Design QA / redesign using the confirmed **Tonal visual + Hevy functional + Fitness policy** reference split
2. finalize minimum design tokens/components after core IA is stable
3. cross-document QA before Project OS v0.1 freeze

## Canonical source

`GitHub Repository`

Notion IDEA LAB, old Figma, and Liftly remain useful as discovery/research/reuse provenance. Once a product decision is confirmed for execution, GitHub is the maintained source of truth.

## Current blocker

No repository-structure blocker.

Current implementation planning may proceed only after the remaining design QA / design-system / cross-document gates are cleared or explicitly accepted as assumptions.

## Next action

Restart the **screen-by-screen design pass from the first-entry/login flow**, using:
- **Tonal** for visual composition, hierarchy, restraint, and UI tone
- **Hevy** for strength-training functionality and interaction efficiency
- **Fitness GitHub policy** for actual product behavior and scope

Each screen should be reviewed and approved one at a time before moving forward.

Do not design the final template matrix yet. That work is intentionally deferred until the exercise database is ready for review.

## Operating rule

This file contains only the current state, blockers, and next action. Historical decisions belong in `08_DECISIONS.md`; implementation history belongs in Issues/Commits/Tests.
