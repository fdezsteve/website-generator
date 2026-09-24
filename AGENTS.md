# Website Generator — Agent Instructions

## Mission

Build distinctive, production-quality websites from structured requirements.

The objective is not merely to produce valid HTML or functional components. The finished website must have deliberate visual hierarchy, coherent typography, strong responsive behaviour and a design suited to the organisation being represented.

Avoid generic AI-generated website patterns.

## Working Method

For substantial work:

1. Read `CONTEXT.md`.
2. Inspect the existing implementation before changing it.
3. Identify which skills are relevant.
4. Load only those skills.
5. Clarify intended behaviour through a specification when necessary.
6. Implement the smallest coherent solution.
7. Render the result.
8. Inspect the rendered website visually.
9. Refine weak design decisions.
10. Run automated validation.

Do not consider a page complete simply because it compiles.

## Skills

Load detailed instructions only when required.

- Understanding a site → `skills/site-discovery/SKILL.md`
- Planning information architecture → `skills/site-planning/SKILL.md`
- Creating the visual language → `skills/design-system/SKILL.md`
- Building page layouts → `skills/page-composition/SKILL.md`
- Responsive behaviour → `skills/responsive-design/SKILL.md`
- Visual QA → `skills/visual-review/SKILL.md`
- Accessibility → `skills/accessibility/SKILL.md`
- Final release checks → `skills/final-validation/SKILL.md`

## Architecture Decisions

Durable architectural decisions live in `docs/adr/`.

Do not casually reverse an accepted ADR. If a new requirement genuinely conflicts with an ADR, document the proposed change rather than silently bypassing the decision.

## Core Design Principles

### Design from content

Determine the audience, organisation purpose, primary user actions, important content and desired character before deciding page composition.

### Use a design system

Typography, spacing, colours, radii, layout widths and component behaviour should come from a coherent system. Do not independently style every section.

### Avoid generic AI patterns

Do not automatically produce gradient hero backgrounds, excessive pill-shaped elements, rows of identical feature cards, meaningless badges, unnecessary floating glass panels, excessive rounded rectangles, repetitive centred headings, arbitrary decorative blobs, identical section structures throughout the page, or huge headings unsupported by content hierarchy.

Any of these may be used when justified by the design, but never as defaults.

### Responsive design is intentional

Do not create a desktop page and merely stack everything vertically on mobile. Consider information priority, reading order, navigation, image crops, typography, spacing, touch targets and component transformation at each major viewport.

### Accessibility is structural

Semantic structure, keyboard behaviour, colour contrast, focus states and meaningful alternative text are part of implementation. Accessibility is not a cosmetic final pass.

## Visual Review

Every substantial page must be rendered and reviewed at desktop, tablet and mobile widths.

Look for weak hierarchy, poor typography, inconsistent spacing, awkward empty space, overly repetitive components, poor section rhythm, alignment problems, weak imagery, awkward mobile transitions and generic or templated appearance.

Identify the weakest design decisions and improve them before declaring the work complete.

## Implementation Principles

Prefer reusable components, semantic HTML, explicit design tokens, simple abstractions, clear content models and deterministic validation.

Avoid unnecessary dependencies, giant components, unexplained magic values, page-specific CSS hacks and premature abstractions.

## Definition of Done

A substantial page or feature is complete only when required behaviour works, automated checks pass, responsive layouts have been inspected, accessibility requirements are satisfied, visual review has occurred, obvious generic AI design patterns have been removed, and the implementation remains consistent with the design system.
