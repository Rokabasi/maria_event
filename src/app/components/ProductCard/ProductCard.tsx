'use client';

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
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-500 text-sm">${title}</span>`;
                            }}
                        />
                    </div>
                    {isNew && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Nouveau
                        </span>
                    )}
                </div>
                <div className="p-3">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">{title}</h3>
                    <p className="text-base font-bold text-gray-900 mb-2">{price}</p>
                </div>
            </div>
            <div className="px-3 pb-3">
                {showOptions && (
                    <div className="mb-2 animate-slide-down">
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
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                >
                    {showOptions ? 'Confirmer' : 'Ajouter au panier'}
                </button>
            </div>
        </div>
    );
}
