'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchPopulaire } from '@/app/store/slices/populaireSlice';
import ProductCard from "../ProductCard/ProductCard";
import StaggeredGrid from "../StaggeredGrid/StaggeredGrid";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function ProductGrid() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector((state) => state.populaire);

    useEffect(() => {
        dispatch(fetchPopulaire());
    }, [dispatch]);

    const displayedProducts = products.slice(0, 4);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-base font-bold">Produits populaires</h2>
                </div>

                {!loading && displayedProducts.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Aucun produit populaire disponible pour le moment.</p>
                ) : loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[...Array(4)].map((_, index) => (
                            <SkeletonLoader key={index} />
                        ))}
                    </div>
                ) : (
                    <StaggeredGrid
                        className="grid grid-cols-2 md:grid-cols-4 gap-2"
                        delay={250}
                    >
                        {displayedProducts.map((product) => (
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
                )}

                {!loading && products.length > 4 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => router.push('/products')}
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200"
                        >
                            Voir Tout
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
