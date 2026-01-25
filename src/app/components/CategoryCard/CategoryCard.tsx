interface CategoryCardProps {
    title: string;
    subtitle: string;
    image: string;
}

export default function CategoryCard({ title, subtitle, image }: CategoryCardProps) {
    return (
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-32 cursor-pointer hover:shadow-lg transition-shadow">
            {/* Background image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20"></div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-200">{subtitle}</p>
            </div>
        </div>
    );
}