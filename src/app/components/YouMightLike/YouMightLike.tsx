'use client';

import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function YouMightLike() {
    const products = [
        { title: "Veste en Jean Vintage", price: "89€", image: "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=400&h=400&fit=crop" },
        { title: "Polo Classique", price: "45€", image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=400&h=400&fit=crop" },
        { title: "Blazerreurer Moderne", price: "120€", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop" },
        { title: "Sweat à Capuche", price: "65€", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop" }
    ];

    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % products.length;
            setCurrentIndex(nextIndex);
            slider.scrollTo({
                left: slider.offsetWidth * nextIndex,
                behavior: 'smooth'
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, products.length]);

    const scrollToIndex = (index: number) => {
        const slider = sliderRef.current;
        if (!slider) return;

        setCurrentIndex(index);
        slider.scrollTo({
            left: slider.offsetWidth * index,
            behavior: 'smooth'
        });
    };

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Vous pourriez aussi aimer</h2>

                {/* Slider pour mobile - une seule carte visible */}
                <div className="md:hidden">
                    <div
                        ref={sliderRef}
                        className="overflow-x-auto scrollbar-hide"
                    >
                        <div className="flex snap-x snap-mandatory">
                            {products.map((product, index) => (
                                <div key={index} className="min-w-full snap-center px-2">
                                    <ProductCard
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicateurs de pagination */}
                    <div className="flex justify-center gap-2 mt-4">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index
                                    ? 'bg-black w-6'
                                    : 'bg-gray-300'
                                    }`}
                                aria-label={`Aller au produit ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Grille pour tablette et desktop */}
                <div className="hidden md:grid md:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
