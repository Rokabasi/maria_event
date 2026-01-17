import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";

export default function ProductsPage() {
    const productsByCategory = {
        "Vêtements": [
            { title: "Sweat-shirt", price: "45€", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", isNew: true },
            { title: "Chemise Soleil", price: "32€", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop", isNew: false },
            { title: "Veste Oversize", price: "67€", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", isNew: false },
            { title: "Polo", price: "28€", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop", isNew: false },
            { title: "Veste en Jean", price: "78€", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop", isNew: false },
            { title: "T-Shirt Équipe", price: "24€", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", isNew: false },
            { title: "Veste en Jean Vintage", price: "89€", image: "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=400&h=400&fit=crop", isNew: false },
            { title: "Polo Classique", price: "45€", image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=400&h=400&fit=crop", isNew: false },
            { title: "Blazer Moderne", price: "120€", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop", isNew: false },
            { title: "Sweat à Capuche", price: "65€", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", isNew: false }
        ],
        "Accessoires": [
            { title: "Sac de Luxe", price: "89€", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop", isNew: false },
            { title: "Montre Décontractée", price: "156€", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", isNew: false }
        ]
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8">Tous nos produits</h1>

                    {Object.entries(productsByCategory).map(([category, products]) => (
                        <div key={category} className="mb-8">
                            <h2 className="text-xl font-bold mb-4">{category}</h2>
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
