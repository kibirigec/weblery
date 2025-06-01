import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-dark">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
