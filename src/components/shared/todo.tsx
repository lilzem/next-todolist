import { FC } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface TodoProps {
    className?: string;
}

export const Todo: FC<TodoProps> = ({ className }) => {
    return <Container className={cn("px-1 py-3", className)}></Container>;
};
