import Navbar from "@/components/Navbar"
import { Button } from "./ui/button"


const Header = () => {
    return (
        <header className="bg-gradient-to-br from-teal-900 to-blue-900 
        relative min-h-screen text-white"
            style={{
                backgroundImage: "radial-gradient(30% 70% at 60% 00%,#04684c,#003B47)"
            }}>
            <Navbar/>
            {/* background gradient grid pattern */}
            <img className="top-0 absolute" src="/bg.png" alt="pattern" />
            {/* header content wrapper */}
            <div className="flex items-center justify-center">
                {/* main div */}
                <div className=" mt-24 md:mt-20 flex flex-col md:flex-row items-center 
                justify-between w-full md:w-[1140px] h-[700px] md:h-[576px]">
                    {/* left header content */}
                    <div className="px-8 md:px-0 mt-10 md:mt-0 w-full md:w-[60%] flex flex-col gap-6 md:gap-8">
                        <div className="flex w-fit h-8 bg-white/20 backdrop-blur-lg 
                        backdrop-filter gap-3 items-center justify-center px-3 py-4 rounded-full">
                            <img className="w-[14px] h-[14px]" src="/fire.png" alt="fire-logo" />
                            <p className="text-[14px] text-white">100% TRUSTED PLATFORM</p>
                        </div>
                        <div>
                            <h1 className="font-integral text-2xl md:text-4xl">Finance with Security And<br/>
                            <span className="text-[#E2FF54]">FLEXIBILITY</span></h1>
                        </div>
                        <div className="md:pr-20">
                            <p className="text-xl leading-6 md:text-lg md:leading-5">
                            no-fee checking account with cash back rewards.
                            Enjoy fee-free banking and earn cash back on your 
                            everyday purchases.
                            </p>
                        </div>
                        <div className="flex relative">
                            <Button className="bg-[#00B512] py-5 rounded-full border-none">Open account</Button>
                            <div className="absolute left-32 h-10 flex items-center justify-center w-10 rounded-full bg-[#FBF9F1]">
                                <img src="/arrow.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*Right div phone mock up  */}
                    <div className="w-full mb-4 md:mb-0 md:w-[40%] h-[260px] 
                    flex items-center justify-center md:h-[550px] mt-4">
                        <img className="object-cover h-full" src="/phone1.png" alt="header-phone-mockup" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
