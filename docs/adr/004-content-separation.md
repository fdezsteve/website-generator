# ADR 004 — Content Separation

## Status
Accepted

## Decision

Keep site content and structured data separate from rendering components.

The same generator should be able to consume different content sources without rewriting page-generation logic.

## Consequences

- ingested, manual and generated content can share one rendering path
- content can be validated independently of presentation
- layouts can evolve without rewriting source data
- the generator remains portable across future ingestion systems
