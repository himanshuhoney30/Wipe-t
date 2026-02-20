import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=2000")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
            </div>

            <div className="container relative z-10 pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <span className="text-white/80 font-medium">Trusted by 5000+ Happy Customers</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
                    >
                        Professional <span className="text-accent underline decoration-accent/30">Car Wash</span> At Your Doorstep
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-white/70 mb-10 max-w-lg"
                    >
                        Experience premium interior and exterior car cleaning. We bring the shine to your porch in Jaipur. Hassle-free, rapid, and professional.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-accent/20">
                            Get Started Now <ArrowRight size={20} />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-black px-8 py-4 rounded-xl font-bold text-lg border border-white/20 transition-all">
                            View Our Packages
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Stats */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-l-3xl shadow-2xl"
            >
                <div className="flex flex-col gap-8">
                    {[
                        { label: 'Time Saved', val: '2000+ Hrs' },
                        { label: 'Cars Cleaned', val: '10,000+' },
                        { label: 'Rating', val: '4.9/5.0' },
                    ].map((stat, i) => (
                        <div key={i} className="text-right">
                            <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                            <p className="text-white text-2xl font-bold">{stat.val}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
