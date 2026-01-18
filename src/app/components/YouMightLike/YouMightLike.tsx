'use client';

import ProductCard from "../ProductCard/ProductCard";

export default function YouMightLike() {
    const products = [
        { title: "New Balance 574", price: "85€", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop" },
        { title: "Vans Old Skool", price: "75€", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop" },
        { title: "Dragées Amande Blanche", price: "12€", image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400&h=400&fit=crop" },
        { title: "Dragées Amande Bleue", price: "12€", image: "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=400&h=400&fit=crop" }
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-base font-bold mb-8 text-center">Vous pourriez aussi aimer</h2>

                {/* Grille responsive - 2 colonnes sur mobile, 4 sur desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
