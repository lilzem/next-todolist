"use clinet";

import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

export const Spinner = ({ className }: Props) => {
    return (
        <div
            className={cn(
                "animate-spin rounded-full h-7 w-7 border-b-2 border-black mx-auto my-2",
                className
            )}
        />
    );
};
