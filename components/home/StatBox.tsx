
const StatBox = ({title, desc}:{title: string; desc: string}) => {
  return (
    <div className='stat-box bg-[#F1F1F185] flex flex-col items-center justify-center w-[150px] h-[100px] lg:w-[279px] lg:h-[174px] rounded-[6px] opacity-100'>
        <h4 className='font-dm-mono font-normal text-[35px] lg:text-[68px] text-primary-black leading-[40px]'>{title}</h4>
        <p className='font-dm-mono font-normal text-[12px] lg:text-[16px] text-primary-black/70 lg:mt-3 text-center'>{desc}</p>
    </div>
  )
}

export default StatBox