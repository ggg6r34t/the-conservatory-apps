import { JOURNEY } from "@/lib/narrative-content";

/** Journey rail labels mapped to chapter section ids */
export const JOURNEY_SECTIONS = [
  { label: JOURNEY[0], id: "begin" },
  { label: JOURNEY[1], id: "growth" },
  { label: JOURNEY[2], id: "archive" },
  { label: JOURNEY[3], id: "graveyard" },
] as const;
