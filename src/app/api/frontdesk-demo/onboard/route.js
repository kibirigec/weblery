import { NextResponse } from "next/server";

/**
 * Forwards onboarding answers to the app, which builds the demo from them.
 * Same server-to-server shape as the other bridges, including the visitor IP
 * so the app's rate limit counts people rather than counting this server.
 */

const FRONTDESK_URL = (process.env.FRONTDESK_URL || "").replace(/\/$/, "");
const PROXY_KEY = process.env.FRONTDESK_PROXY_KEY || "";

function forwardHeaders(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";
  return {
    "content-type": "application/json",
    ...(PROXY_KEY && ip ? { "x-demo-proxy-key": PROXY_KEY, "x-demo-client-ip": ip } : {}),
  };
}

export async function POST(request) {
  if (!FRONTDESK_URL) {
    return NextResponse.json(
      { error: "We can't build it live just now — please email hello@weblery.com." },
      { status: 503 },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!String(payload?.businessName ?? "").trim()) {
    return NextResponse.json({ error: "Tell us the business name." }, { status: 400 });
  }

  try {
    const res = await fetch(`${FRONTDESK_URL}/api/public/onboard`, {
      method: "POST",
      headers: forwardHeaders(request),
      body: JSON.stringify(payload),
      // Provisioning a voice agent is slower than a normal request.
      signal: AbortSignal.timeout(60_000),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { error: body.error || "Couldn't build it just now." },
        { status: res.status },
      );
    }
    return NextResponse.json(body);
  } catch {
    return NextResponse.json(
      { error: "Couldn't reach us just now — try again in a moment." },
      { status: 502 },
    );
  }
}
