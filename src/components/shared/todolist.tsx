import { FC } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";
import { Todo } from "./todo";
import { ScrollArea } from "../ui";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface TodolistProps {
    className?: string;
}

export const Todolist: FC<TodolistProps> = async ({ className }) => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
        redirect("/api/auth/login");
    }

    const user = await getUser();

    const todos = await (
        await fetch(`${process.env.KINDE_SITE_URL}/api/todos/${user.id}`, {
            method: "GET",
            cache: "no-store", // This would ensure fresh data on every request,
        })
    ).json();

    return (
        <Container
            className={cn("pl-10 pr-5 py-5 max-h-[600px] flex-1", className)}
        >
            <ScrollArea className="h-[100%] w-[100%] pr-5">
                {todos.map((todo: any) => (
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
