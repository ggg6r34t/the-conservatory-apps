"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { NAV_LINKS } from "@/lib/site";

export function CinematicHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ${solid
          ? "bg-[color-mix(in_srgb,var(--background)_94%,transparent)] shadow-[0_1px_0_color-mix(in_srgb,var(--outline-variant)_35%,transparent)] backdrop-blur-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container-site flex items-center justify-between gap-8 py-5 md:py-6">
        <Link
          href="/"
          aria-label="The Conservatory home"
          className={`no-underline transition-colors ${solid ? "text-primary" : "hero-text"
            }`}
        >
          <BrandLockup
            tone={solid ? "onLight" : "onDark"}
            textClassName="font-serif text-[1.125rem] font-bold tracking-tight md:text-xl"
          />
        </Link>
        <nav aria-label="Primary">
          <ul className="m-0 flex list-none items-center gap-0.5 p-0 sm:gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex rounded-[var(--radius-pill)] px-3.5 py-2 text-[var(--text-eyebrow)] font-bold tracking-[0.14em] no-underline transition-[color,background-color,opacity] md:px-4 md:text-[var(--text-small)] md:tracking-wide ${solid
                      ? "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                      : "hero-text hover:opacity-90"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
