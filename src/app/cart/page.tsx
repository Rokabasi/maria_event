'use client';

import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const router = useRouter();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <section className="py-12 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold mb-6">Votre panier</h1>
                        <p className="text-gray-600 mb-8">Votre panier est vide</p>
                        <button
                            onClick={() => router.push('/products')}
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Continuer vos achats
                        </button>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">Votre panier</h1>

                    <div className="space-y-4 mb-8">
                        {cart.map((item) => (
                            <div
                                key={`${item.id}-${item.size}`}
                                className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
                            >
                                <div className="w-full md:w-24 h-24 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                                    <span className="text-gray-500">{item.image}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">Taille: {item.size}</p>
                                    <p className="font-bold text-lg">{item.price}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.size, item.quantity - 1)
                                            }
                                            className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center font-semibold">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.size, item.quantity + 1)
                                            }
                                            className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id, item.size)}
                                        className="text-red-500 hover:text-red-700 font-semibold"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-2xl font-bold">{getCartTotal().toFixed(2)}€</span>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors mb-3 text-lg font-semibold">
                            Passer la commande
                        </button>

                        <div className="flex gap-3">
                            <button
                                onClick={() => router.push('/products')}
                                className="flex-1 bg-white border border-gray-300 text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Continuer vos achats
                            </button>
                            <button
                                onClick={clearCart}
                                className="flex-1 bg-white border border-red-300 text-red-500 py-3 rounded-lg hover:bg-red-50 transition-colors"
                            >
                                Vider le panier
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
