

const Footer = () => {
    return (
        <footer className="mt-8 md:mt-0">
            <div className="flex flex-col gap-6 items-center justify-center">
                <div>
                    <ul className="flex gap-10 flex-wrap items-center justify-center text-slate-500">
                        <li>Personal loan</li>
                        <li>One card</li>
                        <li>Savings</li>
                        <li>Checking</li>
                        <li>Contact</li>
                        <li>Help</li>
                        <li>Support</li>
                    </ul>
                </div>
                    {/* socials */}
                <div className="flex gap-3">
                    <div className="flex h-8 w-8 rounded-full items-center 
                    justify-center bg-[#00B512]">
                        <img src="/x.png" alt="" />
                    </div>
                    <div className="flex h-8 w-8 rounded-full items-center 
                    justify-center bg-[#00B512]">
                        <img src="/fb.png" alt="" />
                    </div>
                    <div className="flex h-8 w-8 rounded-full items-center 
                    justify-center bg-[#00B512]">
                        <img src="/insta.png" alt="" />
                    </div>
                    <div className="flex h-8 w-8 rounded-full items-center 
                    justify-center bg-[#00B512]">
                        <img src="/ln.png" alt="" />
                    </div>
                </div>

                <div>
                    <p><span className="font-bold">Send Your Feedback:</span>moc.edargpu@tcatnot</p>
                </div>

                <div>
                    <ul className="flex text-slate-500 gap-4 flex-wrap">
                        <li className="border-r-4 border-slate-300 pr-5">Privacy and Policy</li>
                        <li className="border-r-4 border-slate-300 pr-5">Terms & Conditions</li>
                        <li className="border-r-4 border-slate-300 pr-5">Cookie Notice</li>
                        <li className="border-r-4 border-slate-300 pr-5">Copyright Policy</li>
                        <li>Data Policy</li>
                    </ul>
                </div>

                <div>
                    <p className="text-slate-500">© 2024 Design Monks.All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
