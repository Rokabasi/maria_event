import axios from 'axios';

// Configuration de base d'Axios pour un site public
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur de réponse pour la gestion des erreurs
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Gestion globale des erreurs
        if (error.response) {
            // Erreur de réponse du serveur
            console.error(`Erreur ${error.response.status}:`, error.response.data);
        } else if (error.request) {
            // Erreur de requête (pas de réponse)
            console.error('Pas de réponse du serveur');
        } else {
            // Autre erreur
            console.error('Erreur:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
