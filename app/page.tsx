import { preload } from "react-dom";
import { HomeExperience } from "@/components/marketing/home-experience";
import { HERO_FILM } from "@/lib/narrative-content";

export default function HomePage() {
  preload(HERO_FILM.posterWebp, {
    as: "image",
    fetchPriority: "high",
  });

  return <HomeExperience />;
}
