import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CarFleet from './components/CarFleet';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <CarFleet />
      <Pricing />
      <Reviews />
      <CTASection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
