
import { ScrollArea} from "@/components/ui/scroll-area"

const AboutUsInfo = [
    {
        title:'Expenses Tracker',
        info:'Our comprehensive selection of medications, supplements, and healthcare products .',
        bgColor:'#F1FFD2',
        borderColor:'#F1FFD2'
    },
    {
        title:'Crypto Connection',
        info:'From advanced imaging technology such as MRI and CT scanners to precision surgical tools.',
        bgColor:'#FFFFFF',
        borderColor:'#E5E5E5'
    },
    {
        title:'Automated Invoicing ',
        info:'We are committed to leveraging the latest innovations in medical technology.',
        bgColor:'#FFFFFF',
        borderColor:'#E5E5E5'
    },
    {
        title:'Expenses Tracker',
        info:'Our comprehensive selection of medications, supplements, and healthcare products .',
        bgColor:'#FFFFFF',
        borderColor:'#E5E5E5'
    },
]
const ScrollingArea = () => {
    return (
        <ScrollArea className='w-full  md:w-[571px] mt-10 h-[400px] rounded-md'>
            <div className="flex flex-col gap-3">
                {
                    AboutUsInfo.map((about,index)=>(
                        <div
                        style={{backgroundColor:about.bgColor,borderBlockColor:about.borderColor}} 
                        className="rounded-lg ml-4 md:ml-6 border w-[350px] md:w-[500px] h-[140px] 
                        md:h-[134px] py-3 px-8 md:px-4" key={index}>
                            <h2 className="font-bold text-[20px]">{about.title}</h2>
                            <p className="text-[16px] text-[#6B6969]">{about.info}</p>
                        </div>
                    ))
                }
                {/* <ScrollBar orientation="vertical"/> */}
            </div>
        </ScrollArea>
    )
}

export default ScrollingArea
