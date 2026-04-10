# Gold Arch Wedding Invitation

Single-page, snap-scrolling digital wedding invitation built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Setup

1. Copy environment template:
   ```bash
   cp .env.example .env.local
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   ```

## Environment-Driven Controls

All content and toggles are read from `.env.local` via `NEXT_PUBLIC_*` variables:

- Theme colors: `NEXT_PUBLIC_THEME_PRIMARY`, `NEXT_PUBLIC_THEME_ACCENT`, `NEXT_PUBLIC_THEME_BACKGROUND`
- Couple details: `NEXT_PUBLIC_COUPLE_NAME_1`, `NEXT_PUBLIC_COUPLE_NAME_2`
- Date/time: `NEXT_PUBLIC_WEDDING_DATE`
- Assets: `NEXT_PUBLIC_HERO_BRIDE_IMAGE`, `NEXT_PUBLIC_HERO_GROOM_IMAGE`, `NEXT_PUBLIC_HERO_BACKGROUND_IMAGE`
- Venue/map: `NEXT_PUBLIC_VENUE_NAME`, `NEXT_PUBLIC_MAP_EMBED_URL`, `NEXT_PUBLIC_NAVIGATE_URL`
- Section toggles: `NEXT_PUBLIC_SHOW_HERO`, `NEXT_PUBLIC_SHOW_COUNTDOWN`, `NEXT_PUBLIC_SHOW_MAP`, `NEXT_PUBLIC_SHOW_RSVP`

Missing image/map URLs degrade gracefully to placeholders.
