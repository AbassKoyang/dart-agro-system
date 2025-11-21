'use client';
import Label from "../Label"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { useEffect, useState } from "react";
gsap.registerPlugin(SplitText);

const TechnologyAndInnovation = () => {
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobileDevice(window.innerWidth < 700);
      };
  
      checkMobile();
      window.addEventListener("resize", checkMobile);
  
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#tech-and-innovation-section-about',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }})
        let split = SplitText.create("#technology-and-innovation-headline-about", { type: "words" });
        tl.from(split.words, {
          duration: 1, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
        tl.from('#technology-and-innovation-text-about', {
            duration: 0.5, 
            y: 20,
            opacity: 0, 
          });
          const tl2 = gsap.timeline({scrollTrigger: {
            trigger: '#tech-and-innovation-section-about-image',
            start: 'top center',
            toggleActions: 'play pause resume reverse'
          }})
          tl2.from('#technology-and-innovation-about-image', {
            duration: 1, 
            y: 10,
            opacity: 0, 
            stagger: 0.25
          });
      }, [])

  return (
    <section id="tech-and-innovation-section-about" className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-medium-green'>
        <Label text='Technology & Innovation'/>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
            <div className="w-full lg:w-[50%]">
                <h3 id="technology-and-innovation-headline-about" className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[650px]'>Innovation at Our Core</h3>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col items-center justify-start">
            <div className="w-full flex justify-end">
                <p id="technology-and-innovation-text-about" className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>DartAgro System’s innovation culture is built on collaboration and continuous improvement.  Our engineers, data scientists, and agronomists work side-by-side in R&D centers across the U.S. and Europe, developing next-generation systems powered by AI, IoT, and renewable energy.
                From autonomous tractors to precision irrigation networks, every DartAgro product is designed to collect, analyze, and act — turning data into smarter decisions in the field.</p>
                </div>
            </div>
        </div>
        <div id="tech-and-innovation-section-about-image" className="w-full mt-12 lg:mt-24">
            <div id="technology-and-innovation-about-image" className="w-full h-[305px] lg:h-[610px] overflow-hidden">
                    <img src="/images/tech-and-innovation-about.png" alt="Tractor image" className="w-full object-contain object-center" />
            </div>
        </div>
    </section>
  )
}

export default TechnologyAndInnovation