import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let email = "";
  try {
    const b = (await req.json()) as { email?: string };
    email = String(b.email ?? "").trim().slice(0, 160);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false }, { status: 422 });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (key && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Rawiya Studio <onboarding@resend.dev>",
        to: [to],
        subject: "New newsletter subscriber",
        text: `Subscriber: ${email}`,
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
