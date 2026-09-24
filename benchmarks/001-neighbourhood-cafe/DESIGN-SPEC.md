# Alder & Lane — Design Specification

## Direction
Tactile, editorial, food-led, relaxed and confident. The visual language should feel closer to a well-designed neighbourhood food publication than a hospitality template. It must not feel rustic-themed, luxury-formal or SaaS-polished.

## Typography
Use an expressive editorial display face paired with a highly readable sans-serif body face, sourced with an appropriate web licence before implementation. Until selected, keep font roles semantic rather than pretending a system fallback is the final identity.

Display typography may be large where paired with food/place imagery, but practical information stays compact and scannable. Body measure target: roughly 55–70 characters. Use few weights.

## Colour
Base palette: warm paper-like neutral background, near-black text, a restrained vegetal/produce-derived accent and one deeper supporting tone. Exact tokens must be contrast-tested in implementation. No brown-on-cream “coffee shop” default, blue-purple gradients or neon accents.

Accent is for interaction and selected editorial emphasis, not every heading.

## Spacing
Use a restrained scale with compact utility spacing, comfortable content spacing, generous editorial breathing room and occasional large transitions around immersive imagery. Section spacing deliberately varies with content density.

## Layout
Desktop: editorial grid with strong image fields, offset text and occasional full-bleed media. Standard prose remains narrow. Practical utility information may sit closer to page edges/grid lines for quick scanning.

Mobile: imagery remains important rather than being demoted beneath all copy. Practical hours/location move earlier. Preserve intentional crops and visual rhythm rather than collapsing every desktop row into identical vertical blocks.

## Shape and borders
Predominantly open layout. Square or subtly softened image edges. Fine rules may separate menu/utility content. Avoid universal rounded containers, floating cards, pills and shadows.

## Imagery
Photography is structural. Prefer documentary, appetising crops and a mixture of intimate food detail with environmental context. Allow asymmetric crops, edge-to-edge moments and image sequences. Avoid overlaying large amounts of text on busy food photography.

## Motion
Motion should feel quick, tactile and editorial: restrained image transitions, menu-state changes and navigation feedback. Avoid ubiquitous fade-up, constant parallax and decorative floating motion. Reduced-motion mode removes non-essential movement without hiding content.

## Component principles
Navigation is typographic and unobtrusive. Links may carry more personality than large buttons. Menu items are rows/groups, not cards. Utility hours/location are visually distinct through type/grid/rules rather than boxes. Image components support varied aspect ratios. CTAs should feel integrated into editorial flow.

## Responsive rules
Reduce display scale and gutters fluidly. Recompose image/text relationships at content-driven breakpoints. Preserve minimum 44px interactive targets. Menu exploration must remain easy one-handed. Never rely on hover.

## Explicit anti-patterns
No generic hero with eyebrow + giant headline + two buttons. No three-card feature row. No review carousel. No statistics strip. No glass panels. No coffee-bean iconography. No automatic hamburger menu if three links fit. No identical rounded menu cards. No animation merely because an element entered the viewport.
