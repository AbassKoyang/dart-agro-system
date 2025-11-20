'use client';
import ArrowRightTopLink from '../ArrowRightTopLink'
import Link from 'next/link'
import Label from '../Label'
import { useEffect, useState } from 'react';

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


  return (
    <section className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='Precision Power for Every Farm.' />
       {isMobileDevice  ? (
            <div className="w-full mt-6">
                <div className="w-full">
                <img src="/images/tractor-and-harvesters-full.png" alt="Tractor image" className='w-full object-contain object-center' />
                </div>
                <div className="">
                    <h3 className='text-primary-black text-[18px] lg:text-[34px] text-left font-medium font-dm-mono will-change-transform max-w-full mt-12'>Tractors & Harvesters</h3>
                    <p className='font-dm-mono font-normal text-[12px] lg:text-[16px] text-primary-black/70 text-left'>Rugged, intelligent, and optimized for maximum yield efficiency.</p>

                    <Link href='' className="flex items-center gap-2.5 py-3 px-4 rounded-[40px] text-[14px] lg:text-[24px] text-primary-black bg-primary-green mt-4 font-dm-mono font-normal w-fit">
                        <span>View Range</span>
                        <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px]' svgStyle='size-[20px] lg:size-[25px]' />
                    </Link>
                </div>
            </div>
       ) : (
        <div className="w-full flex items-start gap-2 mt-6">
            <div className="flex-1">
                <img src="/images/tractor-and-harvesters-1.png" alt="Tractor image" className='w-full object-contain object-center' />
            </div>
            <div className="flex-1">
                <img src="/images/tractor-and-harvesters-2.png" alt="Tractor image" className='w-full object-contain object-center' />
                <div className="">
                <h3 className='text-primary-black text-[18px] lg:text-[34px] text-left font-medium font-dm-mono will-change-transform max-w-full mt-12'>Tractors & Harvesters</h3>
                <p className='font-dm-mono font-normal text-[12px] lg:text-[16px] text-primary-black/70 text-left'>Rugged, intelligent, and optimized for maximum yield efficiency.</p>

                <Link href='' className="flex items-center gap-2.5 py-3 px-4 rounded-[40px] text-[14px] lg:text-[24px] text-primary-black bg-primary-green mt-4 font-dm-mono font-normal w-fit">
                    <span>View Range</span>
                    <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px]' svgStyle='size-[20px] lg:size-[25px]' />
                </Link>
                </div>
            </div>
            <div className="flex-1">
                <img src="/images/tractor-and-harvesters-3.png" alt="Tractor image" className='w-full object-contain object-center' />
            </div>
        </div>
       )}
    </section>
  )
}

export default TractorsAndHarvester