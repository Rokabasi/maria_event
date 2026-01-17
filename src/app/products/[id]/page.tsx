'use client';

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

// Base de données des produits
const productsDatabase = {
    "Sweat-shirt": {
        title: "Sweat-shirt",
        price: "45.00",
        brand: "H&M",
        rating: 4.9,
        reviews: 236,
        description: "Sweat-shirt confortable et élégant, parfait pour un look décontracté. Fabriqué en coton doux de qualité supérieure.",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "Chemise Soleil": {
        title: "Chemise Soleil",
        price: "32.00",
        brand: "Zara",
        rating: 4.5,
        reviews: 128,
        description: "Chemise légère et respirante, idéale pour les journées ensoleillées. Coupe moderne et confortable.",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    "Veste Oversize": {
        title: "Veste Oversize",
        price: "67.00",
        brand: "Pull&Bear",
        rating: 4.7,
        reviews: 89,
        description: "Veste oversize tendance avec une coupe ample et décontractée. Parfaite pour un style urbain.",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "Polo": {
        title: "Polo",
        price: "28.00",
        brand: "Lacoste",
        rating: 4.6,
        reviews: 156,
        description: "Polo classique en coton piqué. Un incontournable pour un look élégant et décontracté.",
        images: [
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "Veste en Jean": {
        title: "Veste en Jean",
        price: "78.00",
        brand: "Levi's",
        rating: 4.8,
        reviews: 203,
        description: "Veste en jean classique et intemporelle. Durable et stylée pour toutes les saisons.",
        images: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "T-Shirt Équipe": {
        title: "T-Shirt Équipe",
        price: "24.00",
        brand: "Nike",
        rating: 4.4,
        reviews: 312,
        description: "T-shirt sportif en tissu respirant. Confort optimal pour vos activités quotidiennes.",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "Sac de Luxe": {
        title: "Sac de Luxe",
        price: "89.00",
        brand: "Michael Kors",
        rating: 4.9,
        reviews: 167,
        description: "Sac élégant en cuir synthétique de haute qualité. Design sophistiqué et pratique.",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["Unique"]
    },
    "Montre Décontractée": {
        title: "Montre Décontractée",
        price: "156.00",
        brand: "Fossil",
        rating: 4.7,
        reviews: 94,
        description: "Montre moderne avec bracelet en cuir. Élégance et précision pour votre quotidien.",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["Unique"]
    },
    "Veste en Jean Vintage": {
        title: "Veste en Jean Vintage",
        price: "89.00",
        brand: "Vintage Store",
        rating: 4.6,
        reviews: 78,
        description: "Veste en jean vintage avec un style rétro unique. Pièce authentique et tendance.",
        images: [
            "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    "Polo Classique": {
        title: "Polo Classique",
        price: "45.00",
        brand: "Ralph Lauren",
        rating: 4.8,
        reviews: 201,
        description: "Polo classique en coton premium. Élégance intemporelle et confort absolu.",
        images: [
            "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "Blazer Moderne": {
        title: "Blazer Moderne",
        price: "120.00",
        brand: "Hugo Boss",
        rating: 4.9,
        reviews: 145,
        description: "Blazer moderne avec une coupe ajustée. Parfait pour un look professionnel et élégant.",
        images: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    "Sweat à Capuche": {
        title: "Sweat à Capuche",
        price: "65.00",
        brand: "Adidas",
        rating: 4.7,
        reviews: 189,
        description: "Sweat à capuche confortable avec poche kangourou. Idéal pour un style sportif et décontracté.",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

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

    // Scroll to current image
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: sliderRef.current.offsetWidth * currentImageIndex,
                behavior: 'smooth'
            });
        }
    }, [currentImageIndex]);

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
        addToCart({
            id: product.id,
            title: product.title,
            price: `${product.price}€`,
            image: product.images[0],
            size: selectedSize,
            quantity: quantity
        });
        router.push('/cart');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Image slider du produit */}
            <div className="bg-white px-4 py-6">
                <div className="max-w-md mx-auto">
                    <div
                        ref={sliderRef}
                        className="aspect-square bg-gray-100 rounded-2xl mb-3 overflow-hidden relative"
                    >
                        <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide">
                            {product.images.map((image, index) => (
                                <div key={index} className="min-w-full snap-center">
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
