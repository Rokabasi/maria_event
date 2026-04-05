'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import AddToCartModal from '../AddToCartModal/AddToCartModal';

interface ProductCardProps {
    id?: string;
    title: string;
    price: string;
    image: string;
    isNew?: boolean;
    brand?: string;
    category?: string;
    size?: string;
}

export default function ProductCard({ id, title, price, image, isNew, brand, category, size }: ProductCardProps) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                <div
                    className="cursor-pointer"
                    onClick={() => router.push(`/products/${id || encodeURIComponent(title)}`)}
                >
                    <div className="relative overflow-hidden">
                        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                        parent.innerHTML = `<span class="text-gray-500 text-sm">${title}</span>`;
                                    }
                                }}
                            />
                        </div>
                        {isNew && (
                            <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                                Nouveau
                            </span>
                        )}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-gray-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm truncate">{title}</h3>
                        <div className="flex items-center justify-between sm:block">
                            <p className="text-lg font-bold text-black sm:mb-3">{price}</p>
                            <button
                                onClick={handleAddToCart}
                                className="sm:w-full bg-black text-white py-2 px-5 sm:px-0 sm:py-2.5 rounded-full hover:bg-gray-800 transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="hidden sm:inline">Ajouter au panier</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AddToCartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={{
                    id: id || encodeURIComponent(title),
                    title,
                    price,
                    image,
                    brand: brand || '',
                    category: category || '',
                    size: size || '',
                }}
            />
        </>
    );
}
