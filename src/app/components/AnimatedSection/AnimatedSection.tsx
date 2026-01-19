'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale' | 'stagger' | 'fade-bottom-left' | 'fade-bottom-right' | 'fade-top-left' | 'fade-top-right';
    delay?: number;
    className?: string;
    threshold?: number;
    triggerOnce?: boolean;
}

export default function AnimatedSection({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    threshold = 0.1,
    triggerOnce = true
}: AnimatedSectionProps) {
    const { ref, isVisible, hasBeenObserved } = useScrollAnimation({ threshold, triggerOnce });

    const getAnimationClass = () => {
        // Si l'élément n'a jamais été observé, on le garde invisible
        if (!hasBeenObserved) {
            switch (animation) {
                case 'fade-left':
                    return 'opacity-0 -translate-x-20';
                case 'fade-right':
                    return 'opacity-0 translate-x-20';
                case 'fade-scale':
                    return 'opacity-0 scale-75 translate-y-8';
                case 'fade-bottom-left':
                    return 'opacity-0 -translate-x-16 translate-y-16';
                case 'fade-bottom-right':
                    return 'opacity-0 translate-x-16 translate-y-16';
                case 'fade-top-left':
                    return 'opacity-0 -translate-x-16 -translate-y-16';
                case 'fade-top-right':
                    return 'opacity-0 translate-x-16 -translate-y-16';
                default:
                    return 'opacity-0 translate-y-12';
            }
        }

        // Une fois observé, on applique l'animation si visible
        switch (animation) {
            case 'fade-up':
                return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-12';
            case 'fade-left':
                return isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-20';
            case 'fade-right':
                return isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-20';
            case 'fade-scale':
                return isVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-75 translate-y-8';
            case 'stagger':
                return isVisible ? 'animate-stagger' : 'opacity-0 translate-y-10 scale-90';
            case 'fade-bottom-left':
                return isVisible ? 'animate-fade-in-bottom-left' : 'opacity-0 -translate-x-16 translate-y-16';
            case 'fade-bottom-right':
                return isVisible ? 'animate-fade-in-bottom-right' : 'opacity-0 translate-x-16 translate-y-16';
            case 'fade-top-left':
                return isVisible ? 'animate-fade-in-top-left' : 'opacity-0 -translate-x-16 -translate-y-16';
            case 'fade-top-right':
                return isVisible ? 'animate-fade-in-top-right' : 'opacity-0 translate-x-16 -translate-y-16';
            default:
                return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-12';
        }
    };

    const getDelayClass = () => {
        if (delay === 0) return '';
        return `delay-${Math.min(delay, 800)}`;
    };

    return (
        <div
            ref={ref}
            className={`${getAnimationClass()} ${getDelayClass()} ${className}`}
            style={{ animationDelay: delay > 800 ? `${delay}ms` : undefined }}
        >
            {children}
        </div>
    );
}