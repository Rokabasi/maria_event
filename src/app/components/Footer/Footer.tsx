export default function Footer() {
    return (
        <footer className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">SHOP.CO</h3>
                        <p className="text-gray-600 text-sm">
                            Nous avons des vêtements qui correspondent à votre style et que vous êtes fier de porter.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">ENTREPRISE</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-800">À propos</a></li>
                            <li><a href="#" className="hover:text-gray-800">Fonctionnalités</a></li>
                            <li><a href="#" className="hover:text-gray-800">Travaux</a></li>
                            <li><a href="#" className="hover:text-gray-800">Carrière</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">AIDE</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-800">Support Client</a></li>
                            <li><a href="#" className="hover:text-gray-800">Détails de Livraison</a></li>
                            <li><a href="#" className="hover:text-gray-800">Conditions Générales</a></li>
                            <li><a href="#" className="hover:text-gray-800">Politique de Confidentialité</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">FAQ</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-800">Compte</a></li>
                            <li><a href="#" className="hover:text-gray-800">Gérer les Livraisons</a></li>
                            <li><a href="#" className="hover:text-gray-800">Commandes</a></li>
                            <li><a href="#" className="hover:text-gray-800">Paiements</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; 2024 Shop.co, Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}