import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="w-full h-dvh bg-blue-800 flex items-center justify-center text-center opacity-100">
      <Welcome />
      <h1 className="text-white w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] uppercase font-bold text-[20vw] tracking-[-0.5rem] leading-[1] will-change-transform z-10">Kaelon</h1>
    </div>
  );
}
