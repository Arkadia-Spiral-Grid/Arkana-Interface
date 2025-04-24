import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArkanaInterface from './components/ArkanaInterface';
import DonationForm from './components/DonationForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ArkanaInterface />
      <DonationForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
