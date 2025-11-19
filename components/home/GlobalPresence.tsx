import React from 'react'
import Label from '../Label'

const GlobalPresence = () => {
  return (
    <section className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='Global Presence'/>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 mt-6">
            <div className="w-full lg:w-[50%]">
                <h3 className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Trusted by Farmers in 40+ Countries.</h3>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-end">
                <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>Our machines power some of the world’s most productive farms, from vast wheat fields in North America to rice paddies in Asia and maize plantations in Africa. Wherever food is grown, AgriMach technology helps it thrive.</p>
            </div>
        </div>
        <div className="mt-6 w-full h-[200px] lg:h-[400px] grid grid-cols-5 grid-rows-2 gap-1 lg:gap-3 overflow-hidden">
            <div className="col-span-1 row-span-2 bg-pink-500 overflow-hidden">
                <img src="/images/global-1.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-1 row-span-2 bg-white">
             <img src="/images/global-2.png" alt="Tractor image" className='object-contain object-center size-full' />
            </div>
            <div className="col-span-1 row-span-1 bg-green-500">
                <img src="/images/global-3.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-2 row-span-1 bg-black">
             <img src="/images/global-4.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-2 row-span-1 bg-yellow-500">
                <img src="/images/global-5.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
        </div>
        <div className="mt-3 w-full h-[359px] lg:h-[717px] grid grid-cols-5 grid-rows-3 gap-1 lg:gap-3">
            <div className="col-span-2 row-span-2 bg-pink-500 overflow-hidden">
                <img src="/images/global-6.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-1 row-span-1 bg-purple-500">
             <img src="/images/global-10.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-2 row-span-1 bg-green-500">
                <img src="/images/global-8.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-3 row-span-2 bg-black overflow-hidden">
             <img src="/images/global-7.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
            <div className="col-span-2 row-span-2 bg-yellow-500">
                <img src="/images/global-9.png" alt="Tractor image" className='object-cover object-center size-full' />
            </div>
        </div>
    </section>
  )
}

export default GlobalPresence