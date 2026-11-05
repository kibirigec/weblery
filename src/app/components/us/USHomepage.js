'use client';

import Navigation from '../Navigation';
import ClayWork from '../ClayWork';
import USHero from './USHero';
import USServices from './USServices';
import USProcess from './USProcess';
import USComparison from './USComparison';
import USCTA from './USCTA';

export default function USHomepage() {
  return (
    <div id="us-home-page" className="us-market">
      {/* Load Plus Jakarta Sans for the US market */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .us-market, .us-market * {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      <main className="min-h-screen bg-[#f7f4ee]">
        <Navigation id="us-home-nav" />
        <USHero />
        <USServices />
        <USProcess />
        <USComparison />
        <section id="us-work" className="bg-[#f7f4ee] py-28 border-t border-black/8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/40 mb-4">Our Work</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-[#0d0d0d] leading-[1.1] tracking-[-0.03em]">
              Projects we're proud of.
            </h2>
          </div>
          <ClayWork />
        </section>
        <USCTA />
      </main>
    </div>
  );
}
