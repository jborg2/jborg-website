import { cn } from "@/lib/utils"

export const badgeColors = [
    'bg-blue-100 dark:bg-blue-500',
    'bg-green-100 dark:bg-green-500 ',
    'bg-yellow-100 dark:bg-yellow-500',
    'bg-red-100 dark:bg-red-500',
    'bg-purple-100 dark:bg-purple-500',
    'bg-pink-100 dark:bg-pink-500',
    'bg-indigo-100 dark:bg-indigo-500',
    'bg-gray-100 dark:bg-gray-500',
]

export const badgeTextColors = [
    'text-blue-600 dark:text-blue-100',
    'text-green-600 dark:text-green-100',
    'text-yellow-600 dark:text-yellow-100',
    'text-red-600 dark:text-red-100',
    'text-purple-600 dark:text-purple-100',
    'text-pink-600 dark:text-pink-100',
    'text-indigo-600 dark:text-indigo-100',
    'text-gray-600 dark:text-gray-100',
]

export function Badge({ children, ...props }: any) {
    // const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)]
    return (
        <p
            {...props}
            className={cn('px-2 py-1 transition-all rounded-lg text-white font-medium translate-y-[.2rem] shadow-sm',
                props.className
            )}
        >
            {children}
        </p>
    )
}