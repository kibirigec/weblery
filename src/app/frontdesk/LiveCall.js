"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A call that plays: the timer runs, the waveform moves while someone is
 * speaking, and the transcript arrives word by word.
 *
 * The script is the call that produces the ticket in the next section — same
 * caller, same number, same address, same slot. If you edit one, edit both.
 */

const WORD_MS = 205;
const TAIL_S = 3; // hold on the finished call before looping

// `gap` is the silence before the line starts, so timings can't drift out of
// order the way hand-written absolute timestamps do.
const SCRIPT = [
  { agent: true, gap: 0.8, text: "Summit Heating and Air, this is Riley — how can I help?" },
  { agent: false, gap: 0.6, text: "Hi — my AC stopped cooling this afternoon and it won't come back on." },
  { agent: true, gap: 0.5, text: "Sorry to hear it. How warm is it inside right now?" },
  { agent: false, gap: 0.5, text: "Eighty-eight degrees, and I've got two young kids at home." },
  { agent: true, gap: 0.4, text: "That makes it urgent. Can I take your name and the service address?" },
  { agent: false, gap: 0.5, text: "Maria Lopez, 4821 Maple Avenue." },
  { agent: true, gap: 0.4, text: "Thanks Maria. Best number to reach you on?" },
  { agent: false, gap: 0.5, text: "Seven oh two, eight six six, two two two two." },
  { agent: true, gap: 0.4, text: "Got it. Earliest visit is tomorrow between eight and ten — shall I hold it?" },
  { agent: false, gap: 0.5, text: "Yes please, the earliest you have." },
  { agent: true, gap: 0.4, text: "Booked. I'm flagging this urgent and texting the team now." },
];

// Lay the script out on a timeline once, at module load.
const TURNS = (() => {
  let cursor = 0;
  return SCRIPT.map((line) => {
    const words = line.text.split(" ");
    const at = cursor + line.gap;
    const end = at + (words.length * WORD_MS) / 1000;
    cursor = end;
    return { ...line, words, at, end };
  });
})();

const TOTAL = TURNS[TURNS.length - 1].end + TAIL_S;

const BARS = [
  4, 7, 11, 6, 14, 9, 18, 12, 22, 15, 9, 20, 25, 17, 10, 6, 13, 21, 16, 8, 12, 24, 18,
  11, 7, 15, 19, 9, 23, 14, 6, 10, 17, 26, 13, 8, 20, 12, 5, 16, 22, 10, 7, 14, 9, 4,
];

function clock(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export default function LiveCall() {
  // Starts fully revealed so the transcript is present without JS and in the
  // server render; playback rewinds it once the panel scrolls into view.
  const [elapsed, setElapsed] = useState(TOTAL);
  const [playing, setPlaying] = useState(false);
  const panelRef = useRef(null);
  const logRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Play by default, and let the observer *pause* it when it scrolls away.
    // Gating the start on the observer instead means the call never plays
    // anywhere the observer stays silent — it fails closed, invisibly.
    setPlaying(true);

    const el = panelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const started = performance.now();
    setElapsed(0);
    const id = setInterval(() => {
      const e = (performance.now() - started) / 1000;
      setElapsed(e % TOTAL);
    }, 100);
    return () => clearInterval(id);
  }, [playing]);

  const active = TURNS.find((t) => elapsed >= t.at && elapsed < t.end);
  const speaking = Boolean(active);

  // Keep the newest line in view, scrolling the log only — never the page.
  useEffect(() => {
    const log = logRef.current;
    if (!log) return;

    const live = log.querySelector("[data-live='true']");
    if (!live) {
      // Only rewind when the call loops. Snapping to the top during the pauses
      // between turns would drag the transcript back and forth all call.
      if (elapsed < 0.5) log.scrollTop = 0;
      return;
    }

    const target = Math.max(0, live.offsetTop + live.offsetHeight - log.clientHeight);
    // Reassigning every tick restarts the smooth-scroll animation, which
    // leaves it permanently mid-flight and never arriving.
    if (Math.abs(log.scrollTop - target) > 1) log.scrollTop = target;
  }, [elapsed]);

  return (
    <div className="fd-panel" ref={panelRef}>
      <div className="fd-card fd-call">
        <div className="fd-call__head">
          <span className="fd-call__avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
            </svg>
          </span>
          <span className="fd-call__id">
            <strong>(702) 866-2222</strong>
            <span>Incoming · 9:41 PM</span>
          </span>
          <span className="fd-call__timer">
            <i aria-hidden="true" />
            {clock(elapsed)}
          </span>
        </div>

        <div className={`fd-wave${speaking ? " is-live" : ""}`} aria-hidden="true">
          {BARS.map((h, i) => (
            <span key={i} style={{ height: `${h}px`, animationDelay: `${(i % 9) * -0.11}s` }} />
          ))}
        </div>

        <p className="fd-call__label">Live transcript</p>
        <ol className="fd-call__log" ref={logRef}>
          {TURNS.map((t, i) => {
            const shown = Math.floor((elapsed - t.at) / (WORD_MS / 1000));
            return (
              <li
                key={i}
                data-live={active === t ? "true" : undefined}
                className={elapsed >= t.at ? "is-open" : undefined}
              >
                <span className="fd-call__at">{clock(t.at)}</span>
                <span className={`fd-call__spk${t.agent ? " fd-call__spk--agent" : ""}`}>
                  {t.agent ? "Front Desk" : "Caller"}
                </span>
                <span className="fd-call__said">
                  {t.words.map((w, wi) => (
                    <span key={wi} className={wi < shown ? "fd-w is-in" : "fd-w"}>
                      {w}{" "}
                    </span>
                  ))}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="fd-call__actions" aria-hidden="true">
          <span className="fd-call__end">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
              <path d="M12 9c-1.6 0-3.15.25-4.6.7v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85a.98.98 0 0 1-.7.29c-.28 0-.53-.11-.71-.29L.29 13.08a.98.98 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.47a.98.98 0 0 1-.71.29c-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.86.998.998 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
