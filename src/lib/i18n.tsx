"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { L, Lang } from "./content";

interface Ctx {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (l: L) => string;
}

const LangCtx = createContext<Ctx>({ lang: "en", dir: "ltr", setLang: () => {}, t: (l) => l.en });

export const useLang = () => useContext(LangCtx);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const s = localStorage.getItem("rawiya-lang");
      if (s === "ar" || s === "en") setLangState(s);
    } catch {}
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("rawiya-lang", l);
    } catch {}
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, dir, setLang, t: (l) => l[lang] }), [lang, dir, setLang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}
