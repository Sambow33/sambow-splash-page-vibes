
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-sambow-darker overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sambow-purple/10 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sambow-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-sambow-teal/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={cn(
              "opacity-0",
              "animate-fade-in [animation-delay:0.3s]"
            )}
          >
            <p className="inline-block px-4 py-1 bg-gradient-to-r from-sambow-teal/20 to-sambow-pink/20 rounded-full text-sambow-teal font-semibold mb-6 tracking-wide backdrop-blur-sm border border-sambow-teal/20">
              INTRODUCING
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Sambow</span> - The Next
              <br />Generation of Social Media
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stream live, discover trending videos, and connect with a global community.
              Turn your passion into income with our creator-focused platform.
            </p>
          </div>
          
          <div 
            className={cn(
              "opacity-0 flex flex-col sm:flex-row justify-center gap-4",
              "animate-fade-in [animation-delay:0.6s]"
            )}
          >
            <Button 
              className="bg-gradient-to-r from-sambow-teal via-sambow-purple to-sambow-pink hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sambow-pink/25"
            >
              Download App
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
          
          <div 
            className={cn(
              "mt-20 opacity-0",
              "animate-fade-in [animation-delay:0.9s]"
            )}
          >
            <p className="text-white/50 uppercase font-medium text-sm tracking-wider mb-6">Trusted by millions worldwide</p>
            <div className="flex justify-center items-center gap-8">
              <div className="w-24 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"></div>
              <div className="w-24 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"></div>
              <div className="w-24 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
