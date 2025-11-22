'use client';
import { useGSAP } from "@gsap/react";
import StatBox from "./StatBox"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useGSAP(()=> {
        gsap.from('.stat-box', {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '#stats-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
            }
        })
    }, [])
  return (
    <section ref={sectionRef} id="stats-section" className="py-14 lg:py-20 px-4 lg:px-[20px] bg-white flex items-start flex-wrap gap-6 lg:gap-14 justify-center">
        <StatBox title="35+" desc="Years of Innovation" />
        <StatBox title="40+" desc="Countries Served" />
        <StatBox title="1k+" desc="Engineers & Technicians" />
        <StatBox title="10M+" desc="Acres Impacted Globally" />
    </section>
  )
}

export default StatsSection