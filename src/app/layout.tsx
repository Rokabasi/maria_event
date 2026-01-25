import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/StoreProvider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maria Event Shopping",
  description: "Votre boutique en ligne pour tous vos événements",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <StoreProvider>
          <Navbar />
          <div id="root" className="page-transition overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
