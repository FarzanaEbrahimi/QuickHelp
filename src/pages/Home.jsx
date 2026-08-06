import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <Hero />

      <Features />

      <Stats />

      <HowItWorks />

      <About />

      <Contact />

      <Footer />
    </div>
  );
}

export default Home;