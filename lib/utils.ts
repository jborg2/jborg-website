import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function ease(x: number): number {
    return x * x;
}

export const calculateOpacity = (scrollYPercent: number) => {
    const easedPercentY = ease(scrollYPercent * 1.5);
    const opacity = Math.min(easedPercentY, 1);
    return opacity;
};