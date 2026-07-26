import { NextResponse } from "next/server";

/**
 * Starts a browser voice call for a demo and hands the access token back.
 *
 * The token is short-lived and scoped to one call — the browser needs it to
 * connect to the voice provider directly, but it never sees the app's URL or
 * any of its other endpoints.
 */

const FRONTDESK_URL = (process.env.FRONTDESK_URL || "").replace(/\/$/, "");

export const dynamic = "force-dynamic";

export async function POST(_request, { params }) {
  const { slug } = await params;

  if (!FRONTDESK_URL) {
    return NextResponse.json({ error: "Live calling isn't available right now." }, { status: 503 });
  }

  try {
    const res = await fetch(`${FRONTDESK_URL}/api/demos/${encodeURIComponent(slug)}/web-call`, {
      method: "POST",
      signal: AbortSignal.timeout(20_000),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      // 409 means the demo exists but has no live agent — worth showing verbatim.
      return NextResponse.json(
        { error: body.error || "Couldn't start the call." },
        { status: res.status },
      );
    }
    return NextResponse.json({ accessToken: body.accessToken });
  } catch {
    return NextResponse.json({ error: "Couldn't reach the call service." }, { status: 502 });
  }
}
