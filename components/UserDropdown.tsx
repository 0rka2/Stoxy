'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import {NAV_ITEMS} from "@/lib/contants";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async() => {
        router.push("/signin");
    }

    const user= {name: 'john', email: 'okokok@gmail.com'};
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://media.discordapp.net/attachments/887186049997082667/1443767739125862420/heres-a-bunch-of-random-pictures-from-my-photos-v0-m2bl5tmn09ce1.webp?ex=6932d6bc&is=6931853c&hm=995a4efd9311e40e1aa3a05634a983828c213ec66e6cc00db5c23e1d208ef260&=&format=webp&width=893&height=500" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className='text-base font-medium text-gray-400'>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400 ">
                <DropdownMenuLabel>

                    <div className="flex relative items-cente gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://media.discordapp.net/attachments/887186049997082667/1443767739125862420/heres-a-bunch-of-random-pictures-from-my-photos-v0-m2bl5tmn09ce1.webp?ex=6932d6bc&is=6931853c&hm=995a4efd9311e40e1aa3a05634a983828c213ec66e6cc00db5c23e1d208ef260&=&format=webp&width=893&height=500" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                        <span className='text-base font-medium' text-gray-400>
                            {user.name}
                        </span>
                            <span className="text-sm text-gray-500 ">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600 "/>
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600 "/>
                <nav className="sm:hidden">
                    <NavItems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
