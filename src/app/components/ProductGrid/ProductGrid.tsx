'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid() {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    const products = [
        { title: "Nike Air Max", price: "120€", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", isNew: true },
        { title: "Adidas Ultraboost", price: "150€", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop" },
        { title: "Dragées Amande Rose", price: "12€", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop" },
        { title: "Jordan Retro", price: "180€", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop" },
        { title: "Dragées Chocolat Assortis", price: "15€", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop" },
        { title: "Puma RS-X", price: "95€", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop" },
        { title: "Converse Chuck Taylor", price: "65€", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop" },
        { title: "Dragées Praline", price: "18€", image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&h=400&fit=crop" }
    ];

    const displayedProducts = showAll ? products : products.slice(0, 3);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-base font-bold">Produits populaires</h2>
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
