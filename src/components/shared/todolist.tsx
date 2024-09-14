import { FC } from "react";

import { cn } from "@/lib/utils";
import prisma from "@/lib/db";

import { Container } from "./container";
import { Todo } from "./todo";
import { ScrollArea } from "../ui";
import { Todo as TodoModel } from "../../../prisma/generated/client";

interface TodolistProps {
    className?: string;
}

export const Todolist: FC<TodolistProps> = async ({ className }) => {
    const todos = await prisma.todo.findMany();

    return (
        <Container
            className={cn(
                "pl-10 pr-5 py-5 max-h-[400px] flex-1 gap-5",
                className
            )}
        >
            <ScrollArea className="h-[100%] w-[100%] pr-5">
                {todos.map((todo: TodoModel) => (
                    <Todo
                        id={todo.id}
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        className="last:border-b-0"
                    />
                ))}
            </ScrollArea>
        </Container>
    );
};
