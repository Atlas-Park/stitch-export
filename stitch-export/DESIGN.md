---
name: Aura Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#0d46d1'
  on-tertiary: '#ffffff'
  tertiary-container: '#3761ea'
  on-tertiary-container: '#efefff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b5'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system embodies an editorial, high-clarity portfolio aesthetic tailored for senior creatives, systems designers, and tech leaders. It combines high-end Swiss minimalist typography with modern tech polish.

### Personality & Principles
- **Clarity over Clutter:** Extreme restraint in decorative visual elements. Content, typography, and case study work take center stage.
- **Architectural Precision:** Structural layouts built on clear alignment, disciplined spacing intervals, and pure white planes punctuated by cool slate surfaces.
- **Electric Precision:** Strategic bursts of saturated cobalt and electric blue denote agency, action, and key focus areas without overwhelming the calm canvas.
- **Tactile Softness:** Balanced geometry with generous corner radii (`rounded-xl` to `rounded-2xl`) and whisper-soft diffused shadows create approachable elegance.

## Colors

The palette operates on pure `#FFFFFF` canvas backgrounds with cool slate foundational tiers and high-contrast typographic ink.

### Palette Architecture
- **Primary Canvas (`#FFFFFF`):** Base canvas background for clean breathing room.
- **Surface Muted (`#F8FAFC`):** Secondary container surface for cards, inset sections, and code/quote blocks.
- **Surface Subdued (`#F1F5F9`):** Interactive resting states, hovered chip surfaces, and badge containers.
- **Borders & Dividers (`#E2E8F0`):** Hairline boundary lines with high subtlety.
- **Typographic Neutral (`#0F172A`):** Deep slate-black for headers and high-contrast body text.
- **Text Muted (`#64748B`):** Cool slate for metadata, captions, timestamps, and secondary descriptions.
- **Primary Accent (`#2563EB`):** Royal Blue for primary CTAs, active states, and dominant visual hooks.
- **Secondary Accent (`#3B82F6`):** Electric Blue for focus rings, hover transitions, and highlights.
- **Tertiary Accent (`#1D4ED8`):** Deep Blue for pressed interactive states and text link contrast.

## Typography

The type system relies on `Plus Jakarta Sans` throughout the experience. Its geometry provides warmth while retaining structural authority.

- **Headlines:** Display and headline levels leverage negative tracking (`-0.02em` to `-0.03em`) and tight leading to create editorial tension and impact.
- **Body Text:** Uses standard letter spacing with relaxed line heights (`1.6x` to `1.7x`) to ensure readability across prolonged long-form case studies.
- **Labels & Micro-copy:** Uppercase or semi-bold micro-labels leverage slight positive tracking (`0.01em` to `0.04em`) to maintain crisp legibility at small sizes.

## Layout & Spacing

The layout is built upon a max-width container of `1280px` framed by a 12-column responsive fluid grid.

### Breakpoints & Reflow
- **Mobile (< 768px):** 4 columns, `margin-mobile` (1.25rem), `gutter-mobile` (1rem). Stacks case study previews vertically and reflows metrics into single/dual-column summaries.
- **Tablet (768px - 1024px):** 8 columns, 2rem margins, 1.25rem gutters. Dual-card portfolio configurations.
- **Desktop (> 1024px):** 12 columns, `margin` (3rem), `gutter` (1.5rem). Max container constraint applied with centered auto-margins.

### Vertical Rhythm
Section blocks adhere to generous vertical spacing (`space-xl` to `5rem`), maintaining distinct pacing between intro hero, featured works, capability grids, and contact touchpoints.

## Elevation & Depth

Visual hierarchy uses subtle atmospheric layering rather than harsh drop shadows. Surfaces feel airborne, crisp, and tactile.

### Depth System
- **Level 0 (Flat):** Pure `#FFFFFF` and `#F8FAFC` base layers with 1px hairline borders (`#E2E8F0`).
- **Level 1 (Surface Rest):** Applied to cards and floating toolbars. 
  - `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04);`
  - Border: `1px solid #E2E8F0`
- **Level 2 (Interactive Hover):** Lift on interactive project items and modal overlays.
  - `box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.06), 0 4px 8px -4px rgba(15, 23, 42, 0.03);`
  - Border: `1px solid #CBD5E1`
- **Focus Rings:** Subtle electric halo for accessibility:
  - `box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);`

## Shapes

The design system applies refined, progressive curvature:

- **Base Radius (`rounded-md` - 0.5rem):** Inputs, buttons, tags, and small utility triggers.
- **Structural Radius (`rounded-xl` - 1rem):** Inset code blocks, image frames, and utility cards.
- **Heroic Radius (`rounded-2xl` - 1.5rem):** Case study cards, interactive showcase viewports, and primary modal panels.
- **Pill Radius (`rounded-full`):** Category pills, status indicators, and avatar cutouts.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, border `transparent`, shape `rounded-md` (0.5rem), padding `0.75rem 1.5rem`. Hover shifts to `#1D4ED8` with a subtle transform `translateY(-1px)`.
- **Secondary:** Background `#F8FAFC`, text `#0F172A`, border `1px solid #E2E8F0`. Hover shifts to `#F1F5F9` and border to `#CBD5E1`.
- **Tertiary/Ghost:** Background `transparent`, text `#2563EB`, padding `0.5rem 0.75rem`. Hover shifts to `#F1F5F9`.

### Cards & Case Study Previews
- **Container:** Background `#FFFFFF`, border `1px solid #E2E8F0`, radius `rounded-2xl` (1.5rem), internal padding `space-lg`.
- **Media Inset:** Aspect ratio `16:10` or `16:9`, radius `rounded-xl` (1rem), overflow hidden, subtle light gray border (`#F1F5F9`).
- **Interaction:** Smooth transition on hover (`transform: translateY(-4px)`, shadow moves from Level 1 to Level 2).

### Chips & Badges
- **Status Badge:** Shape `rounded-full`, padding `0.25rem 0.75rem`, background `#EFF6FF`, text `#2563EB`, typography `label-sm`.
- **Tech Stack Pill:** Shape `rounded-full`, padding `0.375rem 0.875rem`, background `#F8FAFC`, border `1px solid #E2E8F0`, text `#64748B`.

### Form Fields (Contact & Inquiries)
- **Input & Textarea:** Background `#FFFFFF`, border `1px solid #E2E8F0`, radius `rounded-md` (0.5rem), padding `0.75rem 1rem`, typography `body-md`.
- **States:** Focused state displays border `#2563EB` and the electric blue focus ring (`rgba(59, 130, 246, 0.35)`). Placeholder in `#94A3B8`.

### Navigation & Floating Header
- **App Bar:** Fixed/sticky at top, background `rgba(255, 255, 255, 0.85)` with backdrop blur `12px`. Border bottom `1px solid rgba(226, 232, 240, 0.8)`. Padding `1rem 2rem`.
- **Links:** Typography `label-md`, text `#64748B`, transition to text `#0F172A` on hover. Active links marked with a `#2563EB` dot indicator.