'use client';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'black' | 'white' | 'gray';
    className?: string;
}

export default function LoadingSpinner({
    size = 'md',
    color = 'black',
    className = ''
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    const colorClasses = {
        black: 'border-black border-t-transparent',
        white: 'border-white border-t-transparent',
        gray: 'border-gray-300 border-t-transparent'
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div
                className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]} 
          border-2 
          rounded-full 
          animate-spin
        `}
            />
        </div>
    );
}

// Composant de loading pleine page
export function FullPageLoader() {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center">
                <LoadingSpinner size="lg" />
                <p className="mt-4 text-gray-600 animate-pulse">Chargement...</p>
            </div>
        </div>
    );
}