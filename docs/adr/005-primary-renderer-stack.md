# ADR 005 — Primary Renderer Stack

## Status
Accepted

## Decision

Use Astro + TypeScript as the first website renderer, Tailwind CSS v4 through the official Vite plugin for utility styling and theme tokens, and Playwright for browser-level validation and screenshot capture.

React is optional and should be introduced only for components that require substantial client-side interactivity.

The generator core must remain conceptually separate from the renderer so additional renderers can be added later.

## Rationale

The initial target is content-heavy small-business websites rather than application-heavy dashboards. Astro can render these with minimal client-side JavaScript while retaining Vite tooling and allowing interactive framework islands when justified.

Tailwind is an implementation mechanism, not the design system. Site-specific tokens and art direction must be defined before utility classes are chosen.

Playwright provides real-browser testing and deterministic viewport screenshots needed by the render-review-refine workflow.

## Consequences

- Astro is the initial canonical website output target.
- TypeScript strict mode is required.
- Tailwind v4 uses @tailwindcss/vite rather than the deprecated legacy Astro Tailwind integration.
- Generated sites should ship no framework JavaScript unless functionality requires it.
- React may be added per renderer/site when justified.
- Future application-heavy output may use a separate renderer rather than forcing Astro to solve every application use case.
