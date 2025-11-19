import StatBox from "./StatBox"

const StatsSection = () => {
  return (
    <section className="py-14 lg:py-20 px-4 lg:px-[20px] bg-white flex items-start flex-wrap gap-6 lg:gap-14 justify-center">
        <StatBox title="35+" desc="Years of Innovation" />
        <StatBox title="40+" desc="Countries Served" />
        <StatBox title="1k+" desc="Engineers & Technicians" />
        <StatBox title="10M+" desc="Acres Impacted Globally" />
    </section>
  )
}

export default StatsSection