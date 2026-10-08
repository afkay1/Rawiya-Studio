"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { BRAND, SITEMAP, UI } from "@/lib/content";

export default function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setErr(t(UI.invalidEmail));
      setState("error");
      return;
    }
    setState("sending");
    try {
      const r = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!r.ok) throw new Error();
      setState("done");
      setEmail("");
    } catch {
      setErr(t(UI.fErrGeneric));
      setState("error");
    }
  }

  const img = "inline-block h-[0.82em] w-[1.35em] align-[-0.05em] object-cover";

  return (
    <footer className="px-page bg-white pb-10 pt-24 text-ink md:pt-40">
      <div className="mx-auto max-w-5xl text-center">
        <p className="h-xl text-[clamp(3.2rem,12vw,12rem)] uppercase" dir="ltr">
          <span className="block whitespace-nowrap">
            {t(UI.footBuild)} <img src="/images/work-1.jpg" alt="" aria-hidden className={img} />
          </span>
          <span className="block whitespace-nowrap">
            <img src="/images/work-3.jpg" alt="" aria-hidden className={img} /> {t(UI.footHome)}
          </span>
        </p>
        <p className="mt-6 text-[clamp(1.5rem,3vw,2.6rem)] text-muted">{t(UI.footInto)}</p>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-14 md:mt-28 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="max-w-md text-lg text-muted">{t(UI.newsletterTitle)}</p>
          <form onSubmit={submit} noValidate className="mt-8 flex items-center border-b border-ink/70">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t(UI.email)}
              aria-label={t(UI.email)}
              autoComplete="email"
              className="w-full bg-transparent py-4 text-lg outline-none placeholder:text-muted"
            />
            <button aria-label={t(UI.subscribe)} disabled={state === "sending"} className="px-2 text-2xl transition-transform hover:-translate-y-0.5 disabled:opacity-40">
              <span className="inline-block rtl:-scale-x-100">↗</span>
            </button>
          </form>
          {state === "done" && <p className="mt-3 text-sm text-muted">{t(UI.subscribed)}</p>}
          {state === "error" && <p role="alert" className="mt-3 text-sm text-red-700">{err}</p>}
        </div>

        <div>
          <p className="text-lg text-muted">{t(UI.sitemap)}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-lg uppercase text-muted sm:grid-cols-3">
            {SITEMAP.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="transition-colors hover:text-ink">
                  {t(s.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
        <p>{t(UI.rights)}</p>
        <p className="flex gap-6">
          <a href={`mailto:${BRAND.email}`} className="hover:text-ink">{BRAND.email}</a>
          <a href={BRAND.phoneHref} dir="ltr" className="hover:text-ink">{BRAND.phone}</a>
        </p>
      </div>
    </footer>
  );
}
