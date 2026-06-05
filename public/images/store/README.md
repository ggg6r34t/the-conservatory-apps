# Store badge icons

The marketing site uses **your** App Store and Google Play mark files here. Button styling (green fill, outline, typography) lives in `components/store-badge.tsx` — only the icons are swapped via these assets.

## Required files

| File             | Used on                        |
| ---------------- | ------------------------------ |
| `apple-icon.png` | App Store button (left mark)   |
| `play-icon.png`  | Google Play button (left mark) |

## Specs

- **Format:** PNG or WebP with **transparent** background (no black matte behind the mark)
- **Apple:** White Apple logo only — the button already provides the green background
- **Google:** Full-color Play triangle (blue / green / yellow / red) on transparent
- **Size:** At least **52×52px** (displayed at 26×26px for crisp retina)
- **Padding:** Minimal trim; the mark should feel centered in a square canvas

## After adding files

No code changes needed if filenames match. Restart `npm run dev` if the dev server cached old assets.

Paths are defined in `lib/store-icons.ts`.
