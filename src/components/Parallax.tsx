"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  speed?: number; // % of own height moved across the viewport
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Parallax({ speed = 12, className = "", style, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: speed },
        { yPercent: -speed, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }
      );
    }, el);
    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
