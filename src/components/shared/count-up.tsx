"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CountUpProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

function easeOutQuint(progress: number) {
  return 1 - Math.pow(1 - progress, 5);
}

export function CountUp({
  to,
  suffix = "",
  duration = 950,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      const frameId = requestAnimationFrame(() => {
        setValue(to);
        setHasAnimated(true);
      });

      return () => {
        cancelAnimationFrame(frameId);
      };
    }

    if (hasAnimated) {
      return;
    }

    if (!isInView) {
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuint(progress);

      setValue(Math.round(to * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      setValue(to);
      setHasAnimated(true);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [duration, hasAnimated, isInView, prefersReducedMotion, to]);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {value}
      {suffix}
    </span>
  );
}
