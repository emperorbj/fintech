import ServiceCard from "./ServiceCard"
import { Button } from "./ui/button"

const Services = () => {
    return (
        <section className="min-h-screen">
            {/* top-header-div */}
            <div className="md:p-8">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-3 items-center">
                        <div className="flex mt-4 md:mt-0 w-fit h-8 bg-[#EAECF0] gap-3 items-center justify-center 
                        px-3 py-4 rounded-full">
                            <img className="w-[14px] h-[14px]" src="/fire.png" alt="fire-logo" />
                            <p className="text-[14px]">SERVICES</p>
                        </div>
                        <h1 className="font-integral mt-2 text-2xl md:text-3xl">
                            CAN HELP YOU ACHIEVE<br /> FINANCIAL SUCCESS
                        </h1>
                    </div>
                </div>
            </div>
            {/* transfer across the globe div */}
            <div className="flex items-center justify-center">
                <div className="flex pt-4 px-32 rounded-xl mx-2 mt-6 md:mt-0 md:mx-0 shadow-sm 
                flex-col-reverse items-center justify-center pl-8 md:pl-32 gap-40 bg-[#EAECF0] md:flex-row">
                    <div className="relative flex">
                        <img src="/mock1.png" alt="" />
                        <img className="absolute left-[160px] md:left-[222px] md:top-10" src="/mock2.png" alt="" />
                    </div>
                    {/* right-service-div */}
                    <div className="flex items-center justify-center">
                        <div className="flex p-6 md:p-0 flex-col">
                            <div className="h-8 w-8 bg-[#00B512] rounded-full flex items-center 
                            justify-center">
                                <img src="/globe.png" alt="" />
                            </div>
                            <h2 className=" font-helvetica text-[24px]">
                                Transfers Across The<br />Globe Are Free
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* middle-service-div */}
            <div className="flex mt-4 items-center justify-center">
                <div className="flex pt-4 md:px-32 rounded-xl mx-2 mt-6 md:mt-0 md:mx-0  
                flex-col items-center justify-center md:pl-32 gap-[28px] md:flex-row">
                    {/* left */}
                    <div className="bg-[#EAECF0] flex flex-col items-center gap-8 p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col gap-4 ">
                            <div className="h-8 w-8 p-1 bg-[#00B512] rounded-full flex items-center 
                            justify-center">
                                <img src="/graph.png" alt="" />
                            </div>
                            <h2 className="font-helvetica text-[24px]">
                                Create A Card That Is<br />Unique And Customized
                            </h2>
                            <p className="text-slate-600">
                                We Offer A Comprehensive Range Of Innovative Financial<br />
                                Services.Tailored To Meet Your Needs. Our Services Include<br />
                                High-Yield Savings Account.
                            </p>
                        </div>
                        {/* first card phone screen mock up */}
                        <div className="-mb-4">
                            <img src="/tom1.png" alt="" />
                        </div>
                    </div>
                    {/* right */}
                    <div className="bg-teal-950 flex flex-col items-center gap-6 p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col gap-3 ">
                            <div className="h-8 w-8 p-1 bg-[#00B512] rounded-full flex items-center 
                            justify-center">
                                <img src="/gear.png" alt="" />
                            </div>
                            <h2 className="font-helvetica text-white text-[24px]">
                                Personalized Insights<br />And Financial Goals
                            </h2>
                            <p className="text-slate-400">
                                Savings Account That Offers Competitive Interests Rates And<br />
                                Flexible Deposit OPtions.Investment Invest Wisely With Our<br />
                                Personalized.Services Include High-Yield Savings.
                            </p>
                        </div>
                        {/* first card phone screen mock up */}
                        <div className="relative">
                            <img className="" src="/tom2.png" alt="" />
                            <img className="absolute top-16 left-[150px] md:left-[200px]" src="/tom3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* lower-service-div */}
            <div className="flex flex-col items-center justify-center">
                <ServiceCard />
                <div className="flex relative">
                    <Button className="py-5 px-8 rounded-full text-black font-bold 
                            border border-[#00B512]">View More</Button>
                    <div className="absolute left-32 h-10 flex items-center justify-center 
                            w-10 rounded-full bg-[#00B512] ">
                        <img src="/arrow-right.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
