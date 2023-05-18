'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu"
import { Menu as MenuIcon } from "lucide-react"

import Link from 'next/link'
import { navItems } from '@/config/navbar'
import { useEffect } from "react"

export default function MobileNavBar(props: any) {
    const handleResize = () => {
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav
            className='fixed top-0 flex flex-row justify-between items-center bg-transparent z-50 w-full h-16'
        >
            <div
                className='container p-4 flex flex-row justify-between items-center w-full bg-background'
            >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="cursor-pointer focus:outline-none z-50"
                        >
                            <MenuIcon />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 ml-2 mt-2 bg-background text-foreground dark:bg-background dark:text-foreground border-border dark:border-neutral-700">
                        <DropdownMenuLabel>jborg2</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            {navItems.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className='cursor-pointer'
                                >
                                    <DropdownMenuItem
                                        className='cursor-pointer'
                                    >
                                        <span>{item.name}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}