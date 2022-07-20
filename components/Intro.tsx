function Intro() {
    return (
        <div className="grid grid-flow-col h-max-hero grid-cols-2 m-auto mt-28">
            <div className="w-7/12 h-auto m-auto text-justify">
                <h3 className="mb-6 font-Montserrat">
                    WHAT WE DO
                </h3>

                <h2 className="mb-6 font-SourceSerifPro leading-[1.2] text-5xl">
                    But what exactly do we do you may ask?
                </h2>

                <p className="mb-6 break-normal font-Montserrat text-base leading-nav-line-height">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                </p>

                <button>
                    EXPLORE OUR SERVICES
                </button>
            </div>

            <div className="relative">
                <img className="relative border border-black w-8/12 top-0 left-0" src="./intro image.jpeg" alt="" />
                <img className="absolute border border-black top-72 left-80 w-5/12" src="./intro smaller image.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Intro