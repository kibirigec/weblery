# Front Desk product page — `/frontdesk`

## Goal
A standalone marketing page on the Weblery site for **Front Desk**, our AI receptionist
product (built in the separate `PROJECTS/FRONTDESK` repo). It should captivate a business
owner, make plug-and-play obvious, show it works across niches, and drive one CTA:
**enter your website URL → get a demo receptionist that answers as your business.**

## Decisions (confirmed with Calvin)
- **Repos stay separate.** FrontDesk is its own app (needs a worker + Postgres); modiqube only
  markets it and links/calls out to it. No folder move.
- **CTA = auto-build.** The form posts the visitor's URL to the live FrontDesk app, which scans
  and builds their demo, then we send them to it.
- **Standalone page.** No changes to Navigation or the services listing — reachable by direct
  link (for cold email). Smallest footprint on the existing site.
- **Own product identity.** Follows the reference (OpenAI Codex): video hero, generous
  whitespace, calm alternating sections. Not blended into the agency site's look.
- **Niches shown:** HVAC/trades, real estate, law firms, dental/medical.
- **Asset:** `public/FrontDesk_Assets/background-video-jan-28_202607252000.mp4` (1.4 MB) as the
  hero background.

## Key constraint
The FrontDesk app is **not deployed publicly yet** (blocked on the Northflank payment method),
so auto-build cannot work end-to-end today. Approach: build the real thing now, pointed at
`NEXT_PUBLIC_FRONTDESK_URL`. When that env var is absent or the app is unreachable, the form
**degrades to lead capture** (notify Calvin via the existing Telegram route) instead of erroring.
Nothing is throwaway; flipping the env var turns auto-build on.

## Todo

### Phase 1 — FrontDesk app (repo: PROJECTS/FRONTDESK)
- [ ] Public `POST /api/public/demo-request` — accepts `{ url, email? }`, creates the workspace,
      enqueues the scan, returns `{ slug, demoUrl }`
- [ ] Guardrails: URL validation/normalisation, per-IP rate limit, reuse an existing recent
      workspace for the same domain instead of duplicating
- [ ] CORS for the modiqube origin only
- [ ] Verify locally end to end

### Phase 2 — `/frontdesk` page (repo: modiqube)
- [ ] Route `src/app/frontdesk/page.js` + `layout.js` (own metadata, no site chrome)
- [ ] Hero: looping muted video bg, headline, URL field, CTA
- [ ] Section: the problem (missed calls = lost jobs) — brief, concrete
- [ ] Section: how it works — 3 steps, plug-and-play, no install, keep your number
- [ ] Section: niches — HVAC/trades, real estate, law, dental
- [ ] Section: what your team receives (the ticket artifact)
- [ ] Closing CTA
- [ ] `POST /api/frontdesk-demo` — calls FrontDesk when configured, else Telegram lead capture
- [ ] Responsive + reduced-motion + poster fallback for the video

### Phase 3 — verify
- [ ] Run the page locally, check hero/video/sections at desktop + mobile
- [ ] Submit the form both ways (configured / not configured)
- [ ] Confirm no regression to existing routes; leave `feat/shop` work untouched

## Notes
- Working tree is on branch `feat/shop` with unrelated in-progress changes — do not commit those.
- Site is Next.js 16 + React 19 + Tailwind 4, App Router, JS (not TS).

## Review

**Shipped.** All three phases done and verified.

### What was built
- **FrontDesk repo:** `POST /api/public/demo-request` — the only unauthenticated, internet-facing
  endpoint, so it carries its own guardrails (origin allow-list + CORS, 5/hour per-IP rate limit,
  URL normalisation rejecting localhost/private ranges, and 24h per-domain reuse).
- **modiqube:** `/frontdesk` — video hero, problem, 3-step plug-and-play, four niches with real
  intake examples, the ticket artifact, closing CTA. Own CSS namespace (`.fd-*`), own layout,
  no changes to Navigation/services (the site's global Footer still renders below).
- **modiqube:** `POST /api/frontdesk-demo` — calls the app when `FRONTDESK_URL` is set; otherwise
  (or if the app is unreachable/errors) captures the lead over the existing Telegram bot so a
  visitor never hits a dead form.

### Verified
- Endpoint: valid build, same-domain reuse, garbage + localhost rejected, 429 past the cap.
- Every section rendered at 1280px and 375px.
- **Full loop through the real UI:** typed `hvac.com` into the page → "Your receptionist is
  ready. Call it now →" linking to a live demo.

### Notes / gotchas
- A stray `echo >>` concatenated `FRONTDESK_URL` onto the `TELEGRAM_CHAT_ID` line in `.env.local`
  (no trailing newline), breaking both. Repaired; backup at `/tmp/envlocal.bak`.
- One test scan failed on `oneilheatingandair.com` — that domain doesn't resolve. The pipeline
  reported it correctly; not a bug in this work.
- `FRONTDESK_URL` currently points at `http://localhost:3000`. Point it at the deployed app once
  Front Desk is hosted, and set `PUBLIC_DEMO_ORIGINS` on that app to the weblery.com origin.
- Auto-build only works while the Front Desk app is reachable; until it's deployed publicly,
  production visitors will fall through to Telegram lead capture by design.
