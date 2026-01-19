'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const {
        threshold = 0.15,
        rootMargin = '0px 0px -30px 0px',
        triggerOnce = true
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenObserved, setHasBeenObserved] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setHasBeenObserved(true);
                    if (triggerOnce && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible, hasBeenObserved };
};

export const useStaggeredAnimation = (itemsCount: number, delay: number = 150) => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const { ref, isVisible } = useScrollAnimation();

    useEffect(() => {
        if (isVisible) {
            const timeouts: NodeJS.Timeout[] = [];

            for (let i = 0; i < itemsCount; i++) {
                const timeout = setTimeout(() => {
                    setVisibleItems(prev => [...prev, i]);
                }, i * delay);
                timeouts.push(timeout);
            }

            return () => {
                timeouts.forEach(clearTimeout);
            };
        }
    }, [isVisible, itemsCount, delay]);

    return { ref, visibleItems, isVisible };
};