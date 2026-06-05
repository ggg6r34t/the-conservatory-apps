"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MotionParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Higher = more vertical travel while scrolling */
  strength?: number;
};

export function MotionParallax({
  children,
  className = "",
  strength = 0.12,
}: MotionParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const travel = strength * 85;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
