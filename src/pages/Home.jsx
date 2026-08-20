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
    <div
      className="
        flex
        min-h-screen
        w-full
        min-w-0
        flex-col
        overflow-x-clip

        bg-white
        text-slate-900

        transition-colors
        duration-300

        dark:bg-slate-950
        dark:text-white
      "
    >
      <Navbar />

      <main className="w-full min-w-0">
        <Hero />

        <Features />

        <Stats />

        <HowItWorks />

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;