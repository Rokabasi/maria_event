'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../../hooks/useCart';
import Toast from '../Toast/Toast';

interface AddToCartModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        id: string;
        title: string;
        price: string;
        image: string;
        brand: string;
        category?: string;
    };
}

export default function AddToCartModal({ isOpen, onClose, product }: AddToCartModalProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedPreset, setSelectedPreset] = useState('');
    const [mounted, setMounted] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const isShoe = product.brand?.toLowerCase().includes('basket') ||
        product.brand?.toLowerCase().includes('chaussure') ||
        product.category?.toLowerCase().includes('basket') ||
        product.category?.toLowerCase().includes('chaussure');

    const isDragee = product.brand?.toLowerCase().includes('dragée') ||
        product.brand?.toLowerCase().includes('dragee') ||
        product.title?.toLowerCase().includes('dragée') ||
        product.title?.toLowerCase().includes('dragee');

    const shoeSizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];
    const drageePresets = ['250g', '500g', '1kg', '2kg', '5kg'];

    useEffect(() => {
        if (isOpen) {
            setQuantity(1);
            setSelectedSize(isShoe ? shoeSizes[0] : '');
            setSelectedPreset(isDragee ? drageePresets[0] : '');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isShoe, isDragee]);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            size: isShoe ? selectedSize : (isDragee ? selectedPreset : 'Standard'),
            quantity: quantity
        });
        onClose();
        setShowToast(true);
    };

    if (!isOpen || !mounted) return null;

    return (
        <>
            {createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/40 animate-fadeIn"
                    onClick={onClose}
                >
                    <div
                        className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md max-h-[85vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-3xl sm:rounded-t-2xl z-10">
                            <h2 className="text-lg font-bold">Ajouter au panier</h2>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4 sm:p-6">
                            <div className="flex gap-3 sm:gap-4 mb-5 sm:mb-6">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm sm:text-base mb-1 truncate">{product.title}</h3>
                                    <p className="text-lg sm:text-xl font-bold text-black">{product.price}</p>
                                </div>
                            </div>

                            {isShoe && (
                                <div className="mb-5 sm:mb-6">
                                    <label className="block font-bold text-sm sm:text-base mb-2 sm:mb-3">
                                        Pointure: <span className="font-normal">{selectedSize}</span>
                                    </label>
                                    <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                                        {shoeSizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`h-10 sm:h-12 rounded-lg font-semibold text-xs sm:text-sm transition-all ${selectedSize === size
                                                    ? 'bg-black text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {isDragee && (
                                <div className="mb-5 sm:mb-6">
                                    <label className="block font-bold text-sm sm:text-base mb-2 sm:mb-3">
                                        Quantité: <span className="font-normal">{selectedPreset}</span>
                                    </label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {drageePresets.map((preset) => (
                                            <button
                                                key={preset}
                                                onClick={() => setSelectedPreset(preset)}
                                                className={`h-10 sm:h-12 rounded-lg font-semibold text-xs sm:text-sm transition-all ${selectedPreset === preset
                                                    ? 'bg-black text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {preset}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mb-5 sm:mb-6">
                                <label className="block font-bold text-sm sm:text-base mb-2 sm:mb-3">Quantité</label>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </button>
                                    <span className="text-lg sm:text-xl font-semibold w-10 sm:w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-2 sm:gap-3">
                                <button
                                    onClick={onClose}
                                    className="flex-1 bg-white text-black py-2.5 sm:py-3 rounded-full hover:bg-gray-100 transition-colors font-medium border border-gray-200 text-sm sm:text-base"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-black text-white py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            <Toast
                message="Produit ajouté au panier"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </>
    );
}
