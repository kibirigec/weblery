"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import VoiceOrb from "./VoiceOrb";
import { useScrollLock } from "./useScrollLock";
import { useSheetDismiss } from "./useSheetDismiss";

/**
 * The bottom sheet a visitor lands in after submitting their website.
 *
 * It exists because the scan takes the better part of a minute. A redirect
 * would spend that minute on a blank page; here the wait is the pitch — the
 * sheet shows what Front Desk is reading off their own site while it works.
 *
 * Phases: building → ready → calling → ended (ticket + email).
 * If the app is unreachable the sheet still opens and collects an email, so a
 * visitor never hits a dead end.
 *
 * Call UI reuses .fd-panel / .fd-card from the page so the sheet inherits the
 * theme rather than restating it. The live call shows the orb rather than the
 * page's waveform: the waveform labels a transcript, the orb is presence —
 * something listening and answering. Showing both would say one thing twice.
 */

const POLL_MS = 2500;
const MAX_CALL_SECONDS = 300;

function clock(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const BARS = [
  3, 5, 8, 6, 11, 16, 22, 18, 13, 9, 6, 4, 7, 12, 19, 25, 21, 15, 10, 7,
  5, 9, 14, 20, 17, 12, 8, 5, 4, 8, 13, 18, 24, 26, 20, 14, 9, 6, 4, 7,
  11, 17, 23, 19, 13, 8, 5, 3, 6, 10, 15, 21, 16, 11, 7, 5, 8, 12, 7, 4,
];

export default function DemoSheet({ open, website, result, onClose }) {
  const slug = result?.slug ?? null;

  const [status, setStatus] = useState(null);
  const [unavailable, setUnavailable] = useState(false);
  const [callState, setCallState] = useState("idle"); // idle | connecting | active | ended
  const [seconds, setSeconds] = useState(0);
  const [agentTalking, setAgentTalking] = useState(false);
  const [callError, setCallError] = useState(null);

  const [email, setEmail] = useState("");
  const [claim, setClaim] = useState("idle"); // idle | working | done | error
  const [claimError, setClaimError] = useState(null);

  const retellRef = useRef(null);
  const sheetRef = useRef(null);

  const scan = status?.scan ?? null;
  const agentReady = status?.agent?.status === "READY";
  // "SUCCEEDED", not "DONE" — matches prisma's ScanStatus enum. Getting this
  // wrong strands the sheet in the building state forever.
  const ready = scan?.status === "SUCCEEDED" && agentReady;
  const failed = scan?.status === "FAILED";
  const ticket = status?.ticket ?? null;

  /* ---- lifecycle ---- */

  const { closing, requestClose } = useSheetDismiss(onClose);
  useScrollLock(open);

  useEffect(() => {
    if (open) sheetRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && requestClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, requestClose]);

  // Poll build progress. Stops once the demo is ready or the scan failed —
  // except while a call is live, when we keep polling to catch the ticket.
  useEffect(() => {
    if (!open || !slug) return;
    let alive = true;

    async function tick() {
      try {
        const res = await fetch(`/api/frontdesk-demo/${slug}/status`, { cache: "no-store" });
        const body = await res.json();
        if (!alive) return;
        if (body.unavailable) {
          setUnavailable(true);
          return;
        }
        setStatus(body);
      } catch {
        /* transient — the next tick retries */
      }
    }

    tick();
    const id = setInterval(tick, POLL_MS);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [open, slug]);

  // Call timer, with a hard cap so a forgotten tab can't run forever.
  useEffect(() => {
    if (callState !== "active") return;
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s + 1 >= MAX_CALL_SECONDS) {
          retellRef.current?.stopCall();
          return MAX_CALL_SECONDS;
        }
        return s + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [callState]);

  // Never leave a call running behind a closed sheet.
  useEffect(() => {
    if (!open) retellRef.current?.stopCall();
  }, [open]);

  useEffect(() => () => retellRef.current?.stopCall(), []);

  /* ---- the call ---- */

  const startCall = useCallback(async () => {
    if (!slug || callState === "connecting" || callState === "active") return;
    setCallError(null);
    setCallState("connecting");
    setSeconds(0);

    try {
      const res = await fetch(`/api/frontdesk-demo/${slug}/web-call`, { method: "POST" });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Couldn't start the call.");

      // Browser-only module; kept out of the initial bundle.
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const client = new RetellWebClient();
      retellRef.current = client;

      client.on("call_started", () => setCallState("active"));
      client.on("agent_start_talking", () => setAgentTalking(true));
      client.on("agent_stop_talking", () => setAgentTalking(false));
      client.on("call_ended", () => {
        setAgentTalking(false);
        setCallState("ended");
      });
      client.on("error", () => {
        setAgentTalking(false);
        setCallState("ended");
        setCallError("The call dropped. You can try again.");
      });

      await client.startCall({ accessToken: body.accessToken });
    } catch (err) {
      setCallState("idle");
      // The most common cause by far is a denied microphone prompt.
      setCallError(
        err?.name === "NotAllowedError"
          ? "Microphone access is needed to talk to your receptionist."
          : err.message || "Couldn't start the call.",
      );
    }
  }, [slug, callState]);

  function hangUp() {
    retellRef.current?.stopCall();
    setCallState("ended");
  }

  /* ---- email ---- */

  async function submitEmail(e) {
    e.preventDefault();
    if (!email.trim() || claim === "working") return;
    setClaim("working");
    setClaimError(null);
    try {
      const res = await fetch("/api/frontdesk-demo/claim", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, slug, website }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Couldn't save that.");
      setClaim("done");
    } catch (err) {
      setClaimError(err.message);
      setClaim("error");
    }
  }

  if (!open) return null;

  const building = !unavailable && !ready && !failed && Boolean(slug);
  const noDemo = unavailable || !slug;

  return (
    <div
      className={`fds${closing ? " is-closing" : ""}`}
      role="presentation"
      onMouseDown={requestClose}
    >
      <div
        className="fds__sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Your Front Desk demo"
        tabIndex={-1}
        ref={sheetRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="fds__grip" aria-hidden="true" />
        <button type="button" className="fds__close" onClick={requestClose} aria-label="Close">
          ✕
        </button>

        <div className="fds__body">
          {/* ---- header ---- */}
          <p className="fds__eyebrow">
            {noDemo ? "We're on it" : building ? "Building your receptionist" : "Your receptionist is ready"}
          </p>
          <h2 className="fds__title">
            {status?.business?.name || website || "Your business"}
          </h2>

          {/* ---- stage ---- */}
          <div className="fd-panel fds__stage">
            <div className="fd-card fd-call">
              {noDemo ? (
                <>
                  <p className="fds__lead">
                    We couldn&apos;t build it live just now, so we&apos;re building it by hand.
                    Leave your email and we&apos;ll send it over shortly.
                  </p>
                </>
              ) : building ? (
                <>
                  <div className="fd-call__head">
                    <span className="fd-call__avatar" aria-hidden="true">
                      <Spinner />
                    </span>
                    <span className="fd-call__id">
                      <strong>Reading {website}</strong>
                      <span>{scan?.status === "RUNNING" ? "Crawling pages…" : "Queued…"}</span>
                    </span>
                  </div>

                  <div className="fd-wave is-live" aria-hidden="true">
                    {BARS.map((h, i) => (
                      <span
                        key={i}
                        style={{
                          height: `${h}px`,
                          animationDelay: `${(i % 11) * -0.13}s`,
                          animationDuration: `${0.85 + (i % 5) * 0.16}s`,
                        }}
                      />
                    ))}
                  </div>

                  <ul className="fds__steps">
                    <Step done={Boolean(scan)} label="Fetching your site" />
                    <Step
                      done={(scan?.pagesCrawled ?? 0) > 0}
                      label={
                        scan?.pagesCrawled
                          ? `Read ${scan.pagesCrawled} page${scan.pagesCrawled === 1 ? "" : "s"}`
                          : "Reading pages"
                      }
                    />
                    <Step done={Boolean(status?.profile)} label="Learning services, hours, service area" />
                    <Step done={agentReady} label="Training your receptionist" />
                  </ul>
                </>
              ) : failed ? (
                <p className="fds__lead">
                  {scan?.error?.includes("bot protection")
                    ? "Your site is behind bot protection, so we couldn't read it automatically."
                    : scan?.error?.includes("builds its pages in the browser")
                      ? "Your site builds its pages in the browser, so there's nothing for us to read in the page itself."
                      : "We couldn't read your site automatically."}{" "}
                  Leave your email and we&apos;ll set it up by hand — it usually takes us under an hour.
                </p>
              ) : (
                <>
                  <div className="fd-call__head">
                    <span className="fd-call__avatar" aria-hidden="true">
                      <PhoneIcon />
                    </span>
                    <span className="fd-call__id">
                      <strong>{status?.business?.name || "Your receptionist"}</strong>
                      <span>
                        {callState === "active"
                          ? "On the call"
                          : callState === "connecting"
                            ? "Connecting…"
                            : callState === "ended"
                              ? "Call ended"
                              : "Ready to answer"}
                      </span>
                    </span>
                    {(callState === "active" || callState === "ended") && (
                      <span className="fd-call__timer">
                        <i aria-hidden="true" />
                        {clock(seconds)}
                      </span>
                    )}
                  </div>

                  <div className="fds__orb">
                    <VoiceOrb
                      state={callState}
                      label={
                        callState === "active"
                          ? agentTalking
                            ? "Speaking…"
                            : "Listening…"
                          : callState === "connecting"
                            ? "Connecting…"
                            : callState === "ended"
                              ? "Call ended"
                              : "Tap to call"
                      }
                      onClick={callState === "active" ? hangUp : startCall}
                      // Agent talk events are the only level signal we get from
                      // the SDK, so drive the orb from those rather than fake a
                      // waveform that isn't reading real audio.
                      getLevel={() => (agentTalking ? 0.85 : 0.12)}
                    />
                  </div>

                  {ticket ? (
                    <TicketCard ticket={ticket} />
                  ) : (
                    <p className="fds__lead">
                      {callState === "ended"
                        ? "Your team's message is on its way — it usually lands within a few seconds."
                        : "Call it the way a customer would. Ask about your hours, your prices, or book a job."}
                    </p>
                  )}

                  {/* The orb starts the call, so there is no second start
                      button. Hanging up stays a separate, deliberate control. */}
                  {callState === "active" && (
                    <div className="fd-call__actions">
                      <button
                        type="button"
                        className="fd-call__end fds__hang"
                        onClick={hangUp}
                        aria-label="End call"
                      >
                        <HangUpIcon />
                      </button>
                    </div>
                  )}

                  {callError && <p className="fds__err">{callError}</p>}
                </>
              )}
            </div>
          </div>

          {/* ---- email ----
              Deliberately below the demo, never in front of it: this asks for
              an address to send something they already have, not for a signup
              to unlock it. */}
          {(noDemo || failed || callState === "ended" || ready) && (
            <div className="fds__claim">
              {claim === "done" ? (
                <p className="fds__claim-ok">
                  Sent. Check <strong>{email}</strong> for the link back to your receptionist.
                </p>
              ) : (
                <>
                  <p className="fds__claim-lead">
                    {noDemo || failed
                      ? "Where should we send it?"
                      : "Want to come back to this? We'll email you the link."}
                  </p>
                  <form className="fd-form__row fds__claim-row" onSubmit={submitEmail}>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@yourbusiness.com"
                      aria-label="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={claim === "working"}
                    />
                    <button type="submit" disabled={claim === "working" || !email.trim()}>
                      {claim === "working" ? "Sending…" : "Send it to me"}
                    </button>
                  </form>
                  <p className="fds__fine">
                    One email with your demo link. No account, no password.
                  </p>
                  {claimError && <p className="fds__err">{claimError}</p>}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Step({ done, label }) {
  return (
    <li className={done ? "is-done" : undefined}>
      <span className="fds__tick" aria-hidden="true">
        {done ? "✓" : ""}
      </span>
      {label}
    </li>
  );
}

function TicketCard({ ticket }) {
  const rows = [
    ["Caller", ticket.callerName],
    ["Phone", ticket.callerPhone],
    ["Address", ticket.address],
    ["Needs", ticket.serviceRequested],
    ["Preferred time", ticket.preferredTime],
  ].filter(([, v]) => v);

  return (
    <div className="fds__ticket">
      <div className="fd-ticket__top">
        <span className="fd-ticket__label">What your team just received</span>
        {ticket.urgency === "EMERGENCY" && (
          <span className="fd-ticket__badge fd-ticket__badge--urgent">URGENT</span>
        )}
      </div>
      {ticket.summary && <p className="fd-ticket__summary">{ticket.summary}</p>}
      {rows.length > 0 && (
        <dl className="fd-ticket__grid">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="fds__spin">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
    </svg>
  );
}

function HangUpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M12 9c-1.6 0-3.15.25-4.6.7v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85a.98.98 0 0 1-.7.29c-.28 0-.53-.11-.71-.29L.29 13.08a.98.98 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.47a.98.98 0 0 1-.71.29c-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.86.998.998 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9Z" />
    </svg>
  );
}
