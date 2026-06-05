# Mobile Source Map

This document records every file in `../the-conservatory` used as the visual, copy, or legal source of truth for `the-conservatory-web`.

## Design system

| Mobile path | Web usage |
|-------------|-----------|
| `docs/design/DESIGN_QUICK_REFERENCE.md` | Color roles, spacing, radius, typography guidance, tonal surfaces |
| `docs/design/DESIGN.md` | Brand philosophy, editorial north star, token naming |
| `styles/tokens.ts` | Default theme id (`linen-light`) |
| `features/theme/definitions/linenLight.ts` | CSS variables in `app/globals.css` |
| `features/theme/registry.ts` | Confirmed `linen-light` as default theme export |
| `features/theme/tokens/colorTokens.ts` | Referenced for semantic color structure (not imported at runtime) |

## Membership & marketing copy

| Mobile path | Web usage |
|-------------|-----------|
| `features/billing/membershipNames.ts` | Tier names in `lib/marketing-content.ts` (Seedling, Steward, Heirloom) |
| `docs/architecture/PREMIUM_ENTITLEMENTS.md` | Truthful Premium feature descriptions on home page |

## Legal content

| Mobile path | Web usage |
|-------------|-----------|
| `features/legal/constants.ts` | Effective date (`LEGAL_LAST_UPDATED`) |
| `features/legal/content/privacyPolicy.ts` | `lib/legal-content.ts` → `/privacy` |
| `features/legal/content/privacySecurityStatement.ts` | Merged into privacy sections |
| `features/legal/content/dataRetention.ts` | Merged into privacy sections |
| `features/legal/content/dataExportPolicy.ts` | Merged into privacy sections |
| `features/legal/content/accountDeletionPolicy.ts` | Merged into privacy sections |
| `features/legal/content/termsOfService.ts` | `lib/legal-content.ts` → `/terms` |
| `features/legal/content/subscriptionTerms.ts` | Merged into terms sections |

## Theme quote (hero composition)

| Mobile path | Web usage |
|-------------|-----------|
| `features/theme/definitions/linenLight.ts` (`quote` field) | Editorial quote in `components/hero.tsx` botanical panel |

## Contact addresses

Mobile `features/legal/constants.ts` uses `@theconservatory.app`. The marketing site uses `@theconservatory.garden` per launch domain requirements in `lib/site.ts`. Legal **body text** is unchanged except email substitutions in contact paragraphs.

## Intentionally not imported

- React Native / Expo components
- `require()` image assets from theme previews
- Supabase, RevenueCat, or runtime mobile modules
- `features/legal/content/aiDisclosure.ts`, `thirdPartyLicenses.ts` (in-app only; linked from privacy where relevant)

## Brand mark

| Web path | Usage |
|----------|-------|
| `public/images/the-conservatory-icon.png` | Light leaf — hero nav over film (`tone="onDark"`) |
| `public/images/the-conservatory-icon-primary.png` | Primary leaf — scrolled nav, legal header, footer (`tone="onLight"`) |

## Photography (marketing hero & chapters)

| Mobile path | Web path |
|-------------|----------|
| `assets/images/lush-green-monstera-deliciosa.png` | `public/images/lush-green-monstera-deliciosa.png` |
| `assets/images/silver-satin-pothos-trailing-from-a-shelf.png` | `public/images/silver-satin-pothos-trailing-from-a-shelf.png` |
| `assets/images/pilea-peperomioides.png` | `public/images/pilea-peperomioides.png` |
| `assets/images/dark-ivy-leaves-in-high-contrast.png` | `public/images/dark-ivy-leaves-in-high-contrast.png` |

## Web deliverables

| Web path | Purpose |
|----------|---------|
| `app/globals.css` | linen-light CSS variables, linen texture, motion tokens |
| `lib/legal-content.ts` | Static legal documents |
| `lib/narrative-content.ts` | Cinematic home copy, journey, showcase |
| `lib/site.ts` | Site URL, nav, footer, contacts |
| `components/marketing/*` | Hero film, narrative chapters, showcase |
| `public/videos/README.md` | Product film delivery spec |
