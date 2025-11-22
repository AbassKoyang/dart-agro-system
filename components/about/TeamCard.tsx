import ArrowRightTopLink from "../ArrowRightTopLink"

const TeamCard = ({name, title, imageUrl}:{name: string; title: string; imageUrl: string}) => {
  return (
    <div className="team-card relative min-w-full lg:min-w-[600px] h-[500px] rounded-[6px] flex flex-col justify-end overflow-hidden group">
        <img src={imageUrl} alt="Team member picture" className="absolute top-0 left-0 size-full object-center object-cover z-10 group-hover:scale-120 transition-transform duration-500 ease-in-out" />
        <div className="z-30 w-full bg-linear-to-t from-black/50 to-white/0 p-6 py-4 backdrop-blur-[2px] backdrop-opacity-90 flex items-end justify-between">
            <div className="">
                <p className="text-[28px] text-white font-medium font-dm-mono">{name}</p>
                <p className="text-[18px] text-white font-normal font-dm-mono">{title}</p>
            </div>
            <ArrowRightTopLink linkStyle="size-[40px] lg:size-[45px]" svgStyle="size-[30px] lg:size-[50px]" circleFill="#CFF34B" pathFill="black" />
            </div>
    </div>
  )
}

export default TeamCard