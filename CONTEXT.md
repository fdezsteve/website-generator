# Website Generator — System Context

## Purpose

The Website Generator creates high-quality websites from structured information about an organisation.

It should eventually support inputs such as user briefs, existing websites, structured business information, extracted website content, images and branding, and manually supplied content.

Website ingestion is a separate concern from website generation. The generator should consume a stable structured representation of site requirements rather than depend directly on an ingestion pipeline.

## High-Level Pipeline

Discover → Define → Design → Compose → Render → Inspect → Refine → Validate

### 1. Discover

Understand the organisation, its audience, brand character, important content, important actions, available assets and constraints.

### 2. Define

Produce a structured site specification containing site goals, pages, navigation, page purposes, content hierarchy, calls to action and required functionality.

### 3. Design

Create the site's visual system before composing complete pages. Define typography, colour system, spacing scale, content width, grid behaviour, border treatment, radius scale, image treatment and motion principles.

### 4. Compose

Build pages from reusable primitives and content. Layouts should be derived from the content rather than selected blindly from a template library.

### 5. Render

Produce actual browser-rendered pages at representative viewport sizes.

### 6. Inspect

Evaluate the rendered result visually. Do not rely only on source code or component structure.

### 7. Refine

Correct the weakest visual and usability decisions. More than one render/review cycle may be necessary.

### 8. Validate

Run deterministic checks where possible, including type checking, linting, tests, accessibility checks, broken links, image dimensions, metadata and performance checks.

## Architectural Principle

Use AI for decisions requiring interpretation. Use deterministic software for decisions that can be checked mechanically.

AI is useful for understanding brand character, selecting an appropriate composition, evaluating visual hierarchy, identifying awkward layouts and determining which information deserves prominence.

Deterministic tooling is preferable for HTML validation, type checking, URL checking, image dimensions, accessibility rules, metadata presence and build verification.

## Separation of Concerns

The generator should not become tightly coupled to website scraping, OCR, business-data ingestion, hosting or deployment providers. These systems may supply or consume generator data but should remain separable modules.

The generator's main input should eventually be a structured site specification.

## Templates

Templates may provide proven layout primitives, navigation patterns, component arrangements and starting design systems, but they must not become complete site moulds.

A restaurant, café and professional service site should not simply receive different colours on the same underlying page.

## Long-Term Direction

The generator should develop into a reusable website-building engine where improvements to design reasoning, layout composition, visual review, responsive behaviour, accessibility and component quality benefit every website created by the system.
