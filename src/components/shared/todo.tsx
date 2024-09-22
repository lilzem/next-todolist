"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import { completeTodo, deleteTodo } from "@/actions/actions";

interface TodoProps {
    id: string;
    text: string;
    completed: boolean;
    className?: string;
}

export const Todo: FC<TodoProps> = ({ className, text, completed, id }) => {
    return (
        <div
            className={cn(
                "px-1 py-5 flex border-b-2 justify-between",
                className
            )}
        >
            <Title
                className={completed ? "line-through" : ""}
                size="md"
                text={text}
            />

            <div className="flex itemc-center gap-3">
                {!completed && (
                    <Button
                        onClick={() => completeTodo(id)}
                        className="text-lg"
                    >
                        Complete
                    </Button>
                )}
                <Button
                    onClick={() => deleteTodo(id)}
                    className="text-lg"
                    variant="destructive"
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};
