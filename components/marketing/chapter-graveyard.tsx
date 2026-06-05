import Image from "next/image";
import { ChapterIntro } from "@/components/marketing/chapter-intro";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { CHAPTERS, BOTANICAL_IMAGES } from "@/lib/narrative-content";

export function ChapterGraveyard() {
  const { graveyard } = CHAPTERS;

  return (
    <ChapterShell id={graveyard.id} ariaLabelledBy="graveyard-heading" className="linen-surface">
      <div className="grid items-center gap-[var(--space-stack-lg)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
        <ScrollReveal>
          <ChapterIntro
            eyebrow={graveyard.eyebrow}
            title={graveyard.headline}
            body={graveyard.body}
            id="graveyard-heading"
          />
        </ScrollReveal>

        <ScrollReveal delayClass="reveal-delay-2">
          <div className="rounded-[var(--radius-panel)] bg-surface-container p-8 md:p-12">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={BOTANICAL_IMAGES.ivy}
                alt="Soft ivy leaves in warm light"
                fill
                sizes="(max-width:768px) 90vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_srgb,var(--surface-container)_94%,transparent)_100%)]" />
            </div>
            <div className="relative -mt-20 mx-auto max-w-md rounded-[var(--radius-md)] bg-surface-container-lowest px-8 py-7 shadow-[var(--shadow-soft)] md:-mt-24 md:px-10 md:py-9">
              <p className="type-eyebrow m-0">Memorial</p>
              <p className="type-title mt-3 m-0">Fern · 2019–2025</p>
              <p className="type-body mt-4 m-0">
                Remembered for the corner it brightened, and the patience it taught.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </ChapterShell>
  );
}
