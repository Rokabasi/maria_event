'use client';

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BannerSlider from "../BannerSlider/BannerSlider";

export default function Hero() {
    const router = useRouter();

    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background slider */}
            <div className="absolute inset-0 w-full h-full">
                <BannerSlider />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50"></div>

            {/* Contenu texte */}
            <div className="relative z-20 text-center px-4">
                <motion.p
                    className="text-sm uppercase tracking-wider mb-2 drop-shadow-lg"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                >
                    Maria Event
                </motion.p>
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                >
                    Style & Événements
                </motion.h1>
                <motion.p
                    className="text-lg mb-2 drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Baskets & Dragées
                </motion.p>
                <motion.p
                    className="text-base mb-8 drop-shadow-md max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Découvrez nos baskets premium et dragées artisanales pour tous vos besoins
                </motion.p>
                <motion.button
                    onClick={() => router.push('/products')}
                    className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-2xl inline-flex items-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 1 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Acheter Maintenant
                </motion.button>
            </div>
        </div>
    );
}
