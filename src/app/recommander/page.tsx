'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RecommenderPage() {
    const [copied, setCopied] = useState(false);
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://mariaevent.com';
    const shareMessage = "Découvrez Maria Event Shopping - Articles de fête et décoration uniques ! 🎉";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(siteUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank');
    };

    const shareOnWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + siteUrl)}`, '_blank');
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(siteUrl)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-xl mx-auto">
                <div className="p-0">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="inline-block p-3 bg-black rounded-full mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                            Recommandez-nous !
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Partagez Maria Event avec vos amis et votre famille
                        </p>
                    </div>

                    {/* Lien du site */}
                    <div className="mb-6">
                        <label className="block text-xs font-semibold text-black mb-2">
                            Lien du site
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={siteUrl}
                                readOnly
                                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:border-black"
                            />
                            <button
                                onClick={copyToClipboard}
                                className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Copié
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                        </svg>
                                        Copier
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Partage sur les réseaux sociaux */}
                    <div className="mb-6">
                        <label className="block text-xs font-semibold text-black mb-3">
                            Partager sur les réseaux sociaux
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <button
                                onClick={shareOnFacebook}
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 font-medium"
                            >
                                <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
                                Facebook
                            </button>
                            <button
                                onClick={shareOnWhatsApp}
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 font-medium"
                            >
                                <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                                WhatsApp
                            </button>
                            <button
                                onClick={shareOnTwitter}
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 font-medium"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                Twitter
                            </button>
                        </div>
                    </div>

                    {/* Nos réseaux sociaux */}
                    <div className="pt-6 mt-6">
                        <label className="block text-xs font-semibold text-black mb-3">
                            Suivez-nous sur nos réseaux
                        </label>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <a
                                href="https://web.facebook.com/mariaevent30"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
                                <span className="text-xs font-medium text-gray-700">Facebook</span>
                            </a>
                            <a
                                href="https://www.instagram.com/maria_event_shopping"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <Image src="/instagram.png" alt="Instagram" width={16} height={16} />
                                <span className="text-xs font-medium text-gray-700">Instagram</span>
                            </a>
                            <a
                                href="https://www.tiktok.com/@mariaevent30"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <Image src="/tiktok.png" alt="TikTok" width={16} height={16} />
                                <span className="text-xs font-medium text-gray-700">TikTok</span>
                            </a>
                        </div>
                    </div>

                    {/* Message de remerciement */}
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
                        <p className="text-black font-semibold text-base">
                            Merci de nous recommander ! 💖
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Votre soutien nous aide à grandir et à offrir le meilleur service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
