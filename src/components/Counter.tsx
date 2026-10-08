"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  to: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

/** Counts up from 0 when scrolled into view. */
export default function Counter({ to, decimals = 0, suffix = "", className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    el.textContent = (0).toFixed(decimals) + suffix;
    let tw: gsap.core.Tween | null = null;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          tw = gsap.to(obj, {
            v: to,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = obj.v.toFixed(decimals) + suffix;
            },
          });
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tw?.kill();
    };
  }, [to, decimals, suffix]);

  return (
    <span ref={ref} dir="ltr" className={className}>
      {to.toFixed(decimals) + suffix}
    </span>
  );
}
