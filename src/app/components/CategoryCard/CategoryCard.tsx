interface CategoryCardProps {
    title: string;
    subtitle: string;
    image: string;
}

export default function CategoryCard({ title, subtitle, image }: CategoryCardProps) {
    return (
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-32 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
}