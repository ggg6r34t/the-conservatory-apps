import Image from "next/image";
import { StoreBadgeGroup } from "@/components/store-badge";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { CHAPTERS, BOTANICAL_IMAGES } from "@/lib/narrative-content";
import { STORE_LINKS } from "@/lib/site";

export function ChapterDownload() {
  const { download } = CHAPTERS;

  return (
    <ChapterShell
      id={download.id}
      ariaLabelledBy="download-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={BOTANICAL_IMAGES.pothos}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_90%,transparent)]" />
      </div>

      <ScrollReveal className="relative z-10 mx-auto max-w-[var(--measure-intro)] text-center">
        <h2 id="download-heading" className="type-chapter-title">
          {download.headline}
        </h2>
        <p className="type-body-lg mx-auto mt-8 max-w-lg">{download.body}</p>
        <StoreBadgeGroup
          className="mt-14 justify-center"
          hrefApple={STORE_LINKS.apple}
          hrefGoogle={STORE_LINKS.google}
        />
      </ScrollReveal>
    </ChapterShell>
  );
}
