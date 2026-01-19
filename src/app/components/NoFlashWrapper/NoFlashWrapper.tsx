'use client';

import { ReactNode, useEffect, useState } from 'react';

interface NoFlashWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function NoFlashWrapper({ children, className = '' }: NoFlashWrapperProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Petit délai pour éviter le flash
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${!isMounted ? 'opacity-0' : ''} ${className}`}>
            {children}
        </div>
    );
}