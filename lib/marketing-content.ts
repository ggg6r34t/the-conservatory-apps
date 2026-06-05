/** Membership names from mobile features/billing/membershipNames.ts */
export const MEMBERSHIP_TIERS = [
  {
    name: "The Seedling",
    role: "Free",
    description:
      "Local-first care journaling, reminders, care calendar, memorials, and a generous free tier for your collection.",
  },
  {
    name: "The Steward",
    role: "Monthly",
    description:
      "Deeper insight, cloud-backed photo history, richer export, and optional editorial intelligence when you choose it.",
  },
  {
    name: "The Heirloom",
    role: "Annual",
    description:
      "The same Premium depth with a steadier rhythm—plus access to premium interface themes on recurring plans.",
  },
] as const;

export const FEATURE_BLOCKS = [
  {
    id: "care-rhythm",
    eyebrow: "Gentle care rhythm",
    title: "Reminders that respect your pace",
    description:
      "Watering, feeding, misting, pruning, and inspection—logged with care and scheduled as local reminders on your device. No urgency theater, just a calm rhythm you can trust.",
    accent: "primary" as const,
  },
  {
    id: "growth-timeline",
    eyebrow: "Growth timeline",
    title: "Progress photos and visual history",
    description:
      "Capture how your plants change over time. Build a visual archive of growth moments alongside your care logs—photography-led, memory-forward.",
    accent: "tertiary" as const,
  },
  {
    id: "journal",
    eyebrow: "Journal & highlights",
    title: "Editorial reflection on your season",
    description:
      "Monthly care stories and journal entries that turn routine logs into something worth revisiting. Premium may add cloud-assisted narrative when enabled—never required to care well.",
    accent: "secondary" as const,
  },
  {
    id: "memorials",
    eyebrow: "Graveyard & memorials",
    title: "A thoughtful archive for plants past",
    description:
      "When a plant’s chapter ends, memorial and graveyard flows hold space for memory—not deletion. Local pairing and curation stay available without Premium.",
    accent: "primary" as const,
  },
] as const;
