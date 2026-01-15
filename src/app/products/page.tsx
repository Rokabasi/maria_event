import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";

export default function ProductsPage() {
    const productsByCategory = {
        "Vêtements": [
            { title: "Sweat-shirt", price: "45€", image: "Sweat", isNew: true },
            { title: "Chemise Soleil", price: "32€", image: "Shirt" },
            { title: "Veste Oversize", price: "67€", image: "Jacket" },
            { title: "Polo", price: "28€", image: "Polo" },
            { title: "Veste en Jean", price: "78€", image: "Denim" },
            { title: "T-Shirt Équipe", price: "24€", image: "T-Shirt" },
            { title: "Veste en Jean Vintage", price: "89€", image: "Vintage" },
            { title: "Polo Classique", price: "45€", image: "Classic" },
            { title: "Blazer Moderne", price: "120€", image: "Blazer" },
            { title: "Sweat à Capuche", price: "65€", image: "Hoodie" }
        ],
        "Accessoires": [
            { title: "Sac de Luxe", price: "89€", image: "Bag" },
            { title: "Montre Décontractée", price: "156€", image: "Watch" }
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
