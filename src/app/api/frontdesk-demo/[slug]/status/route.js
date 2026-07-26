import { NextResponse } from "next/server";

/**
 * Proxies the Front Desk app's demo status so the sheet can poll progress.
 *
 * Server-to-server on purpose: the browser never talks to the app directly, so
 * the app keeps exactly one publicly-callable surface and we don't have to open
 * CORS on its internal demo endpoints.
 */

const FRONTDESK_URL = (process.env.FRONTDESK_URL || "").replace(/\/$/, "");

export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  const { slug } = await params;

  if (!FRONTDESK_URL) {
    // Not an error: the sheet has a degraded path for exactly this.
    return NextResponse.json({ unavailable: true }, { status: 200 });
  }

  try {
    const res = await fetch(`${FRONTDESK_URL}/api/demos/${encodeURIComponent(slug)}/status`, {
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) {
      return NextResponse.json({ unavailable: true }, { status: 200 });
    }
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ unavailable: true }, { status: 200 });
  }
}
