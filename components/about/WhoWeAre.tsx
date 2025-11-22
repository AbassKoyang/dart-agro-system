'use client';
import Label from '../Label'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

const WhoWeAre = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#who-we-are-section-about',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }});
        let split = SplitText.create("#who-we-are-headline-about", { type: "words" });
        tl.from(split.words, {
          duration: 0.5, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
      tl.from('#who-we-are-text-about', {
          duration: 1, 
          y: 30,
          opacity: 0, 
        }, '<');
      }, [])

  return (
    <section id='who-we-are-section-about' className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='Who We Are'/>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          <div className="w-full lg:w-[50%]">
              <h3 id='who-we-are-headline-about' className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Our Story</h3>
          </div>
          <div className="w-full lg:w-[50%] flex items-start justify-end ">
              <p id='who-we-are-text-about' className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>What began as a small team of passionate engineers has grown into a global agri-tech company with a presence in over 40 countries.  From early innovations in machinery design to today’s cutting-edge AI-driven tractors, drones, and smart irrigation systems, DartAgro System continues to push the boundaries of agricultural performance and sustainability.
              Every product we create reflects decades of research, craftsmanship, and our dedication to delivering reliable technology that helps farmers achieve more — with less effort, less waste, and greater precision.</p>
          </div>
        </div>
    </section>
  )
}
export default WhoWeAre