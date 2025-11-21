
const TeamCard = () => {
  return (
    <div className="relative flex-1 h-[612px] radius-[6px] flex flex-col justify-end">
        <img src="/images/our-vision-5.png" alt="Team member picture" className="absolute top-0 left-0 size-full object-center object-cover z-10" />
        <div className="z-30 w-full h-[50px] bg-linear-to-t from-white/10 to-white/0 backdrop-blur-md opacity-75"></div>
        <div className="z-30 w-full h-[50px] bg-linear-to-b from-white/30 to-white/10 backdrop-blur-md opacity-75"></div>
    </div>
  )
}

export default TeamCard