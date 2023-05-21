'use client'

import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import MobileNavBar from "@/components/mobile-navbar";

import { cn } from "@/lib/utils";
import { Posts } from "@/components/posts";
import { allPosts, Post } from 'contentlayer/generated'

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
        "flex flex-col",
        "pt-24",
      )}>
        <div className='mx-auto max-w-2xl w-full'>
          <Posts posts={allPosts as Post[]} />
        </div>
      </div>
    </>
  );
}
