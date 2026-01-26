'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchNouveautes } from '@/app/store/slices/nouveautesSlice';
import ProductCard from "../components/ProductCard/ProductCard";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import StaggeredGrid from "../components/StaggeredGrid/StaggeredGrid";
import SkeletonLoader from "../components/SkeletonLoader/SkeletonLoader";

export default function NouveautesPage() {
    const dispatch = useAppDispatch();
    const { products, loading, error } = useAppSelector((state) => state.nouveautes);

    useEffect(() => {
        dispatch(fetchNouveautes());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-50 page-transition">
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <AnimatedSection animation="fade-up">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold mb-4">Nouveautés</h1>
                            <p className="text-lg text-gray-600">Découvrez nos derniers arrivages</p>
                        </div>
                    </AnimatedSection>

                    {/* Badge nouveauté */}
                    <AnimatedSection animation="fade-scale" delay={300}>
                        <div className="flex justify-center mb-8">
                            <div className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
                                🔥 Nouveaux produits disponibles
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Loading state */}
                    {loading && (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
                            {[...Array(8)].map((_, index) => (
                                <SkeletonLoader key={index} />
                            ))}
                        </div>
                    )}

                    {/* Error state */}
                    {error && (
                        <div className="text-center text-red-500 mb-12">
                            <p className="mb-4">Erreur lors du chargement des nouveautés</p>
                            <button
                                onClick={() => dispatch(fetchNouveautes())}
                                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Réessayer
                            </button>
                        </div>
                    )}

                    {/* Grille de nouveautés */}
                    {!loading && !error && products.length > 0 && (
                        <StaggeredGrid
                            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-12"
                            delay={200}
                        >
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    price={`$${product.price}`}
                                    image={product.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'}
                                    isNew={true}
                                />
                            ))}
                        </StaggeredGrid>
                    )}

                    {/* Empty state */}
                    {!loading && !error && products.length === 0 && (
                        <div className="text-center text-gray-500 mb-12">
                            <p>Aucune nouveauté disponible pour le moment</p>
                        </div>
                    )}

                    {/* Section informative */}
                    <AnimatedSection animation="fade-bottom-left" delay={400}>
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-4">Restez informé des nouveautés</h2>
                                <p className="text-gray-600 mb-6">
                                    Soyez les premiers à découvrir nos nouveaux produits et profitez d'offres exclusives.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href="https://wa.me/243819600518?text=*MARIA%20EVENT*%0ABonjour,%20je%20souhaite%20être%20informé%20des%20nouveautés%20et%20offres%20spéciales."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Suivre sur WhatsApp
                                    </a>

                                    <div className="text-sm text-gray-500">
                                        ou consultez régulièrement cette page
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
