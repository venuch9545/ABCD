# Design Guidelines — SOUTH STONE EXPORTS

## Typography
- **Display/Headings:** System font stack with tight letter-spacing, uppercase, extra bold — editorial magazine feel
- **Body:** Clean sans-serif, generous line-height (1.6)
- **Hierarchy:** Oversized display headings (clamp 3rem-7rem), medium subheads, small body text

## Color Palette
- **Background:** White `#FFFFFF`
- **Foreground/Text:** Near-black `#0A0A0A`
- **Muted text:** `#6B7280`
- **Accent:** Warm stone gold `#B8860B` (used sparingly for CTAs, highlights)
- **Borders:** Light gray `#E5E7EB`
- **Section alternating:** `#FAFAFA` for subtle contrast

## Layout
- Editorial, asymmetric grid layouts inspired by magazine design
- Numbered sections (01, 02, 03...)
- Large hero area with full-width video placeholder
- Product gallery: dynamic masonry-like grid, not uniform cards
- Generous whitespace, bold typography-driven sections
- No vertical infinite scroll — single-page with anchor nav

## Components
- Fixed top navbar: logo left, nav links center/right, CTA button
- Hero: full-viewport with video background, bold overlaid text
- Product cards: image-dominant, hover reveals specs, WhatsApp CTA
- Section dividers: thin lines or numbered markers
- Contact: bold "Let's Work Together" section

## Motion
- Staggered reveal on page load using `motion/react`
- Subtle scroll-triggered animations for section entries
- Hover scale on product images

## Brand Elements
- Company: SOUTH STONE EXPORTS
- Owner: VENU CHALLA
- WhatsApp: +91 9014409545
- Email: info@southstoneexports.in
