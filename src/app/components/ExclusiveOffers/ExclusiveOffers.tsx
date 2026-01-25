'use client';

import { useRouter } from "next/navigation";

export default function ExclusiveOffers() {
    const router = useRouter();

    return (
        <section className="py-16 px-4 bg-linear-to-r from-pink-200 to-orange-200">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    OFFRES MODE EXCLUSIVES
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    VOUS ATTENDENT
                </h3>
                <button
                    onClick={() => router.push('/products')}
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                    Acheter Maintenant
                </button>
            </div>
        </section>
    );
}