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
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/instagram.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/tiktok.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-gray-600"
                  >
                    <Image
                      src="/whatsapp.png"
                      alt="icon"
                      width={24}
                      height={24}
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
