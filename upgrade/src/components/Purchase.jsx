import { Button } from "./ui/button"

const Purchase = () => {
    return (
        <section className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="flex pt-4 px-32 rounded-xl mx-2 mt-6 md:mt-0 md:mx-0 shadow-sm 
                flex-col-reverse items-center justify-center pl-8 md:pl-32 gap-40  md:flex-row-reverse
                bg-gradient-to-br from-teal-900 to-blue-900 
                relative text-white"
                    style={{
                        backgroundImage: "radial-gradient(30% 70% at 68% 60%,#04684c,#003B47)"
                    }}>
                    <div className="">
                        <img src="/fone.png" alt="" />
                    </div>
                    {/* right-service-div */}
                    <div className="flex items-center justify-center">
                        <div className="flex mt-10 md:mt-0 gap-4 p-6 md:p-0 flex-col">
                            <h2 className=" font-helvetica text-[30px] md:text-[24px]">
                                ARE YOU READY TO<br />START?
                            </h2>
                            <p>
                                Personalize your settings,show your progress archive your<br />
                                highlights and notes automatically.Glose is the ultimate reading
                            </p>
                            <div className="flex relative">
                                <Button className="bg-[#00B512] py-5 rounded-full border-none">Open account</Button>
                                <div className="absolute left-32 h-10 flex items-center justify-center w-10 rounded-full bg-[#FBF9F1]">
                                    <img src="/arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* app download buttons */}
                <div className="flex flex-col gap-5">
                    <div>
                        <img src="/logo2.png" alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img src="/gplay.png" alt="" />
                        <img src="/apple.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Purchase
