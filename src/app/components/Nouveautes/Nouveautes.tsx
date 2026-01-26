'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchNouveautes } from '@/app/store/slices/nouveautesSlice';
import ProductCard from '../ProductCard/ProductCard';
import StaggeredGrid from '../StaggeredGrid/StaggeredGrid';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

export default function Nouveautes() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { products, loading, error } = useAppSelector((state) => state.nouveautes);

    useEffect(() => {
        dispatch(fetchNouveautes());
    }, [dispatch]);

    if (loading) {
        return (
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-base font-bold mb-8">Nouveautés</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[...Array(4)].map((_, index) => (
                            <SkeletonLoader key={index} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-base font-bold mb-8">Nouveautés</h2>
                    <div className="text-center text-red-500">
                        <p>Erreur lors du chargement des nouveautés</p>
                        <button
                            onClick={() => dispatch(fetchNouveautes())}
                            className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Réessayer
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    const displayedProducts = products.slice(0, 4);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-base font-bold">Nouveautés</h2>
                </div>
                <StaggeredGrid
                    className="grid grid-cols-2 md:grid-cols-4 gap-2"
                    delay={250}
                >
                    {displayedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={`${product.price}€`}
                            image={product.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'}
                            isNew={true}
                        />
                    ))}
                </StaggeredGrid>
                {products.length > 4 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => router.push('/nouveautes')}
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200"
                        >
                            Voir toutes les nouveautés
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
