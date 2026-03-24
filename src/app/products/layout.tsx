import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catalogue — Baskets & Dragées",
    description:
        "Parcourez notre catalogue de baskets premium Nike, Adidas, Jordan, Puma et nos dragées artisanales. Commandez facilement via WhatsApp.",
    alternates: { canonical: "/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
