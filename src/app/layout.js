import { headers } from "next/headers";
import "./globals.css";
import Footer from "./components/Footer";

import { TransitionProvider } from "./context/TransitionContext";
import { MarketProvider } from "./context/MarketContext";
import { DEFAULT_MARKET, MARKET_HEADER } from "@/lib/markets";

export const metadata = {
  title: "Weblery - Digital Media Agency | App Development, Web Development & AI Integration",
  description: "Professional digital media agency specializing in app development, website development, marketing strategies, and custom AI integration. Transform your business with cutting-edge technology solutions.",
  keywords: "digital media agency, app development, web development, AI integration, marketing strategies, custom software",
  icons: {
    icon: '/FAVICON.svg',
  },
};

export default async function RootLayout({ children }) {
  // Set by the proxy, which has already stripped the /us or /ae prefix from
  // the path. Reading it here is what makes the market identical on the server
  // render and after hydration.
  const market = (await headers()).get(MARKET_HEADER) ?? DEFAULT_MARKET;

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <MarketProvider market={market}>
          <TransitionProvider>
            {children}
            <Footer />
          </TransitionProvider>
        </MarketProvider>
      </body>
    </html>
  );
}
