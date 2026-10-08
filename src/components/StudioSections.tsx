"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { STUDIO } from "@/lib/content";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Parallax from "./Parallax";

export function AboutHero() {
  const { t } = useLang();
  return (
    <section className="px-page stripes relative overflow-hidden bg-mist pb-20 pt-44 md:pb-28 md:pt-56">
      <div className="pointer-events-none absolute inset-y-0 start-[33%] hidden w-px bg-line md:block" />
      <div className="pointer-events-none absolute inset-y-0 start-[66%] hidden w-px bg-line md:block" />
      <p className="label relative">{t(STUDIO.aboutLabel)}</p>
      <Reveal as="h1" text={STUDIO.aboutTitle} immediate className="h-xl relative mt-6 text-[clamp(3.5rem,11vw,10rem)]" />
      <div className="relative mt-14 grid gap-10 md:grid-cols-[1fr_1fr]">
        <p className="label">{t(STUDIO.aboutStory)}</p>
        <p className="text-2xl leading-snug md:text-4xl">{t(STUDIO.aboutIntro)}</p>
      </div>
      <div className="relative mt-16 overflow-hidden rounded-[3px]">
        <img src="/images/about-hero.jpg" alt="" className="aspect-[16/8] w-full object-cover" />
      </div>
    </section>
  );
}

export function Stories() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white py-24 md:py-40">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <p className="label">{t(STUDIO.storiesLabel)}</p>
        <Reveal as="p" text={STUDIO.stories} className="text-2xl leading-snug md:text-4xl" />
      </div>
      <div className="mt-20 grid gap-8 md:grid-cols-2">
        <Parallax speed={4}>
          <img src="/images/story-land.jpg" alt="" className="aspect-[4/5] w-full rounded-[3px] object-cover md:w-4/5" />
        </Parallax>
        <Parallax speed={8} className="md:mt-40">
          <img src="/images/about-detail.jpg" alt="" className="aspect-[4/5] w-full rounded-[3px] object-cover md:ms-auto md:w-4/5" />
        </Parallax>
      </div>
    </section>
  );
}

export function How() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <p className="label">{t(STUDIO.howLabel)}</p>
        <div>
          <p className="text-2xl leading-snug md:text-4xl">{t(STUDIO.how)}</p>
          <p className="mt-8 max-w-sm text-lg text-muted">{t(STUDIO.howSide)}</p>
        </div>
      </div>
      <ul className="mt-16 grid gap-px bg-line sm:grid-cols-2 md:grid-cols-3">
        {STUDIO.stats.map((s, i) => (
          <li key={i} className="flex min-h-[260px] flex-col justify-between bg-mist p-8">
            <p className="text-lg text-muted">{t(s.label)}</p>
            <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} className="font-mono text-7xl md:text-8xl" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Values() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <div className="grid gap-6 md:grid-cols-[1fr_2.2fr]">
        <p className="label pt-3">{t(STUDIO.valuesLabel)}</p>
        <div>
          <Reveal as="h2" text={STUDIO.valuesTitle} className="h-xl text-[clamp(3rem,7vw,6.5rem)]" />
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{t(STUDIO.valuesDesc)}</p>
        </div>
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
          <img src="/images/values.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <ul className="flex flex-col">
          {STUDIO.values.map((v, n) => (
            <li key={n} className="border-t border-line last:border-b">
              <button
                onMouseEnter={() => setI(n)}
                onFocus={() => setI(n)}
                onClick={() => setI(n)}
                aria-expanded={i === n}
                className="flex w-full items-start gap-6 py-8 text-start"
              >
                <span dir="ltr" className="w-12 text-lg text-muted">({String(n + 1).padStart(2, "0")})</span>
                <span className="flex-1">
                  <span className={`block text-3xl transition-colors md:text-5xl ${i === n ? "text-ink" : "text-muted"}`}>{t(v.title)}</span>
                  <span className={`grid transition-all duration-500 ${i === n ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="overflow-hidden text-lg text-muted">{t(v.text)}</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
