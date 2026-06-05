/**
 * Brand icon marks — transparent PNGs in `public/images/`.
 *
 * - `onDark`: light leaf for hero nav over film (matches `hero-text`)
 * - `onLight`: primary leaf for scrolled nav, legal header, footer (matches `text-primary`)
 */
export const BRAND_ICON = {
  onDark: "/images/the-conservatory-icon.png",
  onLight: "/images/the-conservatory-icon-primary.png",
} as const;

export type BrandIconTone = keyof typeof BRAND_ICON;

export const BRAND_MARK_SIZE = 36;
