/**
 * Store badge mark assets (icon only — button chrome stays in store-badge.tsx).
 */
export const STORE_ICON_PATHS = {
  apple: "/images/store/apple-icon.png",
  google: "/images/store/play-icon.png",
} as const;

/** Rendered mark size inside buttons (mockup proportion) */
export const STORE_ICON_SIZE = {
  width: 36,
  height: 36,
} as const;

/** Both badges share identical outer dimensions */
export const STORE_BADGE_SIZE = {
  widthPx: 212,
  heightPx: 56,
} as const;
