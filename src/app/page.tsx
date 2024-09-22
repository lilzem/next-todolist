import { AddTodoForm, Container, Todolist } from "@/components/shared";
import { SkeletonBlock } from "@/components/shared/skeleton";
import { Suspense } from "react";

export default function Home() {
    return (
        <Container className="border-2 min-h-[600px] max-h-[800px] shadow-lg rounded-lg flex">
            <Suspense fallback={<SkeletonBlock />}>
                <Todolist />
            </Suspense>

            <AddTodoForm />
        </Container>
    );
}
