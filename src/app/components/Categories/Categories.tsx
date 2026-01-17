import CategoryCard from "../CategoryCard/CategoryCard";

export default function Categories() {
    const categories = [
        { title: "Tendance urbaine", subtitle: "pour 2024", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop" },
        { title: "Style professionnel", subtitle: "pour tous", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop" }
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold flex-1">Parcourir par catégories</h2>
                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
                        Voir Tout
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            title={category.title}
                            subtitle={category.subtitle}
                            image={category.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}