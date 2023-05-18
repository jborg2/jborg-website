import { Card } from '@/components/shadcn-ui/card'
import { cn } from '@/lib/utils'

export default function AutoDoc() {
    return (
        <Card
            className={cn(
                'w-full h-96 shadow-lg',
                "flex flex-col justify-center-items-center",
                "bg-white dark:bg-neutral-900 dark:bg-gradient-to-tr from-neutral-900 via-zinc-500/20 to-neutral-900",
                "dark:border-neutral-700",
                "rounded-xl",
                "p-8",
                "mb-16",
            )}
        >
            <div>
                User Story Goes here
            </div>
        </Card>
    )
}