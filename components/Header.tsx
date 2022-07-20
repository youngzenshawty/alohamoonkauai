import { useEffect, useRef } from "react";


function Header() {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <div className="flex z-50 bg-off-white m-auto mx-5 h-20 max-h-20 min-h-max md:justify-around justify-between items-center font-extralight font-Montserrat text-nav-font-size leading-nav-line-height p-4 tracking-nav-letter-spacing md:mx-32 opacity-100">
        <img className="hidden md:block w-32" src="/aloha moon offset.svg" alt="" />
        <img className="md:hidden w-6" src="/moon.svg" alt="" />

        <div className="hidden md:flex m-auto space-x-16 group">
            <h1 className="hover:cursor-pointer hover:scale-110 hover:colo">ABOUT US</h1>
            <h1 className="hover:cursor-pointer hover:scale-110">SERVICES</h1>
            <h1 className="hover:cursor-pointer hover:scale-110">PORTFOLIO</h1>
        </div>


<button className="hidden md:block border border-black h-12 w-32 tracking-nav-letter-spacing transition ease-out duration-500 hover:bg-gray-800 hover:text-off-white">
    LET'S CHAT
</button>


<button onClick={handleClick}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:hidden" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
</button>

    </div>

  )
}

export default Header