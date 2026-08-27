# 04 ARCHITECTURE

**Status:** BOOTSTRAP — NOT YET FROZEN

## Architecture goals

The eventual architecture must make these behaviors reliable:
- active workout persistence
- deterministic workout history
- custom exercise identity/history
- safe editing of completed sets
- future sync without corrupting local workout state

## Minimum domain boundaries — ASSUMPTION

Likely core domains:
- Exercise
- Routine
- Workout Session
- Set Record
- History / Progress
- Settings

Future domains such as Gym, Body Composition, Watch, AI, and Community should remain outside the MVP core until explicitly promoted.

## Data integrity rules — CONFIRMED

- Historical records must not depend on a mutable exercise label alone.
- Editing a routine must not silently rewrite past workout history.
- A custom exercise should keep its own stable identity and history.
- Active-session persistence must be designed before implementation.

## TBD

- local database technology
- server schema
- sync conflict strategy
- authentication boundary
- event/state architecture
- background sync
- migration strategy

## Anti-overengineering rule

Do not introduce microservices, event buses, generic plugin systems, or future AI infrastructure during MVP unless a confirmed requirement makes them necessary.
