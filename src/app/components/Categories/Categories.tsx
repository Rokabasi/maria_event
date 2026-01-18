'use client';

import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";
import { nouveautesData } from "../../data/nouveautes";

export default function Categories() {
    const router = useRouter();

    // Afficher seulement les 2 premiers produits nouveautés
    const nouveautes = nouveautesData.slice(0, 2);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-base font-bold">Nouveautés</h2>
                        <p className="text-sm text-gray-600 mt-1">Découvrez nos derniers arrivages</p>
                    </div>
                    <button
                        onClick={() => router.push('/nouveautes')}
                        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center gap-2"
                    >
                        Voir Tout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Badge nouveauté */}
                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <span className="animate-pulse">🔥</span>
                        Nouveaux produits disponibles
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                    {nouveautes.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            isNew={product.isNew}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}