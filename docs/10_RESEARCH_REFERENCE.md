# 10 RESEARCH REFERENCE

## Purpose
Keep product, exercise, health, market, policy, and technical decisions grounded in current, traceable evidence.

This project is a fitness product. Evidence quality matters because product choices may touch exercise programming, body data, health claims, user safety, and store/platform policy.

## Core evidence rule

**Match the evidence type to the claim.**

Do not use a user interview to prove physiology. Do not use an academic paper alone to prove that a screen is understandable or desirable.

## Source priority — general product/platform research

1. official platform / API / policy documentation
2. original company documentation or first-party product material
3. primary research / official statistics
4. reputable specialist analysis
5. multiple independent secondary sources
6. community/user reports for experience signals

## Source priority — exercise / health claims

When the question is about training effectiveness, program structure, exercise science, body/health outcomes, or other scientific claims, prefer:

1. official guideline / position statement from a relevant professional or public-health body
2. systematic review / meta-analysis
3. randomized controlled trial or other relevant primary research
4. broader expert consensus / reputable academic or professional review
5. secondary educational material
6. anecdote/community content only as experience context, not scientific proof

Examples of appropriate primary/authoritative sources may include bodies such as ACSM, WHO, government/public-health institutions, peer-reviewed journals, and original study publications where relevant.

Do not treat authority name alone as sufficient. Check whether the source actually addresses the claim being made.

## User / usability evidence

For questions such as:
- users do not understand split terminology
- beginners abandon long onboarding
- people struggle to identify machines
- a workout screen causes logging friction
- users prefer one interaction pattern over another

Useful evidence includes:
- user interviews
- usability tests
- app reviews
- support complaints
- behavioral analytics
- competitor pattern research
- community discussions

These signals may establish a product/user problem even when they do not establish a scientific training claim.

## Competitor / UX reference evidence

Competitor screens and Mobbin references are evidence that a pattern exists, not proof that it is optimal.

For each pattern ask:
- what problem is it solving?
- which target user/context does it serve?
- does the same context exist in Fitness?
- what trade-off does it introduce?
- is it a current pattern or an outdated version?

Do not infer hidden business logic or exact design tokens from screenshots alone.

## Research output format

For important research, record enough of the following to make the reasoning auditable:

- **Claim / Question**
- **Source**
- **Evidence type**
- **What the source supports**
- **What the source does not support**
- **Conflicting / counter evidence**
- **Recency / applicability**
- **Confidence**
- **Product implication**
- **Not Verified / Research Needed**

The full template is not required for trivial lookups.

## Fact / Inference / Recommendation separation

### Fact
Directly supported by the cited evidence.

### Inference
Reasonable interpretation that is not directly stated by the evidence.

### Recommendation
Product judgment after considering evidence, constraints, cost, and strategy.

Do not present inference or recommendation as fact.

## Counter-evidence requirement

For important decisions, actively look for evidence that could weaken the preferred conclusion.

Do not stop after finding the first source that agrees with the current idea.

When relevant:
- identify contradictory findings
- explain differences in population/method/context
- state when evidence is mixed
- state when the product decision is mostly a UX/business judgment rather than a scientific conclusion

## Freshness / official verification

Re-verify current sources when decisions depend on changing information such as:
- Google Play / App Store policy
- Android/iOS APIs
- Health Connect / Apple Health rules
- third-party API availability
- pricing / subscription terms
- commercial access to InBody or other providers
- current competitor pricing/features

A recent upload date does not make old content current. Use the content itself to judge freshness.

## Research quality safeguards

- Do not treat multiple articles citing the same original source as independent evidence.
- Prefer the original study/guideline when available.
- Do not over-generalize from a single small study.
- Note population differences when applying research to beginner/experienced lifters or different age groups.
- Do not convert correlation into causation.
- Do not claim medical safety from general fitness evidence.
- If a health/medical boundary becomes material, escalate for separate policy/legal review.

## Priority research areas for this project

### Product / UX
- workout logging UX
- beginner onboarding
- program recommendation presentation
- exercise substitution UX
- retention and workout-habit support
- competitor pricing/monetization

### Exercise / health evidence
- beginner resistance-training frequency
- full-body vs split programming
- volume/frequency relationships
- machine vs free-weight evidence
- progression guidance
- exercise substitution principles
- safe wording boundaries for non-medical fitness guidance

### Platform / data
- Android/iOS implementation options
- active-session persistence/sync
- Watch integration
- Health Connect / Apple Health policy
- InBody integration availability/commercial terms
- app-store privacy/subscription requirements

## Output verdicts

Use:
- `SUPPORTED`
- `MIXED`
- `WEAK EVIDENCE`
- `NOT VERIFIED`
- `RESEARCH NEEDED`

A product can still choose an option with mixed evidence, but the uncertainty must remain visible.
