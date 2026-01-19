import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 page-transition">
            <Navbar />

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <AnimatedSection animation="fade-up">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl font-bold mb-4">À propos de Maria Event</h1>
                            <p className="text-lg text-gray-600">Votre partenaire de confiance pour vos événements et votre style</p>
                        </div>
                    </AnimatedSection>

                    {/* Notre histoire */}
                    <AnimatedSection animation="fade-left" delay={300}>
                        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-4">Notre Histoire</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Maria Event est née de la passion de créer des moments inoubliables. Spécialisée dans l'organisation d'événements et la vente de produits de qualité, notre entreprise s'est développée pour devenir une référence dans deux domaines distincts mais complémentaires.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                D'un côté, nous proposons les meilleures baskets des marques les plus prestigieuses pour accompagner votre style au quotidien. De l'autre, nous créons la magie de vos événements avec nos dragées artisanales de haute qualité.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Nos produits */}
                    <AnimatedSection animation="fade-right" delay={400}>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
                                        <path d="m18 2 4 4-4 4" />
                                        <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
                                        <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
                                        <path d="m18 14 4 4-4 4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">Baskets Premium</h3>
                                <p className="text-gray-600 text-sm">
                                    Collection exclusive des meilleures marques : Nike, Adidas, Jordan, Puma, New Balance, Converse et Vans. Authenticité garantie et dernières tendances.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">Dragées Artisanales</h3>
                                <p className="text-gray-600 text-sm">
                                    Dragées de qualité supérieure pour tous vos événements : mariages, baptêmes, communions. Plusieurs parfums et couleurs disponibles.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Comment commander */}
                    <AnimatedSection animation="fade-bottom-left" delay={500}>
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Comment Commander ?</h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">1</span>
                                    </div>
                                    <h3 className="font-bold mb-2">Parcourez</h3>
                                    <p className="text-sm text-gray-600">Explorez notre catalogue et sélectionnez vos produits favoris</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">2</span>
                                    </div>
                                    <h3 className="font-bold mb-2">Ajoutez au panier</h3>
                                    <p className="text-sm text-gray-600">Choisissez vos tailles et quantités, puis ajoutez au panier</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold mb-2">Commandez via WhatsApp</h3>
                                    <p className="text-sm text-gray-600">Finalisez votre commande directement via WhatsApp pour un service personnalisé</p>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-bold mb-2">Contact WhatsApp</h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    Pour toute question ou commande personnalisée, contactez-nous directement :
                                </p>
                                <a
                                    href="https://wa.me/243819600518?text=*MARIA%20EVENT*%0ABonjour,%20j'aimerais%20avoir%20des%20informations%20sur%20vos%20produits."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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