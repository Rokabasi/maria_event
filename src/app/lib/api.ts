import axios from './axios';

// Interface pour les produits de l'API
interface ApiProduct {
    pro_id: string;
    pro_nom: string;
    pro_prix: string;
    pro_description: string;
    show_price: boolean;
    typeProduit: {
        typ_nom: string;
    };
    public: {
        pu_nom: string;
    };
    documents: Array<{
        doc_name: string;
    }>;
}

// Interface pour les produits transformés
export interface Product {
    id: string;
    title: string;
    price: string;
    brand: string;
    rating: number;
    reviews: number;
    description: string;
    images: string[];
    sizes: string[];
    showPrice: boolean;
    category: string;
}

// Transformer les données de l'API
const transformProduct = (apiProduct: ApiProduct): Product => ({
    id: apiProduct.pro_id,
    title: apiProduct.pro_nom,
    price: apiProduct.pro_prix,
    brand: apiProduct.typeProduit?.typ_nom || '',
    rating: 4.5,
    reviews: 0,
    description: apiProduct.pro_description,
    images: apiProduct.documents?.map((doc) => `http://localhost:3002/images/${doc.doc_name}`) || [],
    sizes: [],
    showPrice: apiProduct.show_price,
    category: apiProduct.public?.pu_nom || '',
});

// API Services
export const api = {
    // Récupérer les nouveautés
    getNouveautes: async (): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>('/api/produits/recent/by-type');
        return response.data.map(transformProduct);
    },

    // Récupérer les produits populaires
    getPopulaire: async (): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>('/api/produits/popular');
        return response.data.map(transformProduct);
    },

    // Récupérer des produits aléatoires
    getRandom: async (): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>('/api/produits/random');
        return response.data.map(transformProduct);
    },

    // Récupérer le catalogue complet
    getCatalogue: async (): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>('/api/produits/catalogue');
        return response.data.map(transformProduct);
    },
    getProducts: async (): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>('/api/produits');
        return response.data.map(transformProduct);
    },

    // Récupérer un produit par ID
    getProductById: async (id: string): Promise<Product> => {
        const response = await axios.get<ApiProduct>(`/api/produits/${id}`);
        return transformProduct(response.data);
    },

    // Récupérer les produits par catégorie
    getProductsByCategory: async (category: string): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>(`/api/produits/category/${category}`);
        return response.data.map(transformProduct);
    },

    // Rechercher des produits
    searchProducts: async (query: string): Promise<Product[]> => {
        const response = await axios.get<ApiProduct[]>(`/api/produits/search?q=${query}`);
        return response.data.map(transformProduct);
    },
};

export default api;
