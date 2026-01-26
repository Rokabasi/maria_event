'use client';

import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchNouveautes } from '@/app/store/slices/nouveautesSlice';
import ProductCard from "../ProductCard/ProductCard";
import StaggeredGrid from "../StaggeredGrid/StaggeredGrid";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function Categories() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector((state) => state.nouveautes);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchNouveautes());
        }
    }, [dispatch, products.length]);

    // Afficher seulement les 2 premiers produits nouveautés
    const nouveautes = products.slice(0, 2);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection animation="fade-left">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-base font-bold">Nouveautés</h2>
                            <p className="text-sm text-gray-600 mt-1">Découvrez nos derniers arrivages</p>
                        </div>
                        <button
                            onClick={() => router.push('/nouveautes')}
                            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-200 whitespace-nowrap flex items-center gap-2 transform hover:scale-105"
                        >
                            Voir Tout
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </AnimatedSection>

                {/* Badge nouveauté */}
                <AnimatedSection animation="fade-scale" delay={300}>
                    <div className="flex justify-center mb-6">
                        <div className="bg-linear-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <span className="animate-pulse">🔥</span>
                            Nouveaux produits disponibles
                        </div>
                    </div>
                </AnimatedSection>

                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                        {[...Array(2)].map((_, index) => (
                            <SkeletonLoader key={index} />
                        ))}
                    </div>
                ) : (
                    <StaggeredGrid
                        className="grid grid-cols-2 md:grid-cols-2 gap-2"
                        delay={300}
                    >
                        {nouveautes.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={`$${product.price}`}
                                image={product.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'}
                                isNew={true}
                            />
                        ))}
                    </StaggeredGrid>
                )}
            </div>
        </section>
    );
}
