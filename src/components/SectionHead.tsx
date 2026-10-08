"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/content";
import Reveal from "./Reveal";

interface Props {
  label: L;
  title: L;
  desc?: L;
  link?: { href: string; label: L };
  align?: "center" | "start";
}

/** Bracketed label on one side, big title and short description beside it. */
export default function SectionHead({ label, title, desc, link }: Props) {
  const { t } = useLang();
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_2.2fr_1fr]">
      <p className="label pt-3">{t(label)}</p>
      <div>
        <Reveal as="h2" text={title} className="h-xl text-[clamp(3rem,7vw,6.5rem)]" />
        {desc && <p className="mt-6 max-w-xl text-lg leading-snug text-muted md:text-xl">{t(desc)}</p>}
      </div>
      <div className="md:text-end">
        {link && (
          <Link href={link.href} className="link-line">
            {t(link.label)}
            <span className="inline-block rtl:-scale-x-100">↗</span>
          </Link>
        )}
      </div>
    </div>
  );
}
