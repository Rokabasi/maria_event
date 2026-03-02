'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface StaggeredGridProps {
    children: ReactNode[];
    delay?: number;
    className?: string;
    itemClassName?: string;
}

export default function StaggeredGrid({
    children,
    delay = 150,
    className = '',
    itemClassName = ''
}: StaggeredGridProps) {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const observersRef = useRef<IntersectionObserver[]>([]);

    useEffect(() => {
        // Nettoyer les anciens observers
        observersRef.current.forEach(observer => observer.disconnect());
        observersRef.current = [];

        // Créer un observer pour chaque élément
        itemRefs.current.forEach((item, index) => {
            if (!item) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => {
                            if (!prev.includes(index)) {
                                return [...prev, index].sort((a, b) => a - b);
                            }
                            return prev;
                        });
                        observer.unobserve(item);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: '50px'
                }
            );

            observer.observe(item);
            observersRef.current.push(observer);
        });

        return () => {
            observersRef.current.forEach(observer => observer.disconnect());
        };
    }, [children.length]);

    return (
        <div className={className}>
            {children.map((child, index) => (
                <div
                    key={index}
                    ref={el => { itemRefs.current[index] = el; }}
                    className={`${itemClassName} ${visibleItems.includes(index)
                        ? 'animate-fade-in-up'
                        : 'opacity-0 translate-y-12'
                        }`}
                    style={{
                        animationDelay: visibleItems.includes(index) ? `${visibleItems.indexOf(index) * delay}ms` : '0ms'
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}