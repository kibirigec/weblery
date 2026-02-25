

import "./globals.css";
import Footer from "./components/Footer";

import { TransitionProvider } from "./context/TransitionContext";



export const metadata = {
  title: "Weblery - Digital Media Agency | App Development, Web Development & AI Integration",
  description: "Professional digital media agency specializing in app development, website development, marketing strategies, and custom AI integration. Transform your business with cutting-edge technology solutions.",
  keywords: "digital media agency, app development, web development, AI integration, marketing strategies, custom software",
  icons: {
    icon: '/FAVICON.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <TransitionProvider>
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
