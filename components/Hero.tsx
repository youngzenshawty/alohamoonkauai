import Image from "next/image"

function Hero() {

  return (
    <div id="" className="flex justify-btween mt-10 md:mt-0 flex-col-reverse md:flex-row md:h-hero">

      <div id="hero-left" className="flex m-auto items-center justify-center border-black md:w-[49.6%] h-hero overflow-hidden ">
        <img id="bannerImg" className="object-cover
         md:object-cover scale-150 h-[525px] w-[525px] shadow-lg shadow-black p-14 rounded-full z-10" src="./product/product shelf.jpg" alt="" />
        {/* <img className="hidden md:block absolute object-cover left-48 top-48 opacity-90 w-[550px] h-auto border m-auto z-20 border-black" src="./product/leahlani.jpg" alt="" /> */}
      </div>

      {/* <img id="bannerImg" className="object-contain md:object-fill md:h-hero md:w-[49.6%]" src="./teal.jpg" alt="" />*/}

      <div className="flex max-w-[95%] md:max-w-none flex-row flex-grow justify-center items-center m-auto text-center h-5/6">

        <div className="max-w-xl text-center md:hover:animate-pulse">
          <img className="w-full border-b-2 border-black pt-14 pb-6 px-14  m-auto" src="/aloha moon hor.svg" alt="" />
          <h1 className="font-Montserrat pt-5 tracking-nav-letter-spacing text-sm mb-2">MASSAGE + BODY TREATMENTS + FACIALS</h1>
          <h1 className="text-5xl leading-tight font-SourceSerifPro font-thin">We provide high quality massage services at an affordable price.</h1>

          <button className="m-10 mt-8 border border-black h-14 w-44 tracking-nav-letter-spacing  transition ease-out duration-500 hover:bg-moss-dark hover:text-off-white">WORK WITH US</button>
        </div>

      </div>
    </div>
  )
}

export default Hero