"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/content";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="px-page flex min-h-[80vh] flex-col items-start justify-center gap-8" style={{ paddingTop: "var(--head)" }}>
      <p className="label">404</p>
      <h1 className="h-xl max-w-3xl text-5xl md:text-8xl">{t(UI.notFoundTitle)}</h1>
      <p className="max-w-md text-lg text-muted">{t(UI.notFoundText)}</p>
      <Link href="/" className="btn btn-dark">
        {t(UI.backHome)}
        <span className="btn-dot" />
      </Link>
    </section>
  );
}
