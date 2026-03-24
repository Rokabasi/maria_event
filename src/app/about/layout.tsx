import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos — Notre Histoire",
    description:
        "Découvrez Maria Event, votre partenaire de confiance pour baskets premium et dragées artisanales de qualité pour tous vos événements en RDC.",
    alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
