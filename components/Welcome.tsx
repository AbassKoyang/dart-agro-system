'use client';
import { usePathname } from 'next/navigation';
import Overlay from './Overlay'
import { useEffect, useState, useRef } from 'react';

const Welcome = () => {
    const pathname = usePathname()
    const [showOverlay, setShowOverlay] = useState(false)
  
    const firstLoadRef = useRef(true)
  
    useEffect(() => {
      if (firstLoadRef.current) {
        setShowOverlay(true)
        firstLoadRef.current = false
      } else {
        setShowOverlay(false)
      }
    }, [pathname])
    
  return (
    <>
        {showOverlay && (
            <>
                <Overlay />
                <section id='welcome'  className="w-full h-dvh fixed top-0 left-0 z-[10000] bg-primary-green flex items-center justify-center">
                    <p className='font-dm-mono text-[24px] font-medium text-black max-w-[900px] text-left z-[1] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>DartAgro Systems is a global manufacturer of heavy agricultural machinery and smart farming technology. With operations across 40+ countries, the company needed a digital platform that reflects its innovation, engineering excellence, and sustainability leadership.</p>
                </section>
            </>
        )}
    </>
  )
}

export default Welcome