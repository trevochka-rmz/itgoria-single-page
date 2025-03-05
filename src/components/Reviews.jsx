import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import reviews from '../data/reviews';

export default function Reviews() {
    const [index, setIndex] = useState(0);

    const nextReview = () => {
        setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setIndex(
            (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
        );
    };

    return (
        <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold text-purple-700">Отзывы</h2>

            <div className="flex items-center space-x-4">
                <button
                    onClick={prevReview}
                    className="text-yellow-500 text-3xl"
                >
                    <FaChevronLeft />
                </button>
                <div className="flex space-x-6">
                    {[0, 1].map((offset) => {
                        const reviewIndex = (index + offset) % reviews.length;
                        return (
                            <motion.div
                                key={reviewIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center space-y-3 w-96"
                            >
                                <div className="relative bg-white border-2 border-yellow-400 p-6 rounded-lg text-purple-700 text-lg shadow-lg">
                                    <p>«{reviews[reviewIndex].text}»</p>

                                    {/* Хвостик сообщения (теперь слева) */}
                                    <div
                                        className="absolute bottom-0 left-4 transform translate-y-3 w-0 h-0 
            border-l-[15px] border-l-transparent 
            border-r-[15px] border-r-transparent 
            border-t-[15px] border-t-yellow-400"
                                    ></div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl">
                                            👾
                                        </span>
                                    </div>
                                    <p className="text-purple-700 font-bold">
                                        {reviews[reviewIndex].name}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <button
                    onClick={nextReview}
                    className="text-yellow-500 text-3xl"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
