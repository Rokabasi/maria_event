'use client';

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";
import SkeletonLoader from "../components/SkeletonLoader/SkeletonLoader";
import StaggeredGrid from "../components/StaggeredGrid/StaggeredGrid";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const allProducts = [
        { title: "Nike Air Max", price: "120€", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", isNew: true, category: "Baskets" },
        { title: "Adidas Ultraboost", price: "150€", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", isNew: false, category: "Baskets" },
        { title: "Jordan Retro", price: "180€", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop", isNew: false, category: "Baskets" },
        { title: "Puma RS-X", price: "95€", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop", isNew: false, category: "Baskets" },
        { title: "New Balance 574", price: "85€", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", isNew: false, category: "Baskets" },
        { title: "Converse Chuck Taylor", price: "65€", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop", isNew: false, category: "Baskets" },
        { title: "Vans Old Skool", price: "75€", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop", isNew: false, category: "Baskets" },
        { title: "Dragées Amande Rose", price: "12€", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop", isNew: false, category: "Dragées" },
        { title: "Dragées Amande Blanche", price: "12€", image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400&h=400&fit=crop", isNew: false, category: "Dragées" },
        { title: "Dragées Chocolat Assortis", price: "15€", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop", isNew: true, category: "Dragées" },
        { title: "Dragées Amande Bleue", price: "12€", image: "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=400&h=400&fit=crop", isNew: false, category: "Dragées" },
        { title: "Dragées Praline", price: "18€", image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&h=400&fit=crop", isNew: false, category: "Dragées" }
    ];

    const categories = ["Tous", "Baskets", "Dragées"];

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Simuler le chargement - plus court pour plus de fluidité
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 page-transition">
            <Navbar />

            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <AnimatedSection animation="fade-top-left">
                        <div className="mb-6">
                            <h1 className="text-xl font-bold mb-2">Catalogue</h1>
                            <p className="text-sm text-gray-600">{filteredProducts.length} produits disponibles</p>
                        </div>
                    </AnimatedSection>

                    {/* Barre de recherche */}
                    <AnimatedSection animation="fade-top-right" delay={300}>
                        <div className="mb-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Rechercher un produit..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Filtres par catégorie */}
                    <AnimatedSection animation="fade-left" delay={400}>
                        <div className="mb-8">
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 transform hover:scale-105 ${selectedCategory === category
                                            ? 'bg-black text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Grille de produits */}
                    {isLoading ? (
                        <SkeletonLoader
                            type="card"
                            count={8}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
                        />
                    ) : filteredProducts.length > 0 ? (
                        <StaggeredGrid
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
                            delay={220}
                        >
                            {filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    isNew={product.isNew}
                                />
                            ))}
                        </StaggeredGrid>
                    ) : (
                        <AnimatedSection animation="fade-scale">
                            <div className="text-center py-16">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto mb-4 text-gray-400"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Aucun produit trouvé</h3>
                                <p className="text-sm text-gray-500">Essayez de modifier vos filtres ou votre recherche</p>
                            </div>
                        </AnimatedSection>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
