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
    <div className="fd-panel fd-panel--scan">
      <div className="fd-fakebar">
        <span className="fd-fakebar__dot" />
        <span className="fd-fakebar__url">summitheatingandair.com</span>
      </div>
      <div className="fd-scan">
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

function CallPanel() {
  const turns = [
    { who: "them", text: "Summit Heating and Air, this is Riley — how can I help?" },
    { who: "caller", text: "Hey, my AC just quit and it's really hot in here." },
    { who: "them", text: "Sorry to hear that. Is anyone home who's sensitive to the heat — kids, older folks?" },
    { who: "caller", text: "Yeah, two little ones." },
    { who: "them", text: "Understood, I'll flag this as urgent. What's the best number to reach you?" },
  ];
  return (
    <div className="fd-panel fd-panel--call">
      <div className="fd-call__bar">
        <span className="fd-call__live" />
        Incoming call · 9:41 PM
      </div>
      <div className="fd-call__thread">
        {turns.map((t, i) => (
          <p key={i} className={`fd-turn fd-turn--${t.who}`}>{t.text}</p>
        ))}
      </div>
    </div>
  );
}

function TicketPanel() {
  return (
    <div className="fd-panel fd-panel--ticket">
      <div className="fd-ticket" role="img" aria-label="Example intake message sent to your team">
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
    <div className="fd-panel fd-panel--niches">
      {NICHES.map((n) => (
        <article key={n.title} className="fd-niche">
          <h4>{n.title}</h4>
          <p className="fd-niche__quote">{n.quote}</p>
          <p className="fd-niche__tag">{n.tag}</p>
        </article>
      ))}
    </div>
  );
}

function ForwardPanel() {
  return (
    <div className="fd-panel fd-panel--forward">
      <div className="fd-forward">
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

      {/* Everything below the hero runs dark, as in the reference. */}
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
