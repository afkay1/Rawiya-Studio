"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { PROJECTS, UI } from "@/lib/content";
import Reveal from "./Reveal";

const SLIDES = PROJECTS.slice(0, 3);

export default function HeroSlider() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const timer = useRef<number | null>(null);

  const arm = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setI((n) => (n + 1) % SLIDES.length), 7000);
  }, []);

  useEffect(() => {
    arm();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [arm]);

  const go = (n: number) => {
    setI((n + SLIDES.length) % SLIDES.length);
    arm();
  };
  const p = SLIDES[i];

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-sky text-white">
      {SLIDES.map((s, n) => (
        <img
          key={s.slug}
          src={s.image}
          alt={n === i ? t(s.title) : ""}
          aria-hidden={n !== i}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: n === i ? 1 : 0,
            transform: n === i ? "scale(1.07)" : "scale(1)",
            transition: "opacity 1.4s ease, transform 9s linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/25" />
      {/* hairline grid */}
      <div className="pointer-events-none absolute inset-y-0 start-[14%] hidden w-px bg-white/20 md:block" style={{ top: "calc(var(--head) + 10px)" }} />
      <div className="pointer-events-none absolute inset-y-0 start-[56%] hidden w-px bg-white/20 md:block" style={{ top: "calc(var(--head) + 10px)" }} />

      <div className="px-page relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32">
        <p className="label !text-white/90">{t(UI.heroKicker)}</p>
        <Reveal as="h1" immediate delay={0.2} text={UI.heroTitle} className="h-xl mt-5 max-w-[11ch] text-[clamp(3.6rem,10vw,9.5rem)]" />
        <div className="mt-10">
          <Link href="/contact" className="btn">
            {t(UI.startProject)}
            <span className="btn-dot" />
          </Link>
        </div>
      </div>

      <div className="absolute end-[var(--pad)] hidden text-end text-lg font-medium uppercase leading-snug tracking-tight md:block" style={{ top: "calc(var(--head) + 56px)" }}>
        <p>{t(UI.heroLine1)}</p>
        <p>{t(UI.heroLine2)}</p>
        <p>{t(UI.heroLine3)}</p>
      </div>

      <div className="absolute bottom-24 end-[var(--pad)] z-10 hidden w-[min(350px,34vw)] md:block">
        <Link href={`/projects/${p.slug}`} className="mb-3 flex items-center justify-end gap-2 border-b border-white/70 pb-1 text-lg">
          {t(UI.viewProject)} <span className="inline-block rtl:-scale-x-100">↗</span>
        </Link>
        <div className="bg-white/80 text-ink backdrop-blur-md">
          <p className="px-5 py-5 text-xl">{t(p.title)}</p>
          <div className="flex items-center gap-3 bg-white/70 px-4 py-3">
            <button onClick={() => go(i - 1)} aria-label={t(UI.prev)} className="h-9 w-9 bg-white/90 text-lg transition-colors hover:bg-ink hover:text-white">
              <span className="inline-block rtl:-scale-x-100">‹</span>
            </button>
            <div dir="ltr" className="flex flex-1 items-center justify-center gap-3 text-sm">
              <span>({String(i + 1).padStart(2, "0")})</span>
              <span className="h-px w-16 bg-ink/30" />
              <span className="text-muted">({String(SLIDES.length).padStart(2, "0")})</span>
            </div>
            <button onClick={() => go(i + 1)} aria-label={t(UI.next)} className="h-9 w-9 bg-white/90 text-lg transition-colors hover:bg-ink hover:text-white">
              <span className="inline-block rtl:-scale-x-100">›</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-page absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-white/25 py-5 text-sm uppercase">
        <span>{t(UI.scrollDown)}</span>
        <span className="hidden md:inline">{t(UI.heroEst)}</span>
      </div>
    </section>
  );
}
