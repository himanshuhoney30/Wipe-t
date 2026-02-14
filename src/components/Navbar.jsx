import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-accent p-2 rounded-lg">
                        <Car className="text-white" size={24} />
                    </div>
                    <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        VEHI<span className="text-accent">CLEAN</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Services', 'Packages', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-primary' : 'text-white'}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full p-5 flex flex-col gap-4 shadow-xl border-t">
                    {['Home', 'Services', 'Packages', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-primary font-medium text-lg border-b border-gray-100 pb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-accent text-white px-6 py-3 rounded-xl font-semibold mt-2">
                        Book Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
