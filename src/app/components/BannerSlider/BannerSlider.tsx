'use client';

import { useState, useEffect } from 'react';

const bannerImages = [
    '/banner.jpg',
    '/banner1.jpg',
    '/banner2.jpg',
    '/banner3.jpg',
    '/banner4.jpg',
    '/banner5.jpg'
];

export default function BannerSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Images */}
            {bannerImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                        }`}
                />
            ))}

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}