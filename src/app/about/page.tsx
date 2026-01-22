import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 page-transition">
            <Navbar />

            {/* Hero Section avec image de fond */}
            <AnimatedSection animation="fade-up">
                <section className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-black to-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=400&fit=crop"
                            alt="Maria Event"
                            className="w-full h-full object-cover opacity-50"
                        />
                    </div>
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Maria Event</h1>
                        <p className="text-lg md:text-xl text-center max-w-2xl">
                            Votre partenaire de confiance pour vos événements et votre style
                        </p>
                    </div>
                </section>
            </AnimatedSection>

            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Notre histoire avec image */}
                    <AnimatedSection animation="fade-left" delay={300}>
                        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                        ✨
                                    </span>
                                    Notre Histoire
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Maria Event est née de la passion de créer des moments inoubliables. Spécialisée dans l'organisation d'événements et la vente de produits de qualité, notre entreprise s'est développée pour devenir une référence dans deux domaines distincts mais complémentaires.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    D'un côté, nous proposons les meilleures baskets des marques les plus prestigieuses pour accompagner votre style au quotidien. De l'autre, nous créons la magie de vos événements avec nos dragées artisanales de haute qualité.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop"
                                    alt="Notre histoire"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Nos produits - Cards visuelles */}
                    <AnimatedSection animation="fade-right" delay={400}>
                        <h2 className="text-2xl font-bold mb-8 text-center">Nos Produits</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {/* Baskets Card */}
                            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=300&fit=crop"
                                        alt="Baskets"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                            <span className="text-2xl">👟</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Baskets Premium</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Collection exclusive des meilleures marques : Nike, Adidas, Jordan, Puma, New Balance, Converse et Vans.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Authenticité garantie</span>
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">Dernières tendances</span>
                                    </div>
                                </div>
                            </div>

                            {/* Dragées Card */}
                            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=300&fit=crop"
                                        alt="Dragées"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-2xl">🍬</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Dragées Artisanales</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Dragées de qualité supérieure pour tous vos événements : mariages, baptêmes, communions.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-pink-100 rounded-full text-xs font-medium text-pink-700">Plusieurs parfums</span>
                                        <span className="px-3 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-700">Toutes couleurs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Comment commander - Timeline style */}
                    <AnimatedSection animation="fade-bottom-left" delay={500}>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-xl text-white mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Comment Commander ?</h2>

                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center relative">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform">
                                        <span className="text-black font-bold text-2xl">1</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/20 absolute top-10 left-1/2 hidden md:block"></div>
                                    <h3 className="font-bold text-lg mb-2">Parcourez</h3>
                                    <p className="text-sm text-gray-300">Explorez notre catalogue et sélectionnez vos produits favoris</p>
                                </div>

                                <div className="text-center relative">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform">
                                        <span className="text-black font-bold text-2xl">2</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/20 absolute top-10 left-1/2 hidden md:block"></div>
                                    <h3 className="font-bold text-lg mb-2">Ajoutez au panier</h3>
                                    <p className="text-sm text-gray-300">Choisissez vos tailles et quantités, puis ajoutez au panier</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform">
                                        <span className="text-3xl">📱</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Commandez via WhatsApp</h3>
                                    <p className="text-sm text-gray-300">Finalisez votre commande directement via WhatsApp</p>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                                <h4 className="font-bold text-lg mb-3">Prêt à commander ?</h4>
                                <p className="text-gray-300 mb-4 text-sm">
                                    Contactez-nous directement pour toute question ou commande personnalisée
                                </p>
                                <a
                                    href="https://wa.me/243819600518?text=*MARIA%20EVENT*%0ABonjour,%20j'aimerais%20avoir%20des%20informations%20sur%20vos%20produits."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Contacter sur WhatsApp
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </div>
    );
}
