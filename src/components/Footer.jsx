import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.png" alt="WIPE!T Logo" className="w-12 h-12 object-contain" />
                            <span className="text-2xl font-bold text-primary">
                                WIPE<span className="text-accent">!T</span>
                            </span>
                        </div>
                        <p className="text-text-light mb-8">
                            Professional doorstep car washing services in Jaipur. We bring premium cleaning to your home.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-light hover:bg-accent hover:text-white transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-text-light">
                            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#packages" className="hover:text-accent transition-colors">Packages</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div id="contact-info">
                        <h4 className="text-xl font-bold mb-8">Contact Us</h4>
                        <ul className="flex flex-col gap-6 text-text-light">
                            <li className="flex items-start gap-4">
                                <div className="text-accent mt-1"><MapPin size={20} /></div>
                                <span>C-2 Sagar Enclave, Near Vande Matram Circle, Mansarovar, Jaipur, 302020</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="text-accent"><Phone size={20} /></div>
                                <span>+91 73000 07462</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="text-accent"><Mail size={20} /></div>
                                <span>cleanvehi@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">Newsletter</h4>
                        <p className="text-text-light mb-6">Subscribe to get special offers and maintenance tips.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-6 py-4 rounded-xl bg-background border border-gray-200 focus:outline-none focus:border-accent"
                            />
                            <button className="absolute right-2 top-2 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-text-light text-sm">
                    <p>© 2024 WIPE!T. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent">Privacy Policy</a>
                        <a href="#" className="hover:text-accent">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
