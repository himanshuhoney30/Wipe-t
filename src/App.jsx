import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />

        {/* About Section */}
        <section id="about" className="py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200"
                    alt="Service Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-accent text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                  <p className="text-4xl font-bold mb-1">5+</p>
                  <p className="font-medium opacity-80">Years of Excellence</p>
                </div>
              </div>
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm">About Us</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                  Your Reliable Car Cleaning Partner
                </h2>
                <p className="text-text-light text-lg mb-8">
                  At Vehiclean, we understand that your car is more than just a vehicle—it's an investment and a part of your lifestyle. We've dedicated ourselves to providing the highest quality doorstep cleaning services using eco-friendly products and expert techniques.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Eco-Friendly</h4>
                    <p className="text-text-light">We use premium, biodegradable cleaning solutions.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                    <p className="text-text-light">Professionally trained and background-checked staff.</p>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent -skew-y-3 origin-right scale-110"></div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready for a Sparkling Car?</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of happy owners in Jaipur who trust Vehiclean for their weekly car maintenance.
            </p>
            <button className="bg-white text-accent px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95">
              BOOK YOUR WASH NOW
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
