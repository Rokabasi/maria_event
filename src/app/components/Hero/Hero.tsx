'use client';

import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();

    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background image */}
            <img
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&h=800&fit=crop&q=80"
                alt="Sneakers Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

            {/* Contenu texte */}
            <div className="relative z-20 text-center px-4">
                <p className="text-sm uppercase tracking-wider mb-2 drop-shadow-lg">Collection</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
                    Nouvelle Saison
                </h1>
                <p className="text-lg mb-2 drop-shadow-lg">2024</p>
                <p className="text-base mb-8 drop-shadow-md max-w-2xl mx-auto">
                    Découvrez notre collection exclusive de vêtements tendance
                </p>
                <button
                    onClick={() => router.push('/products')}
                    className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-2xl inline-flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Acheter Maintenant
                </button>
            </div>
        </div>
    );
}
