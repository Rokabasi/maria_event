import Image from "next/image";

interface ProductCardProps {
    title: string;
    price: string;
    image: string;
    isNew?: boolean;
}

export default function ProductCard({ title, price, image, isNew }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">{image}</span>
                </div>
                {isNew && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Nouveau
                    </span>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-lg font-bold text-gray-900">{price}</p>
            </div>
        </div>
    );
}