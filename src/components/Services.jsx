import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Wind, ShieldCheck, Sparkles, Fan, Monitor } from 'lucide-react';

const services = [
    {
        title: 'Premium Wash',
        description: 'Keep your ride shining bright and rolling right with regular car cleaning!',
        price: '399',
        time: '1hr',
        icon: <Droplets className="text-accent" size={32} />,
    },
    {
        title: 'Deep Cleaning',
        description: 'Revitalize your ride with a deep clean that makes it shine like new!',
        price: '799',
        time: '2-3hrs',
        icon: <Sparkles className="text-accent" size={32} />,
    },
    {
        title: 'Rubbing & Polishing',
        description: 'Detailing that brings out the best in every detail of your vehicle.',
        price: '1399',
        time: '2-3hrs',
        icon: <ShieldCheck className="text-accent" size={32} />,
    },
    {
        title: 'AC Vents Cleaning',
        description: 'Breathe fresh air with our expert vent sterilization and cleaning.',
        price: '350',
        time: '1hr',
        icon: <Fan className="text-accent" size={32} />,
    },
    {
        title: 'Windshield Treatment',
        description: 'Keep your windshield spotless for a crystal clear view in any weather.',
        price: '799',
        time: '1hr',
        icon: <Wind className="text-accent" size={32} />,
    },
    {
        title: 'Engine Detailing',
        description: 'A clean engine runs cooler. Professional degreasing and cleaning.',
        price: '499',
        time: '1hr',
        icon: <Monitor className="text-accent" size={32} />,
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-bold tracking-widest uppercase text-sm"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mt-4"
                    >
                        Premium Detailing Services
                    </motion.h2>
                    <p className="text-text-light mt-4 max-w-2xl mx-auto">
                        We provide a wide range of car cleaning services tailored to your vehicle's specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-2xl transition-all group"
                        >
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent group-hover:scale-110 transition-all">
                                <div className="group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-text-light mb-6">{service.description}</p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
                                <div>
                                    <span className="text-2xl font-bold text-primary">₹{service.price}</span>
                                    <span className="text-sm text-text-light ml-1">starting</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-text-light">
                                    <span>⏱ {service.time}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
