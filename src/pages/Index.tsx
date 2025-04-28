
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MonetizationSection from '@/components/MonetizationSection';
import DownloadApp from '@/components/DownloadApp';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-sambow-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <MonetizationSection />
      <DownloadApp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
