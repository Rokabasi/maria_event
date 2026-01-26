'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchRandom } from '@/app/store/slices/randomSlice';
import ProductCard from "../ProductCard/ProductCard";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function YouMightLike() {
    const dispatch = useAppDispatch();
    const { products, loading } = useAppSelector((state) => state.random);

    useEffect(() => {
        dispatch(fetchRandom());
    }, [dispatch]);

    const displayedProducts = products.slice(0, 4);

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-base font-bold mb-8 text-center">Vous pourriez aussi aimer</h2>

                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[...Array(4)].map((_, index) => (
                            <SkeletonLoader key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {displayedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={`$${product.price}`}
                                image={product.images[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
