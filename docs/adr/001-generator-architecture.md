# ADR 001 — Generator Architecture

## Status
Accepted

## Decision

Separate website ingestion, structured site definition and website generation.

The generator consumes a structured site specification rather than depending directly on a scraper, OCR pipeline or source website.

## Consequences

- ingestion can evolve independently
- generator inputs remain stable and testable
- additional sources can feed the same generator
- generation logic remains reusable
