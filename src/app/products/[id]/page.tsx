'use client';

import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

export default function ProductDetailPage() {
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");

    // Simuler les données du produit
    const product = {
        id: params.id,
        title: "Sweat-shirt Premium",
        price: "45€",
        description: "Un sweat-shirt confortable et élégant, parfait pour toutes les occasions. Fabriqué avec des matériaux de haute qualité pour un confort optimal.",
        image: "Sweat",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Noir", "Blanc", "Gris", "Bleu"],
        details: [
            "100% Coton biologique",
            "Coupe régulière",
            "Lavable en machine",
            "Fabriqué en France"
        ]
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image du produit */}
                        <div className="bg-gray-200 rounded-lg h-96 md:h-[500px] flex items-center justify-center">
                            <span className="text-gray-500 text-2xl">{product.image}</span>
                        </div>

                        {/* Détails du produit */}
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                            <p className="text-2xl font-bold text-gray-900 mb-6">{product.price}</p>

                            <p className="text-gray-600 mb-6">{product.description}</p>

                            {/* Sélection de la taille */}
                            <div className="mb-6">
                                <label className="block font-semibold mb-2">Taille</label>
                                <div className="flex gap-2 flex-wrap">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 border rounded-lg transition-colors ${selectedSize === size
                                                    ? 'bg-black text-white border-black'
                                                    : 'bg-white text-black border-gray-300 hover:border-black'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantité */}
                            <div className="mb-6">
                                <label className="block font-semibold mb-2">Quantité</label>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Bouton Commander */}
                            <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors mb-6 text-lg font-semibold">
                                Commander maintenant
                            </button>

                            {/* Détails supplémentaires */}
                            <div className="border-t pt-6">
                                <h3 className="font-semibold mb-3">Détails du produit</h3>
                                <ul className="space-y-2">
                                    {product.details.map((detail, index) => (
                                        <li key={index} className="text-gray-600 flex items-start">
                                            <span className="mr-2">•</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
