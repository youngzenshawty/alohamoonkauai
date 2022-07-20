import { useRef, useEffect } from "react"


function Options() {
  const optionsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = optionsRef.current;
  }, [])

  return (
    <div ref={optionsRef} className="flex bg-moss items-center self-center text-center m-auto border border-black z-40">
        <div className="m-auto flex-nowrap space-y-20 md:space-x-20 md:space-y-0 p-20 font-Montserrat">
        <button id="options-button" className="border border-black w-60 h-60 rounded-full">
        EXPLORE PORTFOLIO
        </button>
        <button className="border border-black w-60 h-60 rounded-full hover:bg-off-white hover:animate-pulse">
        DISCOVER SERVICES
        </button>
        <button className="border border-black w-60 h-60 rounded-full">
        LET'S COLLABORATE
        </button>
        </div>
    </div>
  )
}

export default Options