# 12 REGRESSION MATRIX

## Purpose
Define lightweight regression packs for high-risk or cross-cutting changes.

This is not a checklist that must run on every task. Select only the packs affected by the Change Impact Gate.

## Risk classification

### Low
Examples:
- copy change
- isolated visual spacing
- local icon/illustration

Expected evidence:
- targeted visual/code review
- local behavior check if interaction is touched

### Medium
Examples:
- one screen's state logic
- one ViewModel/use case
- one routine editor flow
- one exercise-search behavior

Expected evidence:
- targeted automated tests where practical
- affected-state QA
- relevant regression pack subset

### High / Cross-cutting
Examples:
- active-session persistence
- workout repository/database schema
- exercise identity/history mapping
- unit conversion/storage
- auth/sync when introduced
- billing when introduced
- Health Connect / Apple Health integration
- navigation root/app lifecycle
- shared design-system behavior used across many core screens

Expected evidence:
- explicit Change Impact Gate
- affected Global Invariants
- full relevant regression packs
- state-transition/failure tests
- existing-state/upgrade checks where applicable
- Logic / Integration / Runtime(Device) evidence separated
- external runtime read-back when applicable

## Core packs

### PACK-ACTIVE-SESSION
Use when changing:
- active workout state
- persistence/recovery
- set editing/completion
- rest timer interactions
- app lifecycle handling

Minimum checks where relevant:
- start workout
- enter kg/reps
- complete/uncomplete set
- add/remove set
- add/remove/reorder exercise
- edit completed value
- background/foreground
- process interruption/restart
- recover active session
- finish/save once
- no duplicate or lost sets

### PACK-ROUTINE
Use when changing:
- routine CRUD
- routine ordering
- recommended-template import
- scheduled routine metadata

Minimum checks:
- create/edit/delete
- exercise add/remove/reorder
- set-count changes
- scheduled and unscheduled routine behavior
- editing routine does not rewrite completed history
- recommended and self-built routine use compatible semantics

### PACK-EXERCISE
Use when changing:
- exercise database
- custom exercise
- exercise naming/taxonomy
- substitution mapping

Minimum checks:
- correct exercise identity
- custom exercise independent history
- rename/edit without history break
- exercise substitution does not remap old history
- search/filter still finds intended exercise

### PACK-HISTORY
Use when changing:
- workout save/history
- previous performance
- PR calculation
- history editing/deletion

Minimum checks:
- completed workout appears once
- previous performance belongs to correct exercise
- routine edits do not rewrite old workout
- deletion affects only intended record
- PR/history summary does not use stale or wrong data

### PACK-PERSISTENCE
Use when changing:
- local DB
- cache/preferences
- serialization
- migration
- app recovery

Minimum transitions:
- fresh install path when relevant
- existing install/data
- active session present
- app background/foreground
- process restart
- migration/upgrade
- partial/incomplete write recovery
- no silent loss or duplication

### PACK-UNITS
Use when changing:
- kg/lb display
- conversion
- input/storage model

Minimum checks:
- kg -> lb -> kg round-trip within defined precision
- stored source values do not progressively drift
- previous performance remains consistent
- zero/decimal/extreme reasonable values
- mixed old/new records if migration exists

### PACK-RECOMMENDATION
Use when changing:
- onboarding matching rules
- curated program templates
- duration/frequency adjustment
- exercise substitution
- recommendation presentation

Minimum checks:
- same structured inputs produce predictable matching
- unavailable equipment substitution remains valid
- weekly availability is not blindly prescribed as training frequency
- optional weekdays do not become mandatory
- optional height/body weight does not block recommendation
- recommendation does not silently overwrite user-edited routine
- self-build path remains available and first-class

### PACK-DESIGN-SYSTEM
Use when changing:
- shared components
- typography/spacing tokens
- navigation components
- shared state presentation

Minimum checks:
- main consumers identified before change
- default/pressed/disabled/loading/error states remain understandable
- narrow mobile width
- touch targets/readability
- no product-policy drift introduced by a visual simplification
- active workout core actions remain obvious

## Future packs — activate only when features exist

Do not build these prematurely. Add them when the corresponding feature enters implementation.

- PACK-SYNC / AUTH
- PACK-BILLING / SUBSCRIPTION
- PACK-HEALTH-DATA
- PACK-WATCH
- PACK-NOTIFICATION
- PACK-ANALYTICS / TELEMETRY

## State-transition rule

For Medium/High-risk changes, do not test only static screens.

Consider applicable transitions such as:
- cold start
- warm resume
- background -> foreground
- in-flight action -> interruption
- failure -> retry
- process restart
- existing data -> upgraded version
- optional state A -> optional state B (e.g. scheduled -> unscheduled)

## Fault-injection rule

For High-risk areas, deliberately test realistic failures where practical:
- app killed during active session
- write failure/timeout
- duplicate rapid taps
- partial persistence
- invalid/missing optional data
- unavailable equipment substitution
- external runtime unavailable when such dependency exists

Automate what is cheap and objective. Leave device-only behavior to Product Owner QA only when necessary.

## Evidence reporting

Use separate labels in QA notes:
- `Logic PASS`
- `Integration PASS`
- `Runtime/Device PASS`
- `NOT VERIFIED`

Do not collapse them into one PASS when a higher evidence level is required.
