import { FC } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface AddTodoFormProps {
    className?: string;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ className }) => {
    return (
        <Container className={cn("border-l-2 p-5", className)}>
            lalala
        </Container>
    );
};
