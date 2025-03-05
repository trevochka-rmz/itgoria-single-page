import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                const heroBottom =
                    heroSection.offsetTop + heroSection.offsetHeight;
                setShowNavbar(window.scrollY > heroBottom - 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-20 transition-all duration-500"
        >
            {/* Логотип и название */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Лого" className="w-12 h-12" />
                <span className="text-xl font-bold text-purple-700">
                    Айтигория
                </span>
            </div>

            {/* Телефон и кнопка */}
            <div className="flex items-center gap-6">
                <span className="text-lg font-medium text-gray-600">
                    +7 (953) 775-79-74
                </span>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition"
                >
                    Записаться на курс
                </Link>
            </div>
        </motion.nav>
    );
}

export default Navbar;
