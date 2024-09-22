import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { userId: string } }
) {
    const { userId } = params;

    const existingUser = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!existingUser) {
        // Create a new user
        await prisma.user.create({
            data: {
                id: userId,
            },
        });
    }

    if (!userId) {
        return NextResponse.json(
            { message: "User ID is required" },
            { status: 400 }
        );
    }

    try {
        const todos = await prisma.todo.findMany({
            where: { userId }, // Only fetch todos for the current user
        });

        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to fetch todos", error },
            { status: 500 }
        );
    }
}

export async function POST(
    req: Request,
    { params }: { params: { userId: string } }
) {
    const body = await req.json();
    const { text } = body;
    const { userId } = params;

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        throw new Error("User does not exist");
    }

    if (!userId) {
        return NextResponse.json(
            { message: "User ID is required" },
            { status: 400 }
        );
    }

    // Validate input
    if (typeof text !== "string" || text.trim() === "") {
        return NextResponse.json({ message: "Invalid title" }, { status: 400 });
    }

    try {
        const todo = await prisma.todo.create({
            data: {
                text,
                userId, // Associate the todo with the user
            },
        });

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to create todo", error },
            { status: 500 }
        );
    }
}
