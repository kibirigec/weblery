"use client";

import { useEffect, useRef } from "react";

/**
 * Gooey voice orb adapted from a Uiverse design (by Cobp): a gooey ball
 * with a morphing liquid core and 3D-rotating gradient rings. Mapped to our
 * real call states and driven by live audio — `level` (0..1) intensifies the
 * ball while the agent/caller speak. Clicking the orb starts (idle/ended) or
 * ends (active) the call.
 *
 * Ported from the Front Desk app so the marketing site can show the same
 * thing during a live call. The two repos deploy separately, so this is a
 * copy — keep them in step if the orb changes.
 */
export default function VoiceOrb({
  state,
  label,
  sublabel,
  onClick,
  getLevel,
}) {
  const hostRef = useRef(null);
  const rafRef = useRef(undefined);
  const smoothed = useRef(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (state !== "active" || !getLevel) {
      host.style.setProperty("--level", "0");
      return;
    }
    const tick = () => {
      const raw = Math.max(0, Math.min(1, getLevel() || 0));
      const k = raw > smoothed.current ? 0.35 : 0.08; // fast attack, slow release
      smoothed.current += (raw - smoothed.current) * k;
      host.style.setProperty("--level", smoothed.current.toFixed(3));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      smoothed.current = 0;
    };
  }, [state, getLevel]);

  const interactive = state === "idle" || state === "ended";
  // Mic invites a call; during an active call the orb is a pure voice
  // visualizer (the red hang-up button ends the call).
  const showMic = state !== "active";

  return (
    <div className="orb-wrap">
      <div
        ref={hostRef}
        className={`orb orb--${state}`}
        data-interactive={interactive && onClick ? "true" : undefined}
        onClick={interactive ? onClick : undefined}
        role={interactive && onClick ? "button" : undefined}
        tabIndex={interactive && onClick ? 0 : undefined}
        onKeyDown={
          interactive && onClick
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        aria-label={label}
      >
        <div className="orb__icons">
          <svg
            className="orb__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
          >
            <g className="orb__mic" data-show={showMic ? "true" : undefined} fill="none">
              <rect width="8" height="13" x="8" y="2" fill="currentColor" rx="4" />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 11a7 7 0 1 0 14 0m-7 10v-2"
              />
            </g>
          </svg>
        </div>

        <div className="orb__ball">
          <div className="orb__lines" />
          <div className="orb__rings" />
        </div>

        <svg className="orb__goo" aria-hidden="true">
          <filter id="orb-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" />
          </filter>
        </svg>
      </div>

      {(label || sublabel) && (
        <div className="orb__text">
          {label && <span className="orb__label">{label}</span>}
          {sublabel && <span className="orb__sub">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}
