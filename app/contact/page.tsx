import ContactForm from "@/components/contact/ContactForm";
import ContactHeroSection from "@/components/contact/Hero";
import Footer from "@/components/Footer";
import HomeHeroSection from "@/components/home/HomeHeroSection";

export default function Contact() {

  return (
    <section className="relative w-full min-h-[100vh] opacity-100 overflow-x-hidden bg-white">
      <ContactHeroSection />
      <ContactForm />
      <Footer />
    </section>
  );
}
