'use client';
import { useTransitionRouter } from "next-view-transitions";


const Nav = () => {
    const router = useTransitionRouter();

    const slideInOut = () => {
        document.documentElement.animate([
            {
                opacity: 1,
                transform: "translateY(0)"
            },
            {
                opacity: 0.2,
                transform: 'translateY(-55%)'
            }
    ], {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: "::view-transition-old(root)"
    })

    document.documentElement.animate([
        {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%"
        },
        {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%"
        }
], {
    duration: 1500,
    easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
    fill: 'forwards',
    pseudoElement: "::view-transition-new(root)"
})
    }
  return (
    <nav className="">
        <div className="">
            <div className="">
                <a onClick={(e) => {
                    e.preventDefault();
                    router.push("/", {
                        onTransitionReady: slideInOut,
                    })
                }} className="uppercase text-blue-500 text-xs font-semibold p-1" href="/">Index</a>
            </div>
        </div>
        <div className="flex gap-3">
            <div className="">
                <a onClick={(e) => {
                    e.preventDefault();
                    router.push("/page-2", {
                        onTransitionReady: slideInOut,
                    })
                }} className="uppercase text-blue-500 text-xs font-semibold p-1" href="/page-2">Page 2</a>
            </div>
            <div className="">
                <a onClick={(e) => {
                    e.preventDefault();
                    router.push("/page-3", {
                        onTransitionReady: slideInOut,
                    })
                }} className="uppercase text-blue-500 text-xs font-semibold p-1" href="/page-3">Page 3</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav