"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { getCartCount } = useCart();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 relative z-50 bg-white sticky top-0 shadow-sm">
        <Menu isActive={isMenuOpen} onClick={handleMenuClick} />
        <div onClick={() => navigateTo('/')} className="cursor-pointer">
          <Logo />
        </div>
        <div className="relative">
          <button
            onClick={() => router.push('/cart')}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
          {getCartCount() > 0 && (
            <span className="absolute bg-black text-white text-xs rounded-full w-5 h-5 -right-1 -bottom-1 flex items-center justify-center font-semibold animate-scale-in">
              {getCartCount()}
            </span>
          )}
        </div>
      </div>

      {/* Menu mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in overflow-hidden"
          onClick={handleMenuClick}
        >
          <div
            className="fixed top-0 left-0 w-full h-full bg-white z-45 p-6 animate-menu-slide-down overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex flex-col space-y-6 mt-20 items-center justify-center">
                <button
                  onClick={() => navigateTo('/')}
                  className="text-xl font-medium hover:text-gray-600 transition-colors hover:scale-105 transform animate-menu-item delay-100"
                >
                  Accueil
                </button>
                <button
                  onClick={() => navigateTo('/about')}
                  className="text-xl font-medium hover:text-gray-600 transition-colors hover:scale-105 transform animate-menu-item delay-200"
                >
                  À propos
                </button>
                <button
                  onClick={() => navigateTo('/products')}
                  className="text-xl font-medium hover:text-gray-600 transition-colors hover:scale-105 transform animate-menu-item delay-300"
                >
                  Catalogue
                </button>
                <button
                  onClick={() => navigateTo('/nouveautes')}
                  className="text-xl font-medium hover:text-gray-600 transition-colors hover:scale-105 transform animate-menu-item delay-400"
                >
                  Nouveautés
                </button>
                <button
                  onClick={() => navigateTo('/cart')}
                  className="text-xl font-medium hover:text-gray-600 transition-colors hover:scale-105 transform flex items-center gap-2 animate-menu-item delay-500"
                >
                  Panier
                  {getCartCount() > 0 && (
                    <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      {getCartCount()}
                    </span>
                  )}
                </button>
              </div>
              <div className="mt-12 flex flex-col items-center justify-center animate-menu-item delay-600">
                <h2 className="text-lg font-semibold mb-4">Nos Réseaux</h2>
                <div className="flex space-x-6">
                  <a
                    href="https://web.facebook.com/mariaevent30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/facebook.png"
                      alt="Facebook"
                      width={28}
                      height={28}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/maria_event_shopping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={28}
                      height={28}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mariaevent30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/tiktok.png"
                      alt="TikTok"
                      width={28}
                      height={28}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                  <a
                    href="https://wa.me/243970638618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={28}
                      height={28}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
