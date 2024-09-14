import { AddTodoForm, Container, Todolist } from "@/components/shared";

export default function Home() {
    return (
        <Container className="border-2 shadow-lg rounded-lg flex">
            <Todolist />

            <AddTodoForm />
        </Container>
    );
}
