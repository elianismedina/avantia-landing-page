---
name: Avantia
description: Design system for Avantia Academia, built with Astro and Vanilla CSS.
colors:
  brand-blue: "#1292e3"
  brand-blue-vibrant: "#169ae4"
  brand-blue-royal: "#3e8cd8"
  brand-blue-aqua: "#34aee4"
  brand-magenta: "#cd2f98"
  brand-purple: "#7a2b9f"
  brand-charcoal: "#34383c"
  gray-0: "#ffffff"
  gray-1: "#f8fafc"
  gray-2: "#f1f5f9"
  gray-3: "#e2e8f0"
  gray-4: "#cbd5e1"
  gray-5: "#94a3b8"
  gray-6: "#64748b"
  gray-7: "#475569"
  gray-8: "#334155"
  gray-9: "#1e293b"
  gray-10: "#0f172a"
  gray-11: "#090d16"
  gray-12: "#020617"
typography:
  fontFamily-body: "Inter, sans-serif"
  fontFamily-headings: "Raleway, sans-serif"
  fontFamily-mono: "menlo, consolas, monaco, adwaita mono, liberation mono, lucida console, monospace"
  font-size-md: "1rem"
  font-size-heading-xl: "2.875rem"
rounded:
  none: "0"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
  full: "9999px"
spacing:
  none: "0"
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "5rem"
  5xl: "6rem"
  6xl: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.gray-0}"
    rounded: "{rounded.xs}"
    padding: "0.5em 0.5em"
  button-secondary:
    backgroundColor: "{colors.gray-2}"
    textColor: "{colors.gray-10}"
    rounded: "{rounded.xs}"
    padding: "0.5em 0.5em"
---

# Design System: Avantia

## Overview

**Creative North Star: "The Sovereign Bid Master"**

Avantia's visual world projects absolute confidence, structure, and authoritative trust. It is designed to look premium and highly professional, reflecting the weight of state-level contracting, while remaining approachable and clean for small business owners and team members who feel intimidated by legal complexity. 

The density is medium, utilizing a structured spatial grid to establish clarity and readability. High-contrast typography and precise alignments create an environment where bid requirements and methodologies can be scanned easily. The brand is professional and serious, but never dry or clinical, balancing solid charcoal bases with vibrant strokes of azure and magenta that suggest momentum and success.

**Key Characteristics:**
- Authoritative and structured layouts that inspire trust and compliance.
- Vibrant, energetic primary and secondary accents to highlight success and action.
- Approachable, jargon-free visual density focusing on clarity and ease of reading.
- Tactile, responsive interactive controls that feel active and immediate.

## Colors

The color palette combines professional charcoal and slate neutrals with vibrant, high-energy accents representing action and achievement.

### Primary
- **State Azure** (#1292e3): Representing government bidding structures, clarity, and trust. Used for brand-identifying landmarks, key CTAs, and primary background overlays.

### Secondary
- **Adjudication Magenta** (#cd2f98): Representing achievement, success, and positive action. Used selectively for highlighting program key benefits, success metrics, and secondary CTAs.

### Tertiary
- **Regulatory Purple** (#7a2b9f): Representing mastery and deep domain knowledge. Used for category labels, specific phase accents, and background decorations.

### Neutral
- **Steel Charcoal** (#34383c): The anchor text and contrast color, projecting stability and seriousness.
- **Deep Slate Base** (#020617): The dark theme background neutral.
- **Pure White** (#ffffff): The light theme canvas background.

### Named Rules
**The Rarity Rule.** Accents (State Azure and Adjudication Magenta) must occupy ≤15% of any page surface. Their visual power depends on contrast against neutral backdrops.

## Typography

**Display Font:** Raleway (with sans-serif fallback)  
**Body Font:** Inter (with sans-serif fallback)  
**Label/Mono Font:** Menlo, Consolas, Monaco (monospace fallback)

**Character:** The pairing of Raleway's elegant geometric structures for headers with Inter's highly legible, neutral screen-optimized forms for body copy creates a balance between executive authority and direct, clean readability.

### Hierarchy
- **Display** (Bold (700), 3.75rem / 3rem mobile, 1.2): Large hero titles and key branding headlines.
- **Headline** (Bold (700), 2.875rem / 2.375rem mobile, 1.25): Section headings.
- **Title** (Semibold (600), 1.75rem / 1.5rem mobile, 1.3): Sub-sections and component title headers.
- **Body** (Normal (400), 1rem / 0.875rem mobile, 1.6): Paragraph copy, readouts, and descriptions. Max line length is constrained to 65–75ch.
- **Label** (Semibold (600), 0.75rem / 0.625rem mobile, 0.08em letter-spacing, uppercase): Eyebrows, buttons, form labels, and chips.

### Named Rules
**The Readability Cap.** Paragraph components must be capped at a max-width of 70ch to prevent eye fatigue when reading long bidding criteria or course outlines.

## Layout

The spatial layout is defined by a clean, consistent grid system using rem-based variables. Breather room is established with standard padding ranges to allow content to sit comfortably.

- **Breakpoints:** Mobile (under 640px), Desktop (640px and above).
- **Rhythm & Density:** Standard section spacing relies on `--spacing-4xl` (5rem) for desktop and `--spacing-2xl` (3rem) for mobile to separate blocks.
- **Content Widths:** Form containers are bounded by `--content-width-xl` (1024px) for full page sections and `--content-width-xs` (350px) to `--content-width-md` (640px) for individual content blocks.

## Elevation & Depth

This system operates under a tactile and interactive material model. Surfaces are flat at rest, relying on subtle borders and clean backgrounds to distinguish elements, but lift dynamically on user interaction.

### Shadow Vocabulary
- **Interactive Lift** (box-shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`): Applied dynamically on hover to buttons, cards, and interactive elements to indicate pressability.

### Named Rules
**The Flat-At-Rest Rule.** Interfaces must remain flat by default. Shadows appear only in response to focus or hover states to project responsive feedback.

## Shapes

Shapes are clean, sharp, and structured, utilizing tight corners for a modern professional look.

- **Border Radius:** Primitives such as buttons and inputs utilize a sharp `--radius-xs` (4px). Structural blocks like cards use a soft `--radius-sm` (8px). Large profile elements or pills use `--radius-full`.
- **Form Borders:** Form elements use a thin 1px border.

## Components

### Buttons
- **Shape:** Sharp corners (4px radius, `--radius-xs`)
- **Primary:** State Azure (`#1292e3` / `--color-bg-brand`) background with Pure White (`#ffffff` / `--color-text-on-brand`) text.
- **Secondary:** Light gray (`--color-bg-muted`) background with dark gray (`--color-text-strong`) text.
- **Hover / Focus:** On hover, buttons transform slightly upward (`translateY(-2px) scale(1.02)`) with a standard easing curve (`--ease-out-back`) and cast a subtle shadow. Focus casts an inset border ring (`--color-focus-ring`).

### Inputs / Fields
- **Style:** 1px stroke (`--color-border-inputs`) with a clean background (`--color-bg`) and tight corners (`4px` / `--radius-xs`).
- **Focus:** Border transitions to State Azure (`--color-brand`) with a soft focus-ring glow.
- **Error:** Uses a vibrant red (`#dc2626` / `--color-danger`) border outline.

## Do's and Don'ts

### Do:
- **Do** respect the Rarity Rule: reserve State Azure and Adjudication Magenta for interactive elements, highlights, and primary landmarks.
- **Do** align form inputs to sharp `--radius-xs` (4px) corners to preserve a crisp, technical look.
- **Do** constrain paragraph blocks to comfortable reading widths (max 70ch).

### Don't:
- **Don't** use decorative shadows on static elements. Shadows should strictly serve as interactive feedback.
- **Don't** mix Raleway and Inter font usage arbitrarily. Keep Raleway restricted to headers and Inter to body copy.
- **Don't** introduce secondary brand colors into base neutral layers. Backgrounds must stay strictly within the grayscale ramp (`--gray-0` to `--gray-12`).
