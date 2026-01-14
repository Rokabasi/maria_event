import ProductCard from "../ProductCard/ProductCard";

export default function YouMightLike() {
    const products = [
        { title: "Veste en Jean Vintage", price: "89€", image: "Vintage" },
        { title: "Polo Classique", price: "45€", image: "Classic" },
        { title: "Blazer Moderne", price: "120€", image: "Blazer" },
        { title: "Sweat à Capuche", price: "65€", image: "Hoodie" }
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Vous pourriez aussi aimer</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}