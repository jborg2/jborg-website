'use client'

import Link from 'next/link'
import { navItems } from '@/config/navbar'

import { cn } from "@/lib/utils"
import { buttonVariants } from './shadcn-ui/button'
import useScrollY from "@/lib/hooks/use-scrollY";

export default function NavBar(props: any) {

        const { scrollY, scrollYPercent } = useScrollY();

    function ease(x: number): number {
        return x * x * x * x;
    }

    const calculateOpacity = (scrollYPercent: number) => {
        const easedPercentY = ease(scrollYPercent);
        const opacity = Math.min(easedPercentY, 1);
        return opacity;
    };

    const opacity = calculateOpacity(scrollYPercent);

    return (
        <nav
            style={{ opacity: calculateOpacity(scrollYPercent) }}
            className='fixed top-0 flex flex-row justify-between items-center bg-transparent z-50 w-full h-16'
        >
            <div
                className='container p-4 flex flex-row justify-between items-center w-full'
            >
                <ul
                    className='flex flex-row items-center w-full gap-4'
                >
                    {navItems.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "link" }),
                                    // handle the case where its "invisible" but still clickable, before user has scrolled down
                                    opacity > 0.08 ? "block" : "hidden"
                                )}
                            >
                                <li>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}