
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-sambow-darker/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-sambow-teal to-sambow-pink flex items-center justify-center">
            <span className="font-bold text-white">S</span>
          </div>
          <span className="ml-2 text-xl font-bold text-white">Sambow</span>
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </div>

        <button className="bg-gradient-to-r from-sambow-teal to-sambow-pink text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
          Coming Soon
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
