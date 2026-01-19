'use client';

import { ReactNode } from 'react';
import { useStaggeredAnimation } from '../../hooks/useScrollAnimation';

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
    const { ref, visibleItems } = useStaggeredAnimation(children.length, delay);

    return (
        <div ref={ref} className={className}>
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`${itemClassName} ${visibleItems.includes(index)
                        ? 'animate-fade-in-up'
                        : 'opacity-0 translate-y-12'
                        }`}
                    style={{
                        animationDelay: visibleItems.includes(index) ? `${index * delay}ms` : '0ms'
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}