import Form from "@/components/about/Form";
import Footer from "@/components/Footer";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import Quote from "@/components/home/Quote";
import ProductsHeroSection from "@/components/products-and-solutions/Hero";
import ProductsAndCategories from "@/components/products-and-solutions/ProductAndCategories";

export default function Products() {

  return (
    <section id="products-hero-section" className="relative w-full min-h-[100vh] opacity-100 overflow-x-hidden bg-white">
      <ProductsHeroSection />
      <ProductsAndCategories />
      <Form />
      <Quote />
      <Footer />
    </section>
  );
}