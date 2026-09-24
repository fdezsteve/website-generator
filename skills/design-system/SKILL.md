# Design System Skill

## Purpose

Create a coherent visual system for a website before full page composition begins.

The design system must be derived from the organisation, audience, content and brand character. Do not default to generic startup aesthetics or copy a single familiar template style.

## Inputs

Use the available site brief, structured content, brand assets and discovery notes.

At minimum determine:

- organisation type
- target audience
- primary user actions
- brand character
- content density
- imagery available
- accessibility constraints
- any existing brand colours, typography or visual language

If important information is missing, make conservative assumptions and document them.

## Output

Produce a compact design-system specification covering:

1. Design direction
2. Typography
3. Colour
4. Spacing
5. Layout/grid
6. Shape and borders
7. Imagery
8. Motion
9. Component principles
10. Responsive behaviour

The specification should be usable by page-composition and implementation work without re-deciding the visual language from scratch.

## 1. Design Direction

Summarise the intended visual character in 3–5 specific adjectives.

Good examples:

- restrained
- editorial
- tactile
- precise
- playful
- utilitarian
- warm
- premium
- energetic

Avoid vague phrases such as:

- modern
- clean
- professional
- sleek

unless they are further qualified.

Then state what the design should NOT feel like.

Example:

> Warm, editorial and ingredient-led. Avoid polished SaaS aesthetics, glassmorphism and overly corporate symmetry.

## 2. Typography

Choose typography based on content and brand character rather than novelty.

Define:

- display/heading face
- body face
- fallback stack
- heading scale
- body sizes
- line heights
- maximum readable line length
- weights actually required
- letter-spacing rules where relevant

Prefer a restrained type system.

Do not introduce more font families or weights than necessary.

Avoid using huge display type purely to make the page appear designed.

Heading scale should reflect information hierarchy, not decorative preference.

## 3. Colour

Build a functional palette rather than a collection of attractive colours.

Define semantic roles such as:

- page background
- surface
- primary text
- secondary text
- accent
- interactive accent
- borders/dividers
- success
- warning
- error

Existing brand colours should be respected where usable, but may require tonal adjustments for accessibility and hierarchy.

Check that text and interactive states can meet required contrast standards.

Avoid defaulting to:

- blue-purple gradients
- neon accents on dark backgrounds
- generic indigo SaaS palettes
- excessive use of multiple saturated accent colours

unless the brief clearly supports them.

## 4. Spacing

Define a spacing scale and use it consistently.

Prefer a small number of meaningful spacing steps over arbitrary one-off values.

The system should support:

- compact internal component spacing
- standard content spacing
- section spacing
- major page transitions

Spacing should express hierarchy.

Do not make every section equally tall or equally padded.

## 5. Layout and Grid

Define:

- maximum content width
- standard text width
- grid columns where useful
- page gutters
- alignment strategy
- common image proportions
- breakpoint behaviour

Do not force all content into centred containers.

Use asymmetry, full-bleed sections or offset content only when they strengthen hierarchy or brand character.

The grid should serve the content, not dominate it.

## 6. Shape and Borders

Define a limited radius and border system.

Choose deliberately between:

- square
- subtly rounded
- moderately rounded
- strongly rounded

Do not use large rounded rectangles as a universal container treatment.

Cards should only be used when grouping content provides semantic or interaction value.

Do not put every section inside a bordered or elevated box.

## 7. Imagery

Define how imagery behaves across the site.

Specify:

- documentary vs polished treatment
- crop behaviour
- preferred aspect ratios
- edge treatment
- full-bleed vs contained usage
- overlays
- captions
- image density

Images should carry meaning, not merely fill empty space.

If source imagery is weak, design around that limitation rather than disguising it with excessive effects.

Avoid repetitive stock-photo patterns.

## 8. Motion

Use motion only where it improves comprehension, feedback or atmosphere.

Define:

- hover behaviour
- focus behaviour
- entrance motion if any
- transition timing principles
- reduced-motion behaviour

Avoid gratuitous scroll animation, constant floating movement and effects that delay access to content.

## 9. Component Principles

Establish component rules before pages multiply.

Define expected behaviour for:

- navigation
- buttons/links
- headings
- content sections
- cards if justified
- forms
- image blocks
- quotes/testimonials
- calls to action

Components should share the design language without making every section visually identical.

Prefer composition of simple primitives over a large catalogue of decorative components.

## 10. Responsive Behaviour

Document how the design system changes at narrower widths.

Consider:

- typography scale reduction
- gutter changes
- grid collapse
- navigation transformation
- image crop changes
- component reordering
- section spacing
- CTA placement

Mobile is not simply desktop in one column.

## Anti-Generic Check

Before accepting the design system, explicitly check for default AI design habits.

Ask:

- Does this look like a generic SaaS landing page even when the organisation is not SaaS?
- Are cards being used where plain layout would be stronger?
- Are pills, badges or rounded rectangles overused?
- Is the colour palette derivative or unjustified?
- Are headings excessively large?
- Is every section centred?
- Is the page likely to become repetitive because the system has only one section pattern?
- Does the visual language actually relate to the organisation?

If the answer to any of these is yes, revise the system before implementation.

## Design-System Deliverable

Write the final design-system specification in a concise structured form.

Include:

- design direction
- typography tokens
- colour tokens
- spacing tokens
- radius/border tokens
- layout widths and gutters
- image treatment rules
- component principles
- responsive rules
- explicit anti-patterns for this site

Where implementation has begun, encode these as reusable tokens or variables rather than scattering values through page-specific code.

## Completion Standard

The design-system stage is complete when another agent can compose pages from it without inventing a new visual language and when the system is distinctive enough to avoid obvious generic AI styling.
