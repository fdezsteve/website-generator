# Interaction Design Skill

## Purpose

Design meaningful interaction as part of the website experience rather than adding animation after the page is finished.

Interaction should make a site feel responsive, distinctive and appropriate to the organisation while preserving usability, accessibility and performance.

## Inputs

Use the approved site plan, design system and page composition. Understand the page's primary job, content hierarchy, available media, expected devices and required functionality before specifying interaction.

## Interaction strategy

For each important page, decide:

- what should respond immediately to user input;
- what information benefits from progressive disclosure;
- where movement can clarify hierarchy or spatial relationships;
- whether imagery can be explored rather than merely displayed;
- whether scrolling should reveal, pin, transform or sequence content;
- whether transitions between states or pages improve continuity;
- what interaction could become a memorable signature of this specific site;
- what must remain fully usable without animation.

Prefer a small number of strong, content-specific interactions over many generic effects.

## Appropriate techniques

Consider, when justified:

- tactile navigation and menu transitions;
- image galleries, comparisons and controlled reveals;
- interactive menus, filters, selectors and configurators;
- scroll-linked storytelling where the content genuinely has a sequence;
- restrained entrance and state transitions;
- responsive hover, focus and press states;
- contextual micro-interactions that confirm user actions;
- page/view transitions when they preserve orientation;
- interactive maps, timelines, diagrams or product/service exploration;
- server-backed forms and dynamic information where required.

Do not add a technique merely because the framework supports it.

## Signature interaction

Consider whether the site deserves one distinctive interaction closely tied to its content or brand. It must have a purpose beyond decoration and must not obstruct the main user journey.

A café might let imagery and menu content interact spatially. A maker could expose process and materials through direct manipulation. A service business could turn a complex choice into an elegant interactive decision tool.

Do not reuse the same signature interaction across unrelated sites.

## Motion principles

Motion should communicate change, hierarchy, causality or character.

Avoid default reveal-on-scroll applied to every section, constant parallax, cursor gimmicks, gratuitous 3D, excessive spring motion, autoplay movement competing with reading, and animation that exists only to make a static composition appear sophisticated.

Use consistent timing and easing derived from the design system. Keep motion short enough that repeated use does not become irritating.

Respect `prefers-reduced-motion`. Important information and functionality must not depend on motion.

## Technology selection

Use the least complex client runtime that delivers the intended experience.

Astro handles document structure and content-first rendering. Use native browser behaviour or small scripts for simple interactions. Use React islands when stateful or component-level client behaviour justifies them. Server rendering/actions may be used for dynamic functionality when the site requires them.

Do not hydrate static content unnecessarily. Interactivity is a design capability, not a requirement to turn the whole site into a single-page application.

## Responsive interaction

Interaction must be designed for touch, keyboard and pointer use. Never make hover the only way to reveal essential information.

At narrow widths, reconsider the interaction rather than simply shrinking it. Complex desktop interactions may need a simpler mobile form while preserving the same purpose.

## Accessibility

All interactive controls require semantic roles, keyboard access, visible focus, understandable state and sufficient target size. Dynamic state changes should be announced when necessary. Avoid focus traps and unexpected context changes.

## Performance

Treat interaction cost as a design constraint. Avoid large client bundles for trivial effects. Lazy-load non-critical interactive modules where appropriate. Animation should favour properties that browsers can render efficiently.

## Interaction specification

Before implementation, record:

1. interaction name;
2. user purpose;
3. trigger/input;
4. states and transitions;
5. desktop behaviour;
6. touch/mobile behaviour;
7. keyboard behaviour;
8. reduced-motion behaviour;
9. technology/runtime required;
10. fallback or failure behaviour.

## Review

Test interaction in the rendered site, not only in component code. Check whether it improves comprehension or delight, whether it still feels good after repeated use, whether it works on mobile and keyboard, and whether it competes with content.

Remove interactions that do not earn their complexity.

## Completion criteria

Interaction design is complete when important interactions are intentional and content-specific, controls work across input methods, reduced-motion behaviour is defined, performance cost is proportionate, mobile behaviour is intentional, and the site remains useful if non-essential motion is unavailable.
