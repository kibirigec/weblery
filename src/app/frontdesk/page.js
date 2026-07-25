import Link from "next/link";
import DemoForm from "./DemoForm";

const NICHES = [
  { title: "Home services", tag: "HVAC · plumbing · electrical · roofing", quote: "No cooling, 88° inside, two kids at home. Wants a visit tomorrow 8–10am." },
  { title: "Real estate", tag: "Agents · brokerages · property managers", quote: "Asking about the 4-bed on Maple. Pre-approved, wants a viewing this weekend." },
  { title: "Law firms", tag: "Personal injury · family · immigration", quote: "Car accident last Tuesday, has a police report, asking about a consultation." },
  { title: "Clinics & practices", tag: "Dental · veterinary · wellness", quote: "Wants to book a cleaning, is a new patient, asking if you take her insurance." },
];

/* Each feature row is one visual panel; they carry the page the way the
   reference's product shots do, so they're built rather than screenshotted. */

function ScanPanel() {
  return (
    <div className="fd-panel">
      <div className="fd-card">
        <div className="fd-fakebar">
          <span className="fd-fakebar__dot" />
          <span className="fd-fakebar__url">summitheatingandair.com</span>
        </div>
        <p className="fd-scan__label">Extracted in 48 seconds</p>
        <dl className="fd-scan__grid">
          <div><dt>Business</dt><dd>Summit Heating &amp; Air</dd></div>
          <div><dt>Service area</dt><dd>Clark County, NV</dd></div>
          <div><dt>Hours</dt><dd>Mon–Sat 7–6 · 24/7 emergency</dd></div>
          <div><dt>Books through</dt><dd>Phone + online form</dd></div>
        </dl>
        <div className="fd-chips">
          {["AC repair", "Furnace install", "Duct cleaning", "Maintenance plans", "Emergency callout"].map((c) => (
            <span key={c} className="fd-chip">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Deliberately not chat bubbles: this is a spoken call, so the panel carries
   caller ID, a running timer, audio, and a timestamped transcript. */
function CallPanel() {
  const turns = [
    { at: "0:02", who: "Front Desk", agent: true, text: "Summit Heating and Air, this is Riley — how can I help?" },
    { at: "0:06", who: "Caller", agent: false, text: "Hey, my AC just quit and it's really hot in here." },
    { at: "0:11", who: "Front Desk", agent: true, text: "Sorry to hear that — is anyone home who's sensitive to the heat?" },
    { at: "0:17", who: "Caller", agent: false, text: "Yeah, two little ones." },
    { at: "0:21", who: "Front Desk", agent: true, text: "Understood, I'll flag this as urgent. Best number to reach you?" },
  ];
  // Fixed, not random — a server component must render the same bars twice.
  const bars = [
    4, 7, 11, 6, 14, 9, 18, 12, 22, 15, 9, 20, 25, 17, 10, 6, 13, 21, 16, 8, 12, 24, 18,
    11, 7, 15, 19, 9, 23, 14, 6, 10, 17, 26, 13, 8, 20, 12, 5, 16, 22, 10, 7, 14, 9, 4,
  ];

  return (
    <div className="fd-panel">
      <div className="fd-card fd-call">
        <div className="fd-call__head">
          <span className="fd-call__avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
            </svg>
          </span>
          <span className="fd-call__id">
            <strong>(702) 555-0148</strong>
            <span>Incoming · after hours</span>
          </span>
          <span className="fd-call__timer">
            <i aria-hidden="true" />
            00:24
          </span>
        </div>

        <div className="fd-wave" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}px` }} />
          ))}
        </div>

        <p className="fd-call__label">Live transcript</p>
        <ol className="fd-call__log">
          {turns.map((t) => (
            <li key={t.at}>
              <span className="fd-call__at">{t.at}</span>
              <span className={`fd-call__spk${t.agent ? " fd-call__spk--agent" : ""}`}>{t.who}</span>
              <span className="fd-call__said">{t.text}</span>
            </li>
          ))}
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

function TicketPanel() {
  return (
    <div className="fd-panel">
      <div className="fd-card" role="img" aria-label="Example intake message sent to your team">
        <div className="fd-ticket__top">
          <span className="fd-ticket__label">New call · 9:42 PM</span>
          <span className="fd-ticket__badge">URGENT</span>
        </div>
        <p className="fd-ticket__summary">
          Maria called after hours — her AC stopped cooling this afternoon and the house is at
          88°F with two young kids at home. She&apos;d like the earliest available visit.
        </p>
        <dl className="fd-ticket__grid">
          <div><dt>Caller</dt><dd>Maria Lopez</dd></div>
          <div><dt>Phone</dt><dd>(702) 866-2222</dd></div>
          <div><dt>Address</dt><dd>4821 Maple Avenue</dd></div>
          <div><dt>Needs</dt><dd>AC not cooling — repair</dd></div>
          <div><dt>Preferred time</dt><dd>Tomorrow, 8–10 AM</dd></div>
        </dl>
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
    panel: <ScanPanel />,
  },
  {
    title: "Answers as your business",
    body: "Not a menu and not a voicemail. It picks up in your business's name, asks the questions that qualify the job, and knows when something is an emergency.",
    panel: <CallPanel />,
  },
  {
    title: "Your team gets the job, not a recording",
    body: "No listening back through voicemails. Every call arrives as a short, structured message — who called, how to reach them, what they need, and how urgent it is.",
    panel: <TicketPanel />,
  },
  {
    title: "It already speaks your trade",
    body: "Because it learns from your own site, it asks what matters in your line of work instead of reading a generic script — and it captures the details that decide whether you win the job.",
    panel: <NichePanel />,
  },
  {
    title: "Keep your number",
    body: "Nothing to install and no new phone system. Turn on conditional call forwarding and anything you don't pick up rings through to Front Desk instead of going to voicemail.",
    panel: <ForwardPanel />,
  },
];

export default function FrontDeskPage() {
  return (
    <>
      {/* Hero */}
      <header className="fd-hero">
        <video
          className="fd-hero__video"
          src="/FrontDesk_Assets/background-video-jan-28_202607252000.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <span className="fd-hero__brand">
          <img src="/LetterLogo.svg" alt="Weblery" />
        </span>

        <h1>Front Desk</h1>
        <p className="fd-hero__sub">
          An AI receptionist that answers as your business—and never misses a call.
        </p>

        <DemoForm id="fd-hero-url" />
      </header>

      <section className="fd-body">
        <div className="fd-shell">
          <h2 className="fd-body__head">
            The calls you miss are the jobs you lose.
          </h2>

          <div className="fd-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="fd-feature">
                <div className="fd-feature__copy">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
                <div className="fd-feature__media">{f.panel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="fd-close">
        <div className="fd-shell">
          <h2>Hear it answer your phone.</h2>
          <p className="fd-close__lede">
            Put in your website and we&apos;ll build a receptionist that already knows your
            business. Then call it yourself.
          </p>
          <DemoForm id="fd-close-url" cta="Build mine" />

          <p className="fd-close__back">
            Front Desk is built by <Link href="/">Weblery</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
