import { FC } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface TodolistProps {
    className?: string;
}

export const Todolist: FC<TodolistProps> = ({ className }) => {
    return (
        <Container className={cn("p-5 flex-1", className)}>todolist</Container>
    );
};
