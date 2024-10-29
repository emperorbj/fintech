

import MobileNav from "./MobileNav"
import { Button } from "./ui/button"


const Navbar = () => {
    return (
        <div className="flex z-10 w-full absolute  items-center justify-between py-6 px-10">
            {/* logo */}
            <div>
                <img src="/logo1.png" alt="logo" />
            </div>
            {/*DESKTOP navigation menu */}
            <div className="hidden md:block">
                <ul className="flex gap-6">
                    <li>Personal loan</li>
                    <li>One card</li>
                    <li>Savings</li>
                    <li>Checking</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="hidden md:block">
                <Button>Sign in</Button>
            </div>
            {/* MOBILE NAVIGATION */}
            <div className="block md:hidden">
                <MobileNav/>
            </div>
        </div>
    )
}

export default Navbar
