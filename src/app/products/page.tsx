import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";

export default function ProductsPage() {
    const productsByCategory = {
        "Baskets": [
            { title: "Nike Air Max", price: "120€", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", isNew: true },
            { title: "Adidas Ultraboost", price: "150€", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", isNew: false },
            { title: "Jordan Retro", price: "180€", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop", isNew: false },
            { title: "Puma RS-X", price: "95€", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop", isNew: false },
            { title: "New Balance 574", price: "85€", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", isNew: false },
            { title: "Converse Chuck Taylor", price: "65€", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop", isNew: false },
            { title: "Vans Old Skool", price: "75€", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop", isNew: false }
        ],
        "Dragées": [
            { title: "Dragées Amande Rose", price: "12€", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop", isNew: false },
            { title: "Dragées Amande Blanche", price: "12€", image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400&h=400&fit=crop", isNew: false },
            { title: "Dragées Chocolat Assortis", price: "15€", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop", isNew: true },
            { title: "Dragées Amande Bleue", price: "12€", image: "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=400&h=400&fit=crop", isNew: false },
            { title: "Dragées Praline", price: "18€", image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&h=400&fit=crop", isNew: false }
        ]
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-xl font-bold mb-8">Tous nos produits</h1>

                    {Object.entries(productsByCategory).map(([category, products]) => (
                        <div key={category} className="mb-8">
                            <h2 className="text-lg font-bold mb-4">{category}</h2>
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
