# Responsive Design Skill

## Purpose

Design responsive behaviour as part of the composition rather than treating mobile as a shrunken or stacked desktop page.

The goal is to preserve hierarchy, usability, character and content priority across viewport sizes and input methods.

## Inputs

Use the site plan, design system, page composition, implemented components and real content.

## 1. Start With Priorities

For each page identify what must remain most prominent at narrow widths.

Do not preserve desktop proportions simply because they fit at larger widths.

At each major viewport ask:

- What must be seen first?
- What can become more compact?
- What can move?
- What can simplify?
- What should never disappear?
- What interaction changes when touch replaces pointer input?

## 2. Breakpoints Follow Content

Use breakpoints when the composition stops working, not because a framework provides familiar device labels.

Keep the number of breakpoints small and purposeful.

Avoid writing many narrow breakpoint patches to rescue a desktop-only layout.

## 3. Typography

Responsive typography should preserve hierarchy without overwhelming the viewport.

Review:

- display size
- heading wrapping
- body size
- line height
- line length
- spacing around headings

Avoid giant mobile headings that create one-word lines or consume most of the first screen.

## 4. Layout Transformation

Columns do not always need to stack in source order.

Depending on meaning, a layout may:

- stack
- reorder
- become horizontally scrollable
- simplify
- change image position
- change alignment
- convert a side panel into inline content
- collapse secondary information

Preserve logical reading and keyboard order.

Do not use CSS visual reordering when it creates an inaccessible semantic order.

## 5. Navigation

Design mobile navigation deliberately.

Ensure:

- essential destinations remain easy to reach
- the menu trigger is clear
- keyboard and screen-reader behaviour is correct
- open and closed states are obvious
- focus is managed where required
- important CTAs are not crowded into the header

Do not simply hide desktop navigation and add an untested hamburger menu.

## 6. Images and Media

Review image crops independently at narrow widths.

A desktop crop may hide the subject on mobile.

Define responsive:

- aspect ratios
- object positions
- full-bleed behaviour
- captions
- media controls
- loading strategy

Avoid downloading unnecessarily large assets for small displays.

## 7. Touch and Interaction

Touch targets must be comfortably usable.

Avoid interactions that depend only on hover.

Check:

- buttons and links
- menus
- accordions
- carousels
- form controls
- dismiss buttons
- closely spaced inline actions

Provide visible focus states for keyboard users at every viewport.

## 8. Spacing and Density

Reduce spacing intentionally rather than applying a universal percentage reduction.

Some relationships should remain generous while others can tighten.

Watch for:

- enormous blank gaps
- cramped cards
- excessive section padding
- edge-to-edge text
- inconsistent gutters

## 9. Tables and Dense Content

Do not blindly squeeze wide content.

Choose an appropriate strategy such as:

- horizontal scrolling with clear affordance
- prioritised columns
- transformed list presentation
- compact labels
- progressive disclosure

Preserve the meaning of headers and relationships.

## 10. Forms

On narrow screens ensure:

- labels remain visible
- fields use sensible widths
- validation messages fit
- error states do not shift content unpredictably
- appropriate input types are used
- submit actions remain obvious

Do not rely on placeholder text as the only label.

## 11. Test Representative Widths

At minimum inspect:

- wide desktop
- laptop or tablet landscape
- tablet or narrow intermediate width
- common mobile width
- narrow mobile width

Also drag through intermediate widths. Many failures occur between named breakpoints.

## 12. Stress Test Content

Test with realistic long headings, navigation labels, names, prices, addresses and paragraphs.

A layout that works only with short placeholder text is not responsive.

## Anti-Pattern Check

Flag:

- desktop layout merely stacked vertically
- excessive breakpoint-specific hacks
- hidden important content
- unreadably small type
- oversized mobile headings
- cropped subjects
- hover-only controls
- tiny touch targets
- horizontal page overflow
- fixed heights clipping content
- visual reordering that conflicts with semantic order

## Completion Standard

Responsive design passes when hierarchy and functionality remain clear across widths, intermediate sizes do not break, touch and keyboard interactions work, imagery remains meaningful, and mobile feels intentionally composed rather than collapsed.
