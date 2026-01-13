'use client';

import Navigation from './components/Navigation';
import ClayHero from './components/ClayHero';
import ClayShowreel from './components/ClayShowreel';
import ClayServices from './components/ClayServices';
import ClayWork from './components/ClayWork';
import ClayFAQ from './components/ClayFAQ'; 

export default function Home() {
  return (
    <div id="home-page">
      <main className="bg-[#FBFBFB] min-h-screen">
        <Navigation id="home-nav" />
        
        {/* Hero Section */}
        <ClayHero />

        {/* Showreel Section */}
        <ClayShowreel />

        {/* Services Section - Anchor ID for navigation */}
        <div id="services-section-wrapper">
          <ClayServices />
        </div>

        {/* Work Section */}
        <ClayWork />

        {/* FAQ Section */}
        <ClayFAQ />

      </main>
    </div>
  );
}