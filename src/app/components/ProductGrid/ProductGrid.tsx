'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid() {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    const products = [
        { title: "Sweat-shirt", price: "45€", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", isNew: true },
        { title: "Chemise Soleil", price: "32€", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop" },
        { title: "Sac de Luxe", price: "89€", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop" },
        { title: "Veste Oversize", price: "67€", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" },
        { title: "Polo", price: "28€", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop" },
        { title: "Montre Décontractée", price: "156€", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
        { title: "Veste en Jean", price: "78€", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop" },
        { title: "T-Shirt Équipe", price: "24€", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" }
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
