'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid() {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    const products = [
        { title: "Sweat-shirt", price: "45€", image: "Sweat", isNew: true },
        { title: "Chemise Soleil", price: "32€", image: "Shirt" },
        { title: "Sac de Luxe", price: "89€", image: "Bag" },
        { title: "Veste Oversize", price: "67€", image: "Jacket" },
        { title: "Polo", price: "28€", image: "Polo" },
        { title: "Montre Décontractée", price: "156€", image: "Watch" },
        { title: "Veste en Jean", price: "78€", image: "Denim" },
        { title: "T-Shirt Équipe", price: "24€", image: "T-Shirt" }
    ];

    const displayedProducts = showAll ? products : products.slice(0, 3);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Produits populaires</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {displayedProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            isNew={product.isNew}
                        />
                    ))}
                </div>
                {!showAll && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => router.push('/products')}
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Voir Tout
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
