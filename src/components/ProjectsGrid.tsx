"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { PROJECTS, UI } from "@/lib/content";

export default function ProjectsGrid() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white py-20 md:py-28">
      <div className="grid gap-x-5 gap-y-16 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className={`group block ${i % 2 ? "md:mt-32" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-[3px] bg-card">
              <img src={p.image} alt={t(p.title)} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <p className="h-lg text-3xl md:text-5xl">{t(p.title)}</p>
              <p className="text-muted">{p.year}</p>
            </div>
            <p className="mt-2 text-muted">{t(p.type)} · {t(p.location)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
