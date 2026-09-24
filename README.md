# 2026 Website Generator

A reusable website-generation engine for producing distinctive, production-quality websites from structured site requirements.

## Core workflow

Discover → Define → Design → Compose → Render → Inspect → Refine → Validate

## Repository approach

This project uses a lean agent-instructions model:

- `AGENTS.md` — small always-on operating rules
- `CONTEXT.md` — system architecture and project intent
- `docs/adr/` — durable architecture decisions
- `skills/` — task-specific procedures loaded only when relevant

Website ingestion is deliberately kept separate from generation.
