"use client";

import { useState } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 relative z-50">
        <Menu isActive={isMenuOpen} onClick={handleMenuClick} />
        <Logo />
        <div className="relative">
          <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
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
          </div>
          <span className="absolute bg-black text-white text-xs rounded-full w-4 h-4 -right-1 -bottom-1 flex items-center justify-center">
            0
          </span>
        </div>
      </div>

      {/* Menu mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMenuClick}
        >
          <div
            className="fixed top-0 left-0 w-full h-full bg-white z-45 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex flex-col space-y-4 mt-20 items-center justify-center">
                <a href="#" className="text-lg font-medium hover:text-gray-600">
                  Accueil
                </a>
                <a href="#" className="text-lg font-medium hover:text-gray-600">
                  Produits
                </a>
                <a href="#" className="text-lg font-medium hover:text-gray-600">
                  À propos
                </a>
              </div>
              <div className="mt-10 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold mb-2">Nos Réseaux</h2>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/facebook.png"
                      alt="Facebook"
                      width={24}
                      height={24}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/tiktok.png"
                      alt="TikTok"
                      width={24}
                      height={24}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
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
