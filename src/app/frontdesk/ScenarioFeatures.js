"use client";

import { useState } from "react";
import LiveCall from "./LiveCall";
import { SCENARIOS } from "./scenarios";

/**
 * The feature rows, plus the business-type selector that drives them.
 *
 * The scan, the call and the ticket are one chain — the site Front Desk read,
 * the call it handled, the ticket the team got — so a single selector changes
 * all three. Switching only the call would leave three different businesses
 * on screen at once.
 *
 * State lives here rather than in a context provider: these panels sit in
 * different rows, and one owner rendering all of them is less machinery than
 * threading context across the server/client boundary.
 */

const NICHES = [
  { title: "Home services", tag: "HVAC · plumbing · electrical · roofing", quote: "No cooling, 88° inside, two kids at home. Wants a visit tomorrow 8–10am." },
  { title: "Real estate", tag: "Agents · brokerages · property managers", quote: "Asking about the 4-bed on Maple. Pre-approved, wants a viewing this weekend." },
  { title: "Law firms", tag: "Personal injury · family · immigration", quote: "Car accident last Tuesday, has a police report, asking about a consultation." },
  { title: "Clinics & practices", tag: "Dental · veterinary · wellness", quote: "Wants to book a cleaning, is a new patient, asking if you take her insurance." },
];

function ScanPanel({ scenario }) {
  const s = scenario.site;
  return (
    <div className="fd-panel">
      <div className="fd-card">
        <div className="fd-fakebar">
          <span className="fd-fakebar__dot" />
          <span className="fd-fakebar__url">{s.domain}</span>
        </div>
        <p className="fd-scan__label">Extracted in 48 seconds</p>
        <dl className="fd-scan__grid">
          <div><dt>Business</dt><dd>{s.business}</dd></div>
          <div><dt>Service area</dt><dd>{s.area}</dd></div>
          <div><dt>Hours</dt><dd>{s.hours}</dd></div>
          <div><dt>Books through</dt><dd>{s.booking}</dd></div>
        </dl>
        <div className="fd-chips">
          {s.services.map((c) => (
            <span key={c} className="fd-chip">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TicketPanel({ scenario }) {
  const t = scenario.ticket;
  return (
    <div className="fd-panel">
      <div className="fd-card" role="img" aria-label="Example intake message sent to your team">
        <div className="fd-ticket__top">
          <span className="fd-ticket__label">{t.when}</span>
          <span className={`fd-ticket__badge fd-ticket__badge--${t.tone}`}>{t.badge}</span>
        </div>
        <p className="fd-ticket__summary">{t.summary}</p>
        <dl className="fd-ticket__grid">
          {t.fields.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function CalendarPanel({ scenario }) {
  const c = scenario.calendar;
  return (
    <div className="fd-panel">
      <div className="fd-card">
        <div className="fd-cal__head">
          <span className="fd-cal__src">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
              <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Google Calendar
          </span>
          <span className="fd-cal__day">{c.day}</span>
        </div>

        <div className="fd-cal__rows">
          {c.slots.map((s) => (
            <div key={s.time} className="fd-cal__row">
              <span className="fd-cal__time">{s.time}</span>
              <span className={`fd-cal__ev${s.booked ? " fd-cal__ev--new" : ""}`}>
                {s.label}
                {s.booked && <em className="fd-cal__tag">Added by Front Desk</em>}
              </span>
            </div>
          ))}
        </div>

        <p className="fd-cal__note">{c.note}</p>
      </div>
    </div>
  );
}

function NichePanel() {
  return (
    <div className="fd-panel">
      <div className="fd-card fd-card--wide">
        {NICHES.map((n) => (
          <article key={n.title} className="fd-niche">
            <h4>{n.title}</h4>
            <p className="fd-niche__quote">{n.quote}</p>
            <p className="fd-niche__tag">{n.tag}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ForwardPanel() {
  return (
    <div className="fd-panel">
      <div className="fd-card fd-forward">
        <div className="fd-forward__row">
          <span className="fd-forward__num">(702) 555-0148</span>
          <span className="fd-forward__note">Your existing number — unchanged</span>
        </div>
        <div className="fd-forward__arrow" aria-hidden="true">
          <span>rings 4 times</span>
        </div>
        <div className="fd-forward__row fd-forward__row--on">
          <span className="fd-forward__num">Front Desk picks up</span>
          <span className="fd-forward__note">Only when you don&apos;t</span>
        </div>
        <p className="fd-forward__off">
          Switch call forwarding off and everything is exactly how it was.
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "Built from your own website",
    body: "No forms, no setup call, no scripts to write. Front Desk reads your site and learns your services, hours, service area, and the questions your customers actually ask.",
    panel: (s) => <ScanPanel scenario={s} />,
  },
  {
    title: "Answers as your business",
    body: "Not a menu and not a voicemail. It picks up in your business's name, asks the questions that qualify the job, and knows when something is an emergency.",
    panel: (s) => <LiveCall scenario={s} />,
  },
  {
    title: "Your team gets the job, not a recording",
    body: "No listening back through voicemails. Every call arrives as a short, structured message — who called, how to reach them, what they need, and how urgent it is.",
    panel: (s) => <TicketPanel scenario={s} />,
  },
  {
    title: "Books into the calendar you already use",
    body: "Front Desk reads your real availability before it offers a time, so it never double-books you, and writes the appointment straight into your calendar while the caller is still on the line.",
    panel: (s) => <CalendarPanel scenario={s} />,
  },
  {
    title: "It already speaks your trade",
    body: "Because it learns from your own site, it asks what matters in your line of work instead of reading a generic script — and it captures the details that decide whether you win the job.",
    panel: () => <NichePanel />,
  },
  {
    title: "Keep your number",
    body: "Nothing to install and no new phone system. Turn on conditional call forwarding and anything you don't pick up rings through to Front Desk instead of going to voicemail.",
    panel: () => <ForwardPanel />,
  },
];

export default function ScenarioFeatures() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((s) => s.id === activeId) ?? SCENARIOS[0];

  return (
    <>
      {/* Not role="tablist": these buttons drive three separate panels spread
          down the page, not one tabpanel, so tab semantics would misdescribe
          it. A labelled group of pressed buttons is what this actually is. */}
      <div className="fd-switch" role="group" aria-label="See Front Desk on a different business">
        <span className="fd-switch__label">See it for</span>
        <div className="fd-switch__track">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`fd-switch__opt${s.id === activeId ? " is-on" : ""}`}
              aria-pressed={s.id === activeId}
              onClick={() => setActiveId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="fd-features">
        {FEATURES.map((f) => (
          <div key={f.title} className="fd-feature">
            <div className="fd-feature__copy">
              <h3 data-reveal>{f.title}</h3>
              <p data-reveal data-reveal-delay>
                {f.body}
              </p>
            </div>
            <div className="fd-feature__media">{f.panel(scenario)}</div>
          </div>
        ))}
      </div>
    </>
  );
}
