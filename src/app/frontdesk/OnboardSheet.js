"use client";

import { useEffect, useRef, useState } from "react";
import DemoSheet from "./DemoSheet";
import { AFTER_HOURS, BUSINESS_TYPES, DAY_PATTERNS, HOUR_PATTERNS } from "./onboardingQuestions";

/**
 * Builds a receptionist for someone who has no website — or won't hand one
 * over, or whose site the scanner can't read.
 *
 * One question per page. Single-choice answers advance on tap, so most of the
 * flow is tapping rather than typing; only the business name and phone number
 * are typed, because neither can honestly be a picker.
 *
 * Answers post to our own route, which forwards to the app. The result is the
 * same demo a scan produces, so the sheet hands straight over to DemoSheet.
 */

const TOTAL = 7;

export default function OnboardSheet({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({
    type: null,
    businessName: "",
    services: [],
    days: null,
    hours: null,
    area: "",
    phone: "",
    afterHours: null,
  });
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const sheetRef = useRef(null);
  const type = BUSINESS_TYPES.find((t) => t.id === a.type) ?? null;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheetRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Start clean each time it opens, rather than resuming a half-finished
  // answer set from a previous visitor on a shared screen.
  useEffect(() => {
    if (open) {
      setStep(0);
      setResult(null);
      setError(null);
      setBuilding(false);
    }
  }, [open]);

  const set = (patch) => setA((prev) => ({ ...prev, ...patch }));
  const next = () => setStep((s) => Math.min(s + 1, TOTAL - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  /** Single-choice: record and move on, so a tap is the whole interaction. */
  const pick = (patch) => {
    set(patch);
    setTimeout(next, 160);
  };

  // Reads from prev, not from the render-time snapshot: two taps inside one
  // render both computed against the same stale array, so the second silently
  // discarded the first.
  const toggleService = (name) =>
    setA((prev) => ({
      ...prev,
      services: prev.services.includes(name)
        ? prev.services.filter((s) => s !== name)
        : [...prev.services, name],
    }));

  async function build() {
    setBuilding(true);
    setError(null);
    const hours = HOUR_PATTERNS.find((h) => h.id === a.hours);
    const days = DAY_PATTERNS.find((d) => d.id === a.days);
    const after = AFTER_HOURS.find((x) => x.id === a.afterHours);
    try {
      const res = await fetch("/api/frontdesk-demo/onboard", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          businessName: a.businessName.trim(),
          industry: type?.industry ?? "general",
          services: a.services,
          serviceAreas: a.area.trim() ? [a.area.trim()] : [],
          days: days && days.id !== "varies" ? days.label : "",
          open: hours?.open ?? "",
          close: hours?.close ?? "",
          phone: a.phone.trim(),
          afterHours: after?.value ?? "",
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Couldn't build it just now.");
      setResult(body);
    } catch (err) {
      setError(err.message);
    } finally {
      setBuilding(false);
    }
  }

  if (!open) return null;

  // Once it's built, hand over to the same sheet a scanned demo uses.
  if (result?.slug) {
    return <DemoSheet open website={a.businessName} result={result} onClose={onClose} />;
  }

  const canContinue =
    (step === 1 && a.businessName.trim().length > 1) ||
    (step === 2 && a.services.length > 0) ||
    step === 5 ||
    (step === 6 && !building);

  return (
    <div className="fds" role="presentation" onMouseDown={onClose}>
      <div
        className="fds__sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Tell us about your business"
        tabIndex={-1}
        ref={sheetRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="fds__grip" aria-hidden="true" />
        <button type="button" className="fds__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="fds__body">
          <div className="fdo__top">
            <span className="fds__eyebrow">
              Step {step + 1} of {TOTAL}
            </span>
            <div className="fdo__bar" aria-hidden="true">
              <span style={{ width: `${((step + 1) / TOTAL) * 100}%` }} />
            </div>
          </div>

          {step === 0 && (
            <Page title="What kind of business is it?" hint="This shapes the questions your receptionist asks callers.">
              <div className="fdo__grid">
                {BUSINESS_TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`fdo__opt${a.type === t.id ? " is-on" : ""}`}
                    onClick={() => pick({ type: t.id, services: [] })}
                  >
                    <strong>{t.label}</strong>
                    <span>{t.hint}</span>
                  </button>
                ))}
              </div>
            </Page>
          )}

          {step === 1 && (
            <Page title="What's the business called?" hint="Your receptionist answers the phone with this name.">
              <input
                className="fdo__input"
                autoFocus
                value={a.businessName}
                onChange={(e) => set({ businessName: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && canContinue && next()}
                placeholder="e.g. Summit Heating & Air"
                aria-label="Business name"
              />
            </Page>
          )}

          {step === 2 && (
            <Page title="What do you offer?" hint="Pick everything that applies — callers ask about these by name.">
              <div className="fdo__chips">
                {(type?.services ?? []).map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`fdo__chip${a.services.includes(s) ? " is-on" : ""}`}
                    aria-pressed={a.services.includes(s)}
                    onClick={() => toggleService(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Page>
          )}

          {step === 3 && (
            <Page title="Which days are you open?" hint="So it never promises a callback on a day you're closed.">
              <div className="fdo__grid fdo__grid--wide">
                {DAY_PATTERNS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={`fdo__opt${a.days === d.id ? " is-on" : ""}`}
                    onClick={() => pick({ days: d.id })}
                  >
                    <strong>{d.label}</strong>
                  </button>
                ))}
              </div>
            </Page>
          )}

          {step === 4 && (
            <Page title="And what hours?" hint="You can fine-tune this later.">
              <div className="fdo__grid fdo__grid--wide">
                {HOUR_PATTERNS.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    className={`fdo__opt${a.hours === h.id ? " is-on" : ""}`}
                    onClick={() => pick({ hours: h.id })}
                  >
                    <strong>{h.label}</strong>
                  </button>
                ))}
              </div>
            </Page>
          )}

          {step === 5 && (
            <Page title="Anything else worth knowing?" hint="Both optional — skip if you'd rather.">
              <label className="fdo__label" htmlFor="fdo-area">
                Where do you serve?
              </label>
              <input
                id="fdo-area"
                className="fdo__input"
                value={a.area}
                onChange={(e) => set({ area: e.target.value })}
                placeholder="e.g. Kampala, or Clark County NV"
              />
              <label className="fdo__label" htmlFor="fdo-phone">
                Best number for your team
              </label>
              <input
                id="fdo-phone"
                className="fdo__input"
                inputMode="tel"
                value={a.phone}
                onChange={(e) => set({ phone: e.target.value })}
                placeholder="e.g. +256 772 000 000"
              />
            </Page>
          )}

          {step === 6 && (
            <Page
              title="Do you take calls outside those hours?"
              hint="Last one — then we'll build it."
            >
              <div className="fdo__grid fdo__grid--wide">
                {AFTER_HOURS.map((x) => (
                  <button
                    key={x.id}
                    type="button"
                    className={`fdo__opt${a.afterHours === x.id ? " is-on" : ""}`}
                    onClick={() => set({ afterHours: x.id })}
                  >
                    <strong>{x.label}</strong>
                  </button>
                ))}
              </div>
              {error && <p className="fds__err fdo__err">{error}</p>}
            </Page>
          )}

          <div className="fdo__nav">
            {step > 0 ? (
              <button type="button" className="fdo__back" onClick={back} disabled={building}>
                ← Back
              </button>
            ) : (
              <span />
            )}

            {step === TOTAL - 1 ? (
              <button type="button" className="fdo__next" onClick={build} disabled={building}>
                {building ? "Building your receptionist…" : "Build my receptionist"}
              </button>
            ) : step === 0 || step === 3 || step === 4 ? (
              // Single-choice pages advance themselves; no button to ignore.
              <span className="fdo__auto">Pick one to continue</span>
            ) : (
              <button type="button" className="fdo__next" onClick={next} disabled={!canContinue}>
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Page({ title, hint, children }) {
  return (
    <div className="fdo__page">
      <h2 className="fds__title fdo__title">{title}</h2>
      {hint && <p className="fdo__hint">{hint}</p>}
      {children}
    </div>
  );
}
