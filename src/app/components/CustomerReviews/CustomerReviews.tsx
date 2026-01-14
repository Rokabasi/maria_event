export default function CustomerReviews() {
    const reviews = [
        { name: "Sarah M.", rating: 5, color: "bg-pink-400" },
        { name: "John D.", rating: 5, color: "bg-blue-400" },
        { name: "Emma L.", rating: 5, color: "bg-green-400" },
        { name: "Mike R.", rating: 5, color: "bg-purple-400" },
        { name: "Lisa K.", rating: 5, color: "bg-yellow-400" }
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-2">Plus de 350+ Clients</h2>
                <p className="text-lg text-gray-600 mb-12">avis de nos clients</p>

                <div className="flex justify-center items-center space-x-4 mb-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`w-16 h-16 ${review.color} rounded-full flex items-center justify-center text-white font-semibold relative`}
                        >
                            {review.name.charAt(0)}
                            {index === 2 && (
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 text-xs text-gray-800 w-48">
                                    "Qualité incroyable et livraison rapide. Je recommande vivement !"
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}