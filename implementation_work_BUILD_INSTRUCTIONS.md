# Implementation Work: Build Instructions

This document describes how to add the **Implementation work** section to the portfolio at https://anasmoin1996.github.io/Portfolio/. The section content is in `implementation_work_v3.md`. This file is the build spec.

Read this whole document before writing any code. Most of the decisions have already been made; the goal is consistent execution.

## TL;DR

Add a new section called **Implementation work** between the **Work** (case studies) section and the **Things I built because I couldn't stop** (personal projects) section. It is NOT a case study. It is a scannable, interactive surface with two card grids and a closing line.

Two card grids:
1. **What the work actually looked like** (5 expandable accordion cards)
2. **Brands I ran as accounts** (5 expandable tile cards)

No facts bar. No pull quote. No "What I learned" closer. Those belong in case studies.

## Where the section lives in the page

In the existing home page (`index.html`), find the section that ends after case study 05 (Pitchpocket) and before "Things I built because I couldn't stop" (Genie + Project Muse).

Insert the new **Implementation work** section there.

The order on the home page becomes:
1. Hero
2. About
3. A few things about me (facts row)
4. Work (5 case study cards)
5. **Implementation work (NEW SECTION)**
6. Things I built because I couldn't stop (Genie + Project Muse)
7. Tools I work with
8. Experience
9. Contact

## Section anatomy

The section has 5 vertical pieces in this order. All centred to match site max-width.

```
┌─────────────────────────────────────────────────────┐
│  small label: "Implementation work"                  │  <- site convention
│  H2: "Seven and a half years across five brands."   │  <- main heading
│  intro paragraph (one short line)                    │
├─────────────────────────────────────────────────────┤
│  small label: "What the work actually looked like"  │
│  ┌─────┐ ┌─────┐ ┌─────┐                             │
│  │card │ │card │ │card │   <- flavour cards          │
│  └─────┘ └─────┘ └─────┘                             │
│      ┌─────┐ ┌─────┐                                 │
│      │card │ │card │                                 │
│      └─────┘ └─────┘                                 │
├─────────────────────────────────────────────────────┤
│  small label: "Brands I ran as accounts"            │
│  short intro: "Tap a brand..."                       │
│  ┌─────┐ ┌─────┐ ┌─────┐                             │
│  │tile │ │tile │ │tile │   <- brand tiles            │
│  └─────┘ └─────┘ └─────┘                             │
│      ┌─────┐ ┌─────┐                                 │
│      │tile │ │tile │                                 │
│      └─────┘ └─────┘                                 │
├─────────────────────────────────────────────────────┤
│  closing line (single quiet sentence)                │
└─────────────────────────────────────────────────────┘
```

## Section heading

Use the same visual treatment as other top-level sections on the site:
- Small grey/muted label "Implementation work" (matches "About", "Work", "Tools I work with" pattern)
- Large H2 headline below it
- Short intro paragraph (one to two lines max)

The H2 headline copy is: **"Seven and a half years across five brands."**

The intro paragraph is the `section_intro` field from the content file.

## Flavour cards (the first card grid)

### Card source data
Five cards, each from the `flavours` array in the content file. Each card has:
- `label` (short headline)
- `one_liner` (supporting line)
- `body` (markdown body, 2-3 short paragraphs)
- `callout` (single sentence, treated as a pull-quote inside the open card)

### Closed state (default)
- Card surface is a clean rectangle with a subtle border (1px) on the off-white background
- Inside the card: `label` rendered in heading weight, `one_liner` rendered below in body weight (slightly muted)
- Bottom-right corner: a small chevron icon pointing down, indicating expandability
- On hover (desktop), card border darkens slightly OR a subtle shadow appears. Pick one. No bouncing or scaling.
- Cursor: pointer

### Open state
The card expands inline (push other cards down). Do not open a modal. Do not navigate to a new page.

When open:
- The chevron rotates 180° to point up
- The body content reveals below the `one_liner` with a smooth max-height transition (300ms ease-out)
- Inside the body:
  - The `body` markdown renders as 1-3 short paragraphs
  - Below the body, the `callout` renders as a small accent block (left vertical accent bar in the site's accent colour, slightly larger or italic body text)
- A subtle "tap again to collapse" affordance is implied by the chevron rotating

### Multiple cards open at once
**Allow it.** Independent accordions. Each card opens and closes on its own. Some users will want to compare two flavours; let them.

### Layout behaviour

| Viewport | Layout |
|---|---|
| Desktop ≥1024px | 3 cards on top row, 2 cards centred on bottom row |
| Tablet 768-1023px | 2 cards per row, 5th card on its own row centred |
| Mobile <768px | Stacked single column, full width |

When a card opens on desktop, it expands within its grid cell (the row gets taller). The neighbouring cards stay the same height, so an open card creates a visible vertical extension only in its own column. On mobile (single column), the card just pushes the next card down.

### Card sizing
- Min height closed: ~140px (enough room for label + one_liner + chevron)
- Internal padding: generous (24px or more); this is a scannable surface, not a dense one
- Width: equal across the row

## Brand tiles (the second card grid)

### Tile source data
Five tiles, each from the `brands` array in the content file. Each tile has:
- `name` (brand name)
- `duration` (short duration tag)
- `tagline` (one short line of context)
- `detail` (markdown body, 2-3 sentences)

### Closed state (default)
- Smaller and visually quieter than the flavour cards above. These are tiles, not cards.
- Inside the tile: `name` in heading weight (slightly smaller than the flavour card labels), `duration` rendered above the name as a small muted tag, `tagline` rendered below the name in body weight
- No chevron on tiles (they're more obviously interactive due to the section intro saying "tap a brand")
- Hover: subtle background fill change

### Open state
**Use the single-open swap pattern for tiles.** Only one tile can be open at a time. Tapping a different tile closes the current one and opens the new one. Tapping the open tile again closes it.

When a tile opens:
- The tile expands inline within its grid cell
- The `detail` markdown reveals below the `tagline`
- Smooth height transition (300ms ease-out)
- Background colour shifts very slightly to indicate active state (use the accent colour at very low opacity, e.g. 5%)

### Layout behaviour

Same as flavour cards: 3+2 desktop, 2+2+1 tablet, stacked mobile.

### Tile sizing
- Min height closed: ~110px (smaller than flavour cards because there's less content)
- Internal padding: 20px
- Width: equal across the row

## Closing line

Single sentence from the `closing_line` field. Rendered:
- Centred horizontally on the page (or aligned to body content max-width left edge, designer's call)
- Italic OR a slightly larger body weight
- Muted colour
- Generous vertical whitespace above and below (4-5rem)
- No heading, no decoration

## Visual style: match the existing site

The portfolio already uses:
- Off-white background (`#fafaf7` or similar)
- Near-black text (`#1a1a1a`)
- One restrained accent colour (likely a muted teal, navy, or warm clay based on the design notes in content.md)
- One body sans-serif at 16px, line-height 1.7
- Subtle motion: fade + 8px translate on scroll-reveal, 300ms ease-out

**Do not introduce new fonts, new accent colours, new decoration, or new motion patterns.** Match what's already there.

## Animation and motion

- Section reveal on scroll: fade + 8px translate (matches existing site pattern)
- Card expand/collapse: max-height transition with overflow hidden, 300ms ease-out
- Chevron rotate on flavour cards: 200ms ease
- No bouncy animations. No carousel. No parallax.

## Accessibility

- Each card and tile MUST be a `<button>` element OR a `<div>` with `role="button"`, `tabindex="0"`, and proper keyboard handling (Enter and Space to toggle)
- Open/closed state communicated via `aria-expanded="true"` / `aria-expanded="false"`
- The expanded content area should have an `id` referenced by the trigger's `aria-controls`
- Focus styles MUST be visible on keyboard navigation (a visible outline using the accent colour)
- The chevron icon should be hidden from screen readers (`aria-hidden="true"`) since the aria-expanded state already communicates the toggle
- Card expand/collapse animations should respect `prefers-reduced-motion`. If reduced motion is preferred, snap the height transition to instant.

## Mobile considerations

- Tap targets minimum 44x44px (Apple's HIG minimum). Cards naturally exceed this; just don't shrink them.
- Cards expand smoothly on mobile, no layout shift outside the card itself
- Test that tapping a card doesn't accidentally trigger a long-press or text selection on mobile Safari
- Make sure the chevron and tap affordance are obvious. Hover states don't help mobile users.

## What NOT to do

- **Do NOT make the brand tiles open as modals or links to dedicated pages.** They expand inline.
- **Do NOT build a "Read the full story" link inside any of these cards.** They're not case studies. Anyone wanting depth on PPG specifically can read case study 05 (Pitchpocket).
- **Do NOT add icons next to flavour card labels.** The existing site uses minimal iconography. Stay consistent.
- **Do NOT add a facts bar to this section.** That was deliberately cut. Numbers live inside the brand tiles where they belong.
- **Do NOT add a "What I learned" closing block.** The closing line is the closing line.
- **Do NOT duplicate the visual style of the case study cards** (which use `01 · Health & beauty clinic · Live` style top labels with status pills). Flavour cards and brand tiles are different objects and should look like it.

## Implementation order (suggested)

1. Add the `implementation_work` block to the content source (paste the YAML from `implementation_work_v3.md`)
2. Build a static HTML version of the section first (no interactivity), with all cards in their open state. Confirm visual hierarchy and spacing match the site.
3. Add closed-state styling. Confirm both states render correctly.
4. Add the toggle behaviour (vanilla JS or framework-native, whatever the site already uses)
5. Add the single-open-swap behaviour to the brand tiles specifically
6. Test on mobile (375px wide) and tablet (768px wide) breakpoints
7. Run accessibility checks: keyboard navigation, screen reader, reduced motion

## Acceptance criteria

The section is done when:
- [ ] Section heading and intro paragraph match the site's existing section pattern
- [ ] 5 flavour cards render in 3+2 layout on desktop, 2+2+1 on tablet, stacked on mobile
- [ ] Tapping a flavour card expands it inline with smooth transition; chevron rotates
- [ ] Multiple flavour cards can be open simultaneously
- [ ] 5 brand tiles render in 3+2 layout on desktop, 2+2+1 on tablet, stacked on mobile
- [ ] Tapping a brand tile expands it; tapping another closes the first and opens the new one (single-open-swap)
- [ ] Closing line renders below the brand grid
- [ ] All cards keyboard accessible: Tab to focus, Enter or Space to toggle
- [ ] Screen reader correctly announces expanded/collapsed state
- [ ] `prefers-reduced-motion` is respected
- [ ] No em dashes anywhere in rendered output (this is a personal style preference of the site owner)
- [ ] Visual style matches existing site sections (no new fonts, colours, or motion patterns)

## Content source

All copy lives in `implementation_work_v3.md`. If any copy needs to change, change it there and rebuild the section. Do not hardcode strings in the component.

## Future enhancement (do not implement now)

A small "selected metrics" line could be added between the section intro and the flavour cards heading, for example: "8,000+ training sessions delivered. 5 enterprise accounts. 1 briefing template that did most of the work." Three numbers inline as a single line, not a facts bar. Hold off on this until the section ships and the owner sees how the section reads in production.
