"use client";

import { FC } from "react";
import {
    LoginLink,
    LogoutLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

import { Container } from "./container";
import { Button, Spinner } from "../ui";

import { cn } from "@/lib/utils";
import { Title } from "./title";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

    return (
        <header className={cn("border-b", className)}>
            <Container className="flex items-center justify-between py-8 px-3">
                <div className="flex gap-3 items-center">
                    <Image src="/logo.png" alt="Logo" width={30} height={30} />
                    <Title
                        className="font-bold"
                        size="md"
                        text="Next-TodoList"
                    />
                </div>
                {/* {isAuthenticated ? (
                    <div className="flex justify-between items-center gap-4">
                        {user?.picture ? (
                            <Image
                                src={user?.picture}
                                alt="Profile picture"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        ) : (
                            <div className="h-7 w-7 rounded-full bg-zinc-800 text-xs flex justify-center items-center">
                                {user?.given_name?.[0]}
                            </div>
                        )}

                        {user?.email && (
                            <Title
                                className="text-left max-w-[200px]"
                                size="xs"
                                text={`Logged in as ${user?.email}`}
                            />
                        )}

                        <LogoutLink>
                            <Button className="text-lg">Logout</Button>
                        </LogoutLink>
                    </div>
                ) : isLoading ? (
                    <Spinner />
                ) : (
                    <div className="flex justify-between itemc-center gap-4">
                        <LoginLink>
                            <Button className="text-lg">Login</Button>
                        </LoginLink>
                        <RegisterLink>
                            <Button variant="outline" className="text-lg">
                                Register
                            </Button>
                        </RegisterLink>
                    </div>
                )} */}

                <div className="flex justify-between items-center gap-4 min-w-[300px]">
                    {isAuthenticated ? (
                        <>
                            {user?.picture ? (
                                <Image
                                    src={user?.picture}
                                    alt="Profile picture"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            ) : (
                                <div className="h-7 w-7 rounded-full bg-zinc-800 text-xs flex justify-center items-center">
                                    {user?.given_name?.[0]}
                                </div>
                            )}

                            {user?.email && (
                                <Title
                                    className="text-left max-w-[200px]"
                                    size="xs"
                                    text={`Logged in as ${user?.email}`}
                                />
                            )}

                            <LogoutLink>
                                <Button className="text-lg">Logout</Button>
                            </LogoutLink>
                        </>
                    ) : isLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <LoginLink>
                                <Button className="text-lg">Login</Button>
                            </LoginLink>
                            <RegisterLink>
                                <Button variant="outline" className="text-lg">
                                    Register
                                </Button>
                            </RegisterLink>
                        </>
                    )}
                </div>
            </Container>
        </header>
    );
};
