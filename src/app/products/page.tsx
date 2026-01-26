'use client';

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchCatalogue } from '@/app/store/slices/catalogueSlice';
import ProductCard from "../components/ProductCard/ProductCard";
import SkeletonLoader from "../components/SkeletonLoader/SkeletonLoader";
import StaggeredGrid from "../components/StaggeredGrid/StaggeredGrid";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

export default function ProductsPage() {
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector((state) => state.catalogue);
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(fetchCatalogue());
    }, [dispatch]);

    // Extraire les catégories uniques des produits
    const categories = ["Tous", ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 page-transition">
            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <AnimatedSection animation="fade-top-left">
                        <div className="mb-6">
                            <h1 className="text-xl font-bold mb-2">Catalogue</h1>
                            <p className="text-sm text-gray-600">
                                {loading ? 'Chargement...' : `${filteredProducts.length} produits disponibles`}
                            </p>
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
                    {!loading && categories.length > 1 && (
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
                    )}

                    {/* Grille de produits */}
                    {loading ? (
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
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={`$${product.price}`}
                                    image={product.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'}
                                    isNew={false}
                                    brand={product.brand}
                                    category={product.category}
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
        </div>
    );
}
