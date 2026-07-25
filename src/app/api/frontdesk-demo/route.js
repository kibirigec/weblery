import { NextResponse } from "next/server";

/**
 * Bridges the /frontdesk page to the Front Desk app (a separate deployment).
 *
 * When FRONTDESK_URL is configured, we ask the app to scan the visitor's site
 * and build their demo, then hand back the link. When it isn't — or the app is
 * unreachable — we fall back to capturing the lead over Telegram so a visitor
 * never hits a dead form and Calvin can build the demo by hand.
 */

const FRONTDESK_URL = (process.env.FRONTDESK_URL || "").replace(/\/$/, "");

async function captureLead(url, reason) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return false;

  const text = [
    "🎧 *Front Desk demo request*",
    "",
    `Website: ${url}`,
    `Source: /frontdesk page`,
    `Note: ${reason}`,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
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

  const url = String(payload?.url ?? "").trim();
  if (!url) {
    return NextResponse.json({ error: "Enter your website address." }, { status: 400 });
  }
  // Cheap sanity check; the app does the authoritative validation.
  if (!/^[a-z0-9.-]+\.[a-z]{2,}/i.test(url.replace(/^https?:\/\//i, ""))) {
    return NextResponse.json(
      { error: "That doesn't look like a website address." },
      { status: 400 },
    );
  }

  if (FRONTDESK_URL) {
    try {
      const res = await fetch(`${FRONTDESK_URL}/api/public/demo-request`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
        signal: AbortSignal.timeout(20_000),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok && body.demoUrl) {
        return NextResponse.json({ demoUrl: body.demoUrl, slug: body.slug });
      }
      // Rate limits and validation errors are worth showing the visitor verbatim.
      if (res.status === 429 || res.status === 400) {
        return NextResponse.json(
          { error: body.error || "Please try again in a moment." },
          { status: res.status },
        );
      }
      // Anything else: don't lose the lead.
      await captureLead(url, `app returned ${res.status}`);
      return NextResponse.json({ captured: true });
    } catch (err) {
      await captureLead(url, `app unreachable (${err?.name || "error"})`);
      return NextResponse.json({ captured: true });
    }
  }

  const captured = await captureLead(url, "FRONTDESK_URL not configured");
  if (!captured) {
    return NextResponse.json(
      { error: "Couldn't reach us just now — please email hello@weblery.com." },
      { status: 502 },
    );
  }
  return NextResponse.json({ captured: true });
}
