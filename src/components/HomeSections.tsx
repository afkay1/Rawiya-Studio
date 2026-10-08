"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CLIENTS, FAQS, HOME, POSTS, PROCESS, PROJECTS, SERVICES, UI } from "@/lib/content";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Parallax from "./Parallax";
import Accordion from "./Accordion";
import SectionHead from "./SectionHead";

const Arrow = () => <span className="inline-block rtl:-scale-x-100">↗</span>;

export function Philosophy() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white py-24 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[auto_1fr] md:gap-10">
        <div className="flex items-start gap-6 pt-3 md:w-[22rem]">
          <p className="label whitespace-nowrap">{t(HOME.philosophyLabel)}</p>
          <span className="mt-3 hidden h-px flex-1 bg-line md:block" />
        </div>
        <div>
          <Reveal as="p" text={HOME.philosophyLead} className="h-lg text-3xl md:text-5xl" />
          <Reveal as="p" text={HOME.philosophy} className="h-lg mt-2 text-3xl text-ink/90 md:text-5xl" />
        </div>
      </div>
    </section>
  );
}

export function Today() {
  const { t } = useLang();
  return (
    <section className="px-page pb-24 md:pb-40">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-6">
          <p className="label">{t(HOME.todayLabel)}</p>
          <span className="h-px flex-1 bg-line" />
        </div>
        <Reveal as="p" text={HOME.today} className="text-3xl leading-snug text-ink md:text-5xl md:leading-[1.15]" />
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <p className="label">{t(HOME.aboutLabel)}</p>
        <p className="text-2xl leading-snug md:text-4xl">{t(HOME.aboutLead)}</p>
      </div>
      <div className="mt-16 grid gap-5 md:grid-cols-[1.9fr_1fr_1fr]">
        <div className="overflow-hidden rounded-[3px]">
          <img src="/images/about-large.jpg" alt="" className="h-full max-h-[760px] w-full object-cover" />
        </div>
        <figure>
          <div className="aspect-[4/5] overflow-hidden rounded-[3px]">
            <img src="/images/about-detail.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-4 text-xl">{t(HOME.aboutCap1)}</figcaption>
        </figure>
        <figure>
          <div className="aspect-[4/5] overflow-hidden rounded-[3px]">
            <img src="/images/about-sea.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-4 text-xl">{t(HOME.aboutCap2)}</figcaption>
        </figure>
      </div>

      <div className="mt-24 grid gap-14 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <p className="max-w-xl text-3xl leading-snug md:text-4xl">{t(HOME.aboutHeadline)}</p>
            <p className="mt-8 max-w-lg text-lg leading-snug text-muted">{t(HOME.aboutPara)}</p>
          </div>
          <Link href="/studio" className="link-line self-start">
            {t(UI.moreAbout)} <Arrow />
          </Link>
        </div>
        <ul className="border-s border-line">
          {HOME.statsShort.map((s, i) => (
            <li key={i} className="border-b border-line px-8 py-9 first:border-t">
              <Counter to={s.to} suffix={s.suffix} className="font-mono text-6xl md:text-7xl" />
              <p className="mt-2 text-xl text-muted">{t(s.label)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Works() {
  const { t } = useLang();
  const featured = PROJECTS.slice(3, 6);
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <SectionHead label={HOME.worksLabel} title={HOME.worksTitle} desc={HOME.worksDesc} link={{ href: "/projects", label: UI.moreProject }} />
      <div className="mt-16 flex flex-col gap-5">
        {featured.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-[3px] md:aspect-[21/9]">
            <img src={p.image} alt={t(p.title)} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/10" />
            <p className="absolute end-6 top-6 hidden max-w-sm text-xl leading-snug text-white md:block md:end-10 md:top-10">{t(p.short)}</p>
            <div className="absolute inset-x-6 bottom-6 text-white md:inset-x-10 md:bottom-9">
              <p className="text-xl">{p.year}</p>
              <p className="h-lg text-4xl md:text-7xl">{t(p.title)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Clients() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <SectionHead label={HOME.clientsLabel} title={HOME.clientsTitle} desc={HOME.clientsDesc} />
      <ul className="mt-16 grid grid-cols-1 border-t border-s border-line sm:grid-cols-2 md:grid-cols-3">
        {CLIENTS.map((c) => (
          <li key={c} className="flex h-40 items-center justify-center border-b border-e border-line text-2xl tracking-tight text-muted transition-colors hover:bg-mist hover:text-ink md:h-52">
            {c}
          </li>
        ))}
      </ul>
      <span className="sr-only">{t(HOME.clientsDesc)}</span>
    </section>
  );
}

export function ServicesBlock() {
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <SectionHead label={HOME.servicesLabel} title={HOME.servicesTitle} desc={HOME.servicesDesc} link={{ href: "/services", label: UI.allServices }} />
      <div className="mt-16 overflow-hidden rounded-[3px]">
        <Parallax speed={0} className="aspect-[16/8]">
          <img src="/images/services-sketch.jpg" alt="" className="h-full w-full object-cover" />
        </Parallax>
      </div>
      <div className="mt-14 md:ms-[16%]">
        <Accordion items={SERVICES.map((s) => ({ title: s.title, body: s.body, extra: s.items }))} />
      </div>
    </section>
  );
}

const FLOATS_L = [
  { src: "/images/float-1.jpg", cls: "mt-0 w-[78%]", speed: 3 },
  { src: "/images/float-3.jpg", cls: "mt-24 ms-auto w-[62%]", speed: 5 },
];
const FLOATS_R = [
  { src: "/images/float-2.jpg", cls: "mt-16 ms-auto w-[62%]", speed: 5 },
  { src: "/images/float-4.jpg", cls: "mt-24 w-[78%]", speed: 3 },
];

export function ProcessBlock() {
  const { t } = useLang();
  const steps = PROCESS.slice(0, 3);
  const col = (list: typeof FLOATS_L) => (
    <div className="hidden md:block">
      {list.map((f) => (
        <Parallax key={f.src} speed={f.speed} className={f.cls}>
          <img src={f.src} alt="" className="aspect-[4/5] w-full rounded-[2px] object-cover" />
        </Parallax>
      ))}
    </div>
  );
  return (
    <section className="px-page overflow-hidden bg-white pb-24 md:pb-40">
      <SectionHead label={HOME.processLabel} title={HOME.processTitle} desc={HOME.processDesc} link={{ href: "/process", label: UI.fullProcess }} />
      <div className="mt-16 grid gap-6 md:grid-cols-[1fr_1.4fr_1fr] md:gap-8">
        {col(FLOATS_L)}
        <div className="flex flex-col gap-5">
          {steps.map((s, i) => (
            <div key={i} className="flex min-h-[320px] flex-col justify-between bg-mist p-7 md:p-9">
              <p className="text-2xl">{t(s.title)}</p>
              <p className="text-lg leading-snug text-muted">{t(s.body)}</p>
              <p dir="ltr" className="self-end text-2xl text-muted">({String(i + 1).padStart(2, "0")})</p>
            </div>
          ))}
        </div>
        {col(FLOATS_R)}
      </div>
    </section>
  );
}

export function Insight() {
  const { t } = useLang();
  const [a, b, c] = POSTS;
  const card = (p: typeof a, big: boolean) => (
    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
      <div className={`overflow-hidden rounded-[3px] ${big ? "aspect-[4/5] md:aspect-[4/4.6]" : "aspect-[4/4.6]"}`}>
        <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
      </div>
      <p className="mt-5 max-w-md text-xl leading-snug">{t(p.title)}</p>
      <p className="mt-2 text-muted">{t(p.date)}</p>
    </Link>
  );
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <SectionHead label={HOME.insightLabel} title={HOME.insightTitle} desc={HOME.insightDesc} link={{ href: "/blog", label: UI.seeAll }} />
      <div className="mt-16 grid gap-5 md:grid-cols-[2fr_1fr_1fr]">
        {card(a, true)}
        {card(b, false)}
        {card(c, false)}
      </div>
    </section>
  );
}

export function FaqBlock({ full = false }: { full?: boolean }) {
  const { t } = useLang();
  return (
    <section className="px-page bg-white pb-24 md:pb-40">
      <SectionHead label={HOME.faqLabel} title={HOME.faqTitle} desc={HOME.faqDesc} />
      <div className="mt-16 grid gap-10 md:grid-cols-[1fr_2.3fr]">
        <div className="self-start border-line md:border-e md:pe-10">
          <p className="text-3xl">{t(HOME.faqStill)}</p>
          <p className="mt-5 text-lg leading-snug text-muted">{t(HOME.faqStillText)}</p>
          <Link href="/contact" className="link-line mt-8">
            {t(UI.contactStudio)} <Arrow />
          </Link>
        </div>
        <Accordion variant="arrow" items={(full ? FAQS : FAQS).map((f) => ({ title: f.q, body: f.a }))} />
      </div>
    </section>
  );
}

export function CtaBlock() {
  const { t } = useLang();
  return (
    <section className="relative">
      <img src="/images/cta-bg.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="px-page relative py-24 md:py-40">
        <div className="bg-white/70 p-8 backdrop-blur-xl md:p-14">
          <div className="flex items-center gap-6">
            <p className="label whitespace-nowrap">{t(HOME.ctaLabel)}</p>
            <span className="h-px flex-1 bg-ink/20" />
            <Reveal as="h2" text={HOME.ctaTitle} className="h-lg text-4xl md:text-6xl" />
          </div>
          <p className="mt-10 max-w-4xl text-2xl leading-snug md:text-4xl">{t(HOME.ctaText)}</p>
          <Link href="/contact" className="btn mt-10">
            {t(UI.startYourProject)}
            <span className="btn-dot" />
          </Link>
        </div>
      </div>
    </section>
  );
}
