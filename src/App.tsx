import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Offer from './components/sections/Offer';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import UseCases from './components/sections/UseCases';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <Features />
        <HowItWorks />
        <Pricing />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
