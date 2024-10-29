import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ServiceCard = () => {
    return (
        <div className="my-6 md:my-8 mx-14 md:mx-[270px] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {/* first card */}
            <Card className='bg-[#E2FF54] p-10 md:p-0'>
                <CardHeader>
                    <CardTitle className=''>
                        <h2 className="font-helvetica text-[24px] font-semibold">
                            100%<br/>Dedication
                        </h2>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                    We Offer A Comprehensive Range Of Innovative Financial<br/>
                    Services.Tailored To Meet Your Needs
                    </p>
                </CardContent>
            </Card>
            {/* 2nd card */}
            <Card className='relative'>
                <img className="-z-10 mt-6 ml-[129px] md:ml-[69px]" src="/slantyphone.png" alt="" />
                <CardHeader className='absolute top-5 z-10'>
                    <CardTitle className='flex flex-col gap-3'>
                        <div className="h-9 w-9 rounded-full flex items-center justify-center bg-[#00B512]">
                            <img src="/dollar.png" alt="" />
                        </div>
                        <h2 className="font-helvetica text-[24px] font-semibold">
                            Hold Money In<br/>30+ Currencies
                        </h2>
                    </CardTitle>
                </CardHeader>
            </Card>
            {/* 3rd card */}
            <Card className='bg-teal-600 p-28 md:p-0 flex items-center justify-center'>
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-[24px] text-slate-100">
                            Visit Our<br/>Service Page
                        </h2>
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default ServiceCard
