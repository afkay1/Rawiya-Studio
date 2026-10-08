"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/content";

interface Props {
  text: L;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
  immediate?: boolean;
}

/** Word-by-word masked reveal: words rise out of a clipped line. */
export default function Reveal({ text, as = "div", className = "", delay = 0, immediate = false }: Props) {
  const { lang, t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const Tag = as as React.ElementType;
  const str = t(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelectorAll<HTMLElement>(".mask > span");
    gsap.set(inner, { yPercent: 115 });
    const tween = gsap.to(inner, { yPercent: 0, duration: 1.05, ease: "power4.out", stagger: 0.045, delay, paused: true });
    if (immediate) {
      tween.play();
      return () => {
        tween.kill();
      };
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          tween.play();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tween.kill();
    };
  }, [str, lang, delay, immediate]);

  return (
    <Tag ref={ref} className={className} aria-label={str}>
      {str.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="mask">
          <span>{w}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}
