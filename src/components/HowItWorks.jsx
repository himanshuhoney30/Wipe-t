import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarCheck, Car, Smile } from 'lucide-react';

const steps = [
    {
        title: 'Choose Service',
        desc: 'Select the perfect cleaning package for your vehicle.',
        icon: <MousePointerClick size={32} />,
    },
    {
        title: 'Book a Slot',
        desc: 'Pick a date and time that suits your busy schedule.',
        icon: <CalendarCheck size={32} />,
    },
    {
        title: 'We Arrive',
        desc: 'Our professionals reach your location with all tools.',
        icon: <Car size={32} />,
    },
    {
        title: 'Sparkling Finish',
        desc: 'Enjoy your clean ride and smile with satisfaction.',
        icon: <Smile size={32} />,
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden">
            <div className="container">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">How It Works</h2>
                    <p className="text-white/60 mt-4">Simple four-step process to get your car cleaned</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex-1 flex flex-col items-center text-center relative z-10"
                        >
                            <div className="w-24 h-24 bg-accent/10 border-2 border-accent text-accent rounded-3xl flex items-center justify-center mb-8 transform rotate-12 transition-all hover:rotate-0">
                                <div className="-rotate-12 hover:rotate-0 transition-all">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-white/60">{step.desc}</p>

                            {/* Number Index */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-white-light pointer-events-none">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
