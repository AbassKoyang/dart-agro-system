import WhoWeAre from "@/components/about/WhoWeAre";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import OurVision from "../../components/about/OurVision";
import TechnologyAndInnovation from "@/components/about/TechnologyAndInnovation";
import Quote from "@/components/home/Quote";
import TheTeam from "../../components/about/TheTeam";

export default function About() {

  return (
    <section className="relative w-full min-h-dvh opacity-100">
      <AboutHeroSection />
      <WhoWeAre />
      <OurVision />
      <TechnologyAndInnovation />
      <TheTeam />
      <Quote />
    </section>
  );
}
