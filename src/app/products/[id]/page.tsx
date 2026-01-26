'use client';

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchProductById, clearProduct } from '@/app/store/slices/productDetailSlice';
import { useCart } from "../../hooks/useCart";

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { product, loading, error } = useAppSelector((state) => state.productDetail);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedPreset, setSelectedPreset] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const productId = decodeURIComponent(params.id as string);

    // Détection du type de produit
    const isShoe = product?.brand?.toLowerCase().includes('basket') ||
        product?.brand?.toLowerCase().includes('chaussure') ||
        product?.category?.toLowerCase().includes('basket') ||
        product?.category?.toLowerCase().includes('chaussure');

    const isDragee = product?.brand?.toLowerCase().includes('dragée') ||
        product?.brand?.toLowerCase().includes('dragee') ||
        product?.title?.toLowerCase().includes('dragée') ||
        product?.title?.toLowerCase().includes('dragee');

    const shoeSizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];
    const drageePresets = ['250g', '500g', '1kg', '2kg', '5kg'];

    useEffect(() => {
        dispatch(fetchProductById(productId));
        return () => {
            dispatch(clearProduct());
        };
    }, [dispatch, productId]);

    // Initialiser les valeurs par défaut selon le type de produit
    useEffect(() => {
        if (product) {
            if (isShoe) {
                setSelectedSize(shoeSizes[0]);
            } else if (isDragee) {
                setSelectedPreset(drageePresets[0]);
            }
        }
    }, [product, isShoe, isDragee]);

    // Auto-scroll slider
    useEffect(() => {
        if (product && product.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [product]);

    const handleAddToCart = () => {
        if (!product) return;
        addToCart({
            id: product.id,
            title: product.title,
            price: `${product.price}`,
            image: product.images[0],
            size: isShoe ? selectedSize : (isDragee ? selectedPreset : 'Standard'),
            quantity: quantity
        });
    };

    const handleBuyNow = () => {
        if (!product) return;
        addToCart({
            id: product.id,
            title: product.title,
            price: `${product.price}`,
            image: product.images[0],
            size: isShoe ? selectedSize : (isDragee ? selectedPreset : 'Standard'),
            quantity: quantity
        });
        router.push('/cart');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
                    <p className="text-gray-600">Chargement du produit...</p>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
                    <button
                        onClick={() => router.push('/products')}
                        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Retour au catalogue
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-6 lg:py-12">
                <div className="bg-white rounded-2xl overflow-hidden lg:flex lg:gap-8 lg:p-8">
                    {/* Image slider du produit - Gauche sur desktop */}
                    <div className="lg:flex-1 lg:max-w-2xl px-4 py-6 lg:px-0">
                        <div className="relative aspect-square bg-gray-100 rounded-2xl mb-3 overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {product.images.map((image, index) => (
                                    <div key={index} className="min-w-full h-full shrink-0">
                                        <img
                                            src={image}
                                            alt={`${product.title} - Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Indicateurs de pagination */}
                        {product.images.length > 1 && (
                            <div className="flex justify-center gap-2">
                                {product.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-black w-6' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Détails du produit - Droite sur desktop */}
                    <div className="lg:flex-1 px-4 py-5 lg:px-0 lg:py-0">
                        {/* Marque et note */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 text-xs lg:text-sm">{product.brand}</span>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span className="text-xs lg:text-sm font-semibold">{product.rating}</span>
                                    <span className="text-gray-400 text-xs lg:text-sm">({product.reviews})</span>
                                </div>
                            </div>
                            <button className="p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                        </div>

                        {/* Titre et prix */}
                        <h2 className="text-xl lg:text-3xl font-bold mb-2">{product.title}</h2>
                        {product.showPrice && (
                            <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-5">${product.price}</p>
                        )}

                        {/* Description */}
                        <p className="text-gray-500 text-xs lg:text-base leading-relaxed mb-5 lg:mb-8 whitespace-pre-line">{product.description}</p>

                        {/* Pointures pour baskets */}
                        {isShoe && (
                            <div className="mb-5 lg:mb-8">
                                <label className="block font-bold text-base lg:text-lg mb-3">
                                    Pointure: <span className="font-normal">{selectedSize}</span>
                                </label>
                                <div className="grid grid-cols-6 gap-2">
                                    {shoeSizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`h-10 lg:h-12 rounded-lg font-semibold text-xs lg:text-sm transition-all ${selectedSize === size
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

                        {/* Presets de quantité pour dragées */}
                        {isDragee && (
                            <div className="mb-5 lg:mb-8">
                                <label className="block font-bold text-base lg:text-lg mb-3">
                                    Quantité: <span className="font-normal">{selectedPreset}</span>
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {drageePresets.map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => setSelectedPreset(preset)}
                                            className={`h-10 lg:h-12 rounded-lg font-semibold text-xs lg:text-sm transition-all ${selectedPreset === preset
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

                        {/* Sélection de la taille (pour autres produits) */}
                        {!isShoe && !isDragee && product.sizes.length > 0 && (
                            <div className="mb-5 lg:mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-bold text-base lg:text-lg">Taille: <span className="font-normal">{selectedSize}</span></span>
                                </div>
                                <div className="flex gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full font-semibold text-sm lg:text-base transition-all ${selectedSize === size
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

                        {/* Quantité (pour autres produits) */}
                        {!isDragee && (
                            <div className="mb-5 lg:mb-8">
                                <span className="font-bold text-base lg:text-lg block mb-3">Quantité</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </button>
                                    <span className="text-lg lg:text-xl font-semibold w-8 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Boutons d'action */}
                        <div className="flex gap-2.5 lg:gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-white text-black py-2 lg:py-3 rounded-full hover:bg-gray-100 transition-colors font-medium border border-gray-200 text-sm lg:text-base"
                            >
                                Ajouter au panier
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-black text-white py-2 lg:py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm lg:text-base"
                            >
                                Acheter maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
