import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/StoreProvider";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const BASE_URL = "https://www.maria-event.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maria Event — Baskets Premium & Dragées Artisanales",
    template: "%s | Maria Event",
  },
  description:
    "Maria Event, votre boutique en ligne pour baskets premium et dragées artisanales de qualité. Nike, Adidas, Jordan, Puma et plus. Livraison en RDC.",
  keywords: [
    "Maria Event",
    "baskets",
    "sneakers",
    "dragées",
    "chaussures",
    "Nike",
    "Adidas",
    "Jordan",
    "Puma",
    "New Balance",
    "Converse",
    "Vans",
    "événements",
    "mariage",
    "baptême",
    "boutique en ligne",
    "RDC",
    "Congo",
    "Kinshasa",
  ],
  authors: [{ name: "Maria Event" }],
  creator: "Maria Event",
  publisher: "Maria Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: BASE_URL,
    siteName: "Maria Event",
    title: "Maria Event — Baskets Premium & Dragées Artisanales",
    description:
      "Votre boutique en ligne pour baskets premium et dragées artisanales de qualité. Livraison en RDC.",
    images: [
      {
        url: "/logo.png",
        width: 528,
        height: 473,
        alt: "Maria Event — Baskets & Dragées",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Event — Baskets Premium & Dragées Artisanales",
    description:
      "Votre boutique en ligne pour baskets premium et dragées artisanales de qualité.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Maria Event",
              description:
                "Boutique en ligne de baskets premium et dragées artisanales de qualité pour tous vos événements.",
              url: "https://www.maria-event.com",
              logo: "https://www.maria-event.com/logo.png",
              image: "https://www.maria-event.com/logo.png",
              telephone: "+243 970 638 618",
              email: "Cendrion3@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kinshasa",
                addressCountry: "CD",
              },
              areaServed: {
                "@type": "Country",
                name: "République Démocratique du Congo",
              },
              sameAs: [
                "https://web.facebook.com/mariaevent30",
                "https://www.instagram.com/maria_event_shopping",
                "https://www.tiktok.com/@mariaevent30",
              ],
            }),
          }}
        />
        <StoreProvider>
          <ToastProvider>
            <Navbar />
            <div id="root" className="page-transition overflow-x-hidden">
              {children}
            </div>
            <Footer />
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
