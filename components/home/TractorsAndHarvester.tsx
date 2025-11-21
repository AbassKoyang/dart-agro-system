'use client';
import ArrowRightTopLink from '../ArrowRightTopLink'
import Link from 'next/link'
import Label from '../Label'
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TractorsAndHarvester = () => {
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
                trigger: '#tractors-and-harvesters-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }});
        if (isMobileDevice) {
            gsap.from('#tractor-and-harvesters-full', {
                duration: 1.5, 
                y: -30,
                scale: 2,
                opacity: 0, 
                scrollTrigger:{
                    trigger: '#tractors-and-harvesters-section',
                    start: 'top center',
                    toggleActions: 'play pause resume reverse'}
              });
        } else {
            tl.from('#tractors-and-harvesters-image-left', {
                duration: 1.5, 
                y: '-100%',
                opacity: 0, 
              });
            tl.from('#tractors-and-harvesters-image-center', {
                duration: 1.5, 
                scale: 0,
                opacity: 0, 
              }, '<');
            tl.from('#tractors-and-harvesters-image-right', {
                duration: 1.5, 
                y: '100%',
                opacity: 0, 
              }, '<');
        }
        tl.from('#tractor-and-harvesters-text', {
            duration: 0.5, 
            y: 20,
            opacity: 0, 
          });
          tl.from('#tractor-and-harvesters-cta', {
            duration: 0.5, 
            y: 10,
            opacity: 0, 
          });
      }, [])


  return (
    <section className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='Precision Power for Every Farm.' />
       {isMobileDevice  ? (
            <div id='tractors-and-harvesters-section' className="w-full mt-6">
                <div id='tractor-and-harvesters-full' className="w-full">
                <img src="/images/tractor-and-harvesters-full.png" alt="Tractor image" className='w-full object-contain object-center' />
                </div>
                <div className="">
                    <h3 id='tractor-and-harvesters-text' className='text-primary-black text-[18px] lg:text-[34px] text-left font-medium font-dm-mono will-change-transform max-w-full mt-12'>Tractors & Harvesters</h3>
                    <p id='tractor-and-harvesters-text' className='font-dm-mono font-normal text-[12px] lg:text-[16px] text-primary-black/70 text-left'>Rugged, intelligent, and optimized for maximum yield efficiency.</p>

                    <Link id='tractor-and-harvesters-cta' href='' className="flex items-center gap-2.5 py-3 px-4 rounded-[40px] text-[14px] lg:text-[24px] text-primary-black bg-primary-green mt-4 font-dm-mono font-normal w-fit">
                        <span>View Range</span>
                        <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px]' svgStyle='size-[20px] lg:size-[25px]' circleFill='#121212' pathFill='white' />
                    </Link>
                </div>
            </div>
       ) : (
        <div id='tractors-and-harvesters-section' className="w-full flex items-start gap-2 mt-6 overflow-hidden">
            <div id='tractors-and-harvesters-image-left' className="flex-1">
                <img src="/images/tractor-and-harvesters-1.png" alt="Tractor image" className='w-full object-contain object-center' />
            </div>
            <div className="flex-1">
                <img id='tractors-and-harvesters-image-center' src="/images/tractor-and-harvesters-2.png" alt="Tractor image" className='w-full object-contain object-center origin-center' />
                <div className="">
                <h3 id='tractor-and-harvesters-text' className='text-primary-black text-[18px] lg:text-[34px] text-left font-medium font-dm-mono will-change-transform max-w-full mt-12'>Tractors & Harvesters</h3>
                <p id='tractor-and-harvesters-text' className='font-dm-mono font-normal text-[12px] lg:text-[16px] text-primary-black/70 text-left'>Rugged, intelligent, and optimized for maximum yield efficiency.</p>

                <Link id='tractor-and-harvesters-cta' href='' className="flex items-center gap-2.5 py-3 px-4 rounded-[40px] text-[14px] lg:text-[24px] text-primary-black bg-primary-green mt-4 font-dm-mono font-normal w-fit">
                    <span>View Range</span>
                    <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px]' svgStyle='size-[20px] lg:size-[25px]' circleFill='#121212' pathFill='white' />
                </Link>
                </div>
            </div>
            <div  id='tractors-and-harvesters-image-right' className="flex-1">
                <img src="/images/tractor-and-harvesters-3.png" alt="Tractor image" className='w-full object-contain object-center' />
            </div>
        </div>
       )}
    </section>
  )
}

export default TractorsAndHarvester