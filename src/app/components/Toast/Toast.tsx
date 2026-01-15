'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            // Petit délai pour permettre au DOM de se mettre à jour avant l'animation
            setTimeout(() => setShow(true), 10);

            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(() => onClose(), 300);
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            setShow(false);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center pointer-events-none">
            <div
                className={`bg-black text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap transition-all duration-300 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400 flex-shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-sm font-medium">{message}</span>
            </div>
        </div>
    );
}
