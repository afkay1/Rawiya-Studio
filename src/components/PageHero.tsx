"use client";

import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/content";
import Reveal from "./Reveal";

export default function PageHero({ label, title, desc }: { label: L; title: L; desc?: L }) {
  const { t } = useLang();
  return (
    <section className="px-page stripes relative overflow-hidden bg-mist pb-16 pt-44 md:pb-24 md:pt-56">
      <div className="grid gap-6 md:grid-cols-[1fr_2.2fr_1fr]">
        <p className="label pt-3">{t(label)}</p>
        <div>
          <Reveal as="h1" text={title} immediate className="h-xl text-[clamp(3.2rem,9vw,8.5rem)]" />
          {desc && <p className="mt-8 max-w-xl text-lg leading-snug text-muted md:text-xl">{t(desc)}</p>}
        </div>
      </div>
    </section>
  );
}
