"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { PROJECTS, UI, type Project } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLang();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const meta: [string, string][] = [
    [t(UI.year), project.year],
    [t(UI.type), t(project.type)],
    [t(UI.location), t(project.location)],
    [t(UI.area), project.area],
    [t(UI.status), t(project.status)],
  ];
  return (
    <>
      <section className="px-page bg-white pt-40 md:pt-52">
        <Link href="/projects" className="link-line text-muted">
          <span className="inline-block rtl:-scale-x-100">←</span> {t(UI.backToProjects)}
        </Link>
        <Reveal as="h1" text={project.title} immediate className="h-xl mt-8 text-[clamp(3.2rem,10vw,9rem)]" />
        <p className="mt-6 max-w-xl text-xl text-muted">{t(project.short)}</p>
        <div className="mt-14 overflow-hidden rounded-[3px]">
          <img src={project.image} alt={t(project.title)} className="aspect-[16/9] w-full object-cover" />
        </div>
      </section>
      <section className="px-page bg-white py-20 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr]">
          <dl className="flex flex-col">
            {meta.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-t border-line py-4 last:border-b">
                <dt className="label">{k}</dt>
                <dd className="text-end">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-8 text-xl leading-relaxed md:text-2xl">
            {project.body.map((b, i) => (
              <p key={i}>{t(b)}</p>
            ))}
          </div>
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {project.gallery.map((g) => (
            <img key={g} src={g} alt="" className="aspect-[4/5] w-full rounded-[3px] object-cover" />
          ))}
        </div>
      </section>
      <Link href={`/projects/${next.slug}`} className="group relative block overflow-hidden">
        <img src={next.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="px-page relative py-24 text-white md:py-36">
          <p className="label !text-white/80">{t(UI.nextProject)}</p>
          <p className="h-xl mt-4 text-[clamp(3rem,9vw,8rem)]">{t(next.title)}</p>
        </div>
      </Link>
    </>
  );
}
