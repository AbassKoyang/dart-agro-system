import ContactForm from "@/components/contact/ContactForm";
import ContactHeroSection from "@/components/contact/Hero";
import Footer from "@/components/Footer";
import HomeHeroSection from "@/components/home/HomeHeroSection";

export default function Contact() {

  return (
    <section className="relative w-full min-h-dvh opacity-100">
      <ContactHeroSection />
      <ContactForm />
      <Footer />
    </section>
  );
}
