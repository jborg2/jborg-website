import { cn, getRandomInt } from "@/lib/utils"
import useScrollY from "@/lib/hooks/use-scrollY"
import UserStory from "@/components/user-story";
import { calculateOpacity } from "@/lib/utils";
import { StudioCard } from "./ui/studiocard";

const gridItems = [
    {
        level: 1,
        title: "Semantics Cloud",
        desc: "this is a desc random words lorem inoi adljkfh alsdkfj aklj fhkiu hfa lkjah flakjsh alkfsjh alkjdflkadjs",
        url: ""
    },
    {
        level: 1,
        title: "Auto Architecture",
        desc: "this is a desc that is way shorter yes",
        url: ""
    },
    {
        level: 1,
        title: "AutoDoc",
        desc: "this is a desc",
        url: ""
    },
    {
        level: 2,
        title: "Update 5/21",
        desc: "this is a desc",
        url: ""
    },
    {
        level: 2,
        title: "Update 5/19",
        desc: "this is a desc",
        url: ""
    },
    {
        level: 2,
        title: "Update 5/14",
        desc: "this is a desc",
        url: ""
    },
    {
        level: 3,
        title: "Some random thing",
        desc: "this is a desc",
        url: ""
    },
]

export const ShowcaseGrid = () => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12 lg:px-24",
            )}
        >
            {gridItems.map((item, i) => {
                return (
                    <StudioCard
                        key={i}
                        gradient={i % 3 + 1}
                        // gradient = {1}
                        className={cn(
                            "flex flex-col",
                            "w-full",
                            'px-8 py-4',
                            item.level === 1 ? "min-h-[250px]" : item.level == 2 ? `min-h-[100px]` : `min-h-[0px]`,
                        )}
                        onHoverOnly={true}
                    >
                        <h3 className={cn(
                            item.level === 1 ? "font-semibold text-2xl" : item.level == 2 ? "font-semibold text-xl" : "font-medium text-xl",
                            "mb-2"
                        )}>
                            {item.title}
                        </h3>
                        <p className='text-zinc-600 dark:text-zinc-400'>
                            {item.desc}
                        </p>
                    </StudioCard>
                );
            })}
        </div>
    )
}

export default function Showcase() {
    const { scrollY, scrollYPercent } = useScrollY();
    const opacity = calculateOpacity(scrollYPercent)

    return (
        <div>
            <div className={cn(
                "px-8",
                "w-full min-h-screen mx-auto",
                // "max-w-5xl"",
                // "from-white via-zinc-400/20 to-white",
                // "dark:from-black dark:via-zinc-600/20 dark:to-black",
                "pt-36"
            )}
                style={{ opacity: calculateOpacity(scrollYPercent) }}
            >
                <div className='flex flex-col items-center'>
                    <div className='flex w-full flex-col justify-center items-center'>
                        <h3
                            className={cn(
                                "text-xl font-medium",
                                "text-blue-500",
                                "mb-4",
                            )}>
                            What is jborg2?
                        </h3>
                        <h2 className={cn(
                            "text-4xl font-bold",
                            "text-zinc-800 dark:text-zinc-200",
                            "mb-16",
                        )}>
                            We build products that do stuff.
                        </h2>
                    </div>
                    <ShowcaseGrid />
                </div>
            </div>
        </div>
    )
}