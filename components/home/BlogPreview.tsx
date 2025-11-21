'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

const BlogPreview = ({title, date, text, imageUrl, id}:{title: string; text: string; date: string; imageUrl: string; id: string}) => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: `#${id}`,
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }})
        tl.from(`#${id}`, {
            duration: 1, 
            y: 30,
            opacity: 0, 
          });
      }, [])

  return (
    <Link id={id} href='#' className='w-full lg:h-[392px] flex flex-col lg:flex-row justify-between'>
        <div className="w-full lg:w-fit lg:h-full flex flex-col lg:flex-row items-start gap-5">
            <div className="w-full lg:w-[518px] h-[392px] lg:h-full overflow-hidden">
                <img src={imageUrl} alt="Blog preview image" className='size-full object-center object-cover' />
            </div>
            <div className="lg:h-full flex flex-col justify-between">
                <h5 className='text-primary-black text-xl lg:text-2xl text-left font-medium font-dm-mono w-fit max-w-[450px]'>{title}</h5>
                <p className='font-dm-mono font-normal text-[16px] lg:text-[24px] text-primary-black/70 text-left hidden lg:block'>{date}</p>
            </div>
        </div>
        <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[382px] mt-2 lg:m-0'>{text}</p>
         <p className='font-dm-mono font-normal text-[16px] lg:text-[24px] text-primary-black/70 text-left lg:hidden mt-2'>{date}</p>
    </Link>
  )
}

export default BlogPreview