import WhoWeAre from "@/components/about/WhoWeAre";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import OurVision from "../../components/about/OurVision";
import TechnologyAndInnovation from "@/components/about/TechnologyAndInnovation";
import Quote from "@/components/home/Quote";
import TheTeam from "../../components/about/TheTeam";
import Form from "@/components/about/Form";
import Footer from "@/components/Footer";

export default function About() {

  return (
    <section className="relative w-full min-h-[100vh] opacity-100 overflow-x-hidden">
      <AboutHeroSection />
      <WhoWeAre />
      <OurVision />
      <TechnologyAndInnovation />
      <TheTeam />
      <Form />
      <Quote />
      <Footer />
    </section>
  );
}
