'use client'

import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Services from "@/components/services";
import MobileNavBar from "@/components/mobile-navbar";
import Contact from "@/components/contact";

import { cn } from "@/lib/utils";
import { StudioCard } from "@/components/ui/studiocard";

export default function Home() {
  return (
    <>
      <div className='block sm:hidden sticky top-0'>
        <MobileNavBar />
      </div>
      <Hero />
      <div className='hidden sm:flex items-center justify-center w-full'>
        <NavBar />
      </div>
      <div className={cn(
        "bg-gradient-to-b",
        "from-transparent via-zinc-100/50 to-zinc-100",
        "dark:from-transparent dark:via-neutral-800/50 dark:to-neutral-800",
        "min-h-screen",
        "flex flex-col justify-center items-center",
      )}>
      </div>
    </>
  );
}
