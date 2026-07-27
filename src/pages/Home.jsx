import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
function Home() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <Features />
      <Stats />
      <HowItWorks />
      <Footer />

    </div>
  );
}

export default Home;