import { FC } from "react";
import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

import { Container } from "./container";
import { Button } from "../ui";

import { cn } from "@/lib/utils";
import { Title } from "./title";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
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
            </Container>
        </header>
    );
};
