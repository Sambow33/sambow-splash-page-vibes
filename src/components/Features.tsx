import React from 'react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Go Live Instantly",
      description: "Start streaming with a single tap. Reach your audience in real-time and interact with viewers like never before.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-pink to-sambow-purple rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal to-sambow-pink rounded-xl"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 relative text-white p-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: "Browse Trending Videos",
      description: "Discover the most popular short videos from creators around the world. Find what's trending and join the conversation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sambow-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Global Communication",
      description: "Connect with creators and fans from every corner of the world. Build your community without boundaries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sambow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Special Promotions",
      description: "Exclusive offers for early adopters. Get access to premium features and special events before anyone else.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sambow-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="section-container relative">
      <div className="absolute inset-0 bg-gradient-to-b from-sambow-darker via-sambow-dark to-sambow-darker"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-sambow-teal font-semibold mb-4">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That <span className="gradient-text">Set Us Apart</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">Discover what makes Sambow the next generation social media platform everyone's talking about.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-sambow-pink/10"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
