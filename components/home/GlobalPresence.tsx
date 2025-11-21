'use client';
import Label from '../Label'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(SplitText);

const GlobalPresence = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#global-presence-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }})
        let split = SplitText.create("#global-presence-headline", { type: "words" });
        tl.from(split.words, {
          duration: 1, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
        tl.from('#global-presence-text', {
            duration: 0.5, 
            y: 20,
            opacity: 0, 
          }, '<0.5');
          const tl2 = gsap.timeline({scrollTrigger: {
            trigger: '#global-presence-section-images-1',
            start: 'top center',
            toggleActions: 'play pause resume reverse'
          }})
          tl2.from('#global-presence-section-image-1', {
            duration: 1, 
            y: '-100%',
            opacity: 0, 
          });
        tl2.from('#global-presence-section-image-2', {
            duration: 1, 
            y: '100%',
            opacity: 0, 
          }, '<');
        tl2.from('#global-presence-section-image-3', {
            duration: 1, 
            scale: 0,
            opacity: 0, 
          }, '<');
          tl2.from('#global-presence-section-image-4', {
            duration: 1, 
            y: '-100%',
            opacity: 0, 
          }, '<');
          tl2.from('#global-presence-section-image-5', {
            duration: 1, 
            x: '100%',
            opacity: 0, 
          }, '<');
          const tl3 = gsap.timeline({scrollTrigger: {
            trigger: '#global-presence-section-images-2',
            start: 'top center',
            toggleActions: 'play pause resume reverse'
          }})
          tl3.from('#global-presence-section-image-6', {
            duration: 1, 
            y: '-100%',
            opacity: 0, 
          });
        tl3.from('#global-presence-section-image-7', {
            duration: 1, 
            scale: 0,
            opacity: 0, 
          }, '<');
        tl3.from('#global-presence-section-image-8', {
            duration: 1, 
            x: '100%',
            opacity: 0, 
          }, '<');
          tl3.from('#global-presence-section-image-9', {
            duration: 1, 
            y: '100%',
            opacity: 0, 
          }, '<');
          tl3.from('#global-presence-section-image-10', {
            duration: 1, 
            x: '-100%',
            opacity: 0, 
          }, '<');
      }, [])
  return (
    <section id='global-presence-section' className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='Global Presence'/>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 mt-6">
            <div className="w-full lg:w-[50%]">
                <h3 id='global-presence-headline' className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Trusted by Farmers in 40+ Countries.</h3>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-end">
                <p id='global-presence-text' className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>Our machines power some of the world’s most productive farms, from vast wheat fields in North America to rice paddies in Asia and maize plantations in Africa. Wherever food is grown, AgriMach technology helps it thrive.</p>
            </div>
        </div>
        <div id='global-presence-section-images-1' className="mt-6 w-full h-[200px] lg:h-[400px] grid grid-cols-5 grid-rows-2 gap-1 lg:gap-3 overflow-hidden">
            <div id='global-presence-section-image-1' className="col-span-1 row-span-2 bg-pink-500 overflow-hidden">
                <img src="/images/global-1.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-2' className="col-span-1 row-span-2 bg-white">
             <img src="/images/global-2.png" alt="Tractor image" className='object-contain object-center size-full' />
            </div>
            <div id='global-presence-section-image-3' className="col-span-1 row-span-1 bg-green-500">
                <img src="/images/global-3.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-4' className="col-span-2 row-span-1 bg-black">
             <img src="/images/global-4.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-5' className="col-span-2 row-span-1 bg-yellow-500">
                <img src="/images/global-5.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
        </div>
        <div id='global-presence-section-images-2' className="mt-3 w-full h-[359px] lg:h-[717px] grid grid-cols-5 grid-rows-3 gap-1 lg:gap-3 overflow-hidden">
            <div id='global-presence-section-image-6' className="col-span-2 row-span-2 bg-pink-500 overflow-hidden">
                <img src="/images/global-6.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-7' className="col-span-1 row-span-1 bg-purple-500">
             <img src="/images/global-10.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-8' className="col-span-2 row-span-1 bg-green-500">
                <img src="/images/global-8.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-9' className="col-span-3 row-span-2 bg-black overflow-hidden">
             <img src="/images/global-7.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div id='global-presence-section-image-10' className="col-span-2 row-span-2 bg-yellow-500">
                <img src="/images/global-9.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
        </div>
    </section>
  )
}

export default GlobalPresence