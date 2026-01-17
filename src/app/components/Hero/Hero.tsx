import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative h-96 flex items-center justify-center text-white overflow-hidden bg-gray-200">
            {/* Background image */}
            <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop&q=80"
                alt="Fashion Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>

            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
                    Arrivée Estivale des Tenues
                </h1>
                <p className="text-lg mb-6 drop-shadow-lg">Découvrez les dernières tendances de cette saison</p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                    Voir la Collection
                </button>
            </div>
        </div>
    );
}