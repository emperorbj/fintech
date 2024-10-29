import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

const Testimonials = () => {
    return (
        <section className="my-3 bg-[#EAECF0] min-h-screen">
            {/* header title */}
            <div className="flex items-center flex-col gap-4 justify-center">
                <div className="flex border-2 border-white mt-20 w-fit h-8 bg-white/10 backdrop-blur-lg 
                    backdrop-filter gap-3 items-center justify-center px-3 py-4 rounded-full">
                    <img className="w-[14px] h-[14px]" src="/fire.png" alt="fire-logo" />
                    <p className="text-[14px] font-bold">TESTIMONIAL</p>
                </div>
                <div>
                    <h1 className="font-integral text-2xl md:text-4xl">GET TO KNOW OUR CLIENTS</h1>
                </div>
            </div>
            {/* TESTIMONIAL CARDS */}
            <div className="my-6 md:my-8 mx-14 md:mx-[270px] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {/* first card */}
                <Card className='bg-white p-5 md:p-0'>
                    <CardHeader>
                        <CardTitle className='flex gap-2'>
                            <img src="/qoute.png" alt="" />
                            <img src="/qoute.png" alt="" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            I like getting the SMS and knowing<br/>
                            the jobs done.I often refer to it<br/>
                            hope you get a ping today!<br/>
                            because of my product.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-2">
                            <div>
                                <img src="/avatar1.png" alt="" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <img className="h-4 w-20" src="/stars.png" alt="" />
                                <p className="font-bold">Mike Torello</p>
                                <p>CEO Initech</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                {/* 2nd card */}
                <Card className='bg-teal-950 p-5 md:p-0'>
                    <CardHeader>
                        <CardTitle className='flex gap-2'>
                            <img src="/qoute.png" alt="" />
                            <img src="/qoute.png" alt="" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white">
                            We have successfully sold digital<br/>
                            and are happy with<br/>
                            the results and look forward to<br/>
                            using it again
                        </p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-2">
                            <div>
                                <img src="/avatar2.png" alt="" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <img className="h-4 w-20" src="/stars.png" alt="" />
                                <p className="font-bold text-white">Richard Hawkins</p>
                                <p className="text-white">Marketing Manager of Upnow</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>

                {/* 3rd card */}
                <Card className='bg-white p-5 md:p-0'>
                    <CardHeader>
                        <CardTitle className='flex gap-2'>
                            <img src="/qoute.png" alt="" />
                            <img src="/qoute.png" alt="" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Design monks offers produces a<br/>
                            cots-effective setting tool having<br/>
                            the ability to post prices that you<br/>
                            that you want on exchange rate
                        </p>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-2">
                            <div>
                                <img src="/avatar3.png" alt="" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <img className="h-4 w-20" src="/stars.png" alt="" />
                                <p className="font-bold">Thomas Magnum</p>
                                <p>Barelion NSW</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex items-center justify-center">
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

export default Testimonials

