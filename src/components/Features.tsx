
import React from 'react';
import { 
  Globe, 
  TrendingUp, 
  Gift, 
  Play,
  Share,
  Heart,
  Award,
  Video
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "One-Tap Live Streaming",
      description: "Start streaming with a single tap. Reach your audience in real-time and interact with viewers like never before.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-pink to-sambow-purple rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal to-sambow-pink rounded-xl"></div>
          <Video className="h-12 w-12 relative text-white p-2.5" />
        </div>
      )
    },
    {
      id: 2,
      title: "Smart Recommendations",
      description: "Discover trending videos tailored to your interests. Our AI-powered algorithm learns what you love and delivers personalized content.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal to-sambow-purple rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-purple to-sambow-teal rounded-xl"></div>
          <TrendingUp className="h-12 w-12 relative text-white p-2.5" />
        </div>
      )
    },
    {
      id: 3,
      title: "Global Accessibility",
      description: "Connect with creators and fans from every corner of the world with multilingual support. Build your community without boundaries.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-purple to-sambow-pink rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-pink to-sambow-purple rounded-xl"></div>
          <Globe className="h-12 w-12 relative text-white p-2.5" />
        </div>
      )
    },
    {
      id: 4,
      title: "Daily Promotions",
      description: "Exclusive offers and giveaways to boost user engagement. Get access to premium features and special events before anyone else.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-pink to-sambow-teal rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal to-sambow-pink rounded-xl"></div>
          <Gift className="h-12 w-12 relative text-white p-2.5" />
        </div>
      )
    },
    {
      id: 5,
      title: "High-Quality Streaming",
      description: "Experience fast, secure and high-definition streaming no matter your device. We optimize the viewing experience for all users.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-purple to-sambow-teal rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal to-sambow-purple rounded-xl"></div>
          <Play className="h-12 w-12 relative text-white p-2.5" />
        </div>
      )
    },
    {
      id: 6,
      title: "Social Sharing & Interaction",
      description: "Easily share content across platforms and engage with live comments and reactions. Build your fanbase with every stream.",
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-teal to-sambow-pink rounded-xl rotate-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sambow-pink to-sambow-teal rounded-xl"></div>
          <Share className="h-12 w-12 relative text-white p-2.5" />
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
