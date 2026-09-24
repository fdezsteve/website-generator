# Accessibility Skill

## Purpose

Build accessibility into structure, content and interaction throughout implementation.

Accessibility is not a final cosmetic checklist.

Target WCAG 2.2 AA unless a project explicitly requires a different standard.

## 1. Semantic Structure

Use native semantic HTML wherever possible.

Ensure:

- one meaningful page-level heading
- logical heading hierarchy
- landmarks for major regions
- lists are real lists
- tables are used for tabular data
- buttons perform actions
- links navigate

Do not recreate native controls with generic div elements without a compelling reason.

## 2. Keyboard Access

Every interactive function must be operable by keyboard.

Check:

- logical tab order
- visible focus
- no keyboard traps
- menus
- dialogs
- accordions
- carousels
- forms
- skip navigation where useful

Do not remove focus outlines without providing a clear replacement.

## 3. Colour and Contrast

Check text, controls, icons and meaningful graphical elements against WCAG 2.2 AA contrast requirements.

Do not communicate status or meaning through colour alone.

Ensure focus and hover states remain distinguishable.

## 4. Images

Provide alternative text according to purpose.

- informative images: concise meaningful alt text
- decorative images: empty alt where appropriate
- functional images: describe the action or destination
- complex diagrams: provide an adequate text equivalent

Do not repeat nearby captions unnecessarily in alt text.

## 5. Forms

Every control requires an accessible name.

Use visible labels where practical.

Ensure:

- instructions are associated with controls
- required fields are communicated accessibly
- errors identify both the problem and how to correct it
- grouped controls use appropriate fieldset/legend semantics
- autocomplete attributes are used where applicable

Do not rely only on colour or placeholder text.

## 6. Interactive Components

Prefer native elements first.

For custom components ensure correct:

- role
- name
- state
- keyboard behaviour
- focus management
- announcement of dynamic changes where necessary

ARIA should supplement semantics, not replace good HTML.

## 7. Motion

Respect reduced-motion preferences.

Avoid flashing or motion likely to cause harm or interfere with comprehension.

Do not require animation to understand state changes.

## 8. Zoom and Reflow

Content must remain usable when zoomed and at narrow reflow widths.

Avoid:

- clipped text
- fixed-height text containers
- overlapping controls
- two-dimensional scrolling for ordinary page content

## 9. Links and Controls

Names should make sense in context.

Avoid repeated ambiguous links such as multiple unexplained “Learn more” controls when accessible naming cannot distinguish them.

Touch targets should be comfortably usable and satisfy applicable WCAG 2.2 target-size requirements.

## 10. Media

For audio/video content provide required alternatives such as captions, transcripts or audio description according to the content and project requirements.

Do not autoplay disruptive audio.

## 11. Automated and Manual Checks

Use deterministic accessibility tooling where available, but do not treat an automated pass as proof of accessibility.

Manually check:

- keyboard navigation
- focus order
- focus visibility
- heading structure
- landmarks
- accessible names
- form errors
- responsive reflow
- meaningful alt text

## Completion Standard

Accessibility passes when the page uses sound semantic structure, essential interactions work without a mouse, focus is clear, contrast is adequate, content reflows, forms and media are accessible, and automated checks reveal no unresolved material issues.
