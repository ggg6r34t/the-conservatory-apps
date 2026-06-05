"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DeviceFrame } from "@/components/marketing/device-frame";
import { AppScreen } from "@/components/marketing/app-screens";
import { MotionParallax } from "@/components/marketing/motion-parallax";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { StaggerReveal } from "@/components/marketing/stagger-reveal";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import { CHAPTERS, BOTANICAL_IMAGES } from "@/lib/narrative-content";
import { staggerItem } from "@/lib/motion";

export function ChapterBegin() {
  const { begin } = CHAPTERS;

  return (
    <ChapterShell
      id={begin.id}
      ariaLabelledBy="begin-heading"
      className="chapter-begin linen-surface"
    >
      <div className="begin-editorial">
        <ScrollReveal className="begin-copy">
          <p className="begin-eyebrow m-0">
            <span className="begin-eyebrow-dot" aria-hidden />
            <span>{begin.eyebrow}</span>
          </p>
          <h2 id="begin-heading" className="type-chapter-title begin-title mt-6">
            {begin.headline}
          </h2>
          <p className="type-body-lg begin-body mt-8 max-w-[34rem]">{begin.body}</p>

          <StaggerReveal className="begin-details mt-12 max-w-[34rem]">
            {begin.points.map((point) => (
              <motion.p
                key={point}
                variants={staggerItem}
                className="begin-detail m-0"
              >
                {point}
              </motion.p>
            ))}
          </StaggerReveal>
        </ScrollReveal>

        <ScrollReveal delayClass="reveal-delay-2" className="begin-visual">
          <MotionParallax strength={0.06} className="begin-photo-panel">
            <figure className="m-0">
              <div className="begin-photo-frame museum-vignette">
                <Image
                  src={BOTANICAL_IMAGES.pothos}
                  alt="Trailing pothos in soft window light"
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-[center_42%]"
                />
                <div className="begin-photo-scrim" aria-hidden />
              </div>
              <figcaption className="begin-photo-caption">
                Window light · the first profile
              </figcaption>
            </figure>
          </MotionParallax>

          <MotionParallax strength={0.11} className="begin-device-float">
            <DeviceFrame className="begin-device shrink-0">
              <AppScreen id="plant" />
            </DeviceFrame>
          </MotionParallax>
        </ScrollReveal>
      </div>
    </ChapterShell>
  );
}
