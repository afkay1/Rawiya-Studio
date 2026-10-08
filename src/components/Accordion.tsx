"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/content";

interface Item {
  title: L;
  body: L;
  extra?: L[];
}

interface Props {
  items: Item[];
  variant?: "plus" | "arrow";
  defaultOpen?: number | null;
}

export default function Accordion({ items, variant = "plus", defaultOpen = null }: Props) {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className={variant === "arrow" ? "flex flex-col gap-3" : "border-t border-line"}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const num = `(${String(i + 1).padStart(2, "0")})`;
        return (
          <li key={i} className={variant === "arrow" ? "bg-mist" : "border-b border-line"}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center gap-5 text-start ${variant === "arrow" ? "px-6 py-6 md:px-8" : "py-7 md:py-9"}`}
            >
              <span dir="ltr" className="w-12 shrink-0 text-lg text-muted md:w-20">{num}</span>
              <span className={`flex-1 ${variant === "arrow" ? "text-lg md:text-2xl" : "h-lg text-3xl md:text-6xl"}`}>{t(it.title)}</span>
              {variant === "plus" ? (
                <span className={`text-4xl font-light text-muted transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
              ) : (
                <span className={`text-sm text-ink transition-transform duration-500 ${isOpen ? "-rotate-90" : "rotate-0"}`} aria-hidden>
                  <span className="inline-block rtl:rotate-180">◂</span>
                </span>
              )}
            </button>
            <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className={variant === "arrow" ? "px-6 pb-7 pe-12 text-muted md:px-8 md:ps-[8.5rem]" : "pb-9 text-muted md:ps-20 md:pe-24"}>
                  <p className="max-w-2xl text-lg leading-relaxed">{t(it.body)}</p>
                  {it.extra && (
                    <ul className="mt-5 flex flex-col gap-2 text-ink">
                      {it.extra.map((e, k) => (
                        <li key={k} className="border-t border-line pt-2 text-base">{t(e)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
