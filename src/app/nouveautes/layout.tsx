import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nouveautés — Derniers Arrivages",
    description:
        "Découvrez nos derniers arrivages de baskets et dragées. Soyez les premiers à profiter des nouveaux produits Maria Event.",
    alternates: { canonical: "/nouveautes" },
};

export default function NouveautesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
