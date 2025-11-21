'use client';
import Label from '../Label'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import TeamCard from './TeamCard';
gsap.registerPlugin(SplitText, ScrollTrigger);

const TheTeam = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#the-team-section-about',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }});
        let split = SplitText.create("#the-team-headline-about", { type: "words" });
        tl.from(split.words, {
          duration: 1, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
      tl.from('#the-team-text-about', {
          duration: 1, 
          y: 30,
          opacity: 0, 
        }, '<');
      }, [])

  return (
    <section id='the-team-section-about' className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='The Team'/>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          <div className="w-full lg:w-[50%]">
              <h3 id='the-team-headline-about' className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Our People</h3>
          </div>
          <div className="w-full lg:w-[50%] flex items-start justify-end ">
              <p id='the-team-text-about' className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>Behind every machine is a team of passionate individuals — engineers, farmers, designers, and visionaries — who share one purpose: to help growers thrive.  At DartAgro System, we value integrity, teamwork, and innovation. Our people are the engine that keeps us moving forward.</p>
          </div>
        </div>
        <div className="w-full flex gap-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
        </div>
    </section>
  )
}
export default TheTeam;