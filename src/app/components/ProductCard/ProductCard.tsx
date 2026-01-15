'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

interface ProductCardProps {
    title: string;
    price: string;
    image: string;
    isNew?: boolean;
}

export default function ProductCard({ title, price, image, isNew }: ProductCardProps) {
    const router = useRouter();
    const { addToCart } = useCart();
    const [showOptions, setShowOptions] = useState(false);
    const [selectedSize, setSelectedSize] = useState("M");

    const sizes = ["XS", "S", "M", "L", "XL"];

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!showOptions) {
            setShowOptions(true);
        } else {
            addToCart({
                id: encodeURIComponent(title),
                title,
                price,
                image,
                size: selectedSize,
                quantity: 1
            });
            setShowOptions(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div
                className="cursor-pointer"
                onClick={() => router.push(`/products/${encodeURIComponent(title)}`)}
            >
                <div className="relative">
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">{image}</span>
                    </div>
                    {isNew && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Nouveau
                        </span>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-lg font-bold text-gray-900 mb-3">{price}</p>
                </div>
            </div>
            <div className="px-4 pb-4">
                {showOptions && (
                    <div className="mb-3 animate-slide-down">
                        <div className="flex gap-1 justify-center mb-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSize(size);
                                    }}
                                    className={`px-2 py-1 text-xs border rounded transition-colors ${selectedSize === size
                                            ? 'bg-black text-white border-black'
                                            : 'bg-white text-black border-gray-300 hover:border-black'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    {showOptions ? 'Confirmer' : 'Ajouter au panier'}
                </button>
            </div>
        </div>
    );
}
