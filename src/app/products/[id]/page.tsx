'use client';

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

// Base de données des produits
const productsDatabase = {
    "Nike Air Max": {
        title: "Nike Air Max",
        price: "120.00",
        brand: "Nike",
        rating: 4.8,
        reviews: 342,
        description: "Baskets Nike Air Max confortables avec amorti exceptionnel. Design iconique et performance optimale pour un usage quotidien.",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Adidas Ultraboost": {
        title: "Adidas Ultraboost",
        price: "150.00",
        brand: "Adidas",
        rating: 4.9,
        reviews: 289,
        description: "Baskets Adidas Ultraboost avec technologie Boost pour un confort inégalé. Parfaites pour la course et le quotidien.",
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Jordan Retro": {
        title: "Jordan Retro",
        price: "180.00",
        brand: "Jordan",
        rating: 4.9,
        reviews: 456,
        description: "Baskets Jordan Retro légendaires. Style iconique et qualité premium pour les passionnés de sneakers.",
        images: [
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1612902376937-4c6b5e0e3f3e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Puma RS-X": {
        title: "Puma RS-X",
        price: "95.00",
        brand: "Puma",
        rating: 4.6,
        reviews: 178,
        description: "Baskets Puma RS-X au style rétro-futuriste. Confort et design audacieux pour un look unique.",
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "New Balance 574": {
        title: "New Balance 574",
        price: "85.00",
        brand: "New Balance",
        rating: 4.7,
        reviews: 234,
        description: "Baskets New Balance 574 classiques et intemporelles. Confort exceptionnel et style décontracté.",
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Converse Chuck Taylor": {
        title: "Converse Chuck Taylor",
        price: "65.00",
        brand: "Converse",
        rating: 4.8,
        reviews: 512,
        description: "Baskets Converse Chuck Taylor iconiques. Style intemporel et polyvalent pour toutes les occasions.",
        images: [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Dragées Amande Rose": {
        title: "Dragées Amande Rose",
        price: "12.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 167,
        description: "Dragées aux amandes enrobées de chocolat rose. Parfaites pour vos événements et célébrations. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Amande Blanche": {
        title: "Dragées Amande Blanche",
        price: "12.00",
        brand: "Maria Event",
        rating: 4.8,
        reviews: 203,
        description: "Dragées aux amandes enrobées de chocolat blanc. Élégantes et délicieuses pour tous vos événements. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Chocolat Assortis": {
        title: "Dragées Chocolat Assortis",
        price: "15.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 189,
        description: "Assortiment de dragées au chocolat en plusieurs couleurs. Idéales pour décorer vos tables de fête. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Amande Bleue": {
        title: "Dragées Amande Bleue",
        price: "12.00",
        brand: "Maria Event",
        rating: 4.7,
        reviews: 145,
        description: "Dragées aux amandes enrobées de chocolat bleu. Parfaites pour les baptêmes et événements. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Vans Old Skool": {
        title: "Vans Old Skool",
        price: "75.00",
        brand: "Vans",
        rating: 4.8,
        reviews: 398,
        description: "Baskets Vans Old Skool classiques avec bande latérale iconique. Style skate intemporel et confort durable.",
        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Dragées Praline": {
        title: "Dragées Praline",
        price: "18.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 221,
        description: "Dragées pralinées de qualité supérieure. Saveur intense et texture croquante pour vos événements raffinés. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const productId = decodeURIComponent(params.id as string);

    const product = useMemo(() => {
        const foundProduct = productsDatabase[productId as keyof typeof productsDatabase];
        if (!foundProduct) {
            return {
                id: productId,
                title: productId,
                price: "0.00",
                brand: "Maria Event",
                rating: 4.5,
                reviews: 0,
                description: "Produit non trouvé",
                images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop"],
                sizes: ["S", "M", "L", "XL"]
            };
        }
        return { id: productId, ...foundProduct };
    }, [productId]);

    // Auto-scroll slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [product.images.length]);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: `${product.price}€`,
            image: product.images[0],
            size: selectedSize,
            quantity: quantity
        });
    };

    const handleBuyNow = () => {
        router.push('/products');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Image slider du produit */}
            <div className="bg-white px-4 py-6">
                <div className="max-w-md mx-auto">
                    <div className="relative aspect-square bg-gray-100 rounded-2xl mb-3 overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            {product.images.map((image, index) => (
                                <div key={index} className="min-w-full h-full flex-shrink-0">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107">
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
