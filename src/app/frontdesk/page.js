import Link from "@/app/components/MarketLink";
import DemoForm from "./DemoForm";
import HeroVideo from "./HeroVideo";
import ScrollReveal from "./ScrollReveal";
import ScenarioFeatures from "./ScenarioFeatures";

export default function FrontDeskPage() {
  return (
    <>
      {/* Hero */}
      <header className="fd-hero">
        <HeroVideo />

        <span className="fd-hero__brand">
          <img src="/LetterLogo.svg" alt="Weblery" />
        </span>

        <h1>Front Desk</h1>
        <p className="fd-hero__sub">
          An AI receptionist that answers as your business—and never misses a call.
        </p>

        <DemoForm id="fd-hero-url" />
      </header>

      <ScrollReveal />

      <section className="fd-body">
        <div className="fd-shell">
          <h2 className="fd-body__head" data-reveal>
            The calls you miss are the jobs you lose.
          </h2>

          <ScenarioFeatures />
        </div>
      </section>

      {/* Close */}
      <section className="fd-close">
        <div className="fd-shell">
          <h2 data-reveal>Hear it answer your phone.</h2>
          <p className="fd-close__lede" data-reveal data-reveal-delay>
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
