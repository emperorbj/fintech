import { Button } from "./ui/button"

const Featured = () => {
    return (
        <section>
        {/* About us content */}
        <div className=" md:h-[750px] flex items-center justify-center">
            <div className=" justify-between w-full  md:w-[1140px] md:h-[456px] flex flex-col 
            md:flex-row mx-0 md:mx-8 mb-2">
                {/* left div*/}
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-3 md:items-start items-center">
                        <div className="flex mt-4 md:mt-0 w-fit h-8 bg-[#EAECF0] gap-3 items-center justify-center 
                        px-3 py-4 rounded-full">
                            <img className="w-[14px] h-[14px]" src="/fire.png" alt="fire-logo" />
                            <p className="text-[14px]">FEATURED</p>
                        </div>
                        <h1 className="font-integral mt-2 text-2xl md:text-3xl">
                            ALL THE FEATURES<br/> IN ONE APP
                        </h1>
                        <ul className="px-10 md:px-0">
                            <li className="list-disc text-[16px] text-[#676666]">Get 3% cash back on everyday purchases 2% on<br/>everything else</li>
                            <li className="list-disc text-[16px] text-[#676666]">Extra Spending Power when you have Rewards Checking<br/> through Upgrade</li>
                        </ul>
                        <div className="flex relative">
                            <Button className="py-5 px-8 rounded-full text-black font-bold 
                            border border-[#00B512]">Get Started</Button>
                            <div className="absolute left-32 h-10 flex items-center justify-center 
                            w-10 rounded-full bg-[#00B512] ">
                                <img src="/arrow-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right div */}
                <div className="mt-4 border-none p-10 md:p-0 md:mt-0 w-full md:w-[561px]">
                
                    <img className="shadow-md" src="twophones.png" alt="twophones" />
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Featured
