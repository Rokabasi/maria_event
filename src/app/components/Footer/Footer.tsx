'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* À propos */}
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-2xl mb-4">
                            MARIA EVENT
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            Votre partenaire de confiance pour vos événements et votre style. Découvrez nos baskets premium et nos dragées artisanales de qualité supérieure.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                            >
                                <Image
                                    src="/facebook.png"
                                    alt="Facebook"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                            >
                                <Image
                                    src="/instagram.png"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                            >
                                <Image
                                    src="/tiktok.png"
                                    alt="TikTok"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a
                                href="https://wa.me/243819600518"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-200 transform hover:scale-110"
                            >
                                <Image
                                    src="/whatsapp.png"
                                    alt="WhatsApp"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button
                                    onClick={() => router.push('/')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                                >
                                    → Accueil
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/about')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                                >
                                    → À propos
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/products')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                                >
                                    → Catalogue
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('/nouveautes')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                                >
                                    → Nouveautés
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-pink-500 mt-1">•</span>
                                <a
                                    href="https://wa.me/243819600518"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    +243 819 600 518
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>WhatsApp disponible 24/7</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Événements & Style</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Barre de séparation avec gradient */}
                <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mb-8"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p className="text-center md:text-left">
                        &copy; {currentYear} <span className="text-white font-semibold">Maria Event</span>. Tous droits réservés.
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => router.push('/cart')}
                            className="hover:text-white transition-colors"
                        >
                            Panier
                        </button>
                        <span className="text-gray-600">•</span>
                        <a
                            href="https://wa.me/243819600518"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Commander
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
