import GlobalPresence from "@/components/home/GlobalPresence";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import StatsSection from "@/components/home/StatsSection";
import Sustainability from "@/components/home/Sustainability";
import TechnologyAndInnovation from "@/components/home/TechnologyAndInnovation";
import TractorsAndHarvester from "@/components/home/TractorsAndHarvester";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {

  return (
    <section className="relative w-full min-h-dvh opacity-100">
      <HomeHeroSection />
      <StatsSection/>
      <WhoWeAre />
      <TractorsAndHarvester />
      <TechnologyAndInnovation />
      <Sustainability />
      <GlobalPresence />
    </section>
  );
}
