
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

import { TransitionProvider } from "./context/TransitionContext";

const sfPro = localFont({
  src: [
    {
      path: "./fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf",
});

const aktivGrotesk = localFont({
  src: [
    {
      path: "./fonts/AktivGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
        path: "./fonts/AktivGrotesk-XBold.otf",
        weight: "800",
        style: "normal",
      },
  ],
  variable: "--font-aktiv",
});

export const metadata = {
  title: "Weblery - Digital Media Agency | App Development, Web Development & AI Integration",
  description: "Professional digital media agency specializing in app development, website development, marketing strategies, and custom AI integration. Transform your business with cutting-edge technology solutions.",
  keywords: "digital media agency, app development, web development, AI integration, marketing strategies, custom software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} ${aktivGrotesk.variable} antialiased font-sans`}
      >
        <TransitionProvider>
            {children}
            <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
