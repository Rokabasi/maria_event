
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ExclusiveOffers from "./components/ExclusiveOffers/ExclusiveOffers";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import YouMightLike from "./components/YouMightLike/YouMightLike";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid />
      <ExclusiveOffers />
      <CustomerReviews />
      <YouMightLike />
      <Footer />
    </div>
  );
}
