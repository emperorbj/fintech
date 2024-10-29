import ScrollingArea from "./ScrollingArea"


const AboutUs = () => {
    return (
        <section>
            {/* About us content */}
            <div className=" md:h-[827px] flex items-center justify-center">
                <div className=" justify-between w-full  md:w-[1140px] md:h-[607px] flex flex-col-reverse 
                md:flex-row mx-0 md:mx-8 mb-2">
                    {/* left div*/}
                    <div className=" p-10 flex items-center justify-center  md:p-0">
                        <div className="mt-4 shadow-md md:mt-0 p-6  rounded-lg bg-[#D9D9D9]">
                            <img src="/stat.png" alt="stat" />
                        </div>
                    </div>
                    {/* right div */}
                    <div className=" w-full md:w-[561px]">
                        {/* scroll area header */}
                        <div className="flex flex-col md:items-start items-center">
                            <div className="flex mt-4 md:mt-0 w-fit h-8 bg-[#EAECF0] gap-3 items-center justify-center 
                            px-3 py-4 rounded-full">
                                <img className="w-[14px] h-[14px]" src="/fire.png" alt="fire-logo" />
                                <p className="text-[14px]">ABOUT US</p>
                            </div>
                            <h1 className="font-integral mt-2 text-2xl md:text-3xl">
                                ALL YOUR MONEY NEEDS<br/> IN ONE APP
                            </h1>
                        </div>
                        {/* scroll area */}
                        <div className="pb-4 px-5 md:px-0 md:pb-0">
                            <ScrollingArea/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
