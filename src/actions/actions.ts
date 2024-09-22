"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function addTodo(formData: FormData) {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
        redirect("/api/auth/login");
    }

    const userId = (await getUser()).id;

    const todoText = formData.get("todoText") as string;

    if (!todoText) {
        throw new Error("Todo text cannot be empty");
    }

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${userId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: todoText }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed response:", errorText);
            throw new Error(`Failed to add todo: ${errorText}`);
        }

        const data = await response.json();

        revalidatePath("/");
    } catch (error) {
        console.error("Error adding todo:", error);
        //@ts-ignore
        throw new Error(`Failed to add todo: ${error.message}`);
    }
}

export async function deleteTodo(id: string) {
    await prisma.todo.delete({
        where: {
            id,
        },
    });

    revalidatePath("/");
}

export async function completeTodo(id: string) {
    await prisma.todo.update({
        where: {
            id,
        },
        data: {
            completed: true,
        },
    });

    revalidatePath("/");
}
