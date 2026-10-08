"use client";

import { useLang } from "@/lib/i18n";
import { BRAND, UI } from "@/lib/content";

export default function ContactInfo() {
  const { t } = useLang();
  const rows: [string, React.ReactNode][] = [
    [t(UI.write), <a key="e" href={`mailto:${BRAND.email}`} className="link-line">{BRAND.email}</a>],
    [t(UI.call), <a key="p" dir="ltr" href={BRAND.phoneHref} className="link-line">{BRAND.phone}</a>],
    [t(UI.visit), <span key="a">{t(BRAND.address)}</span>],
    [t(UI.hours), <span key="h">{t(BRAND.hours)}</span>],
  ];
  return (
    <dl className="flex flex-col">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line py-5 text-xl last:border-b">
          <dt className="label pt-1.5">{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
