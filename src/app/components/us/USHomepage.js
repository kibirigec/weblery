'use client';

import Navigation from '../Navigation';
import ClayWork from '../ClayWork';
import USHero from './USHero';
import USStorySection from './USStorySection';
import USWebsiteQuestion from './USWebsiteQuestion';
import USServices from './USServices';
import USCTA from './USCTA';

export default function USHomepage() {
  return (
    <div id="us-home-page">
      {/* Dark unified background */}
      <main className="min-h-screen" style={{ background: '#07020f' }}>
        <Navigation id="us-home-nav" />
        <USHero />
        <USStorySection />
        <USWebsiteQuestion />
        <USServices />
        <div id="us-work" className="py-16" style={{ background: '#07020f' }}>
          <ClayWork />
        </div>
        <USCTA />
      </main>
    </div>
  );
}
