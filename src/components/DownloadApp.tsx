
import React from 'react';
import { Button } from '@/components/ui/button';

const DownloadApp = () => {
  return (
    <section id="about" className="section-container">
      <div className="bg-gradient-to-r from-sambow-purple/20 to-sambow-pink/20 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the <span className="gradient-text">Revolution?</span></h2>
            <p className="text-white/70 mb-6">
              The Sambow app is coming soon to iOS and Android. Be the first to experience the future of social media and live streaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sambow-teal hover:bg-sambow-teal/80 text-white px-8 py-6 rounded-full">
                iOS App Coming Soon
              </Button>
              <Button className="bg-sambow-pink hover:bg-sambow-pink/80 text-white px-8 py-6 rounded-full">
                Android App Coming Soon
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-96 bg-sambow-gray rounded-3xl relative overflow-hidden border-4 border-sambow-darker">
              <div className="absolute inset-0 bg-gradient-to-b from-sambow-pink/20 to-sambow-teal/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-bold text-2xl gradient-text">S</span>
                  </div>
                  <p className="text-white font-bold">Sambow App</p>
                  <p className="text-white/50 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-sambow-purple/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
