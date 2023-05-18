import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { cn } from "@/lib/utils"
import { navItems } from '@/config/navbar'
import { Separator } from "./shadcn-ui/separator";
import { siteConfig } from "@/config/site";
import ContactButton from "./ui/contactbutton";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

function NavItems({ start, end, className }: any) {
    return (
        <>
            {navItems
                .filter((_, i) => i >= start && i < end)
                .map((item, i) => (
                    <Link href={item.href} className={cn(
                        "text-sm duration-100",
                        className ? className : ""
                    )}
                        key={i}>
                        <li
                            className='hover:bg-gray-200 hover:dark:bg-neutral-800 px-2 py-1 rounded-lg text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                        >
                            {item.name}
                        </li>
                    </Link>
                ))}
        </>
    )
}

export default function Hero() {
    return (
        <div className={cn("flex flex-col items-center w-screen min-h-screen overflow-hidden justify-center",
            // "bg-gradient-to-b",
            "max-h-screen",
            "from-white via-zinc-400/20 to-white",
            "dark:from-black dark:via-zinc-600/20 dark:to-neutral-900",
            "gap-12"
        )}>
            {/* <nav className="animate-fade-in p-4 rounded-lg hidden sm:flex">
                <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <div className='flex flex-row justify-center items-center gap-8'>
                        <NavItems
                            start={0}
                            end={3}
                        />
                    </div>
                    <Separator
                        className="block my-0 sm:hidden"
                        color="zinc-500"
                    />
                    <div className='flex flex-row justify-center items-center gap-6'>
                        <NavItems
                            start={3}
                            end={5}
                        />
                    </div>
                </ul>
            </nav> */}
            <div className={cn(
                "hidden w-screen h-px animate-glow md:block animate-fade-left",
                "bg-gradient-to-r",
                "from-zinc-700/0 via-zinc-700/50 to-zinc-700/0",
                "dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0"
            )} />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className={cn(
                "z-10",
                "text-4xl text-transparent duration-1000",
                "bg-black dark:bg-white",
                "cursor-default animate-title",
                "font-display sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl-text-9xl",
                "whitespace-nowrap bg-clip-text",
                "tracking-wide"
                // "text-edge-outline"
            )}
            >
                {/* <span className='bg-gradient-to-tr from-zinc-200 via-neutral-300 to-gray-500 bg-clip-text text-edge-outline'>jborg</span>{' '} */}
                <span className='text-edge-outline'>Everman - Haygood</span>
            </h1>
            {/* <h2 className="text:lg sm:text-xl md:text-2xl text-display text-foreground dark:text-foreground animate-fade-in">
                    Consulting & Solutions
            </h2> */}
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="text-center animate-fade-in">
                {/* <h2 className="text-base text-zinc-500">
                    We build pragmatic tech.
                </h2> */}
                <ContactButton />
            </div>
        </div>
    );
}
