export default function Newsletter() {
    return (
        <section className="py-12 px-4 bg-slate-700 text-white">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">RESTEZ INFORMÉ DE NOS</h2>
                        <h3 className="text-2xl font-bold">DERNIÈRES OFFRES</h3>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Entrez votre adresse email"
                            className="px-4 py-3 rounded-full text-gray-800 w-64"
                        />
                        <button className="bg-white text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            S'abonner à la Newsletter
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}