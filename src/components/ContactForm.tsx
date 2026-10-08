"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { PROJECT_TYPES, UI } from "@/lib/content";

type State = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const { t, lang } = useLang();
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    if (!name) return setErr(t(UI.fErrName));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr(t(UI.fErrEmail));
    setErr("");
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: String(d.get("phone") || ""),
          type: String(d.get("type") || ""),
          message: String(d.get("message") || ""),
          company: String(d.get("company") || ""),
          lang,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setState("done");
      form.reset();
    } catch {
      setState("error");
      setErr(t(UI.fErrGeneric));
    }
  }

  if (state === "done")
    return (
      <div className="bg-mist p-10 md:p-14">
        <p className="h-lg text-4xl md:text-6xl">{t(UI.fThanks)}</p>
        <p className="mt-4 text-xl text-muted">{t(UI.fThanksText)}</p>
      </div>
    );

  const field = "w-full border-b border-line bg-transparent py-4 text-xl outline-none transition-colors focus:border-ink placeholder:text-muted";
  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <input name="name" placeholder={t(UI.fName)} aria-label={t(UI.fName)} className={field} />
      <input name="email" type="email" placeholder={t(UI.fEmail)} aria-label={t(UI.fEmail)} className={field} />
      <input name="phone" type="tel" placeholder={t(UI.fPhone)} aria-label={t(UI.fPhone)} className={field} />
      <select name="type" aria-label={t(UI.fType)} defaultValue={PROJECT_TYPES[0].en} className={field}>
        {PROJECT_TYPES.map((p) => (
          <option key={p.en} value={p.en}>{t(p)}</option>
        ))}
      </select>
      <textarea name="message" rows={4} placeholder={t(UI.fMessage)} aria-label={t(UI.fMessage)} className={field} />
      {err && <p role="alert" className="text-red-700">{err}</p>}
      <button type="submit" disabled={state === "sending"} className="btn btn-dark self-start disabled:opacity-60">
        {state === "sending" ? t(UI.fSending) : t(UI.fSend)}
        <span className="btn-dot" />
      </button>
    </form>
  );
}
