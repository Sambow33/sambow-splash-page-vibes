
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-sambow-darker">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sambow-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sambow-pink/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={cn(
              "opacity-0",
              "animate-fade-in [animation-delay:0.3s]"
            )}
          >
            <p className="text-sambow-teal font-semibold mb-4 tracking-wide">INTRODUCING</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Sambow</span> - The Next 
              <br />Generation of Social Media
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Stream live, discover trending videos, and connect with a global community.
              All in one place, anytime, anywhere.
            </p>
          </div>
          
          <div 
            className={cn(
              "opacity-0 flex flex-col sm:flex-row justify-center gap-4",
              "animate-fade-in [animation-delay:0.6s]"
            )}
          >
            <Button 
              className="bg-gradient-to-r from-sambow-teal to-sambow-pink hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium"
            >
              Download App
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-medium"
            >
              Learn More
            </Button>
          </div>
          
          <div 
            className={cn(
              "mt-16 opacity-0",
              "animate-fade-in [animation-delay:0.9s]"
            )}
          >
            <p className="text-white/50 uppercase font-medium text-sm tracking-wider mb-4">Trusted by millions worldwide</p>
            <div className="flex justify-center items-center gap-8">
              <div className="w-20 h-8 bg-white/10 rounded"></div>
              <div className="w-20 h-8 bg-white/10 rounded"></div>
              <div className="w-20 h-8 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
