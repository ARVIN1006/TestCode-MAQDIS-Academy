import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import AuthorSection from './components/AuthorSection';
import ContactSection from './components/ContactSection';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <OverviewSection /> 
      <PricingSection />
      <TestimonialsSection />
      <AuthorSection />
      <ContactSection />
      <FooterComponent />
    </div>
  );
};

export default App;
