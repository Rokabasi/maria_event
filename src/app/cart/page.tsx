'use client';

import { useCart } from "../hooks/useCart";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const router = useRouter();

    const handleWhatsAppOrder = () => {
        const phoneNumber = "243970638618";
        let message = "*MARIA EVENT*\n";
        message += "Nouvelle Commande\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. *${item.title}*\n`;
            message += `   Taille: ${item.size}\n`;
            message += `   Quantité: ${item.quantity}\n`;
            message += `   Prix: ${item.price}\n\n`;
        });
        message += `*Total: $${getCartTotal().toFixed(2)}*\n\n`;
        message += "Merci de confirmer cette commande.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[calc(100vh-440px)] bg-gray-50 flex flex-col animate-fade-in-up">
                <section className="py-12 px-4 flex-1 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-2xl font-bold mb-4">Votre panier</h1>
                        <p className="text-gray-600 text-sm mb-6">Votre panier est vide</p>
                        <button
                            onClick={() => router.push('/products')}
                            className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm"
                        >
                            Continuer vos achats
                        </button>
                    </div>
                </section>
            </div>
        );
    }

    const subtotal = getCartTotal();
    const total = subtotal;

    return (
        <div className="min-h-[calc(100vh-80px-360px)] bg-gray-50 flex flex-col animate-fade-in-up">
            <section className="py-6 px-4 flex-1">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-lg font-bold mb-4">Panier</h1>

                    <div className="space-y-3 mb-4">
                        {cart.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="bg-white rounded-2xl p-3 flex items-start gap-3 relative">
                                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                                    <img
                                        src={item.image.startsWith('http') ? item.image : `https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop`}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 text-xs">${item.image}</span>`;
                                        }}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm mb-0.5 truncate">{item.title}</h3>
                                    <p className="text-gray-400 text-xs mb-1.5">Taille: {item.size}</p>
                                    <p className="font-bold text-sm">{item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id, item.size)} className="text-red-500 hover:text-red-600 absolute top-3 right-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                                <div className="absolute bottom-3 right-3">
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                                        <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="text-gray-600 hover:text-black text-sm font-bold">-</button>
                                        <span className="font-semibold w-4 text-center text-xs">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="text-gray-600 hover:text-black text-sm font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2.5 mb-4">
                        <div className="flex justify-between text-gray-400 text-sm">
                            <span>Sous-total</span>
                            <span className="text-black font-semibold">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-dashed border-gray-300 pt-2.5"></div>
                        <div className="flex justify-between text-base font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button onClick={handleWhatsAppOrder} className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Commander via WhatsApp
                    </button>

                    <div className="flex gap-2.5 mt-3">
                        <button onClick={() => router.push('/products')} className="flex-1 bg-white text-black py-2 rounded-full hover:bg-gray-100 transition-colors font-medium border border-gray-200 text-sm">
                            Continuer
                        </button>
                        <button onClick={clearCart} className="flex-1 bg-white text-red-500 py-2 rounded-full hover:bg-red-50 transition-colors font-medium border border-red-200 text-sm">
                            Vider
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
