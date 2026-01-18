export interface Product {
    title: string;
    price: string;
    brand: string;
    rating: number;
    reviews: number;
    description: string;
    images: string[];
    sizes: string[];
    isNew?: boolean;
}

export const productsDatabase: Record<string, Product> = {
    // Nouveautés
    "Jordan Air Force Limited": {
        title: "Jordan Air Force Limited",
        price: "135.00",
        brand: "Jordan",
        rating: 4.9,
        reviews: 89,
        description: "Édition limitée des Jordan Air Force avec design exclusif. Confort premium et style iconique pour les collectionneurs.",
        images: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1612902376937-4c6b5e0e3f3e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        isNew: true
    },
    "Dragées Chocolat Premium": {
        title: "Dragées Chocolat Premium",
        price: "22.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 156,
        description: "Dragées au chocolat premium de qualité supérieure. Enrobage parfait et saveur intense pour vos événements d'exception. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"],
        isNew: true
    },
    "Adidas Boost Elite": {
        title: "Adidas Boost Elite",
        price: "165.00",
        brand: "Adidas",
        rating: 4.8,
        reviews: 234,
        description: "Baskets Adidas Boost Elite avec technologie de pointe. Performance maximale et confort exceptionnel pour les athlètes.",
        images: [
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        isNew: true
    },
    "Dragées Amande Dorée": {
        title: "Dragées Amande Dorée",
        price: "25.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 98,
        description: "Dragées aux amandes avec enrobage doré élégant. Parfaites pour les mariages et événements prestigieux. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"],
        isNew: true
    },

    // Produits existants
    "Nike Air Max": {
        title: "Nike Air Max",
        price: "120.00",
        brand: "Nike",
        rating: 4.8,
        reviews: 342,
        description: "Baskets Nike Air Max confortables avec amorti exceptionnel. Design iconique et performance optimale pour un usage quotidien.",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Adidas Ultraboost": {
        title: "Adidas Ultraboost",
        price: "150.00",
        brand: "Adidas",
        rating: 4.9,
        reviews: 289,
        description: "Baskets Adidas Ultraboost avec technologie Boost pour un confort inégalé. Parfaites pour la course et le quotidien.",
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Jordan Retro": {
        title: "Jordan Retro",
        price: "180.00",
        brand: "Jordan",
        rating: 4.9,
        reviews: 456,
        description: "Baskets Jordan Retro légendaires. Style iconique et qualité premium pour les passionnés de sneakers.",
        images: [
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1612902376937-4c6b5e0e3f3e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Puma RS-X": {
        title: "Puma RS-X",
        price: "95.00",
        brand: "Puma",
        rating: 4.6,
        reviews: 178,
        description: "Baskets Puma RS-X au style rétro-futuriste. Confort et design audacieux pour un look unique.",
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "New Balance 574": {
        title: "New Balance 574",
        price: "85.00",
        brand: "New Balance",
        rating: 4.7,
        reviews: 234,
        description: "Baskets New Balance 574 classiques et intemporelles. Confort exceptionnel et style décontracté.",
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Converse Chuck Taylor": {
        title: "Converse Chuck Taylor",
        price: "65.00",
        brand: "Converse",
        rating: 4.8,
        reviews: 512,
        description: "Baskets Converse Chuck Taylor iconiques. Style intemporel et polyvalent pour toutes les occasions.",
        images: [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Vans Old Skool": {
        title: "Vans Old Skool",
        price: "75.00",
        brand: "Vans",
        rating: 4.8,
        reviews: 398,
        description: "Baskets Vans Old Skool classiques avec bande latérale iconique. Style skate intemporel et confort durable.",
        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    "Dragées Amande Rose": {
        title: "Dragées Amande Rose",
        price: "12.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 167,
        description: "Dragées aux amandes enrobées de chocolat rose. Parfaites pour vos événements et célébrations. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Amande Blanche": {
        title: "Dragées Amande Blanche",
        price: "12.00",
        brand: "Maria Event",
        rating: 4.8,
        reviews: 203,
        description: "Dragées aux amandes enrobées de chocolat blanc. Élégantes et délicieuses pour tous vos événements. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Chocolat Assortis": {
        title: "Dragées Chocolat Assortis",
        price: "15.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 189,
        description: "Assortiment de dragées au chocolat en plusieurs couleurs. Idéales pour décorer vos tables de fête. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Amande Bleue": {
        title: "Dragées Amande Bleue",
        price: "12.00",
        brand: "Maria Event",
        rating: 4.7,
        reviews: 145,
        description: "Dragées aux amandes enrobées de chocolat bleu. Parfaites pour les baptêmes et événements. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    },
    "Dragées Praline": {
        title: "Dragées Praline",
        price: "18.00",
        brand: "Maria Event",
        rating: 4.9,
        reviews: 221,
        description: "Dragées pralinées de qualité supérieure. Saveur intense et texture croquante pour vos événements raffinés. Sachet de 500g.",
        images: [
            "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1587241321921-91aaaa6e3e8f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&h=600&fit=crop&sat=-100"
        ],
        sizes: ["500g", "1kg", "2kg"]
    }
};