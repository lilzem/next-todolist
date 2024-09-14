import { FC } from "react";

import { cn } from "@/lib/utils";

import { Button, Input } from "../ui";
import { addTodo } from "@/actions/actions";

interface AddTodoFormProps {
    className?: string;
}

export const AddTodoForm: FC<AddTodoFormProps> = async ({ className }) => {
    return (
        <form
            action={addTodo}
            className={cn(
                "border-l-2 p-5 flex flex-col min-h-[300px] min-w-[300px] gap-5",
                className
            )}
        >
            <Input
                name="todoText"
                className="text-lg"
                placeholder="Type your todo..."
            />

            <Button className="text-lg">Add Todo</Button>
        </form>
    );
};
