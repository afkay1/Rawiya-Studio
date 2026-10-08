"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { BRAND, NAV, UI } from "@/lib/content";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = pathname === "/" && !scrolled && !open;
  const tone = overHero ? "text-white border-white/25 bg-transparent" : "text-ink border-line bg-white/92 backdrop-blur";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${tone}`} style={{ height: "var(--head)" }}>
        <div className="px-page flex h-full items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl" aria-label={t(BRAND.name)}>
              <Logo />
              <span>{t(BRAND.short)}</span>
            </Link>
            <span className={`hidden h-10 w-px md:block ${overHero ? "bg-white/25" : "bg-line"}`} />
            <p className="hidden max-w-[10rem] text-base leading-tight md:block">{t(BRAND.tagline)}</p>
          </div>

          <div className="flex items-center gap-5 md:gap-8">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-sm underline-offset-4 hover:underline"
              aria-label={t(UI.langLabel)}
            >
              {t(UI.lang)}
            </button>
            <div className="flex flex-col items-end leading-tight">
              <Link href="/studio" className="hidden text-xs opacity-70 hover:opacity-100 md:block">
                {t(UI.explore)}
              </Link>
              <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex items-center gap-2 text-lg">
                <span className={`inline-block text-2xl font-light leading-none transition-transform duration-500 ${open ? "rotate-45" : ""}`}>+</span>
                {open ? t(UI.close) : t(UI.menu)}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-white text-ink transition-all duration-500 ${open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="px-page grid min-h-full gap-10 pb-12 md:grid-cols-[minmax(0,430px)_1fr]" style={{ paddingTop: "calc(var(--head) + 40px)" }}>
          <div className="relative hidden aspect-[4/5] overflow-hidden md:block">
            <img src="/images/work-2.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-6 bottom-6 bg-white/75 p-7 backdrop-blur-md">
              <p className="text-lg leading-snug text-ink/80">
                {lang === "en"
                  ? "We craft spaces where light, texture and proportion form a quiet dialogue between architecture and emotion."
                  : "نصنع مساحات يشكّل فيها الضوء والملمس والنِّسب حواراً هادئاً بين العمارة والإحساس."}
              </p>
              <Link href="/contact" className="btn btn-dark mt-6 w-full">
                {t(UI.startYourProject)}
                <span className="btn-dot" />
              </Link>
            </div>
          </div>
          <nav className="flex flex-col items-end justify-between" aria-label="Main">
            <ul className="flex w-full flex-col items-end text-end">
              {NAV.map((n, i) => (
                <li key={n.href} className="overflow-hidden">
                  <Link
                    href={n.href}
                    className={`h-xl block text-[clamp(3rem,9vw,7.5rem)] uppercase transition-all duration-700 hover:text-muted ${open ? "translate-y-0" : "translate-y-full"}`}
                    style={{ transitionDelay: `${open ? i * 60 + 100 : 0}ms` }}
                  >
                    {t(n.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex w-full flex-wrap justify-end gap-x-8 gap-y-2 text-muted">
              <a href={`mailto:${BRAND.email}`} className="hover:text-ink">{BRAND.email}</a>
              <a href={BRAND.phoneHref} dir="ltr" className="hover:text-ink">{BRAND.phone}</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
