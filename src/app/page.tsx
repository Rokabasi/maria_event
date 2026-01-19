
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ExclusiveOffers from "./components/ExclusiveOffers/ExclusiveOffers";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import YouMightLike from "./components/YouMightLike/YouMightLike";
import Footer from "./components/Footer/Footer";
import AnimatedSection from "./components/AnimatedSection/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedSection animation="fade-up">
        <Hero />
      </AnimatedSection>
      <AnimatedSection animation="fade-bottom-left" delay={300}>
        <Categories />
      </AnimatedSection>
      <AnimatedSection animation="fade-bottom-right" delay={400}>
        <ProductGrid />
      </AnimatedSection>
      <AnimatedSection animation="fade-scale" delay={300}>
        <ExclusiveOffers />
      </AnimatedSection>
      <AnimatedSection animation="fade-left" delay={300}>
        <CustomerReviews />
      </AnimatedSection>
      <AnimatedSection animation="fade-right" delay={300}>
        <YouMightLike />
      </AnimatedSection>
      <Footer />
    </div>
  );
}
