'use client';

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchCatalogue, fetchCatalogueById } from '@/app/store/slices/catalogueSlice';
import { fetchTypeProduit } from '@/app/store/slices/typeProduitSlice';
import ProductCard from "../components/ProductCard/ProductCard";
import SkeletonLoader from "../components/SkeletonLoader/SkeletonLoader";
import StaggeredGrid from "../components/StaggeredGrid/StaggeredGrid";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

export default function ProductsPage() {
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector((state) => state.catalogue);
    const { types } = useAppSelector((state) => state.typeProduit);
    const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(fetchCatalogue());
        dispatch(fetchTypeProduit());
    }, [dispatch]);

    // Formater le nom du type pour l'affichage
    const formatTypeName = (typeName: string): string => {
        const typeMap: { [key: string]: string } = {
            'basket': 'Baskets',
            'dragues': 'Dragées',
            'chaussure': 'Chaussures'
        };
        return typeMap[typeName.toLowerCase()] || typeName;
    };

    // Gérer le changement de type
    const handleTypeChange = (typ_id: string | null) => {
        setSelectedTypeId(typ_id);
        if (typ_id === null) {
            // "Tous" sélectionné - récupérer tout le catalogue
            dispatch(fetchCatalogue());
        } else {
            // Type spécifique sélectionné - récupérer les produits de ce type
            dispatch(fetchCatalogueById(typ_id));
        }
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
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
                    {!loading && types.length > 0 && (
                        <AnimatedSection animation="fade-left" delay={400}>
                            <div className="mb-8">
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    <button
                                        onClick={() => handleTypeChange(null)}
                                        className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${selectedTypeId === null
                                            ? 'bg-black text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                            }`}
                                    >
                                        Tous
                                    </button>
                                    {types.map((type) => (
                                        <button
                                            key={type.typ_id}
                                            onClick={() => handleTypeChange(type.typ_id)}
                                            className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${selectedTypeId === type.typ_id
                                                ? 'bg-black text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                                }`}
                                        >
                                            {formatTypeName(type.typ_nom)}
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
