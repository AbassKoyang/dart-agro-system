'use client';
import { usePathname } from 'next/navigation';
import Overlay from './Overlay'
import { useEffect, useState, useRef } from 'react';
import { useStore } from '@/hooks/useStore';

const Welcome = () => {
    const pathname = usePathname()
    const [showOverlay, setShowOverlay] = useState(true);
  
    const isFirstLoad = useStore((state) => state.isFirstLoad);
    const setIsFirstLoad = useStore((state) => state.setIsFirstLoad);

  useEffect(() => {
    if (isFirstLoad) {
      setShowOverlay(false);
      setIsFirstLoad(true);
    } else {
      setShowOverlay(true);
      setIsFirstLoad(true)
    }
  }, [pathname]);
    
  return (
    <>
        {showOverlay && (
            <>
                <Overlay />
                <section id='welcome'  className="w-full h-dvh fixed top-0 left-0 z-[10000] bg-primary-green flex items-center justify-center">
                    <p className='font-dm-mono text-sm lg:text-[24px] font-medium text-black max-w-[85%] lg:max-w-[900px] text-left z-[1] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>DartAgro Systems is a global manufacturer of heavy agricultural machinery and smart farming technology. With operations across 40+ countries, the company needed a digital platform that reflects its innovation, engineering excellence, and sustainability leadership.</p>
                </section>
            </>
        )}
    </>
  )
}

export default Welcome