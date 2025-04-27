
import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="bg-sambow-gray/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-white/70">Have questions about Sambow? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-sambow-pink/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-sambow-pink" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <a href="mailto:Hazzakcom@gmail.com" className="text-white hover:text-sambow-pink">Hazzakcom@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-sambow-teal/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-sambow-teal" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Phone/WhatsApp</p>
                  <a href="tel:0096170555995" className="text-white hover:text-sambow-teal">0096170555995</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/0096170555995" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
              >
                Contact via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-sambow-darker border border-sambow-gray/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sambow-pink/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-sambow-darker border border-sambow-gray/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sambow-pink/50"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-sambow-darker border border-sambow-gray/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sambow-pink/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-sambow-teal to-sambow-pink hover:opacity-90 text-white py-2 rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
