import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold"
            >
                Айтигория - Школа Программирования
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-lg"
            >
                Изучи программирование с нуля до профи!
            </motion.p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Записаться
            </button>
        </div>
    );
}

export default Hero;
