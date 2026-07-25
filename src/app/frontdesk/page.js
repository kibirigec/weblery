import Link from "next/link";
import DemoForm from "./DemoForm";

const STEPS = [
  {
    title: "Give us your website",
    body: "No forms, no setup call. We read your site and learn your services, hours, service area and the questions customers actually ask.",
  },
  {
    title: "Forward your calls",
    body: "Keep your number. Turn on call forwarding so anything you don't pick up rings through instead of going to voicemail.",
  },
  {
    title: "Get the job, not a voicemail",
    body: "It answers as your business, asks the right questions, then texts your team the caller's name, number, address and what they need.",
  },
];

const NICHES = [
  {
    title: "Home services",
    body: "You're under a house or on a roof — you can't answer. After-hours emergencies go to whoever picks up first.",
    quote: "No cooling, 88° inside, two kids at home. Wants a visit tomorrow 8–10am.",
    tag: "HVAC, plumbing, electrical, roofing",
  },
  {
    title: "Real estate",
    body: "A buyer calls about a listing while you're mid-showing. By the time you call back, they've toured with someone else.",
    quote: "Asking about the 4-bed on Maple. Pre-approved, wants a viewing this weekend.",
    tag: "Agents, brokerages, property managers",
  },
  {
    title: "Law firms",
    body: "Intake calls arrive when you're in court or with a client. Every unanswered one is a case that goes to the next firm on the list.",
    quote: "Car accident last Tuesday, has a police report, asking about a consultation.",
    tag: "Personal injury, family, immigration",
  },
  {
    title: "Clinics & practices",
    body: "Your front desk is with a patient. The phone rings anyway — appointments, reschedules, questions about hours.",
    quote: "Wants to book a cleaning, is a new patient, asking if you take her insurance.",
    tag: "Dental, veterinary, wellness",
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
        <div className="fd-hero__scrim" />

        <span className="fd-hero__brand">
          <img src="/FullLogo.svg" alt="Weblery" />
          Front Desk
        </span>

        <h1>The calls you miss are the jobs you lose.</h1>
        <p className="fd-hero__sub">
          Front Desk is an AI receptionist that answers as your business, captures the job, and
          texts your team before the caller reaches anyone else.
        </p>

        <DemoForm id="fd-hero-url" />
      </header>

      {/* Problem */}
      <section className="fd-section fd-section--statement">
        <div className="fd-shell">
          <div className="fd-section__head">
            <p className="fd-eyebrow">The quiet leak</p>
            <h2>Your phone rings while you&apos;re working.</h2>
            <p className="fd-section__lede">
              Evenings, weekends, and the middle of a job — that&apos;s when customers call. Most
              won&apos;t leave a voicemail. They just call the next business on the list, and you
              never find out it happened.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="fd-section fd-section--soft">
        <div className="fd-shell">
          <div className="fd-section__head">
            <p className="fd-eyebrow">Plug and play</p>
            <h2>Answering by tonight.</h2>
            <p className="fd-section__lede">
              Nothing to install, no new phone system, no number to advertise. If it isn&apos;t
              working out, switch call forwarding off and everything is back how it was.
            </p>
          </div>

          <div className="fd-steps">
            {STEPS.map((s, i) => (
              <article key={s.title} className="fd-step">
                <span className="fd-step__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="fd-section">
        <div className="fd-shell">
          <div className="fd-section__head">
            <p className="fd-eyebrow">Built around your business</p>
            <h2>It already speaks your trade.</h2>
            <p className="fd-section__lede">
              Front Desk learns what your business does from your own website, so it asks the
              questions that matter in your line of work — not a generic script.
            </p>
          </div>

          <div className="fd-niches">
            {NICHES.map((n) => (
              <article key={n.title} className="fd-niche">
                <h3>{n.title}</h3>
                <p>{n.body}</p>
                <blockquote className="fd-niche__quote">
                  {n.quote}
                  <span>{n.tag}</span>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The artifact */}
      <section className="fd-section fd-section--soft">
        <div className="fd-shell fd-ticket-wrap">
          <div className="fd-ticket-copy">
            <p className="fd-eyebrow">After every call</p>
            <h2>Your team gets the job, not a recording.</h2>
            <p className="fd-section__lede">
              No listening back through voicemails. Every call arrives as a short, structured
              message — who called, how to reach them, what they need, and how urgent it is.
            </p>
          </div>

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
              <div>
                <dt>Caller</dt>
                <dd>Maria Lopez</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>(702) 866-2222</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>4821 Maple Avenue</dd>
              </div>
              <div>
                <dt>Needs</dt>
                <dd>AC not cooling — repair</dd>
              </div>
              <div>
                <dt>Preferred time</dt>
                <dd>Tomorrow, 8–10 AM</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="fd-close">
        <div className="fd-shell">
          <h2>Hear it answer your phone.</h2>
          <p className="fd-section__lede">
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
