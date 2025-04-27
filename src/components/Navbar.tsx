
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
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500',
        scrolled 
          ? 'bg-sambow-darker/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal via-sambow-purple to-sambow-pink rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-sambow-pink to-sambow-teal rounded-xl group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
              <span className="font-bold text-white text-xl">S</span>
            </div>
          </div>
          <span className="ml-3 text-xl font-bold text-white">Sambow</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {['Features', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sambow-teal to-sambow-pink transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        <button className="relative group overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal via-sambow-purple to-sambow-pink animate-pulse"></div>
          <span className="relative block bg-sambow-darker hover:bg-transparent transition-colors duration-300 text-white px-6 py-2 rounded-full m-0.5">
            Coming Soon
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
