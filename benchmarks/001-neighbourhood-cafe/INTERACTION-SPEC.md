# Alder & Lane — Interaction Specification

## Interaction principle
The site should feel alive because food, imagery and practical information respond to intent—not because every section animates into view.

## 1. Menu-to-image pairing — signature interaction
**Purpose:** connect the written menu to the sensory experience of the food.

**Trigger:** focus, pointer hover where available, or tap/select on featured menu items/categories.

**States:** default editorial image; selected category/item; transition between relevant images.

**Desktop:** interacting with selected menu lines updates a neighbouring image field with a restrained crop/transition. Selection persists rather than disappearing when the pointer moves.

**Touch/mobile:** tapping an item/category selects it and updates an image positioned where it remains useful; essential menu text never requires interaction.

**Keyboard:** focus/activation can select the same content; visible focus is retained.

**Reduced motion:** image swaps immediately or with a minimal opacity change.

**Runtime:** React island is justified for shared selection state; Motion may handle the transition if it remains lightweight.

**Fallback:** complete menu remains readable and all representative imagery remains available without JavaScript.

## 2. Tactile navigation
**Purpose:** make movement between the three small site destinations feel coherent.

**Trigger:** hover/focus/press and navigation.

**Behaviour:** restrained typographic underline/position treatment and, where supported without harming navigation, a short page/view transition.

**Mobile:** generous tap targets; no hover dependency.

**Keyboard:** standard links, visible focus, no custom navigation semantics.

**Reduced motion:** state styling remains; transitional movement is removed.

**Runtime:** CSS/native browser capability first. Do not add React for this.

## 3. Opening image choreography
**Purpose:** give Home a strong first impression while keeping practical information immediate.

**Trigger:** initial render and limited scroll relationship.

**Behaviour:** one controlled image/crop transition or subtle spatial response may occur as the opening composition yields to food content. Do not create continuous parallax.

**Mobile:** simplify to a stable image composition if scroll-linked behaviour competes with reading or performance.

**Keyboard:** no functionality depends on it.

**Reduced motion:** static final composition.

**Runtime:** CSS/native script first; Motion only if implementation quality clearly improves.

## 4. Menu category navigation
**Purpose:** move quickly through breakfast, lunch, pastries and drinks.

**Trigger:** category link/button activation and normal scrolling.

**Behaviour:** category control reflects the currently selected/navigated section when this can be implemented robustly. URL fragments should remain meaningful.

**Mobile:** controls may horizontally scroll within their own region if necessary, with all categories reachable by touch.

**Keyboard:** semantic anchors/buttons, normal tab order.

**Reduced motion:** disable smooth scrolling.

**Runtime:** native anchors + IntersectionObserver/small script preferred.

## 5. Practical-information feedback
**Purpose:** make hours/location/contact interactions feel deliberate.

**Trigger:** focus, hover, press.

**Behaviour:** concise visual feedback only. No decorative cards or bouncing icons.

**Runtime:** CSS.

## Interaction exclusions
No custom cursor, autoplay carousel, endless marquee, scroll-jacking, blanket fade-up system, decorative 3D, floating coffee objects, gratuitous parallax or interaction that delays hours/menu/location.

## Review criteria
The signature menu-image interaction must still feel useful after repeated use; touch and keyboard must be first-class; Home must remain fast; no interaction may obscure practical information; and the site must remain fully understandable when non-essential motion is removed or JavaScript fails.
