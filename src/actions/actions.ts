"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function addTodo(formData: FormData) {
    const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    if (!isLoggedIn) {
        redirect("/api/auth/login");
    }

    await prisma.todo.create({
        data: {
            text: formData.get("todoText") as string,
        },
    });

    revalidatePath("/");
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
