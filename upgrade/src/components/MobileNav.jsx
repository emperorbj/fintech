import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MenuIcon} from "lucide-react"

const MobileNav = () => {
    return (
        <DropdownMenu >
        <DropdownMenuTrigger>
            <MenuIcon/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Personal loan</DropdownMenuItem>
            <DropdownMenuItem>One card</DropdownMenuItem>
            <DropdownMenuItem>Savings</DropdownMenuItem>
            <DropdownMenuItem>Checking</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default MobileNav
