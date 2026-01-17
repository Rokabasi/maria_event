'use client';

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("XL");

    const product = {
        id: params.id as string,
        title: "Sweat à capuche noir confort homme",
        price: "160.00",
        brand: "H&M",
        rating: 4.9,
        reviews: 236,
        description: "Restez confortable et élégant avec ce sweat à capuche noir. Fabriqué à partir d'un mélange de coton doux de qualité supérieure, il offre une coupe décontractée, des poignets côtelés et une capuche chaude parfaite pour un usage quotidien.",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
        sizes: ["S", "M", "L", "XL", "XXL"]
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: `${product.price}€`,
            image: product.image,
            size: selectedSize,
            quantity: quantity
        });
    };

    const handleBuyNow = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: `${product.price}€`,
            image: product.image,
            size: selectedSize,
            quantity: quantity
        });
        router.push('/cart');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Image du produit */}
            <div className="bg-white px-4 py-6">
                <div className="max-w-md mx-auto">
                    <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center mb-3 overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Indicateurs de pagination */}
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>

            {/* Détails du produit */}
            <div className="bg-white mt-2 px-4 py-5">
                <div className="max-w-md mx-auto">
                    {/* Marque et note */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-xs">{product.brand}</span>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#000000" stroke="#000000">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span className="text-xs font-semibold">{product.rating}</span>
                                <span className="text-gray-400 text-xs">({product.reviews})</span>
                            </div>
                        </div>
                        <button className="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>

                    {/* Titre et prix */}
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <p className="text-xl font-bold text-gray-900 mb-3">${product.price}</p>

                    {/* Description */}
                    <p className="text-gray-500 text-xs leading-relaxed mb-5">{product.description}</p>

                    {/* Sélection de la taille */}
                    <div className="mb-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-bold text-base">Taille: <span className="font-normal">{selectedSize}</span></span>
                        </div>
                        <div className="flex gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-full font-semibold text-sm transition-all ${selectedSize === size
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantité */}
                    <div className="mb-5">
                        <span className="font-bold text-base block mb-3">Quantité</span>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex gap-2.5">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-white text-black py-2 rounded-full hover:bg-gray-100 transition-colors font-medium border border-gray-200 text-sm"
                        >
                            Ajouter au panier
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm"
                        >
                            Acheter maintenant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
