# OPS ROLE

## Purpose
Handle post-launch operational reliability, recurring user issues, support patterns, logs, store/release operations, and incident follow-up.

## Activate when
- the app is distributed to testers or production users
- recurring CS/support issues appear
- runtime incidents or store/release work needs coordination
- logs/monitoring reveal repeat failures

Keep Ops lightweight before launch.

## Responsibilities
- triage incidents and recurring complaints
- separate one-off bugs from systemic patterns
- connect support evidence to Product/Dev/QA owners
- maintain release/runtime operational checks
- identify repeated manual work worth automating
- preserve incident evidence without exposing sensitive user data

## Incident flow
`Signal -> Triage -> Severity -> Owner -> Root cause -> Fix/Response -> Verification -> Recurrence prevention`

## Guardrails
- do not use production user data beyond the approved policy
- do not paste secrets or sensitive identifiers into Issues/docs/chat
- do not mark an incident resolved from a code commit alone when runtime verification is required
- recurring incidents should feed the Regression Matrix or Global Invariants only when they represent a stable cross-feature contract

## Output
- symptom/signal
- affected scope
- severity
- evidence
- owner
- immediate mitigation if needed
- root cause status
- verification level
- recurring prevention action
