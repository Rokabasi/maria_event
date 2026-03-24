'use client';

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ExclusiveOffers() {
    const router = useRouter();

    return (
        <section className="py-16 px-4 bg-linear-to-r from-pink-200 to-orange-200">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    OFFRES MODE EXCLUSIVES
                </motion.h2>
                <motion.h3
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    VOUS ATTENDENT
                </motion.h3>
                <motion.button
                    onClick={() => router.push('/products')}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                >
                    Acheter Maintenant
                </motion.button>
            </div>
        </section>
    );
}
