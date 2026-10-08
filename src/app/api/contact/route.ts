import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface Body {
  name?: string;
  email?: string;
  phone?: string;
  type?: string;
  message?: string;
  company?: string;
  lang?: string;
}

const clean = (v: unknown, max: number) => String(v ?? "").replace(/[\u0000-\u001f<>]/g, " ").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (body.company) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const type = clean(body.type, 80);
  const message = clean(body.message, 4000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Rawiya Studio <onboarding@resend.dev>";
  if (key && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject type: ${type}\nLanguage: ${clean(body.lang, 4)}\n\n${message}`,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
