
import React from 'react';
import { Award, Heart, Gift } from 'lucide-react';

const MonetizationSection = () => {
  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sambow-dark via-sambow-darker to-sambow-dark"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sambow-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-sambow-pink/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-sambow-pink font-semibold mb-4">MONETIZATION</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Turn Your Passion Into <span className="gradient-text">Real Income</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Sambow isn't just a platform for sharing content, it's your gateway to building a sustainable income
            through creativity and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-sambow-pink/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-sambow-pink to-sambow-purple flex items-center justify-center mb-6">
              <Gift className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Virtual Gifts</h3>
            <p className="text-white/70 leading-relaxed">
              Receive virtual gifts during your live streams that can be converted into real-world currency. The more engaging your content, the more gifts you'll receive.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-sambow-teal/20 transition-all duration-300 hover:scale-[1.03] md:translate-y-6">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-sambow-teal to-sambow-purple flex items-center justify-center mb-6">
              <Award className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Brand Partnerships</h3>
            <p className="text-white/70 leading-relaxed">
              Connect with brands looking for authentic creators. Sambow facilitates promotional opportunities and sponsored content deals for our top creators.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-sambow-purple/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-sambow-purple to-sambow-teal flex items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Multiple Revenue Streams</h3>
            <p className="text-white/70 leading-relaxed">
              Build your audience and unlock various income sources including subscription content, merchandise sales, and exclusive fan-only streams.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-sambow-pink/20 to-sambow-teal/20 px-6 py-4 rounded-xl backdrop-blur-sm border border-white/10">
            <p className="text-white text-lg">
              Join thousands of creators already earning through Sambow worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizationSection;
