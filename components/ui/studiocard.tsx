import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useMouseInElement } from '@/lib/hooks/use-mouse-in-element';

export const StudioCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const { elementRef, elementX, elementY } = useMouseInElement();

    return (
        <div
            ref={elementRef as React.RefObject<HTMLDivElement>}
            style={{
                '--x': `${elementX}px`,
                '--y': `${elementY}px`,
            } as React.CSSProperties}
            className={cn(
                'border-gradient group relative h-full rounded-xl',
                // 'bg-gray-700',
                'p-4 before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl lg:p-8',
                className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-[11px]",
                    "bg-white shadow-md dark:shadow-none dark:bg-neutral-800",
                    "transition-colors duration-300 group-hover:bg-neutral-100 dark:group-hover:bg-[#27272a]"
                )}
            ></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};