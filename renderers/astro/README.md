# Astro Renderer

Astro is the first canonical output target for generated business websites.

The current root application is the executable reference renderer while the generator architecture is established. Renderer-specific generation logic should move behind this boundary as it develops.

## Stack

- Astro
- TypeScript strict mode
- Tailwind CSS v4 via @tailwindcss/vite
- Playwright

React is optional and should only be added when a site has client-side interaction that justifies it.

## Principle

The renderer implements an approved site specification, design specification and page composition. It must not silently make upstream discovery or planning decisions simply because implementation has begun.
