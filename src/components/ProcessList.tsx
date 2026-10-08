"use client";

import { useLang } from "@/lib/i18n";
import { PROCESS } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProcessList() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white py-20 md:py-32">
      <ol className="flex flex-col">
        {PROCESS.map((s, i) => (
          <li key={i} className="grid gap-6 border-t border-line py-12 last:border-b md:grid-cols-[1fr_2fr_1.5fr] md:py-16">
            <span dir="ltr" className="font-mono text-lg text-muted">({String(i + 1).padStart(2, "0")})</span>
            <div>
              <Reveal as="h2" text={s.title} className="h-lg text-4xl md:text-6xl" />
              <p className="mt-6 max-w-xl text-lg leading-snug text-muted md:text-xl">{t(s.body)}</p>
            </div>
            <p className="text-lg leading-snug md:pt-3">{t(s.long)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
