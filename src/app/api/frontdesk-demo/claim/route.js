import { NextResponse } from "next/server";

/**
 * Takes the email a visitor leaves after hearing their demo.
 *
 * Not a sign-up: there's no password and nothing to sign into. The address is
 * where we send their demo link back to. When the app is unreachable we still
 * keep the lead over Telegram rather than dropping it.
 */

const FRONTDESK_URL = (process.env.FRONTDESK_URL || "").replace(/\/$/, "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function captureLead(lines) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n"), parse_mode: "Markdown" }),
      signal: AbortSignal.timeout(10_000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(payload?.email ?? "").trim().toLowerCase();
  const slug = String(payload?.slug ?? "").trim();
  const website = String(payload?.website ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (FRONTDESK_URL && slug) {
    try {
      const res = await fetch(`${FRONTDESK_URL}/api/public/claim`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, email }),
        signal: AbortSignal.timeout(20_000),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) return NextResponse.json({ ok: true, emailed: Boolean(body.emailed) });
      if (res.status === 400 || res.status === 429) {
        return NextResponse.json({ error: body.error || "Please try again." }, { status: res.status });
      }
    } catch {
      // fall through to lead capture
    }
  }

  const captured = await captureLead([
    "📧 *Front Desk demo — email left*",
    "",
    `Email: ${email}`,
    website ? `Website: ${website}` : null,
    slug ? `Demo: ${slug}` : "Demo: not built (app unreachable)",
  ].filter(Boolean));

  if (!captured) {
    return NextResponse.json(
      { error: "Couldn't save that just now — please email hello@weblery.com." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true, emailed: false });
}
