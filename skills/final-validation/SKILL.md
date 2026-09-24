# Final Validation Skill

## Purpose

Run a deterministic release gate after design, implementation, responsive review, accessibility work and visual refinement.

Validation confirms quality; it does not replace visual judgement.

## Required Checks

Run the checks supported by the project stack.

At minimum verify:

- production build succeeds
- type checking succeeds where applicable
- linting succeeds
- automated tests succeed
- accessibility checks have no unresolved material failures
- internal links resolve
- required images/assets resolve
- page metadata exists
- responsive review has been completed
- visual review has been completed

## Content Integrity

Check for:

- placeholder copy
- fabricated facts
- missing images
- broken contact information
- inconsistent business details
- duplicated sections
- accidental lorem ipsum
- developer notes exposed to users

Do not silently invent missing factual information to make validation pass.

## HTML and Interaction

Check:

- semantic document structure
- invalid nested interactive elements
- buttons and links behave correctly
- navigation works
- forms submit or clearly indicate their intended integration state
- external links behave as specified
- no obvious console errors occur during normal use

## Metadata

Where relevant verify:

- page title
- meta description
- canonical URL strategy
- favicon/site icons
- social sharing metadata
- robots behaviour
- sitemap strategy
- structured data only when accurate and justified

Do not add misleading structured data.

## Performance

Check obvious performance risks including:

- oversized images
- unnecessary client-side JavaScript
- blocking font usage
- excessive third-party scripts
- layout shift
- unbounded media dimensions

Optimise proportionately to the project.

## Responsive Release Gate

Confirm representative desktop, tablet and mobile renders have actually been inspected.

Do not mark responsive validation complete solely because CSS media queries exist.

## Accessibility Release Gate

Confirm both automated checks and required manual checks from the accessibility skill have occurred.

## Visual Release Gate

Confirm the visual-review loop has occurred after the latest material design change.

If substantial layout or styling changed after review, render and review again.

## Failure Handling

When a check fails:

1. record the failure
2. determine whether it is code, content, design or external integration
3. fix it where possible
4. rerun the affected checks
5. do not conceal unresolved failures

## Completion Report

Produce a concise release report containing:

- build status
- test/lint/type status
- accessibility status
- responsive review status
- visual review status
- content-integrity status
- unresolved issues
- external dependencies or launch blockers

## Completion Standard

A site is release-ready only when required deterministic checks pass, visual and responsive reviews are current, accessibility checks are complete, factual placeholders are resolved or explicitly documented, and remaining limitations are clearly recorded.
