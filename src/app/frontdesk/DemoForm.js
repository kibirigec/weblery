"use client";

import { useState } from "react";

/**
 * The page's single call to action: a visitor drops in their website and we
 * build them a receptionist that already knows their business. Posting goes to
 * our own route so the browser never needs to know where the app lives.
 */
export default function DemoForm({ id, cta = "Hear it answer" }) {
  const [url, setUrl] = useState("");
  const [state, setState] = useState("idle"); // idle | working | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    if (!url.trim() || state === "working") return;

    setState("working");
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/frontdesk-demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      setResult(body);
      setState("done");
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  }

  return (
    <div className="fd-form">
      <form className="fd-form__row" onSubmit={onSubmit}>
        <input
          id={id}
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="yourbusiness.com"
          aria-label="Your website address"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={state === "working"}
        />
        <button type="submit" disabled={state === "working" || !url.trim()}>
          {state === "working" ? "Building…" : cta}
        </button>
      </form>

      {state === "idle" && (
        <p className="fd-form__hint">
          Takes about a minute. No signup, no card, nothing to install.
        </p>
      )}

      {state === "working" && (
        <p className="fd-form__hint">
          Reading your site — learning your services, hours and service area…
        </p>
      )}

      {state === "done" && result?.demoUrl && (
        <p className="fd-form__msg fd-form__msg--ok">
          Your receptionist is ready.{" "}
          <a href={result.demoUrl} target="_blank" rel="noreferrer">
            Call it now →
          </a>
        </p>
      )}

      {state === "done" && !result?.demoUrl && (
        <p className="fd-form__msg fd-form__msg--ok">
          Got it — we&apos;re building your receptionist and will send the link shortly.
        </p>
      )}

      {state === "error" && <p className="fd-form__msg fd-form__msg--error">{error}</p>}
    </div>
  );
}
