import React from 'react'

const Label = ({text}:{text: string}) => {
  return (
    <div className="p-[10px] bg-secondary-green flex items-center gap-2 lg:gap-3 w-fit">
                <div className="size-[16px] lg:size-[20px] bg-primary-green rounded-full"></div>
                <p className='text-[12px] lg:text-[16px] text-primary-black font-normal font-dm-mono uppercase'>{text}</p>
            </div>
  )
}

export default Label