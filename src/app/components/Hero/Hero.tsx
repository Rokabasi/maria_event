import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative h-96 bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center text-white">
            <div className="text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Arrivée Estivale des Tenues
                </h1>
                <p className="text-lg mb-6">Découvrez les dernières tendances de cette saison</p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Voir la Collection
                </button>
            </div>
            {/* Background image overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
    );
}