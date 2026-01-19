'use client';

interface SkeletonLoaderProps {
    type?: 'card' | 'text' | 'image' | 'button' | 'custom';
    width?: string;
    height?: string;
    className?: string;
    count?: number;
}

export default function SkeletonLoader({
    type = 'card',
    width,
    height,
    className = '',
    count = 1
}: SkeletonLoaderProps) {
    const getSkeletonContent = () => {
        switch (type) {
            case 'card':
                return (
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="skeleton h-48 w-full" />
                        <div className="p-4 space-y-3">
                            <div className="skeleton h-4 w-3/4 rounded" />
                            <div className="skeleton h-4 w-1/2 rounded" />
                            <div className="skeleton h-6 w-1/4 rounded" />
                        </div>
                    </div>
                );

            case 'text':
                return (
                    <div className="space-y-2">
                        <div className="skeleton h-4 w-full rounded" />
                        <div className="skeleton h-4 w-5/6 rounded" />
                        <div className="skeleton h-4 w-4/6 rounded" />
                    </div>
                );

            case 'image':
                return (
                    <div
                        className={`skeleton rounded ${width || 'w-full'} ${height || 'h-48'}`}
                    />
                );

            case 'button':
                return (
                    <div
                        className={`skeleton rounded-lg ${width || 'w-32'} ${height || 'h-10'}`}
                    />
                );

            case 'custom':
                return (
                    <div
                        className={`skeleton rounded ${width || 'w-full'} ${height || 'h-4'}`}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className={className}>
            {Array.from({ length: count }, (_, index) => (
                <div key={index} className={count > 1 ? 'mb-4' : ''}>
                    {getSkeletonContent()}
                </div>
            ))}
        </div>
    );
}