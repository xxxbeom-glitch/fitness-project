# 08 DECISIONS

## DEC-001 — General-purpose tracker over weekday-only routine app

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
The product is a general-purpose weight-training tracker. Weekday scheduling is an optional convenience path, not the core product definition.

### Why
Users may train from saved routines, decide on the day, perform ad-hoc sessions, or use recommendations. A weekday-only model would overfit one training habit and distort Home/Onboarding/IA decisions.

### Product impact
- Home must support more than one workout-start path.
- Routine data must not require weekday assignment.
- Scheduled routines may be added as shortcuts without becoming mandatory.

---

## DEC-002 — Fast logging before AI coaching

**Date:** 2026-08-27
**Status:** CONFIRMED — TARGET FRAMING REFINED BY DEC-005

### Decision
Fast logging, prior-performance visibility, and flexible workout editing remain core product priorities. The product is not an AI coach-first experience.

### Why
Once a user starts training, repeated interaction friction still matters regardless of whether the routine was recommended by the app or built by the user.

### Product impact
- Inline previous performance is core.
- Minimal set interaction is core.
- AI coaching/chat is not the primary product interface.
- Recommendation features must not weaken user control during real workouts.

---

## DEC-003 — Custom exercises are MVP-critical

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Users must be able to create custom exercises in MVP.

### Why
Real gyms differ materially in machine brands, models, and available movements. A fixed global exercise database would force users into inaccurate substitutions.

### Product impact
Custom exercises require independent historical records and should behave like first-class exercises.

---

## DEC-004 — Session reliability is a release-critical quality requirement

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
An active workout must be recoverable after app interruption/restart. Record loss is considered a trust-breaking defect.

### Product impact
Persistence/session-recovery architecture must be considered before implementation, not bolted on later.

---

## DEC-005 — Recommendation and self-build are equal primary entry modes

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
The first-run product experience should offer two equal primary paths:

1. get a recommended routine
2. build my own routine

The product should not define its audience only as beginners or only as experienced lifters. The more useful segmentation is how much help the user wants with program design.

### Why
Some users want a ready-to-use program, while others already know what they want to train. Making either path secondary would unnecessarily narrow the product.

### Product impact
- onboarding must branch early between recommendation and self-build
- self-build must not be hidden behind an “advanced” path
- recommended-routine users and self-build users should converge into the same core routine/workout/history system
- product principle: help only as much as the user wants

---

## DEC-006 — Recommended routines use curated program matching, not LLM generation

**Date:** 2026-08-27
**Status:** CONFIRMED — INPUT DETAILS REFINED BY DEC-009

### Decision
Recommended routines will be selected from a curated, QA-reviewed program-template system using structured onboarding inputs.

The app should present **one primary recommended routine** by default instead of generating multiple competing options or asking an LLM to invent a new program for each user.

### Original recommendation inputs
The initial input list discussed on 2026-08-27 included goal, weekly availability, workout duration, experience, environment, optional weekdays, and optional height/body weight. The initial MVP input set is superseded by DEC-009.

### Why
A curated matching system is:
- predictable
- testable
- easier to QA as a real training program
- faster and cheaper to run
- less likely to produce inconsistent or inappropriate exercise combinations

Structured data already covers the first recommendation problem. An LLM is not required for MVP.

### Product impact
- build a reusable program-template library rather than a free-form generation prompt
- onboarding inputs select a suitable template
- a user's selected weekly frequency/availability is an input, not a command to prescribe an unnecessarily high number of hard resistance-training sessions
- LLM/natural-language functionality may be considered later for explanation or complex exception handling where it materially improves UX

---

## DEC-007 — Weekday assignment is optional

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Weekly training frequency may guide program matching, but users are not required to assign routines to specific weekdays.

### Why
Fixed weekdays reduce decision-making and enable reminders for predictable schedules, but they become friction for users with changing work or personal schedules.

### Product impact
With weekdays assigned:
- Home may show **Today's workout**
- reminders and missed-session handling may use the schedule

Without weekdays assigned:
- Home may show **Next workout**
- the program continues in sequence

Both modes must be first-class and use the same underlying routine/workout system.

---

## DEC-008 — Recommended exercises prioritize accessibility and simple substitution

**Date:** 2026-08-27
**Status:** CONFIRMED

### Decision
Recommended programs should favor common, understandable, broadly accessible resistance-training movements rather than unnecessarily technical exercise selections.

When the recommended equipment is unavailable, the app should offer a small set of practical substitutes that preserve the training purpose as reasonably as possible.

### Why
A beginner should not need detailed equipment knowledge or programming theory just to begin training. At the same time, no fixed exercise database can assume that every gym has the same machines.

### Product impact
- common machines, cables, dumbbells, Smith-machine exercises, bodyweight movements, and other accessible options may all be used where appropriate
- substitution relationships should be modeled internally by exercise family / movement purpose rather than “same body part = same exercise”
- the UI should expose simple replacement choices without requiring the user to understand internal exercise taxonomy
- onboarding should not quiz beginners on split terminology or every machine in their gym
- if a user dislikes or cannot use an exercise, replacement/removal should be possible without requiring the app to diagnose why
- medical diagnosis and condition-specific exercise safety judgments remain outside product scope

---

## DEC-009 — Initial recommendation onboarding is three inputs and gym-first

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
The initial recommended-routine onboarding should use only three required matching inputs:

1. goal
2. weekly training availability
3. preferred workout duration

The goal question uses simple user-facing language.

Approved user-facing wording:

> **운동 목표가 무엇인가요?**

Approved choices:

- **체지방 감량**
- **근육량 증가**
- **체력 향상**

The weekly-availability question should be framed as **realistic availability rather than aspiration** and expressed in days.

Approved user-facing wording:

> **일주일에 며칠 운동할 수 있나요?**

Approved choices:

- **1일**
- **2일**
- **3일**
- **4일**
- **5일**
- **6일**
- **7일**

The selected number represents how many days the user can realistically make available for training. It does **not** require the matcher to prescribe resistance training on every selected available day.

The preferred workout-duration choices for the initial recommendation flow are:

- **30분**
- **45분**
- **60분**

The initial recommendation scope does not ask users to plan sessions longer than 60 minutes. `75분+` is removed from the initial onboarding.

The initial recommendation experience is gym-first. A separate home-workout recommendation branch is not part of the initial scope.

Training experience, detailed weekday assignment, height/body weight, and equipment inventory are not required to receive the first recommended routine.

Weekday assignment may be offered later as an optional scheduling step. Height/body weight may be collected later as optional profile data when there is a clear product purpose.

The curated template library does not need to be artificially small. It may contain multiple overlapping or similar variants to provide adequate coverage and predictable matching. Exact template count and exercise composition are deferred until the exercise database and substitution data are ready for review.

### Why
The recommendation flow should remove decisions, not replace them with a long questionnaire.

Adding home/gym branching, experience bands, body data, weekday details, and equipment inventory at first entry creates additional combinations and design/QA scope before their incremental recommendation value is proven.

A gym-first scope also aligns with the immediate product context: common gym exercises, machines, substitutions, and fast workout logging are already core design concerns.

Framing weekly availability as days makes the question concrete and closer to the actual scheduling constraint the matcher needs. It also avoids interpreting a user's available days as a requirement to prescribe the same number of hard training sessions.

Capping the initial duration choices at 60 minutes keeps the recommendation space tighter and better aligned with the product's goal of practical, repeatable sessions rather than long-form program design.

### Product impact
- recommendation onboarding IA becomes shorter and easier to storyboard
- no home/gym/both question in the initial recommendation flow
- no home-specific template matrix is required for first release
- recommendation templates are finalized after exercise DB review rather than before it
- goal copy is fixed as `운동 목표가 무엇인가요?`
- goal choices are fixed as `체지방 감량 / 근육량 증가 / 체력 향상`
- weekly availability copy is fixed as `일주일에 며칠 운동할 수 있나요?`
- weekly availability choices are fixed as `1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`
- workout-duration choices are fixed as `30분 / 45분 / 60분`
- self-built routines and the exercise database may still include bodyweight or other exercises; this Decision limits the recommendation branch, not the entire tracker

---

## DEC-010 — First working weight is calibrated through actual performance, not sex/gender

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
The initial recommendation onboarding does **not** collect sex/gender for the purpose of assigning a starting weight.

For a weighted exercise with no prior-performance history, the app should help the user find an appropriate first working weight through a short, skippable in-workout guide rather than guessing a fixed kg value from demographics.

The default first-load guidance is:

1. start with a conservatively light weight
2. aim for **8–12 repetitions** as the general first-calibration range when the program does not specify another rep range
3. complete the first set
4. ask the user how the weight felt:
   - **가벼웠어요**
   - **적당했어요**
   - **무거웠어요**
5. guide the next set accordingly:
   - light → consider increasing slightly
   - appropriate → keep the weight
   - heavy → reduce the weight
6. save the actual result as the user's own history
7. on later sessions, prioritize previous kg/reps over population-based estimates

### First-use UX direction
The first workout should teach the interaction inside the real workout screen with short coach marks rather than a long tutorial before training.

Example sequence:

`중량 입력 → 목표 반복수 확인 → 세트 완료 → 체감 난이도 피드백`

The guide must be skippable because experienced users may understand both training and the logging model already.

### Rep-range rule
`8–12 reps` is a practical default for first-load calibration, not a permanent rule for every exercise or program.

The data model should allow a program/template or exercise prescription to provide its own target rep range, such as `6–8`, `8–12`, or `10–15`, without changing the workout UI architecture.

### Why
Sex/gender alone does not estimate an individual's usable starting load accurately enough for this product. Actual performance is more directly relevant and becomes increasingly useful after the first recorded session.

This also preserves the intentionally short recommendation onboarding while creating a clear path from first-use guidance to the product's core strength: prior-performance-based logging.

### Product impact
- sex/gender is not required in the initial recommendation onboarding for starting-load logic
- no fixed `male starting kg` / `female starting kg` table should drive the first workout
- first-load guidance belongs in workout execution UX, not recommendation onboarding
- exercises with no prior history need a clear `no-history` state
- later sessions should surface prior performance inline and minimize repeated input
- bodyweight, timed, assisted, or otherwise non-standard load exercises may require exercise-type-specific guidance rather than forcing the weighted-exercise calibration flow

---

## DEC-011 — Exercise detail is text-first and media-optional

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
Exercise detail must remain complete and useful without requiring a 3D animation, proprietary exercise animation, or embedded video.

The default detail hierarchy is:

1. exercise name and structured metadata
2. recent personal performance when available
3. concise step-by-step instructions
4. a short check point / reference note when useful
5. one prioritized guide video when a reviewed embeddable video is available

A fixed empty media slot must not be reserved for exercises without media.

For external video, manufacturer-official content is preferred for machine-specific setup; a reviewed professional/expert source may be used for general movement guidance. The whole video section is hidden when no reviewed source is available.

### Product impact
- 3D/animation is optional enhancement data, not a required exercise-detail dependency
- recent performance links to the existing exercise-history experience
- library-selection context uses `이 운동 추가` as the primary action
- exercise replacement remains a replacement-flow action rather than a permanent exercise-detail CTA
- media deletion or embed failure must not break the core exercise-detail experience

---

## DEC-012 — Self-built routines and custom exercises use structured prescription data

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
A self-built routine must expose each exercise's set count and target rep prescription rather than storing only an exercise name plus set count.

Users can open an exercise row to edit values such as `3세트 · 8–12회` or another program-appropriate range.

Custom exercises in MVP use the following minimum structured metadata:

- exercise name
- equipment
- primary muscle
- optional secondary muscle
- logging method / exercise type needed for recording

### Why
Target rep ranges are part of the workout prescription and must have an explicit source in a self-built routine. Structured custom-exercise metadata is also needed for useful search, history, filtering, substitution, and exercise-type-specific logging behavior.

### Product impact
- routine creation cannot silently invent a rep range only after save
- program templates may supply their own target ranges
- custom exercises remain first-class history entities while carrying enough metadata to participate in the broader exercise system

---

## DEC-013 — First-load calibration and set feedback stay inside the active workout

**Date:** 2026-08-28
**Status:** CONFIRMED — REFINES DEC-010 UX

### Decision
First-load guidance and the first-set weight-feeling question are interaction states of the active workout screen, not separate navigation destinations.

For a weighted exercise with no history:

- show an explicit no-history state
- do not prefill a guessed working weight
- show the program target range when available
- offer a short skippable first-load coach mark in workout context

After the first set, show a compact in-workout sheet with the fixed choices:

- **가벼웠어요** → consider increasing the next set
- **적당했어요** → keep the current load
- **무거웠어요** → reduce the next set

The choice is an immediate action; an additional full-screen confirmation step is unnecessary.

### Product impact
- V0.4 wireframes `19_첫중량가이드_WF` and `21_세트피드백_WF` represent overlay/sheet states on the active workout, not standalone routes
- `20_운동기록_WF` includes a visible no-history example alongside exercises with prior history
- later sessions continue to prioritize inline prior kg/reps for fast logging

---

## DEC-014 — Accepting a recommended routine goes directly to Home

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
After the user completes the three recommendation questions, reviews the single recommended routine, and chooses **`이 루틴 사용하기`**, the routine is saved and the user goes directly to Home.

The initial recommendation flow does **not** insert a weekday-scheduling step after acceptance.

Weekday scheduling remains optional and can be configured later from the routine/program settings.

### Why
The recommendation flow is intentionally short. Requiring or prompting weekday assignment immediately after the recommendation would reintroduce friction for a setting that is not required to use the product.

### Product impact
- default recommendation path: `3 questions → recommendation result → 이 루틴 사용하기 → Home`
- an unscheduled recommended routine appears on Home as **`다음 운동`** and advances in program sequence
- a user who later assigns weekdays may see **`오늘의 운동`** when a scheduled session applies
- routine acceptance must not be blocked by calendar/schedule setup

---

## DEC-015 — Account login is required; supported providers are Google, Kakao, and Apple on iOS

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
The MVP requires account authentication before normal product use. Guest mode is not part of the initial scope.

Supported login providers:
- Android: **Google / Kakao**
- iOS: **Google / Kakao / Apple**

Android and iOS are planned in parallel rather than treating iOS as a later port.

### Why
The product is intended to preserve workout history across reinstalls and devices, and cloud-backed identity provides a stable account boundary for synchronization and future paid/data features.

### Product impact
- first-run IA includes authentication before the recommendation/self-build entry split
- account identity must be platform-independent internally even when the external login provider differs
- authentication failures must not corrupt or partially create workout data
- future account-linking/provider-linking behavior should avoid duplicate user identities

---

## DEC-016 — Workout records use offline-first local persistence with automatic cloud synchronization

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
Workout recording must not depend on a live network connection.

Core workout/session changes are written to durable local storage first. When connectivity is available, the app automatically synchronizes the user's data to the cloud account.

### Why
Gyms can have weak or intermittent connectivity, and workout-record loss is a trust-breaking failure. A network request must not sit on the critical path for completing a set or preserving an active session.

### Product impact
- set completion, kg/reps edits, session progress, and workout completion must remain usable offline
- active-session recovery must use durable local state, not only server state
- synchronization retries automatically after connectivity returns
- UI may expose a lightweight sync/problem state when needed, but normal logging should not require manual sync
- data architecture must include stable record identifiers and enough sync metadata to avoid duplicate writes and support deterministic conflict handling
- exact multi-device conflict policy is a separate product/technical decision

---

## DEC-017 — Only one device may actively edit an in-progress workout

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
A signed-in account may use multiple devices for synchronized routines, history, and other non-active data, but an **in-progress workout has exactly one active editing device at a time**.

A second phone/tablet must not concurrently edit the same active workout session. Future Watch support may be designed as an explicitly paired companion exception rather than as an independent concurrent editor.

### Why
The product is offline-first. Allowing two independent devices to edit the same live session while either device may temporarily be offline creates ambiguous conflicts around set completion, kg/reps changes, exercise ordering, session completion, and recovery. Preventing concurrent live-session writers is substantially safer than relying on silent last-write-wins behavior.

### Product impact
- routines and completed history remain available across signed-in devices after synchronization
- the active workout needs an identifiable owning device/session writer
- another device must not silently overwrite or merge concurrent active-session edits
- the UI should clearly explain when an active workout is currently owned by another device
- exact device-takeover / transfer behavior is a separate decision
- future Watch behavior must preserve a single logical session authority even if phone and Watch collaborate

---

## DEC-018 — An active workout remains active until the user explicitly finishes or discards it

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
Starting a workout creates an active session that remains **in progress until the user explicitly finishes the workout or deliberately discards/cancels that session**.

Closing the app, force-killing it, switching apps, losing network connectivity, locking the phone, or rebooting the device does **not** end the workout.

When the app starts again on the same device, the persisted active session must be recoverable with its recorded exercises, sets, kg/reps values, completion states, ordering, and other session progress intact.

### Why
The user—not the app lifecycle—determines whether a workout is finished. Mobile apps can be interrupted for ordinary reasons during training, and treating process death or reboot as workout completion/abandonment would violate the release-critical record-reliability requirement.

### Product impact
- there is no automatic session completion merely because the app process stops or the device restarts
- active-session state must be durably persisted after meaningful edits
- reopening the app while a local active session exists must prominently offer/restore **진행 중인 운동 계속하기** rather than silently creating a new workout
- attempting to start another workout while one is still active must first resolve the existing session: continue it, finish it, or deliberately discard it
- normal elapsed-time presentation must not be used as evidence that the workout has ended; session status is authoritative
- cross-device takeover is not required by this Decision and remains outside the MVP unless separately promoted

---

## DEC-019 — One Fitness account may link multiple authentication providers

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
A single internal Fitness account may link multiple supported authentication providers.

Profile/Settings exposes authentication-provider management with states such as **연결됨 / 연결하기**.

Linking a provider requires successful authentication with that provider. Matching email addresses alone must not silently merge accounts.

If the provider identity is already linked to another Fitness account, MVP blocks the link instead of merging the two accounts or combining workout histories. Duplicate-account history merge/recovery is deferred until real demand justifies the complexity.

### Why
The internal Fitness account—not an email string or one external provider—must remain the stable owner of workout history. Automatic email-based merging can incorrectly combine identities, while full account-history merge adds substantial conflict and recovery complexity for MVP.

### Product impact
- users may add another supported sign-in method to the same Fitness account
- provider linking is explicit and authenticated
- duplicate-account history merge is not an MVP requirement
- account/provider state belongs in Account management

---

## DEC-020 — Account deletion removes normal account data with only narrow legal-retention exceptions

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
The product provides an in-app account-deletion entry point under **Settings → Account management → Delete account**.

Deleting a Fitness account deletes all normal user data associated with that account, including:

- workout history
- routines
- custom exercises
- profile and optional body data
- synchronized account data

The deletion flow uses a clear destructive final confirmation but does **not** require Google/Kakao/Apple re-authentication immediately before deletion.

After final confirmation:
- there is **no user-visible recovery or grace period**
- the deleted account and normal product data are not restorable by the product
- all linked supported authentication providers are unlinked/revoked where applicable

The only retention exception is data that the service is legally required to keep for a defined period. Such retained data must be limited to the minimum legally required scope, separated from ordinary active-account product data, used only for the legal purpose, and deleted when the applicable retention period ends. Legally retained data must not be used to restore the deleted Fitness account or workout/profile history.

Exact backend deletion completion timing and cleanup sequencing are implementation details to define before release.

### Why
Account deletion should behave as a real deletion rather than deactivation or hidden archival. A recovery window, provider re-authentication requirement, or retained normal workout history would add friction or complexity that is not justified for MVP. Narrow legal-retention exceptions remain necessary where law requires them.

### Product impact
- confirmation UX must explicitly state that workout history, routines, profile/body data, and other account data will be permanently removed
- there is no product-managed account restoration after final deletion confirmation
- provider connections must not intentionally remain attached to a deleted internal Fitness account
- legal-retention storage must be operationally separated from recoverable user-product storage

---

## DEC-021 — Active-device local authority with change-driven cloud synchronization

**Date:** 2026-08-28
**Status:** CONFIRMED

### Decision
Workout and account data use an offline-first synchronization model with state-dependent canonical ownership.

Every meaningful workout/session change is written to durable local storage immediately.

Cloud synchronization is **change-driven** rather than periodic polling:
- no unsynchronized change means no upload request
- ordinary rapid edits are coalesced with a **3-second debounce** after the latest change
- **set completion, workout completion, app backgrounding, and network reconnection** trigger an immediate sync attempt
- offline or failed changes remain durably queued and retry automatically when connectivity returns

Canonical ownership is:
- while a workout is in progress, the **current active device's durable local state is authoritative for the latest unsynchronized workout changes**
- an older server snapshot must not silently overwrite newer pending local workout changes
- after successful synchronization, the **cloud account record is the long-term canonical record** for completed workouts, routines, custom exercises, profile data, and optional body data
- local storage remains a durable offline working copy / replica for app use and recovery

### Why
Immediate local persistence keeps the logging path independent from gym connectivity. Change-driven sync avoids needless traffic when nothing changed while keeping cloud data nearly current. A short debounce prevents rapid text/number edits from creating unnecessary requests, while important boundary events still synchronize promptly.

The authority split also matches the product's one-active-workout-writer rule: the active device owns unsynchronized live progress, while the cloud becomes the durable cross-device source after acknowledgement.

### Product impact
- network latency/failure must never block set completion or local workout progress
- sync state needs durable dirty/pending markers and retry behavior
- successful server acknowledgement marks the synchronized version clean
- sync traffic is generated only by changed data or explicit lifecycle/reconnect flush events
- stale cloud data cannot silently replace newer unsynchronized local active-workout state
- exact conflict resolution for simultaneous offline edits to the same **non-active** record may be specified during implementation, but the policy must not silently discard a locally accepted change without a defined conflict rule
