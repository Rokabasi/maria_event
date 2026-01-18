'use client';

import { useState, useEffect } from "react";

export default function CustomerReviews() {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            name: "Sarah Martinez",
            avatar: "S",
            rating: 5,
            date: "Il y a 2 jours",
            comment: "Les baskets Nike Air Max sont incroyables ! Très confortables et le style est parfait. Livraison rapide et service client au top.",
            product: "Nike Air Max",
            color: "bg-pink-500"
        },
        {
            name: "Jean Dupont",
            avatar: "J",
            rating: 5,
            date: "Il y a 5 jours",
            comment: "Les dragées étaient parfaites pour mon mariage. Qualité exceptionnelle et goût délicieux. Tous mes invités ont adoré !",
            product: "Dragées Amande Rose",
            color: "bg-blue-500"
        },
        {
            name: "Emma Laurent",
            avatar: "E",
            rating: 5,
            date: "Il y a 1 semaine",
            comment: "Super expérience d'achat ! Les Adidas Ultraboost sont exactement ce que je cherchais. Confort absolu pour mes runs quotidiens.",
            product: "Adidas Ultraboost",
            color: "bg-green-500"
        },
        {
            name: "Michel Robert",
            avatar: "M",
            rating: 5,
            date: "Il y a 2 semaines",
            comment: "Commande de dragées pour un baptême. Emballage soigné, produit de qualité. Je recommande vivement Maria Event !",
            product: "Dragées Amande Blanche",
            color: "bg-purple-500"
        },
        {
            name: "Lisa Kim",
            avatar: "L",
            rating: 5,
            date: "Il y a 3 semaines",
            comment: "Les Jordan Retro sont magnifiques ! Authentiques et bien emballées. Service client réactif. Très satisfaite de mon achat.",
            product: "Jordan Retro",
            color: "bg-yellow-500"
        }
    ];

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000); // Change tous les 5 secondes

        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-base font-bold mb-2">Avis de nos clients</h2>
                    <p className="text-sm text-gray-600">Plus de 350+ clients satisfaits</p>
                </div>

                {/* Slider d'avis */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 ${reviews[currentReview].color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                            {reviews[currentReview].avatar}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="font-bold text-gray-900">{reviews[currentReview].name}</h3>
                                <span className="text-xs text-gray-500">{reviews[currentReview].date}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{reviews[currentReview].comment}</p>
                            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                {reviews[currentReview].product}
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={prevReview}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        {/* Indicateurs */}
                        <div className="flex gap-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentReview(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentReview === index ? 'bg-black w-6' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextReview}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Avatars des clients */}
                <div className="flex justify-center items-center gap-2">
                    {reviews.map((review, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-semibold text-sm transition-all ${currentReview === index ? 'ring-4 ring-black ring-opacity-20 scale-110' : 'opacity-60 hover:opacity-100'
                                }`}
                        >
                            {review.avatar}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
