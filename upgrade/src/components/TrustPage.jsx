import { Button } from "./ui/button"


const TrustPage = () => {
    return (
        <section className="bg-gradient-to-br from-teal-900 to-blue-900 
        relative min-h-screen flex items-center justify-center text-white"
            style={{
                backgroundImage: "radial-gradient(30% 70% at 60% 50%,#04684c,#003B47)"
            }}>
            <div className="mx-4 md:mx-8 flex flex-col-reverse md:flex-row items-center gap-28">
                {/* left div */}
                <div className="-mt-6 md:mt-0 p-14 md:p-0">
                    <img src="/phonecard.png" alt="" />
                </div>
                {/* right div */}
                <div className="flex mt-10 md:mt-0 items-center justify-center">
                    <div className="flex flex-col gap-3 md:items-start items-center">
                        <div className="flex w-fit h-8 bg-white/20 backdrop-blur-lg 
                        backdrop-filter gap-3 items-center justify-center px-3 py-4 rounded-full">
                            <img className="w-[14px] h-[14px]" src="/fire.png" alt="fire-logo" />
                            <p className="text-[14px] text-white">TRUSTWORTHINESS</p>
                        </div>
                        <h1 className="font-integral mt-2 text-2xl md:text-3xl">
                            ALL THE FEATURES<br /> IN ONE APP
                        </h1>
                        <ul>
                            <li className=" text-[16px]">Our mission is to Make Finance More Accessible,Transparent and Secure<br />
                                For everyone with Cutting edge Tech.</li>
                        </ul>
                        <div className="flex relative">
                            <Button className="bg-[#00B512] py-5 px-8 rounded-full border-none">Get Started</Button>
                            <div className="absolute left-32 h-10 flex items-center justify-center w-10 rounded-full bg-[#FBF9F1]">
                                <img src="/arrow.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TrustPage
