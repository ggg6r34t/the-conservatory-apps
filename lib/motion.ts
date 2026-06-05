/** Shared Framer Motion tokens — mirrors former CSS `--ease-organic` / reveal timing */

export const EASE_ORGANIC = [0.22, 1, 0.36, 1] as const;

export const REVEAL_DURATION = 1;

export const HERO_ENTER_DELAYS = [0.12, 0.28, 0.44, 0.58] as const;

export const REVEAL_DELAY_BY_CLASS: Record<string, number> = {
  "": 0,
  "reveal-delay-1": 0.1,
  "reveal-delay-2": 0.2,
  "reveal-delay-3": 0.3,
};

export const revealViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px" as const,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_ORGANIC },
  },
};
