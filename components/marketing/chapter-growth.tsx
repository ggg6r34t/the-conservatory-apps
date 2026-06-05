"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { DeviceFrame } from "@/components/marketing/device-frame";
import { AppScreen } from "@/components/marketing/app-screens";
import { MotionParallax } from "@/components/marketing/motion-parallax";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { StaggerReveal } from "@/components/marketing/stagger-reveal";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import { CHAPTERS, BOTANICAL_IMAGES } from "@/lib/narrative-content";
import { staggerItem } from "@/lib/motion";

export function ChapterGrowth() {
  const { growth } = CHAPTERS;
  const sectionRef = useRef<HTMLElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const plant = plantRef.current;
    const bar = progressRef.current;
    if (!section || !plant || !bar) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * 0.85;
      const end = -rect.height * 0.35;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, raw));

      bar.style.setProperty("--growth-progress", String(progress));

      if (!reduced) {
        const scale = 0.78 + progress * 0.34;
        plant.style.transform = `scale(${scale})`;
        plant.style.opacity = String(0.6 + progress * 0.4);
      }

      growth.milestones.forEach((_, i) => {
        const el = section.querySelector(`[data-milestone="${i}"]`);
        if (el) {
          el.classList.toggle(
            "is-active",
            progress > (i + 1) / (growth.milestones.length + 1),
          );
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [growth.milestones]);

  return (
    <ChapterShell
      id={growth.id}
      ariaLabelledBy="growth-heading"
      className="chapter-growth linen-surface"
    >
      <section ref={sectionRef} className="growth-stage relative">
        <div ref={progressRef} className="growth-progress" aria-hidden>
          <span className="growth-progress__fill" />
        </div>

        <ScrollReveal className="growth-intro mx-auto max-w-[var(--measure-intro)] text-center">
          <p className="growth-eyebrow m-0">
            <span className="growth-eyebrow-dot" aria-hidden />
            <span>{growth.eyebrow}</span>
          </p>
          <h2 id="growth-heading" className="type-chapter-title mt-6">
            {growth.headline}
          </h2>
          <p className="type-body-lg growth-body mx-auto mt-8 max-w-[38rem]">{growth.body}</p>
        </ScrollReveal>

        <div className="growth-grid">
          <MotionParallax strength={0.05} className="growth-plant-col">
            <figure className="m-0">
              <div
                ref={plantRef}
                className="growth-plant-frame"
                style={{ transformOrigin: "bottom center" }}
              >
                <div
                  className="growth-plant-shadow"
                  aria-hidden
                />
                <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-panel)] museum-vignette">
                  <Image
                    src={BOTANICAL_IMAGES.monstera}
                    alt="Monstera growth over seasons"
                    fill
                    sizes="(max-width:768px) 85vw, 320px"
                    className="object-cover object-bottom"
                  />
                  <div className="growth-plant-scrim" aria-hidden />
                </div>
              </div>
              <figcaption className="growth-plant-caption">
                Season by season · the shape changes
              </figcaption>
            </figure>
          </MotionParallax>

          <MotionParallax strength={0.08} className="growth-device-col">
            <ScrollReveal delayClass="reveal-delay-2">
              <DeviceFrame className="growth-device shrink-0 justify-self-center">
                <AppScreen id="timeline" />
              </DeviceFrame>
            </ScrollReveal>
          </MotionParallax>

          <div className="growth-milestones-wrap" role="list">
            <StaggerReveal className="growth-milestones m-0 flex list-none flex-col gap-4 p-0 lg:ps-2">
              {growth.milestones.map((m, i) => (
                <motion.div
                  key={m.label}
                  role="listitem"
                  data-milestone={i}
                  variants={staggerItem}
                  className="growth-milestone"
                >
                  <p className="growth-milestone-season m-0">{m.season}</p>
                  <p className="growth-milestone-label mt-2 m-0">{m.label}</p>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>
    </ChapterShell>
  );
}
