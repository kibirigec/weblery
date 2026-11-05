'use client';

import Navigation from '../Navigation';
import ClayShowreel from '../ClayShowreel';
import ClayWork from '../ClayWork';
import USHero from './USHero';
import USServices from './USServices';
import USProcess from './USProcess';
import USCTA from './USCTA';

export default function USHomepage() {
  return (
    <div id="us-home-page">
      <main className="bg-[#FBFBFB] min-h-screen">
        <Navigation id="us-home-nav" />
        <USHero />
        <ClayShowreel />
        <USServices />
        <div id="us-work">
          <ClayWork />
        </div>
        <USProcess />
        <USCTA />
      </main>
    </div>
  );
}
