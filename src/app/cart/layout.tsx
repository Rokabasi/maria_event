import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panier",
    description: "Consultez votre panier et finalisez votre commande Maria Event via WhatsApp.",
    robots: { index: false, follow: false },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
    return children;
}
