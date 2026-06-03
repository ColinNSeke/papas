---
name: Artisanal Obsidian
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb3b1'
  on-secondary: '#680011'
  secondary-container: '#ad0224'
  on-secondary-container: '#ffb8b5'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#080a0a'
  on-tertiary-container: '#78797a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001c'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The brand personality is rooted in **Dark Luxury**—positioning street food as a high-end culinary experience. It emphasizes the "Master Craftsman" narrative, celebrating the authentic, manual labor of the owner and the vibrant freshness of ingredients through a lens of sophistication.

The visual style is **High-Contrast Minimalism** mixed with **Tactile Excellence**. We use deep, obsidian backgrounds to make the food photography pop with cinematic intensity. The emotional response is one of exclusivity, hunger, and trust in quality. Every interaction should feel intentional, quiet, and premium, moving away from typical "fast food" clutter toward a "fine dining" digital presence.

## Colors

The palette is strictly curated to maintain a premium atmosphere:
- **Primary Background (#0a0a0a):** A deep, "true black" that provides the canvas for high-end photography.
- **Vibrant Accent (#e63946):** A rich, premium red used sparingly for calls to action, price points, and status indicators, reflecting the heat of the grill and the freshness of tomatoes.
- **Primary Text (#ffffff):** Crisp white for maximum legibility against the dark void.
- **Elevated Neutral (#1a1a1a):** Used for card surfaces and UI containers to provide subtle depth without breaking the dark aesthetic.

## Typography

This system uses a tiered typographic approach to signal luxury:
- **Serif (Playfair Display):** Used for all headlines. Its high-contrast strokes and elegant serifs evoke a "Vogue-meets-Culinary" aesthetic.
- **Sans-Serif (Hanken Grotesk):** A clean, modern grotesque for body copy that ensures readability and a contemporary feel.
- **Monospace (JetBrains Mono):** Used for small labels, nutritional info, or price prefixes to add a "technical/precision" layer to the craftsmanship narrative.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a controlled, gallery-like feel. 
- **Large White Space:** We use aggressive vertical padding (120px+) between sections to allow the imagery to breathe.
- **12-Column Grid:** Standard for desktop with wide 24px gutters.
- **Mobile Fluidity:** On mobile, we shift to a 4-column grid with 20px side margins.
- **Alignment:** Headlines are often centered for a formal "menu" feel, while body copy remains left-aligned for reading comfort.

## Elevation & Depth

To maintain the "Dark Luxury" theme, we avoid traditional drop shadows which can look muddy on black backgrounds.
- **Tonal Layering:** Depth is achieved by placing `#1a1a1a` surfaces on top of the `#0a0a0a` background.
- **Inner Borders:** High-end containers use 1px solid borders in a very dark grey (`#2a2a2a`) or semi-transparent white (10% opacity) to define edges.
- **Backdrop Blurs:** When overlays (modals/menus) appear, we use a heavy blur (20px) on the background to maintain focus on the craftsmanship in the foreground.
- **Photography Depth:** Depth is primarily established through the provided photography, using shallow depth-of-field images of the Döner and the owner.

## Shapes

We use **Sharp (0)** roundedness for this design system. 
Right angles and crisp edges convey a sense of architectural precision, authority, and high-end fashion. All buttons, cards, and input fields must have 0px corner radii. The only exception is the natural organic shapes within the food photography itself, which provides the necessary visual softening.

## Components

- **Primary Buttons:** Solid `#e63946` background with white text. High-contrast, sharp corners. On hover, the button should shift to a slightly deeper red or add a subtle white inner border.
- **Secondary Buttons:** Ghost style. 1px white border, transparent background, white text.
- **Cards:** Used for menu items. Dark grey background (`#1a1a1a`) with full-bleed imagery on top. Typography inside uses `headline-md` for item names and `label-sm` for prices.
- **Input Fields:** Underline style only. A 1px white bottom border that glows slightly (low-spread red) when focused. 
- **Chips/Badges:** Small, rectangular boxes with `#e63946` background for "New" or "Chef's Choice" labels.
- **Lists:** Menu lists use `headline-md` for the dish title and a dotted "leader" line connecting to the price, reminiscent of high-end physical menus.
- **Interactive Text:** Links should have a persistent underline that disappears on hover, or vice versa, to maintain a literary, editorial feel.