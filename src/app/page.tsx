'use client';

import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TrainersSection from '../components/TrainersSection';
import FacilitiesSection from '../components/FacilitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <NavigationMenu />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TrainersSection />
    <FacilitiesSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מכון כושר אלפא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}