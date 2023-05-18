import { cn } from "@/lib/utils"
import Hyperbadge from "@/components/ui/hyperbadge"
import useScrollY from "@/lib/hooks/use-scrollY"
import AutoDoc from "@/components/autodoc-showcase";
import UserStory from "@/components/user-story";
import { calculateOpacity } from "@/lib/utils";

export default function Contact() {
    const { scrollY, scrollYPercent } = useScrollY();
    const opacity = calculateOpacity(scrollYPercent)

    return (
        <div>
        </div>
    )
}