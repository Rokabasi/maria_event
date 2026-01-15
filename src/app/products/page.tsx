import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";

export default function ProductsPage() {
    const productsByCategory = {
        "Vêtements": [
            { title: "Sweat-shirt", price: "45€", image: "Sweat", isNew: true },
            { title: "Chemise Soleil", price: "32€", image: "Shirt", isNew: false },
            { title: "Veste Oversize", price: "67€", image: "Jacket", isNew: false },
            { title: "Polo", price: "28€", image: "Polo", isNew: false },
            { title: "Veste en Jean", price: "78€", image: "Denim", isNew: false },
            { title: "T-Shirt Équipe", price: "24€", image: "T-Shirt", isNew: false },
            { title: "Veste en Jean Vintage", price: "89€", image: "Vintage", isNew: false },
            { title: "Polo Classique", price: "45€", image: "Classic", isNew: false },
            { title: "Blazer Moderne", price: "120€", image: "Blazer", isNew: false },
            { title: "Sweat à Capuche", price: "65€", image: "Hoodie", isNew: false }
        ],
        "Accessoires": [
            { title: "Sac de Luxe", price: "89€", image: "Bag", isNew: false },
            { title: "Montre Décontractée", price: "156€", image: "Watch", isNew: false }
        ]
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-12">Tous nos produits</h1>

                    {Object.entries(productsByCategory).map(([category, products]) => (
                        <div key={category} className="mb-12">
                            <h2 className="text-2xl font-bold mb-6">{category}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {products.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        isNew={product.isNew}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
