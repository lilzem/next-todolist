import { FC } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

interface SkeletonProps {
    className?: string;
}

export const SkeletonBlock: FC<SkeletonProps> = ({ className }) => {
    return (
        <Container
            className={cn(
                "pl-10 pr-5 py-5 max-h-[600px] flex-1 flex flex-col gap-3",
                className
            )}
        >
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
            <Skeleton className="h-[50px] w-[100%]" />
        </Container>
    );
};
